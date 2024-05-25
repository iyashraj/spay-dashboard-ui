import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SpayLogo from "./assets/img/spaylogo.png";
// import { auth } from "./firebase.config";
import { auth } from "./firebase/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
// import { toast, Toaster } from "react-hot-toast";

const Demo = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        // console.log(res);
        // setUser(res.user);
        localStorage.setItem("user", res.user)
        setTimeout(()=> {
          setLoading(false);
          // Redirect()
          history.replace("/");
        },500)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center h-screen">
      <div>
        {/* <Toaster toastOptions={{ duration: 4000 }} /> */}
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <div className="w-full flex flex-col justify-center items-center">
              <img className="w-[50%]" src={SpayLogo} alt="spay_logo" />
            </div>
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center">
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center">
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  // onClick={()=> history.replace("/")}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
            <div className="w-full flex flex-col justify-center align-middle mt-[25%]">
              <p className="text-[17px] m-[5px 0]">Download Spayindia App Or Scan QR</p>
              <div className="flex w-full gap-1">
                <a
                  className="w-[80%]"
                  href="https://play.google.com/store/apps/details?id=com.spayindia.app"
                  target="_blank">
                  <img
                    className="w-full"
                    src={"https://spayindia.in/images/gplay.png"}
                    alt="spay_logo"
                  />
                </a>
                <img
                  className="w-[22%]"
                  src={"	https://spayindia.in/images/play_qr.png"}
                  alt="spay_logo"
                />
              </div>
              <span className="mt-[3%]">Copyright © {new Date().getFullYear()} Trademark Registered spayindia</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
