// JavaScript Document

const videoPart1 = [
					{src: "videos/teeshot1.mp4", caption:"Let's Have A Day"},
					{src: "videos/teeshot2.mp4", caption: "Get In The Hole!"},
					{src: "videos/teeshot3.mp4", caption: "Mashed Potatoes"},
					{src: "videos/teeshot4.mp4", caption: "Baba Booey"},
					{src: "videos/teeshot5.mp4", caption: "Light The Candle"}
];

const videoPart2 = [
				{src: "videos/2ndshot1.mp4", caption: "Good Chip"},
				{src: "videos/2ndshot2.mp4", caption: "Good Speed"},
				{src: "videos/2ndshot3.mp4", caption: "That Wasn't Very Good"},
				{src: "videos/2ndshot4.mp4", caption: "Good Recovery"},
				{src: "videos/2ndshot5.mp4", caption: "Almost"}
];

const videoPart3 = [
				{src: "videos/putt1.mp4", caption: "Tap It In"},
				{src: "videos/putt2.mp4", caption: "Just Go To Your Home"},
				{src: "videos/putt3.mp4", caption: "Better Not Miss"},
				{src: "videos/putt4.mp4", caption: "Way To Finish"},
				{src: "videos/putt5.mp4", caption: "Confidence"},
				
];


const generateBtn = document.getElementById("generateBtn");

function picker(array) 
	{
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex]);
	return array[randomIndex];
	}

titleOverlay.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;
function buildVideo() {
	titleOverlay.style.display = "none";
	player.classList.add("fullscreen");
	
	playlist = [
		picker(videoPart1),
		picker(videoPart2),
		picker(videoPart3)
];
currentIndex = 0;
	
playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	
	player.src = current.src;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
});
}

// Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
		console.log("All three parts finished.");
}
});

const titleText = document.getElementById("titleText"); // NEW

function buildVideo() {
	//titleOverlay.style.display = "none";
// REMOVED
	titleOverlay.classList.add("playing");
// NEW
	player.classList.add("fullscreen");
	
		playlist = [
		picker(videoPart1),
		picker(videoPart2),
		picker(videoPart3),
	];
	currentIndex = 0;
	playCurrent();
}
