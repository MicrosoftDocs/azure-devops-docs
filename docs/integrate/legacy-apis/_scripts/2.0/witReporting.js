var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis

//PreReq: There must be a project called "Fabrikam-Fiber-Git"
//PreReq: There must be at least 13 work item revisions
//Prereq: There must be at least 1 work item link

exports.getContext = function() {
    return {
        projectName: "Fabrikam-Fiber-Git",
        apiVersion: "2.0",
        accept: "application/json"
    };
};

var maxValuesLength = 3;

truncateResponse = function(_context, output) {
    if(output.hasOwnProperty('responseBody') && output.responseBody.hasOwnProperty('values') && output.responseBody.values.length > maxValuesLength)
    {
        var numOfItemsInExcess = output.responseBody.values.length - maxValuesLength;
        output.responseBody.values.splice(maxValuesLength, numOfItemsInExcess);
    }
};

exports.submitRequests = function() {
    apiwriter.setEnableWrite(true);

    // Make a GET request to the Revisions API
    apiwriter.getJson('/wit/reporting/workItemRevisions', truncateResponse);
    
    // Make a GET request to the Revisions API
    apiwriter.getJson('/wit/reporting/workItemRevisions?includeIdentityRef=true&watermark=794', truncateResponse);

    // Make a POST request to the Revisions API
    apiwriter.postJson('/wit/reporting/workItemRevisions?watermark=794',
        function (context, result) {
            return {
                types : ["Bug", "Task", "Product Backlog Item"],
                fields : ["System.WorkItemType", "System.Title", "System.AreaPath"],
                includeIdentityRef : true
            };
        },
        truncateResponse
    );

    // Make a GET request to the Links API
    apiwriter.getJson('/wit/reporting/workItemLinks', truncateResponse);
};