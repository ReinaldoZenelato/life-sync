import { Column, Entity, OneToMany, OneToOne, Unique } from 'typeorm';
import { Meal } from './meal.entity';
import { NutritionGoal } from './nutrition-goal.entity';
import { SoftDeleteBaseEntity } from './base.entity';
import { UserProfile } from './user-profile.entity';
import { WaterLog } from './water-log.entity';
import { WeightLog } from './weight-log.entity';

@Entity({ name: 'user' })
@Unique(['email'])
export class User extends SoftDeleteBaseEntity {
  @Column({ type: 'varchar', length: 255 })
  email!: string;

  @Column({ name: 'password_hash', type: 'varchar', length: 255 })
  passwordHash!: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive!: boolean;

  @OneToOne(() => UserProfile, (profile) => profile.user)
  profile!: UserProfile;

  @OneToOne(() => NutritionGoal, (goal) => goal.user)
  nutritionGoal!: NutritionGoal;

  @OneToMany(() => WeightLog, (weightLog) => weightLog.user)
  weightLogs!: WeightLog[];

  @OneToMany(() => WaterLog, (waterLog) => waterLog.user)
  waterLogs!: WaterLog[];

  @OneToMany(() => Meal, (meal) => meal.user)
  meals!: Meal[];
}
