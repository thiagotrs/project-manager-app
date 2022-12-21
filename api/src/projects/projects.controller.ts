import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Put,
  HttpCode,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(
    @Body() createProjectDto: CreateProjectDto,
    @Headers('username') username: string,
  ) {
    return this.projectsService.create(createProjectDto, username);
  }

  @Get()
  findAll(@Headers('username') username: string) {
    return this.projectsService.findAll(username);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @HttpCode(204)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Headers('username') username: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return await this.projectsService.update(id, username, updateProjectDto);
  }

  @HttpCode(204)
  @Patch(':id/done')
  check(@Param('id') id: string, @Headers('username') username: string) {
    return this.projectsService.check(id, username);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string, @Headers('username') username: string) {
    return this.projectsService.remove(id, username);
  }
}
