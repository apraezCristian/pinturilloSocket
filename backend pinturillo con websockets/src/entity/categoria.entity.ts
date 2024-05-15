import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from "typeorm";
  

@Entity({ name: "categoria" })
  export class categoria extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ type: 'int4' })
    idcategoria: number;

    @Column({ type: 'varchar' })
    nombre: string;

  }