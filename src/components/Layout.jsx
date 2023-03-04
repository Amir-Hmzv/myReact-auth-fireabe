import React from "react";
import DrawerAppBar from "./Appbar/DrawerAppBar";
export const Layout = ({ children }) => {
  return (
    <>
      <DrawerAppBar />
      {children}
    </>
  );
};
