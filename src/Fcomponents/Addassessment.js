import React from 'react';
import { useState } from 'react';
import facService from "../Fservices/fac.service";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Addassessment = () => {
  const uname=window.localStorage.getItem("facusername");

    const initialValues = {
        codetype: '',
        question: '',
        testcases: '',
        facultyname:uname,
        lang:'',
      };
    const [values, setValues] = useState(initialValues);
      const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
      const submitStu = (e) => 
      {
        e.preventDefault();
        facService
        .Addassessment(values).then((res) => {
          toast.success('Mail sent to students successfully!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 7000,
          });
          setValues({
            codetype: "",
            question: "",
            testcases: "",
            facultyname:"",
            lang:"",
          });
        })
        .catch((error) => {
          console.log(error);
        });
      };

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">    
      <div style={{ paddingLeft: '20px', margin: '10px 10px 20px 20px' }}  className="form-container  text-black ">
        <form onSubmit={(e) => submitStu(e)}>
        <label><b>
        Language:</b>
        &nbsp;
        <select value={values.lang} name="lang" onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="c">C Language</option>
        <option value="cpp">C++ Language</option>
        <option value="python">Python Language</option>
      </select>
        
      </label>
      <label><b>
        Code Type:</b>
        &nbsp;
        <select value={values.codetype} name="codetype" onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="basic">Basic</option>
        <option value="intermediate">Intermediate</option>
        <option value="adv">Advanced</option>
      </select>
        
      </label>
      <label><b>
        Question:</b> &nbsp;
        <input type="text" name="question" value={values.question} onChange={handleChange} />
 
      </label>
      <label><b>
        Test Case:</b> &nbsp;
        <input type="text" name="testcases" value={values.testcases} onChange={handleChange} />
   
      </label>
      <button type="submit">Submit</button>
    </form>
    <ToastContainer />
      </div>
      </div>
      </div>
      </div>
  )
}

export default Addassessment;