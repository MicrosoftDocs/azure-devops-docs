---
title: Data available from Analytics
titleSuffix: Azure DevOps
description: Data available for reporting purposes using Analytics for Azure DevOps 
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

# Data available from Analytics

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

Analytics provides the reporting platform for Azure DevOps. Analytics is generally available for Azure DevOps Service and in preview for Azure DevOps Server 2019. 


::: moniker range="azure-devops-2019"

> [!NOTE]   
> For Azure DevOps Server 2019, you can use Analytics in place of SQL Server Reporting Services or along side it. However, if you plan to use the Inheritance process model to customize work tracking, you can only use Analytics for reporting, the project collection must not be configured to support reporting. To learn more about the Inheritance process model, see [About process customization and inherited processes](/azure/devops/organizations/settings/work/inheritance-process-model). 

::: moniker-end

Currently, you can access the following data from Analytics. This information was last updated on April 5, 2019. 

<table>
<tr valign="bottom">
<th width="15%">Data</th>
<th width="30%">Available on Azure DevOps Services</th>
<th width="30%">Available on Azure DevOps Server 2019</th>
<th width="25%">Future availability</th>
</tr>
<tbody valign="top">
<tr>
<td><a href="https://azure.microsoft.com/services/devops/boards/" data-raw-source="[Boards](https://azure.microsoft.com/services/devops/boards/)">Boards</a></td>
<td><a href="../dashboards/analytics-widgets.md" data-raw-source="[Widgets](../dashboards/analytics-widgets.md)">Widgets</a>, <a href="../extend-analytics/index.md" data-raw-source="[OData](../extend-analytics/index.md)">OData</a>, <a href="overview.md" data-raw-source="[Power BI](overview.md)">Power BI</a></td>
<td>Same as Azure DevOps</td>
<td>Rollup - Q2, CY 2019</td>
</tr>
<tr>
<td><a href="https://azure.microsoft.com/services/devops/pipelines/" data-raw-source="[Pipelines](https://azure.microsoft.com/services/devops/pipelines/)">Pipelines</a></td>
<td><a href="https://docs.microsoft.com/azure/devops/pipelines/test/test-analytics?view=azure-devops" data-raw-source="[Test Analytics](https://docs.microsoft.com/azure/devops/pipelines/test/test-analytics?view=azure-devops)">Test Analytics</a></td>
<td>Same as Azure DevOps</td>
<td>Build/Release - CY 2019</td>
</tr>
<tr>
<td><a href="https://azure.microsoft.com/services/devops/test-plans/" data-raw-source="[Test Plans](https://azure.microsoft.com/services/devops/test-plans/)">Test Plans</a></td>
<td>None</td>
<td>None</td>
<td>Q2, CY 2019</td>
</tr>
<tr>
<td><a href="https://azure.microsoft.com/services/devops/repos/" data-raw-source="[Repos](https://azure.microsoft.com/services/devops/repos/)">Repos</a></td>
<td>None</td>
<td>None</td>
<td>Under investigation</td>
</tr>
<tr>
<td><a href="https://azure.microsoft.com/services/devops/artifacts/" data-raw-source="[Artifacts](https://azure.microsoft.com/services/devops/artifacts/)">Artifacts</a></td>
<td>None</td>
<td>None</td>
<td>Under investigation</td>
</tr>
</tbody>
</table>

> [!NOTE]   
> Analyticss doesn't support reporting on plain text and HTML fields at this time. 

As more data types come online, we will update this page. Look for announcements on the [Microsoft DevOps Blog](https://blogs.msdn.microsoft.com/devops/tag/reporting/).


## Try this next
> [!div class="nextstepaction"]
> [Dataset design for the Power BI Azure DevOps Connector](data-connector-dataset.md)

## Related articles
- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)