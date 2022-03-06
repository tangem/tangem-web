import React from 'react'
import classNames from 'classnames'
import styles from './community.module.scss'
// import { useProgressiveImg } from '../../../hooks/useProgressiveImage'

import TwitterIcon from '../../../../public/svg/twitter.svg'
import FacebookIcon from '../../../../public/svg/fb.svg'
import InstaIcon from '../../../../public/svg/insta.svg'
import GithubIcon from '../../../../public/svg/github.svg'
import YoutubeIcon from '../../../../public/svg/youtube.svg'
import LinkedinIcon from '../../../../public/svg/linkedin.svg'
import {Selected} from "../Selected";
import {t} from "i18next";

const SectionCommunity = () => {

  // const [src, { blur }] = useProgressiveImg('./img/community/community-placeholder.png', './img/community/community-2x.png')

  return (
    <div className={classNames('md:container mt-14 mx-auto 2xl:max-w-[1300px]', styles['community'])}>
      <div className='pt-8 px-4 md:py-8 lg:pt-8 lg:pb-0 lg:px-0 xl:pt-24'>
        <h2 className='text-[46px] leading-[46px] md:text-2xl xl:text-6xl font-semibold text-white whitespace-pre-line md:text-center'>
	        <Selected
		        text={t('sections.community.title')}
		        selected={t('sections.community.selected')}
		        classes='text-emerald-400'
	        />
				</h2>
        <p className='text-xl md:text-base xl:text-2xl text-neutral-400 md:text-center my-7 md:mb-6 lg:mb-12 max-w-[840px] mx-auto font-light'>
	        {t('sections.community.description')}
				</p>
        <div className='flex justify-between md:justify-evenly lg:justify-center'>
          <a href="https://twitter.com/tangem" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
            <TwitterIcon />
          </a>
          <a href="https://m.facebook.com/TangemCards/" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
            <FacebookIcon />
          </a>
          <a href="https://instagram.com/tangemcards" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
            <InstaIcon />
          </a>
          <a href="https://github.com/tangem" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
            <GithubIcon />
          </a>
          <a href="https://youtube.com/channel/UCFGwLS7yggzVkP6ozte0m1w" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
            <YoutubeIcon />
          </a>
          <a href="https://www.linkedin.com/company/tangem" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SectionCommunity
