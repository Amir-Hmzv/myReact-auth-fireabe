import { Stack } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import AuthContext from "./context/AuthContext";
import Account from "./pages/Account";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <AuthContext >
      <Layout>
        <Routes>
          <Route index element={<Home />} path="/" />
          <Route element={<Login />} path="/signin" />
          <Route element={<Register />} path="/signup" />
          <Route element={<Account />} path="/account" />

        </Routes>
      </Layout>
    </AuthContext>
  );
};

export default App;
