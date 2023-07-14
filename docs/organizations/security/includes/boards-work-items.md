---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 02/02/2023
---



::: moniker range=">= azure-devops-2019 < azure-devops"

> [!NOTE]   
> You can change the work item type or move work items to another project within a project collection. These features require that the data warehouse is disabled. With the data warehouse disabled, you can use the [Analytics Service](../../../report/powerbi/what-is-analytics.md) to support your reporting needs. To learn more about disabling the data warehouse, see [Disable the data warehouse and cube](/previous-versions/azure/devops/report/admin/disable-data-warehouse).

::: moniker-end    


:::row:::
   :::column span="2":::
      **Task or permission** 
   :::column-end:::
   :::column span="1":::
     **Readers**
   :::column-end:::
   :::column span="1":::
     **Contributors**
   :::column-end:::
   :::column span="1":::
     **Project admins**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **View work items in this node** 
      (Area Path permission)
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Edit work items in this node** 
      (Area Path permission)
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker range="azure-devops"
:::row:::
   :::column span="2":::
      **Edit work item comments in this node** 
      (Area Path permission)
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker-end 
:::row:::
   :::column span="2":::
      **Create tag definition** 
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="2":::
      **Change work item type**
      (Project-level permission)
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Move work items out of this project**
      (Project-level permission)
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker-end  
:::row:::
   :::column span="2":::
      Email work items
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Apply a work item template
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Delete and restore work items** (Project-level permission) 
      (able to restore from the Recycle bin)
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Permanently delete work items**
      (Project-level permission) 
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::

   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Provide feedback](/azure/devops/project/feedback/give-feedback) (through the Microsoft Feedback client)
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Request feedback](/azure/devops/project/feedback/get-feedback) 
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::


> [!NOTE] 
> Work items are subject to rules applied to them. Conditional rules based on user or group membership are cached for your web browser. If you find yourself restricted to update a work item, you may have encountered one of these rules. If you believe you've encountered an issue that doesn't apply to you, see [Work item form IndexDB caching issues](../../settings/work/troubleshoot-work-item-form-caching-issues.md). To learn more about conditional rules, see [Rules and rule evaluation](../../settings/work/rule-reference.md).   