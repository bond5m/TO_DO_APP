import axios from "axios";

// Set the base URL from environment
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Get user from localStorage safely
const user = JSON.parse(localStorage.getItem("todoapp") || "null");

// Set default Authorization header only if token exists
if (user?.token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
}

// CREATE TODO
const createTodo = (data) => {
  return axios.post("/todo/create", data);
};

// GET ALL TODO
const getAllTodo = (id) => {
  return axios.post(`/todo/getAll/${id}`);
};

// UPDATE TODO
const updateTodo = (id, data) => {
  return axios.patch(`/todo/update/${id}`, data);
};

// DELETE TODO
const deleteTodo = (id) => {
  return axios.delete(`/todo/delete/${id}`);
};

// Export all services
const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
export default TodoServices;
