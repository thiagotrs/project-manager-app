import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../http";
import { Project } from "../../models";

const projects: Project[] = [
  {
    id: "abc-123",
    title: 'Super Project',
    zip_code: '20999-888',
    cost: 25.8,
    done: false,
    deadline: Date.now().toString(),
    username: 'joao.silva',
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  }
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  // const { data: projects } = await api.get("projects");
  
  res.status(200).json(projects);
}