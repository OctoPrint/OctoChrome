$(document).ready(function() {
    var absolutifyUrl = function(url) {
        if (url.substr(0,1) !== "/") {
            url = window.location.pathname + url;
        }
        url = window.location.origin + url;
        return url;
    };

    $("li.document").each(function(index, item) {
        var titleDiv = $(item).find("div.title");
        var informationDiv = $(item).find("div.information");
        var downloadAnchor = $(item).find("a.download");

        if (!titleDiv || !informationDiv || !downloadAnchor) {
            return;
        }

        var information = informationDiv.text();
        if (information.toLowerCase().indexOf("stl ") !== 0) {
            return;
        }

        var title = titleDiv.text();
        var downloadUrl = absolutifyUrl(downloadAnchor.attr("href"));

        var filename = title + ".stl";

        var entry = $('<a href="#" class="octoprint" title="Send to OctoPrint"><img src="'+chrome.extension.getURL("img/tentacle-20x20.png")+'" style="padding: 0 10px; margin-bottom: -2px"></a>')
            .data("url", downloadUrl)
            .data("name", filename)
            .click(function(event) {
                event.preventDefault();
                var downloadLink = $(event.currentTarget).data("url");
                var filename = $(event.currentTarget).data("name");

                chrome.runtime.sendMessage({uploadFile: {name: filename, src: downloadLink}}, function(response) {});
            });

        entry.insertAfter($(item).find("a.download"));
    });
});