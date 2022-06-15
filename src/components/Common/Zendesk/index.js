import React, {useState} from 'react'
import * as styles from "./zendesk.module.scss";
import ChatIcon from '../../../../public/svg/chat.svg';
import i18next, {t} from "i18next";
import Script from "next/script";

const Zendesk = () => {
	const { language } = i18next;
	const [loaded, setLoaded] = useState(false);

	function handleClick() {
		zE('webWidget', 'show');
		zE('webWidget', 'open');
		document.querySelector('#myLauncher').style.opacity = 0;
	}

	const offlineForm = language !== 'ru'
		? { greeting: { '*': t('zendesk.offlineForm.greeting') }}
		: undefined;

	function handleLoad(e) {
		zE('webWidget', 'setLocale', language);
		zE('webWidget', 'hide');
		zE('webWidget:on', 'close', function() {
			setTimeout(()=> {zE('webWidget', 'hide');}, 0);
			document.querySelector('#myLauncher').style.opacity = 1;
		});

		window.zESettings = {
			webWidget: {
				offset: {
					vertical: '50px'
				}
			},
			chat: {
				title: {
					'*': t('zendesk.chat.title'),
				},
				concierge: {
					name: t('zendesk.concierge.name'),
					title: {
						'*': t('zendesk.concierge.title'),
					},
				},
				offlineForm,
			},
			launcher: {
				label: {
					'*': t('zendesk.launcher.label'),
				},
				chatLabel: {
					'*': t('zendesk.launcher.chatLabel'),
				}
			}
		}
		setLoaded(true);
	}

	return (
		<>
			{loaded && <button id='myLauncher' className={styles.block} onClick={handleClick}><ChatIcon /></button> }
			<Script
				id="ze-snippet"
				src="https://static.zdassets.com/ekr/snippet.js?key=95555692-81ca-451d-bc01-8b9185ea22c4"
				strategy="lazyOnload"
				onLoad={handleLoad}
			/>
			<Script id="ze-settings" dangerouslySetInnerHTML= {{ __html: `
			` }}>

			</Script>
		</>
	)
}

export default Zendesk
