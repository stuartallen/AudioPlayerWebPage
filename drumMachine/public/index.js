var audio = document.getElementById("audio");
var playPromise;
var loopInitTime = 0;
var loop = null;

console.log(audio.loopInitTime)

document.getElementById("play-button").addEventListener("click", function() {
	if(audio.paused) {
		playPromise = audio.play();
	} else {
		pauseAudio();
	}
});

document.getElementById("pause-button").addEventListener("click", function() {
	console.log("pause called")
	audio.pause();
	if(loop != null) {
		clearInterval(loop);
	}
});

document.getElementById("reload-button").addEventListener("click", function() {
	audio.currentTime = 0;
});

document.getElementById("loop-button").addEventListener("click", function() {
	if(!audio.paused) {
		audio.pause();
	}
	audio.currentTime = 1;
	audio.play()

	var looplen = 3;
	loop = setInterval(function() {
		if(audio.currentTime >= 2) {
			audio.currentTime = 1;
		}
	}, 1);
});

/*
function pauseAudio() {
	if(playPromise !== undefined) {
		playPromise.then(_ => {
			console.log("paused");
			audio.pause();
		}).catch(error => {
			console.warn("Could not pause, play request incomplete");
		})
	}
}
*/