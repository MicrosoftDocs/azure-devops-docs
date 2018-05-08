var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        repositoryId: null,
        repositoryName: null,
        projectId: this.getConfig().getProjectId()
    };
};

var _getProj = function (context) {
    return {
        "id": context.projectId,
        "name": context.projName
    }
}

exports.submitRequests = function()
{
	// Create a repository
    apiwriter.postJson('/git/repositories',
        function(context, result) {
            return { "name": "AnotherRepository", "project": _getProj(context) }
        },
        function(context, result) {
            context.repositoryId = result.responseBody.id;
            context.repositoryName = result.responseBody.name;
        }
    );

	// Get details about the new repository
    apiwriter.getJson('/git/repositories/{repositoryId}');

//    apiwriter.getJson('/git/{projectId}/repositories/{repositoryName}');

	// Get a list of repositories
    apiwriter.getJson('/git/repositories');

    /*apiwriter.getJson('/git/{projectId}/repositories',
        function (context, result) {
            context.projName = result.responseBody.value[0].project.name;
        });*/

	// Update a repository
    apiwriter.patchJson('/git/repositories/{repositoryId}',
        function(context, result) {
            return {"name": "RenamedRepository"}
        }
    );

	// Delete a repository
    apiwriter.deleteJson('/git/repositories/{repositoryId}', null);
}
