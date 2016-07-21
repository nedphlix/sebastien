var imgContainer, pfDescBox, pfLinkContainer, pfTagsPlaceholder;
var pfTopRow, pfMidRow, pfBottomRow;
var previousButtonContainer, nextButtonContainer;

var viewportHeight = document.documentElement.clientHeight;

function getElements() {
	imgContainer = document.querySelectorAll(".pf-img-container");
	pfDescBox = document.querySelectorAll(".pf-description-box");
	pfLinkContainer = document.querySelectorAll(".pf-link-container");
	pfTagsPlaceholder = document.querySelectorAll(".pf-tags-placeholder");
	pfTopRow = document.querySelectorAll(".pf-top-row");
	pfMidRow = document.querySelectorAll(".pf-mid-row");
	pfBottomRow = document.querySelectorAll(".pf-bottom-row");
	previousButtonContainer = document.querySelectorAll(".btn-previous-container");
	nextButtonContainer = document.querySelectorAll(".btn-next-container");
}

function calculateImgContainerHeight() {

	// Calculate the image container height, it is set to its width which is 100% of the mid column
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
	for (var h = 0; h < pfLinkContainer.length; h++) {
		var toEvalH = 'pfLinkContainer[' + h + '].style.width = "' + (imgContainerWidth / 2) + 'px"';
		eval(toEvalH);
	}

	// Same for the tags to be aligned at the bottom
	for (var j = 0; j < pfTagsPlaceholder.length; j++) {
		var toEvalJ = 'pfTagsPlaceholder[' + j + '].style.height = "' + (((viewportHeight - imgContainerHeight) / 2) - 37) + 'px"';
		eval(toEvalJ);
	}

	// Position the previous/next buttons
	for (var k = 0; k < previousButtonContainer.length; k++) {
		var toEvalK = 'previousButtonContainer[' + k + '].style.top = "' + ((viewportHeight - 24) / 2) + 'px"';
		eval(toEvalK);
	}
	for (var l = 0; l < nextButtonContainer.length; l++) {
		var toEvalL = 'nextButtonContainer[' + l + '].style.top = "' + ((viewportHeight - 24) / 2) + 'px"';
		eval(toEvalL);
	}
}

window.onload = function() {
	getElements();
	calculateImgContainerHeight();
}

window.onresize = function() {
	getElements();
	calculateImgContainerHeight();
}