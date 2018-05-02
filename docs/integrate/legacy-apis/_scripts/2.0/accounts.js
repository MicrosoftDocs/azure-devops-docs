var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {		
        newAccountName: 'dummyaccount1'
    };
};

exports.submitRequests = function() {

	apiwriter.setEnableWrite(false);
	
	// Get the current user's profile
    apiwriter.getJson('/profile/profiles/me',
		function(context, result) {
			context.userId = result.responseBody.id;		
		}	
	);

    apiwriter.setEnableWrite(true);

    // Get list of accounts by member
    apiwriter.getJson('/Accounts?memberId={userId}',
		function(context, result) {
            context.accountId = result.responseBody.value[0].accountId;
			context.accountName = result.responseBody.value[0].accountName;
        }
	);
	
	// Get list of accounts by owner
    apiwriter.getJson('/Accounts?ownerId={userId}');

    // Get an account by ID
    //apiwriter.getJson('/Accounts/{accountName}');

    // Get an account by name
    //apiwriter.getJson('/Accounts/{accountName}');

    // Get account users
    //apiwriter.getJson('/Account/User/{accountId}');		

    // Get account licenses
    // apiwriter.getJson('/Account/{accountId}/Licenses');		
    
    // Create an account
    /*apiwriter.postJson('/Accounts', 
        function(context, result) {
            return { "accountName": content.newAccountName };           
        },
        function(context, result) {
            context.accountId = result.responseBody.AccountId;
            context.accountName = result.responseBody.AccountName;
        }
    );*/
    
    // Update an account
    /*apiwriter.patchJson('/Accounts/{accountId}', 
        function(context, result) {
        console.log(context.accountId);
            return { "AccountId": context.accountId, "AccountName": "renamed account" };
        }
    );*/

    // Delete an account
    /*apiwriter.postJson('/AccountDeletions/{accountId}', 
        function(context, result) {
            return { };           
        }
    );*/      

};
