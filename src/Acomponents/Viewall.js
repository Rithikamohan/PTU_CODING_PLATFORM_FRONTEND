import React from 'react'
import { useState , useRef} from "react";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import empService from ".././services/stu.service";
import facService from ".././Fservices/fac.service";
import DataTable ,{defaultThemes} from "react-data-table-component";
import { useReactToPrint } from 'react-to-print';
import ExportExcel from './Excelexport';
const Viewall = () => {
const componentPDF = useRef();
  const customStyle = {
    headRow: {
      style: {
        backgroundColor:'blue',
        color:"white"
      }
    },
    headCells:{
      style:{
        fontSize:'16px',
        fontWeight:'600',
        textTransform: 'uppercase',
      },
    },
    cells:{
      style:{
        fontSize:'15px',
      },
    },
  };
const [empList, setEmpList] = useState([]);
const [filterRecord, setFilterRecords] = useState([]);

  //fac
  const [facList, setFacList] = useState([]);
  const [filterRecordf, setFilterRecordsf] = useState([]);

  useEffect(() => {
    init();
    initF();
    
  }, []);
  const init = () => {
    let arr=[];
    empService
      .getAllEmp()
      .then((res) => {
    //console.log(res.data);
        setEmpList(res.data);
setFilterRecords(res.data);
      })
    
      .catch((error) => {
        console.log(error);
      });
  };

  const initF = () => {
    facService
      .getAllFac()
      .then((res) => {

        console.log(res.data);
        setFacList(res.data);
        setFilterRecordsf(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let i=1
  const column =[
    {
      name:"Sl.No",
      selector : row => row.id,
      sortable:true
    },
    {
      name:"Email ID",
      selector : row => row.email,
      sortable:true
    }, {
      name:"Name",
      selector : row => row.name,
      sortable:true
    }, {
      name:"Register number",
      selector : row =>row.mobile,
      sortable:true
    },
    {
      name: "Points",
      selector: row =>row.points,
      sortable:true
    }
  ] 
  const columnFac =[
    {
      name:"Sl.No",
      selector : row => row.id,
      sortable:true
    },
    {
      name:"Faculty Name",
      selector : row => row.email,
      sortable:true
    }, {
      name:"Register Number",
      selector : row => row.name,
      sortable:true
    }, {
      name:"Email ID",
      selector : row =>row.mobile,
      sortable:true
    }
  ] 
const handleFilter=(event)=>{
  const newData = filterRecord.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
setEmpList(newData);
}
const handleFilterf=(event)=>{
  const newData = filterRecordf.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
setFacList(newData);
}

const generatePDF= useReactToPrint({
content: () =>componentPDF.current,
documentTitle : "Userdata",
onAfterPrint :()=> alert("Data saved in PDF ")
});
const sidebarStyles = {
  //height: '100vh',
  overflowY: 'auto'
};

  return (
    <div className="container-fluid bg-secondary min-vh-100">
    <div className="row">
      <div style={sidebarStyles} className="col-2 bg-white ">
        <Sidebar />
      </div>
    <div className="col">
    <div className="px-3">
      <div className="container-fluid">
      
      <div style={{padding: "50px 10%" , backgroundColor: "gray"}}>
      <p className="text-white h3">Students List</p>
      <div className='d-grid d-md-flex justify-content-md-end mb-3'>
        <button className='btn btn-success' onClick={generatePDF} >PDF</button>
      </div>
      
      <ExportExcel excelData={empList} fileName={"Excel Export"}/> 

<div style={{display:'flex', justifyContent:'right'}}>
  
  <input type='text' placeholder='Search...' onChange={handleFilter} style={{padding:'6px 10px'}}/></div>
<div ref={componentPDF} style={{width:'100%'}}>
<DataTable
  columns={column}
  data={empList}
  customStyles={customStyle}
   //pagination  
  >
</DataTable>
</div>
</div>

            {/* <table class="table caption-top bg-white rounded mt -2">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">SL.NO</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Student ID</th>
                  <th scope="col">Register Number</th>
                  <th scope="col">Email ID</th>
                  
                </tr>
              </thead>
              <tbody>
                {empList.map((e, num) => (
                  <tr>
                    <th scope="row">{num + 1}</th>
                    <td>{e.name}</td>
                    <td>{e.id}</td>
                    <td>{e.mobile}</td>
                    <td>{e.email}</td>
                
                  </tr>
                ))}
              </tbody>
            </table> */}
<div style={{padding: "50px 10%" , backgroundColor: "gray"}}>
<div style={{display:'flex', justifyContent:'right'}}>
  
  <input type='text' placeholder='Search...' onChange={handleFilterf} style={{padding:'6px 10px'}}/></div>

            <p className="text-white h3">Faculty List</p>
            <DataTable
  columns={columnFac}
  data={facList}
  customStyles={customStyle}
  pagination
  
  >
    
</DataTable>
</div>
</div>

            {/* <table class="table caption-top bg-white rounded mt -2">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">SL.NO</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Student ID</th>
                  <th scope="col">Register Number</th>
                  <th scope="col">Email ID</th>
                </tr>
              </thead>
              <tbody>
                {facList.map((e, num) => (
                  <tr>
                    <th scope="row">{num + 1}</th>
                    <td>{e.name}</td>
                    <td>{e.id}</td>
                    <td>{e.mobile}</td>
                    <td>{e.email}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table> */}

        </div></div></div> </div>
  )
}

export default Viewall