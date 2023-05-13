import { store } from "../../store";
import React from "react";
import { Navigate } from "react-router-dom";

const redirectToRoute = () => {
  return <Navigate to="/" />;
};

export default function callback() {
  // console.log("Hello World");
  const urlParams = new URLSearchParams(window.location.search);
  const authorizationCode = urlParams.get("code");
  const state = urlParams.get("state");

  store.init(authorizationCode, state);

  return redirectToRoute();
}
