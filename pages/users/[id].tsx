import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import Layout from 'components/Layout'
import UserCard from 'components/UserCard'
import { UserQueryData, QueryVars} from '../../lib/types'
import { USER_QUERY} from '../../lib/apollo_queries'

export default function UserPage() {
  const {query} = useRouter()

  const {data, error, loading} = useQuery<UserQueryData, QueryVars>(
    USER_QUERY,
    {
      skip: !query.id,
      variables: {id: Number(query.id)},
    }
  )
  const user = data?.user;

  if (!user || loading || error) {
    return null
  }

  return (
    <Layout>
      <UserCard user={user} />
    </Layout>
  )
}
