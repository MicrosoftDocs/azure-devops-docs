---
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 09/21/2021
---

## Query filters

To determine available query filters, query the metadata as described in [Explore the Analytics OData metadata](../../extend-analytics/analytics-metadata.md). You can filter your queries using any of the **NavigationPropertyBinding Path** values listed under an **EntitySet**. 

For example, the OData metadata for the **EntitySet Name="TestPoints"** is as shown below for **v4.0-preview**.  You can add filters based on any of the listed **NavigationPropertyBinding Path** values. 

> [!div class="tabbedCodeSnippets"]
> ```XML
> <EntitySet Name="TestPoints" EntityType="Microsoft.VisualStudio.Services.Analytics.Model.TestPoint">
> 	<NavigationPropertyBinding Path="ChangedOn" Target="Dates"/>
> 	<NavigationPropertyBinding Path="Project" Target="Projects"/>
> 	<NavigationPropertyBinding Path="TestSuite" Target="TestSuites"/>
> 	<NavigationPropertyBinding Path="TestConfiguration" Target="TestConfigurations"/>
> 	<NavigationPropertyBinding Path="TestCase" Target="WorkItems"/>
> 	<NavigationPropertyBinding Path="Tester" Target="Users"/>
> 	<NavigationPropertyBinding Path="AssignedTo" Target="Users"/>
> 	<Annotation Term="Org.OData.Display.V1.DisplayName" String="Test Points"/>
> </EntitySet>
> ```


