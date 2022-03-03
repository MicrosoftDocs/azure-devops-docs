---
title: Disable the data warehouse and cube
titleSuffix: Azure DevOps Server
description: Learn how to disable the data warehouse and cube for Azure DevOps Server.
ms.assetid:   
ms.technology: devops-analytics
ms.topic: how-to
ms.author: kaelli
author: KathrynEE
ms.date: 09/23/2021
---

# Disable the data warehouse and cube

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

This article describes how to disable the data warehouse and cube on your Azure DevOps Server instance.

<a id="prerequisites">  </a>

## Prerequisites 

To disable the data warehouse and cube, you must have an Azure DevOps Server instance already [set up](/azure/devops/server/install/get-started).

> [!NOTE]  
> Your Azure DevOps Server instance does not need to be provisioned with [SQL Server Reporting Services (SSRS)](/azure/devops/report/sql-reports) to disable the data warehouse and cube.

## Disable reporting

1. Open the **Azure DevOps Server Administration Console** on your Azure DevOps Server instance.  

2. Navigate to **Reporting**.  

    ![Server Admin Console](./media/Server-Console.png)

3. Select **Disable Reporting**. You'll be prompted with an alert window.

    ![Alert Window](./media/Disable-Dialog.png)

	> [!WARNING]  
	> Once disabled, you can't reenable the data warehouse.  

4. After the warehouse is disabled, the **Azure DevOps Server Administration Console** displays a confirmation message.

    ![Confirmation Message](./media/Warehouse-Disabled.png)

## Next step

For future reporting needs, see [Analytics Service](../powerbi/what-is-analytics.md).


