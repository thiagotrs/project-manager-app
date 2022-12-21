import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject('PROJECT_REPOSITORY')
    private projectRepository: Repository<Project>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createProjectDto: CreateProjectDto, username: string) {
    const project = await this.projectRepository.create(createProjectDto);
    project.username = username;
    return await this.projectRepository.save(project);
  }

  async findAll(username: string) {
    return await this.userRepository.findOne({ where: { username } });
  }

  async findOne(id: string) {
    return await this.projectRepository.findOne({ where: { id } });
  }

  async update(
    id: string,
    username: string,
    updateProjectDto: UpdateProjectDto,
  ) {
    const project = this.projectRepository.findOne({ where: { id, username } });
    if (project) {
      throw new Error('Project does not exists');
    }

    const updateResult = await this.projectRepository.update(
      id,
      updateProjectDto,
    );
    if (!updateResult.affected) {
      throw new Error('Project does not exists');
    }
    return;
  }

  async check(id: string, username: string) {
    const projectResult = await this.projectRepository.findOne({
      where: { id, username },
    });
    if (projectResult) {
      throw new Error('Project does not exists');
    }

    projectResult.done = true;

    return this.projectRepository.save(projectResult);
  }

  async remove(id: string, username: string) {
    const projectResult = await this.projectRepository.findOne({
      where: { id, username },
    });
    if (projectResult) {
      throw new Error('Project does not exists');
    }
    return await this.projectRepository.delete(id);
  }
}
