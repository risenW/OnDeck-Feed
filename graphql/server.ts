import { ApolloServer, gql } from "apollo-server-micro";
import * as resolvers from "./resolvers";

const typeDefs = gql`
  type Project {
    id: Int!
    name: String!
    description: String!
    icon_url: String!
    created_ts: String!
    updated_ts: String!
    users: [User!]!
  }

  type User {
    id: Int!
    name: String!
    bio: String!
    avatar_url: String!
    fellowship: String!
    created_ts: String!
    updated_ts: String!
    projects: [Project!]!
  }

  type Announcement {
    id: Int!
    fellowship: String!
    title: String!
    body: String!
    created_ts: String!
    updated_ts: String!
  }

  type Feed {
    projects: [Project!]!
    users: [User!]!
    announcements: [Announcement]!
    pageInfo: PageInfo
  }

  type PageInfo {
    endOffset: Int
    hasNextPage: Boolean
  }

  type Query {
    project(id: Int!): Project!
    user(id: Int!): User!
    projects(skip: Int, limit: Int): [Project]!
    users(skip: Int, limit: Int): [User]!
    announcement(id: Int!): Announcement!
    announcements(skip: Int, limit: Int): [Announcement!]!
    feed(offset: Int!, limit: Int!, fellowship: String!): Feed!
  }
`;

export const server = new ApolloServer({ typeDefs, resolvers });
