import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from "typeorm";
  

@Entity({ name: "palabraPorCategoria" })
  export class palabraCategoria extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ type: 'int4' })
    idpalabra: number;

    @Column({ type: 'int4' })
    idcategoria: number;

  }