var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        repositoryId: null,
        importRequestId: null,
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
    apiwriter.setEnableWrite(false);

    // Create a repository
    apiwriter.postJson('/git/repositories',
        function(context, result) {
            return { "name": "EmptyRepo", "project": _getProj(context) }
        },
        function(context, result) {
            context.repositoryId = result.responseBody.id;
        }
    );

    // Create an import request
    apiwriter.postJson('/git/repositories/{repositoryId}/importRequests',
        function(context, result) {
            return { "parameters": { "gitSource": { "url": "https://github.com/Microsoft/vscode.git" } } }
        },
        function(context, result) {
            context.importRequestId = result.responseBody.importRequestId;
        }
    );
    
    apiwriter.setEnableWrite(true);

    // Cancel an import request
    apiwriter.patchJson('/git/repositories/{repositoryId}/importRequests/{importRequestId}',
        function(context, result) {
            return {"status": "abandoned"}
        }
    );

    // Create an import request
    apiwriter.postJson('/git/repositories/{repositoryId}/importRequests',
        function(context, result) {
            return { "parameters":{  "gitSource": { "url": "https://github.com/Microsoft/vsts-agent.git" } } }
        },
        function(context, result) {
            context.importRequestId = result.responseBody.importRequestId;
        }
    );

    // Get details about the import request
    apiwriter.getJson('/git/repositories/{repositoryId}/importRequests/{importRequestId}');

    // Get a list of import requests
    apiwriter.getJson('/git/repositories/{repositoryId}/importRequests');

    apiwriter.getJson('/git/repositories/{repositoryId}/importRequests?includeAbandoned=true');
}
