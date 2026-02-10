---
title: witAdmin Customize and manage objects for tracking work 
titleSuffix: Azure DevOps  
description: Learn how to use the witadmin command-line tool to customize work tracking objects like work item types, fields, categories, and link types.
ms.service: azure-devops-boards
ms.custom: witadmin, engagement-fy23
ms.assetid: 7853f6db-98c9-4012-b6a5-51618c41d58c
ai-usage: ai-assisted
ms.topic: reference
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/10/2026
---

# witAdmin: Customize and manage objects for tracking work 

[!INCLUDE [version-lt-eq-azure-devops-plus-witadmin](../../includes/version-lt-eq-azure-devops-plus-witadmin.md)]

The **witadmin** command-line tool lets you customize work tracking by creating, deleting, importing, and exporting objects such as work item types, categories, global lists, global workflow, and link types. You can also manage work item field attributes.

::: moniker range="< azure-devops"
For on-premises Azure DevOps Server, you can also manage the resolution types, bug type, and failure types used with test case management by using the [**tcm fieldmapping**](#tcm) command.  
::: moniker-end

The following diagram shows the scope of work tracking objects. Categories and work item types are managed at the project level. Global lists, link types, and work item fields are managed at the project collection level. Global workflow can be customized for either a project or collection.
  
![Conceptual image of Work Item Tracking Objects.](media/pnt_wit_objects.png)

To run most witadmin commands, you must be a member of the **Project Administrators** or **Project Collection Administrators** group. For more information, see [Change project collection-level permissions](../../organizations/security/change-organization-collection-level-permissions.md). 

[!INCLUDE [temp](../../includes/witadmin-run-tool.md)]  

<a name="global"></a> 

### Global parameters

The following parameters display help text for witadmin commands.

| Parameter | Description |
|-----------|-------------|
| `/?` or `help` | Displays syntax and parameters for the witadmin command-line tool. |
| `command /help` or `command /?` | Displays syntax and parameters for the specified witadmin command. |  

<a name="index"></a>
 
### XML definition files

Work tracking objects are customized by updating their XML definitions. Objects include work item types, process configuration, global lists, and link types. For an overview of customization options, see [Customize your work tracking experience](../customize-work.md).

You can run witadmin commands against Azure DevOps Services or Azure DevOps Server. However, Azure DevOps Services only supports commands that list or export definitions. Import and modify operations are available only for Azure DevOps Server. 

## [Work item types](witadmin-import-export-manage-wits.md)

Work item types define the fields and workflow for tracking work. The available types depend on your project's process (Agile, Scrum, Basic, or CMMI). For more information, see [About work items](../../boards/work-items/about-work-items.md).

For the Inherited process model, manage work item types from the web portal. For more information, see [Add and manage work item types](../../organizations/settings/work/customize-process-work-item-type.md).

---
:::row:::
   :::column span="2":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   `destroywitd`: Delete a work item type   
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   `exportwitd`: Export a work item type file  
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
   `importwitd`: Import a work item type file  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   `listwitd`:  List work item types    
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
   `renamewitd`: Change the display name for a work item type  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
 

## [Fields](manage-work-item-fields.md)

Fields store status and information in work items. You define fields at the organization or collection level. For more information, see [Work item fields and attributes](../../boards/work-items/work-item-fields.md) and [Work item field index](../../boards/work-items/guidance/work-item-field.md).

For the Inherited process model, manage fields from the web portal. For more information, see [Add and manage fields](../../organizations/settings/work/customize-process-field.md).

---
:::row:::
   :::column span="2":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   `deletefield`: Delete a field  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   `listfields`: List field attributes  
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
   `changefield`: Change a field attribute 
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   `renamewitd`: Change a WIT display name   
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
 

## [Categories](/previous-versions/azure/devops/reference/witadmin/witadmin-import-export-categories)

Categories group one or more work item types together. Azure Boards uses category definitions to determine which work item types appear on backlogs and boards. For more information, see [Use categories to group work item types](../xml/use-categories-to-group-work-item-types.md).  
 
 
---
:::row:::
   :::column span="2":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   `exportcategories`:  Export the Categories file   
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
   `importcategories`:  Import the Categories file   
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---

## [Link types](/previous-versions/azure/devops/reference/witadmin/manage-link-types)

Link types define the relationships between work items, such as parent-child or related. You can define custom link types for on-premises XML and Hosted XML process models. For more information, see [Link work items](../../boards/backlogs/add-link.md) and [Link type reference](../../boards/queries/link-type-reference.md).  

---
:::row:::
   :::column span="2":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   `deletelinktype`:  Delete a link type  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
   `exportlinktype`:  Export a link type file 
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
   `importlinktype`:  Import a link type file 
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="2":::  
   `listlinktypes`:  List the defined link types
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
   `reactivatelinktype`: Reactivate or rename a link type  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
 

## [Global lists](/previous-versions/azure/devops/reference/witadmin/manage-global-lists-for-work-item-types)

Global lists are reusable pick lists that you can reference in multiple fields and work item type definitions across a project collection. Define global lists using the **GLOBALLIST** XML element. For more information, see [GLOBALLIST XML element reference](../xml/define-global-lists.md).  

---
:::row:::
   :::column span="2":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   `destroygloballist`: Delete a global list 
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::  
   `exportgloballist`: Export the global list  
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
   `importgloballist`: Import the global list  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::   
   `listgloballist`: List all global list names 
   :::column-end:::
   :::column span="1":::
       ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
  

::: moniker range="< azure-devops"

## [Global workflow](/previous-versions/azure/devops/reference/witadmin/witadmin-import-export-global-workflow)

Global workflow defines fields and global lists that apply to all work item types in a project or collection. For more information, see [Global workflow XML element reference](../xml/global-workflow-xml-element-reference.md).  

---
:::row:::
   :::column span="2":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   `exportglobalworkflow`: Export the global workflow file
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::  
   `importglobalworkflow`: Import the global workflow file  
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end

## [Process configuration](witadmin-import-export-process-configuration.md)

Process configuration defines which work item types appear on backlogs, boards, sprint backlogs, and Taskboards. It also controls default columns and other team capabilities. For more information, see [ProcessConfiguration XML element reference](../xml/process-configuration-xml-element.md).

For the Inherited process model, customize backlogs from the web portal. For more information, see [Customize backlogs and boards](../../organizations/settings/work/customize-process-backlogs-boards.md).
 
---
:::row:::
   :::column span="2":::
      **Command** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Services** 
   :::column-end:::
   :::column span="1":::
      **Azure DevOps Server**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
   `exportprocessconfig`: Export the ProcessConfiguration file   
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
   `importprocessconfig`: Import the ProcessConfiguration file  
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---

::: moniker range="< azure-devops"

## [Client cache](/previous-versions/azure/devops/reference/witadmin/rebuild-client-cache)

After server maintenance operations like moving, restoring, renaming, or failing over servers, you must refresh the client cache. This command is only available for Azure DevOps Server.

- `rebuildcache`: Rebuilds the client cache for work item tracking  
::: moniker-end

<a id="tcm"></a> 

::: moniker range="< azure-devops"

## [Test case management field mapping](/previous-versions/azure/devops/reference/witadmin/tcm-customize-manage-test-experience)

Customize the resolution types, bug work item type, and failure types used with Azure Test Plans. This command is only available for Azure DevOps Server.

- `tcm fieldmapping`: Imports or exports the file that defines resolution types, bug type, or failure types for test case management     

::: moniker-end

## Related articles

::: moniker range="azure-devops"

- [Customize your work tracking experience](../customize-work.md)
- [About process customization and inherited processes](../../organizations/settings/work/inheritance-process-model.md)
- [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md)

::: moniker-end

::: moniker range="<azure-devops"

- [Customize your work tracking experience](../customize-work.md)
- [On-premises XML process model](../on-premises-xml-process-model.md)
- [Process template and plug-in files](../process-templates/overview-process-template-files.md)

::: moniker-end

