import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Meal } from './meal.entity';

@Entity({ name: 'meal_entry' })
@Index(['mealId'])
export class MealEntry extends BaseEntity {
  @Column({ name: 'meal_id', type: 'uuid' })
  mealId!: string;

  @Column({ name: 'name', type: 'varchar', length: 160 })
  name!: string;

  @Column({ name: 'quantity', type: 'numeric', precision: 10, scale: 2 })
  quantity!: string;

  @Column({ name: 'unit', type: 'varchar', length: 30 })
  unit!: string;

  @Column({ name: 'calories', type: 'integer', nullable: true })
  calories!: number | null;

  @Column({
    name: 'protein_g',
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  proteinG!: string | null;

  @Column({
    name: 'carbs_g',
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  carbsG!: string | null;

  @Column({
    name: 'fat_g',
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  fatG!: string | null;

  @ManyToOne(() => Meal, (meal) => meal.entries, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'meal_id' })
  meal!: Meal;
}
