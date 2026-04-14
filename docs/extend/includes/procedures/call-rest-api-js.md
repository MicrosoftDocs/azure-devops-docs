---
ms.topic: include
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ms.subservice: azure-devops-ecosystem
---

1. Get the REST client. In this example, use the work item tracking client.

	```javascript
    import * as SDK from "azure-devops-extension-sdk";
    import { WorkItemTrackingRestClient } from "azure-devops-extension-api/WorkItemTracking";
    import { getClient } from "azure-devops-extension-api";

    SDK.init();
    SDK.ready().then(async () => {
        const witClient = getClient(WorkItemTrackingRestClient);
        // ...
    });
	```

1. Call the API, `getWorkItems`, using the client with a callback that handles results.

	```javascript
    const workItems = await witClient.getWorkItems([1, 2, 3, 4], undefined, ["System.Title"]);
    console.log(JSON.stringify(workItems));
	```
