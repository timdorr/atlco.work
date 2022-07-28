import './index.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const social = {
    title: 'ATL Coworking',
    description: 'Working together in Atlanta',
    url: 'https://atlco.work/',
    image: 'https://atlco.work/logo.svg'
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{social.title}</title>
        <meta name="title" content={social.title} />
        <meta name="description" content={social.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={social.url} />
        <meta property="og:title" content={social.title} />
        <meta property="og:description" content={social.description} />
        <meta property="og:image" content={social.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={social.url} />
        <meta name="twitter:title" content={social.title} />
        <meta name="twitter:description" content={social.description} />
        <meta name="twitter:image" content={social.image} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content={social.title} />
        <meta name="application-name" content={social.title} />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
