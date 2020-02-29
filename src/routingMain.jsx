import React from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Main from "./main";
import Model from "./components/model";

const RoutingMain = () => {
  return (
    <>
      <Route to="/HouseName" component={Model} />
      <Route to="/" component={Main} />
    </>
  );
};

export default RoutingMain;
