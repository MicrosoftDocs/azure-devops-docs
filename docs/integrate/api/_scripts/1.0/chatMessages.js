var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
      roomId: null,
      messageId: null,
      filter: 'PostedTime ge 10/25/2014 and PostedTime lt 10/28/2014'
    };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(false);

    //get the first room
    apiwriter.getJson('/chat/rooms',
        function(context, result) {
            context.roomId = result.responseBody.value[0].id;
        });

    apiwriter.setEnableWrite(true);

    //get the list of messages
    apiwriter.getJson('/chat/rooms/{roomId}/messages');

    //get a filtered list of messages
    apiwriter.getJson('/chat/rooms/{roomId}/messages?$filter={filter}');
    
    // post a new message
    apiwriter.postJson('/chat/rooms/{roomId}/messages',
        function(context, result) {
            return { "content": "Here's a new message" }
        },
        function(context, result) {
            context.messageId = result.responseBody.id;
        }
    );
    
    // Update the message
    apiwriter.patchJson('/chat/rooms/{roomId}/messages/{messageId}',
        function(context, result) {
            return {"content": "Updated message"}
        }
    );
    
    // get the details of the first message
    apiwriter.getJson('/chat/rooms/{roomId}/messages/{messageId}');
    
    // Delete the message
    apiwriter.deleteJson('/chat/rooms/{roomId}/messages/{messageId}', null);
};