import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

const Layout = () => {
  let location = useLocation();

  const isOnline = navigator.onLine;  
  return (
    <>
    {!isOnline && (
        <div className="flex justify-center bg-red-600 text-white">
          You are in offline mode!{" "}
        </div>
      )}
    <div>Layout</div>
    </>
  )
}

export default Layout