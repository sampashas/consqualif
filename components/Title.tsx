import Head from "next/head";

function Title({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

export default Title;
