import axios from "axios";

const BASE_API_URL = "http://localhost:8084/codec";
const cplusURL="http://localhost:8084/cplus";
const pyURL="http://localhost:8084/py";
class EmpService {

   async getAllEmp() {
        return axios.get(BASE_API_URL + "/allcode", {}, {headers:{"Authorization": "Bearer" }})
    }
    getEmpById(id) {
        return axios.get(BASE_API_URL + "/student" + id);
    }
    saveEmp(emp) {
            return axios.post(BASE_API_URL + "/save", emp);
        }

        //cplus
        
        async getAllCplus() {
            return axios.get(cplusURL + "/allcode", {}, {headers:{"Authorization": "Bearer" }})
        }
        getCplusById(id) {
            return axios.get(cplusURL + "/student" + id);
        }
        saveCplus(emp) {
                return axios.post(cplusURL + "/save", emp);
            }

 //python
        
 async getAllPy() {
    return axios.get(pyURL + "/allcode", {}, {headers:{"Authorization": "Bearer" }})
}
getPyById(id) {
    return axios.get(pyURL + "/student" + id);
}
savePy(emp) {
        return axios.post(pyURL + "/save", emp);
    }


}


export default new EmpService();