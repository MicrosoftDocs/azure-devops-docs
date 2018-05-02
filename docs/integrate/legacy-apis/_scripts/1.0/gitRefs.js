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
    
    // Modify some refs
    apiwriter.postJson('/git/repositories/{repositoryId}/refs',
        function(context, result){
            return  [
                {
                    "name": "refs/heads/live", 
                    "oldObjectId": "0000000000000000000000000000000000000000",
                    "newObjectId": "4b223e9c93ec3b6aaa6499f06e3ebb7c702e6106"
                },
                {
                    "name": "refs/heads/master",
                    "oldObjectId": "4b223e9c93ec3b6aaa6499f06e3ebb7c702e6106",
                    "newObjectId": "7b019e53c7980d7fafcbd84aa71946793d10a881"
                },
                {
                    "name": "refs/heads/fabrikamfiber16",
                    "oldObjectId": "4b223e9c93ec3b6aaa6499f06e3ebb7c702e6106",
                    "newObjectId": "0000000000000000000000000000000000000000"
                }
            ];
        });
}
