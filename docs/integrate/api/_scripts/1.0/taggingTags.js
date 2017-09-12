var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        scopeId: this.getConfig().getProjectId(),
        tagId: null,
        name: null
    };
};

exports.submitRequests = function() {

    /*apiwriter.setEnableWrite(false);

    //get the project name
    apiwriter.getJson('/projects',
        function(context, result) {
            context.scopeId = result.responseBody.value[1].id; //Should be project 0
        }
    );

    apiwriter.setEnableWrite(true);*/

    // Create a new tag
    apiwriter.postJson('/tagging/scopes/{scopeId}/tags',
        { name: "My Tag" },
        function (context, result) {
            context.tagId = result.responseBody.id;
            context.name = result.responseBody.name;
        }
    );
    
    // Get the created tag by ID
    apiwriter.getJson('/tagging/scopes/{scopeId}/tags/{tagId}');

    // Get the created tag by name
    apiwriter.getJson('/tagging/scopes/{scopeId}/tags/{name}');

    // Patch the tag
    apiwriter.patchJson('/tagging/scopes/{scopeId}/tags/{tagId}',
        { name: "My Tag Renamed", active: false }
    );
    
    // Get full list of tags
    apiwriter.getJson('/tagging/scopes/{scopeId}/tags');

    // Get the list of tags in the scope
    apiwriter.getJson('/tagging/scopes/{scopeId}/tags?includeInactive=true');

    // Delete the tag
    apiwriter.deleteJson('/tagging/scopes/{scopeId}/tags/{tagId}', null);
};
