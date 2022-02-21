import React, { useState} from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './faq.module.scss'

import ArrowIcon from '../../../../public/svg/faq_arrow.svg'

const accordionData = [
  {
    head: 'How do I apply for a Tangem Card?',
    body: `We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier. We will provide all these details in the Tangem.com Card Terms and Conditions when you apply for your card. We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier.`
  },
  {
    head: 'How do I top-up my card?',
    body: `We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier. We will provide all these details in the Tangem.com Card Terms and Conditions when you apply for your card. We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier.`
  },
  {
    head: 'Which exchange rate will you use?',
    body: `We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier. We will provide all these details in the Tangem.com Card Terms and Conditions when you apply for your card. We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier.`
  },
  {
    head: 'Are there any fees I should be aware of?',
    body: `We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier. We will provide all these details in the Tangem.com Card Terms and Conditions when you apply for your card. We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier.`
  },
  {
    head: 'What is the difference between Tangem Note and Wallet Cards?',
    body: `We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier. We will provide all these details in the Tangem.com Card Terms and Conditions when you apply for your card. We have competitive exchange rates for both fiat and cryptocurrencies. The exact rates depend on your jurisdiction and card tier.`
  },
];

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
  return (
    <div className='mt-24 lg:my-44'>
      <div className='container mx-auto px-4 lg:px-12 xl:px-0'>
        <div className="flex flex-wrap md:flex-nowrap md:px-12 lg:px-0">
          <div className='max-w-md md:mr-12 xl:mr-16'>
            <h2 className='text-6xl xl:text-8xl font-semibold mb-12'>Frequently Asked Questions</h2>
            <picture>
              <source media='(max-width: 767px)' srcSet='./img/faq/faq-2x.png' />
              <source media='(min-width: 768px)' srcSet='./img/faq/faq-2x.png' />
              <img src='./img/faq/faq-2x.png' alt='Tangem FAQ image' loading='lazy' decoding='async' className='mb-10 lg:mb-0 lg:max-w-sm' />
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
