import { async } from "@firebase/util";
import React, { useState } from "react";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signin } = userAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(username, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div  className="my-2 flex justify-center mt-[15%] w-full items-center">
      <div className="border  md:w-[60%]   lg:w-[60%] xl:w-[40%] 2xl:w-[30%]   w-[90%] py-10   bg-blue-500 rounded-2xl ">
        <h1 className="text-3xl mt-5  mb-8 font-bold text-center text-white">
          Login
        </h1>
        <form onSubmit={handleSubmit} action="" className=" flex flex-col">
          <div className="space-y-8">
            <div className="text-center">
              <input
                className="border  w-[80%]  md:w-[60%]  p-2 rounded-md outline-blue-400"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
              />
            </div>
            <div className="text-center">
              <input
                className="border  w-[80%]  md:w-[60%]  p-2 rounded-md outline-blue-400"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="p-2 bg-green-400  text-white w-[80%]  md:w-[60%]    rounded-md">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
