import { useEffect } from 'react'
import ShopifyBuy from '@shopify/buy-button-js'
import { SHOPIFY_DOMAIN, SHOPIFY_API_KEY } from '../../config'

const shopifyClient = ShopifyBuy.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_API_KEY,
})

const ui = ShopifyBuy.UI.init(shopifyClient)

const ShopifyBuyButton = ({ id }) => {
  useEffect(() => {
    ui.createComponent('product', {
      id,
      options: {
        product: {
          buttonDestination: 'checkout'
        },
	      templates: {
		      title: '<h1 class=""> <span class="">NEW</span></h1>',
	      },
        cart: {
          startOpen: false,
          popup: false,
        }
      },
      node: document && document.getElementById(`buy-now-${id}`),
    })
  })

  return (
    <div id={`buy-now-${id}`} style={{display: 'none' }} />
  )
}

export default ShopifyBuyButton
