import React from 'react'
import { useLockScroll } from '../../hooks/useLockScroll'

const YoutubeModal = ({ youtubeModal, handleVideoModal }) => {

  useLockScroll(youtubeModal)

  return (
    <div
      onClick={handleVideoModal}
      className='fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0'
    >
      <div
        className='bg-white rounded-xl shadow-2xl p-6 sm:w-10/12 mx-10'
        onClick={handleVideoModal}
      >
        <span className='block mb-3 text-2xl font-bold'>
          How it works
        </span>
        <div>
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
        <div className='mt-5 space-x-5 text-right'>
          <button
            onClick={handleVideoModal}
            className='px-4 py-2 text-sm font-bold text-gray-500 transition-colors 
            duration-150 ease-linear bg-white border border-gray-200 rounded-xl 
            focus:outline-none focus:ring-0 hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default YoutubeModal
