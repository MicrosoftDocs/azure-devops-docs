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

    // Get a team's members' capacities
    apiwriter.getJson('/work/teamsettings/iterations/{iterationId}/capacities',
        function(context, result){
            context.teammemberId=result.responseBody.values[0].teamMember.id;
            context.activities=result.responseBody.values[0].activities;
        });

    // Get a team member's capacity
    apiwriter.getJson('/work/teamsettings/iterations/{iterationId}/capacities/{teammemberId}');

    // Update a teammember's capacity
    apiwriter.patchJson('/work/teamsettings/iterations/{iterationId}/capacities/{teammemberId}',  
        function (context, result) {
            return {
                "activities": [
                    {
                      "name": "newActivity",
                      "capacityPerDay": 6
                    }
                ]
            }
        }
    );

    // Keep it clean!
    apiwriter.patchJson('/work/teamsettings/iterations/{iterationId}/capacities/{teammemberId}',  
        function (context, result) {
            return {
                "activities": context.activities
            }
        }
    );
}