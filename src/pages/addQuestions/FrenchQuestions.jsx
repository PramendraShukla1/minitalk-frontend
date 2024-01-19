import React, { useContext, useState } from 'react'
import heroVideo from "../../assets/heroVideo.mp4";
import france from "../../assets/france.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const FrenchQuestions = () => {

    const [question, setQuestion] = useState("");
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [optionThree, setOptionThree] = useState("");
    const [optionFour, setOptionFour] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const {user} = useContext(UserContext)
const navigate = useNavigate()

const resetForm = (e) =>{
    e.preventDefault();
    setQuestion('')
    setOptionFour('')
    setOptionThree('')
    setOptionTwo('')
    setOptionOne('')
    setCorrectAnswer('')
  }

  const submitQuestion = (e) => {
    e.preventDefault();
    try {
        axios.post('/french-question-schema',{
            question,
            optionOne: optionOne.toUpperCase(),
            optionTwo: optionTwo.toUpperCase(),
            optionThree: optionThree.toUpperCase(),
            optionFour: optionFour.toUpperCase(),
            correctAnswer: correctAnswer.toUpperCase(),
        }) 
        setQuestion('')
    setOptionFour('')
    setOptionThree('')
    setOptionTwo('')
    setOptionOne('')
    setCorrectAnswer('')
        toast.success("Question submitted successfully!", {
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
        console.log(error)
        toast.error("Something went wrong!", {
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
 <div className="w-full flex justify-center lg:flex-row flex-col lg:mb-28 mb-0 lg:mt-32 mt-32">
   {/* Div Left */}
   <div className="lg:w-1/2 w-full flex justify-center">
     <video
       src={heroVideo}
       loop
       autoPlay
       muted
       type="video/mp4"
       className="lg:w-1/2 w-full"
     ></video>
   </div>

   {/* Div Right */}
   <div className="lg:w-1/2 w-full">
     <h1 className="lg:text-8xl text-6xl font-semibold font-sans lg:mt-0 mt-10 lg:p-0 p-5 text-[#2e3b7b] text-center">
       Welcome Tutor Please Add Questions Here
     </h1>
     {/* Image div */}
     <div className="flex flex-wrap w-full  justify-center p-5 lg:mt-10 mt-5 ">
       <img src={france} alt="" className="lg:w-1/2 w-1/2 shadow-xl" />
     </div>
   </div>
 </div>
 {/* Popper */}
 <div className="w-full flex justify-center h-auto">
   <div className="w-4/5 border border-gray-200 rounded-xl shadow-2xl p-5">
     <div className="flex justify-center mt-10">
       <h1 className="lg:text-6xl text-4xl text-center font-serif font-semibold">
         We Are Taking Your Questions
       </h1>
     </div>
     <div className="mt-10 flex justify-center mb-10">
       <p className="w-3/4 text-center">
         We collect questions from each user across various languages and
         blend them into our question bank, ensuring that users encounter
         fresh and diverse questions with every interaction.please enter
         questions for French test only.
       </p>
     </div>
    {user ?(<div className="w-full flex justify-center">
       <div className="w-3/4 border p-5 border-gray-300 rounded-2xl">
         <form >
           <div>
             <label>Question 1</label>
             <input
               type="text"
               name="question1"
               className="w-full p-3 border  outline-none border-gray-700 mt-3 rounded-xl placeholder:text-gray-700 placeholder:text-sm lg:placeholder:text-xl"
               placeholder="Please Enter Your Question"
               required
               value={question}
               onChange={(e) => setQuestion(e.target.value)}
             />
           </div>
           <div className="w-full mt-5 flex gap-5">
             {/* Div Left */}
             <div className="w-1/2 ">
               <div>
                 <input
                   type="text"
                   className="p-3 border  outline-none border-gray-700 mt-3 rounded-xl w-full placeholder:text-gray-700 placeholder:text-sm lg:placeholder:text-xl"
                   placeholder="Option 1"
                   required
                   value={optionOne}
                   onChange={(e) => setOptionOne(e.target.value)}
                 />
               </div>
               <div>
                 <input
                   type="text"
                   className="p-3 border  outline-none border-gray-700 mt-3 rounded-xl w-full placeholder:text-gray-700 placeholder:text-sm lg:placeholder:text-xl"
                   placeholder="Option 2"
                   required
                   value={optionTwo}
                   onChange={(e) => setOptionTwo(e.target.value)}
                 />
               </div>
             </div>

             {/* Div Right */}
             <div className="w-1/2 ">
               <div>
                 <label htmlFor="">
                   <input
                     type="text"
                     className="p-3 border  outline-none border-gray-700 mt-3 rounded-xl w-full placeholder:text-gray-700 placeholder:text-sm lg:placeholder:text-xl"
                     placeholder="Option 3"
                     required
                     value={optionThree}
                     onChange={(e) => setOptionThree(e.target.value)}
                   />
                 </label>
               </div>
               <div>
                 <label htmlFor="">
                   <input
                     type="text"
                     className="p-3 border  outline-none border-gray-700 mt-3 rounded-xl w-full placeholder:text-gray-700 placeholder:text-sm lg:placeholder:text-xl"
                     placeholder="Option 4"
                     required
                     value={optionFour}
                     onChange={(e) => setOptionFour(e.target.value)}
                   />
                 </label>
               </div>
             </div>
           </div>
           <div>
             <input
               type="text"
               name="question1"
               className="w-full p-3 border  outline-none border-gray-700 mt-3 rounded-xl placeholder:text-gray-700 placeholder:text-sm lg:placeholder:text-xl"
               placeholder="Please Enter Correct Answer"
               required
               value={correctAnswer}
               onChange={(e) => setCorrectAnswer(e.target.value)}
             />
           </div>
           <div className="flex justify-center mt-10 gap-10">
             <button className="lg:p-5 p-3 border rounded-2xl bg-blue-300 font-semibold font-serif hover:bg-blue-500 hover:text-white w-1/2 lg:text-xl text-md" onClick={submitQuestion}>
               Submit
             </button>
             <button className="lg:p-5 p-3 border rounded-2xl bg-deep-purple-200 font-semibold font-serif hover:bg-red-700 hover:text-white w-1/2 lg:text-xl text-md" onClick={resetForm}>
               Reset
             </button>
           </div>
         </form>
       </div>
     </div>):(
       <div className="w-full justify-center flex">
        <div className="w-4/5  h-auto  rounded-2xl ">
        <div className="w-full lg:p-5 p-2 mb-10">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-4xl font-serif font-semibold leading-snug underline blur-lg">
              Welcome to English Language Communication Game
            </h1>
          <div className="mt-20 flex justify-center border lg:p-16 p-5 border-gray-400 rounded-xl shadow-xl flex-col">
          <h1 className="text-2xl font-serif font-semibold leading-snug  lg:text-4xl">Please Login To Continue</h1>
          <div className="flex justify-center mt-7 border lg:p-5 p-2 text-xl bg-green-500 cursor-pointer font-semibold text-white hover:bg-green-700 rounded-2xl font-serif" onClick={()=>navigate('/login')}>
          <button >Login</button>
          </div>
          <div className="mt-3 w-full">
              <h1 className="text-red-600 text-sm">Note: If you are already logged in please refresh page and continue solving quizzes</h1>
          </div>
         
          </div>
          </div>
        </div>
      </div>
      </div>
     )}
   </div>
 </div>
</div>
  )
}

export default FrenchQuestions