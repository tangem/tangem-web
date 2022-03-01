import React, { useState} from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './faq.module.scss'

import ArrowIcon from '../../../../public/svg/faq_arrow.svg'

const accordionData = [
  {
    head: "What is a Tangem Wallet?",
    body: "Tangem Wallet is the safest hardware wallet in the world. Tangem Wallet keeps your Bitcoin, Ethereum, and more than 1000 additional cryptocurrencies completely safe. The card is the key to your wallet, and using your funds requires taping the card to your phone."
  },
  {
    head: "What can I do with Tangem Wallet?",
    body: "Tangem Wallet allows you to buy and sell cryptocurrencies using Apple Pay, Google Pay and credit cards. Additionally, it has access to hundreds of decentralized services, which allow trading on exchanges, issuing loans, borrowing funds, working with NFTs and much more."
  },
  {
    head: "Where are the keys to my wallet kept?",
    body: "The wallet's keys are generated and stored in the card as the top secret. For any operations with your wallet, you will need one of the cards connected to it."
  },
  {
    head: "What happens if I lose the card?",
    body: "Tangem Wallet allows connecting up to 3 cards to a single wallet. All 3 cards are equal in capabilities and can be used with your wallet. To protect your wallet from unauthorized access, you can also set an access code for your card. If you forget the access code, you can restore it with an additional previously connected card."
  },
  {
    head: "How reliable and safe is it?",
    body: "Tangem Wallet is the most safe and reliable crypto wallet in the world. The chip in your card is a microcomputer. It has been certified by Common Criteria at EAL6+ level — the same level of chip protection used in passports. It is completely safe from dust, water, and hacking attempts. The card reliably performs in temperatures between -35℃ (-31.℉) and +85℃ (185℉), with the chip useful life beyond 25 years of service."
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
      <div className='container mx-auto px-4 xl:px-0 2xl:max-w-[1300px]'>
        <div className="flex flex-wrap md:flex-nowrap md:px-0">
          <div className='max-w-md md:mr-12 xl:mr-16'>
            <h2 className='text-6xl xl:text-8xl font-semibold mb-12'>Frequently Asked Questions</h2>
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
