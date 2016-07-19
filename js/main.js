var imgContainer, pfDescBox, pfLinkContainer, pfTagsPlaceholder;
var pfTopRow, pfMidRow, pfBottomRow;
var previousButtonContainer, nextButtonContainer;

function getElements() {
	imgContainer = document.getElementById("pf-img-container");
	pfDescBox = document.getElementById("pf-description-box");
	pfDescText = document.getElementById("pf-description-text");
	pfLinkContainer = document.getElementById("pf-link-container");
	pfTagsPlaceholder = document.getElementById("pf-tags-placeholder");
	pfTopRow = document.getElementById("pf-top-row");
	pfMidRow = document.getElementById("pf-mid-row");
	pfBottomRow = document.getElementById("pf-bottom-row");
	previousButtonContainer = document.getElementById("btn-previous-container");
	nextButtonContainer = document.getElementById("btn-next-container");
}

function calculateImgContainerHeight() {
	// Calculate the image container height, it is set to its width which is 100% of the mid column
	var imgContainerWidth = imgContainer.offsetWidth;
	var toEval1 = 'imgContainer.style.height = "' + imgContainerWidth + 'px"';
	eval(toEval1);

	// We need to adjust the height of the rows accordingly now
	var toEval2 = 'pfMidRow.style.height = "' + imgContainerWidth + 'px"';
	eval(toEval2);
	var viewportHeight = document.documentElement.clientHeight;
	var toEval6 = 'pfTopRow.style.height = "' + ((viewportHeight - imgContainerWidth) / 2) + 'px"';
	eval(toEval6);
	var toEval7 = 'pfBottomRow.style.height = "' + ((viewportHeight - imgContainerWidth) / 2) + 'px"';
	eval(toEval7);

	// Now the width of the description box & the link container to its left
	var toEval3 = 'pfDescBox.style.width = "' + (imgContainerWidth * (2/3)) + 'px"';
	eval(toEval3);
	var toEval5 = 'pfDescBox.style.left = "' + (imgContainerWidth / 2) + 'px"';
	eval(toEval5);
	var toEval4 = 'pfLinkContainer.style.width = "' + (imgContainerWidth / 2) + 'px"';
	eval(toEval4);

	// Same for the tags to be aligned at the bottom
	var toEval8 = 'pfTagsPlaceholder.style.height = "' + (((viewportHeight - imgContainerWidth) / 2) - 24) + 'px"';
	eval(toEval8);

	// Position the previous/next buttons
	var toEval9 = 'previousButtonContainer.style.top = "' + ((viewportHeight - 24) / 2) + 'px"';
	eval(toEval9);
	var toEval10 = 'nextButtonContainer.style.top = "' + ((viewportHeight - 24) / 2) + 'px"'; 
	eval(toEval10);
}

window.onload = function() {
	getElements();
	calculateImgContainerHeight();
}

window.onresize = function() {
	getElements();
	calculateImgContainerHeight();
}