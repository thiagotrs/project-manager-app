import { User } from 'src/users/entities/user.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  zip_code: string;

  @Column('float')
  cost: number;

  @Column()
  done: boolean;

  @Column()
  deadline: Date;

  @Column('varchar')
  username: string;

  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @BeforeInsert()
  generateId() {
    if (this.id) {
      return;
    }
    this.id = uuidv4();
  }

  @BeforeInsert()
  setCreatedAt() {
    if (this.created_at) {
      return;
    }
    this.created_at = new Date();
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updated_at = new Date();
  }

  @BeforeInsert()
  setDone() {
    if (this.done) {
      return;
    }
    this.done = false;
  }
}
