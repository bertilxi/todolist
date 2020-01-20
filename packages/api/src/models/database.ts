import { Model } from "objection";
import Knex from "knex";
import { configs } from "../../knexfile";

const env = process.env.NODE_ENV ?? "development";

export async function setupDatabase() {
  const knex = Knex(configs[env]);
  Model.knex(knex);
}
