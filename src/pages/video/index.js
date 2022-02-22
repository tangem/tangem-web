import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Video = ({ }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta name="description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tangem.com" />
        <meta property="og:title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:image" content="https://tangem-staging.netlify.app/img/hero/hero-phone-1x.png" />
        <title>Tangem Wallet — hardware wallet for your crypto</title>
        <link rel='shortcut icon' href='/img/favicon/favicon.png' />
        <link rel='apple-touch-icon' href='/img/favicon/favicon_180.png' />
      </Head>
      <div
        className={`fixed flex items-center justify-center overflow-auto z-50 bg-[#F8F9F9] left-0 right-0 top-0 bottom-0 w-full h-full`}
      >
        <div
          className={`bg-[#F8F9F9] w-full h-full lg:container lg:mx-auto relative`}
        >
          <img
            src='./img/common/close.png'
            onClick={() => router.push('/')}
            className='absolute top-0 right-1.5 max-w-[36px] cursor-pointer'
          />
          <div className="text-[#090E13] text-32px text-center font-semibold mt-[40px] mb-32px lg:mb-10">How it works</div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-7 px-4 lg:px-0">
            <iframe
              width='100%'
              height='500px'
              src='https://www.youtube.com/embed/ST4jvcaE_UU'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video
