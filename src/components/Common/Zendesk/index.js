import React from 'react'
import * as styles from "./zendesk.module.scss";
import ChatIcon from '../../../../public/svg/chat.svg'

const Zendesk = () => {
	function handleClick() {
		zE('webWidget', 'show');
		zE('webWidget', 'open');
		document.querySelector('#myLauncher').style.opacity = 0;
		console.log(zE('webWidget:get', 'display'));
	}

	return (
		<button id='myLauncher' className={styles.block} onClick={handleClick}><ChatIcon /></button>
	)
}

export default Zendesk
