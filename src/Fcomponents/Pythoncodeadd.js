import React from 'react'
import { useState } from 'react';
import * as Yup from 'yup';
import empService from "../Codeproblems/code.service";
const Pythoncodeadd = () => {

    const initialValues = {
        codetype: '',
        question: '',
        testcase: '',
      };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object().shape({
        codetype: Yup.string().required('Code type is required'),
        question: Yup.string().required('Question is required'),
        testcase: Yup.string().required('Test case is required'),
      });
      
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
        empService
        .savePy(values).then((res) => {
          setValues({
            codetype: "",
            question: "",
            testcase: "",
            
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
    Code Type:</b>
    &nbsp;
    <select value={values.codetype} name="codetype" onChange={handleChange}>
    <option value="">Select an option</option>
    <option value="basic">Basic</option>
    <option value="intermediate">Intermediate</option>
    <option value="adv">Advanced</option>
  </select>
    {errors.codetype && <div>{errors.codetype}</div>}
  </label>
  <label><b>
    Question:</b> &nbsp;
    <input type="text" name="question" value={values.question} onChange={handleChange} />
    {errors.question && <div>{errors.question}</div>}
  </label>
  <label><b>
    Test Case:</b> &nbsp;
    <input type="text" name="testcase" value={values.testcase1} onChange={handleChange} />
    {errors.testcase1 && <div>{errors.testcase1}</div>}
  </label>
  <button type="submit">Submit</button>
</form>
  </div>
  </div>
  </div>
  </div>
 
)
}


export default Pythoncodeadd