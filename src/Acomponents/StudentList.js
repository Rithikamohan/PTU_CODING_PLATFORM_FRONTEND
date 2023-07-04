import React from 'react'
import empService from ".././services/stu.service";
import DataTable from "react-data-table-component";
const StudentList = () => {
    const [empList, setEmpList] = useState([]);
    const [msg, setMsg] = useState("");
    const [getList, List] = useState([]);
    useEffect(() => {
        init();
        
     
      }, []);
      if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
      }

      const column =[
        {
          name:"ID",
          selector : row => row.id
        },
        {
          name:"Email",
          selector : row => row.email
        }, {
          name:"Name",
          selector : row => row.name
        }, {
          name:"Operations"
        }
      ] 
      const init = () => {
       
        empService
          .getAllEmp()
          .then((res) => {
        //console.log(res.data);
            setEmpList(res.data);
    
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
        
        
<DataTable>
  columns={column}
  data={empList}
</DataTable>

        </div></div>
  )
}

export default StudentList