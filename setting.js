//window.disableTapAdvanceSlide = true;
//window.disableTapAdvanceAnimation = true;
//window.disableHyperlinkToSlide = true;
//window.overrideTransition = {ef:3853,t:2};
//window.disableSwipe = true;
//window.disableFullscreen = true
//window.exactFit = true
//window.loopUntilEsc = true
//window.disableTextSelection = true
//window.evalPostMessage = true //allow parent iframe to post any command to inner
//window.showNavigationGuide = true //show a message "click or swipe or use keyboard to navigate"

//window.enableThumbnailPanelIcon = true
//window.enableSpeakerNoteIcon = true

//window.thumbNaviPath = '../thumb1'
//window.thumbNaviName = 'Slide'
//window.thumbNaviWidth = 100
//window.thumbNaviHeight = 75



//override thumbnail navigation classes
/*var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.thumbNaviImage { } \n .thumbNaviPanel {}';
document.getElementsByTagName('head')[0].appendChild(style);*/


function onSlideIndexChange(sldNo){
	//
}

function onAnimationStart(index){
	//console.log('ani start:' + index)
}

function onAnimationEnd(index){
	//var count = getSlideCount()
	//console.log('ani end:' + index + '/' + count)
}

function onAnimationNextBuild(slideNo,stepNo,toAnimate){
	//window.parent.postMessage('onAnimationNextBuild(' + slideNo + ',' + stepNo + ',' + toAnimate + ')',"*")
}

	
function onSlideShowTimeUpdate(slideNo,time,total){
	//console.log(slideNo,time,total)
}

allSlideNotes = [{id:17,notes:'<p>We have studied a series of corneal buttons from keratoconus patients with 4 imaging technologies: spectral domain OCT and confocal microscopy just performed before transplantation, full field OCT and histology after transplantation. Ex vivo full field optical coherence microscopy is a new technology that permits 3 dimensional imaging of cornea with 1 µ resolution in all directions.</p>'},
{id:18,notes:'<p>These are typical images of normal cornea observed with ex vivo full field OCM.</p>'},
{id:56,notes:'<p>Chatelet Bernard</p>'}]