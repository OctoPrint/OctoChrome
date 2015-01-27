function saveOptions() {
    var baseUrl = $("#baseUrl").val();
    var apiKey = $("#apiKey").val();

    chrome.storage.sync.set({
        baseUrl: baseUrl,
        apiKey: apiKey
    });
}

function restoreOptions() {
    chrome.storage.sync.get({
        baseUrl: "http://octopi.local",
        apiKey: ""
    }, function(items) {
        $("#baseUrl").val(items.baseUrl);
        $("#apiKey").val(items.apiKey);
    })
}

document.addEventListener("DOMContentLoaded", restoreOptions);
$("#save").click(saveOptions);