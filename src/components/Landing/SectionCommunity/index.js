import React from 'react'
import classNames from 'classnames'
import styles from './community.module.scss'
import { Selected } from "../Selected";
import { t } from "i18next";

const SectionCommunity = () => {

  // const [src, { blur }] = useProgressiveImg('/img/community/community-placeholder.png', '/img/community/community-2x.png')

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
	        <a href={t('socials.telegram')} target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
		        <img src='/svg/telegram.svg' alt='telegram' loading='lazy' />
	        </a>
          <a href="https://twitter.com/tangem" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
	          <img src='/svg/twitter.svg' alt='twitter' loading='lazy' />
          </a>
          <a href="https://m.facebook.com/TangemCards/" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
	          <img src='/svg/facebook.svg' alt='facebook' loading='lazy' />
          </a>
          <a href="https://instagram.com/tangemcards" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
	          <img src='/svg/instagram.svg' alt='instagram' loading='lazy' />
          </a>
          <a href="https://github.com/tangem" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
	          <img src='/svg/github.svg' alt='github' loading='lazy' />
          </a>
          <a href="https://youtube.com/channel/UCFGwLS7yggzVkP6ozte0m1w" target="_blank" rel="noopener noreferrer" className='lg:mr-[60px]'>
	          <img src='/svg/youtube.svg' alt='youtube' loading='lazy' />
          </a>
          <a href="https://www.linkedin.com/company/tangem" target="_blank" rel="noopener noreferrer">
	          <img src='/svg/linkedin.svg' alt='linkedin' loading='lazy' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SectionCommunity
