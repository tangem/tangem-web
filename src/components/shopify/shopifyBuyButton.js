import { useEffect, useState } from 'react'
import ShopifyBuy from '@shopify/buy-button-js'
import { SHOPIFY_DOMAIN, SHOPIFY_API_KEY } from '../../config'

const shopifyClient = ShopifyBuy.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_API_KEY,
})

const ui = ShopifyBuy.UI.init(shopifyClient)

const ShopifyBuyButton = ({ id }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ui.createComponent('product', {
      id,
      options: {
        window: {
          height: 600,
          width: 1000,
          toolbar: 0,
          scrollbars: 1,
          status: 0,
          resizable: 1,
          center: 0,
          createnew: 1,
          location: 0,
          menubar: 0,
          onUnload: null,
          titlebar: 'yes',
        },
        product: {
          iframe: false,
          buttonDestination: 'checkout',
          popup: false,
          templates: {
            button: '<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">Buy now {{data.formattedPrice}}</button></div>'
          },
          classes: {
            product: 'flex flex-col items-center',
            imgWrapper: 'h-[170px] lg:h-[240px]',
            img: 'max-w-[263px] lg:max-w-[353px] h-full',
            prices: 'hidden',
            title: 'max-w-[210px] lg:max-w-[275px] text-center mt-[36px] lg:mt-[60px] text-[#0C1116] text-3xl font-medium lg:text-[2.5rem]',
            description: 'mt-3 mb-[2.375rem] lg:mb-14 text-[1.063rem] lg:text-2xl text-center text-white opacity-50 lg:max-w-[437px]',
            buttonWrapper: 'w-full flex justify-center mt-[38px] lg:mt-[56px] block w-full bg-[#ECEDED] text-[#090E13] text-[1.375rem] lg:text-lg font-medium rounded-[1.125rem] py-3 lg:py-4 text-center max-w-[277px]',
            button: 'btn font-semibold'
          },
          text: {
            button: 'Buy now',
            outOfStock: 'Out of stock',
            unavailable: 'Unavailable',
            unitPriceAccessibilityLabel: '',
            unitPriceAccessibilitySeparator: '',
            regularPriceAccessibilityLabel: '',
            salePriceAccessibilityLabel: '',
          },
        },
        cart: {
          startOpen: false,
          popup: false,
        },
        modalProduct: {
          iframe: false,
          contents: {
            img: true,
            title: true,
            description: true,
            button: true,
            prices: false,
            options: false,
            quantity: false,
            unitPrice: false,
            variantTitle: false,
            imgWithCarousel: false,
            quantityIncrement: false,
            quantityDecrement: false,
            buttonWithQuantity: false,
          },
        },
        order: [
          'img',
          'title',
          'description',
          'price',
          'button',
        ],
      },
      node: document && document.getElementById(`buy-now-${id}`),
    })
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  })

  if (loading) {
    return (
      <div className="w-full mx-auto">
        <div className="animate-pulse flex">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              {[...Array(20).keys()].map((_item, id) => (
                <div key={id}>
                  <div className="h-2 bg-slate-300 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id={`buy-now-${id}`} />
  )
}

export default ShopifyBuyButton
