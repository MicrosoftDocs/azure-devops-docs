var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
      feedName: "fabrikam",
      viewName: "Alpha",
      viewType: "release",
      newViewName: "Beta"
    };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(true);

    // get the list of release views
    apiwriter.getJson('/packaging/feeds/{feedName}/views')

    // post a new release view
    apiwriter.postJson('/packaging/feeds/{feedName}/views',
        function(context, result) {
            return {
                "name" : context.viewName,
                "type" : context.viewType
            }
        }
    );

    // get the release view
    apiwriter.getJson('/packaging/feeds/{feedName}/views/{viewName}')

    // update a release view
    apiwriter.patchJson('/packaging/feeds/{feedName}/views/{viewName}',
        function(context, result) {
            return {
                "name" : context.newViewName
            }
        }
    );

    // delete the release view
    apiwriter.deleteJson('/packaging/feeds/{feedName}/views/{newViewName}', null);
};