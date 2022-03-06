import React from 'react'

import CloseIcon from '../../../../public/svg/close.svg'
import {t} from "i18next";

const Video = ({ hide }) => {

  return (
	  <div className='fixed bg-white left-0 right-0 top-0 bottom-0 overflow-hidden'>
	    <div
	      className={`fixed flex items-center justify-center bg-[#F8F9F9] w-full h-full`}
	    >
	      <div
	        className={`bg-[#F8F9F9] w-full h-full lg:container lg:mx-auto relative`}
	      >
	        <CloseIcon
	          className='absolute top-[30px] right-[40px] max-w-[36px] cursor-pointer'
	          onClick={hide}
	        />
	        <div className="text-[#090E13] text-32px text-center font-semibold mt-[40px] mb-32px lg:mb-10">
		        { t('video.title') }
					</div>
	        <div className="flex flex-col px-4 lg:px-0">
	          <iframe
							width='100%'
							height='500px'
							src='https://www.youtube.com/embed/ST4jvcaE_UU'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
	          />
	        </div>
	      </div>
	    </div>
	  </div>
  )
}

export default Video
