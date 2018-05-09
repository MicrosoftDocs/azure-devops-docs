var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        repositoryId: null,
        name: null,
        baseVersionType: "Commit",
		baseVersion: "67cae2b029dff7eb3dc062b49403aaedca5bad8d"
		};
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(false);

    apiwriter.getJson('/git/repositories',
        function(context, result) {
            context.repositoryId = result.responseBody.value[0].id;
        });

    apiwriter.setEnableWrite(true);

	apiwriter.getJson('/git/repositories/{repositoryId}/stats/branches',
		function(context, result) {
			context.name = result.responseBody.value[0].name;
		});

	apiwriter.getJson('/git/repositories/{repositoryId}/stats/branches/{name}');

	apiwriter.getJson('/git/repositories/{repositoryId}/stats/branches/{name}?baseVersionType={baseVersionType}&baseVersion={baseVersion}');
}