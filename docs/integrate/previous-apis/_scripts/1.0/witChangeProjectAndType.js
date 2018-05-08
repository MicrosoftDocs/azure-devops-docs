var apiwriter = require('apiwriter');
var url = require('url');

//PreReq: There must be a project called "Fabrikam-Scrum" 

exports.getContext = function () {
    return {
		apiVersion: "1.0",
        targetProjectName: "Fabrikam-Scrum",
        targetAreaPath: "Fabrikam-Scrum",
        targetIterationPath: "Fabrikam-Scrum",
        targetWorkItemTypeName: "Task",
		targetWorkItemInitialState: "To Do"
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);
    apiwriter.getJson('/wit/workitems/$Task');

    // Create bug 1
    apiwriter.patchJsonEx('/wit/workitems/$Bug',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.Title",
                        "value": "First bug"
                    }
            ]
        },
        function (context, options) {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function(context, result) {
            context.bug1Id = result.responseBody.id;
        }
    );

	// Create bug 2
    apiwriter.patchJsonEx('/wit/workitems/$Bug',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.Title",
                        "value": "Second bug"
                    }
            ]
        },
        function (context, options) {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function(context, result) {
            context.bug2Id = result.responseBody.id;
        }
    );
	
	// Create bug 3
    apiwriter.patchJsonEx('/wit/workitems/$Bug',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.Title",
                        "value": "Third bug"
                    }
            ]
        },
        function (context, options) {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        function(context, result) {
            context.bug3Id = result.responseBody.id;
        }
    );
	
    // Change project name (move)
    apiwriter.patchJsonEx('/wit/workitems/{bug1Id}',
        function(context, result) {
            return [
					{
						"op": "add",
						"path": "/fields/System.TeamProject",
						"value": context.targetProjectName
					},
					{
						"op": "add",
						"path": "/fields/System.AreaPath",
						"value": context.targetAreaPath
					},
					{
						"op": "add",
						"path": "/fields/System.IterationPath",
						"value": context.targetIterationPath
					}
                ]
        },
        collectionScopePatchUrl
    );

    // Change work item type
    apiwriter.patchJsonEx('/wit/workitems/{bug1Id}',
        function(context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/fields/System.WorkItemType",
                        "value": context.targetWorkItemTypeName
                    },
					{
                        "op": "add",
                        "path": "/fields/System.State",
                        "value": context.targetWorkItemInitialState
                    }
                ]
        },
        collectionScopePatchUrl
    );

	// Change project name of two work items to Fabrikam-Scrum
    apiwriter.postJsonEx('/wit/$batch',
      function (context, result) {
          return [
              {
                  "method": "PATCH",
                  "uri": "/_apis/wit/workItems/" + context.bug2Id + "?api-version=" + context.apiVersion,
                  "headers": {
                      "Content-Type": "application/json-patch+json"
                  },
                  "body": [
   					{
						"op": "add",
						"path": "/fields/System.TeamProject",
						"value": context.targetProjectName
					},
					{
						"op": "add",
						"path": "/fields/System.AreaPath",
						"value": context.targetAreaPath
					},
					{
						"op": "add",
						"path": "/fields/System.IterationPath",
						"value": context.targetIterationPath
					}
                  ]
              },
              {
                  "method": "PATCH",
                  "uri": "/_apis/wit/workItems/" + context.bug3Id + "?api-version=" + context.apiVersion,
                  "headers": {
                      "Content-Type": "application/json-patch+json"
                  },
                  "body": [
					{
						"op": "add",
						"path": "/fields/System.TeamProject",
						"value": context.targetProjectName
					},
					{
						"op": "add",
						"path": "/fields/System.AreaPath",
						"value": context.targetAreaPath
					},
					{
						"op": "add",
						"path": "/fields/System.IterationPath",
						"value": context.targetIterationPath
					}
                  ]
              }
          ]
      },
      collectionScopeUrl
	);
  
    // Change work item type of two work items to Task
    apiwriter.postJsonEx('/wit/$batch',
      function (context, result) {
          return [
              {
                  "method": "PATCH",
                  "uri": "/_apis/wit/workItems/" + context.bug2Id + "?api-version=" + context.apiVersion,
                  "headers": {
                      "Content-Type": "application/json-patch+json"
                  },
                  "body": [
   					{
                        "op": "add",
                        "path": "/fields/System.WorkItemType",
                        "value": context.targetWorkItemTypeName
                    },
					{
                        "op": "add",
                        "path": "/fields/System.State",
                        "value": context.targetWorkItemInitialState
                    }
                  ]
              },
              {
                  "method": "PATCH",
                  "uri": "/_apis/wit/workItems/" + context.bug3Id + "?api-version=" + context.apiVersion,
                  "headers": {
                      "Content-Type": "application/json-patch+json"
                  },
                  "body": [
					{
                        "op": "add",
                        "path": "/fields/System.WorkItemType",
                        "value": context.targetWorkItemTypeName
                    },
					{
                        "op": "add",
                        "path": "/fields/System.State",
                        "value": context.targetWorkItemInitialState
                    }
                  ]
              }
          ]
      },
      collectionScopeUrl
	); 
}

collectionScopeUrl = function (context, options) {    
    options.url = url.resolve(options.url + "/", '../../_apis');
};

collectionScopePatchUrl = function (context, options) {
    options.headers["Content-Type"] = "application/json-patch+json";
    collectionScopeUrl(context, options);
}

