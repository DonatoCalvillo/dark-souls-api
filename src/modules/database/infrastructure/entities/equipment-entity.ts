import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./base-entity";
import { EquipmentTypeEntity } from "./equipment-type-entity";

@Entity({ name: "equipment" })
export class EquipmentEntity extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length:100})
  name: string;

  @Column({length:500})
  description: string;

  @Column({ type: "json", nullable: true })
  statistics: Record<string, any> | null;

  @Column()
  location: string;

  @Column()
  image: string;

  @ManyToOne(() => EquipmentTypeEntity, (equipmentType) => equipmentType.equipment)
  @JoinColumn({ name: "equipment_type_id" })
  equipmentTypeId: EquipmentTypeEntity
} 
