/* This is the URL of the video you want to load */
var videoUrl = 'http://www.vimeo.com/260424054';
/* This is the oEmbed endpoint for Vimeo (we're using JSON) */
/* (Vimeo also supports oEmbed discovery. See the PHP example.) */
var endpoint = 'http://www.vimeo.com/api/oembed.json';
/* Tell Vimeo what function to call */
var callback = 'embedVideo';
/* Put together the URL */
var url = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&portrait=false';
/* This function puts the video on the page */
function embedVideo(video) {
    document.getElementById('vimeoembed').innerHTML = unescape(video.html);
}
/* This function loads the data from Vimeo */
function init() {
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);
    document.getElementsByTagName('head').item(0).appendChild(js);
}
/* Call our init function when the page loads */
window.onload = init;