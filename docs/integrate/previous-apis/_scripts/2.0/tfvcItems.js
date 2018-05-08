var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        itempath: null,
        itemDescriptors: [
            {
                path: "$/Fabrikam-Fiber-TFVC/AuthSample/AuthSample/Program.cs",
                version: 5,
                versionType: "changeset"
            },
            {
                path: "$/Fabrikam-Fiber-TFVC/AuthSample",
                recursionLevel: "Full"
            }
        ],
        version: null,
        folder: "$/Fabrikam-Fiber-TFVC/AuthSample",
        recursionLevel: "OneLevel"
    };
};


exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);

    apiwriter.getJson('/tfvc/items?scopePath={folder}&recursionLevel={recursionLevel}',
        function (context, result) {
            context.itempath = result.responseBody.value[1].path;
            context.version = result.responseBody.value[1].version;
            context.item_array = result.responseBody.value.map(
				function (item) {
				    return {
				        'path': item.path
				    }
				});
        });

    apiwriter.getJson('/tfvc/items?scopePath={folder}');

    apiwriter.getJson('/tfvc/items/{itempath}?versionType=Changeset' + '&version={version}');

    apiwriter.postJson('/tfvc/itemBatch', function (context, result) {
        return { 'itemDescriptors': context.itemDescriptors }
    });

}
