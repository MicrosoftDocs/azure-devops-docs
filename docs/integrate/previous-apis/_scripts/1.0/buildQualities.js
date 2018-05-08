var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        quality: 'To be evaluated'
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(true);
    apiwriter.getJson('/build/qualities');

    apiwriter.putJson('/build/qualities/{quality}', {});

    apiwriter.deleteJson('/build/qualities/{quality}', null);
}
