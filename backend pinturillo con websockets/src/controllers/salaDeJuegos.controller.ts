import { Request, Response } from "express";
import { SalaDeJuegosDTO } from "../dto/salaDeJuegos.dto"; 
import { salaDeJuegos } from "../entity/salaDeJuegos.entity";
import { SalaJuegosRepository} from '../repositories/salaDeJuegos.repositorie';

import { v4 as uuidv4 } from 'uuid';

export class SalaDeJuegosController {

    private salaJuegosRepository: SalaJuegosRepository = new SalaJuegosRepository();

    public getByTitle = async (req: Request, res: Response) => {
        try {
            const texto = <string>req.query.texto;
            console.log(texto);
            const text: SalaDeJuegosDTO = await this.salaJuegosRepository.findByTitle(parseInt(texto));
            return res.status(200).json({
                texto,
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const salaId = parseInt(id); // Convert string to number
            const SalaId: salaDeJuegos = await this.salaJuegosRepository.findById(salaId);
            if (salaId === null) {
                res.status(404).json({ error: 'palabra doesnt exists' });
            }
            res.status(200).json({ SalaId });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /*
    public getAll = async (req: Request, res: Response) => {
        const palabraCategoria = <string>req.query.genre;
        try {
            const palabra: palabra[] = await this.palabraRepository.getAll(palabraCategoria);
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
            const result: salaDeJuegos = await this.salaJuegosRepository.save(body);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public update = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            const id = body.id;
            let salaDeJuegosToUpdate: salaDeJuegos = await this.salaJuegosRepository.findById(id);
            salaDeJuegosToUpdate = {
                ...body
            }
            const result: salaDeJuegos = await this.salaJuegosRepository.save(salaDeJuegosToUpdate);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public delete = async (req: Request, res: Response) => {
        const { texto } = req.params;
        try {
            await this.salaJuegosRepository.delete(parseInt(texto));
            res.status(200).json({ message: 'Deleted' });

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}