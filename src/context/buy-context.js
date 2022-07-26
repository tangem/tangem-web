import useModal from "../hooks/useModal";
import React from "react";

const defaultValues = {
	isShowing: false,
	toggle: () => {},
}

export const BuyContext = React.createContext(defaultValues);

export const BuyProvider = ({ children }) => {
	const { isShowing, toggle } = useModal('pricing');

	return (
		<BuyContext.Provider
			value={{
				isShowing,
				toggle: toggle,
			}}
		>
			{children}
		</BuyContext.Provider>
	)
}
