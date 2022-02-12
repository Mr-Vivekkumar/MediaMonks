// //Loader
var loader = document.getElementById("preLoader");
let loaderImg = document.getElementById("loader-img")
let loaderText = document.getElementById("loader-text")
let vivek = document.getElementById("bipin");



window.addEventListener("load", vanish );

function vanish(){
	loader.classList.add("disappear");
	vivek.classList.remove("vivek");
	
}



window.onload = function(){
	setTimeout(monk(),5000);

	function monk (){


		
		var arrowNext = document.getElementById('rightArrow'),
		arrowPrev = document.getElementById('leftArrow'),
			bgImage = document.getElementById('bgImage'),
			navigation = document.getElementById('pages'),
			newPosition = 0,
			currentId = 0,
			prevId;
			
	/* 
	Replace existing coordinatesArray and lengthUnit for smoother experience
	*/
	var coordinatesArray = [ 0, 10, 20, 30, 41, 52, 66,  80, 80,95 ]
	var lengthUnit = "%";
	// var coordinatesArray = [ 0, 1200, 2100, 3300, 4600, 5800, 7200, 8400, 8900, 10000 ]
	// var lengthUnit = "px";
	
	// var coordinatesArray = [ 0, 1300, 2400, 3500, 4600, 5600, 6700, 7800, 8900, 10100 ];
	// var lengthUnit = "px";


	function getCoordinates(coordinatesArray, pageId) {
		return "-" + coordinatesArray[pageId];
	};

	arrowNext.addEventListener( "click", function(){
		currentId ++;
		var nextPageCoordinates = getCoordinates(coordinatesArray, currentId);
		renderPage(nextPageCoordinates);
	});

	arrowPrev.addEventListener( "click", function(){
		currentId --;
		var nextPageCoordinates = getCoordinates(coordinatesArray, currentId);
		renderPage(nextPageCoordinates);
	});
	
	navigation.addEventListener("click", function(event){
		var coordinates = getCoordinates(coordinatesArray, event.target.id);
		currentId = event.target.id;
		renderPage(coordinates);
	});
	
	function checkArrowVisibility() {
		if (currentId == 9) {
			arrowNext.style.visibility = "hidden";
		} else if (currentId == 0) {
			arrowPrev.style.visibility = "hidden";
		} else {
			arrowNext.style.visibility = "visible";
			arrowPrev.style.visibility = "visible";
		}
	}

	function renderPage(coordinates) {
		// set new bg position
		newPosition = coordinates;
		bgImage.style["transform"] = "translate(" + newPosition + lengthUnit + ", 0)";
		
		// hide previous content
		if (prevId != null) {
			var prevArticleId = "page" + prevId,
			prevArticle = document.getElementById(prevArticleId),
			prevNavButton = document.getElementById(prevId);
			
			if (prevId != 9) {
				prevArticle.style.opacity = 0;
			}
			prevNavButton.className = "";
		}
		
		// display current page on navigation
		var newNavButton = document.getElementById(currentId);
		newNavButton.className = "pageClicked"; 
		
		// display current page contents
		setTimeout(function(){
			var articleId = "page" + currentId, 
					currentArticle = document.getElementById(articleId);
					
					currentArticle.style.opacity = 1;
				}, 1500);

				checkArrowVisibility();
				// set previous page id to the current one 
				prevId = currentId;
	}
	
	checkArrowVisibility();
	renderPage(-1);
}
	
}