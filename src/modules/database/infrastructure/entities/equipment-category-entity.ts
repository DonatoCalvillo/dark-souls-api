import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity";
import { EquipmentTypeEntity } from "./equipment-type-entity";

@Entity({ name: "equipment_category" })
export class EquipmentCategoryEntity extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length:100})
  name: string;

  @Column({length:255})
  description: string;

  @OneToMany(() => EquipmentTypeEntity, (equipmentType) => equipmentType.equipmentCategory)
  equipmentType: EquipmentTypeEntity[]
} 