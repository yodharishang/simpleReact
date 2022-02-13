import axios from "axios";

const dataApi = {
	URL:"https://jsonplaceholder.typicode.com/",
	HEADER:{
    'Content-type': 'application/json; charset=UTF-8'
  }
}

export default axios.create({
  baseURL: dataApi.URL,
  headers: dataApi.HEADER
});
