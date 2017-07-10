var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(true);
	apiwriter.getJson('/policy/types',
		function(context, result)
		{
			context.policyId = result.responseBody.value[0].id;
		}
	);

	apiwriter.getJson('/policy/types/{policyId}');
}
