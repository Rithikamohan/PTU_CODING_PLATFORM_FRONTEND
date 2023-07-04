import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import FNavigationBar from "./Fcomponents/NavigationBar";
import ANavigationBar from "./Acomponents/NavigationBar";
import Welcome from "./components/Welcome";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Code from "./codeeditor/Code"
import FLogin from "./Fcomponents/faculty/Login";
import ALogin from "./Acomponents/admin/Login";
import FRegister from "./Fcomponents/faculty/Register";
import FHome from "./Fcomponents/Home";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AHome from "./Acomponents/Home";
import Practice from "./components/User/Student/cards";
import EditStu from "./components/EditStu"; 
import Canalysis from "./components/Canalysis";
import Cplusanalysis from "./components/Cplusanalysis";
import { LoginOutlined } from "@mui/icons-material";
import Codeproblemc from "./Fcomponents/Codeproblemc"
import Pyanalysis from "./components/Pyanalysis";
import Profile from "./Fcomponents/Pro"
import Viewall from "./Acomponents/Viewall";
import Assessmentview from "./components/Assessmentview";
import Success from "./components/Success";
const App = () => {
  // window.onbeforeunload = (event) => {
  //   const e = event || window.event;
  //   e.preventDefault();
    
  //   if (e) 
  //   {
  //     e.returnValue = "";
  //   }
  //   return "";
  // };
  if(window.localStorage.getItem("stuloggedIn")=== true){
  const isLoggedIn=window.localStorage.getItem("loggedIn");
  console.log(isLoggedIn, "login status");
  const username=window.localStorage.getItem("username");
  }
  else if(window.localStorage.getItem("facloggedIn")=== true)
  {
  const isLoggedIn=window.localStorage.getItem("facloggedIn");
  console.log(isLoggedIn, "login status");
  const username=window.localStorage.getItem("facusername");
  }
  else{
    const isLoggedIn=window.localStorage.getItem("adminloggedIn");
  console.log(isLoggedIn, "login status");
  const username=window.localStorage.getItem("adminusername");
  }
  return (
    
    <Router>
      
      <Switch>
      <Route path="/admin/home" exact component={ANavigationBar} />
      <Route path="/faculty/home" exact component={FNavigationBar} />
      <NavigationBar />
      </Switch>
    
        <Row>
          <Col >
            <Switch>
            {/* <Notifications username={username} /> */}
              <Route path="/" exact component={Welcome} />   
              <Route path="/home" exact component={ Home} />    
              <Route path="/admin/home" exact component={AHome} />
              <Route path="/admin/viewall" exact component={Viewall} />
              <Route path="/faculty/home" exact component={ FHome} />
              <Route path="/cprg" exact component={Canalysis} />
              <Route path="/assessment" exact component={Assessmentview} />
              <Route path="/cplusprg" exact component={ Cplusanalysis} />
              <Route path="/pyanalysis" exact component={Pyanalysis} />
              <Route path="/admin/register" exact component={Register} />
              <Route path="/register" exact component={Register} />
              <Route path="/faculty/register" exact component={ FRegister} />
              <Route path="/faculty/profile" exact component={ Profile} />
              <Route path="/admin/fregister" exact component={FRegister} />
              <Route path="/login" exact component={Login} />
              <Route path="/faculty/login" exact component={FLogin} />
              <Route path="/faculty/Codeproblemc" exact component={Codeproblemc} />
              <Route path="/Practice" exact component={Practice} />
              <Route path="/admin/login" exact component={ALogin} />
               <Route path="/editor" exact component={Code} />  

               <Route path="/success" exact component={Success} />  

               <Route path="/:id" exact component={EditStu}/>
               <Route path="/admin/editStu/:id" exact component={EditStu}></Route>
              
              <Route
                path="/logout"
                exact
                component={() => (
                  <Login message="Student Logged Out Successfully." />
                )}
              />
            </Switch>
          </Col>
        </Row>
      <Footer />
    </Router>
  );
};

//  <Route path="/notification" exact  render={() => <Noti username={username} />} />

export default App;
