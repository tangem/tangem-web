import React, { useState} from 'react'
import classNames from 'classnames'
import { motion, AnimatePresence, m } from 'framer-motion'
import styles from './faq.module.scss'

import ArrowIcon from '../../../public/svg/faq_arrow.svg'

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
    // <motion.div>
    //   <AnimatePresence>
    //     <motion.div
    //       key="question"
    //       className="rounded-tr-md relative z-20 rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       <motion.div className="text-gray-800 font-bold ml-1">
    //         Do you like animations?
    //       </motion.div>
    //     </motion.div>

    //     {isOpen && (
    //       <motion.div
    //         key="answer"
    //         initial={{ opacity: 0 }}
    //         animate={{
    //           opacity: 1,
    //           transition: {
    //             duration: 0.5,
    //           },
    //         }}
    //         exit={{ opacity: 0 }}
    //         className="p-2 text-lg text-gray-700 border-l border-b border-gray-300"
    //       >
    //         Yes, I love them!
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </motion.div>

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
              {head}
              <ArrowIcon className={classNames(styles['faq-icon'], styles[`${isActive ? 'faq-icon--active' : ''}`])} />
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

export const Faq = () => {
  return (
    <div className={styles['faq']}>
      <div className='container g-0'>
        <div className="" style={{ display: 'flex' }}>
          <div className='' style={{ maxWidth: '455px' }}>
            <div className={styles['faq-title']}>Frequently Asked Questions</div>
            <img src="./img/faq-papers.png" alt="tangem faq" className={styles['faq-img']} />
          </div>
          <div className='' style={{ maxWidth: '778px', width: '100%', marginLeft: 'auto'}}>
            {accordionData?.map(({ head, body }, idx) => (
              <Accordion key={idx} head={head} body={body} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
