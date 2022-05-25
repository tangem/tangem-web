import React from 'react'
import * as styles from './footer.module.scss'
import Zendesk from "../Zendesk";

const Footer = () => {

  return (
    <footer className={styles.footer}>
	    <span className={styles.madeIn}>
		    From Switzerland
	    </span>
      <div className={styles['footer-copyright']}>
        Copyright © {(new Date()).getFullYear()} Tangem. All Rights Reserved.{"\n"}
        Global Headquarters, Tangem AG, Baarerstrasse 10, 6300 Zug, Switzerland
      </div>
	    <Zendesk />
    </footer>
  )
}

export default Footer
