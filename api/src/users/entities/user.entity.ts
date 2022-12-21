import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { Project } from 'src/projects/entities/project.entity';

@Entity({ name: 'users' })
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @OneToMany(() => Project, (project) => project.user, { cascade: true })
  projects: Project[];

  @BeforeInsert()
  generateId() {
    if (this.id) {
      return;
    }
    this.id = uuidv4();
  }

  @BeforeInsert()
  encryptPass() {
    this.password = bcrypt.hashSync(this.password, 10);
  }
}
