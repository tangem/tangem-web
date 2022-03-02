import React from 'react'
import ReactDOM from 'react-dom'
import styles from './modal.module.scss';

const Modal = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
	<>
		<div className={styles['modal-overlay']} onClick={hide}/>
		<div className={styles['modal-wrapper']} aria-modal aria-hidden tabIndex={-1} role="dialog">
			<div className={styles['modal']} >
				{ children }
			</div>
		</div>
	</>, document.body
) : null;

export default Modal;
