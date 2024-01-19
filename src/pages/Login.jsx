import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  //State for email, password and redirection
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  //Submit function for form
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/login", {
        email,
        password,
      });
     
      setRedirect(true);
    } catch (error) {
      console.log(error);
      toast.error("Invalid Email or Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

//If email and password are correct then state will change and user will direct to homepage
  if (redirect) {
    return <Navigate to={"/"} />;
  }

//Function for reset button:It will reset the form
  const onReset = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full flex justify-center h-auto mt-10">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      <div className="lg:border lg:border-gray-300 lg:w-1/3 w-full lg:p-10 p-5 rounded-xl lg:shadow-xl">
        <div className="flex justify-center flex-col place-content-center items-center gap-10">
          <img src={logo} alt="" className="w-52" />
          <h1 className="text-3xl font-semibold font-serif leading-snug underline">
            Login
          </h1>
        </div>
        <form>
          <div className="flex justify-center mt-5 flex-col gap-6">
            <div className="flex gap-4 items-center w-full flex-row">
              <p className="font-semibold lg:text-lg text-md w-28">Email*</p>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="border border-gray-400 p-3 w-full outline-none rounded-xl"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-4 items-center w-full flex-row">
              <p className="font-semibold lg:text-lg text-md w-28">Password*</p>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="border border-gray-400 p-3 w-full outline-none rounded-xl"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-10 flex justify-center lg:gap-10 gap-5 lg:flex-row flex-col">
            <button
              className="border lg:p-5 p-3 rounded-2xl lg:w-40 w-full bg-green-500 hover:bg-green-800 font-semibold text-white font-serif cursor-pointer "
              onClick={onSubmit}
            >
              Login
            </button>
            <button
              className="border lg:p-5 p-3 rounded-2xl lg:w-40 w-full bg-red-400 hover:bg-red-800 font-semibold text-white font-serif cursor-pointer "
              onClick={onReset}
            >
              Reset
            </button>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              className="font-semibold cursor-pointer hover:text-blue-800"
              onClick={() => navigate("/register")}
            >
              Don't have an account? Register Here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
