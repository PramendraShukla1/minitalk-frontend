import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FcEmptyTrash } from "react-icons/fc";

const MarksPage = () => {
    const {id} = useParams()
    const [userId, setUserId] = useState(id);
    const [testName, setTestName] = useState('')
    const [marksData, setMarksData] = useState(null);

    useEffect(() => {
        const fetchMarksData = async () => {
          try {
            const response = await axios.post('/calculate-english-marks', { userId, testName });
            setMarksData(response.data);
          } catch (error) {
            console.error('Error fetching marks data:', error);
          }
        };
        fetchMarksData();
    }, [userId, testName]);




  

  return (
    <div className='mt-10 w-full flex justify-center h-auto p-3'>
<div className='lg:w-1/2 w-full  border rounded-2xl border-gray-300 shadow-xl flex justify-center flex-col place-content-center p-5'>
    <div className='flex justify-center mt-5 mb-10'>
    <h1 className='text-4xl font-serif font-semibold '>Please Write UserId and Select Test Name Below</h1>
    </div>
  
<form className='w-full flex justify-center flex-col items-center gap-5'>
    <div className='flex flex-col gap-5 justify-center place-content-center items-center w-1/2'>
        <label htmlFor="userId" className='w-full font-semibold '>UserId
    <input type="text" id='userId' name='userId' className='border border-gray-400 w-full rounded-lg p-3' placeholder='UserId' value={userId} disabled onChange={(e)=>setUserId(e.target.value)}/></label>
    <div className="flex gap-4 items-center w-full flex-row">
            
              <label
                htmlFor="profession"
                
                
                className="border border-gray-400 p-3 w-full outline-none rounded-xl"
              >
                <select
                  name="profession"
                  id="profession"
                  className=" w-full outline-none rounded-xl"
                  required
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                >
                  <option value="Select">Select Test Name</option>
                  <option value="English Language Test">English Language Test</option>
                  {/* <option value="Teacher">French Language Test</option>
                  <option value="Academic">German Language Test</option>
                  <option value="Interested in Language">
                  Japanese Language Test
                  </option>
                  <option value="Interested in Language">
                  Italian Language Test
                  </option>
                  <option value="Interested in Language">
                  Spanish Language Test
                  </option>
                  <option value="Interested in Language">
                  Portuguese Language Test
                  </option>
                  <option value="Interested in Language">
                  Dutch Language Test
                  </option> */}
                </select>
              </label>
            </div>
  
    </div>


    <div className='h-auto'>
{!marksData?(<div className='flex flex-col items-center'>
    <FcEmptyTrash className='w-56 h-auto'/>
    <p className='text-2xl font-semibold '>Please Select Any Subject To See Score</p>
</div>):(
    <div className='w-full border p-5 border-gray-200 rounded-xl shadow-xl'>
        <div className='text-xl font-semibold text-gray-700'>
            <p>Total Questions : {marksData.totalMarks}</p>
            <p>Correct Answers : {marksData.correctAnswers}</p>
            <p>Obtained Marks : {marksData.correctAnswers}</p>
            <p>Total Percentage : {marksData.percentage}</p>
        </div>
    </div>
)}
    </div>
</form>
</div>
    </div>
  )
}

export default MarksPage