var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
      roomId: null,
    };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(true);
    
    // Enumerate all existing rooms
    apiwriter.getJson('/chat/rooms');
    
    // Create a new team room
    apiwriter.postJson('/chat/rooms',
        function(context, result) {
            return { "name": "newCreatedRoom", "description": "used for API doc generation" }
        },
        function(context, result) {
            context.roomId = result.responseBody.id;
        }
    );
    
    // Update the name and description of the room
    apiwriter.patchJson('/chat/rooms/{roomId}',
        function(context, result) {
            return {"name": "renamedRoom", "description":"updated room description"}
        }
    );

    apiwriter.getJson('/chat/rooms/{roomId}');
    
    // Delete the created room
    apiwriter.deleteJson('/chat/rooms/{roomId}', null);
};
