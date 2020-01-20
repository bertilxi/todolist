import Fastify from "fastify";
import cors from "fastify-cors";
import { setupDatabase } from "./models";
import { setupControllers } from "./controllers";

export async function start() {
  const app = Fastify();

  await setupDatabase();

  app.register(cors);

  setupControllers(app);

  try {
    await app.listen(3001);
    console.log(`🚀 Server listening on http://localhost:3001`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
