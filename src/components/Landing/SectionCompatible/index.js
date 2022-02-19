import React from 'react'
import { useProgressiveImg } from '../../../hooks/useProgressiveImage'

const SectionWebCompatible = () => {
  const [src, { blur }] = useProgressiveImg('./img/compatible/compatible-placeholder.png', './img/compatible/compatible-2x.png')

  return (
    <div className='mb-28 xl:mb-40'>
      <div className='md:container mx-auto'>
        <div className="text-left md:text-center max-w-4xl md:mx-auto px-4 md:px-0">
          <h2 className='text-6xl xl:text-8xl font-semibold'>Web 3.0 compatible</h2>
          <p className='my-7 md:mt-6 md:mb-20 text-xl xl:text-3xl text-neutral-400'>Exchange, buy NFT’s, make loans and deposits in more than 100 different decentralized applications with help of Wallet Connect.</p>
        </div>
        <div>
          <div className='w-full lg:w-auto mx-auto mt-7 md:mt-0 lg:mx-0'>
            <picture>
              <source media='(max-width: 768px)' srcSet='./img/compatible/compatible-1x.png' />
              <source media='(min-width: 769px)' srcSet='./img/compatible/compatible-2x.png' />
              <img
                src={src}
                alt='Tangem Web 3 Compatible image'
                className='w-full'
                loading='lazy'
                decoding='async'
                style={{
                  width: '1198px',
                  filter: blur ? 'blur(20px)' : 'none',
                  transition: blur ? 'none' : 'filter 0.3s ease-out',
                }}
              />
            </picture>
          </div>
          {/* <div className='mt-10 xl:mt-16'>
            <Link href='#'>
              <a className='w-3/6 lg:w-48 flex justify-center mx-auto text-base lg:text-lg font-semibold text-neutral-900 bg-[#ecedee] hover:bg-[#DEE0E1] transition ease-in-out duration-300 py-3 rounded-2xl'>See all dapps</a>
            </Link>
          </div> */}
        </div>
        {/* <div className="row">
          <div className={classNames(styles['web3-items'], styles['web3-items-end'])}>
            {coins?.length !== 0 && coins.map(({ id, title, imgPath }) => (
              <div key={id} className={styles['web3-item']}>
                <img
                  src={imgPath}
                  alt={title}
                  className={styles['web3-img']}
                  loading='lazy'
                  decoding='async'
                />
                <span className={styles['web3-text']}>{title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className={classNames(styles['web3-items'], styles['web3-items-start'])}>
            {coins?.length !== 0 && coins.map(({ id, title, imgPath }) => (
              <div key={id} className={styles['web3-item']}>
                <img
                  src={imgPath}
                  alt={title}
                  className={styles['web3-img']}
                  loading='lazy'
                  decoding='async'
                />
                <span className={styles['web3-text']}>{title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className={classNames(styles['web3-items'], styles['web3-items-end'])}>
            {coins?.length !== 0 && coins.map(({ id, title, imgPath }) => (
              <div key={id} className={styles['web3-item']}>
                <img
                  src={imgPath}
                  alt={title}
                  className={styles['web3-img']}
                  loading='lazy'
                  decoding='async'
                />
                <span className={styles['web3-text']}>{title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className={classNames(styles['web3-items'], styles['web3-items-start'])}>
            {coins?.length !== 0 && coins.map(({ id, title, imgPath }) => (
              <div key={id} className={styles['web3-item']}>
                <img
                  src={imgPath}
                  alt={title}
                  className={styles['web3-img']}
                  loading='lazy'
                  decoding='async'
                />
                <span className={styles['web3-text']}>{title}</span>
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className={styles['web3-cta']}>
          <Button type='secondary' href='#'>See all dapp</Button>
        </div> */}
      </div>
    </div>
  )
}

export default SectionWebCompatible
