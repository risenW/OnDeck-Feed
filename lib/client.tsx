import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                feed: {
                    keyArgs: [],
                    merge(existing, incoming) {
                        const annmerge = [].concat(existing?.announcements, incoming?.announcements)
                        const usersmerge = [].concat(existing?.users, incoming?.users)
                        const projsmerge = [].concat(existing?.projects, incoming?.projects)
                        const pageInfo = incoming.pageInfo
                        const merged = { announcements: annmerge, projects: projsmerge, users: usersmerge, pageInfo }
                        return merged
                    },
                }
            }
        }
    }
})


const client = new ApolloClient({
    uri: '/api/graphql',
    cache,
})

export default client