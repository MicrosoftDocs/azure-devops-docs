var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		securityNamespaceId : null, 
		token1 : "token1",
		token2 : "token2",
		token3 : "token3",
		descriptor : "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
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
						"token" : context.token1,
						"acesDictionary" : {
							"Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1" : {
								"descriptor": context.descriptor,
								"allow": 5,
								"deny": 0
							}
						}
					},
					{
						"inheritPermissions" : false,
						"token" : context.token2,
						"acesDictionary" : {
							"Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1" : {
								"descriptor": context.descriptor,
								"allow": 1,
								"deny": 0
							}
						}
					},
					{
						"inheritPermissions" : false,
						"token" : context.token3,
						"acesDictionary" : {
							"Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1" : {
								"descriptor": context.descriptor,
								"allow": 15,
								"deny": 0
							}
						}
					}
				]
			}
		}
	);

    apiwriter.setEnableWrite(true);

	// singular permission check
	apiwriter.getJson('/permissions/{securityNamespaceId}/8/?token={token1}&alwaysAllowAdministrators=False');

	apiwriter.getJson('/permissions/{securityNamespaceId}/8/?token={token1}&alwaysAllowAdministrators=True');

	// plural permission checks
	apiwriter.getJson('/permissions/{securityNamespaceId}/8/?api-version=2.2&tokens={token1},{token2},{token3}&alwaysAllowAdministrators=False');

	// batch permission checks
	apiwriter.postJson('/security/permissionevaluationbatch/?api-version=3.0-preview', 
		function(context, result) {
			return {
				"alwaysallowadministrators" : false,
				"evaluations" : [
					{
						"securitynamespaceid" : context.securityNamespaceId,
						"token" : context.token1,
						"permissions" : 8
					},
					{
						"securitynamespaceid" : context.securityNamespaceId,
						"token" : context.token2,
						"permissions" : 8
					},
					{
						"securitynamespaceid" : context.securityNamespaceId,
						"token" : context.token3,
						"permissions" : 8
					}
				]
			}
		}
	);

	apiwriter.deleteJson('/permissions/{securityNamespaceId}/4/?token={token1}&descriptor={descriptor}', null);

    apiwriter.setEnableWrite(false);

	apiwriter.deleteJson('/accesscontrollists/{securityNamespaceId}/?tokens={token1},{token2},{token3}&recurse=False', null);
};