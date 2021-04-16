import db from '../../db'
import { ProjectRow} from '../../../lib/types'

type Args = {
  id: number;
}

export async function project(parent: unknown, {id}: Args): Promise<ProjectRow> {
  const project: ProjectRow | undefined = await db.getOne(
    'SELECT * FROM projects WHERE id = ?',
    [id]
  )
  if (!project) {
    throw new Error(`Project ${id} not found`)
  }
  return project
}

export async function projects(parent: unknown, {id}: Args): Promise<ProjectRow[]> {
  const projects: ProjectRow[] | undefined = await db.getAll(
    'SELECT * FROM projects'
  )
  if (!projects) {
    throw new Error(`Projects not found`)
  }
  return projects
}
