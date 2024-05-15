import { palabra } from "../entity/palabra.entity";
import { AppDataSource } from "../data-source";
import { PalabraDTO } from "../dto/Palabra.dto";

export class PalabraRepository {
  getAll(palabraCategoria: string): palabra[] | PromiseLike<palabra[]> {
      throw new Error("Method not implemented.");
  }
  findByTitle(title: number): any {
      throw new Error("Method not implemented.");
  }
  private repository = AppDataSource.getRepository(palabra);

  async findById(id: number) {
    return this.repository.findOneBy({ idpalabra: id });
  }

  async save(palabra: palabra) {
    return this.repository.save(palabra);
  }

  async delete(id: number ) {
    return this.repository.delete(id);
  }
}
