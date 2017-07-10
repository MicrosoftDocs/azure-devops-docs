var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        skip: 1,
        top: 1,
        state: "All"
    };
};

exports.submitRequests = function () {
	
    apiwriter.setEnableWrite(false);
	
	apiwriter.getJson('/projects',
        function(context, result) {
            context.projectId = result.responseBody.value[0].id;
            context.projectName = result.responseBody.value[0].name;
        }
	);

	apiwriter.patchJson('/projects/{projectId}',
        function(context, result) {
            return {"description": ""}
        }, 
		function(context, result) {
            context.operationId = result.responseBody.id;
        }
    );
	
	apiwriter.setEnableWrite(true);
	
	apiwriter.getJson('/operations/{operationId}');

}
