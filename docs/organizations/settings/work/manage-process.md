---
title: Create and Manage an Inherited Process 
titleSuffix: Azure DevOps Services
description: Create and apply an inherited process to a project, manage the process by adding work item types, states, fields, rules to track your work.
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: 6EB45080-22E2-43AD-92F9-77D03D5C136F  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 08/08/2025
#customer intent: As an Azure DevOps developer, I want to follow tutorials for creating and applying an inherited process to a project, so I can work with custom fields and work item types.
---

<!-- supports the FWLink: https://go.microsoft.com/fwlink/?LinkID=616878 --> 

# Tutorial: Create and manage inherited processes 

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

In Azure DevOps, you have the flexibility to customize your project, Agile tools, and the work tracking system by using inherited processes. The customizations apply to all projects that utilize the same process.

An inherited process serves as the foundation for your work tracking system. When you create a new project, you choose a process to define its building blocks. The building blocks include work item types, states, fields, and rules. By customizing an inherited process, you tailor it to your team's specific needs. For more information about what you can customize, see [About process customization and inherited processes](inheritance-process-model.md).

[!INCLUDE [Choose the process model for your collection < azure-devops](../includes/note-on-prem-link.md)]

[!INCLUDE [Use audit log = azure-devops](../includes/note-audit-log-support-process.md)]

In this tutorial, you:

> [!div class="checklist"]
> * Create an inherited process based on the Agile, Scrum, Basic, or CMMI models
> * Change the process type associated with a project
> * Create a new project from a defined process
> * Copy a process and make customizations
> * Enable and disable processes, and set the default process

## Prerequisites

[!INCLUDE [Prerequisites](../includes/process-prerequisites.md)]

## Create an inherited process 

Create an inherited process that you can customize with the following steps. The default system processes are locked, so you can't customize them.

::: moniker range="azure-devops"

1. Sign in to your organization (`https://dev.azure.com/<Your_Organization>`).

1. Select :::image type="icon" source="../../../media/icons/gear-icon.png"::: **Organization settings**.

   :::image type="content" source="../../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing the Organization settings action highlighted in Azure DevOps.":::

1. Select **Boards** > **Process**. In the **Processes** list, highlight the process to use and select :::image type="icon" source="../../../media/icons/actions-icon.png"::: **More actions** > **Create inherited process**.

   Choose the same system process that was used to create the project that you want to customize. The process types can include [Agile](../../../boards/work-items/guidance/agile-process.md), [Basic](../../../boards/get-started/plan-track-work.md?tabs=basic-process&preserve-view=true), [Scrum](../../../boards/work-items/guidance/scrum-process.md), and [Capability Maturity Model Integration(CMMI)](../../../boards/work-items/guidance/cmmi-process.md).

   The following example creates an inherited process from the Agile system process:

   :::image type="content" source="media/process/create-inherited-process-menu-agile.png" alt-text="Screenshot that shows how to select the Create inherited process option for the Agile process in Azure DevOps.":::

   If you don't have access to these options, ask a member of your **Project Collection Administrators** group to grant you permissions. To find a member, see [Look up a Project Collection Administrator](../../security/look-up-project-collection-administrators.md).

1. Enter a name for your process and an optional description.

   Process names must be unique and no more than 128 characters. For other restrictions, see [Process customization and inherited processes - Process name restrictions](../work/inheritance-process-model.md#process-naming).

   :::image type="content" source="media/process/create-inherited-process-dialog.png" border="false" alt-text="Screenshot showing the Create inherited process dialog.":::

::: moniker-end
::: moniker range=" < azure-devops"

1. Sign in to your collection.

1. Select **Collection settings** or **Admin settings**.

1. Select **Process**.

   :::image type="content" source="media/process/open-process-2020.png" alt-text="Screenshot showing how to select the Process option to see all processes for the collection.":::

   > [!IMPORTANT]  
   > If you don't have the **Create inherited process** menu option, then the collection you selected is set to work with the on-premises XML process model. For more information, see [Customize your work tracking experience - On-premises XML process model](../../../reference/customize-work.md).

   Inherited child processes automatically update, based on their parent system processes. Updates to processes are documented in [Release Notes for Azure DevOps Server](/azure/devops/server/release-notes/azuredevops2020u1).

::: moniker-end

After you define the inherited process, you can complete the following tasks:

- [Customize a project by using an inherited process](customize-process.md)   
- [Create a project](#create-a-project-from-a-process) that uses the inherited process  
- [Update a project to use the inherited process](#migrate)       

<a id="migrate"></a>

## Change a project's process

You can change a project's process from one inherited process to another with the following methods:

- **Switch within the same base process** by moving a project between processes that share the same base, such as Agile or Scrum.
- **Migrate to a different process model** by changing the project's process model, for instance, from Agile to Scrum or Basic to Agile.

The example in this section provides detailed steps for the migrate method, which you can apply to several common process change scenarios:

- [Scrum to Agile](./change-process-scrum-to-agile.md)
- [Agile to Scrum](./change-process-agile-to-scrum.md)
- [Basic to Agile](./change-process-basic-to-agile.md)

> [!NOTE]    
> - You can change the process of a project as long as you don't have any undeleted work items of a custom work item type that isn't also defined in the target process. 
> - If you change a project to a system process or other inherited process that doesn't contain the same custom fields, data is still maintained. However, any custom fields not represented in the current process don't appear on the work item form. You can still access the field data by using a query or the REST APIs. These fields are locked from changes and appear as read-only values.  

The following steps demonstrate how to use the migrate method to change a project's process from Agile to Scrum:

1. Select **Boards** > **Process**. In the **Processes** list, select your project's process to open the process details. This example selects the **Agile** process.

   :::image type="content" source="media/agile-to-scrum/choose-agile.png" alt-text="Screenshot that shows how to open the details for a process by selecting the process name.":::

1. In the process details page, select the **Projects** tab. In the project list, highlight the project to change and select :::image type="icon" source="../../../media/icons/actions-icon.png"::: **More actions** > **Change process**. 

   :::image type="content" source="media/agile-to-scrum/change-process-for-project.png" alt-text="Screenshot that shows how to select the change process action for a project.":::

1. Complete the steps in the wizard. Some project changes, such as migrating from the Agile process to the Scrum process, require manual tasks:

   :::image type="content" source="media/agile-to-scrum/migrate-agile-scrum-extra-tasks.png" alt-text="Screenshot of the wizard dialog that lists other tasks to complete after migrating the project from the Agile to Scrum process.":::

> [!IMPORTANT]  
> When you switch a project to an inherited process, some Agile tools or work items might become invalid. For example:
> - If you designate a field as required, work items that lack the field display an error message. Resolve the identified errors, proceed with further changes, and save the work item.
> - If you add or modify workflow states for a work item type visible on your board, update the board column configurations for all teams within the project. 

## Create a project from a process 

Follow these steps to create a project from a process:

1. Select **Boards** > **Process**. In the **Processes** list, highlight the process to update and select :::image type="icon" source="../../../media/icons/actions-icon.png"::: **More actions** > **New team project**. 

   ::: moniker range="<=azure-devops"

   :::image type="content" source="media/process/new-team-project-from-inherited-process-menu.png" alt-text="Screenshot that shows how to select the new team project option for a selected process.":::

   ::: moniker-end

1. In the **Create new project** dialog, enter your project information, and then select **Create**. For more information, see [Create a project](../../projects/create-project.md).

   ::: moniker range="<=azure-devops"

   :::image type="content" source="media/process/create-test-project-sprint166.png" alt-text="Screenshot of the Create new project dialog.":::
	
   ::: moniker-end

## Copy a process

Before you implement customizations across your organization, it's essential to test your planned changes by completing the following steps.  
 
> [!TIP]
> If you modify a process used by multiple projects, each project immediately reflects the incremental process change. To bundle process changes before rolling them out to all projects, complete the following procedure.

1. Select **Boards** > **Process**. In the **Processes** list, highlight the process to use and select :::image type="icon" source="../../../media/icons/actions-icon.png"::: **More actions** > **Create copy of process**.  

   :::image type="content" source="media/process/copy-process.png" alt-text="Screenshot that shows how to select the copy option for a selected process.":::

1. Enter a name and optional description for the copied process and select **Copy process**.

   :::image type="content" source="media/process/copy-process-dialog.png" alt-text="Screenshot of the Copy process dialog.":::
	
1. Make your changes to the copied process. Because no project is currently using the new (copied) process, your changes don't affect any projects.

1. Verify your changes by creating a test project based on the copied and updated process. If you already created a test project, select **Change project to use _<Process_Name>_**. For more information, see [Change a project's process](#migrate) in this article.

1. Roll out your updates by changing the process of the projects that need the new changes. Use the **Change project to use _<Process_Name>_** option for each project to update. For more information, see [Change a project's process](#migrate).

1. Disable or delete the original process.

## Enable or disable a process

To prevent the creation of projects from a specific process, you can disable the option. You might enable this option when you want to apply several customizations and don't want the process used until the updates are complete. Or, you might retire use of a specific process in favor of moving projects to a new process. 

All system processes and newly created inherited processes are enabled by default. To disable or enable a process, open the :::image type="icon" source="../../../media/icons/actions-icon.png"::: **More actions** menu for the process and select **Disable process** or **Enable process**. 

## Set a process as the default

You can have an inherited process preselected for other projects you plan to create, by setting the process as the default. This action ensures that any new projects automatically use the inherited process you prefer. 

To set a process as the default, open the :::image type="icon" source="../../../media/icons/actions-icon.png"::: **More actions** menu for the inherited process and select **Set as default process**. This option isn't available with any of the system processes. 

**Project Collection Administrators** can [add projects](../../projects/create-project.md) from the **Projects** page. 

## Next step

> [!div class="nextstepaction"]
> [Add and manage fields for an inherited process](customize-process-field.md)
> 
> or
> 
> [Add and manage work item types](customize-process-work-item-type.md)
