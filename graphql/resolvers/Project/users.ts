import db from '../../db'
import { UserRow, ProjectRow} from '../../../lib/types'

export default async function users(project: ProjectRow): Promise<UserRow[]> {
  const users: UserRow[] = await db.getAll(
    `
      SELECT u.*
      FROM user_projects up
      JOIN users u ON up.user_id = u.id
      WHERE up.project_id = ?
    `,
    [project.id]
  )
  return users
}
