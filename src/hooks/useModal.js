import {useEffect, useState} from 'react';
import {useRouter} from "next/router";

const useModal = (slug) => {
	const [isShowing, setIsShowing] = useState( false)
	const router = useRouter()
	const hashIndex = router.asPath.indexOf('#')
	let hash = undefined;
	if(hashIndex >= 0) {
		const index = router.asPath.indexOf('?')
		hash = index >= 0 && index > hashIndex
			? router.asPath.substring(hashIndex + 1, index)
			: router.asPath.substring(hashIndex + 1)
	}

	useEffect(()=> {
		if(hash === slug) {
			toggle()
		}
	}, [])

	function toggle() {
		document.body.style.overflow = isShowing ? 'auto' : 'hidden';
		setIsShowing(!isShowing);
	}

	return {
		isShowing,
		toggle,
	}
};

export default useModal
