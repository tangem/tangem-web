import React, {useEffect, useState} from 'react'
import * as styles from "./zendesk.module.scss";
import ChatIcon from '../../../../public/svg/chat.svg';
import i18next, {t} from "i18next";
import Script from "next/script";

const Zendesk = () => {
	const { language } = i18next;
	const [loaded, setLoaded] = useState(false);
	const [needLoad, setNeedLoad] = useState(false);
	const [needOpen, setNeedOpen] = useState(false);

	function handleClick() {
		setNeedLoad(true);
		setNeedOpen(true);
		document.querySelector('#myLauncher').style.opacity = 0;
	}

	useEffect(()=> {
		if (typeof window !== 'undefined' && typeof zE !== 'undefined') {
			setLoaded(true);
		}
	},[]);

	useEffect(() => {
		if(!loaded) {
			return function empty() {
				//
			}
		}

		const offlineForm = language !== 'ru'
			? { greeting: { '*': t('zendesk.offlineForm.greeting') }}
			: undefined;

		zE('webWidget', 'setLocale', language);
		zE('webWidget', 'hide');
		zE('webWidget:on', 'close', function() {
			setTimeout(() => {
					zE('webWidget', 'hide');
					setNeedOpen(false);
				}, 0);
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

		return function clear() {
			setNeedOpen(false);
			zE('webWidget:on', 'close', function () {});
		}

	},[loaded, language]);

	useEffect(() => {
		if(!needOpen || !loaded) {
			return function empty() {
				//
			}
		}

		zE('webWidget', 'show');
		zE('webWidget', 'open');
	}, [needOpen, loaded]);

	return (
		<>
			<button
				id='myLauncher'
				className={styles.block}
				onClick={handleClick}
				onMouseOver={() => setNeedLoad(true)}
			>
				<ChatIcon />
			</button>
			{ needLoad &&
				<Script
					id="ze-snippet"
					src="https://static.zdassets.com/ekr/snippet.js?key=95555692-81ca-451d-bc01-8b9185ea22c4"
					strategy="lazyOnload"
					onLoad={() => setLoaded(true)}
				/>
			}
		</>
	)
}

export default Zendesk
