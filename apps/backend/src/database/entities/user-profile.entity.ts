import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { SoftDeleteBaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'user_profile' })
export class UserProfile extends SoftDeleteBaseEntity {
  @Column({ name: 'user_id', type: 'uuid', unique: true })
  userId!: string;

  @Column({ name: 'full_name', type: 'varchar', length: 120 })
  fullName!: string;

  @Column({ name: 'birth_date', type: 'date', nullable: true })
  birthDate!: string | null;

  @Column({ name: 'biological_sex', type: 'varchar', length: 20, nullable: true })
  biologicalSex!: string | null;

  @Column({
    name: 'height_cm',
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
  })
  heightCm!: string | null;

  @Column({ name: 'activity_level', type: 'varchar', length: 30, nullable: true })
  activityLevel!: string | null;

  @OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
