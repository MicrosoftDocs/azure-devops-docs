var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        skip: 1,
        top: 1,
        state: "All"
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);
	
	apiwriter.getJson('/projects',
        function(context, result) {
            context.projectId = result.responseBody.value[0].id;
            context.projectName = result.responseBody.value[0].name;
        }
	);
    
    // By name
	apiwriter.getJson('/projects/{projectName}');
	
    // pages
	apiwriter.getJson('/projects?$top={top}&$skip={skip}');

    // state filter
	apiwriter.getJson('/projects?stateFilter={state}');

    // Without capabilities
	apiwriter.getJson('/projects/{projectName}?includeCapabilities=true');

	
	apiwriter.patchJson('/projects/{projectId}',
        function(context, result) {
            return {"description": "Team Foundation Version Control projects."}
        }
    );
	
		//update description
	apiwriter.patchJson('/projects/{projectId}',
        function(context, result) {
            return {"description": "Team Foundation Version Control projects."}
        }
    );
	
	//update name
	apiwriter.patchJson('/projects/{projectId}',
        function(context, result) {
            return {"name": "Fabrikam-Fiber"}
        }
    );
	
    // Create a project
    apiwriter.postJson('/projects',
        function(context, result) {
            return {
                        "name": "FabrikamTravel",
                        "description": "Fabrikam travel app for Windows Phone",
                        "capabilities": {
                            "versioncontrol": {
                            "sourceControlType": "Git"
                            },
                            "processTemplate": {
                                "templateTypeId": "6b724908-ef14-45cf-84f8-768b5384da45"
                            }
                        }
                    }
        }
    );
}
