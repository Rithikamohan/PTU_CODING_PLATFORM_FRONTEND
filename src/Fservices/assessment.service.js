import axios from "axios";

const BASE_API_URL = "http://localhost:8082/rest/assessment";
class AssessmentService {
    addAssessment(code) {
        return axios.post(BASE_API_URL + "/save" , code);
    }
    getAssessment(name)
    {
        return axios.get(BASE_API_URL + "/" +name)
    }
}export default new AssessmentService();