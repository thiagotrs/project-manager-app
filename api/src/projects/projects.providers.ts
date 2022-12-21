import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Project } from './entities/project.entity';

export const projectsProviders = [
  {
    provide: 'PROJECT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Project),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
