import Head from 'next/head'

function Title({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

export default Title
