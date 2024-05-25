import React, { useContext, useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import SpayLogo from '../../assets/img/spaylogo.png'

//internal import
// import sidebar from "../../routes/routes";
import SidebarSubMenu from "./SidebarSubMenu";
import sidebar from "../../routes/sidebar";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const SidebarContent = () => {
  const history = useHistory();
  const handleLogOut = () => {
    history.push("/login");
    localStorage.removeItem("user");
  };

  {
    console.log(sidebar, "sidd");
  }
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
    <img className="w-[60%] pl-[8%]" src={SpayLogo} alt="spay_logo"/>

      <ul className="mt-8">
        {sidebar.map((route) =>
          route.routes ? (
            <SidebarSubMenu route={route} key={route.name} />
          ) : (
            <li className="relative" key={route.name}>
              <NavLink
                exact
                to={route.path}
                target={`${route?.outside ? "_blank" : "_self"}`}
                className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-700 dark:hover:text-gray-200"
                // activeClassName="text-emerald-500 dark:text-gray-100"
                activeStyle={{
                  color: "#0d9e6d",
                }}
                rel="noreferrer">
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"></span>
                </Route>
                <route.icon className="w-5 h-5" aria-hidden="true" />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <span className="lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block">
        <button onClick={handleLogOut} size="large" className="w-full">
          <span className="flex items-center">
            <IoLogOutOutline className="mr-3 text-lg" />
            <span className="text-sm">Log Out</span>
          </span>
        </button>
      </span>
    </div>
  );
};

export default SidebarContent;
