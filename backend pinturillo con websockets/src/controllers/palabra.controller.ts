import { Request, Response } from "express";
import { PalabraRepository } from "../repositories/palabra.repository";
import { palabra } from '../entity/palabra.entity';
import { PalabraDTO } from "../dto/Palabra.dto";

import { v4 as uuidv4 } from 'uuid';





export class PalabraController {



    private palabraRepository: PalabraRepository = new PalabraRepository();
    public getByTitle = async (req: Request, res: Response) => {
        try {
            const title = <string>req.query.texto;
            console.log(title);
            const palabra: PalabraDTO = await this.palabraRepository.findByTitle(parseInt(title));
            return res.status(200).json({
                palabra,
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const palabraId = parseInt(id); // Convert string to number
            const palabra: palabra = await this.palabraRepository.findById(palabraId);
            if (palabra === null) {
                res.status(404).json({ error: 'palabra doesnt exists' });
            }
            res.status(200).json({ palabra });
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
            const result: palabra = await this.palabraRepository.save(body);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public update = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            const id = body.id;
            let palabraToUpdate: palabra = await this.palabraRepository.findById(id);
            palabraToUpdate = {
                ...body
            }
            const result: palabra = await this.palabraRepository.save(palabraToUpdate);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public delete = async (req: Request, res: Response) => {
        const { texto } = req.params;
        try {
            await this.palabraRepository.delete(parseInt(texto));
            res.status(200).json({ message: 'Deleted' });

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }


}