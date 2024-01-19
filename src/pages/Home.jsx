import React, { useEffect } from "react";
import BannerComp from "../components/BannerComp";
import Features from "../components/Features";
import PracticeTests from "../components/PracticeTests";


const Home = () => {
  

  useEffect(() => {
    const hasRefreshed = localStorage.getItem("hasRefreshed");

    if (!hasRefreshed) {
      window.location.reload();

      localStorage.setItem("hasRefreshed", "true");
    }
  }, []);


  return (
   <div>
    <BannerComp/>
    <Features/>
    <PracticeTests/>
   </div>
  );
};

export default Home;
