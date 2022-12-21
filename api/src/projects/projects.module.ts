import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { DatabaseModule } from 'src/database/database.module';
import { projectsProviders } from './projects.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjectsController],
  providers: [...projectsProviders, ProjectsService],
})
export class ProjectsModule {}
