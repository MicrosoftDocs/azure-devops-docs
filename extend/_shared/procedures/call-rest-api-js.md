1. Get the [REST client](../../reference/client/rest-clients.md). In this case, we're getting the work item tracking client.

	``` javascript
    VSS.require(["VSS/Service", "TFS/WorkItemTracking/RestClient"], function (VSS_Service, TFS_Wit_WebApi) {
        // Get the REST client
        var witClient = VSS_Service.getCollectionClient(TFS_Wit_WebApi.WorkItemTrackingHttpClient);
        // ...
    });
	```

1. Call the API (```getWorkItems```) using the client service (```witClient```), with a callback that handles results.

	``` javascript
    witClient.getWorkItems(/* some work item IDs */ [1,2,3,4], ["System.Title"]).then(
        function(workItems) {
	    	console.log(JSON.stringify(workItems));
        });
	```
