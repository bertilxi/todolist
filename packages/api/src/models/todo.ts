import { Model } from "objection";

const tableName = "todo";

const jsonSchema = {
  type: "object",
  required: ["description"],

  properties: {
    id: { type: "integer" },
    description: { type: "string" },
    state: { type: "string" },
    image: { type: "string" }
  }
};

export class Todo extends Model {
  static tableName = tableName;
  static jsonSchema = jsonSchema;

  public id!: number;
  public description!: string;
  public state!: string;
  public image!: number;
}
