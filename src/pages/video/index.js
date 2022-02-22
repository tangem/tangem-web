import React from 'react'
import { useRouter } from 'next/router'

const Video = ({ }) => {
  const router = useRouter()

  return (
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
  )
}

export default Video
