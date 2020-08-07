const coursesUrl = "http://localhost:3000/api/courses";
import axios from "axios";

const getAllCourses = () => {
  return axios.get(coursesUrl);
};

export default getAllCourses;
