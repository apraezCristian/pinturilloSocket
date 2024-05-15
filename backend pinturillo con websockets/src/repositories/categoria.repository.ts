import { categoria } from '../entity/categoria.entity';
import { AppDataSource } from "../data-source";
import { CategoriaDTO } from "../dto/categoria.dto";

export class CategoriaRepository {
    findByTitle(title: number): any {
        throw new Error("Method not implemented.");
    }
    private repository = AppDataSource.getRepository(categoria);
  
    async findById(id: number) {
      return this.repository.findOneBy({ idcategoria: id });
    }
  
    async save(categoria: categoria) {
      return this.repository.save(categoria);
    }
  
    async delete(id: number ) {
      return this.repository.delete(id);
    }

}
    