chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    var uploadToOctoprint = function(filename, src) {
        var x = new XMLHttpRequest();
        x.onload = function() {
            chrome.storage.sync.get({
                baseUrl: "http://octopi.local",
                apiKey: ""
            }, function(items) {
                var fd = new FormData();
                fd.append("file", x.response, filename);
                fd.append("apikey", items.apiKey);

                var y = new XMLHttpRequest();
                y.onload = function() {};
                y.open("POST", items.baseUrl + "/api/files/local");
                y.send(fd);
            });
        };
        x.responseType = "blob";
        x.open("GET", src);
        x.send();
    };

    if (message.uploadFile !== undefined) {
        var filename = message.uploadFile.name;
        var src = message.uploadFile.src;
        uploadToOctoprint(filename, src);
        sendResponse({success: true});
    }
});