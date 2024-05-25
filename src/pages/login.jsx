import React, { useContext, useState } from "react";
import Error from "../components/Error";
import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import CSButton from "../components/CSButton";
import InputComp from "../components/InputComp";
import { auth } from "../firebase/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
  const [loginActionType, setLoginActionType] = useState("generateOTP");
  const [loading, setLoading] = useState(false);
  const submitButtonText =
    loginActionType === "generateOTP" ? "Generate OTP" : "Verify OTP";
  // const submitButtonAction =
  //   loginActionType === "generateOTP" ? onOTPVerify() : onSignup();
  const errors = {};
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [user, setUser] = useState(null);

  function onCaptchVerify(e) {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup(e);
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignup(e) {
    e.preventDefault();
    setLoading(true);
    console.log("hello")
    onCaptchVerify(e);

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
        setLoading(false);
        console.log(error);
      });
  }

  function onOTPVerify(e) {
    e.preventDefault();
    setLoading(true);
    confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src={ImageLight}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src={ImageDark}
                alt="Office"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <form>
                  <InputComp
                    defaultValue={""}
                    label={"Mobile"}
                    name={"mobile"}
                    type="text"
                    autocomplete={"mobile"}
                    placeholder={"Enter mobile number"}
                    inputClass={"w-full"}
                    onChange={(e) => {
                      setOtp(e.target.value);
                      console.log(e.target.value);
                    }}
                  />
                  <Error errorName={errors.mobile} />
                  {loginActionType === "verifyOTP" && (
                    <div className="mt-2">
                      <InputComp
                        register={register}
                        defaultValue={""}
                        label={"OTP"}
                        name={"otp"}
                        type="text"
                        autocomplete={"otp"}
                        placeholder={"Enter OTP"}
                        onChange={(e) => {
                          setPh(e.target.value);
                          console.log(e.target.value);
                        }}
                      />
                      <Error errorName={errors.otp} />
                    </div>
                  )}
                  <CSButton
                    disabled={loading}
                    type="submit"
                    className={`bg-emerald-600 rounded-md mt-4 h-12 w-full`}
                    to="/dashboard"
                    buttonText={submitButtonText}
                    onClick={(e) =>
                      loginActionType === "generateOTP"
                        ? onSignup(e)
                        : onOTPVerify(e)
                    }
                  />
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
