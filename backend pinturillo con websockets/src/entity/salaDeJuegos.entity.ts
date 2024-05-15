import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from "typeorm";
  

@Entity({ name: "salaJuegos" })
  export class salaDeJuegos extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number;
  
    @Column({ type: 'varchar' })
    nombre: string;

    @Column({ type: 'int4' })
    idcategoria: number;

    @Column({ type: 'varchar' })
    estado: string;

  }