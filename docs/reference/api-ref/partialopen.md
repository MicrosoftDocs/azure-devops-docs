---
title: WorkItem.PartialOpen method
titleSuffix: Azure DevOps & TFS 
description: Syntax and usage for the PartialOpen method to open a work item for modification when working with Azure DevOps Services & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 82920422-FCC2-4FF6-BDFB-E8E992736A5A
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 08/04/2016
---


# WorkItem.PartialOpen Method


[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Opens this work item for modification by loading only the latest revision of this WorkItem. Whenever possible, use this method instead of [Open](open.md) because PartialOpen provides better performance.  

**Namespace:**  [Microsoft.TeamFoundation.WorkItemTracking.Client](/previous-versions/visualstudio/visual-studio-2013/bb141853(v=vs.120))  
**Assembly:**  Microsoft.TeamFoundation.WorkItemTracking.Client (in Microsoft.TeamFoundation.WorkItemTracking.Client.dll)


## Syntax

<table>
<tr>
<td width="75px"> 
<h4>C#</h4>
</td>
<td>
```public void PartialOpen()```
</td>
</tr>

<tr>
<td> 
<h4>C++</h4>
</td>
<td>
```public:```<br/>
```void PartialOpen()```
</td>
</tr>

<tr>
<td> 
<h4>F#</h4>
</td>
<td>
```member PartialOpen : unit -> unit```
</td>
</tr>

<tr>
<td> 
<h4>JScript</h4>
</td>
<td>
```public void PartialOpen()```
</td>
</tr>

<tr>
<td> 
<h4>VB</h4>
</td>
<td>
```'Declaration```<br/>
```Public Sub PartialOpen```
</td>
</tr>
</table>


<!---

<a data-toggle="collapse" href="#expando-agent-pools">C# ▼</a>
<div class="collapse" id="expando-queues"> 
```public void PartialOpen()```
</div>

<a data-toggle="collapse" href="#expando-agent-pools">C++ ▼</a>
<div class="collapse" id="expando-queues"> 
```public:  
void PartialOpen()```
</div>


<a data-toggle="collapse" href="#expando-agent-pools">F# ▼</a>
<div class="collapse" id="expando-queues"> 
```member PartialOpen : unit -> unit```
</div>


<a data-toggle="collapse" href="#expando-agent-pools">JScript ▼</a>
<div class="collapse" id="expando-queues"> 
```public function PartialOpen()```
</div>

<a data-toggle="collapse" href="#expando-agent-pools">VB ▼</a>
<div class="collapse" id="expando-queues"> 
```'Declaration  
Public Sub PartialOpen```
</div>

---> 

## Exceptions

| **Exception** | **Condition** |
| --- | --- |
| [ValidationException](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.validationexception%28v=vs.120%29.aspx) | This WorkItem instance does not belong to a [WorkItemCollection](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.workitemcollection%28v=vs.120%29.aspx). |
| [DeniedOrNotExistException](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.deniedornotexistexception%28v=vs.120%29.aspx) | This WorkItem instance could not be opened for edit correctly. |

## Remarks

The PartialOpen method loads the field data for only the latest revision of the work item. It does not load non-field data such as links, attachments, and historical revisions. Use this method instead of [Open](open.md) if you only need to work with the latest field data for a work item.

PartialOpen is designed for use within a paging context. When you call PartialOpen on one work item, the entire page of work items will be fetched in a single round-trip to the server. This makes PartialOpen ideal for use in a paging context, such as when displaying and editing pages of work items. If you use [Open](open.md), it will only fetch one work item in a single round-trip, which is less efficient when working with pages of data.

There are two modes of fetching used by PartialOpen, which the caller can use to determine which fields to fetch. These two modes correspond to whether the [DefaultProjectHint](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.workitemcollection.defaultprojecthint%28v=vs.120%29.aspx) is specified or unset in the owning [WorkItemCollection](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.workitemcollection%28v=vs.120%29.aspx) object.

(Mode 1) Default - Fetch all the fields of the work item, when project hint is unset.

(Mode 2) Optimized - Fetch only the fields relevant to a particular project, when project hint is specified. This is most optimal and recommended when all workitems are from the same project.

By using PartialOpen, you can save bandwidth, resources, and time by paging in data for multiple work item fields up to the page size that is specified in [WorkItemCollection.PageSize](https://msdn.microsoft.com/library/microsoft.teamfoundation.workitemtracking.client.workitemcollection.pagesize%28v=vs.120%29.aspx). For Azure DevOps Services, the Open method is rate limited whereas PartialOpen is not.

This method does nothing if [IsPartialOpen](/previous-versions/visualstudio/visual-studio-2013/bb164816(v=vs.120)), [IsOpen](/previous-versions/visualstudio/visual-studio-2013/bb164814(v=vs.120)) or [IsNew](/previous-versions/visualstudio/visual-studio-2013/ff737494(v=vs.120)) are true.

## Sample Code

The following code snippet shows how to use PartialOpen to update a list of work items returned from a query.

```CS
private static void UpdateWorkItemsUsingPartialOpen()
{

    // create TfsTeamProjectCollection instance using default credentials
    var collectionUri = "http://localhost:8080/tfs/DefaultCollection";
    
    using (TfsTeamProjectCollection tpc = newTfsTeamProjectCollection(newUri(collectionUri)))
    {
        // get the WorkItemStore service
        var workItemStore = tpc.GetService<WorkItemStore>();

        // get the project context for the work item store

        var teamProjectName = "My Favorite Project";

        Project workItemProject = workItemStore.Projects[teamProjectName];

        // search for the 'My Queries' folder

        var queryFolder = workItemProject.QueryHierarchy.FirstOrDefault(qh => qh isQueryFolder && qh.IsPersonal) asQueryFolder;

        if (queryFolder != null)
        {

            // Search for the saved query.
            var queryName = "PartialOpen Sample";
            var newBugsQuery = queryFolder.FirstOrDefault(qi => qi isQueryDefinition && qi.Name.Equals(queryName)) asQueryDefinition;

            if (newBugsQuery == null)
            {
                // If the query does not exist, create it.
                var queryString = string.Format("SELECT [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags] FROM WorkItems WHERE [System.TeamProject] = '{0}' AND [System.WorkItemType] = 'Bug' AND [System.State] = 'New'", teamProjectName);
                newBugsQuery = newQueryDefinition(queryName, queryString);
                queryFolder.Add(newBugsQuery);
                workItemProject.QueryHierarchy.Save();
            }

            // Run the query.
            WorkItemCollection workItems = workItemStore.Query(newBugsQuery.QueryText);

            // Supply the project hint to only fetch necessary data for the project.
            workItemCollection.DefaultProjectHint = workItemProject.Id;

            var newAssignee = "John Smith";

            foreach (WorkItem workItem in workItems)
            {
                // PartialOpen to fetch fields without underlying lists for entire query page.
                // Using Open() here will fetch too much unnecessary data, and hence is undesirable.
                workItem.PartialOpen();

                // Edit the fields as needed.
                workItem["System.AssignedTo"] = newAssignee;

                // Save your changes.
                workItem.Save();

                // Write work item to console.
                Console.WriteLine("Assigned {0} {1} to {2}", workItem.Id, workItem.Fields["System.Title"].Value, newAssignee);

                // Free memory.
                workItem.Close();
            }
        }
    }
}
```

## .NET Framework Security

- Full trust for the immediate caller. This member cannot be used by partially trusted code. For more information, see [Using Libraries from Partially Trusted Code](https://msdn.microsoft.com/library/8skskf63%28v=vs.120%29.aspx).


## Related articles


- [WorkItem Class](/previous-versions/visualstudio/visual-studio-2013/bb179831(v=vs.120))  
- [Microsoft.TeamFoundation.WorkItemTracking.Client Namespace](/previous-versions/visualstudio/visual-studio-2013/bb141853(v=vs.120))  
