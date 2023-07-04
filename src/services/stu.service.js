import axios from "axios";

const BASE_API_URL = "http://localhost:8080/rest/user";

class EmpService {

   async getAllEmp() {
        return axios.get(BASE_API_URL + "/students", {}, {headers:{"Authorization": "Bearer" }})
    }
    getEmpById(id) {
        return axios.get(BASE_API_URL + "/student/" + id);
    }
    //personal student detail
    getStudetail(name){
    return axios.get(BASE_API_URL+"/studentdetail/"+name);
    }
    //pdf
    exportToPDF() {
        return axios.get(BASE_API_URL + "/pdf");
    }
    findByname(name) {
        return axios.get(BASE_API_URL + "/faculty/" + name);
    }
    getallstuname() {
        return axios.get(BASE_API_URL + "/all");
    }

    getallstupoints() {
        return axios.get(BASE_API_URL + "/allpoints");
    }

    deleteEmp(id) {
        return axios.get(BASE_API_URL + "/delete/" + id);
    }

    updateEmp(id, emp) {
        return axios.post(BASE_API_URL + "/stuupdate/" + id, emp);
    }
    getMark(id) {
        return axios.get(BASE_API_URL + "/mark?name=" + id);
    }

    setMark(mark,id) {
        return axios.get(BASE_API_URL + "/points?mark= " + mark+"&name="+id);
    }
//c mark
    setC(mark,id) {
        return axios.get(BASE_API_URL + "/c?mark= " + mark+"&name="+id);
    }
    getC(id) {
        return axios.get(BASE_API_URL + "/cmark?name=" + id);
    }

    //cbasic mark
    setCbasic(mark,id) {
        return axios.get(BASE_API_URL + "/cbasic?mark= " + mark+"&name="+id);
    }
    getCbasic(id) {
        return axios.get(BASE_API_URL + "/cmarkbasic?name=" + id);
    }

    //cinter mark
    setCinter(mark,id) {
        return axios.get(BASE_API_URL + "/cinter?mark= " + mark+"&name="+id);
    }
    getCinter(id) {
        return axios.get(BASE_API_URL + "/cmarkinter?name=" + id);
    }
//cadv mark
    setCadv(mark,id) {
        return axios.get(BASE_API_URL + "/cadv?mark= " + mark+"&name="+id);
    }
    getCadv(id) {
        return axios.get(BASE_API_URL + "/cmarkadv?name=" + id);
    }



//cplus mark

setCplus(mark,id) {
    return axios.get(BASE_API_URL + "/cplus?mark= " + mark+"&name="+id);
}
getCplus(id) {
    return axios.get(BASE_API_URL + "/cplusmark?name=" + id);
}


//cpbasic mark
    setCpbasic(mark,id) {
        return axios.get(BASE_API_URL + "/cpbasic?mark= " + mark+"&name="+id);
    }
    getCpbasic(id) {
        return axios.get(BASE_API_URL + "/cpmarkbasic?name=" + id);
    }
//cpinter mark
    setCpinter(mark,id) {
        return axios.get(BASE_API_URL + "/cpinter?mark= " + mark+"&name="+id);
    }
    getCpinter(id) {
        return axios.get(BASE_API_URL + "/cpmarkinter?name=" + id);
    }

    //cpadv mark
    setCpadv(mark,id) {
        return axios.get(BASE_API_URL + "/cpadv?mark= " + mark+"&name="+id);
    }
    getCpadv(id) {
        return axios.get(BASE_API_URL + "/cpmarkadv?name=" + id);
    }

    
//pythonmark

setPy(mark,id) {
    return axios.get(BASE_API_URL + "/py?mark= " + mark+"&name="+id);
}
getPy(id) {
    return axios.get(BASE_API_URL + "/pymark?name=" + id);
}


//pybasic mark
    setPybasic(mark,id) {
        return axios.get(BASE_API_URL + "/pybasic?mark= " + mark+"&name="+id);
    }
    getPybasic(id) {
        return axios.get(BASE_API_URL + "/pybasicmark?name=" + id);
    }

//pyinter mark
    setPyinter(mark,id) {
        return axios.get(BASE_API_URL + "/pyinter?mark= " + mark+"&name="+id);
    }
    getPyinter(id) {
        return axios.get(BASE_API_URL + "/pymarkinter?name=" + id);
    }

    //pyadv mark
    setPyadv(mark,id) {
        return axios.get(BASE_API_URL + "/pyadv?mark= " + mark+"&name="+id);
    }
    getPyadv(id) {
        return axios.get(BASE_API_URL + "/pymarkadv?name=" + id);
    }
    getcount(){
        return axios.get(BASE_API_URL + "/totalstu");
    }
    setassessment(assessmentmark,id) {
        return axios.get(BASE_API_URL + "/addassessment?assessmentmark= " + assessmentmark+"&name="+id);
    }


}

export default new EmpService();