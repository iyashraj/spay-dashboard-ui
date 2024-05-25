import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/login/PrivateRoutes";

const Login = lazy(() => import("./pages/login"));
const Layout = lazy(() => import("./layout/Layout"));
const DemoLogin = lazy(()=> import("./demo"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" component={DemoLogin} />
          <PrivateRoute>
            <Route path="/" component={Layout} />
          </PrivateRoute>
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
