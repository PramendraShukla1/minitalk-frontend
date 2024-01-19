import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();

  //All the states for input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [profession, setProfession] = useState("");
  const [nativeCountry, setNativeCountry] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");

  //function for submit button
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", {
        username,
        email,
        password,
        nativeLanguage,
        profession,
        nativeCountry,
        preferredLanguage,
      });
      setUsername("");
      setEmail("");
      setPassword("");
      setNativeCountry("");
      setNativeLanguage("");
      setProfession("");
      setPreferredLanguage("");

      toast.success("Registration successful! Please login to continue", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);

      setUsername("");
      setEmail("");
      setPassword("");
      setNativeCountry("");
      setNativeLanguage("");
      setProfession("");
      setPreferredLanguage("");

      toast.error("Email is already registered with us!", {
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

  //function for reset button
  const onReset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setNativeCountry("");
    setNativeLanguage("");
    setProfession("");
    setPreferredLanguage("");
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
            Register
          </h1>
        </div>
        <form>
          <div className="flex justify-center mt-8 flex-col gap-6">
            <div className="flex gap-4 items-center w-full flex-row">
              <p className="font-semibold lg:text-lg text-md w-28">Username*</p>
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="border border-gray-400 p-3 w-full outline-none rounded-xl"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
            <div className="flex gap-4 items-center w-full flex-row">
              <p className="font-semibold lg:text-lg text-md w-28">
                Native Language*
              </p>
              <input
                type="text"
                placeholder="Native Language"
                id="nativeLanguage"
                className="border border-gray-400 p-3 w-full outline-none rounded-xl"
                required
                value={nativeLanguage}
                onChange={(e) => setNativeLanguage(e.target.value)}
              />
            </div>
            <div className="flex gap-4 items-center w-full flex-row">
              <p className="font-semibold lg:text-lg text-md w-28">
                Profession
              </p>
              <label
                htmlFor="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="border border-gray-400 p-3 w-full outline-none rounded-xl"
              >
                <select
                  name="profession"
                  id="profession"
                  className=" w-full outline-none rounded-xl"
                  required
                >
                  <option value="Select">Select Profession</option>
                  <option value="Student or Learner">Student or Learner</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Academic">Academic</option>
                  <option value="Interested in Language">
                    Interested in Language
                  </option>
                </select>
              </label>
            </div>
            <div className="flex gap-4 items-center w-full flex-row">
              <p className="font-semibold lg:text-lg text-md w-28">
              Specify Language
              </p>
              <label
                htmlFor="language"
                value={preferredLanguage}
                onChange={(e) => setPreferredLanguage(e.target.value)}
                className="border border-gray-400 p-3 w-full outline-none rounded-xl"
              >
                <select
                  name="language"
                  id="language"
                  className=" w-full outline-none rounded-xl "
                  required
                >
                  <option value="Select">Select Language</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Italian">Italian</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="Dutch">Dutch</option>
                </select>
              </label>
            </div>
            <div className="flex gap-4 items-center w-full flex-row">
              <p className="font-semibold lg:text-lg text-md w-28">
                Home Country*
              </p>
              <input
                type="text"
                placeholder="Home Country"
                id="homeCountry"
                className="border border-gray-400 p-3 w-full outline-none rounded-xl"
                required
                value={nativeCountry}
                onChange={(e) => setNativeCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-10 flex justify-center lg:gap-10 gap-5 lg:flex-row flex-col">
            <button
              className="border lg:p-5 p-3 rounded-2xl lg:w-40 w-full bg-green-500 hover:bg-green-800 font-semibold text-white font-serif cursor-pointer "
              onClick={onSubmit}
            >
              Register
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
              onClick={() => navigate("/login")}
            >
              Already have an account? Login Here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
