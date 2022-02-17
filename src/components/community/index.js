import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './community.module.scss'

import TwitterIcon from '../../../public/svg/twitter.svg'
import FacebookIcon from '../../../public/svg/fb.svg'
import InstaIcon from '../../../public/svg/insta.svg'
import GithubIcon from '../../../public/svg/github.svg'
import YoutubeIcon from '../../../public/svg/youtube.svg'
import LinkedinIcon from '../../../public/svg/linkedin.svg'

export const Community = () => {
  return (
    <div className='container mt-14 mx-auto md:px-12 xl:px-0 mb-14 md:mb-24'>
      <div className='relative'>
        <picture>
          <source media='(max-width: 767px)' srcSet='./img/community/community-1x.png' />
          <source media='(min-width: 768px)' srcSet='./img/community/community-2x.png' />
          <img src='./img/community/community-2x.png' alt='Tangem Global Community image' className='w-full' loading='lazy' decoding='async' />
        </picture>
        <div className="absolute left-0 top-0 lg:left-1/2 lg:translate-x-[-50%] lg:w-9/12">
          <div className='pt-8 px-4 md:p-8 lg:pt-8 lg:pb-0 lg:px-0 xl:pt-24'>
            <h2 className='text-5xl md:text-2xl xl:text-6xl font-semibold text-white md:text-center'>Join the Global Community <br /> of <span className='text-emerald-400'>Tangem Users</span></h2>
            <p className='text-xl md:text-base xl:text-2xl text-neutral-400 md:text-center my-7 md:mb-6 lg:mb-12 max-w-3xl mx-auto'>Tangem is trusted by clients and leading market players from all around the globe today. We have established presence in 108 countries on 5 continents, except Antarctica.</p>
            <div className='flex justify-between'>
              <Link href="#">
                <a>
                  <TwitterIcon />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FacebookIcon />
                </a>
              </Link>
              <InstaIcon />
              <GithubIcon />
              <YoutubeIcon />
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
