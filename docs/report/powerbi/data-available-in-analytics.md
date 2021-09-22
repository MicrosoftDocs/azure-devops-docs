---
title: Data available from Analytics
titleSuffix: Azure DevOps
description: Data available for reporting purposes using Analytics for Azure DevOps 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 09/21/2021
---

# Data available from Analytics

[!INCLUDE [temp](../includes/version-azure-devops.md)]

Analytics provides the reporting platform for Azure DevOps. Analytics is generally available for Azure DevOps Service and Azure DevOps Server 2020. It is in preview for Azure DevOps Server 2019. 


::: moniker range=">= azure-devops-2019 < azure-devops"

> [!NOTE]   
> For Azure DevOps Server, you can use Analytics in place of SQL Server Reporting Services or along side it. However, if you plan to use the Inheritance process model to customize work tracking, you can only use Analytics for reporting, the project collection must not be configured to support reporting. To learn more about the Inheritance process model, see [About process customization and inherited processes](../../organizations/settings/work/inheritance-process-model.md). 

::: moniker-end

Currently, you can access the following data from Analytics. This information was last updated on July 20, 2020.  


---
:::row:::
   :::column span="":::
      **Service**
   :::column-end:::
   :::column span="":::
      **Azure DevOps Services**  
      **Azure DevOps Server 2020**  
   :::column-end:::
   :::column span="":::
      **Azure DevOps Server 2019**  
   :::column-end:::
   :::column span="":::
      **Future availability**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Boards](https://azure.microsoft.com/services/devops/boards/)
   :::column-end:::
   :::column span="":::
      - [In-context reports](../dashboards/overview.md#in-context-reports-work-tracking)
      - [Widgets](../dashboards/analytics-widgets.md)
      - [OData](../extend-analytics/quick-ref.md)
      - [Power BI](overview.md)
   :::column-end:::
   :::column span="":::
      - [Widgets](../dashboards/analytics-widgets.md)
      - [OData](../extend-analytics/quick-ref.md)
      - [Power BI](overview.md)
   :::column-end:::
   :::column span="":::
         
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Pipelines](https://azure.microsoft.com/services/devops/pipelines/)
   :::column-end:::
   :::column span="":::
      - [Test Analytics](../../pipelines/test/test-analytics.md)
      - [Pipeline Analytics](../../pipelines/reports/pipelinereport.md)
      - [OData Preview](../extend-analytics/quick-ref.md)
   :::column-end:::
   :::column span="":::
      - [Test Analytics](../../pipelines/test/test-analytics.md)
   :::column-end:::
   :::column span="":::
         
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Test Plans](https://azure.microsoft.com/services/devops/test-plans/)
   :::column-end:::
   :::column span="":::
      - [Progress Report](../../test/progress-report.md)
   :::column-end:::
   :::column span="":::
      None
   :::column-end:::
   :::column span="":::
         
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Repos](https://azure.microsoft.com/services/devops/repos/)
   :::column-end:::
   :::column span="":::
      None
   :::column-end:::
   :::column span="":::
      None
   :::column-end:::
   :::column span="":::
      Under investigation
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Artifacts](https://azure.microsoft.com/services/devops/artifacts/)
   :::column-end:::
   :::column span="":::
      None
   :::column-end:::
   :::column span="":::
      None
   :::column-end:::
   :::column span="":::
      Under investigation
   :::column-end:::
:::row-end:::
---
 

> [!NOTE]   
> Analytics doesn't support reporting on plain text and HTML fields.  

## Try this next

> [!div class="nextstepaction"]
> [Dataset design for the Power BI Azure DevOps Connector](data-connector-dataset.md)

## Related articles

- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)