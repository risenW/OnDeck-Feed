import { gql } from "@apollo/client";

const PROJECT_QUERY = gql`
  query project($id: Int!) {
    project(id: $id) {
      id
      name
      description
      icon_url
      users {
        id
        name
        avatar_url
      }
    }
  }
`;
const ALL_PROJECTS_QUERY = gql`
  query {
    projects {
      id
      name
      description
      icon_url
      users {
        id
        name
        avatar_url
      }
    }
  }
`;

const USER_QUERY = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      name
      bio
      fellowship
      avatar_url
      projects {
        id
        name
        icon_url
      }
    }
  }
`;
const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      bio
      fellowship
      avatar_url
      projects {
        id
        name
        icon_url
      }
    }
  }
`;

const ANNOUNCEMENT_QUERY = gql`
  query($id: Int!) {
    announcement(id: $id) {
      id
      fellowship
      title
      body
      created_ts
      updated_ts
    }
  }
`;
const ALL_ANNOUNCEMENTS_QUERY = gql`
  query {
    announcements {
      id
      fellowship
      title
      body
      created_ts
      updated_ts
    }
  }
`;

const FEED_QUERY = gql`
  query feed($offset: Int!, $limit: Int!, $fellowship: String!) {
    feed(offset: $offset, limit: $limit, fellowship: $fellowship) {
      announcements{
        id
        fellowship
        title
        body
        created_ts
        updated_ts
      }
      projects {
        id
        name
        description
        icon_url
        created_ts
        updated_ts
      }
      users {
        id
        name
        bio
        fellowship
        avatar_url
        created_ts
        updated_ts
      }
      pageInfo {
        endOffset
        hasNextPage
      }
    }
  }
`
export {
  PROJECT_QUERY,
  USER_QUERY,
  ALL_PROJECTS_QUERY,
  ALL_USERS_QUERY,
  ANNOUNCEMENT_QUERY,
  ALL_ANNOUNCEMENTS_QUERY,
  FEED_QUERY,
};
