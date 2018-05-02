var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {  };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(true);

    // Get profile
    apiwriter.getJson('/profile/profiles/me');

    // Get profile avatar
    apiwriter.getJson('/profile/profiles/me/avatar');


};
