import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Station Finance</title>
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
        <meta
          name="description"
          content="Home of Station Finance - The decentralized derivatives aggregator."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://station-homepage.vercel.app/" />
        <meta name="og:image" content="https://i.imgur.com/ci40UZl.jpeg" />
        <meta
          property="og:description"
          content="Home of Station Finance - The decentralized derivatives aggregator."
        />
        <meta name="og:title" content="Station Finance Homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="station-homepage.vercel.app" />
        <meta name="twitter:creator" content="@StationFinance" />
        <meta name="twitter:image" content="https://i.imgur.com/ci40UZl.jpeg" />
        <meta
          name="twitter:description"
          content="Home of Station Finance - The decentralized derivatives aggregator."
        />
        <meta name="twitter:title" content="Station Finance Homepage" />
        <script src="/scripts/three.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
