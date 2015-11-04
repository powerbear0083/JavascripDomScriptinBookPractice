function createVideoControls () {
	var videos = document.getElementsByTagName('video');

	for (var i=0; i<videos.length; i++){
		addControls(videos[i]);
	}
}

function addControls (video){
	video.removeAttribute('controls');

	video.height = video.videoHeight;
	video.width = video.videoWidth;
	video.parentNode.style.height = video.videoHeight + 'px';
	video.parentNode.style.width = video.videoWidth + 'px';

	var controls = document.createElement('div');
		controls.setAttribute('class', 'controls');

	var play = document.createElement('button');
		play.setAttribute('title', 'Play');
		play.innerHTML = '&#x25BA';

	controls.appendChild(play);

	video.parentNode.insertBefore(controls, video);

	play.onclick = function (){
		if(video.ended){
			video.currentTime = 0;
		}
		if(video.paused){
			video.play();
		}else{
			video.pause();
		}
	}

	video.addEventListener('play', function(){
		play.innerHTML = '&#x2590:&#x2590;';
		play.setAttribute('paused', true);
	}, false);

	video.addEventListener('paused', function(){
		paly.removeAttribute('paused');
		paly.innerHTML = '&#x25BA';
	}, false);

	video.addEventListener('ended', function(){
		video.pause();
	}, false);

}

window.onload = function(){
	createVideoControls ();
}