$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        // prepare the request
        var request = gapi.client.youtube.search({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
        });
        // execute the request
        request.execute(function(response) {
            console.log(response);
        });
    });
});

function init() {
    gapi.client.setApiKey("AIzaSyCjLTT8euUsg3Z75EG322BWp6o6uL-ii10");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}