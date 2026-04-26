import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteBaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'nutrition_goal' })
export class NutritionGoal extends SoftDeleteBaseEntity {
  @Column({ name: 'user_id', type: 'uuid', unique: true })
  userId!: string;

  @Column({ name: 'daily_calorie_target', type: 'integer', nullable: true })
  dailyCalorieTarget!: number | null;

  @Column({ name: 'daily_protein_target_g', type: 'integer', nullable: true })
  dailyProteinTargetG!: number | null;

  @Column({ name: 'daily_carbs_target_g', type: 'integer', nullable: true })
  dailyCarbsTargetG!: number | null;

  @Column({ name: 'daily_fat_target_g', type: 'integer', nullable: true })
  dailyFatTargetG!: number | null;

  @Column({ name: 'daily_water_target_ml', type: 'integer', nullable: true })
  dailyWaterTargetMl!: number | null;

  @OneToOne(() => User, (user) => user.nutritionGoal, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
