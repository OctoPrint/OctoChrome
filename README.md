OctoChrome extension for Google Chrome
======================================

**WARNING** This is a very early work in progress with not guarantees of functioning properly.

This is going to be a Chrome extension which allows sending STL files from popular repositories such as YouMagine or
Thingiverse to locally available OctoPrint instances. The long term goal is that these instances will be automatically
discovered and that it will be possible to not only upload the files but also slice and directly print them from
within the extension.

For now, only uploading an STL file directly from the "Documents" tab of YouMagine and the "Files" tab of Thingiverse
is possible, with the OctoPrint instance being configured through the extension's options.

Installation
------------

Since this is a very early WIP and actually only intended for educational purposes for now, the extension needs Chrome's
extension developer mode to be active. Checkout the repository, then follow [this guide](https://developer.chrome.com/extensions/getstarted#unpacked)
on how to get the extension installed from source.

Configuration
-------------

Navigate to `chrome://extensions`, then click click on the "Options" link of OctoChrome. You'll be led to
a site where to enter your OctoPrint instance's URL (full URL please, e.g. `http://octopi.local` or `https://192.168.1.23:9090`)
and the API key to use.

**THERE WILL BE NO SUPPORT FOR NOW. DO NOT USE THIS. BE ALSO ADVISED THAT I DO NOT KNOW WHEN I'LL CONTINUE WORKING ON
THIS. DON'T EVEN THINK ABOUT ASKING ;)**
