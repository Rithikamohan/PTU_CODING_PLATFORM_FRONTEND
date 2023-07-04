import axios from "axios";

const BASE_API_URL = "http://localhost:8082/rest/faculty";

class FacService {

   async getAllFac() {
        return axios.get(BASE_API_URL + "/faculty", {}, {headers:{"Authorization": "Bearer" }})
    }

    // saveEmp(emp) {
    //     return axios.post(BASE_API_URL + "/save", emp);
    // }

    getFacById(id) {
        return axios.get(BASE_API_URL + "/faculty" + id);
    }
    deleteFac(id) {
        return axios.get(BASE_API_URL + "/delete/" + id);
    }

    updateFac(id, emp) {
        return axios.get(BASE_API_URL + "/facupdate/" + id, emp);
    }
    getcount(){
        return axios.get(BASE_API_URL + "/totalfac");
    }
//
getStudents(uname)
{
    return axios.get(BASE_API_URL+"/students/"+uname);
}

//assessment add
Addassessment(assessment) {
    return axios.post( BASE_API_URL+ "/assessment/save", assessment);
}
//view assessment for respective faculty

Viewassessment(name) {
    return axios.get(BASE_API_URL + "/assessment/" + name);
}
}
//http://localhost:8082/rest/faculty/Dr.Sheeba/students
export default new FacService();