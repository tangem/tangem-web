import React, {useEffect, useState} from 'react'
import ShopifyForm from "./shopify-form";

import ShopifyBuy from '@shopify/buy-button-js'
import {SHOPIFY_DOMAIN, SHOPIFY_API_KEY} from "../../../config";

const shopifyClient = ShopifyBuy.buildClient({
	domain: SHOPIFY_DOMAIN,
	storefrontAccessToken: SHOPIFY_API_KEY,
});

const ui = ShopifyBuy.UI.init(shopifyClient);

const Shopify = ( ) => {

	const [products, setProducts] = useState({});

	const ids = {'pack2': 6677836693570, 'pack3': 6677839577154}

	useEffect( () => {
		async function init(id) {
			return await ui.createComponent('product', {
				id,
				options: {
					product: {
						buttonDestination: 'checkout',
						contents: {
							quantity: true, // determines whether to show any quantity inputs at all
							quantityIncrement: true, // button to increase quantity
							quantityDecrement: true, // button to decrease quantity
							quantityInput: true, // input field to directly set quantity
							button: true,
							img: false,
							title: false,
						}
					},
					cart: {
						startOpen: false,
						popup: false,
					}
				},
				node: document && document.getElementById(`buy-now-${id}`),
			});
		}

		const ids = {'pack2': 6677836693570, 'pack3': 6677839577154};

		for (const key of Object.keys(ids)) {
			init(ids[key]).then((product) => {
				setProducts((v) => ({ [key]: product.selectedVariant, ...v}))
			});
		}
	}, []);

	return (
		<>
			<ShopifyForm ids={ids} products={products}/>
			{
				Object.keys(ids).map((key) =>
					<div key={key} id={`buy-now-${ids[key]}`} style={{display: 'none'}} />
				)
			}
		</>
	)
}

export default Shopify
