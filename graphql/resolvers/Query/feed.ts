import db from '../../db'
import { AnnouncementRow, ProjectRow, FeedRow, UserRow, FeedQueryVars } from '../../../lib/types'
import {
    writerAnnouncementQuery,
    writerUserQuery,
    foundersAnnouncementQuery,
    foundersUserQuery,
    allAnnouncementQuery,
    allUserQuery,
    allProjectQuery
} from '../../../lib/sql_queries'

export async function feed(parent: unknown, args: FeedQueryVars): Promise<FeedRow> {
    let announcements: AnnouncementRow[] | undefined = []
    let users: UserRow[] | undefined = []
    let projects: ProjectRow[] | undefined = []

    if (args.fellowship == "writers") {
        announcements = await db.getAll(writerAnnouncementQuery(args))
        users = await db.getAll(writerUserQuery(args))
    } else if (args.fellowship == "founders") {
        announcements = await db.getAll(foundersAnnouncementQuery(args))
        users = await db.getAll(foundersUserQuery(args))
        projects = await db.getAll(allProjectQuery(args))
    } else {
        //return all
        announcements = await db.getAll(allAnnouncementQuery(args))
        users = await db.getAll(allUserQuery(args))
        projects = await db.getAll(allProjectQuery(args))
    }

    const hasNextPage = announcements.length != 0 || users.length != 0 || projects.length != 0
    const pageInfo = { endOffset: args.offset + 2, hasNextPage }
    const feeds: FeedRow | undefined = { projects, users, announcements, pageInfo }

    if (!feeds) {
        throw new Error(`An error occured!`)
    }
    return feeds

}
