---
title: .NET Client Library Samples for Azure DevOps Services
description: C# samples showing how to integrate with Azure DevOps Services and Team Foundation Server from apps and services on Windows using the legacy SOAP clients.
ms.assetid: 9ff78e9c-63f7-45b1-a70d-42aa6a9dbc57
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: wireznak
author: wireznak
ms.date: 09/26/2019
---

# C# client library samples 

Samples showing how to extend and integrate with Team Foundation Server and Azure DevOps Services using the legacy SOAP clients. These clients are only available in the .NET Framework version of the clients. For new development, prefer the JSON-based clients described in [.NET client libraries](../../concepts/dotnet-client-libraries.md).

Examples on this page require the following NuGet packages:
* [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/)
* [Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/)
* [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/)
* [Microsoft.VisualStudio.Services.InteractiveClient](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/)

#### Example: Using SOAP-based client

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

## Authenticating

To change the method of authentication to Azure DevOps Services or Azure DevOps Server, change the VssCredential type passed to VssConnection when creating it.

##### Personal Access Token authentication for SOAP services
```cs
public static void PersonalAccessTokenSoapSample()
{
    // Authenticate using Personal Access Token
    VssBasicCredential vssBasicCredential = new VssBasicCredential(string.Empty, pat);
    using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri), vssBasicCredential))
    {
        tpc.Authenticate();
        Console.WriteLine(tpc.InstanceId);
    }
}
```

##### Azure Active Directory authentication for SOAP services
```cs
public static void AADSoapSample()
{
	// Authenticate using Azure Active Directory credential (requires a Azure AD-backed organization)
	using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri), new VssAadCredential()))
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
	using (TfsTeamProjectCollection tpc = new TfsTeamProjectCollection(new Uri(collectionUri), new VssClientCredentials()))
	{
		tpc.Authenticate();
		Console.WriteLine(tpc.InstanceId);
	}
}
```
```