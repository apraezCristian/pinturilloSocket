import "reflect-metadata";
import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { palabra } from "./entity/palabra.entity";
import { categoria } from "./entity/categoria.entity";
import { palabraCategoria} from "./entity/palabraPorCategoria.entity";


dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;
  
export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: false,
//logging logs sql command on the treminal
  logging:  false,
  entities: [palabra, categoria, palabraCategoria],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});