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
      <Link href="/feeds/all"><a> See all feed</a></Link>
      <Link href="/feeds/founders"><a> See feed for founders and angels</a></Link>
      <Link href="/feeds/writers"><a> See feed for writers</a></Link>
    </Layout>
  )
}
