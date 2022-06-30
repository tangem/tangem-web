import React, {useEffect, useState} from 'react'
import ShopifyForm from "./shopify-form";

// import ShopifyBuy from '@shopify/buy-button-js'
import {SHOPIFY_DOMAIN, SHOPIFY_API_KEY} from "../../../config";
import Script from "next/script";

const Shopify = ( ) => {

	const [loaded, setLoaded] = useState(false);

	const [products, setProducts] = useState({});

	const ids = {'pack2': 6677836693570, 'pack3': 6677839577154}

	useEffect(()=> {
		if (typeof window !== 'undefined' && typeof ShopifyBuy !== 'undefined') {
			setLoaded(true);
		}
	},[]);

	useEffect(() => {
		if(!loaded) {
			return function empty() {
				//
			}
		}

		const shopifyClient = ShopifyBuy.buildClient({
			domain: SHOPIFY_DOMAIN,
			storefrontAccessToken: SHOPIFY_API_KEY,
		});

		const ui = ShopifyBuy.UI.init(shopifyClient);

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

	},[loaded]);

	return (
		<>
			<Script
				id="buy-button"
				src="https://sdks.shopifycdn.com/buy-button/1.0.0/buybutton.js"
				strategy="lazyOnload"
				onLoad={() => setLoaded(true)}
			/>
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
