var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		securityNamespaceId : null, 
		newToken1 : "token1",
		newToken2 : "token2",
		descriptor1 : "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
		descriptor2 : "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2",
		existingToken : "1ba198c0-7a12-46ed-a96b-f4e77554c6d4",
	};
};

var getDescriptors = function(acesDictionary) {
	var descriptors = new Array();
	for (var ace in acesDictionary) {
		descriptors.push(ace);
	}
	return descriptors.join();
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(false);
    
    // Get the first security namespace
    apiwriter.getJson('/securitynamespaces/00000000-0000-0000-0000-000000000000/',
		function(context, result) {
			context.securityNamespaceId = result.responseBody.value[0].namespaceId;
		}
	);
	
    apiwriter.setEnableWrite(true);

	// Add ACLs
	apiwriter.postJson('/accesscontrollists/{securityNamespaceId}/',
		function(context, result) {
			return {
				"value": [
					{
						"inheritPermissions" : false,
						"token" : context.newToken1,
						"acesDictionary" : {
							"Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1" : {
								"descriptor" : context.descriptor1,
								"allow" : 31,
								"deny" : 0
							}
						}
					},
					{
						"inheritPermissions" : false,
						"token" : context.newToken2,
						"acesDictionary" : {
							"Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1" : {
								"descriptor": context.descriptor1,
								"allow": 1,
								"deny": 0
							},
							"Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2" : {
								"descriptor" : context.descriptor2,
								"allow" : 8,
								"deny" : 0
							}
						}
					}
				]
			}
		}
	);

	// Get all acls 
    apiwriter.getJson('/accesscontrollists/{securityNamespaceId}/');
	
	// Filter by token
	apiwriter.getJson('/accesscontrollists/{securityNamespaceId}/?token={existingToken}');

	// Filter by identity descriptors
	apiwriter.getJson('/accesscontrollists/{securityNamespaceId}/?descriptors={descriptor1}');
	
	// Include extendedinfo 
	apiwriter.getJson('/accesscontrollists/{securityNamespaceId}/?token={existingToken}&includeExtendedInfo=True');

	// Include child acls
	apiwriter.getJson('/accesscontrollists/{securityNamespaceId}/?token={existingToken}&includeExtendedInfo=False&recurse=True');
	
	// Remove acls 
	apiwriter.deleteJson('/accesscontrollists/{securityNamespaceId}/?tokens={newToken1},{newToken2}&recurse=False', null);
};
