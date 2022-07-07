module.exports = {
  SHOPIFY_DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
  SHOPIFY_API_KEY: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
  TANGEM_COINS_API_URI: process.env.NEXT_PUBLIC_TANGEM_COINS_API_URI,
  TANGEM_RESELLERS_API_URI: process.env.NEXT_PUBLIC_TANGEM_RESELLERS_API_URI || 'https://api.tangem-tech.com/v1/resellers/',
	TANGEM_EMAIL_URI: process.env.NEXT_PUBLIC_TANGEM_EMAIL_URI || 'https://api.tangem-tech.com/email/partner'
}
