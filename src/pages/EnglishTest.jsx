import React, { useContext, useEffect, useState } from "react";
import BannerComp from "../components/BannerComp";
import { UserContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const EnglishTest = () => {
  const [startTest, setStartTest] = useState(true);
  const [checkbox, setCheckBox] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [testName, setTestName] = useState('English Language Test')

  const handleRadioChange = (event) => {
    const { name, value } = event.target;

    const existingAnswerIndex = selectedAnswers.findIndex(
      (answer) => answer.id === name
    );

    if (existingAnswerIndex !== -1) {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[existingAnswerIndex] = { id: name, value };
      setSelectedAnswers(updatedAnswers);
    } else {
      setSelectedAnswers((prevAnswers) => [
        ...prevAnswers,
        { id: name, value },
      ]);
    }
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const formattedAnswers = selectedAnswers.map(({ id, value }) => ({
        questionId: id,
        answer: value,
      }));
  const userId = user._id
      const response = await axios.post('/submit-answers', {
        answers: formattedAnswers,
        user:userId,
        testName:testName,
      });
      console.log(response)
      toast.success("Test submitted successfully please go to see marks page to check results", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      //console.log('Response from the backend:', response.data);
    } catch (error) {
      console.log('Test submission failed please retry!', error);
      toast.error("Please accept terms and condition to continue", {
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

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("/english-question-schema");
        setQuestions(response.data);
      } catch (error) {
        console.log("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);


  const onStart = (e) => {
    e.preventDefault();
    if (checkbox == true) {
      setStartTest(false);
    } else {
      toast.error("Please accept terms and condition to continue", {
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

  const { user } = useContext(UserContext);
  const navigate = useNavigate();









  return (
    <div className="w-full flex justify-center flex-col items-center">
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
      <BannerComp />
      {!user ? (
        <div className="flex justify-center mb-10 lg:p-0 p-5 mt-10 lg:mt-0">
          <h1 className="text-4xl font-serif font-semibold leading-snug ">
            Welcome to <span className="text-orange-700">English Language</span>{" "}
            Communication Game
          </h1>
        </div>
      ) : null}
      {user ? (
        <div className="w-4/5 border border-gray-300  h-full shadow-2xl rounded-2xl lg:mt-0 mt-20">
          <div className="w-full p-5">
            <div className="flex justify-center">
              <h1 className="lg:text-4xl text-2xl font-serif font-semibold leading-snug underline">
                Welcome to English Language Communication Game
              </h1>
            </div>
            {startTest ? (
              <div className="w-full border border-gray-300 h-full lg:mt-5 mt-10 rounded-2xl">
                <div className="flex justify-center flex-col text-center mt-5">
                  <h1 className="text-4xl font-serif font-semibold leading-snug text-[#2e3b7b]">
                    Instructions
                  </h1>
                </div>
                <div className="p-5 flex justify-center list-disc">
                  <ul className="list-disc lg:text-xl text-lg text-gray-700 lg:leading-[50px] leading-[30px] text-wrap p-5 flex flex-col gap-5 lg:gap-0">
                    <li>
                      Participants must be at least 18 years old to register for
                      the language proficiency test.
                    </li>
                    <li>
                      Registration requires accurate and complete personal
                      information, including name, contact details, and
                      identification proof.
                    </li>
                    <li>
                      Participants are required to have access to a stable
                      internet connection, a compatible device, and any
                      specified software or browser for the language proficiency
                      test.
                    </li>
                    <li>
                      Unauthorized materials, aids, or assistance during the
                      test are strictly prohibited, and any violation may result
                      in disqualification.
                    </li>
                    <li>
                      Participants must adhere to the rules and instructions
                      provided before and during the language proficiency test.
                    </li>
                    <li>
                      Test results will be communicated to participants within a
                      specified timeframe, and no requests for expedited results
                      will be entertained.
                    </li>
                  </ul>
                </div>
                <div className="justify-center flex gap-5">
                  <label htmlFor="terms&conditions"></label>
                  <input
                    type="checkbox"
                    id="terms&conditions"
                    name="terms&conditions"
                    className="w-6 outline-none"
                    checked={checkbox}
                    onChange={() => setCheckBox(!checkbox)}
                  />
                  <p className="lg:text-xl text-lg text-gray-700 lg:leading-[50px] leading-[30px]">
                    I agree to abide by and accept all the terms and conditions
                    outlined for the language proficiency test.
                  </p>
                </div>
                <div
                  className="mt-10 flex justify-center lg:gap-10 gap-5 lg:flex-row flex-col mb-10 items-center"
                  onClick={onStart}
                >
                  <button className="border lg:p-5 p-3 rounded-2xl lg:w-40 w-1/2 bg-green-500 hover:bg-green-800 font-semibold text-white font-serif cursor-pointer ">
                    Start Test
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full border border-gray-300 h-auto mt-5 rounded-2xl">
                <div className="flex justify-start flex-col p-5">
                  {questions.map((question, index) => (
                    <form key={index}>
                      {" "}
                      <div className="mt-10">
                        <h1 className="lg:text-xl text-md font-semibold font-serif text-gray-800">
                          {question.question}
                        </h1>
                      </div>
                      <div className="w-full mt-5">
                        <div className="flex justify-start lg:gap-5 gap-2 items-center place-content-center">
                          <input
                            type="radio"
                            name={question._id}
                            id={`${question._id}-optionOne`}
                            className="h-auto w-4"
                            value={question.optionOne}
                            onChange={handleRadioChange}
                          />

                          <label
                            for={question._id}
                            className="lg:text-xl text-md font-semibold font-serif text-gray-800"
                          >
                            {question.optionOne}
                          </label>
                        </div>

                        <div className="flex justify-start lg:gap-5 gap-2 items-center place-content-center">
                          <input
                            type="radio"
                            name={question._id}
                            id={`${question._id}-optionTwo`}
                            className="h-auto w-4"
                            value={question.optionTwo}
                            onChange={handleRadioChange}
                          />

                          <label
                            for="componentDidUpdate"
                            className="lg:text-xl text-md font-semibold font-serif text-gray-800"
                          >
                            {question.optionTwo}
                          </label>
                        </div>

                        <div className="flex justify-start lg:gap-5 gap-2 items-center place-content-center">
                          <input
                            type="radio"
                            name={question._id}
                            id={`${question._id}-optionThree`}
                            className="h-auto w-4"
                            value={question.optionThree}
                            onChange={handleRadioChange}
                          />

                          <label
                            for="componentWillMount"
                            className="lg:text-xl text-md font-semibold font-serif text-gray-800"
                          >
                            {question.optionThree}
                          </label>
                        </div>

                        <div className="flex justify-start lg:gap-5 gap-2 items-center place-content-center">
                          <input
                            type="radio"
                            name={question._id}
                            id={`${question._id}-optionFour`}
                            className="h-auto w-4"
                            value={question.optionFour}
                            onChange={handleRadioChange}
                          />

                          <label
                            for="componentWillUpdate"
                            className="lg:text-xl text-md font-semibold font-serif text-gray-800"
                          >
                            {question.optionFour}
                          </label>
                        </div>
                      </div>
                    </form>
                  ))}
                  <div className="mt-5 w-full flex justify-center">
                    <button
                      className="lg:w-1/6 w-full border lg:p-5 p-3 rounded-2xl bg-green-400 cursor-pointer lg:text-xl text-md font-semibold text-white hover:bg-green-800"
                      onClick={handleSubmission}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-4/5 border border-gray-300  h-auto shadow-2xl rounded-2xl ">
          <div className="w-full lg:p-5 p-2 mb-10">
            <div className="flex justify-center flex-col items-center">
              <h1 className="text-4xl font-serif font-semibold leading-snug underline blur-lg">
                Welcome to English Language Communication Game
              </h1>
              <div className="mt-20 flex justify-center border lg:p-16 p-5 border-gray-400 rounded-xl flex-col">
                <h1 className="text-2xl font-serif font-semibold leading-snug  lg:text-4xl">
                  Please Login To Continue
                </h1>
                <div
                  className="flex justify-center mt-7 border lg:p-5 p-2 text-xl bg-green-500 cursor-pointer font-semibold text-white hover:bg-green-700 rounded-2xl font-serif"
                  onClick={() => navigate("/login")}
                >
                  <button>Login</button>
                </div>
                <div className="mt-3 w-full">
                  <h1 className="text-red-600 text-sm">
                    Note: If you are already logged in please refresh page and
                    continue solving quizzes
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnglishTest;
