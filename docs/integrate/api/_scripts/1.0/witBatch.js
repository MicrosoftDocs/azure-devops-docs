var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis

//PreReq: There must be a project called "Fabrikam-Fiber-Git"

parseBodyForId = function (body) {
    //Body of form "{\"id\":269,\"rev\":1,\"fields\":{\"System.AreaPath\":\"Fabrikam-Fiber-Git\"......
    var parsedBody = JSON.parse(body);
    return parsedBody.id;
}

exports.getContext = function() {
    return {
        projectName: "Fabrikam-Fiber-Git",
        apiVersion: "1.0",
        PBIId: null,
        taskId: null
    };
};

exports.submitRequests = function() {
    apiwriter.setEnableWrite(true);

    // Create two work items and link them together
    apiwriter.postJsonEx('/wit/$batch',
      function (context, result) {
          return [
              {
                  "method": "PATCH",
                  "uri": "/" + context.projectName + "/_apis/wit/workItems/$Product Backlog Item?api-version=" + context.apiVersion,
                  "headers": {
                      "Content-Type": "application/json-patch+json"
                  },
                  "body": [
                      {
                          "op": "add",
                          "path": "/fields/System.Title",
                          "value": "Customer can sign in using their Microsoft Account"
                      },
                      {
                          "op": "add",
                          "path": "/id",
                          "value": "-1"
                      }
                  ]
              },
              {
                  "method": "PATCH",
                  "uri": "/" + context.projectName + "/_apis/wit/workItems/$Task?api-version=" + context.apiVersion,
                  "headers": {
                      "Content-Type": "application/json-patch+json"
                  },
                  "body": [
                      {
                          "op": "add",
                          "path": "/fields/System.Title",
                          "value": "JavaScript implementation for Microsoft Account"
                      },
                      {
                          "op": "add",
                          "path": "/id",
                          "value": "-2"
                      },
                      {
                          "op": "add",
                          "path": "/relations/-",
                          "value": {
                              "rel": "System.LinkTypes.Hierarchy-Reverse",
                              "url": options.url + "/wit/workItems/-1"
                          }
                      }
                  ]
              }
          ]
      },
      collectionScopeUrl,
      function (context, result) {
          context.PBIId = parseBodyForId(result.responseBody.value[0].body);
          context.taskId = parseBodyForId(result.responseBody.value[1].body);
      }
    );

    // Bulk edit the states of two work items == Cleanup
    apiwriter.postJsonEx('/wit/$batch',
      function (context, result) {
          return [
              {
                  "method": "PATCH",
                  "uri": "/_apis/wit/workItems/" + context.taskId + "?api-version=" + context.apiVersion,
                  "headers": {
                      "Content-Type": "application/json-patch+json"
                  },
                  "body": [
                      {
                          "op": "add",
                          "path": "/fields/System.State",
                          "value": "Removed"
                      }
                  ]
              },
              {
                  "method": "PATCH",
                  "uri": "/_apis/wit/workItems/" + context.PBIId + "?api-version=" + context.apiVersion,
                  "headers": {
                      "Content-Type": "application/json-patch+json"
                  },
                  "body": [
                      {
                          "op": "add",
                          "path": "/fields/System.State",
                          "value": "Removed"
                      }
                  ]
              }
          ]
      },
      collectionScopeUrl
  );
};

collectionScopeUrl = function (context, options) {
    options.url = url.resolve(options.url + "/", '../../_apis');
};
