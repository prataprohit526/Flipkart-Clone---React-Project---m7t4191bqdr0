import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "./Authcontext";

const PrivateRoutes = ({ children, link = "" }) => {
  const { correct } = useContext(Authcontext);
  if (!correct) {
    return <Navigate to={`/${link}`} />;
  }
  return <>{children}</>;
};

export default PrivateRoutes;
