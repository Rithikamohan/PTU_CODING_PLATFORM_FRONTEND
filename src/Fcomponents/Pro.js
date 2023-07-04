import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import "./Profile.css";
import { useState } from "react";
import { useEffect } from "react";
import facService from "../Fservices/fac.service";
import fac from "../components/fac1.png";

import Sidebar from "./Sidebar";
export default function Profile() {
let name;
  const uname=window.localStorage.getItem("facusername");
useEffect(() => {
    init()
        init(uname);
      }, []);
      const [Facdetail, setfacList] = useState([]);
      const [fname, setname] = useState([]);
      const init = () => {
        facService
          .getAllFac()
          .then((res) => {
            
            // console.log(res.data);
            for(let i=0;i<=res.data.length;i++)
            {
              let item=res.data[i];
               name=item.name;
              setname(name)
            let user=uname
            if(user===name)
            {
              setfacList(res.data[i]);      
            }
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
    <section>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={fac}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5"> {Facdetail.name}</MDBTypography>
                  <MDBCardText>PTU Professor</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{Facdetail.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">90987 64563</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="pt-1">
                      <MDBCol size="15" className="mb-3">
                        <MDBTypography tag="h6">Specialization</MDBTypography>
                        <MDBCardText className="text-muted">Machine Learning, Web Technology</MDBCardText>
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
    </section>
    </div>
    </div>
    </div>
  );
}