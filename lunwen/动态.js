

var adImages = new Array("image/15.jpg",
							"image/31.jpg",
								"image/23.jpg",
									"image/30.jpg",
									"image/33.jpg");


function rotate() {
	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout("rotate()", 1 * 1000);
}


function choosePic() {
	thisAd = Math.floor((Math.random() * adImages.length));
	document.getElementById("adBanner").src = adImages[thisAd];
	
	rotate();
}