
import * as express from "express";
import { PalabraController } from '../controllers/palabra.controller';
import { palabra } from '../entity/palabra.entity';

const Router = express.Router();
const Palabra = new PalabraController();
Router.get(
    "/texto",
    Palabra.getByTitle
  );

  Router.get(
    "/texto/:idpalabra",
    Palabra.getById
  );
/*
  Router.get(
    "/texto",
    songController.getAll
  );
*/
  Router.post(
    "/texto",
    Palabra.save
  );

  Router.put(
    "/texto",
    Palabra.update
  )

  Router.delete(
    "/texto/:idpalabra",
    Palabra.delete
  )
  export { Router as palabraRouter };