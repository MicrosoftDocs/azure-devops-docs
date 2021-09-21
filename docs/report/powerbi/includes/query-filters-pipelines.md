---
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 09/21/2021
---

## Query filters

To determine available query filters, query the metadata as described in [Explore the Analytics OData metadata](../../extend-analytics/analytics-metadata.md). You can filter your queries using any of the **NavigationPropertyBinding Path** values listed under an **EntitySet**. 

For example, the OData metadata for **EntitySet Name="PipelineRunActivityResults"** is as shown below for **v4.0-preview**.  You can add filters based on any of the listed **NavigationPropertyBinding Path** values. 

> [!div class="tabbedCodeSnippets"]
```XML
<EntitySet Name="PipelineRunActivityResults" EntityType="Microsoft.VisualStudio.Services.Analytics.Model.PipelineRunActivityResult">
	<NavigationPropertyBinding Path="Project" Target="Projects"/>
	<NavigationPropertyBinding Path="Pipeline" Target="Pipelines"/>
	<NavigationPropertyBinding Path="PipelineTask" Target="PipelineTasks"/>
	<NavigationPropertyBinding Path="PipelineJob" Target="PipelineJobs"/>
	<NavigationPropertyBinding Path="Branch" Target="Branches"/>
	<NavigationPropertyBinding Path="PipelineRunQueuedOn" Target="Dates"/>
	<NavigationPropertyBinding Path="PipelineRunStartedOn" Target="Dates"/>
	<NavigationPropertyBinding Path="PipelineRunCompletedOn" Target="Dates"/>
	<NavigationPropertyBinding Path="ActivityStartedOn" Target="Dates"/>
	<NavigationPropertyBinding Path="ActivityCompletedOn" Target="Dates"/>
</EntitySet>
> ```


