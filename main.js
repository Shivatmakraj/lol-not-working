song1 = "";
song2 = "";

s1Status = "";
s2Status = "";

function preload() {
	song1 = loadSound("test.mp3")
	song1 = loadSound("test.mp3")
}
// song = "";

// function preload() {
// 	song = loadSound("MP3.mp3");
// }

scoreRightWrist=""
scoreLeftWrist=""
rightWristX =""
rightWristY =""
leftWristX =""
leftWristY =""
function setup() {
	canvas = createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
	if (results.length > 0) {
		scoreRightWrist = results[0].pose.keypoints[10].score
		scoreLeftWrist = results[0].pose.keypoints[9].score

		rightWristX = results[0].pose.rightWrist.x
		rightWristY = results[0].pose.rightWrist.y
		console.log("RIGHT WRIST X =" + rightWristX + "RIGHT WRIST Y =" + rightWristY);

		leftWristX = results[0].pose.leftWrist.x
		leftWristY = results[0].pose.leftWrist.y
		console.log("left WRIST X =" + leftWristX + "left WRIST Y =" + leftWristY);
	}
}

function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");
	s1Status = song1.isPlaying();
		s2Status = song2.isPlaying();
	if (scoreRightWrist > 0.1) {

		circle(rightWristX - 15, rightWristY, 30)
	
		song2.stop();
		if (s1Status == false){
			song1.play();
			document.getElementById("song_name").innerHTML="playing:Road trip";
		}
	}
	if (scoreRightWrist > 0.1) {

		circle(leftWristX - 15, leftWristY, 30)
	
		song1.stop();
		if (s2Status == false){
			song1.play();
			document.getElementById("song_name").innerHTML="playing:harry porter";
		}
	}
}


// if (scoreLeftWrist > 0.2) {
// 	circle(leftWristX, leftWristY, 20);
// 	InNumberleftWristY = Number(leftWristY);
// 	new_leftWristY = floor(InNumberleftWristY);
// 	leftWristY_divide_1000 = new_leftWristY / 500;
// 	document.getElementById("volume").innerHTML = "Volume = " + leftWristY_divide_1000;
// 	song.setVolume(leftWristY_divide_1000);
// }

// }

// function play() {
// 	song.play();
// 	song.setVolume(1);
// 	song.rate(1);
// }