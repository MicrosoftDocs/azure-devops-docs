---
title: Data available from the Analytics Service
titleSuffix: Azure DevOps
description: Data available for reporting purposes using the Analytics Service for Azure DevOps 
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: greggboe   
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 04/05/2019
---

# Data available from the Analytics Service

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

The Analytics Service provides the reporting platform for Azure DevOps. The Analytics Service is generally available for Azure DevOps Service and in preview for Azure DevOps Server 2019. 


::: moniker range="azure-devops-2019"

> [!NOTE]   
> For Azure DevOps Server 2019, you can use the Analytics Service in place of SQL Server Reporting Services or along side it. However, if you plan to use the Inheritance process model to customize work tracking, you can only use the Analytics Service for reporting, the project collection must not be configured to support reporting. To learn more about the Inheritance process model, see [About process customization and inherited processes](/azure/devops/organizations/settings/work/inheritance-process-model). 

::: moniker-end

Currently, you can access the following data from the Analytics Service. This information was last updated on April 5, 2019. 

<table>
<tr valign="bottom">
<th width="15%">Data</th>
<th width="30%">Available on Azure DevOps Services</th>
<th width="30%">Available on Azure DevOps Server 2019</th>
<th width="25%">Future availability</th>
</tr>
<tbody valign="top">
<tr>
<td>[Boards](https://azure.microsoft.com/en-us/services/devops/boards/)</td>
<td>[Widgets](../dashboards/analytics-widgets.md), [OData](../extend-analytics/index.md), [Power BI](overview.md)</td>
<td>Same as Azure DevOps</td>
<td>Rollup - Q2, CY 2019</td>
</tr>
<tr>
<td>[Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/)</td>
<td>[Test Analytics](https://docs.microsoft.com/azure/devops/pipelines/test/test-analytics?view=azure-devops)</td>
<td>Same as Azure DevOps</td>
<td>Build/Release - CY 2019</td>
</tr>
<tr>
<td>[Test Plans](https://azure.microsoft.com/en-us/services/devops/test-plans/)</td>
<td>None</td>
<td>None</td>
<td>Q2, CY 2019</td>
</tr>
<tr>
<td>[Repos](https://azure.microsoft.com/en-us/services/devops/repos/)</td>
<td>None</td>
<td>None</td>
<td>Under investigation</td>
</tr>
<tr>
<td>[Artifacts](https://azure.microsoft.com/en-us/services/devops/artifacts/)</td>
<td>None</td>
<td>None</td>
<td>Under investigation</td>
</tr>
</tbody>
</table>

> [!NOTE]   
> The Analytics Services doesn't support reporting on plain text and HTML fields at this time. 

As more data types come online, we will update this page. Look for announcements on the [Microsoft DevOps Blog](https://blogs.msdn.microsoft.com/devops/tag/reporting/).


## Try this next
> [!div class="nextstepaction"]
> [Dataset design for the Power BI Azure DevOps Connector](data-connector-dataset.md)

## Related articles
- [Data model for the Analytics Service](../extend-analytics/data-model-analytics-service.md)