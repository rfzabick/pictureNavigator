pictureNavigator
================
This is a javascript library to make it easier to page through pictures on a web page. The library allows you to page forward and backward through a collection of images using the right and left arrows on the keyboard. The library also pre-fetches the n+1st image when you load the nth image. This can make image changing seem instantaneous.

The library assumes jquery. A design goal is to require as few changes as possible to existing markup. If your markup matches the naming convention used in the library, all you'll need to do is to reference the script. Otherwise, you can configure the library by overwriting the following functions:

pictureNavigatorImg -- return the img element where the pictures will go. Defaults to $('#theimage');.

pictureNavigatorImgPrefetch -- return the img element where the next image will be pre-fetched. This should be set to display:none.

pictureNavigatorCalcImgSrc -- calculate the next/prev img src attribute given a previous src and the new index. The default implementation replaces consecutive digits followed by .jpg with the new index followed by .jpg. So if you have a bunch of images with consecutive integers at the end of the file name, you don't have to make any changes here. The existing directory structure and file name pattern will be preserved through using pictureNavigatorImg().

pictureNavigatorIndex -- return the element that displays which numbered image is being displayed.

If you want to 'deep link' to, say, the 5th image, append #startingPicture=5 to the URL. You can actually use any link name you like. The library only just takes whatever's after the equal sign.
