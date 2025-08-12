---
title: Create a Service Hook Subscription Programmatically
description: Find out how to programmatically create a service hook subscription that prescribes an action to take when a specified event occurs in Azure DevOps.
ms.assetid: 0614F217-4F4E-45DC-A50C-B9FF81F8A5BD
ms.custom: engagement-fy23
ms.subservice: azure-devops-service-hooks
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/25/2025
# customer intent: As a developer, I want to create a service hook subscription programmatically so that I can automate tasks in other services when events happen in my Azure DevOps project.
---

# Create a service hook subscription programmatically

[!INCLUDE [Azure DevOps Services | Azure DevOps Server 2022 | Azure DevOps Server 2020](../includes/version-gt-eq-2020.md)]

You can use a subscription to perform an action on an external or consumer service when a specific event occurs in an Azure DevOps project. For example, a subscription can notify your service when a build fails.

To create a subscription programmatically, you can use the [Subscriptions REST APIs](/rest/api/azure/devops/hooks/). This article provides a sample request and sample code for creating a subscription.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Project access**| [Project member](../organizations/security/add-users-team-project.md). |
|**Data**|- Project ID. Use the [Project REST API](/rest/api/azure/devops/core/projects) to get the project ID.<br>- Event ID and settings. See [Service hook events](events.md).<br>- Consumer and action IDs and settings. See [Service hook consumers](consumers.md).|

## Supported events

Azure DevOps provides support for numerous trigger events. Examples include the following events:

- Build completed
- Code pushed (for Git projects)
- Pull request created or updated (for Git projects)
- Code checked in (for Team Foundation Version Control projects)
- Work item created, updated, deleted, restored, or commented on

To control which events trigger an action, you can configure filters on your subscriptions. For example, you can filter the build completed event based on the build status.

- For a complete set of supported events and filter options, see [Service hook events](events.md).
- For a complete set of supported consumer services and actions, see [Service hook consumers](consumers.md).

## Create a request

When you create a subscription, you use the body of an HTTP POST request to specify the project ID, event, consumer, action, and related settings. 

You can use the following request to create a subscription for a build completed event. In this example, when the `WebSite.CI` build fails, the subscription sends a POST request to `https://myservice/event`.

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

A: No, but here's a sample to help you get started. For authentication to Azure DevOps, the following code uses a personal access token (PAT) that's stored in Azure Key Vault. In a production environment, use a more secure authentication method. For more information, see [Choose the right authentication mechanism](../integrate/get-started/authentication/authentication-guidance.md).

```csharp
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.ServiceHooks.WebApi;
using Microsoft.VisualStudio.Services.WebApi;

namespace CreateServiceHookSubscription
{
    internal class Program
    {
        // Create a service hook subscription to send a message to an Azure Service Bus queue when code is pushed to a Git repository.

        static async Task Main(string[] args)
        {
            // Get the secrets from the key vault.
            string keyVaultURI = "https://<key-vault-name>.vault.azure.net/";
            var secretClient = new SecretClient(new Uri(keyVaultURI), new DefaultAzureCredential());
            string personalAccessTokenSecretName = "<personal-access-token-secret-name>";
            string serviceBusConnectionStringSecretName = "<Service-Bus-connection-string-secret-name>";
            KeyVaultSecret personalAccessTokenSecret = await secretClient.GetSecretAsync(personalAccessTokenSecretName);
            KeyVaultSecret serviceBusConnectionStringSecret = await secretClient.GetSecretAsync(serviceBusConnectionStringSecretName);

            // Set up the connection parameters for Azure DevOps.
            var azureDevOpsOrganizationURL = new Uri("https://dev.azure.com/<Azure-DevOps-organization-name>/");
            string azureDevOpsTeamProjectID = "<Azure-DevOps-team-project-ID>";
            string azureDevOpsPersonalAccessToken = personalAccessTokenSecret.Value;

            // Set up the event parameters.
            string eventPublisherID = "tfs";
            string eventID = "git.push";
            string eventDescription = "Any stage in any release";
            string resourceVersion = "1.0";

            // Set up the consumer parameters.
            string consumerID = "azureServiceBus";
            string consumerActionID = "serviceBusQueueSend";
            string serviceBusNamespace = "<Service-Bus-namespace>";
            string serviceBusQueueName = "<Service-Bus-queue-name>";
            string consumerActionDescription = $"Send a message to the Service Bus {serviceBusQueueName} queue in the {serviceBusNamespace} namespace.";
            string serviceBusConnectionString = serviceBusConnectionStringSecret.Value;

            // Configure the subscription.
            var subscription = new Subscription()
            {
                PublisherId = eventPublisherID,
                PublisherInputs = new Dictionary<string, string>
                {
                    ["projectId"] = azureDevOpsTeamProjectID
                },
                EventType = eventID,
                EventDescription = eventDescription,
                ResourceVersion = resourceVersion,
                ActionDescription = consumerActionDescription,
                ConsumerActionId = consumerActionID,
                ConsumerId = consumerID,
                ConsumerInputs = new Dictionary<string, string>
                {
                    ["connectionString"] = serviceBusConnectionString,
                    ["queueName"] = serviceBusQueueName
                }
            };

            // Connect to the Azure DevOps organization and get a service hook client.
            var azureDevOpsCredentials = new VssBasicCredential(azureDevOpsPersonalAccessToken, string.Empty);
            var azureDevOpsConnection = new VssConnection(azureDevOpsOrganizationURL, azureDevOpsCredentials);
            var serviceHookClient = azureDevOpsConnection.GetClient<ServiceHooksPublisherHttpClient>();

            // Create the subscription.
            var createdSubscription = await serviceHookClient.CreateSubscriptionAsync(subscription);
            Console.WriteLine($"A subscription was created that has ID {createdSubscription.Id}.");
        }
    }
}
```

## Related content

- [Manage authorization of services to access Azure DevOps](authorize.md)
- [Service hooks events](events.md)
- [Troubleshoot service hooks](troubleshoot.md)
