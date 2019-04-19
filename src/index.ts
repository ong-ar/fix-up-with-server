import dotenv from "dotenv";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import { authenticateJwt } from "./passport";
import schema from "./schema";
import "./passport";

dotenv.config();

const server = new GraphQLServer({
  context: ({ request }: any) => ({ request }),
  schema,
});

server.express.use(authenticateJwt);

server.express.use(logger("combined"));

server.start(() => console.log("Server is running on http://localhost:4000"));
