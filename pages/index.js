import Head from 'next/head'
import BHSDB from '../components/BHSDB'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>BHSDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BHSDB />
    </div>
  )
}
