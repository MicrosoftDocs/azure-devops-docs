var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
      feedName: "contoso",
      feedView: "release",
      packageName: "bootstrap",
      packageVersion: "3.3.6",
      scope: "@myscope"
    };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(true);

    // get the package
    apiwriter.getJson('/packaging/feeds/{feedName}/npm/{packageName}/versions/{packageVersion}/');

    // get the scoped package
    apiwriter.getJson('/packaging/feeds/{feedName}/npm/{scope}/{packageName}/versions/{packageVersion}/');

    // download the package
    apiwriter.reqEx('GET', '/packaging/feeds/{feedName}/npm/packages/{packageName}/versions/{packageVersion}/content', null, null, null, true);

    // download the scoped package
    apiwriter.reqEx('GET', '/packaging/feeds/{feedName}/npm/packages/{scope}/{packageName}/versions/{packageVersion}/content', null, null, null, true);

    // release the package
    apiwriter.patchJson('/packaging/feeds/{feedName}/npm/{packageName}/versions/{packageVersion}/',
        function(context, result) {
            return {
                "views" : { "op" : "add", "path" : "/views/-", "value" : context.feedView }
            }
        }
    );

    // release the scoped package
    apiwriter.patchJson('/packaging/feeds/{feedName}/npm/{scope}/{packageName}/versions/{packageVersion}/',
        function(context, result) {
            return {
                "views" : { "op" : "add", "path" : "/views/-", "value" : context.feedView }
            }
        }
    );

    // deprecate the package
    apiwriter.patchJson('/packaging/feeds/{feedName}/npm/{packageName}/versions/{packageVersion}/',
        function(context, result) {
            return {
                "deprecateMessage" : "This package has been deprecated. Please use version 3.3.7 instead."
            }
        }
    );

    // deprecate the scoped package
    apiwriter.patchJson('/packaging/feeds/{feedName}/npm/{scope}/{packageName}/versions/{packageVersion}/',
        function(context, result) {
            return {
                "deprecateMessage" : "This package has been deprecated. Please use version 3.3.7 instead."
            }
        }
    );

    // unpublish the package
    apiwriter.deleteJson('/packaging/feeds/{feedName}/npm/{packageName}/versions/{packageVersion}/', null);

    // unpublish the scoped package
    apiwriter.deleteJson('/packaging/feeds/{feedName}/npm/{scope}/{packageName}/versions/{packageVersion}/', null);
};