import { useEffect } from 'react';
import { useRouter } from 'next/router';

import i18next from 'i18next';
import LangHome from "./[lang]";
import {findLanguage} from "../lib/lang";
import {defaultLanguage} from "../i18n/config";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		const lang = findLanguage(i18next.languages)
		const { pathname, asPath } = router;
		if (pathname === '/' && lang !== defaultLanguage) {
			console.log(router)
			router.push(`/${lang}${asPath}`);
		}
	}, []);

	return <>
		<LangHome language={defaultLanguage} />
	</>;
}
