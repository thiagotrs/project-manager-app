import { GetServerSideProps, NextPage } from 'next';
import React from 'react'
import http from '../http';
import { Project } from '../models';

interface ProjectsPageProps {
  projects: Project[]
}


const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  return (
    <div>
      <h1>Projects</h1>
      <hr />

      {projects.map((project, key) => (
        <div key={key}>
          <h2>{project.title}</h2>
          <input type="checkbox" name={project.title} id={project.title} />
        </div>
      ))}
    </div>
  )
}

export default ProjectsPage

export const getServerSideProps: GetServerSideProps<ProjectsPageProps> = async (context) => {
  const { data: projects } = await http.get("projects");
  
  return {
    props: {
      projects,
    },
  };
};