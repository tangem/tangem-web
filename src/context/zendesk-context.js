import React, {useState} from "react";

const defaultValues = {
	loaded: false,
	needLoad: false,
	needOpen: false,
	setLoaded: () => {},
	setNeedLoad: () => {},
	setNeedOpen: () => {},
}

export const ZendeskContext = React.createContext(defaultValues);

export const ZendeskProvider = ({ children }) => {
	const [loaded, setLoaded] = useState(false);
	const [needLoad, setNeedLoad] = useState(false);
	const [needOpen, setNeedOpen] = useState(false);

	return (
		<ZendeskContext.Provider
			value={{
				loaded: loaded,
				needLoad: needLoad,
				needOpen: needOpen,
				setLoaded: setLoaded,
				setNeedLoad: setNeedLoad,
				setNeedOpen: setNeedOpen,
			}}
		>
			{children}
		</ZendeskContext.Provider>
	)
}
