var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
      feedName: "EngineeringInternal",
      packageId: "e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b",
      versionId: "b8a2a277-f77b-4ef2-acfd-0c0e550af5f7"
    };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(true);

    // get all packages in a feed
    apiwriter.getJson('/packaging/feeds/{feedName}/packages')
    
    // get a packages in a feed
    apiwriter.getJson('/packaging/feeds/{feedName}/packages/{packageId}/')
    
    // get all versions of a package
    apiwriter.getJson('/packaging/feeds/{feedName}/packages/{packageId}/versions')
    
    // get a single version of a package
    apiwriter.getJson('/packaging/feeds/{feedName}/packages/{packageId}/versions/{versionId}')
};