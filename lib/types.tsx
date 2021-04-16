// Start of DB TYPES
export type UserRow = {
  id: number;
  name: string;
  bio: string;
  avatar_url: string;
  fellowship: "founders" | "angels" | "writers" | "all"
  created_ts: string;
  updated_ts: string;
}

export type ProjectRow = {
  id: number;
  name: string;
  description: string;
  icon_url: string;
  created_ts: string;
  updated_ts: string;
}

export type UserProjectRow = {
  user_id: number;
  project_id: number;
}

export type AnnouncementRow = {
  id: number;
  fellowship: "founders" | "angels" | "writers" | "all";
  title: string;
  body: string;
  created_ts: string;
  updated_ts: string;
}

type Args = {
  id: number;
}

type FeedRow = {
  announcements: AnnouncementRow[] | undefined,
  projects: ProjectRow[] | undefined,
  users: UserRow[] | undefined
  pageInfo: PageInfo
}

type PageInfo = {
  endOffset: number
  hasNextPage: boolean
}
// End of DB Types

// Start of Project Types
type Project = {
  id: number;
  name: string;
  description: string;
  icon_url: string;
  users: User[];
}

type ProjectUser = {
  id: number;
  name: string;
  avatar_url: string;
}

type ProjectQueryData = {
  project: Project;
}
// End of Project Types

// Start of Announcements Types
type Announcements = {
  id: number;
  created_ts: string;
  updated_ts: string;
  fellowship: "fellows" | "angels" | "writers" | "all" | "founders";
  title: string;
  body: string;
}
// End of Announcements Types

// Start of User Types
type User = {
  id: number;
  name: string;
  bio: string;
  fellowship: "founders" | "angels" | "writers" | "all"
  avatar_url: string;
  projects: Project[];
}

type UserProject = {
  id: number;
  name: string;
  icon_url: string;
}

type UserQueryData = {
  user: User;
}

type UsersQueryData = {
  users: User[]
}
// End of User Types

type QueryVars = {
  id: number;
}

//start of Feeds type
type FeedQueryVars = {
  offset: number;
  limit: number;
  fellowship: string;
}

type FeedQueryData = {
  feed: FeedRow;
}

//end of Feeds type

export type {
  Project,
  ProjectUser,
  Announcements,
  User,
  UserProject,
  ProjectQueryData,
  UserQueryData,
  QueryVars,
  FeedQueryVars,
  UsersQueryData,
  Args,
  FeedRow,
  FeedQueryData
}
