import { useState } from 'react';

const useModal = () => {
	const [isShowing, setIsShowing] = useState(false);

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
