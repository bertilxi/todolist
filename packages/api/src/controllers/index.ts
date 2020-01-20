import { FastifyInstance } from "fastify";
import { todoController } from "./todo";

export function setupControllers(app: FastifyInstance) {
  todoController(app);
}
