import React, {useEffect, useRef } from 'react';
let player;

const YouTubeVideo = ({videoId, className}) => {
	const refButton = useRef();

	useEffect(() => {
		if (!window.YT) {

			const tag = document.createElement("script");
			tag.src = "https://www.youtube.com/iframe_api";

			window.onYouTubeIframeAPIReady = loadVideo;

			const firstScriptTag = document.getElementsByTagName("script")[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		} else {
			loadVideo();
		}

		function loadVideo() {
			const id = `youtube-player-${videoId}`;
			if (!player) {
				player = new window.YT.Player(id, {
					videoId: videoId,
					width: '100%',
					height: '100%',
					playerVars: { autoplay: 1, playsinline: 1 },
					events: {
						onReady: (event) => {
							event.target.playVideo();
							refButton.current.focus();
						},
					}
				});
			}
		}
	}, [videoId]);

	function handleKeyDown(event) {
		if(event.keyCode=== 32){
			if(player.getPlayerState() === 1){
				player.pauseVideo();
			}
			else{
				player.playVideo();
			}
		}
	}

	return (
			<>
				<div className={className} id={`youtube-player-${videoId}`}></div>
				<input ref={refButton} type="button" id="dummyFocus" onKeyDown={handleKeyDown}></input>
			</>
	)
}

export default YouTubeVideo;
