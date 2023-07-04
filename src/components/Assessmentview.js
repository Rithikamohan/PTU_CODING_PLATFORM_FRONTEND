import React from 'react'
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import facService from "../Fservices/fac.service";
import stuService from '../services/stu.service';
import Card from "react-bootstrap/Card";

const Assessmentview= () => 
{
  const stuname=window.localStorage.getItem("stuusername");
  const [empList, setEmpList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  let facultyname, type;
  const [facname, setfacname] = useState();
  const [hasAssessment, setHasAssessment] = useState(false);
  useEffect(() => {
    getStudetail(stuname);
}, []);
   
  const getStudetail = (stuname) => {
    stuService
      .getStudetail(stuname)
      .then((res) => {
      console.log("Stu detail",res.data);
        setEmpList(res.data);
         facultyname=res.data.faculty;
      console.log(facultyname)
        setfacname(facultyname);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if(facname){
      console.log("inside fuseeff");
    Viewassessment(facname);
    }
}, [facname]);
  const Viewassessment = (facname) => {
    facService
      .Viewassessment(facname)
      .then((res) => {
        console.log("question",res.data);
        setQuestionList(res.data);
        type=res.data.codetype;
        console.log(type);
        if (res.data) {
          setHasAssessment(true);
        } else {
          setHasAssessment(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Sidebar />
          </div>
          <div className="col">
          <div className="px-3">

          {hasAssessment ? (
          <MDBCard style={{ marginLeft: '350px',marginTop: '50px',marginRight: '350px'}} alignment='center'>
      <MDBCardHeader style={{ fontSize: '30px' }}><b>Assessment</b></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Assessment given with the <b>{questionList.codetype}</b> type in C language.</MDBCardTitle>
        <MDBCardText>Total Points : 20 </MDBCardText>
        <Link to={
                    {
                    pathname:"editor",
                    state:{
                        mode:'assessment',
                        question: questionList.question,
                        testcases: questionList.testcases,
                        alang:questionList.lang
                    }
                }} className="nav-link">
                  <h4>Start Assessment</h4>
                  </Link>
      </MDBCardBody>
      <MDBCardFooter>Not completed</MDBCardFooter>
    </MDBCard>
     ) : (
      // <div style={{ marginLeft: '500px', marginTop: '100px', marginRight: '500px' }}>
      //   <h4>No assessment assigned</h4>
//</div>
<Card style={{ width: "22rem", marginLeft:"500px", marginTop: "100px" }}>
        <Card.Body>
          <Card.Title style={{ color: "Red", textAlign:"center" }}>No Assessment Available</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            
          </Card.Subtitle>
          <Card.Text>
            You will get notified when the assessment is posted in through your mail.
          </Card.Text>
         
        </Card.Body>
      </Card>

)}
    </div>
</div>
</div>
</div>
  )
}

export default Assessmentview;