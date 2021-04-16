import db from '../../db'
import { UserRow, AnnouncementRow } from '../../../lib/types'

export default async function announcements(): Promise<AnnouncementRow[]> {
  const announcements: AnnouncementRow[] = await db.getAll(
    `
      SELECT *
      FROM announcements
    `
  )
  return announcements
}
