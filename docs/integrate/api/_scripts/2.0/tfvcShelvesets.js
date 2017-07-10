var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        owner: "Normal Paulk",
		shelvesetId: null,
		maxCommentLength: 6,
		top: 2,
        skip: 2
    };
};

exports.submitRequests = function () 
{
	apiwriter.setEnableWrite(true);

	apiwriter.getJson('/tfvc/shelvesets',
        function(context, result) {
            context.shelvesetId = result.responseBody.value[0].id;
        });

	apiwriter.getJson('/tfvc/shelvesets?owner={owner}');

	apiwriter.getJson('/tfvc/shelvesets?maxCommentLength={maxCommentLength}');

	apiwriter.getJson('/tfvc/shelvesets?$top={top}&$skip={skip}');

	apiwriter.getJson('/tfvc/shelvesets/{shelvesetId}');

	apiwriter.getJson('/tfvc/shelvesets/{shelvesetId}?includeDetails=true');

	apiwriter.getJson('/tfvc/shelvesets/{shelvesetId}?includeWorkItems=true');

	apiwriter.getJson('/tfvc/shelvesets/{shelvesetId}?maxChangeCount=100');

	apiwriter.getJson('/tfvc/shelvesets/{shelvesetId}?maxCommentLength={maxCommentLength}');

	apiwriter.getJson('/tfvc/shelvesets/{shelvesetId}/changes');

	apiwriter.getJson('/tfvc/shelvesets/{shelvesetId}/changes?$top={top}&$skip={skip}');

	apiwriter.getJson('/tfvc/shelvesets/{shelvesetId}/workitems');
}