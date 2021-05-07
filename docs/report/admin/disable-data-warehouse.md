---
title: Disable the data warehouse and cube
titleSuffix: Azure DevOps Server
description: Disable the data warehouse and cube for Azure DevOps Server
ms.assetid:   
ms.technology: devops-analytics
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: "< azure-devops" 
ms.date: 07/20/2020
---

# Disable the data warehouse and cube

[!INCLUDE [temp](../includes/tfs-report-platform-version.md)]

To disable the data warehouse and cube on your Azure DevOps Server instance, follow the steps provided in this article.

<a id="prerequisites">  </a>

## Prerequisites 

In order to disable the data warehouse and cube, you must have an Azure DevOps Server instance already [set up](/azure/devops/server/install/get-started).

> [!NOTE]  
> Your Azure DevOps Server instance does not need to be provisioned with [SQL Server Reporting Services (SSRS)](/azure/devops/report/sql-reports) to disable the data warehouse and cube.

1. Opeh the **Azure DevOps Server Adminstration Console** on your Azure DevOps Server instance.  

2. Navigate to **Reporting**.  

    ![Server Admin Console](./media/Server-Console.png)

3. Select **Disable Reporting**. You will be prompted with an alert window.

    ![Alert Window](./media/Disable-Dialog.png)

	> [!WARNING]  
	> Once disabled, you can't reenable the data warehouse.  

4. After the warehouse is disabled, the **Azure DevOps Server Adminstration Console** displays a confirmation message.

    ![Confirmation Message](./media/Warehouse-Disabled.png)

## Try this next

For future reporting needs, see [Analytics Service](../powerbi/what-is-analytics.md).


