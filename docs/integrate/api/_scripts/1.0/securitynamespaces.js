var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		securityNamespaceId : null, 
		token : null,
		originalInheritValue : null
    };
};

var DEFAULT_MAX = 10;

var limitResult = function(result, max) {
    try {	
		if (result.responseBody.value && result.responseBody.value.length > max) {
			result.responseBody.value = result.responseBody.value.slice(0, max);
			result.responseBody.count = max;
		}
	} catch (e) { }
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(true);
    
    // Get the first security namespace
    apiwriter.getJson('/securitynamespaces/00000000-0000-0000-0000-000000000000/',
		function(context, result) {
			limitResult(result, DEFAULT_MAX);

			context.securityNamespaceId = result.responseBody.value[0].namespaceId;
		}
	);

    apiwriter.setEnableWrite(false);

	// Get the first acl token in the securitynamespace above
    apiwriter.getJson('/accesscontrollists/{securityNamespaceId}/',
		function(context, result) {
			context.token = result.responseBody.value[0].token;
			context.originalInheritValue = result.responseBody.value[0].inheritPermissions;
		}
	);

    apiwriter.setEnableWrite(true);

	// Get securitynamespace by namespaceId
    apiwriter.getJson('/securitynamespaces/{securityNamespaceId}/');

	// Set inherit flag 
	apiwriter.postJson('/securitynamespaces/{securityNamespaceId}/',
		function(context, result) {
			return { 
				"token": context.token, 
				"inherit" : false
			}
		}
	);

	// Reset to original state
    apiwriter.setEnableWrite(false);
	
	apiwriter.postJson('/securitynamespaces/{securityNamespaceId}/',
		function(context, result) {
			return { 
				"token": context.token, 
				"inherit" : context.originalInheritValue
			}
		}
	);
};
