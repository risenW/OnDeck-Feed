import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>On Deck Newsfeed</title>
      </Head>
      <h1>Hello there!</h1>
      <p>Your future newsfeed goes to this page. Or not, you decide 🤷</p>
      <span>Check out these pages:</span>
      <ul>
        <li>Project <Link href="/projects/10">Blue Onion Labs</Link></li>
        <li>User <Link href="/users/11">Cai Burris</Link></li>
      </ul>
    </Layout>
  )
}
