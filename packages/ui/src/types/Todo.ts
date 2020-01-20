import { TodoState } from "./TodoState";

export interface Todo {
  id: number;
  description: string;
  image: string;
  state: TodoState;
}
