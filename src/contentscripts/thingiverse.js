$(document).ready(function() {
    console.log("OctoChrome Ready");

    var absolutifyUrl = function(url) {
        if (url.substr(0,1) !== "/") {
            url = window.location.pathname + url;
        }
        url = window.location.origin + url;
        return url;
    };

    $("div.thing-file").each(function(index, item) {
        var octoprint = $(item).find(".thing-file-octoprint-link");
        if (octoprint && octoprint.length) {
            return;
        }

        var link = $(item).find(".thing-file-download-link").attr("href");
        var detail = $(item).find(".detail");

        var documentUrl = absolutifyUrl(link);
        var filename = $(item).find(".filename").text();

        var entry = $('<a class="thing-file-octoprint-link" target="_blank">Send to OctoPrint</a>')
            .css("margin-top", "5px")
            .css("font-size", "1.1em")
            .css("font-family", "\"Antenna Medium\",Helvetica,Arial,sans-serif")
            .data("url", documentUrl)
            .data("name", filename)
            .click(function(event) {
                event.preventDefault();
                var downloadLink = $(event.target).data("url");
                var filename = $(event.target).data("name");

                chrome.runtime.sendMessage({uploadFile: {name: filename, src: downloadLink}}, function(response) {});
            });
        $(detail).append(entry);
    });
});