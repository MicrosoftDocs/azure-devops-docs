---
title: .NET Client Library Samples for Azure DevOps Services
description: C# samples showing how to integrate with Azure DevOps Services and Team Foundation Server from apps and services on Windows.
ms.assetid: 9ff78e9c-63f7-45b1-a70d-42aa6a9dbc57
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# C# client library samples 

Samples showing how to extend and integrate with Team Foundation Server and Azure DevOps Services using the [.NET client libraries](../../concepts/dotnet-client-libraries.md).


## Samples in GitHub
There are many samples with instructions on how to run them on our [.NET Sample GitHub Page](https://github.com/Microsoft/vsts-dotnet-samples). 

## Other samples
REST examples on this page require the following NuGet packages:
* [Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/)
* [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/)
* [Microsoft.VisualStudio.Services.InteractiveClient](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/)

SOAP examples on this page require the following NuGet packages:
* [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/) 
* [Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/)
* [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/)
* [Microsoft.VisualStudio.Services.InteractiveClient](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/)

>[!NOTE]
> The Work Item Tracking (WIT) and Test Client OM are scheduled to be deprecated in 2020. For more information, see [Deprecation of WIT and Test Client OM](../../concepts/wit-client-om-deprecation.md).

#### Example 1: Using a REST-based HTTP client

```cs
// https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;

// https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/
using Microsoft.VisualStudio.Services.Client;

// https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/
using Microsoft.VisualStudio.Services.Common; 

/// <summary>
/// This sample creates a new work item query for New Bugs, stores it under 'MyQueries', runs the query, and then sends the results to the console.
/// </summary>
public static void SampleREST()
{
    // Create a connection object, which we will use to get httpclient objects.  This is more robust
    // then newing up httpclient objects directly.  Be sure to send in the full collection uri.
    // For example:  http://myserver:8080/tfs/defaultcollection
    // We are using default VssCredentials which uses NTLM against a Team Foundation Server.  See additional provided
    // examples for creating credentials for other types of authentication.
    VssConnection connection = new VssConnection(new Uri(collectionUri), new VssCredentials());

    // Create instance of WorkItemTrackingHttpClient using VssConnection
    WorkItemTrackingHttpClient witClient = connection.GetClient<WorkItemTrackingHttpClient>();

    // Get 2 levels of query hierarchy items
    List<QueryHierarchyItem> queryHierarchyItems = witClient.GetQueriesAsync(teamProjectName, depth: 2).Result;

    // Search for 'My Queries' folder
    QueryHierarchyItem myQueriesFolder = queryHierarchyItems.FirstOrDefault(qhi => qhi.Name.Equals("My Queries"));
    if (myQueriesFolder != null)
    {
        string queryName = "REST Sample";

        // See if our 'REST Sample' query already exists under 'My Queries' folder.
        QueryHierarchyItem newBugsQuery = null;
        if (myQueriesFolder.Children != null)
        {
            newBugsQuery = myQueriesFolder.Children.FirstOrDefault(qhi => qhi.Name.Equals(queryName));
        }
        if (newBugsQuery == null)
        {
            // if the 'REST Sample' query does not exist, create it.
            newBugsQuery = new QueryHierarchyItem()
            {
                Name = queryName,
                Wiql = "SELECT [System.Id],[System.WorkItemType],[System.Title],[System.AssignedTo],[System.State],[System.Tags] FROM WorkItems WHERE [System.TeamProject] = @project AND [System.WorkItemType] = 'Bug' AND [System.State] = 'New'",
                IsFolder = false
            };
            newBugsQuery = witClient.CreateQueryAsync(newBugsQuery, teamProjectName, myQueriesFolder.Name).Result;
        }

        // run the 'REST Sample' query
        WorkItemQueryResult result = witClient.QueryByIdAsync(newBugsQuery.Id).Result;

        if (result.WorkItems.Any())
        {
            int skip = 0;
            const int batchSize = 100;
            IEnumerable<WorkItemReference> workItemRefs;
            do
            {
                workItemRefs = result.WorkItems.Skip(skip).Take(batchSize);
                if (workItemRefs.Any())
                {
                    // get details for each work item in the batch
                    List<WorkItem> workItems = witClient.GetWorkItemsAsync(workItemRefs.Select(wir => wir.Id)).Result;
                    foreach (WorkItem workItem in workItems)
                    {
                        // write work item to console
                        Console.WriteLine("{0} {1}", workItem.Id, workItem.Fields["System.Title"]);
                    }
                }
                skip += batchSize;
            }
            while (workItemRefs.Count() == batchSize);
        }
        else
        {
            Console.WriteLine("No work items were returned from query.");
        }
    }
}
```

#### Example 2: Using SOAP-based client

```cs
// https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/
using Microsoft.TeamFoundation.Client;
using Microsoft.TeamFoundation.WorkItemTracking.Client;

/// <summary>
/// This sample creates a new work item query under 'MyQueries', runs the query, and then sends the results to the console.
/// </summary>
public static void SampleSOAP()
{
    // create TfsTeamProjectCollection instance using default credentials
    using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri)))
    {
        // get the WorkItemStore service
        WorkItemStore workItemStore = tpc.GetService<WorkItemStore>();

        // get the project context for the work item store
        Project workItemProject = workItemStore.Projects[teamProjectName];

        // search for the 'My Queries' folder
        QueryFolder myQueriesFolder = workItemProject.QueryHierarchy.FirstOrDefault(qh => qh is QueryFolder && qh.IsPersonal) as QueryFolder;
        if (myQueriesFolder != null)
        {
            // search for the 'SOAP Sample' query
            string queryName = "SOAP Sample";
            QueryDefinition newBugsQuery = myQueriesFolder.FirstOrDefault(qi => qi is QueryDefinition && qi.Name.Equals(queryName)) as QueryDefinition;
            if (newBugsQuery == null)
            {
                // if the 'SOAP Sample' query does not exist, create it.
                newBugsQuery = new QueryDefinition(queryName, "SELECT [System.Id],[System.WorkItemType],[System.Title],[System.AssignedTo],[System.State],[System.Tags] FROM WorkItems WHERE [System.WorkItemType] = 'Bug' AND [System.State] = 'New'");
                myQueriesFolder.Add(newBugsQuery);
                workItemProject.QueryHierarchy.Save();
            }

            // run the 'SOAP Sample' query
            WorkItemCollection workItems = workItemStore.Query(newBugsQuery.QueryText);
            foreach (WorkItem workItem in workItems)
            {
                // write work item to console
                Console.WriteLine("{0} {1}", workItem.Id, workItem.Fields["System.Title"].Value);
            }
        }
    }
}
```

#### Example 3: Calling both REST and SOAP-based APIs using same TfsTeamProjectCollection instance
```cs
// https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/
using Microsoft.TeamFoundation.Client;
using Microsoft.TeamFoundation.VersionControl.Client;

// https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/
using Microsoft.TeamFoundation.SourceControl.WebApi;

/// <summary>
/// This sample shows how you can get SOAP services and Rest Http Clients from same TfsTeamProjectCollection object.
/// </summary>
public static void MixedSample()
{
    // Get TfsTeamProjectCollection using standard SOAP convention
    using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri)))
    {
        // Can retrieve SOAP service from TfsTeamProjectCollection instance
        VersionControlServer vcServer = tpc.GetService<VersionControlServer>();
        ItemSet itemSet = vcServer.GetItems("$/", RecursionType.OneLevel);
        foreach (Item item in itemSet.Items)
        {
            Console.WriteLine(item.ServerItem);
        }

        // Can retrieve REST client from same TfsTeamProjectCollection instance
        TfvcHttpClient tfvcClient = tpc.GetClient<TfvcHttpClient>();
        List<TfvcItem> tfvcItems = tfvcClient.GetItemsAsync("$/", VersionControlRecursionType.OneLevel).Result;
        foreach (TfvcItem item in tfvcItems)
        {
            Console.WriteLine(item.Path);
        }
    }
}
```

## Authenticating (Azure DevOps Services)

### Creating a VssConnection instance to get HttpClients for REST services

##### Azure Active Directory Authentication for REST services
```cs
public static void AADRestSample()
{
    // Create instance of VssConnection using Azure AD Credentials for Azure AD backed account
    VssConnection connection = new VssConnection(new Uri(collectionUri), new VssAadCredential());

    WorkItemTrackingHttpClient witClient = connection.GetClient<WorkItemTrackingHttpClient>();
	List<QueryHierarchyItem> items = witClient.GetQueriesAsync(teamProjectName).Result;
}
```

##### Personal Access Token authentication for REST services
```cs
public static void PersonalAccessTokenRestSample()
{
    // Create instance of VssConnection using Personal Access Token
    VssConnection connection = new VssConnection(new Uri(collectionUri), new VssBasicCredential(string.Empty, pat));

    WorkItemTrackingHttpClient witClient = connection.GetClient<WorkItemTrackingHttpClient>();
    List<QueryHierarchyItem> items = witClient.GetQueriesAsync(teamProjectName).Result;
}
```

##### Visual Studio sign-in prompt (Microsoft Account or Azure Active Directory backed) for REST services
```cs
public static void MicrosoftAccountRestSample()
{
    // Create instance of VssConnection using Visual Studio sign-in prompt
    VssConnection connection = new VssConnection(new Uri(collectionUri), new VssClientCredentials());

    WorkItemTrackingHttpClient witClient = connection.GetClient<WorkItemTrackingHttpClient>();
    List<QueryHierarchyItem> items = witClient.GetQueriesAsync(teamProjectName).Result;
}
```

##### OAuth Authentication for REST services
Follow this link to learn how to obtain and refresh an OAuth accessToken: https://github.com/Microsoft/vsts-auth-samples
```cs
public static void OAuthSample()
{
    // Create instance of VssConnection using OAuth Access token
    VssConnection connection = new VssConnection(new Uri(collectionUri), new VssOAuthAccessTokenCredential(accessToken));

    WorkItemTrackingHttpClient witClient = connection.GetClient<WorkItemTrackingHttpClient>();
    List<QueryHierarchyItem> items = witClient.GetQueriesAsync(teamProjectName).Result;
}
```

### Creating a TfsTeamProjectCollection instance to use SOAP object model

##### Azure Active Directory authentication for SOAP services
```cs
public static void AADSoapSample()
{
	// Authenticate using Azure Active Directory credential (requires a Azure AD-backed organization)
	using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri), new AadCredential()))
	{
		tpc.Authenticate();
		Console.WriteLine(tpc.InstanceId);
	}
}
```

##### Basic authentication for SOAP services
```cs
public static void BasicAuthSoapSample()
{
    // Authenticate using Basic Authentication
    NetworkCredential netCred = new NetworkCredential(basicAuthUsername, password);
	BasicAuthCredential basicCred = new BasicAuthCredential(netCred);
	TfsClientCredentials tfsCred = new TfsClientCredentials(basicCred);
    tfsCred.AllowInteractive = false;
    using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri), tfsCred))
    {
        tpc.Authenticate();
        Console.WriteLine(tpc.InstanceId);
    }
}
```

##### Visual Studio sign-in prompt (Microsoft Account or Azure Active Directory backed) for SOAP services
```cs
public static void MicrosoftAccountSample()
{
	// authenticate using Visual Studio sign-in prompt
	using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri2), new TfsClientCredentials()))
	{
		tpc.Authenticate();
		Console.WriteLine(tpc.InstanceId);
	}
}
```

## Authenticating (Team Foundation Server)

### Creating a VssConnection instance to get HttpClients for REST services

##### Basic Authentication for REST services
```cs
public static void BasicAuthRestSample()
{
    // Create instance of VssConnection using basic auth credentials. 
    // For security, ensure you are connecting to an https server, since credentials get sent in plain text.
    VssConnection connection = new VssConnection(new Uri(collectionUri), new VssCredentials(new WindowsCredential(new NetworkCredential(username, password))));
    
    WorkItemTrackingHttpClient witClient = connection.GetClient<WorkItemTrackingHttpClient>();
    List <QueryHierarchyItem> items = witClient.GetQueriesAsync(teamProjectName).Result;
}
```

##### Windows authentication for REST services
```cs
public static void WindowsAuthRestSample()
{
    // Create instance of VssConnection using Windows credentials (NTLM)
    VssConnection connection = new VssConnection(new Uri(collectionUri), new VssClientCredentials());

    // Create instance of WorkItemTrackingHttpClient using VssConnection
    WorkItemTrackingHttpClient witClient = connection.GetClient<WorkItemTrackingHttpClient>();
	List<QueryHierarchyItem> items = witClient.GetQueriesAsync(teamProjectName).Result;
}
```

### Creating a TfsTeamProjectCollection instance to use SOAP object model

##### Basic authentication for SOAP services
```cs
public static void BasicAuthSoapSample()
{
    // Authenticate using Basic Authentication
    NetworkCredential netCred = new NetworkCredential(username, password);
    WindowsCredential windowsCred = new WindowsCredential(netCred);
    TfsClientCredentials tfsCred = new TfsClientCredentials(windowsCred);
    tfsCred.AllowInteractive = false;
    using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri), tfsCred))
    {
        tpc.Authenticate();
        Console.WriteLine(tpc.InstanceId);
    }
}
```

##### Windows authentication for SOAP services
```cs
public static void WindowsAuthenticationSoapSample()
{
    // authenticate using windows authentication
	using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri), new TfsClientCredentials()))
	{
		tpc.Authenticate();
		Console.WriteLine(tpc.InstanceId);
	}
}
```
