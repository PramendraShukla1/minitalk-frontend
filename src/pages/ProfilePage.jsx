import React, { useContext, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { UserContext } from "../Context/Context";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const ProfilePage = () => {

    const [redirect, setRedirect] = useState(null);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    //FUNCTION FOR LOGOUT 
    const userLogout =async (e)=>{
        try {
          await  axios.post('/logout')
          setUser(null)
          setRedirect("/");
        } catch (error) {
            
        }
    }


  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="lg:mt-32 p-3 w-full flex justify-center">
      <div className="lg:w-1/2 w-full border border-gray-200 h-full rounded-2xl shadow-2xl p-5">
        <div className="w-full flex justify-center">
          <VscAccount className="w-20 h-auto" />
        </div>
        <div className="w-full flex justify-center mt-3 text-xl font-serif font-semibold text-gray-700 flex-col place-content-center items-center">
          <h1>{user?.username}</h1>
          <h1>{user?.email}</h1>
        </div>
        <div className="flex gap-10 w-full mt-5">
          <div className="w-1/2 flex justify-center flex-col place-content-center items-center">
            <p className="text-xl font-serif font-semibold text-black">
              Native Language
            </p>
            <p className="text-xl font-serif font-semibold text-gray-700">
              {user?.nativeLanguage}
            </p>
          </div>
          <div className="w-1/2 flex justify-center flex-col place-content-center items-center">
            <p className="text-xl font-serif font-semibold text-black">
              Profession
            </p>
            <p className="text-xl font-serif font-semibold text-gray-700">
              {user?.profession}
            </p>
          </div>
        </div>
        <div className="flex gap-10 w-full mt-5">
          <div className="w-1/2 flex justify-center flex-col place-content-center items-center">
            <p className="text-xl font-serif font-semibold text-black text-wrap text-center">
              Preferred Language
            </p>
            <p className="text-xl font-serif font-semibold text-gray-700">
              {user?.preferredLanguage}
            </p>
          </div>
          <div className="w-1/2 flex justify-center flex-col place-content-center items-center">
            <p className="text-xl font-serif font-semibold text-black">
              Native Country
            </p>
            <p className="text-xl font-serif font-semibold text-gray-700">
              {user?.nativeCountry}
            </p>
          </div>
        </div>
        <div className="mt-5 mb-5 w-full justify-center flex">
          <button className="p-5 border rounded-2xl border-red-600 text-xl font-semibold hover:bg-red-600 hover:text-white font-serif" onClick={userLogout}>
            Log out
          </button>
        </div>

       

        
      </div>
    </div>
  );
};

export default ProfilePage;
