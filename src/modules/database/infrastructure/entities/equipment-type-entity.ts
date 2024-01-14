import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity";
import { EquipmentCategoryEntity } from "./equipment-category-entity";
import { EquipmentEntity } from "./equipment-entity";

@Entity({ name: "equipment_type" })
export class EquipmentTypeEntity extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length:100})
  name: string;

  @OneToMany(() => EquipmentEntity, (equipment) => equipment.equipmentTypeId)
  equipment: EquipmentEntity[]

  @ManyToOne( () => EquipmentCategoryEntity, (equipmentCategory)=> equipmentCategory.equipmentType )
  @JoinColumn({name: 'equipment_category_id'})
  equipmentCategory: EquipmentCategoryEntity 
} 