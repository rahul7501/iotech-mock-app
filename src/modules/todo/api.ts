import axios from "axios";

const MOCK_API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";
// const MOCK_API_BASE_URL="https://67af70c9dffcd88a6786b4b8.mockapi.io/api/todos/todo"

export const getTodos = async () => {
    const {data} = await axios.get(MOCK_API_BASE_URL);
    return data;
};

export const addTodo = async (item: { title: string; body: string }) => {
    const {data} = await axios.post(MOCK_API_BASE_URL, item);
    return data;
};

export const updateTodo = async (id: number, item: { title: string; body: string }) => {
    const {data} = await axios.put(`${MOCK_API_BASE_URL}/${id}`, item);
    return data;
};

export const deleteTodo = async (id: number) => {
    await axios.delete(`${MOCK_API_BASE_URL}/${id}`);
};
