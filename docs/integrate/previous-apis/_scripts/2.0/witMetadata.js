var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis

exports.getContext = function () {
    return {
        projectName: "Fabrikam-Fiber-Git",
        fieldName: "System.IterationPath",
        rootIterationId: null,
        rootAreaId: null,
        iterationPath: "Final Iteration",
        iterationPathNew: "Ultimate iteration",
        iterationParent: "Parent Iteration",
        iterationId: null,
        areaPath: "Web",
        areaPathNew: "Website team",
        areaParent: "Parent Area",
        areaId: null,
        relationName: "System.LinkTypes.Related",
        categoryName: "Microsoft.RequirementCategory",
    };
};

exports.submitRequests = function () {
  
    // Get all wit fields
    apiwriter.getJsonEx('/wit/fields', collectionScopeUrl);

    // Get a specific wit field
    apiwriter.getJsonEx('/wit/fields/{fieldName}', collectionScopeUrl);
    
    // Get all work item types
    apiwriter.getJson('/wit/workItemTypes');
    
    // Get a specific work item type
    apiwriter.getJson('/wit/workItemTypes/Bug');
    
    // Get all work item type categories
    apiwriter.getJson('/wit/workItemTypeCategories');
    
    // Get a specific work item type category
    apiwriter.getJson('/wit/workItemTypeCategories/{categoryName}');
    
    // Get the areas
    apiwriter.getJson('/wit/classificationNodes/areas',
        function (context, result) {
            context.rootAreaId = result.responseBody.id;
        }
    );
    
    // Get the areas with children
    apiwriter.getJson('/wit/classificationNodes/areas?$depth=2');
    
    // Get the iterations
    apiwriter.getJson('/wit/classificationNodes/iterations',
        function (context, result) {
            context.rootIterationId = result.responseBody.id;
        }
    );
    
    // Get the iterations with children
    apiwriter.getJson('/wit/classificationNodes/iterations?$depth=2');    

    // Create areas/iterations to move under
    apiwriter.setEnableWrite(false);
    
    apiwriter.postJson('/wit/classificationNodes/areas',
        function (context, result) {
            return {
                "name": context.areaParent
            }
        }
    )
    
    apiwriter.postJson('/wit/classificationNodes/iterations',
        function (context, result) {
            return {
                "name": context.iterationParent
            }
        }
    )
    
    apiwriter.setEnableWrite(true);

    // Create new area
    apiwriter.postJson('/wit/classificationNodes/areas',
        function (context, result) {
            return {
                "name": context.areaPath
            }
        },
        function (context, result) {
            context.areaId = result.responseBody.id;
        }
    );
    
    // Get a specific area
    apiwriter.getJson('/wit/classificationNodes/areas/{areaPath}');
    
    // Rename area path
    apiwriter.patchJson('/wit/classificationNodes/areas/{areaPath}',  
        function (context, result) {
            return {
                "name": context.areaPathNew
            }
        }
    );
    
    // Move area
    apiwriter.postJson('/wit/classificationNodes/areas/{areaParent}',
        function (context, result) {
            return {
                "id": context.areaId
            }
        }
    );
    
    // Create new iteration with dates
    apiwriter.postJson('/wit/classificationNodes/iterations',
        function (context, result) {
            return {
                "name": context.iterationPath,
                "attributes": {
                  "startDate": "2014-10-27T00:00:00Z",
                  "finishDate": "2014-10-31T00:00:00Z"
                }
            }
        },
        function (context, result) {
            context.iterationId = result.responseBody.id;
        }
    );
    
    // Get a specific iteration
    apiwriter.getJson('/wit/classificationNodes/iterations/{iterationPath}');
    
    // Rename iteration path
    apiwriter.patchJson('/wit/classificationNodes/iterations/{iterationPath}',  
        function (context, result) {
            return {
                "name": context.iterationPathNew
            }
        }
    );
    
    // Update dates on iteration
    apiwriter.patchJson('/wit/classificationNodes/iterations/{iterationPathNew}',
        function (context, result) {
            return {
                "attributes": {
                  "startDate": "2015-01-26T00:00:00Z",
                  "finishDate": "2015-01-30T00:00:00Z"
                }
            }
        }
    );
    
    // Move iteration
    apiwriter.postJson('/wit/classificationNodes/iterations/{iterationParent}',
        function (context, result) {
            return {
                "id": context.iterationId
            }
        }
    );
    
    // Delete areas
    //apiwriter.deleteJson('/wit/classificationNodes/areas/{areaPathNew}?$reclassifyId={rootAreaId}', null);
    apiwriter.deleteJson('/wit/classificationNodes/areas/{areaParent}?$reclassifyId={rootAreaId}', null);
    
    // Delete iterations
    //apiwriter.deleteJson('/wit/classificationNodes/iterations/{iterationPathNew}?$reclassifyId={rootIterationId}', null);
    apiwriter.deleteJson('/wit/classificationNodes/iterations/{iterationParent}?$reclassifyId={rootIterationId}', null);

    // Get the link types
    apiwriter.getJsonEx('/wit/workitemrelationtypes', collectionScopeUrl);
    
    // Get a specific link types
    apiwriter.getJsonEx('/wit/workitemrelationtypes/{relationName}', collectionScopeUrl);
};

collectionScopeUrl = function (context, options) {    
    options.url = url.resolve(options.url + "/", '../../_apis');
};
