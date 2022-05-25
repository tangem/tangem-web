import { Html, Head, Main, NextScript } from 'next/document'
import i18next, {t} from "i18next";


export default function Document() {
	const { language } = i18next;
	const offlineFormGreeting = language !== 'ru' ? `greeting: { '*': '${t('zendesk.offlineForm.greeting')}' },` : '';

  return (
    <Html lang={language}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-N7NQVMC');
            `,
          }}
        />
	      <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=95555692-81ca-451d-bc01-8b9185ea22c4"> </script>
	      <script
		      dangerouslySetInnerHTML={{
			      __html: `zE('webWidget', 'setLocale', '${language}')`
		      }}
		    />
	      <script
		      dangerouslySetInnerHTML={{
			      __html: `
							window.zESettings = {
					      webWidget: {
						      offset: {
							      vertical: '50px'
							    }  
					      },
			          chat: {
					        title: {
					          '*': '${t('zendesk.chat.title')}',
					        },
					        concierge: {
					          name: '${t('zendesk.concierge.name')}',
					          title: {
					            '*': '${t('zendesk.concierge.title')}',
					          },
					        },
					        offlineForm: {
					          ${offlineFormGreeting}
					        }  
					      },
					      launcher: {
						      label: {
						        '*': '${t('zendesk.launcher.label')}',
						      },
					        chatLabel: {
					          '*': '${t('zendesk.launcher.chatLabel')}',
					        }
					      }
				      }
            `,
		      }}
	      />
      </Head>
      <body>
        <noscript>
	        <iframe
		        src="https://www.googletagmanager.com/ns.html?id=GTM-N7NQVMC"
						height="0"
		        width="0"
		        style={{ display: "none", visibility: "hidden"}}
	        />
				</noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
