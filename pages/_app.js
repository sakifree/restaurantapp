// import 'tailwindcss/tailwind.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
          <title>EXAMPLE</title>
          <meta name="description" contents="..." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
