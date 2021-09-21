---
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 09/21/2021
---

## Query filters

To determine available query filters, query the metadata as described in [Explore the Analytics OData metadata](../../extend-analytics/analytics-metadata.md). You can filter your queries using any of the **NavigationPropertyBinding Path** values listed under an **EntitySet**. 

For example, the OData metadata for **EntitySet Name="WorkItemSnapshot"** is as shown below for **v4.0-preview**.  You can add filters based on any of the listed **NavigationPropertyBinding Path** values. 

> [!div class="tabbedCodeSnippets"]
> ```XML
> <EntitySet Name="WorkItemSnapshot" EntityType="Microsoft.VisualStudio.Services.Analytics.Model.WorkItemSnapshot">
> 	<NavigationPropertyBinding Path="Date" Target="Dates"/>
> 	<NavigationPropertyBinding Path="RevisedOn" Target="Dates"/>
> 	<NavigationPropertyBinding Path="Teams" Target="Teams"/>
> 	<NavigationPropertyBinding Path="Processes" Target="Processes"/>
> 	<NavigationPropertyBinding Path="Project" Target="Projects"/>
> 	<NavigationPropertyBinding Path="Area" Target="Areas"/>
> 	<NavigationPropertyBinding Path="Iteration" Target="Iterations"/>
> 	<NavigationPropertyBinding Path="AssignedTo" Target="Users"/>
> 	<NavigationPropertyBinding Path="ChangedBy" Target="Users"/>
> 	<NavigationPropertyBinding Path="CreatedBy" Target="Users"/>
> 	<NavigationPropertyBinding Path="ActivatedBy" Target="Users"/>
> 	<NavigationPropertyBinding Path="ClosedBy" Target="Users"/>
> 	<NavigationPropertyBinding Path="ResolvedBy" Target="Users"/>
> 	<NavigationPropertyBinding Path="Tags" Target="Tags"/>
> 	<NavigationPropertyBinding Path="ChangedOn" Target="Dates"/>
> 	<NavigationPropertyBinding Path="ClosedOn" Target="Dates"/>
> 	<NavigationPropertyBinding Path="CreatedOn" Target="Dates"/>
> 	<NavigationPropertyBinding Path="ResolvedOn" Target="Dates"/>
> 	<NavigationPropertyBinding Path="StateChangeOn" Target="Dates"/>
> 	<NavigationPropertyBinding Path="InProgressOn" Target="Dates"/>
> 	<NavigationPropertyBinding Path="CompletedOn" Target="Dates"/>
> </EntitySet>
> ```


