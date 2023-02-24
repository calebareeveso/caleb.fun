import Head from 'next/head'
import Image from 'next/image'
// import components
import { Layout } from "@/components";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Caleb.fun</title>
        <meta name="description" content="A personally collection of all the interesting and fun stuff on the internet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-black'>
    caleb.fun
      </div>
      </Layout>
  )
}
