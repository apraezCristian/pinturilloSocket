import { AppDataSource } from "../data-source";
import { SalaDeJuegosDTO } from "../dto/salaDeJuegos.dto"; 
import { salaDeJuegos } from "../entity/salaDeJuegos.entity";

export class SalaJuegosRepository {
    findByTitle(title: number): any {
        throw new Error("Method not implemented.");
    }
    private repository = AppDataSource.getRepository(salaDeJuegos);

    async findById(id: number) {
        return this.repository.findOneBy({ id: id });
    }

    async save(idSala: number, nombre: string, idCategoria: number, estado: string) {
        return this.repository.save({idSala, nombre, idCategoria, estado});
    }

    async delete(id: number) {
        return this.repository.delete(id);
    }
}

