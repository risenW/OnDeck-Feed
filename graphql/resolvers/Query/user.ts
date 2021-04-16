import db from '../../db'
import { UserRow} from '../../../lib/types'

type Args = {
  id: number;
}

export async function user(parent: unknown, {id}: Args): Promise<UserRow> {
  const user: UserRow | undefined = await db.getOne(
    'SELECT * FROM users WHERE id = ?',
    [id]
  )
  if (!user) {
    throw new Error(`User ${id} not found`)
  }
  return user
}

export async function users(parent: unknown, {id}: Args): Promise<UserRow[]> {
  const users: UserRow[] | undefined = await db.getAll(
    'SELECT * FROM users'
  )
  if (!user) {
    throw new Error(`User ${id} not found`)
  }
  return users
}