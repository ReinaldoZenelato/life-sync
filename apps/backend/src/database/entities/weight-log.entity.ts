import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'weight_log' })
@Index(['userId', 'loggedAt'])
export class WeightLog extends BaseEntity {
  @Column({ name: 'user_id', type: 'uuid' })
  userId!: string;

  @Column({
    name: 'weight_kg',
    type: 'numeric',
    precision: 5,
    scale: 2,
  })
  weightKg!: string;

  @Column({
    name: 'logged_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  loggedAt!: Date;

  @Column({ name: 'note', type: 'varchar', length: 255, nullable: true })
  note!: string | null;

  @ManyToOne(() => User, (user) => user.weightLogs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
