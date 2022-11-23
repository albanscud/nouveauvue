import axios from "axios";
export default axios.create({
  /*baseURL: "http://localhost:8080/api",*/
  baseURL: "http://localhost:8080/details.json",
  // baseURL: "https://localhost:8000/api/details",
  headers: {
    "Content-type": "application/json"
  }
});