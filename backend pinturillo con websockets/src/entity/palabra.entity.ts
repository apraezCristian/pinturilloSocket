import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from "typeorm";
  

@Entity({ name: "palabra" })
  export class palabra extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ type: 'int4' })
    idpalabra: number;

    @Column({ type: 'varchar' })
    texto: string;

  }