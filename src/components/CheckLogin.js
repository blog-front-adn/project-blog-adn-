import React from "react";
import { useHistory } from "react-router-dom";

export default function CheckLogin() {
  const history = useHistory();
  const data = localStorage.getItem("login");

  return <div>{!data ? history.push("/") : ""}</div>;
}
