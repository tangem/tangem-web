import React from 'react';
import styles from './button.module.scss';
import classnames from "classnames";

const Button = ({ appearance, theme, size, className, onClick, children }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={classnames(styles.button, className, {[styles.secondary]: appearance === 'secondary'}  )}
		>
			{ children }
		</button>
	);
}
export default Button;
