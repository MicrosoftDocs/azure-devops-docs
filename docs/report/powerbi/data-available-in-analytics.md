---
title: Data available from Analytics
titleSuffix: Azure DevOps
description: Review the data available for reporting purposes using Analytics for Azure DevOps.
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 08/12/2022
---

# Data available from Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Analytics provides the reporting platform for Azure DevOps. Analytics is generally available for Azure DevOps Services and Azure DevOps Server 2020 and later versions. It is in preview for Azure DevOps Server 2019. 


::: moniker range=">= azure-devops-2019 < azure-devops-2022"

> [!NOTE]   
> For Azure DevOps Server, you can use Analytics in place of SQL Server Reporting Services or along side it. However, if you plan to use the Inheritance process model to customize work tracking, you can only use Analytics for reporting, the project collection must not be configured to support reporting. To learn more about the Inheritance process model, see [About process customization and inherited processes](../../organizations/settings/work/inheritance-process-model.md). 

::: moniker-end

Currently, you can access the following data from Analytics. This information was last updated on July 20, 2020.  


|**Service**|**Azure DevOps Services**<br/>**Azure DevOps Server 2020**<br/>**Azure DevOps Server 2022**  |**Azure DevOps Server 2019**| |**Future availability**|
|------------------|----------------|---------------------------|----------------|  
|[Boards](https://azure.microsoft.com/services/devops/boards/) | [In-context reports](../dashboards/overview.md#in-context-reports-work-tracking)<br/>[Widgets](../dashboards/analytics-widgets.md)<br/>[OData](../extend-analytics/quick-ref.md)<br/>[Power BI](overview.md) | [Widgets](../dashboards/analytics-widgets.md)<br/>[OData](../extend-analytics/quick-ref.md)<br/>[Power BI](overview.md) |  | 
|[Pipelines](https://azure.microsoft.com/services/devops/pipelines/) | [Test Analytics](../../pipelines/test/test-analytics.md)<br/>[Pipeline Analytics](../../pipelines/reports/pipelinereport.md)<br/>[OData](../extend-analytics/quick-ref.md) | [Test Analytics](../../pipelines/test/test-analytics.md) |  | 
|[Test Plans](https://azure.microsoft.com/services/devops/test-plans/) | [Progress Report](../../test/progress-report.md) | None |  |  
|[Repos](https://azure.microsoft.com/services/devops/repos/) | None | None |  Under investigation |  
|[Artifacts](https://azure.microsoft.com/services/devops/artifacts/) | None | None | Under investigation |  
 

> [!NOTE]   
> Analytics doesn't support reporting on plain text and HTML fields.  

## Next step

> [!div class="nextstepaction"]
> [Dataset design for the Power BI Azure DevOps Connector](data-connector-dataset.md)

## Related articles

- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)