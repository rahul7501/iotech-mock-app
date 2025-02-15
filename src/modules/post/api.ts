import axios from "axios";
import { mappingPost } from "./mapping";

const MOCK_API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const handleError = (error: unknown, action: string) => {
    console.error(`Error while ${action}:`, error);

    if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || `Failed to ${action}`);
    } else {
        throw new Error(`Unexpected error occurred while ${action}`);
    }
};

export const getPosts = async () => {
    try {
        const { data } = await axios.get(MOCK_API_BASE_URL);
        return data.map((item: any) => mappingPost(item));
    } catch (error) {
        handleError(error, "fetching posts");
    }
};

export const addPost = async (item: { title: string; body: string; userId: any }) => {
    try {
        const { data } = await axios.post(MOCK_API_BASE_URL, item);
        return data;
    } catch (error) {
        handleError(error, "adding a new post");
    }
};

export const updatePost = async (id: number, item: { title: string; body: string }) => {
    try {
        const { data } = await axios.put(`${MOCK_API_BASE_URL}/${id}`, item);
        return data;
    } catch (error) {
        handleError(error, "updating the post");
    }
};

export const deletePost = async (id: number) => {
    try {
        await axios.delete(`${MOCK_API_BASE_URL}/${id}`);
    } catch (error) {
        handleError(error, "deleting the post");
    }
};