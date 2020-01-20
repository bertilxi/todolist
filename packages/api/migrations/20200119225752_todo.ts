import Knex from "knex";

const tableName = "todo";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(tableName, table => {
    table.increments("id").primary();
    table.timestamps(true, true);

    table.string("description", 500).defaultTo("");
    table.string("state").defaultTo("CREATED");
    table.string("image").defaultTo("");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(tableName);
}
