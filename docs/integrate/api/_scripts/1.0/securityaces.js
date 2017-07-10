var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		securityNamespaceId : null,
		token : "newToken",
		descriptor1 : "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
		descriptor2 : "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2"
	};
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(false);
    
    // Get the first security namespace
    apiwriter.getJson('/securitynamespaces/00000000-0000-0000-0000-000000000000/',
		function(context, result) {
			context.securityNamespaceId = result.responseBody.value[0].namespaceId;
		}
	);

	// Add an ACL
	apiwriter.postJson('/accesscontrollists/{securityNamespaceId}/',
		function(context, result) {
			return {
				"value": [
					{
						"inheritPermissions" : false,
						"token" : context.token,
						"acesDictionary" : {
							"Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1" : {
								"descriptor": context.descriptor1,
								"allow": 5,
								"deny": 0
							},
							"Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2" : {
								"descriptor" : context.descriptor2,
								"allow" : 5,
								"deny" : 0
							}
						}
					}
				]
			}
		}
	);

    apiwriter.setEnableWrite(true);

	// Update an existing ace with merge
	apiwriter.postJson('/accesscontrolentries/{securityNamespaceId}/',
		function(context, result) {
			return { 
				"token" : context.token, 
				"merge" : false,
				"accessControlEntries" : [
					{
						"descriptor" : context.descriptor1,
						"allow" : 8,
						"deny" : 0,
						"extendedinfo" : {}
					}
				]
			}
		}
	);

	// Update an existing ace without merge
	apiwriter.postJson('/accesscontrolentries/{securityNamespaceId}/',
		function(context, result) {
			return { 
				"token" : context.token, 
				"merge" : true,
				"accessControlEntries" : [
					{
						"descriptor" : context.descriptor2,
						"allow" : 8,
						"deny" : 0,
						"extendedinfo" : {}
					}
				]
			}
		}
	);

	// Remove descriptor2 ace
	apiwriter.deleteJson('/accesscontrolentries/{securityNamespaceId}/?token={token}&descriptors={descriptor1},{descriptor2}', null);
};
