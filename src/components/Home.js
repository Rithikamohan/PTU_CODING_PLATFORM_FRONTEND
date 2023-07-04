import React from "react";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import empService from ".././services/stu.service";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import fac from "./graduated.png";
import {PDFDownloadLink,Page,View,Text, Image,Document, StyleSheet} from '@react-pdf/renderer';
import logo from "./logo.png";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => 
{
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
  }

  const username=window.localStorage.getItem("stuusername");
  let name = username ;
   
 // console.log(uname)
  const [cmark, setcmark] = useState("");
  const [cplusmark, setcplusmark] = useState("");
  const [pymark, setpymark] = useState("");
  const [mark, setMark] = useState();
  useEffect(() => {
    init();
getC(name);
getCplus(name);
getpy(name);
deleteEmp( name);
  }, []);
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
  }
  const [empList, setEmpList] = useState([]);
  const init = () => {
    empService
      .getAllEmp()
      .then((res) => {
        //console.log(res.data);
        for(let i=0;i<=res.data.length;i++)
        {
          let item=res.data[i];
          let uname=item.name;
        
          
        if(name === uname)
        {
          setEmpList(res.data[i]);      
        }
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const deleteEmp = (name) => {
    empService
      .getMark(name)
      .then((res) => {
        console.log(res.data);
        setMark(res.data);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }; 
  //get c mark
  const getC = (name) => {
    empService
      .getC(name)
      .then((res) => {
        // console.log("c mark in home page"+res.data);
        setcmark(res.data);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }; 

  const getCplus = (name) => {
    empService
      .getCplus(name)
      .then((res) => {
   
        setcplusmark(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }; 

  const getpy = (name) => {
    empService
      .getPy(name)
      .then((res) => {
      
        setpymark(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }; 
let totals=cmark+cplusmark+pymark;
const style= {
  colm: {
    width: 150, /* Desired width */
    height: 100 /* Desired height */
  }
  
};

const styles =StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 53,
    textAlign: 'center',
   backgroundColor: '#bfe6ff',
    paddingTop: 9,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  department: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  report: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  pdfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-50vh',
  },
 
  detailsContainer: {
    border: '1px solid black',
    padding: 10,
    width: '80%',
  },
  
  marginborder: {
    border: '5px solid black',
    padding: 10,
    paddingLeft:10,
    width: '100%',
    height:'100%'
  },
  detailText: {
    marginBottom: 5,
  },
  body:{
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title:{
    fontSize:24,
    textAlign:"center",
  },
  text:{
    margin: 12,
    fontSize:14,
    textAlign:"justify",
    fontFamily:"Times-Roman", 
  },
  image:{
    // marginVertical:15,
    // marginHorizontal: 100,
     width: 85,
     height:85,
      marginLeft: 250,
     marginBottom:10

  },
  header:{
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber:{
    position: "absolute",
    fontSize:12,
    bottom: 30,
    left :0,
    right:0,
    textAlign: 'center',
    color: "grey",
  },
  downloadButton:{
    display: 'inline-block',
  padding: '10px 20px',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  },
 
  
});

const Mydoc =() =>(
<Document>
        <Page > 
        <View style={styles.marginborder}>
        <View style={styles.container}>
        <Image style={styles.image} src={logo}/>
        <Text style={styles.heading}>PUDUCHERRY TECHNOLOGICAL UNIVERSITY</Text>
        <Text style={styles.department}>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</Text>
        <Text style={styles.report}> Student Report</Text>
        </View>
            <View style={styles.pdfContainer}>
            <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>Student Name : {empList.name}</Text>
            <Text style={styles.detailText}>Email ID : {empList.email}</Text>
            <Text style={styles.detailText}>Register Number : {empList.mobile}</Text>
            <Text style={styles.detailText}>Total Points : {totals}</Text>
            <Text style={styles.detailText}>Rank : 4</Text>
            <Text style={styles.detailText}>
            <table>
              <tr> 
                <th> Name</th>
              </tr>
              <tr>
                <td>rithika</td>
                </tr>
            </table></Text>
            <Text style={styles.detailText}>Total Code Problems Solved : 10</Text>
            
            <Text style={styles.detailText}>C Language Points : {cmark}</Text>
           
            <Text style={styles.detailText}>C++ Language Points : {cplusmark}</Text>
            <Text style={styles.detailText}>Python Language points : {pymark}</Text>
        
        </View>
      </View>
      <Text style={styles.pageNumber} 
      render={({pageNumber ,totalPages}) =>
      ` ${pageNumber} / ${totalPages}`} fixed/>
      </View>
        </Page>

      </Document>
);
const handleDownload = () => {
  toast.success('PDF downloaded successfully!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
  });
};
const hoverStyle = {
  backgroundColor: '#45a049',
};
const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const activeStyle = {
  backgroundColor: '#3e8e41',
};
const handleMouseOver = (e) => {
  e.target.style.backgroundColor = hoverStyle.backgroundColor;
};

const handleMouseOut = (e) => {
  e.target.style.backgroundColor = buttonStyle.backgroundColor;
};

const handleMouseDown = (e) => {
  e.target.style.backgroundColor = activeStyle.backgroundColor;
};

const handleMouseUp = (e) => {
  e.target.style.backgroundColor = hoverStyle.backgroundColor;
};

  return (
    <div style={{ backgroundColor:'#D8D8D8' }} className="container-fluid" >
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Sidebar />
        </div>
        <div className="col">
          <div className="px-3">
            <div className="container-fluid">
              <div className="row g-3 my-3">
                <div className="col">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">3</h3>

                      <p className="fs-5">Code Problems solved</p>
                    </div>
                    <i class="fas fa-users  fa-lg"></i>
                  </div>
                </div>

                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">4</h3>
                      <p className="fs-5">Rank</p>
                    </div>

                    <i class="fas fa-chalkboard-teacher  fa-lg"></i>
                  </div>
                </div>

                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>

                      <h3 className="fs-2">{totals}</h3>
                      <p className="fs-5">Total Points Earned </p>
                    </div>
                    <i className="bi-file-earmark-code fa-lg"></i>
                  </div>
                </div>
                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{cmark}</h3>
                      <p className="fs-5">C Language points </p>
                    </div>
                    <i className="bi-file-earmark-code fa-lg"></i>
                  </div>
                </div>
                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{cplusmark}</h3>
                      <p className="fs-5">C++ Language points </p>
                    </div>
                    <i className="bi-file-earmark-code fa-lg"></i>
                  </div>
                </div>

                <div className="col-md-3 p-2">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{pymark}</h3>
                      <p className="fs-5">Python Language points </p>
                    </div>
                    <i className="bi-file-earmark-code fa-lg"></i>
                  </div>
                </div>

              </div>
            </div>

      <MDBContainer className="py-0 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={fac}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5"> {empList.name}</MDBTypography>
                  <MDBCardText>Student at PTU</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Student Detail</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">PTU Mail ID</MDBTypography>
                        <MDBCardText className="text-muted">{empList.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Register Number</MDBTypography>
                        <MDBCardText className="text-muted">{empList.mobile}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="pt-1">
                      <MDBCol size="15" className="mb-3">
                        <MDBTypography tag="h6">Department</MDBTypography>
                        <MDBCardText className="text-muted">Computer Science and Engineering, PTU</MDBCardText>
                      </MDBCol>
                      
                    </MDBRow>
                    <br/>
                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      <PDFDownloadLink document={<Mydoc />} fileName="report.pdf">
                  {({ blob, url, loading, error }) => (
                    <>
                      <button onClick={handleDownload} style={styles.downloadButton}  onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp} >
                        {loading ? 'Loading document...' : 'Download Report'}
                      </button>
                      <ToastContainer />
                    </>
                  )}
                </PDFDownloadLink>
           
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
