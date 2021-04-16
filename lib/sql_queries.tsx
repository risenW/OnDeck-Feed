import { FeedQueryVars } from '../lib/types'

export const writerAnnouncementQuery = (args: FeedQueryVars) => {
    const { limit, offset } = args
    return `SELECT * FROM announcements
    WHERE fellowship = "writers" OR fellowship = "all"
    ORDER BY created_ts  DESC LIMIT ${limit} OFFSET ${offset}`

}
export const writerUserQuery = (args: FeedQueryVars) => {
    const { limit, offset } = args
    return `SELECT * FROM users
    WHERE fellowship = "writers"
    ORDER BY created_ts  DESC LIMIT ${limit} OFFSET ${offset}`

}

export const foundersAnnouncementQuery = (args: FeedQueryVars) => {
    const { limit, offset } = args
    return `SELECT * FROM announcements
    WHERE fellowship != "writers"
    ORDER BY created_ts  DESC LIMIT ${limit} OFFSET ${offset}`

}
export const foundersUserQuery = (args: FeedQueryVars) => {
    const { limit, offset } = args
    return `SELECT * FROM users
    WHERE fellowship != "writers"
    ORDER BY created_ts  DESC LIMIT ${limit} OFFSET ${offset}`

}

export const allProjectQuery = (args: FeedQueryVars) => {
    const { limit, offset } = args
    return `SELECT * FROM projects
    ORDER BY created_ts  DESC LIMIT ${limit} OFFSET ${offset}`

}

export const allAnnouncementQuery = (args: FeedQueryVars) => {
    const { limit, offset } = args
    return `SELECT * FROM announcements
    ORDER BY created_ts  DESC LIMIT ${limit} OFFSET ${offset}`

}
export const allUserQuery = (args: FeedQueryVars) => {
    const { limit, offset } = args
    return `SELECT * FROM users
    ORDER BY created_ts  DESC LIMIT ${limit} OFFSET ${offset}`

}