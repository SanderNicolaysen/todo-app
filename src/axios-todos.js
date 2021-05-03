import axios from "axios";

const instance = axios.create({
  baseURL: "https://todo-a8655-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
