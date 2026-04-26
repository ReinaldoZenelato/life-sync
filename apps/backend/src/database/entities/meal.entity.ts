import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { SoftDeleteBaseEntity } from './base.entity';
import { MealEntry } from './meal-entry.entity';
import { User } from './user.entity';

@Entity({ name: 'meal' })
@Index(['userId', 'consumedAt'])
export class Meal extends SoftDeleteBaseEntity {
  @Column({ name: 'user_id', type: 'uuid' })
  userId!: string;

  @Column({ name: 'meal_type', type: 'varchar', length: 20 })
  mealType!: string;

  @Column({ name: 'title', type: 'varchar', length: 120, nullable: true })
  title!: string | null;

  @Column({
    name: 'consumed_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  consumedAt!: Date;

  @Column({ name: 'notes', type: 'text', nullable: true })
  notes!: string | null;

  @ManyToOne(() => User, (user) => user.meals, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @OneToMany(() => MealEntry, (entry) => entry.meal)
  entries!: MealEntry[];
}
