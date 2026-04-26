import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'water_log' })
@Index(['userId', 'loggedAt'])
export class WaterLog extends BaseEntity {
  @Column({ name: 'user_id', type: 'uuid' })
  userId!: string;

  @Column({ name: 'amount_ml', type: 'integer' })
  amountMl!: number;

  @Column({
    name: 'logged_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  loggedAt!: Date;

  @ManyToOne(() => User, (user) => user.waterLogs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
