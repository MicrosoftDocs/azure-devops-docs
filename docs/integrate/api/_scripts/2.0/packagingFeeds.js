var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
      feedName: "EngineeringInternal",
      feedName2: "LegacyEngineeringInternal",
      description: "Contains packages internal to the engineering organization",
      description2: "Contains legacy packages internal to the engineering organization"
    };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(true);

    // post a new feed
    apiwriter.postJson('/packaging/feeds?api-version=2.0-preview',
        function(context, result) {
            return {
                "name" : context.feedName,
                "description" : context.description
            }
        },
        function(context, result) {
            context.feedId = result.responseBody.id;
        }
    );

    //get the list of feeds
    apiwriter.getJson('/packaging/feeds/{feedName}')

    //get the list of feeds
    apiwriter.getJson('/packaging/feeds')

    // update a feed
    apiwriter.patchJson('/packaging/feeds/{feedId}?api-version=2.0-preview',
        function(context, result) {
            return {
                "name" : context.feedName2,
                "description" : context.description2
            }
        }
    );

    // Delete the feed
    apiwriter.deleteJson('/packaging/feeds/{feedId}?api-version=2.0-preview', null);
};