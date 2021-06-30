import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fomocraft</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"
          rel="stylesheet"></link>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@StationFinance" />
        <meta name="twitter:image" content="https://i.imgur.com/AIIMCob.jpeg" />
        <meta name="twitter:description" content="Station Finance Homepage" />
        <meta name="twitter:title" content="Station Finance Homepage" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
