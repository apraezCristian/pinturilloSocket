import { Request, Response } from "express";
import { CategoriaRepository } from "../repositories/categoria.repository";
import { categoria } from '../entity/categoria.entity';
import { CategoriaDTO } from "../dto/categoria.dto";

import { v4 as uuidv4 } from 'uuid';




export class CategoriaController {
    private palabraRepository: CategoriaRepository = new CategoriaRepository();
    public getByTitle = async (req: Request, res: Response) => {
        try {
            const title = <string>req.query.texto;
            console.log(title);
            const song: CategoriaDTO = await this.palabraRepository.findByTitle(parseInt(title));
            return res.status(200).json({
                song,
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const palabraId = parseInt(id); // Convert string to number
            const palabra: categoria = await this.palabraRepository.findById(palabraId);
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
            const result: categoria = await this.palabraRepository.save(body);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public update = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            const id = body.id;
            let categoriaToUpdate: categoria = await this.palabraRepository.findById(id);
            categoriaToUpdate = {
                ...body
            }
            const result: categoria = await this.palabraRepository.save(categoriaToUpdate);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await this.palabraRepository.delete(parseInt(id));
            res.status(200).json({ message: 'Deleted' });

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }


}