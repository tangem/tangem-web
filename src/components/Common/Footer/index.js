import React from 'react';
import FooterNew from "../FooterNew";
import FooterOld from "../FooterOld";
import i18next from "i18next";
const Footer = () => {
	const {language} = i18next;
	return (
		['ru', 'by'].includes(language) ? <FooterOld /> : <FooterNew />
	)
}

export default Footer;
