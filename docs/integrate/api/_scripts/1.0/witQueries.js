var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis

exports.getContext = function () {
    return {
        folderName: "Website team",
        folderNameNew: "Website",
        queryName: "All Bugs",
        queryName2: "Active stories with tasks",
        queryNameNew: "Active Bugs",
        queryId: null,
        hierarchicalQueryId: null,
        folderId: null
    };
};

exports.submitRequests = function () {

    // Get the tree of queries by ID
    apiwriter.getJson('/wit/queries');
    apiwriter.getJson('/wit/queries?$depth=1');
    apiwriter.getJson('/wit/queries?$depth=1&$expand=all');

    // Get the tree of queries by Name
    apiwriter.getJson('/wit/queries/Shared Queries/Current Sprint');
    apiwriter.getJson('/wit/queries/Shared Queries/Current Sprint?$depth=1');

    // Create a folder
    apiwriter.postJson('/wit/queries/Shared Queries',
        function (context, result) {
            return {
                "name": context.folderName,
                "isFolder": true
            }
        },
        function (context, result) {
            context.folderId = result.responseBody.id;
        }
    );

    // Create a flat query
    apiwriter.postJson('/wit/queries/Shared Queries/{folderName}',
        function (context, result) {
            return {
                "name": context.queryName,
                "wiql": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Bug' order by [Microsoft.Azure DevOps Services.Common.Priority] asc, [System.CreatedDate] desc"
            }
        },
        function (context, result) {
            context.queryId = result.responseBody.id;
        }
    );

    // Create a hierarchical query
    apiwriter.postJson('/wit/queries/Shared Queries/{folderName}',
        function (context, result) {
            return {
                "name": context.queryName2,
                "wiql": "SELECT [System.Id],[System.WorkItemType],[System.Title],[System.AssignedTo],[System.State],[System.Tags] FROM WorkItemLinks WHERE ([Source].[System.TeamProject] = @project AND [Source].[System.WorkItemType] = 'Product Backlog Item' AND [Source].[System.State] <> 'Removed') AND ([System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward') AND ([Target].[System.WorkItemType] = 'Task') mode(Recursive)"
            }
        },
        function (context, result) {
            context.hierarchicalQueryId = result.responseBody.id;
        }
    );

    //get a specific folder by ID
    apiwriter.getJson('/wit/queries/{folderId}');

    //get a specific folder by Name
    apiwriter.getJson('/wit/queries/Shared Queries/{folderName}');

    //get a specific query by ID
    apiwriter.getJson('/wit/queries/{queryId}');

    //get a specific query by Name
    apiwriter.getJson('/wit/queries/Shared Queries/{folderName}/{queryName}');

    // get a specific query by ID with clauses
    apiwriter.getJson('/wit/queries/{queryId}?$expand=clauses');
    apiwriter.getJson('/wit/queries/{hierarchicalQueryId}?$expand=clauses');

    // rename a query
    apiwriter.patchJson('/wit/queries/{queryId}',  
        function (context, result) {
            return {
                "name": context.queryNameNew
            }
        }
    );

    // update the WIQL of a query
    apiwriter.patchJson('/wit/queries/Shared Queries/{folderName}/{queryNameNew}',
        function (context, result) {
            return {
                "wiql": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Bug' AND [System.State] = 'Active' order by [Microsoft.Azure DevOps Services.Common.Priority] asc, [System.CreatedDate] desc"
            }
        }
    );

    // rename a folder
    apiwriter.patchJson('/wit/queries/Shared Queries/{folderName}',
        function (context, result) {
            return {
                "name": context.folderNameNew
            }
        }
    );

    // move a folder
    apiwriter.postJson('/wit/queries/My Queries',  
        function (context, result) {
            return {
                "id": context.folderId
            }
        }
    );

    //delete query
    apiwriter.deleteJson('/wit/queries/{queryId}', null);
    apiwriter.deleteJson('/wit/queries/{hierarchicalQueryId}', null);

    // Get all queries included deleted
    apiwriter.getJson('/wit/queries?$depth=2&$includeDeleted=true');

    // Get deleted query
    apiwriter.getJson('/wit/queries/{queryId}?$includeDeleted=true');

    // Undelete a query
    apiwriter.patchJson('/wit/queries/{queryId}',
        function (context, result) {
            return {
                "isDeleted": false
            }
        }
    );

    //delete folder
    apiwriter.deleteJson('/wit/queries/My Queries/{folderNameNew}', null);

    // Undelete a folder and children
    apiwriter.patchJson('/wit/queries/{folderId}?$undeleteDescendants=true',
        function (context, result) {
            return {
                "isDeleted": false
            }
        }
    );

    // Keep it clean!
    apiwriter.deleteJson('/wit/queries/{folderId}', null);
}