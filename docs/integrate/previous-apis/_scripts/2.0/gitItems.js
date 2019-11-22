var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        repositoryId: null,
        itempath: null,
        item_descriptors: null,
        folderPath: "/MyWebSite/MyWebSite/Views",
        filePath: "/MyWebSite/MyWebSite/Views/Home/_Home.cshtml"
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(false);

    apiwriter.getJson('/git/repositories',
        function(context, result) {
            context.repositoryId = result.responseBody.value[0].id;
        });

    //get the top level item and its immediate children including latestProcessedChange
    apiwriter.getJson('/git/repositories/{repositoryId}/items?scopePath={folderPath}&recursionLevel=OneLevel&latestProcessedChange=true',
        function(context, result) {
			//get path for more detailed GET request 
            context.itempath = result.responseBody.value[1].path;
			//get descriptors for POST 
			context.item_descriptors = result.responseBody.value.map(
				function(item) 
					{ //construct descriptor array to use for post
						return {
							'path': item.path,
							'version': item.commitId,
							'versionType': 'commit',
							'versionOptions': 'none',
							'recursionLevel': 'none'
						}
					}); 
			//add recursion to one of the tree items
			var found = false;
			for (var i = 0 ; i < context.item_descriptors.length ; i++)
			{
				if (result.responseBody.value[i].gitObjectType == "tree" && result.responseBody.value[i].path != "/")
				{
					context.item_descriptors[i].recursionLevel = 'OneLevel';
					break;
				}
			}
        });

    //items get, with specific path and metadata
    apiwriter.getJson('/git/repositories/{repositoryId}/items?scopePath={itempath}&includeContentMetadata=true' +
						'&version=master&versionType=branch');

    apiwriter.setEnableWrite(true);

    //batch get, different items, recursion on one
    apiwriter.postJson('/git/repositories/{repositoryId}/itemsBatch',
        function(context, result) {
			return {'itemDescriptors': context.item_descriptors, 'includeContentMetadata': 'true'}
        }
	);

    //specific item (folder)
    apiwriter.getJson('/git/repositories/{repositoryId}/items?scopePath={folderPath}');

    //specific file
    apiwriter.getJson('/git/repositories/{repositoryId}/items?scopePath={filePath}');

    //downloadable file
    apiwriter.getJson('/git/repositories/{repositoryId}/items?scopePath={filePath}&download=true');

    //one level
    apiwriter.getJson('/git/repositories/{repositoryId}/items?scopePath={folderPath}&recursionLevel=OneLevel');

    //full
    apiwriter.getJson('/git/repositories/{repositoryId}/items?scopePath={folderPath}&recursionLevel=Full&includeContentMetadata=true');

    /*
	//batch get, same item, different versions
    apiwriter.postJson('/git/repositories/{repositoryId}/itemsBatch',
        function(context, result) {
			return {
				'itemDescriptors': [
					{
						'path': context.itempath,
						'version': 'master',
						'versionType': 'branch',
						'versionOptions': 'none',
					},
					{
						'path': context.itempath,
						'version': 'master',
						'versionType': 'branch',
						'versionOptions': 'previousChange',
					},
					{
						'path': context.itempath,
						'version': 'master',
						'versionType': 'branch',
						'versionOptions': 'firstParent',
					}

				]
			}
        }
	);
	*/
}
