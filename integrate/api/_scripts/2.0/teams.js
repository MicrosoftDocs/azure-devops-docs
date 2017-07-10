var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        top: 1,
        skip: 1
    };
};

exports.submitRequests = function () {

 apiwriter.setEnableWrite(false);
	
	apiwriter.getJson('/projects/',
        function(context, result) {
            context.projectId = result.responseBody.value[0].id;
        }
	);
    
    
    apiwriter.setEnableWrite(true);
    
    // all teams
    apiwriter.getJson('/projects/{projectId}/teams',
        function(context, result) {
            context.teamId = result.responseBody.value[0].id;
        }
	);
    
    // all teams in pages
    apiwriter.getJson('/projects/{projectId}/teams?$top={top}&$skip={skip}');

	// specific team
    apiwriter.getJson('/projects/{projectId}/teams/{teamId}');

    // team members
    apiwriter.getJson('/projects/{projectId}/teams/{teamId}/members/');

    // team members in pages
    apiwriter.getJson('/projects/{projectId}/teams/{teamId}/members/?$top={top}&$skip={skip}');

}
