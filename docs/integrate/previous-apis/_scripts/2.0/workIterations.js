var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis

exports.getContext = function () {
    return {
        timeframe: "current"
    };
};

exports.submitRequests = function () {

    // Get a list of a team's iterations
    apiwriter.getJson('/work/teamsettings/iterations',
        function(context, result) {
            context.iterationId = result.responseBody.values[0].id;
            context.iterationPath = result.responseBody.values[0].path;
        });

    // Get a list of a team's iterations by timeframe
    apiwriter.getJson('/work/teamsettings/iterations?$timeframe={timeframe}');

    // Get team settings about an iteration with iteration ID
    apiwriter.getJson('/work/teamsettings/iterations/{iterationId}',
        function (context, result) {
            context.iterationPath = result.responseBody.path;
        });

    // Remove an iteration from a team's iterations
    apiwriter.deleteJson('/work/teamsettings/iterations/{iterationId}', null);

    // Keep it clean!
    apiwriter.postJson('/work/teamsettings/iterations', function (context, result) {
            return context.iterationId;
    });
/*
    // Remove an iteration from a team's iterations
    apiwriter.deleteJson('/work/teamsettings/iterations/{iterationId}', null);

    // Keep it clean!
    apiwriter.postJson('/work/teamsettings/iterations', function (context, result) {
            return {"path": context.iterationPath};
    });*/
}