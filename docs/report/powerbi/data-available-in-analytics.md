---
title: Data available from Analytics
titleSuffix: Azure DevOps
description: Data available for reporting purposes using Analytics for Azure DevOps 
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: greggboe   
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 10/24/2019
---

# Data available from Analytics

[!INCLUDE [temp](../includes/version-azure-devops.md)]

Analytics provides the reporting platform for Azure DevOps. Analytics is generally available for Azure DevOps Service and in preview for Azure DevOps Server 2019. 


::: moniker range="azure-devops-2019"

> [!NOTE]   
> For Azure DevOps Server 2019, you can use Analytics in place of SQL Server Reporting Services or along side it. However, if you plan to use the Inheritance process model to customize work tracking, you can only use Analytics for reporting, the project collection must not be configured to support reporting. To learn more about the Inheritance process model, see [About process customization and inherited processes](/azure/devops/organizations/settings/work/inheritance-process-model). 

::: moniker-end

Currently, you can access the following data from Analytics. This information was last updated on August 6, 2019 

<table>
<tr valign="bottom">
<th width="15%">Data</th>
<th width="30%">Available on Azure DevOps Services</th>
<th width="30%">Available on Azure DevOps Server 2019</th>
<th width="25%">Future availability</th>
</tr>
<tbody valign="top">
<tr>
<td><a href="https://azure.microsoft.com/services/devops/boards/">Boards</a></td>
<td><a href="../dashboards/overview.md#in-context-reports-work-tracking">In-context reports</a>, <a href="../dashboards/analytics-widgets.md">Widgets</a>, <a href="../extend-analytics/quick-ref.md" >OData</a>, <a href="overview.md" >Power BI</a></td>
<td><a href="../dashboards/analytics-widgets.md" data-raw-source="[Widgets](../dashboards/analytics-widgets.md)">Widgets</a>, <a href="../extend-analytics/quick-ref.md" >OData</a>, <a href="overview.md" >Power BI</a></td>
<td></td>
</tr>
<tr>
<td><a href="../../pipelines/index.yml">Build</a></td>
<td><a href="../../pipelines/test/test-analytics.md" >Test Analytics, <a href="../../pipelines/reports/pipelinereport.md">Pipeline Analytics, <a href="https://docs.microsoft.com/azure/devops/report/extend-analytics/quick-ref">OData Preview</a></a></td>
<td><a href="../../pipelines/test/test-analytics.md">Test Analytics</td>
<td></td>
</tr>
<tr>
<td><a href="https://azure.microsoft.com/services/devops/pipelines/" data-raw-source="[Pipelines](https://azure.microsoft.com/services/devops/pipelines/)">Release</a></td>
<td><a href="../../pipelines/test/test-analytics.md">Test Analytics</td>
<td><a href="../../pipelines/test/test-analytics.md">Test Analytics</td>
<td>Pipeline Analytics - Q4, 2019</td>
</tr>
<tr>
<td><a href="https://azure.microsoft.com/services/devops/test-plans/">Test Plans</a></td>
<td><a href="../../test/track-test-status.md">Progress Report</a></td>
<td>None</td>
<td></td>
</tr>
<tr>
<td><a href="https://azure.microsoft.com/services/devops/repos/">Repos</a></td>
<td>None</td>
<td>None</td>
<td>Under investigation</td>
</tr>
<tr>
<td><a href="https://azure.microsoft.com/services/devops/artifacts/">Artifacts</a></td>
<td>None</td>
<td>None</td>
<td>Under investigation</td>
</tr>
</tbody>
</table>

> [!NOTE]   
> Analytics doesn't support reporting on plain text and HTML fields at this time. 

As more data types come online, we will update this page. Look for announcements on the [Microsoft DevOps Blog](https://devblogs.microsoft.com/devops/tag/reporting/).


## Try this next

> [!div class="nextstepaction"]
> [Dataset design for the Power BI Azure DevOps Connector](data-connector-dataset.md)

## Related articles

- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
