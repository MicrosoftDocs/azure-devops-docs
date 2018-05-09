var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);
	
	apiwriter.getJson('/processes',
        function(context, result) {
            context.processId = result.responseBody.value[0].id;
        }
	);
    
    // By ID
	apiwriter.getJson('/processes/{processId}');
}
