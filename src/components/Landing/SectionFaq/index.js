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
      <div className={classNames(styles.item, isActive && styles.active )} onClick={() => setIsActive(!isActive)}>
        <div className={styles.head}>
          <span>{head}</span>
          <button className={styles.button}></button>
        </div>
        {isActive && (
          <motion.div
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.body}>{body}</div>
          </motion.div>
        )}
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
    <section className={styles.faq}>
	    <h2 className={styles.title}>{ t('faq.title') }</h2>
      <div className={styles.qustions}>
        {accordionData?.map(({ head, body }, idx) => (
          <Accordion key={idx} head={head} body={body} />
        ))}
      </div>
    </section>
  )
}

export default SectionFaq
