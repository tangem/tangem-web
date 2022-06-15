import React from 'react'
import classNames from 'classnames'
import styles from './compatible.module.scss'
import { useProgressiveImg } from '../../../hooks/useProgressiveImage'
import {t} from "i18next";

const SectionWebCompatible = () => {
  const [src, { blur }] = useProgressiveImg('/img/compatible/compatible-placeholder.png', '/img/compatible/compatible-2x.png')

  return (
    <div className={classNames(styles.compatible, 'mb-28 md:mt-[100px] xl:mb-40')}>
      <div className='xl:container xl:mx-auto'>
        <div className={`text-center md:text-center max-w-4xl md:mx-auto px-4 md:px-0 ${styles.title}`}>
          <h2>{ t('sections.compatible.title') }</h2>
          <p>{ t('sections.compatible.description') }</p>
        </div>
        <div>
          <div className='w-full lg:w-auto mx-auto mt-7 md:mt-0 lg:mx-0'>
            <picture>
              <source media='(max-width: 768px)' srcSet='/img/compatible/compatible-1x.png' />
              <source media='(min-width: 769px)' srcSet='/img/compatible/compatible-2x.png' />
              <img
                src={src}
                alt='Tangem Web 3 Compatible image'
                className='w-full mx-auto'
                loading='lazy'
                decoding='async'
                style={{
                  width: '1198px',
                  filter: blur ? 'blur(20px)' : 'none',
                  transition: blur ? 'none' : 'filter 0.3s ease-out',
                }}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWebCompatible
