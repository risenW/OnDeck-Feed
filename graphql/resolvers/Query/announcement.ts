import db from '../../db'
import { AnnouncementRow } from '../../../lib/types'

type Args = {
  id: number;
}

export async function announcement(parent: unknown, { id }: Args): Promise<AnnouncementRow> {
  const announcement: AnnouncementRow | undefined = await db.getOne(
    'SELECT * FROM announcements WHERE id = ?',
    [id]
  )
  if (!announcement) {
    throw new Error(`Announcement ${id} not found`)
  }
  return announcement
}

export async function announcements(parent: unknown, { id }: Args): Promise<AnnouncementRow[]> {
  const announcements: AnnouncementRow[] | undefined = await db.getAll(
    'SELECT * FROM announcements'
  )
  if (!announcements) {
    throw new Error(`Projects not found`)
  }
  return announcements
}
