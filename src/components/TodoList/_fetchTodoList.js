import axios from "axios";

const TODO_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

const fetchTodoList = async (num) => {
  return await axios.get(`${TODO_ENDPOINT}/${num}`).then(res => res.data);
};

export default fetchTodoList;
