import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Children from "./outlet/Children";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios"
import Home from "./pages/Home";
import EnglishTest from "./pages/EnglishTest";
import EnglishQuestions from "./pages/addQuestions/EnglishQuestions";
import ProfilePage from "./pages/ProfilePage";
import FrenchQuestions from "./pages/addQuestions/FrenchQuestions";
import FrenchTest from "./pages/SolveTests/FrenchTest";
import MarksPage from "./pages/MarksPage";

axios.defaults.baseURL = "https://mnitalk-backend.onrender.com";
axios.defaults.withCredentials = true;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Children/>} path="/">
          {/* Authorization Routes Starts*/}
          <Route element={<Register/>} path="/register"/>
          <Route element={<Login/>} path="/login"/>
           {/* Authorization Routes Ends*/}

          {/* Home and Profile Routes Starts */}
          <Route element={<Home/>} path="/"/>
          <Route element={<ProfilePage/>} path="/profile/:id"/>
          {/* Home and Profile Routes Ends */}

          {/* Questions Solving Routes Starts */}
          <Route element={<EnglishTest/>} path="/minitalk-english-test"/>
          <Route element={<FrenchTest/>} path="/minitalk-french-test"/>
          {/* Questions Solving Routes Ends */}

          {/* Question Addition Routes Starts */}
          <Route element = {<EnglishQuestions/>} path="/english-test-questions"/>
          <Route element={<FrenchQuestions/>} path="/french-test-questions"/>
          {/* Question Addition Routes Ends */}

          {/* Route for Viewing Marks */}
          <Route element ={<MarksPage/>} path="/language-marks/:id"/>
          {/* Route for Viewing Marks */}

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
