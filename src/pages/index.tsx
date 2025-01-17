import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test Website</title>
        <meta name="description" content="My test website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to my website</h1>
      </main>
    </div>
  )
} 