import { GetServerSideProps, NextPage } from 'next';
import React from 'react'
import http from '../http';
import { Project } from '../models';
import styles from '../styles/Home.module.css'

interface ProjectsPageProps {
  projects: Project[]
}


const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  return (
    <main className={styles.main}>
      <h1>Projects</h1>
      <hr />

      {projects.map((project, key) => (
        <div key={key}>
          <h2>{project.title} <input type="checkbox" name={project.title} id={project.title} /></h2>
        </div>
      ))}
    </main>
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