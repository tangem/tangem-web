import React from 'react'
import classNames from 'classnames'
import styles from './compatible.module.scss'
import {t} from "i18next";

const SectionWebCompatible = () => {
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
              <source media='(min-width: 768px)' srcSet='/img/compatible/compatible-2x.avif' type="image/avif" />
              <source srcSet='/img/compatible/compatible-1x.avif' type="image/avif" />
              <source media='(min-width: 768px)' srcSet='/img/compatible/compatible-2x.png' />
              <img
                src='/img/compatible/compatible-1x.png'
                alt='Tangem Web 3 Compatible image'
                className='w-full mx-auto'
                loading='lazy'
                decoding='async'
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWebCompatible
