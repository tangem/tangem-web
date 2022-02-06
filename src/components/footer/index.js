import React from 'react'
import styles from './footer.module.scss'

import Logo from '../../../public/svg/tangem_logo.svg'
import NewIcon from '../../../public/svg/new_text.svg'
import TwitterIcon from '../../../public/svg/footer_twitter.svg'
import FacebookIcon from '../../../public/svg/footer_fb.svg'
import InstaIcon from '../../../public/svg/footer_insta.svg'
import GithubIcon from '../../../public/svg/footer_github.svg'
import YoutubeIcon from '../../../public/svg/footer_youtube.svg'
import LinkedinIcon from '../../../public/svg/footer_linkedin.svg'
import Link from 'next/link'

export const Footer = () => {

  return (
    <footer className={styles['footer']}>
      <div className="container g-0">
        <div className="row">
          <div className="col-3">
            <div>
              <Logo />
            </div>
            <div className={styles['footer-socials']}>
              <TwitterIcon className={styles['footer-social']} />
              <FacebookIcon className={styles['footer-social']} />
              <InstaIcon className={styles['footer-social']} />
              <GithubIcon className={styles['footer-social']} />
              <YoutubeIcon className={styles['footer-social']} />
              <LinkedinIcon />
            </div>
          </div>
          <div className="col g-0">
            <div className={styles['footer-items']}>
              <div className="row">
                <div className="col g-0" style={{ maxWidth: '160px', marginLeft: '110px', marginRight: '72px'}}>
                  <div className={styles['footer-title']}>For individuals</div>
                  <ul className={styles['footer-ul']}>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Tangem Wallet</a>
                      </Link>
                    </li>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>
                          Tangem Notes
                          <NewIcon className={styles['footer-new']} />
                        </a>
                      </Link>
                    </li>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Tangem Twin</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col g-0" style={{ maxWidth: '160px', marginRight: '72px'}}>
                  <div className={styles['footer-title']}>For Business</div>
                  <ul className={styles['footer-ul']}>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Tangem Chip</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col g-0" style={{ maxWidth: '160px', marginRight: '72px'}}>
                  <div className={styles['footer-title']}>Customer Center</div>
                  <ul className={styles['footer-ul']}>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Getting started</a>
                      </Link>
                    </li>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Support</a>
                      </Link>
                    </li>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>FAQ</a>
                      </Link>
                    </li>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Terms of Service</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col g-0" style={{ maxWidth: '185px' }}>
                  <div className={styles['footer-title']}>Company</div>
                  <ul className={styles['footer-ul']}>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>About Tangem</a>
                      </Link>
                    </li>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Technologies</a>
                      </Link>
                    </li>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Membership & Association</a>
                      </Link>
                    </li>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Certificates</a>
                      </Link>
                    </li>
                    <li className={styles['footer-li']}>
                      <Link href="#">
                        <a className={styles['footer-link']}>Partnerships</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles['footer-copyright']}>
              Copyright © 2022 Tangem. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
