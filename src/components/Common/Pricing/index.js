import React from 'react';

import i18next from "i18next";

import Resellers from "./resellers";
import dynamic from "next/dynamic";

const Shopify = dynamic(() => import('../../../components/Common/Pricing/shopify'), {
	ssr: false,
})


const Pricing = () => {
	const {language} = i18next;

  const useShopify = language !== 'ru';

	return useShopify ? <Shopify /> : <Resellers />
}

export default Pricing;
