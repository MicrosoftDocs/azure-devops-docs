var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
      roomId: null
    };
};

exports.submitRequests = function()
{
	apiwriter.setEnableWrite(false);
	
	// Get the current user's profile
    apiwriter.getJson('/connectionData',
		function(context, result) {
			context.userId = result.responseBody.authenticatedUser.id;		
		}	
	);

    // go find the roomId without writing
    apiwriter.setEnableWrite(false);
    apiwriter.getJson('/chat/rooms',
        function(context, result) {
            context.roomId = result.responseBody.value[0].id;
        });

    apiwriter.setEnableWrite(true);
    
    // Retrieve the list of room users
    apiwriter.getJson('/chat/rooms/{roomId}/users');
        
    // Get user status
    apiwriter.getJson('/chat/rooms/{roomId}/users/{userId}');
    /*,
        function(context, result) {
            context.userId = result.responseBody.value[0].userId;
        });*/

    // Join and leave the room
    apiwriter.putJson('/chat/rooms/{roomId}/users/{userId}',
        function(context, result) {
            return { 'userId': context.userId }
        });
    apiwriter.deleteJson('/chat/rooms/{roomId}/users/{userId}', null);
};
