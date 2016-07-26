var imgContainer, pfDescBox, pfLinkContainer, pfTagsPlaceholder;
var pfTopRow, pfMidRow, pfBottomRow;
var fullpageId, arrowUp, arrowDown;

var viewportHeight, viewportWidth;

function getElements() {
	imgContainer = document.querySelectorAll(".pf-img-container");
	pfDescBox = document.querySelectorAll(".pf-description-box");
	pfLinkContainer = document.querySelectorAll(".pf-link-container");
	pfTagsPlaceholder = document.querySelectorAll(".pf-title-placeholder");
	pfTopRow = document.querySelectorAll(".pf-top-row");
	pfMidRow = document.querySelectorAll(".pf-mid-row");
	pfBottomRow = document.querySelectorAll(".pf-bottom-row");

	fullpageId = document.getElementById("fullpage");
}

function calculateDimensions() {

	// This is for the portfolio part
	viewportHeight = document.documentElement.clientHeight;
	viewportWidth = document.documentElement.clientWidth;

	// Calculate the image container height, it is set to its width, which in turn is 100% of the mid column
	var imgContainerWidth = imgContainer[0].offsetWidth;
	var imgContainerHeight = (imgContainerWidth * 0.625)
	for (var a = 0; a < imgContainer.length; a++) {
		var toEvalA = 'imgContainer[' + a + '].style.height = "' + imgContainerHeight + 'px"';
		eval(toEvalA);
	}

	// We need to adjust the height of the rows accordingly now
	for (var b = 0; b < pfTopRow.length; b++) {
		var toEvalB = 'pfTopRow[' + b + '].style.height = "' + ((viewportHeight - imgContainerHeight) / 2) + 'px"';
		eval(toEvalB);
	}
	for (var c = 0; c < pfMidRow.length; c++) {
		var toEvalC = 'pfMidRow[' + c + '].style.height = "' + imgContainerHeight + 'px"';
		eval(toEvalC);
	}
	for (var d = 0; d < pfBottomRow.length; d++) {
		var toEvalD = 'pfBottomRow[' + d + '].style.height = "' + ((viewportHeight - imgContainerHeight) / 2) + 'px"';
		eval(toEvalD);
	}

	// Now the width of the description box & the link container to its left
	for (var e = 0; e < pfDescBox.length; e++) {
		var toEvalE = 'pfDescBox[' + e + '].style.width = "' + (imgContainerWidth * (0.6)) + 'px"';
		eval(toEvalE);
	}
	for (var g = 0; g < pfDescBox.length; g++) {
		var toEvalG = 'pfDescBox[' + g + '].style.left = "' + (imgContainerWidth / 2) + 'px"';
		eval(toEvalG);
	}
	for (var ga = 0; ga < pfDescBox.length; ga++) {
		var pfDescBoxHeight = pfDescBox[ga].offsetHeight;
		var toEvalGA = 'pfDescBox[' + ga + '].style.top = "' + (-1 * (pfDescBoxHeight)) + 'px"';
	 	eval(toEvalGA);
	}
	for (var h = 0; h < pfLinkContainer.length; h++) {
		var toEvalH = 'pfLinkContainer[' + h + '].style.width = "' + (imgContainerWidth / 2) + 'px"';
		eval(toEvalH);
	}

	// Same for the title to be aligned at the bottom
	var pfTitleHeight = 37;
	var pfTagsPlaceholderHeight = (((viewportHeight - imgContainerHeight) / 2) - pfTitleHeight);
	for (var j = 0; j < pfTagsPlaceholder.length; j++) {
		var toEvalJ = 'pfTagsPlaceholder[' + j + '].style.height = "' + pfTagsPlaceholderHeight + 'px"';
		eval(toEvalJ);
	}	
}

function responsive() {

	viewportHeight = document.documentElement.clientHeight;
	viewportWidth = document.documentElement.clientWidth;

	console.log(viewportWidth + " x " + viewportHeight);
	if (viewportWidth <= 768) {
		console.log("mobile phone");
	} else if (viewportWidth <= 992) {
		console.log("tablet vertical");
	} else if (viewportWidth <= 1024) {
		console.log("tablet horizontal");
	}
}

document.onreadystatechange = function() {
	var state = document.readyState;
	var fullpage = document.querySelectorAll(".anim-fullpage");
	if (state == 'interactive') {
		fullpage[0].style.visibility="hidden";
	} else if (state == 'complete') {
		setTimeout(function() {
			document.getElementById('load').className += " animated fadeOut";

			setTimeout(function() {
				document.getElementById('load').style.visibility="hidden";
				document.getElementById('intro-content').style.visibility="hidden";
				document.getElementById('social-icons').style.visibility="hidden";				
				fullpage[0].style.visibility="visible";				
				document.getElementById('intro-heading').style.visibility="visible";				
				document.getElementById('intro-heading').className += " animated fadeIn";

				setTimeout(function() {
					document.getElementById('intro-content').style.visibility="visible";
					document.getElementById('social-icons').style.visibility="visible";				
					document.getElementById('social-icons').className += " animated fadeIn";
					document.getElementById('intro-content').className += " animated fadeIn";
				}, 1000);
			}, 1000);
		}, 2000);
		

	}
}

window.onload = function() {
	getElements();
	calculateDimensions();
	responsive();
}

window.onresize = function() {
	getElements();
	calculateDimensions();
	responsive();
}