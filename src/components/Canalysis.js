import React from 'react'
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import stuService from "../services/stu.service";
import { Bar } from "react-chartjs-2";
function Canalysis() 
{
  const [beforecmarkb, setBeforecmarkb] = useState("");
  const [beforecmarki, setBeforecmarki] = useState("");
  const [beforecmarka, setBeforecmarka] = useState("");
  const username=window.localStorage.getItem("stuusername");
  let uname = username ;
  useEffect(() => {
    
    getCbasicfun(uname);
    getCinterfun(uname);
 
  }, []);
 
  const getCbasicfun = (name) => {
    stuService
      .getCbasic(name)
      .then((res) => {
        console.log("c basic before mark"+res.data);
        setBeforecmarkb(res.data);
})
      .catch((error) => {
        console.log(error);
      });
  }; 
  getCbasicfun(uname);
  
  const getCinterfun = (name) => {
    stuService
      .getCinter(name)
      .then((res) => {
        console.log(" c inter before mark"+res.data);
        setBeforecmarki(res.data);
})
      .catch((error) => {
        console.log(error);
      });
  }; 
  
  getCinterfun(uname);


  const getCadvfun = (name) => {
    stuService
      .getCadv(name)
      .then((res) => {
        console.log(" c inter before mark"+res.data);
        setBeforecmarka(res.data);
})
      .catch((error) => {
        console.log(error);
      });
  }; 
  
  getCadvfun(uname);


  const data = {
    labels: ['Basic','Intermediate','Advanced'],
  
    datasets: [
      {
        axis:'y',
        label: "Student Report",
        data: [beforecmarkb,beforecmarki,beforecmarka],
        backgroundColor: ["rgb(255, 99, 132)",
        'rgba(255, 159, 64, 200)',
        'rgba(255, 205, 86, 200)',
        'rgba(75, 192, 192, 200)',
        'rgba(54, 162, 235, 200)',],
        borderColor: "rgb(255, 99, 132)",

      },
    ],
  };



  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Sidebar />
         
          </div>
          <div className="col">
          <div className="px-3">

          {/* <button
          id="language-button"
          className="language-button-dark"
          style={{ marginLeft: ".5rem", marginRight: ".10rem" }}
        >
          <select
            value={language}
            onChange={(e) => {

              setLanguage(e.target.value);
              setBas(stubs[e.target.value]);
              setLanguageIcon(`./resources/${language}.png`);
            }}
          >
           <option value={"cpp"}>C </option>
            <option value={"python"}>Python</option>
            <option value={"cpp"}>C++ </option>
          </select>
        </button> */}


            <div className="container-fluid">
              <div className="row g-3 my-3">
                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{beforecmarkb}</h3>

                      <p className="fs-5">Basic</p>
                    </div>
                    <i class="fas fa-users  fa-lg"></i>
                  </div>
                </div>

                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{beforecmarki}</h3>
                      <p className="fs-5">Intermediate</p>
                    </div>

                    <i class="fas fa-chalkboard-teacher  fa-lg"></i>
                  </div>
                </div>

                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{beforecmarka}</h3>
                      <p className="fs-5">advanced</p>
                    </div>
                    <i className="bi-file-earmark-code fa-lg"></i>
                  </div>
                </div>
              </div>
            </div>

            <div style ={{marginLeft:"35%" }}className="col-md-4 bg-white" > 
            <Bar data={data} width={"1500%"} height={"1000%"} /> </div>

            </div>
            </div>
          </div>
          </div>
  )
}

export default Canalysis;