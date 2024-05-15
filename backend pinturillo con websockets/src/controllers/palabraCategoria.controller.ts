import { Request, Response } from "express";
import { palabraCategoriaRepository } from "../repositories/palabraPorCategorias.repository";
import { PalabraPorCategoriaDTO} from "../dto/palabraPorCategoria.dto";
import { palabraCategoria } from '../entity/palabraPorCategoria.entity';

import { v4 as uuidv4 } from 'uuid';


export class PalabraPorCategoriaController {

    private palabraPorCategoriaRepository: palabraCategoriaRepository = new palabraCategoriaRepository();
    public getByTitle = async (req: Request, res: Response) => {
        try {
            const title = <string>req.query.texto;
            console.log(title);
            const palabraCategoria: PalabraPorCategoriaDTO = await this.palabraPorCategoriaRepository.findByTitle(parseInt(title));
            return res.status(200).json({
                palabraCategoria,
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const categoriaPalabraId = parseInt(id); // Convert string to number
            const palabraCategoria: palabraCategoria = await this.palabraPorCategoriaRepository.findById(categoriaPalabraId);
            if (palabraCategoria === null) {
                res.status(404).json({ error: 'palabraCategproia doesnt exists' });
            }
            res.status(200).json({ palabraCategoria });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /*
    public getAll = async (req: Request, res: Response) => {
        const genre = <string>req.query.genre;
        try {
            const palabra: palabra[] = await this.palabraRepository.getAll(genre);
            return res.status(200).json(palabra);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    */
    public save = async (req: Request, res: Response) => {
        const body = req.body;
        try {

            const id = uuidv4();
            body['id'] = id;
            const result: palabraCategoria = await this.palabraPorCategoriaRepository.save(body);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public update = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            const id = body.id;
            let palabraCategoriaToUpdate: palabraCategoria = await this.palabraPorCategoriaRepository.findById(id);
            palabraCategoriaToUpdate = {
                ...body
            }
            const result: palabraCategoria = await this.palabraPorCategoriaRepository.save(palabraCategoriaToUpdate);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await this.palabraPorCategoriaRepository.delete(parseInt(id));
            res.status(200).json({ message: 'Deleted' });

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}