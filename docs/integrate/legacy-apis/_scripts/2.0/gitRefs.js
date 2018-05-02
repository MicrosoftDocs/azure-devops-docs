var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        repositoryId: null,
        filter: null,
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(false);

    apiwriter.getJson('/git/repositories',
        function(context, result) {
            context.repositoryId = result.responseBody.value[0].id;
        });

    apiwriter.setEnableWrite(true);

    // Get all refs
    apiwriter.getJson('/git/repositories/{repositoryId}/refs',
        function(context, result) {
            context.filter = result.responseBody.value[0].name.substring(5);
        });
    
    // Get all branches
    apiwriter.getJson('/git/repositories/{repositoryId}/refs/heads');
    
    // Get all tags
    apiwriter.getJson('/git/repositories/{repositoryId}/refs/tags');
    
}
