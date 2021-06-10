import 'styles/globals.css';
// import 'tailwindcss/tailwind.css'
import Layout from 'components/Layout'
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
    return(<Layout>
        <Head>
            <title>Fomocraft</title>
            <link rel="icon" href="favicon.ico" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Monoton&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
            
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            
        </Head>
        <Component {...pageProps} />
    </Layout>)
} 

export default MyApp;
