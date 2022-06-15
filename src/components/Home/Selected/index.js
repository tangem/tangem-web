import React from 'react'

export const Selected = ({ text, selected, classes }) => {
	const index = text.indexOf(selected);
	const titleStart = index >= 0 ? text.substring(0, index) : text;
	const titleSelected = index >= 0 ? selected : '';
	const titleEnd = index >= 0 ? text.substring(index + selected.length) : '';
	return (
		<>
			{ titleStart } {titleSelected && (<span className={classes}>{ titleSelected }</span>)}{ titleEnd }
		</>
	)

}
