import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import CloseIcon from '../../../public/svg/close.svg'

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
        <meta property="og:site_name" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:image" content="https://tangem-staging.netlify.app/img/hero/hero-phone-1x.png" />
        <meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
        <meta property="og:locale" content="en_US" />
        <title>Tangem Wallet — hardware wallet for your crypto</title>
        <link rel='shortcut icon' href='/img/favicon/favicon.png' />
        <link rel='apple-touch-icon' href='/img/favicon/favicon_180.png' />
      </Head>
      <div
        className={`fixed flex items-center justify-center bg-[#F8F9F9] w-full h-full`}
      >
        <div
          className={`bg-[#F8F9F9] w-full h-full lg:container lg:mx-auto relative`}
        >
          <CloseIcon
            className='absolute top-[20px] right-[20px] max-w-[36px] cursor-pointer'
            onClick={() => router.push('/')}
          />
          <div className="text-[#090E13] text-32px text-center font-semibold mt-[40px] mb-32px lg:mb-10">How it works</div>
          <div className="flex flex-col px-4 lg:px-0">
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
