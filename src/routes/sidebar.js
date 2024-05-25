import {
    FiGrid,
    FiUsers,
    FiUser,
    FiCompass,
    FiSettings,
    FiSlack,
    FiGlobe,
    FiTarget,
  } from "react-icons/fi";
  
  const sidebar = [
    {
        path: "/dashboard", // the url
        icon: FiGrid, // icon
        name: "Dashboard", // name that appear in Sidebar
      },
    {
      path: "/summary", // the url
      icon: FiGrid, // icon
      name: "Summary", // name that appear in Sidebar
    },
    {
      path: "/transactions", // the url 
      icon: FiSlack, 
      name: "Transactions", // name that appear in
    },
    {
        path: "/refunds", // the url 
        icon: FiSlack, 
        name: "Refunds", // name that appear in
      },
      {
        path: "/statements", // the url 
        icon: FiCompass, 
        name: "Statements", // name that appear in
      },
      {
        path: "/investments", // the url 
        icon: FiSlack, 
        name: "Investments", // name that appear in
      },
      {
        path: "/charges", // the url 
        icon: FiCompass, 
        name: "Charges & Rates", // name that appear in
      },
      {
        path: "/complaints", // the url 
        icon: FiSlack, 
        name: "Complaints", // name that appear in
      },
  ];
  
  export default sidebar;
  