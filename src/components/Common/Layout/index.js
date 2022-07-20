import React from 'react'
import Head from "next/head";
import Script from "next/script";

const Layout = ({title, description, children}) => {
	return (
		<>
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name="title" content={ title } />
				<meta name="description" content={ description } />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://tangem.com" />
				<meta property="og:site_name" content={ title } />
				<meta property="og:title" content={ title } />
				<meta property="og:description" content={ description } />
				<meta property="og:image" content="https://tangem.com/img/hero/phone@1x.png" />
				<meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
				<meta property="og:locale" content="en_US" />
				<title>{ title }</title>
				<link rel='shortcut icon' href='/img/favicon/favicon.png' />
				<link rel='apple-touch-icon' href='/img/favicon/favicon-180.png' />
			</Head>
			<Script
				id="yandex-metrika"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
		        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(89538595, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
		      `,
				}}
			/>
			{children}
		</>
	)
}

export default Layout;
