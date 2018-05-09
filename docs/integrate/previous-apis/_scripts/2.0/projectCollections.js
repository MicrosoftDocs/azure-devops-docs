var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        skip: 1,
        top: 2
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);
	
	apiwriter.getJson('/projectCollections',
        function(context, result) {
            context.collectionId = result.responseBody.value[0].id;
        }
	);
    
	// specific collection
	apiwriter.getJson('/projectCollections/{collectionId}');

    // pages
	apiwriter.getJson('/projectCollections/{collectionId}?$top={top}&$skip={skip}');

}
