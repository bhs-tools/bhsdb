import Head from 'next/head'
import BHSDB from '../components/BHSDB'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BHSDB</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <BHSDB />
    </div>
  )
}
