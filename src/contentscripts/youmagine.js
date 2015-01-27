$(document).ready(function() {
    var absolutifyUrl = function(url) {
        if (url.substr(0,1) !== "/") {
            url = window.location.pathname + url;
        }
        url = window.location.origin + url;
        return url;
    };

    $("article[data-type='document']").each(function(index, item) {
        var span = $(item).find("span.document-name");
        if (!span) {
            return;
        }

        var type = $(span).find("span").text();
        if (type != "STL") {
            return;
        }

        var name = $(span).find("a").text();
        var filename = name + ".stl";

        var documentUrl = absolutifyUrl("/documents/" + $(item).data("id") + "/download");

        var entry = $('<li class="dropdown-item"></li>').append($('<a href="#" target="_blank"><i class="icon-upload-alt"></i> Send to OctoPrint</a>')
            .data("url", documentUrl)
            .data("name", filename)
            .click(function(event) {
                    event.preventDefault();
                    var downloadLink = $(event.target).data("url");
                    var filename = $(event.target).data("name");

                    chrome.runtime.sendMessage({uploadFile: {name: filename, src: downloadLink}}, function(response) {});
                })
        );
        $(item).find("ul.dropdown-menu").prepend(entry);
    });
});