import React from 'react';
import styles from './button.module.scss';
import classnames from "classnames";

const Button = ({ appearance = 'primary', theme = 'light', size = 'medium', className, onClick, children }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={classnames(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.secondary]: appearance === 'secondary',
				[styles.small]: size === 'small',
				[styles.medium]: size === 'medium',
				[styles.dark]: theme === 'dark',
				[styles.light]: theme === 'light',
			}  )}
		>
			{ children }
		</button>
	);
}
export default Button;
