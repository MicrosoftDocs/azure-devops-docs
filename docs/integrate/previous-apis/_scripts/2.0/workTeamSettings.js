var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis
exports.getContext = function () {
    return {
    };
};

exports.submitRequests = function () {

    // Get a team's settings
    apiwriter.getJson('/work/teamsettings');

    // Update a teams' settings
    apiwriter.patchJson('/work/teamsettings',  
        function (context, result) {
            return {
                "bugsBehavior": "AsTasks",
				"workingDays":[
					"monday",
					"tuesday",					
					"wednesday",
					"thursday"
				],
				"defaultIteration": "8C2457E8-8936-4CDC-B3AA-17B20F56C76C"
            }
        }
    );

    // Keep it clean!
    apiwriter.patchJson('/work/teamsettings',  
        function (context, result) {
            return {
                "bugsBehavior": "AsRequirements",
				"workingDays":[
					"monday",
					"tuesday",
					"wednesday",
					"thursday",
					"friday"
				],
				"defaultIteration": "8C2457E8-8936-4CDC-B3AA-17B20F56C76C"
            }
        }
    );
}