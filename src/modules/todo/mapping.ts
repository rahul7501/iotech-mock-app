import {Todo} from "./types";

export const mappingTodo = (todo: any): Todo => ({
    id: todo.id,
    title: todo.title,
    body: todo.body,
    userId: todo.userId,
});