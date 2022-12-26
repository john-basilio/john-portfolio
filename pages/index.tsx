import Head from 'next/head'
import BackgroundSnow from '../components/BackgroundSnow'
import Hero from '../components/Hero'



export default function Home() {
  return (
    <div className='relative w-full h-full flex'>
      <Head>
        <title>John&apos;s Portfolio</title>
        <meta name="description" content="Hi! I'm John, A freelance front-end web developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <BackgroundSnow/>
      <Hero/>
    </div>
  )
}
