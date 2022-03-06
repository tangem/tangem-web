import { languages, defaultLanguage } from '../i18n/config';

export function getSortedLangsData() {
	return languages;
}

export function getAllLanguageSlugs() {
	return languages.map((lang) => {
		return { params: { lang: lang } };
	});
}

export function getLanguage(lang) {
	return languages.includes(lang) ? lang : defaultLanguage;
}

export function findLanguage(langList) {
	return langList.find(lang => languages.includes(lang)) || defaultLanguage
}
