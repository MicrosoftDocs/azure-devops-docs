var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/Team/_apis

//PreReq: There must be a project called "Fabrikam-Fiber-Git"
exports.getContext = function() {
    return {
        projectName: "Fabrikam-Fiber-Git",
		teamName: "Fabrikam-Fiber-Git%20Team",
        template1Id: "unassignedtemplate1Id ",
		template2Id: "unassignedtemplate2Id"
    };
};

exports.submitRequests = function() {
    apiwriter.setEnableWrite(true);

    // Create first template
    apiwriter.postJsonEx('/wit/templates',
        function (context, result) {
            return {
						"description": "Creates a new Bug",
						"name": "Create a new Bug",
						"id": null,
						"workItemTypeName": "Bug",
						"fields": {
							"System.AreaPath": "Fabrikam-Fiber-Git",
							"System.IterationPath": "Fabrikam-Fiber-Git",
							"Microsoft.Azure DevOps Services.Common.Priority": "2",
							"System.Reason": "New",
							"System.State": "New",
							"System.Title": "<Enter title here>",
							"Microsoft.Azure DevOps Services.Common.ValueArea": "Business"
						}
					}
        },
        teamScopeUrl,
        function (context, result) {
            context.template1Id = result.responseBody.id;
        }
    );

    // Create second template
    apiwriter.postJsonEx('/wit/templates',
        function (context, result) {
            return {
						"description": "Mark Task as Active Pri 1",
						"name": "Mark Task as Active Pri 1",
						"id": null,
						"workItemTypeName": "Task",
						"fields": {
							"Microsoft.Azure DevOps Services.Common.Priority": "1",
							"System.Reason": "Active",
							"System.State": "Active"
						}
					}
        },
        teamScopeUrl,
        function (context, result) {
            context.template2Id = result.responseBody.id;           
        }
    );

    //Get all templates
    apiwriter.getJsonEx('/wit/templates', teamScopeUrl);

    //Get all templates by type
    apiwriter.getJsonEx('/wit/templates?workItemTypeName=Task', teamScopeUrl);

    // Get a specific template
    apiwriter.getJsonEx('/wit/templates/{template1Id}', teamScopeUrl);
    
    // Update a template
    apiwriter.putJson('/wit/templates/{template1Id}',
        function (context, result) {
            return {
						"description": "Updated: Creates a new Bug",
						"name": "Create a new Bug",
						"id": context.template1Id,
						"workItemTypeName": "Bug",
						"fields": {
							"System.AreaPath": "Fabrikam-Fiber-Git",
							"System.IterationPath": "Fabrikam-Fiber-Git",
							"Microsoft.Azure DevOps Services.Common.Priority": "2",
							"System.Reason": "New",
							"System.State": "New",
							"System.Title": "<Enter Title Here>"
						}
					}
        },
        function(context, result) {
        }
    );
    
    //Delete template
    apiwriter.deleteJson('/wit/templates/{template1Id}', null);
    apiwriter.deleteJson('/wit/templates/{template2Id}', null);
    
};

teamScopeUrl = function (context, options) {
     options.headers["Content-Type"] = "application/json";
};
