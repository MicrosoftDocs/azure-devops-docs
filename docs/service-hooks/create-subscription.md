---
title: Create a service hook subscription programmatically
description: Use service hooks to set up actions to take when specific events occur in Azure DevOps.
ms.assetid: 0614F217-4F4E-45DC-A50C-B9FF81F8A5BD
ms.custom: engagement-fy23
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/14/2022
---

# Create a service hook subscription programmatically

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

You can use a subscription to perform an action on an external or consumer service when a specific event occurs in an Azure DevOps project. For example, a subscription can notify your service when a build fails. To create a subscription programmatically, you can use the [Subscriptions REST APIs](/rest/api/azure/devops/hooks/).

Azure DevOps provides support for numerous trigger events. Examples include the following events:

- Build completed
- Code pushed (for Git projects)
- Pull request created or updated (for Git projects)
- Code checked in (for Team Foundation Version Control projects)
- Work item created, updated, deleted, restored, or commented on

To control which events trigger an action, you can configure filters on your subscriptions. For example, you can filter the build completed event based on the build status. For a complete set of supported events and filter options, see [Service hook events](./events.md).

For a complete set of supported consumer services and actions, see [Service hook consumers](./consumers.md).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Project access**| [Project member](../organizations/security/add-users-team-project.md). |
|**Data**|- Project ID. Use the [Project REST API](/rest/api/azure/devops/core/projects) to get the project ID.<br>- Event ID and settings. See [Service hook events](./events.md).<br>- Consumer and action IDs and settings. See [Service hook consumers](./consumers.md).|

## Create the request

When you create a subscription, the body of your HTTP POST request specifies the project ID, event, consumer, action, and related settings. 

You can use the following request to create a subscription for a build completed event. It sends a POST request to `https://myservice/event` when the `WebSite.CI` build fails.

**Request**

```json
{
    "publisherId": "tfs",
    "eventType": "build.complete",
    "resourceVersion": "1.0",
    "consumerId": "webHooks",
    "consumerActionId": "httpRequest",
    "publisherInputs": {
        "buildStatus": "failed",
        "definitionName": "WebSite.CI",
        "projectId": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
    },
    "consumerInputs": {
        "url": " https://myservice/event"
    },
}

```
We highly recommend using secure HTTPS URLs for the security of the private data in the JSON object.

**Response**

The request to create the subscription generates a response that's similar to the following one:

```json
{
    "id": "aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e",
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/hooks/subscriptions/aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e",
    "publisherId": "tfs",
    "eventType": "build.complete",
    "resourceVersion": "1.0",
    "consumerId": "webHooks",
    "consumerActionId": "httpRequest",
    "createdBy": {
        "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa"
    },
    "createdDate": "2014-03-28T16:10:06.523Z",
    "modifiedBy": {
        "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa"
    },
    "modifiedDate": "2014-04-25T18:15:26.053Z",
    "publisherInputs": {
        "buildStatus": "failed",
        "definitionName": "WebSite.CI",
        "hostId": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
        "projectId": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
        "tfsSubscriptionId": "ffff5f5f-aa6a-bb7b-cc8c-dddddd9d9d9d"
    },
    "consumerInputs": {
        "url": "http://myservice/event"
    }
}

```

If the subscription request fails, you get an HTTP response code of 400 with a message that has further details.

### What happens when the event occurs?

When an event occurs, all enabled subscriptions in the project are evaluated. Then the consumer action is performed for all matching subscriptions.

### Resource versions (advanced)

Resource versioning is applicable when an API is in preview. For most scenarios, specifying `1.0` as the resource version is the safest route.

The event payload sent to certain consumers includes a JSON representation of a subject resource. For instance, the payload sent to webhooks, Azure Service Bus, and Azure Storage includes information about a build or work item. The representation of this resource can have various forms or versions.

You can specify the version of the resource that you want to send to the consumer service via the `resourceVersion` field on the subscription.

The resource version is the same as the [API version](../integrate/concepts/rest-api-versioning.md). If you don't specify a resource version, the latest version, `latest released`, is used. To help ensure a consistent event payload over time, always specify a resource version.

## FAQs
### Q: Are there services that I can subscribe to manually?

A: Yes. For more information about the services that you can subscribe to from a project administration page, see [Integrate with service hooks](overview.md).

### Q: Are there C# libraries that I can use to create subscriptions?

A: No, but here's a sample to help you get started.

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;

namespace Microsoft.Samples.VisualStudioOnline
{
    public class ServiceHookEventController : Controller
    {

        // POST: /ServiceHookEvent/workitemcreated
        [HttpPost]
        public HttpResponseMessage WorkItemCreated(Content workItemEvent)
        {
            //Grabbing the title for the new workitem
            var value = RetrieveFieldValue("System.field", workItemEvent.Resource.Fields);

            //Acknowledge event receipt
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        /// <summary>
        /// Gets the value for a specified work item field.
        /// </summary>
        /// <param name="key">Key used to retrieve matching value</param>
        /// <param name="fields">List of fields for a work item</param>
        /// <returns></returns>
        public String RetrieveFieldValue(String key, IList<FieldInfo> fields)
        {
            if (String.IsNullOrEmpty(key))
                return String.Empty;

            var result = fields.Single(s => s.Field.RefName == key);

            return result.Value;
        }

	}

    public class Content
    {
        public String SubscriptionId { get; set; }

        public int NotificationId { get; set; }

        public String EventType { get; set; }

        public WorkItemResource Resource { get; set; }

    }

    public class WorkItemResource
    {
        public String UpdatesUrl { get; set; }

        public IList<FieldInfo> Fields { get; set;}

        public int Id { get; set; }

        public int Rev { get; set; }

        public String Url { get; set; }

        public String WebUrl { get; set; }
    }

    public class FieldInfo
    {
        public FieldDetailedInfo Field { get; set; }

        public String Value { get; set; }

    }

    public class FieldDetailedInfo
    {
        public int Id { get; set; }

        public String Name { get; set; }

        public String RefName { get; set; }
    }
}
```

## Related articles

- [Manage authorization of services to access Azure DevOps](authorize.md)
- [Service hooks events](events.md)
- [Troubleshoot service hooks](troubleshoot.md)
