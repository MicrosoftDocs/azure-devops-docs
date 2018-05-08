var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
      feedName: "fabrikam",
      feedView: "release",
      packgeName: "bootstrap",
      packageVersion: "3.3.6",
    };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(true);

    // get package version details
    apiwriter.getJson('/packaging/feeds/{feedName}/nuget/packages/{packgeName}/versions/{packageVersion}/');

    // unlist the package
    apiwriter.patchJson('/packaging/feeds/{feedName}/nuget/packages/{packgeName}/versions/{packageVersion}/',
        function(context, result) {
            return {
                "listed" : "false"
            }
        }
    );

    // relist the package
    apiwriter.patchJson('/packaging/feeds/{feedName}/nuget/packages/{packgeName}/versions/{packageVersion}/',
        function(context, result) {
            return {
                "listed" : "true"
            }
        }
    );

    // promote the package
    apiwriter.patchJson('/packaging/feeds/{feedName}/nuget/packages/{packgeName}/versions/{packageVersion}/',
        function(context, result) {
            return {
                "views" : { "op" : "add", "path" : "/views/-", "value" : context.feedView }
            }
        }
    );

    // delete the package
    apiwriter.deleteJson('/packaging/feeds/{feedName}/nuget/packages/{packgeName}/versions/{packageVersion}/', null);
};