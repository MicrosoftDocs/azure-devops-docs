var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        queueId: null
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(true);
    apiwriter.getJson('/build/queues',
        function (context, result) {
            context.queueId = result.responseBody.value[0].id;
        });
	
    apiwriter.getJson('/build/queues/{queueId}');
}
