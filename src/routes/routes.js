import Page404 from "../pages/Page404";
import Popup from "../pages/Popup";
import ThemeSuspense from "../theme/ThemeSuspense";

const routes = [
    {
      path: "/dashboard",
      component: ThemeSuspense,
    },
    {
      path: "/transactions",
      component: Popup,
    },
    {
      path: "/attributes",
      component: ThemeSuspense,
    },
    {
      path: "/attributes/:id",
      component: ThemeSuspense,
    },
    {
      path: "/product/:id",
      component: ThemeSuspense,
    },
    {
      path: "/categories",
      component: ThemeSuspense,
    },
    {
      path: "/languages",
      component: ThemeSuspense,
    },
    {
      path: "/currencies",
      component: ThemeSuspense,
    },
  
    {
      path: "/categories/:id",
      component: ThemeSuspense,
    },
    {
      path: "/customers",
      component: ThemeSuspense,
    },
    {
      path: "/customer-order/:id",
      component: ThemeSuspense,
    },
    {
      path: "/our-staff",
      component: ThemeSuspense,
    },
    {
      path: "/orders",
      component: ThemeSuspense,
    },
    {
      path: "/order/:id",
      component: ThemeSuspense,
    },
    {
      path: "/coupons",
      component: ThemeSuspense,
    },
    { path: "/settings", component: ThemeSuspense },
    {
      path: "/store/customization",
      component: ThemeSuspense,
    },
    {
      path: "/store/store-settings",
      component: ThemeSuspense,
    },
    {
      path: "/404",
      component: Page404,
    },
    {
      path: "/coming-soon",
      component: ThemeSuspense,
    },
    {
      path: "/edit-profile",
      component: ThemeSuspense,
    },
    {
      path: "/notifications",
      component: ThemeSuspense,
    },
  ];
  
  export default routes;
  