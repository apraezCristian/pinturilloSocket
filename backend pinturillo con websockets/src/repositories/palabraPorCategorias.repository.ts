import { AppDataSource } from "../data-source";
import { palabraCategoria } from "../entity/palabraPorCategoria.entity";
import { PalabraDTO } from "../dto/Palabra.dto";
export class palabraCategoriaRepository {
    findByTitle(title: number): any {
        throw new Error("Method not implemented.");
    }
    private repository = AppDataSource.getRepository(palabraCategoria);

    async findById(id: number) {
        return this.repository.findOneBy({ idcategoria: id });
    }

    async save(palabraCategoria: palabraCategoria) {
        return this.repository.save(palabraCategoria);
    }

    async delete(id: number) {
        return this.repository.delete(id);
    }
}
