import '../i18n/init';

import React from 'react'
import '../../public/styles/normalize.css'
import '../../public/styles/fonts.scss'
import '../../public/styles/tailwind.css'
import i18next, {t} from 'i18next';

const App = function ({ Component, pageProps }) {
	i18next.changeLanguage(pageProps.language);
	return <Component {...pageProps} />;
};

export default App;
