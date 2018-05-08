var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        ownerName: null,
        computerName: null,
        permissionsFilter: null,
        id: null,
        item_array: null
    };
};


exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);

    // ex 1 query all workspaces
    apiwriter.getJson('/tfvc/workspaces',
        function (context, result) {
            context.id = result.responseBody.value[0].id;
        });

    // ex1 get workspace
    apiwriter.getJson('/tfvc/workspaces/{id}',
        function (context, result) 
        {
            context.computerName = result.responseBody.computerName;
            context.permissionsFilter = "Use";
            context.item_array = result.responseBody.folderMappings.map
            (
                function (folderMapping) 
                {
                    return {
                        'path': folderMapping.localItem, //.replace("\\", "\\")
                        'recursionLevel': 'OneLevel'
                    }
                }
            );
        }
    );
    

    
    //ex 2 workspaces on computer can use
    apiwriter.getJson('/tfvc/workspaces?computerName={computerName}&permissionsFilter={permissionsFilter}');

    //ex 1 get pending changes
    apiwriter.getJson('/tfvc/workspaces/{id}/pendingChanges');
    
    //ex 1 get pending changes batch
    apiwriter.postJson('/tfvc/workspaces/{id}/pendingChangesBatch', 
    function (context, result) 
    {
        return { 'itemSpecifiers': [ { "path": "$/SomeProject/ConsoleApplicationOne-deletedBranch-subBranch/" } ] }
    }
    );

    //ex 1 get local versions
    apiwriter.postJson('/tfvc/workspaces/{id}/localVersions', function (context, result) {
        return { 'itemSpecifiers': context.item_array }
    }
    );

}
