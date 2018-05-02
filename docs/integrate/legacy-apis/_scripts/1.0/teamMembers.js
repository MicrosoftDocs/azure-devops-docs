var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {};
};

exports.submitRequests = function () {
	
	apiwriter.getJson('/projects/',
        function(context, result) {
            context.projectId = result.responseBody.value[0].id;
        }
	);
    
    // all teams
    apiwriter.getJson('/projects/{projectId}/teams',
        function(context, result) {
            context.teamId = result.responseBody.value[0].id;
        }
	);
    
    apiwriter.setEnableWrite(true);
    
	// specific team members
	apiwriter.getJson('/projects/{projectId}/teams/{teamId}/members');

}
