import styles from '../styles/apply.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className=''>
        <div  className={styles.background + " main min-h-screen flex justify-center items-center text-center pl-10 pr-10"}>
          <div className="main">
            <h1 className="text-4xl font-bold text-white">Everything you are. In one, simple link in bio.</h1>
            <h1 className="text-lg text-white">One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</h1>
            
            <h1 className="text-4xl mt-10 pt-10 font-bold text-white">Create and customize your Linkstack in minutes.</h1>
            <h1 className="text-lg text-white">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</h1>
            
            <Link href='/apply'>
              <button className='mt-10 inline-flex w-full md:w-auto px-5 py-3 text-purple-500 font-bold hover:text-purple-700 hover:bg-purple-100 rounded-md mb-3 border-2 border-purple-500'>
                Get Started !
              </button>
            </Link>

            <h1 className="text-4xl mt-10 font-bold text-white">Share your Linkstack from your Instagram, TikTok, Twitter and other bios.</h1>
            <h1 className="text-lg text-white">Add your unique Linkstack URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online..</h1>
            
            <h1 className="text-4xl mt-10 pt-10 font-bold text-white">Analyze your audience and keep your followers engaged.</h1>
            <h1 className="text-lg text-white">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</h1>
          </div>
        </div>
      </section>
    </>
  )
}
