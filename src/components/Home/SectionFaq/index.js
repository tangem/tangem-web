import React, {useEffect, useRef, useState} from 'react'
import classNames from 'classnames'
import styles from './faq.module.scss'
import {t} from "i18next";

const Accordion = ({ head, body }) => {

  const [isActive, setIsActive] = useState(false);
	const ref = useRef();

	useEffect(() => {
		if(!ref.current) {
			return function empty() {
				//
			}
		}
		ref.current.style.maxHeight = isActive ? ref.current.scrollHeight + "px" : null;
	}, [isActive]);

  return (
    <>
      <div className={classNames(styles.item, isActive && styles.active )} onClick={() => setIsActive((v) => !v)}>
        <div className={styles.head}>
          <span>{head}</span>
          <button className={styles.button}></button>
        </div>
	      <div ref={ref} className={styles.body}>{body}</div>
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
