/**
 * Get HTML page at given URL
 *
 * @param {string} URL from which to get the web page
 * @return {string} HTML from given URL or error code
 */
function getHTML(url) {
    var options = {
        "method": "GET",
        "headers": {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        },
        "muteHttpExceptions": true
    };
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() == 404) {
        return "404";
    }
    var HTML = response.getContentText();
    return HTML;
}
