import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './header.module.scss'

import Logo from '../../../../public/svg/tangem-logo.svg'
import DownAngle from '../../../../public/svg/down_angle.svg'

const Header = () => {

  const router = useRouter()

  // const router = useRouter()
  // const [activeLink, setActiveLink] = useState('personal');

  // const homeLink = router.asPath == '/'
  // const personalLink = router.asPath == '/#personal'
  // const bussinessLink = router.asPath == '/#business'
  // const developersLink = router.asPath == '/#developers'

  // useEffect(() => {
  //   if (homeLink || personalLink) {
  //     setActiveLink('personal')
  //   }
  
  //   if (bussinessLink) {
  //     setActiveLink('business')
  //   }
  
  //   if (developersLink) {
  //     setActiveLink('developers')
  //   }
  // }, [homeLink, personalLink, bussinessLink, developersLink])


  return (
    <header
      className='sticky top-0 z-50 bg-foreground border-b-[1px] border-[rgba(0, 0, 0, 0.05)]'>
      <div
        className='container mx-auto flex justify-between items-center h-[47px] px-4
        md:h-[70px] xl:px-2'
      >
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <button
          onClick={() => router.push('/pricing')}
          className='flex cursor-pointer justify-center items-center text-[15px] leading-[22px] font-semibold px-[12px] py-[4.5px]
          text-white bg-[#141D26] hover:bg-[#06090D] transition ease-in-out duration-300 rounded-[12px]
          md:rounded-[14px] md:h-[38px] md:text-[18px] md:leading-[18px] md:px-[20px] md:py-10px'
        >
          Buy now
        </button>
      </div>
    </header>
    // <header className={styles.header}>
    //   <div className='container'>
    //     <div className="row">
    //       <div className="col">

    //         <div className={styles['header-inner']}>
            
    //           <Logo />
              
    //           <nav className={styles['header-nav']}>

    //             <ul className={styles['header-tabs']}>
    //               <li className={styles['header-li']}>
    //                 <Link href="#personal" >
    //                   <a className={classNames(styles['header-tab'], activeLink === 'personal' ? styles['header-tab-active'] : '')}>Personal</a>
    //                 </Link>
    //               </li>
    //               <li className={styles['header-li']}>
    //                 <Link href="#business">
    //                   <a className={classNames(styles['header-tab'], activeLink === 'business' ? styles['header-tab-active'] : '')}>Business</a>
    //                 </Link>
    //               </li>
    //               <li className={styles['header-li']}>
    //                 <Link href="#developers" >
    //                   <a className={classNames(styles['header-tab'], activeLink === 'developers' ? styles['header-tab-active'] : '')}>Developers</a>
    //                 </Link>
    //               </li>
    //             </ul>

    //             <ul className={styles['header-links']}>
    //               <li className={styles['header-li']}>
    //                 <Link href="#products">
    //                   <>
    //                     <a className={styles['header-link']}>
    //                       Products
    //                       <DownAngle />
    //                     </a>
    //                   </>
    //                 </Link>
    //               </li>
    //               <li className={styles['header-li']}>
    //                 <Link href="#company">
    //                   <>
    //                     <a className={styles['header-link']}>
    //                       Company
    //                       <DownAngle />
    //                     </a>
    //                   </>
    //                 </Link>
    //               </li>
    //               <li className={styles['header-li']}>
    //                 <Link href="#help">
    //                   <>
    //                     <a className={styles['header-link']}>
    //                       Help
    //                       <DownAngle />
    //                     </a>
    //                   </>
    //                 </Link>
    //               </li>
    //             </ul>

    //             <Link href='#buy'>
    //               <a className={styles['header-buy']}>
    //                 Buy now
    //               </a>
    //             </Link>

    //           </nav>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  )
}

export default Header
