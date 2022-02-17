import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import ShopifyBuy from '@shopify/buy-button-js'
// import DynamicLoadable from 'next/dynamic'
import classNames from 'classnames'
import styles from './intro.module.scss'
// import { SHOPIFY_API_KEY, SHOPIFY_DOMAIN } from '../../config'

import PlayIcon from '../../../public/svg/play.svg'

// const shopifyClient = ShopifyBuy.buildClient({
//   domain: SHOPIFY_DOMAIN,
//   storefrontAccessToken: SHOPIFY_API_KEY,
// })

// const ui = ShopifyBuy.UI.init(shopifyClient)

export const Intro = () => {
  const [isModalOpen, setModal] = useState(false)

  // useEffect(() => {
  //   if (typeof window === undefined) {
  //     console.log('window is undefined')
  //   } else {
  //     var script = document.createElement('script')
  //       script.type = 'text/javascript'
  //       script.async = true
  //       script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
  
  //      document.head.appendChild(script)
  //      script.onload = ShopifyBuyInit
  //   }
  // }, [])

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'shop.tangem.com',
      storefrontAccessToken: 'ca05a1462dc8bdfd8c0a1b8deb4b1c36',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6668889292866',
        node: document.getElementById('product-component-1642444146665'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "iframe": false,
            "buttonDestination": 'modal',
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              }
            },
            "text": {
              "button": "Buy now"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {}
        },
      });
    });
  }

  const handleVideoModal = () => {

    setModal(!isModalOpen)
  }
  
  return (
    <>
      {isModalOpen && (
        <>
          <div onClick={handleVideoModal} className={`fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0 ${isModalOpen ? 'transition ease duration-300 opacity-0 opacity-100 transition ease duration-300 opacity-100 opacity-0' : ''}`}>
            <div className={`bg-white rounded-xl shadow-2xl p-6 sm:w-10/12 mx-10 ${isModalOpen ? 'transition ease duration-100 transform opacity-0 scale-90 translate-y-1 opacity-100 scale-100 translate-y-0 transition ease duration-100 transform opacity-100 scale-100 translate-y-0 opacity-0 scale-90 translate-y-1' : ''}`} onClick={handleVideoModal}>
                <span className="font-bold block text-2xl mb-3">How it works</span>
                <div>
                  <iframe width="100%" height="500px" src="https://www.youtube.com/embed/U07FB_gpfIk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="text-right space-x-5 mt-5">
                  <button onClick={handleVideoModal} className="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">Cancel</button>
                </div>
            </div>
          </div>
        </>
      )}
      <div className={classNames('py-3.5', styles['intro'])}>
        <div className='container flex flex-wrap md:flex-nowrap mt-14 mx-auto px-4 lg:px-0'>
          <div className='lg:mt-7 md:pl-8 md:pr-8 xl:pr-0 xl:pl-0 max-w-580px'>
            <h1 className='text-6xl xl:text-120px font-semibold leading-85'>Keep your crypto <span className='text-gray-400'>safe</span></h1>
            <p className='text-neutral-400 text-xl xl:text-3xl font-normal my-7 lg:mt-10 lg:mb-16'>Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card.</p>
            <div className='flex'>
              <Link href='#'>
                <a className='w-3/6 lg:w-32 flex justify-center text-base lg:text-lg font-semibold text-white bg-[#141D26] hover:bg-[#06090D] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px mr-2 lg:mr-4' data-element="product.button">Buy now</a>
              </Link>
              <button onClick={handleVideoModal} className='w-3/6 lg:w-48 flex justify-center items-center text-base lg:text-lg font-semibold text-neutral-900 bg-[#ecedee] hover:bg-[#DEE0E1] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px'>
                <PlayIcon className='mr-3' />
                How it works
              </button>
            </div>
          </div>
          <div className='mt-14 md:mt-0 lg:ml-36'>
            <picture>
              <source media='(max-width: 768px)' srcSet='./img/intro/intro-phone-1x.png' />
              <source media='(min-width: 769px)' srcSet='./img/intro/intro-phone-2x.png' />
              <img src='./img/intro/intro-phone-2x.png' alt='Tangem Intro image' />
            </picture>
          </div>
        </div>
      </div>
    </>
  )
}
