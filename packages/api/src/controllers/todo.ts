import _ from "lodash";
import { FastifyInstance } from "fastify";
import { Todo } from "../models";

export const todoController = (app: FastifyInstance) => {
  app.get("/todo", async req => {
    let query = Todo.query();

    if (typeof req.query.description === "string") {
      query = query.where("description", "like", `%${req.query.description}%`);
    }

    if (typeof req.query.state === "string") {
      query = query.where({ state: req.query.state });
    }

    return query;
  });

  app.get("/todo/:id", async (req, res) => {
    const todo = await Todo.query()
      .where({ id: req.params.id })
      .first();

    if (!todo) {
      return res.status(404).send();
    }

    return todo;
  });

  app.post("/todo", async req => {
    return Todo.query().insert(req.body);
  });

  app.put("/todo/:id", async (req, res) => {
    const item = _(req.body)
      .omit(["id", "created_at", "updated_at"])
      .omitBy(_.isNil)
      .value();

    const modifiedRecords = await Todo.query()
      .findById(req.params.id)
      .patch(item);

    if (modifiedRecords === 0) {
      return res.status(404).send();
    }

    return modifiedRecords;
  });

  app.delete("/todo/:id", async req => {
    return Todo.query().deleteById(req.params.id);
  });
};
