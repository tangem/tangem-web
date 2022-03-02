import React from 'react'
import Link from 'next/link'

import Logo from '../../../../public/svg/tangem-logo.svg'

const Header = ( {toggleBuy} ) => {

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
          onClick={toggleBuy}
          className='flex cursor-pointer justify-center items-center text-[15px] leading-[22px] font-semibold px-[12px] py-[4.5px]
          text-white bg-[#141D26] hover:bg-[#06090D] transition ease-in-out duration-300 rounded-[12px]
          md:rounded-[14px] md:h-[38px] md:text-[18px] md:leading-[18px] md:px-[20px] md:py-10px'
        >
          Buy now
        </button>
      </div>
    </header>
  )
}

export default Header
