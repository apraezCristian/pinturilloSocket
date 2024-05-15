
import * as express from "express";
import { CategoriaController } from '../controllers/categoria.controller';

const Router = express.Router();
const CategoríaController = new CategoriaController();
Router.get(
    "/texto",
    CategoríaController.getByTitle
  );

  Router.get(
    "/texto/:idpalabra",
    CategoríaController.getById
  );
/*
  Router.get(
    "/texto",
    songController.getAll
  );
*/
  Router.post(
    "/texto",
    CategoríaController.save
  );

  Router.put(
    "/texto",
    CategoríaController.update
  )

  Router.delete(
    "/texto/:idpalabra",
    CategoríaController.delete
  )
  export { Router as categoriaRouter };