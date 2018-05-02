var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        projectId: null,
        userId: null
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(false);

    // get the project ID
    apiwriter.getJson('/projects',
        function (context, result) {
            context.projectId = result.responseBody.value[0].id;
        }
    );

    // Get the current user ID
    apiwriter.getJson('/connectionData',
        function (context, result) {
            context.userId = result.responseBody.authenticatedUser.id;
        }
    );

    apiwriter.setEnableWrite(true);

    // get the initial list of identities in the MRU
    apiwriter.getJson('/core/identityMru/{projectId}');
    
    // Add current user to MRU
    apiwriter.postJson('/core/identityMru/{projectId}',
        function(context,result) {
            return {
                "identityIds": [ 
                    context.userId
                ]
            }
        }
    );

    // get the updated list of identities in the MRU
    apiwriter.getJson('/core/identityMru/{projectId}');

    // Remove current user from MRU
    apiwriter.deleteJson('/core/identityMru/{projectId}',
        function (context, result) {
            return {
                "identityIds": [
                    context.userId
                ]
            }
        }
    );

    // get the updated list of identities in the MRU
    apiwriter.getJson('/core/identityMru/{projectId}');
}