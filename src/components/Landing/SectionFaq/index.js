import React, { useState} from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './faq.module.scss'

import ArrowIcon from '../../../../public/svg/faq_arrow.svg'
import {t} from "i18next";

const Accordion = ({ head, body }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="faq-items">
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={classNames(styles['faq-item'], styles[`${isActive ? 'faq-item--active' : ''}`])} onClick={() => setIsActive(!isActive)}>
            <div className={classNames(styles['faq-head'], styles[`${isActive ? 'faq-head--active' : ''}`])}>
              <span>{head}</span>
              <span>
                <ArrowIcon className={classNames(styles['faq-icon'], styles[`${isActive ? 'faq-icon--active' : ''}`])} />
              </span>
            </div>
            {isActive && (
              <motion.div
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles['faq-body']}>{body}</div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const SectionFaq = () => {
	const accordionData = [...Array(5)].map((e, i) => {
		return {
			head: t(`faq.items.${i}.question`),
			body: t(`faq.items.${i}.answer`)
		}
	});

  return (
    <div className='mt-24 lg:my-44'>
      <div className='container mx-auto px-4 xl:px-0 2xl:max-w-[1300px]'>
        <div className="flex flex-wrap md:flex-nowrap md:px-0">
          <div className='max-w-md md:mr-12 xl:mr-16'>
            <h2 className='text-6xl xl:text-7xl font-semibold mb-12'>{ t('faq.title') }</h2>
            <picture>
              <img src='./img/faq/faq.svg' alt='Tangem FAQ image' loading='lazy' decoding='async' className='mb-10 lg:mb-0 lg:max-w-sm' />
            </picture>
          </div>
          <div className='w-full max-w-3xl ml-auto'>
            {accordionData?.map(({ head, body }, idx) => (
              <Accordion key={idx} head={head} body={body} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFaq
