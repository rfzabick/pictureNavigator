//For an example of how to use this library, look at http://punkgrok.org/1900s-1930s/index.html#startingPicture=42
var index = calcStartingIndex();

function initPictureNavigator() {
    loadPictures(index);
    
    $(document).keydown(handleKeyPress);
}

function handleKeyPress(e) {
    if (e.which == 37 || e.which == 39) {
        if (e.which == 37) { //left
            if (index > 1) {
                index -= 1;
            }
        } else { //right
            index += 1;
        }

        loadPictures(index);
    }
}

function calcStartingIndex() {
    if (window.location.hash) {
        return parseInt(window.location.hash.split('=')[1]);
    } else {
        return 1;
    }
}

function loadPictures(index) {
    pictureNavigatorImg().attr("src", pictureNavigatorCalcImgSrc(pictureNavigatorImg().attr('src'), index));
    pictureNavigatorIndex().html("" + index);
    pictureNavigatorImgPrefetch().attr("src", pictureNavigatorCalcImgSrc(pictureNavigatorImgPrefetch().attr('src'), index + 1));
}


//override these functions to configure picture navigator

//Calculate the n+-1st img src given the nth img src
function pictureNavigatorCalcImgSrc(oldSrc, newIndex) {
    var re = /\d+\.jpg/;
    return oldSrc.replace(re, newIndex + '.jpg');
}

//Return the image element that will be changing
function pictureNavigatorImg() {
    return $('#theimage');
}

//Return the element (probably a span) that will display the image number
function pictureNavigatorIndex() {
    return $('#picnumber');
}

//Return the image element (preferably with display:none)
//that will pre-fetch the n+1st image while the user is looking at the nth image.
function pictureNavigatorImgPrefetch() {
    return $('#prefetch');
}

//Start up picture navigator
$(initPictureNavigator);
