import db from '../../db'
import { UserRow, ProjectRow} from '../../../lib/types'

export default async function projects(user: UserRow): Promise<ProjectRow[]> {
  const projects: ProjectRow[] = await db.getAll(
    `
      SELECT p.*
      FROM user_projects up
      JOIN projects p ON up.project_id = p.id
      WHERE up.user_id = ?
    `,
    [user.id]
  )
  return projects
}
