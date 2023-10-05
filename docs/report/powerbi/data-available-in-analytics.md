---
title: Data available from Analytics
titleSuffix: Azure DevOps
description: Review the data available for reporting purposes using Analytics for Azure DevOps.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 08/12/2022
---

# Data available from Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

The data available to you from Analytics depends on the Azure DevOps platform and version you're using and the Analytics version you query.

::: moniker range=">= azure-devops-2019 < azure-devops-2022"

> [!NOTE]   
> For Azure DevOps Server, you can use Analytics in place of SQL Server Reporting Services or along side it. However, if you plan to use the Inheritance process model to customize work tracking, you can only use Analytics for reporting, the project collection must not be configured to support reporting. To learn more about the Inheritance process model, see [About process customization and inherited processes](../../organizations/settings/work/inheritance-process-model.md). 

::: moniker-end

## Data available by platform version
 
Refer to the following table to determine the data you have access to. To determine the platform  and version you're using, see [Get support and provide feedback, What platform am I using?](../../user-guide/provide-feedback.md#what-platformversion-am-i-using) 

> [!NOTE]   
> The following table was last updated on August 2022.  


|**Service**|**Azure DevOps Services**<br/>**Azure DevOps Server 2020**<br/>**Azure DevOps Server 2022**  |**Azure DevOps Server 2019**|**Future availability**|
|------------------|----------------|---------------------------|----------------|  
|[Boards](https://azure.microsoft.com/services/devops/boards/) | [In-context reports](../dashboards/overview.md#in-context-reports-work-tracking)<br/>[Widgets](../dashboards/analytics-widgets.md)<br/>[OData](../extend-analytics/quick-ref.md)<br/>[Power BI](overview.md) | [Widgets](../dashboards/analytics-widgets.md)<br/>[OData](../extend-analytics/quick-ref.md)<br/>[Power BI](overview.md) |  | 
|[Pipelines](https://azure.microsoft.com/services/devops/pipelines/) | [Test Analytics](../../pipelines/test/test-analytics.md)<br/>[Pipeline Analytics](../../pipelines/reports/pipelinereport.md)<br/>[OData](../extend-analytics/quick-ref.md) | [Test Analytics](../../pipelines/test/test-analytics.md) |  | 
|[Test Plans](https://azure.microsoft.com/services/devops/test-plans/) | [Progress Report](../../test/progress-report.md) | None |  |  
|[Repos](https://azure.microsoft.com/services/devops/repos/) | None | None |  Under investigation |  
|[Artifacts](https://azure.microsoft.com/services/devops/artifacts/) | None | None | Under investigation |  
 

## Analytics version 

When you query Analytics, you always specify an Analytics version. The latest versions provide access to all supported EntityTypes and EntitySets. For details on the supported EntityTypes and EntitySets, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md). 

| Analytics version | Supported Azure DevOps services | 
|------------------|----------------|
| **v4.0-preview** | v3.0-preview plus snapshots related to pipeline jobs, task agent pool size, and task agent requests | 
| **v3.0-preview**	| Azure Boards, Test Plans, and Azure Pipelines | 
| **v2.0**      | Azure Boards only including Process data | 
| **v1.0**      | Azure Boards only excluding Process data | 

 
## Next step

> [!div class="nextstepaction"]
> [Construct OData queries for Analytics](../analytics/analytics-query-parts.md)

## Related articles

- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)