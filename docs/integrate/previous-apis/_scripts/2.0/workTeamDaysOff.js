var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis

exports.getContext = function () {
    return {
    };
};

exports.submitRequests = function () {

    // Get a list of a team's iterations
    apiwriter.getJson('/work/teamsettings/iterations',
        function(context, result) {
            context.iterationId = result.responseBody.values[0].id;
        });

    // Get a team's days off
    apiwriter.getJson('/work/teamsettings/iterations/{iterationId}/teamdaysoff',
        function(context, result){
            context.daysOff = result.responseBody.daysOff;
        });

    // Set a team's days off
    apiwriter.patchJson('/work/teamsettings/iterations/{iterationId}/teamdaysoff',  
        function (context, result) {
            return {
                "daysOff": [
                    {
                      "start": "2015-03-14T00:00:00Z",
                      "end": "2015-03-15T00:00:00Z"
                    }
                ]
            }
        }
    );

    // keep it clean
    apiwriter.patchJson('/work/teamsettings/iterations/{iterationId}/teamdaysoff',  
        function (context, result) {
            return {
                "daysOff": context.daysOff
            }
        }
    );
}