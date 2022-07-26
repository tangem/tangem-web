import React, {useContext, useEffect} from 'react'
import * as styles from "./zendesk.module.scss";
import ChatIcon from '../../../../public/svg/chat.svg';
import i18next, {t} from "i18next";
import Script from "next/script";
import {ZendeskContext} from "../../../context/zendesk-context";


const Zendesk = () => {
	const { language } = i18next;
	const { loaded, needLoad, needOpen, setLoaded, setNeedLoad, setNeedOpen} = useContext(ZendeskContext);

	useEffect(()=> {
		if (typeof window !== 'undefined' && typeof zE !== 'undefined') {
			setLoaded(true);
		}
	},[]);

	useEffect(() => {
		if (needOpen) {
			setNeedLoad(true);
		}
		document.querySelector('#myLauncher').style.opacity = needOpen ? 0 : 1;
	}, [needOpen]);

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
				onClick={() => setNeedOpen(true)}
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
