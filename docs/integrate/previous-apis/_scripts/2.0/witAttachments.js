var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis

exports.getContext = function () {
    return {
        textFile: "textAsFileAttachment.txt",
        binaryFile: "imageAsFileAttachment.png"
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(false);

    base64ToBytes = function (input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var bytes = (input.length / 4) * 3;
        var arrayBuffer = new ArrayBuffer(bytes);

        //get last chars to see if are valid
        var lkey1 = keyStr.indexOf(input.charAt(input.length - 1));
        var lkey2 = keyStr.indexOf(input.charAt(input.length - 2));

        var bytes = (input.length / 4) * 3;
        if (lkey1 == 64) bytes--; //padding chars, so skip
        if (lkey2 == 64) bytes--; //padding chars, so skip

        var uarray;
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        var j = 0;

        if (arrayBuffer)
            uarray = new Uint8Array(arrayBuffer);
        else
            uarray = new Uint8Array(bytes);

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        for (i = 0; i < bytes; i += 3) {
            //get the 3 octets in 4 ascii chars
            enc1 = keyStr.indexOf(input.charAt(j++));
            enc2 = keyStr.indexOf(input.charAt(j++));
            enc3 = keyStr.indexOf(input.charAt(j++));
            enc4 = keyStr.indexOf(input.charAt(j++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            uarray[i] = chr1;
            if (enc3 != 64) uarray[i + 1] = chr2;
            if (enc4 != 64) uarray[i + 2] = chr3;
        }

        return uarray;
    };

    var imgBase64 = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABlSURBVDhP7cxBCsAgDERR739pG/CnGJI0FopQ8O2cjNP6R85QbeNQU7wT1dkijaQ3vkZoWElaoTeJojW01cYh0jwfgiFBV/lEjOZtacijN/nLkOBHhIaVDgn+Wdycp6FXzlCl9wt0Y0cAzHo/zgAAAABJRU5ErkJggg==";
    var imgBinary = base64ToBytes(imgBase64);

    apiwriter.setEnableWrite(true);

    // Upload text as a text file attachment
    apiwriter.postJsonEx('/wit/attachments?fileName={textFile}',
        "User text content to upload",
        collectionScopeUrl,
        null,
        true
    );

    // Upload image as a file attachment
    apiwriter.postJsonEx('/wit/attachments?fileName={binaryFile}',
        imgBinary,
        collectionScopeUrl,
        null,
        true
    );
};

collectionScopeUrl = function (context, options) {    
    options.url = url.resolve(options.url + "/", '../../_apis');
};