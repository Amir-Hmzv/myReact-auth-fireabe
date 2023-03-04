import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HideOnScroll from "./HideOnScroll";
import { Link } from "react-router-dom";
import { userAuth } from "../../context/AuthContext";

export default function HideAppBar(props) {
  const { logout, user } = userAuth();

  const logOut = async () => {
    await logout();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="">
          <div className="flex justify-between p-5  ">
            <div className="flex items-center">
              <h1>
                <Link className="cursor-pointer font-bold" to={"/"}>
                  Home
                </Link>
              </h1>
            </div>
            <ul className=" flex space-x-4 justify-end revers  ">
              {user ? (
                <>
                  {" "}
                  <Link
                    onClick={logOut}
                    to={"/account"}
                    className="cursor-pointer font-bold"
                  >
                    loguot
                  </Link>
                  <Link to={"/account"} className="cursor-pointer font-bold">
                    Accoutnt
                  </Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link to={"/signup"} className="cursor-pointer font-bold">
                    Register
                  </Link>
                  <Link to={"/signin"} className="cursor-pointer font-bold">
                    Login
                  </Link>
                </>
              )}
            </ul>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
