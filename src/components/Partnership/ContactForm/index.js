import React, {useRef, useState} from 'react';
import * as styles from './form.module.scss';
import ClearIcon from '../../../../public/svg/delete.svg';
import {t} from "i18next";
import {TANGEM_EMAIL_URI} from "../../../config";
import classNames from "classnames";

const ContactForm = ({ program }) => {
	const [isSent, setIsSent] = useState(false);
	const [isFailure, setIsFailure] = useState(false);
	const [isCheck, setIsCheck] = useState(false);
	const [isLoading, setIsLoading] = useState(false)

	const refName = useRef();
	const refPhone = useRef();
	const refEmail= useRef();
	const refMessage= useRef();

	async function handleSubmit() {
		setIsCheck(true);
		const name = refName.current.value;
		const	phone = refPhone.current.value;
		const	email = refEmail.current.value;
		const	message = refMessage.current.value;
		if(
			!name || !phone || !email || !message || isLoading
		) {
			return;
		}

		setIsLoading(true);

		const url = TANGEM_EMAIL_URI;
		try {
			const response = await fetch(url, {
				method: 'POST',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				redirect: 'follow',
				referrerPolicy: 'no-referrer',
				body: JSON.stringify({
					program, name, email, phone, message
				})
			});
			const { success = false} = await response.json();
			setIsFailure(!success);
			setIsSent(true);
		} catch (e) {
			setIsFailure(true);
		}
		setIsLoading(false)
	}

  return (
		<form className={styles.form}>
			<legend>{t('contactUs.legend')}</legend>
			<fieldset>
				<label htmlFor="name">
					<span className={styles.label}>{t('contactUs.name.label')} </span>
					<input
						type='text'
						id="name"
						maxLength="50"
						size="50"
						autoComplete="off"
						placeholder={t('contactUs.name.placeholder')}
						ref={refName}
						className={styles.input}
						required={isCheck}
					/>
					<button
						type='button'
						className={styles.clear}
						onClick={()=> {refName.current.value = ''}}
					>
						<ClearIcon />
					</button>
					<span className={styles.error}>{t('contactUs.name.error')} </span>
				</label>
				<label htmlFor="email">
					<span className={styles.label}>{t('contactUs.email.label')} </span>
					<input
						type='email'
						id="email"
						maxLength="50"
						size="50"
						autoComplete="off"
						placeholder={t('contactUs.email.placeholder')}
						ref={refEmail}
						className={styles.input}
						required={isCheck}
					/>
					<button
						type='button'
						className={styles.clear}
						onClick={()=> {refEmail.current.value = ''}}
					>
						<ClearIcon />
					</button>
					<span className={styles.error}>{t('contactUs.email.error')} </span>
				</label>
				<label className={styles.full} htmlFor="phone">
					<span className={styles.label}>{t('contactUs.phone.label')} </span>
					<input
						type='text'
						id="phone"
						maxLength="50"
						size="50"
						autoComplete="off"
						placeholder={t('contactUs.phone.placeholder')}
						ref={refPhone}
						className={styles.input}
						required={isCheck}
					/>
					<button
						type='button'
						className={styles.clear}
						onClick={()=> {refPhone.current.value = ''}}
					>
						<ClearIcon />
					</button>
					<span className={styles.error}>{t('contactUs.phone.error')} </span>
				</label>
				<label className={styles.full} htmlFor="message">
					<span className={styles.label}>{t('contactUs.message.label')}</span>
					<textarea
						className={styles.input}
						ref={refMessage}
						id="message"
						autoComplete="off"
						placeholder={t('contactUs.message.placeholder')}
						required={isCheck}
					/>
					<span className={styles.error}>{t('contactUs.message.error')} </span>
				</label>
			</fieldset>
			<button
				type="button"
				className={classNames(styles.submit, {[styles.loading]: isLoading})}
				onClick={handleSubmit}
			>
				Submit
			</button>
			{isSent && !isFailure && <span className={styles.success}>{t('contactUs.result.success')}</span>}
			{isFailure && <span className={styles.failure}>{t('contactUs.result.success')}</span>}
		</form>
  )
}

export default ContactForm;
