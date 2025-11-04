---
title: Process customization and inheritance
titleSuffix: Azure DevOps Services
description: Learn about work tracking customizations supported by the inherited process model for Azure DevOps Services.
ms.custom: inherited-process
ms.service: azure-devops-boards
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: overview 
monikerRange: "<=azure-devops"
ms.date: 11/03/2025
---

# Process customization and inheritance

[!INCLUDE [version-gt-eq-2019](../../../includes/version-gt-eq-2019.md)]

To customize the Azure DevOps work tracking system, you can *customize* an inherited process through organization settings. All projects that use an inherited process get the customizations made to that process. You can then configure your project [backlogs, sprints, and boards](../about-teams-and-settings.md) for each project team.

> [!IMPORTANT]  
> This article applies to Azure DevOps Services only. To customize an on-premises project or update XML definition files to support customization, see [On-premises XML process model](../../../reference/on-premises-xml-process-model.md).

You can make several customizations to processes. The most important ones are creating custom work item types (WITs) or modifying existing WITs to add custom fields, modify layouts, or change workflows.

This article provides an overview of tasks you can do to customize an inherited process. Some options of inherited elements are locked and can't be customized.

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

<a id="what-you-can-customize">  </a>
<a id="inherited"></a> 
## System and inherited processes 

There are two types of processes:

- The system processes [Agile, Basic, Scrum, and CMMI](../../../boards/work-items/guidance/choose-process.md) are locked from being changed by users. System processes are owned and updated periodically by Microsoft.
- Inherited processes are customized and inherit definitions from the system processes they're based on. Any updates Microsoft makes to system processes automatically update your inherited processes and their child inherited processes.

All processes can be shared by one or more projects in an organization. You customize the process instead of customizing a single project. Changes you make to the inherited process automatically update all projects in the organization that use that process.

Once you create an inherited process, you can customize it, copy it, create projects based on it, and change existing projects to use it.

For example, the following image shows a list of  projects defined for the *fabrikam* organization. The second column shows the process used by each project. To change the customizations of the *Fabrikam Fiber* project, you need to modify the *MyScrum* process, which inherits from the *Scrum* system process.

Any changes you make to the *MyScrum* process also update other projects that use that process. You can't customize the *Query test* project unless you change it to a process which inherits from *Agile*.

![Screenshot of Admin context, Organization settings, Project list and the process they use.](media/process/projects-list.png)

### Change the process of an existing project 

You can switch the process a project uses from one system process to another. For more information and instructions, see the following articles:

- [Change a project from Basic to Agile](change-process-basic-to-agile.md)
- [Change a project from Scrum to Agile](change-process-scrum-to-agile.md)
- [Change a project from Agile to Scrum](change-process-agile-to-scrum.md)

By following the general guidance in the listed articles, you can make other changes such as from CMMI to Agile or Agile to CMMI. Before you change a project process, familiarize yourself with the process you're changing to. For more information, see [About processes and process templates](../../../boards/work-items/guidance/choose-process.md).

[!INCLUDE [temp](../includes/fields-become-invalid-after-customization.md)] 

### Change an inherited process

Making changes to an inherited process is straightforward, but it's best to test the changes before applying them to an active project. You can [copy a process](./manage-process.md#copy-a-process) and make your changes to the copied process first to avoid affecting existing projects and help you surface any negative effects of the process changes.

<a id="process-naming"></a>
### Rename an inherited process

To rename an inherited process, select the **More actions** icon next to the process name in **Organization Settings** > **Boards** > **Processes** > **All processes**. Select **Edit** on the context menu and then enter a new process name.

Process names must be unique in the organization, 128 Unicode characters or less, and can't contain the following characters: `.` `,` `;` `'` `:` `~` `\` `/` `*` `|` `?` `"` `&` `%` `$` `!` `+` `=` `(` `)` `[` `]` `{` `}` `<` `>`.

## Inherited objects and custom objects 

Each inherited process you create inherits the WITs defined in the underlying Basic, Agile, Scrum, or CMMI system process. For example, the Agile process provides *Bug*, *Task*, *User story*, *Feature*, *Epic*, *Issue*, and test-related WITs.

#### [Agile process](#tab/agile-process) 

![Conceptual image of Agile process work item hierarchy.](../../../boards/work-items/guidance/media/ALM_PT_Agile_WIT_Artifacts.png)

#### [Basic process](#tab/basic-process) 

![Conceptual image of Basic process work item hierarchy.](../../../boards/get-started/media/track-issues/basic-process-epics-issues-tasks.png)

#### [Scrum process](#tab/scrum-process) 

![Conceptual image of Scrum process work item hierarchy.](../../../boards/work-items/guidance/media/ALM_PT_Scrum_WIT_Artifacts.png)

#### [CMMI process](#tab/cmmi-process) 

![Conceptual image of CMMI process work item hierarchy.](../../../boards/work-items/guidance/media/ALM_PT_CMMI_WIT_Artifacts.png)

---

You can add fields and modify the workflow and work item form for all WITs that display on the **Work Item Types** page of an inherited process. You can also add custom WITs.

If you don't want users to create new work items based on an inherited process WIT, you can disable it by selecting the **More actions** icon next to the WIT name in **Organization Settings** and selecting **Disable** from the context menu.

## Work item fields

This section describes WIT fields.

[!INCLUDE [temp](../includes/field-reference.md)] 

<a id="delete-restore"></a>
### Delete or restore deleted fields

You can delete a field and later restore it. Deleting a field deletes all data associated with that field, including historical values. Once deleted, you can only restore the field and recover the data using the [Fields - Update REST API](/rest/api/azure/devops/wit/fields/update).

Instead of deleting a field, you can hide or remove the field from a work item form. For details, see [Show, hide, or remove a field](customize-process-field.md#show-hide-remove-field).

<a id="field-customizations"></a>
## Field customizations 

Fields are defined for all projects and processes in an organization. Fields defined in system processes appear with an inherited icon, indicating that you can make limited modifications to them in your inherited processes.

You can add any custom field you define for a WIT in one process to any WIT defined for another process. You can also [add an existing field](customize-process-field.md#add-existing-field) to another WIT within the same process. For example, you can add **Due Date** to the User story or Bug WITs.

When adding custom fields, note that a maximum of 64 fields can be defined for each WIT and a maximum of 512 fields can be defined per process.

### Customize fields and controls

The following resources describe how to implement various customizations for inherited field, custom fields, or custom controls.

**Inherited fields**
- [Change the field label](customize-process-field.md#rename-field)  
- [Show/hide field on form](customize-process-field.md#show-hide-field)  
- [Modify picklist (drop-down menu)](customize-process-field.md#pick-list)  
- [Modify Description help text](customize-process-field.md#modify-description)  

**Custom fields**
- [Add a custom field](customize-process-field.md#add-field)  
- [Add picklist (drop-down menu)](customize-process-field.md#pick-list)  
- [Add identity](customize-process-field.md#identity)  
- [Add a rich-text (HTML) field](customize-process-field.md#html)  
- [Add a checkbox (Boolean) field](customize-process-field.md#boolean-field)  
- [Add custom rules to a field](custom-rules.md)  
- [Change the field label](customize-process-field.md#rename-field)  
- [Set required/default options](customize-process-field.md#options)  
- [Move the field within the layout](customize-process-form.md#move-field)  
- [Modify Description help text](customize-process-field.md#modify-description)  
- [Show/Hide field on form](customize-process-field.md#show-hide-field)
- [Remove field from form](customize-process-field.md#remove-field)  
- [Delete field](customize-process-field.md#delete-field)  

**Custom control**
- [Add a custom control](custom-controls-process.md)  
- [Add a field-level contribution or custom control](custom-controls-process.md#add-field-control)  
- [Add a group-level or page-level contribution](custom-controls-process.md#group-level)  
- [Move the control within the layout](customize-process-form.md#move-field)  
- [Show/hide control on form](customize-process-field.md#show-hide-field)  

<a id="rename-field"></a>
### Limitations

- You can't change a field name or data type once you've defined it. However, you can change the label that appears for a field on the work item form from the **Layout** tab. When you select the field in a query you must use the field name and not the field label.
- You can't modify the gray area on the form that contains the **State**, **Reason**, **Area path**, and **Iteration path** fields.
- The [Area paths](../../../organizations/settings/set-area-paths.md) and [Iteration paths](../../../organizations/settings/set-iteration-paths-sprints.md) picklists are configured for each project and aren't customizable through an inherited process.
- Picklists associated with user identity fields, such as **Assigned To** and **Changed By**, are populated based on the [users added to the project or team](../../security/add-users-team-project.md).
- You can't import or define a global list as supported by the Hosted XML and On-premises XML process models. For more information, see [Define global lists](/previous-versions/azure/devops/reference/xml/define-global-lists).

<a id="system-rules"></a>
## Custom rules and system rules

Each WIT has several system rules defined, like requiring the **Title** field or setting a default for the **Value Area** field. System rules also define actions to take when a workflow state changes.

For example, several rules copy the current user identity to the **Changed By** field when a work item is modified or to the **Closed By** field when the workflow state changes to **Closed** or **Done**. Predefined system rules take precedence over any custom rules that would overwrite them.

Custom rules provide support for several business use cases, letting you go beyond setting a default value for a field or make it required. Custom rules allow you to clear the value of a field, copy a value into a field, or apply values based on dependencies between different field values.

With custom rules, you can define various actions based on specific conditions. For example, you can apply rules to support the following scenarios:

- When a value is defined for **Priority**, make **Risk** a required field.
- When a change is made to the value of **Release**, clear the value of **Milestone**.
- When a change is made to the value of **Remaining Work**, make **Completed Work** a required field.
- When the value of **Approved** is **True**, make **Approved By** a required field.
- When a User story is created, make the **Priority**, **Risk**, and **Effort** fields required.

For more information about defining custom rules, see [Rules and rule evaluation](../../../organizations/settings/work/custom-rules.md). 

[!INCLUDE [temp](../includes/tip-formula-rule.md)]

### Restrict modification of select fields for select user groups

By using the conditions `current user is a member of a group...` or `current user is not a member of a group...`, you can make selected fields required for users who are members or nonmembers of a security group. For example, you can make the **Title** or the **State** field read-only for selected users or groups.

### Restrict modification of work items based on Area Path 

You can disallow users from modifying selected work items by setting permissions on an Area path. This setting is not a rule setting, but a permission setting. For more information, see [Create child nodes, modify work items under an area path](../../security/set-permissions-access-work-tracking.md#set-permissions-area-path).

## Work item type customizations

The following resources describe customization options for inherited and custom WITs.

**Inherited work item types** 
- [Add custom rules to a WIT](custom-rules.md)  
- [Add/remove custom fields](customize-process-field.md)  
- [Add/remove custom groups](customize-process-form.md#groups)  
- [Add/remove custom pages](customize-process-form.md#pages) 
- [Add/remove a custom control](custom-controls-process.md)  
- [Enable/disable](customize-process-work-item-type.md#enable-disable)  

**Custom work item types**
- [Add custom WIT](customize-process-work-item-type.md#add-wit)  
- [Change color or description](customize-process-work-item-type.md#overview)  
- [Add/remove custom fields](customize-process-field.md)  
- [Add/remove custom groups](customize-process-form.md#groups)  
- [Add/remove custom pages](customize-process-form.md#pages)  
- [Add/remove a custom control](custom-controls-process.md)  
- [Add custom rules to a wit](custom-rules.md)  
- [Add, edit, or remove a workflow state](customize-process-workflow.md#states)  
- [Enable/disable](customize-process-work-item-type.md#enable-disable)  
- [Delete](customize-process-work-item-type.md#destroy)  

### Limitations

- You can't add or remove an inherited WIT to or from a backlog.
- You can't change the position of an inherited field within the form layout. However, you can hide the field in one area of the form and add it elsewhere in the form.
- You can't remove the inherited portfolio level from the product, but you can rename it.
- You can't change the name of a custom WIT.

### Work item form customizations 

You can make the following customizations to a WIT form: 

**Inherited groups** 
- [Relabel](customize-process-form.md#groups)   
- [Add/remove custom fields](customize-process-field.md)  
- [Show/hide fields](customize-process-field.md#remove-field)  

**Custom groups**
- [Add, modify, re-sequence, delete](customize-process-form.md#groups)  
- [Add/remove custom fields](customize-process-field.md)  
- [Add/Hide a group extension](custom-controls-process.md) 

**Inherited pages** 
- [Relabel](customize-process-form.md#pages) 
- [Add/remove custom fields](customize-process-field.md) 
- [Add/remove a custom group](customize-process-form.md#groups)   

**Custom pages**
- [Add, modify, re-sequence, delete](customize-process-form.md#pages) 
- [Add/delete custom fields](customize-process-field.md) 
- [Add/hide a page extension](custom-controls-process.md) 

<a id="resizing">  </a>  
### Layout and resizing

The web form layout is organized into three columns, as shown in the following image. 

![Illustration of 3-column page layout for work item form.](media/process/cpform-3-column-layout.png)

If you only add groups and fields to the first two columns, the layout shows two columns. If you only add groups and fields to the first column, the layout shows one column.

The web form resizes depending on the width available and the number of columns in the layout. At maximum width, in most web browsers, each column within a page displays in its own column. When the display width won't accommodate all columns, columns appear stacked within the column to the left.

As the display width decreases, the columns resize proportionally as follows: 

- For three columns: 50%, 25%, and 25%  
- For two columns: 66% and 33%  
- For one column: 100%  

## Workflow customizations

[!INCLUDE [temp](../includes/process-customize-workflow.md)]

## Backlog and board customizations 

[!INCLUDE [temp](../includes/process-customize-backlogs.md)]

Changing the default WIT for a backlog level causes the WIT to appear by default in the quick add panel. For example, **Customer Ticket** appears by default in the following quick add panel for the product backlog.

![Screenshot of Product backlog, Quick Add Panel, Displays Default WIT for a backlog level](media/process/process-backlog-boards-quick-add-panel.png)

## Object limits

For a list of limits placed on the number of fields, WITs, backlog levels, and other objects you can customize, see [Work tracking object limits](object-limits.md). 

## Related content

- [Use backlogs to manage projects](../backlogs/backlogs-overview.md)
- [Configure and customize Azure Boards](../configure-customize.md)
- [Create a project using the process of your choice](../../organizations/projects/create-project.md)
- [Customize your work tracking experience](../../reference/customize-work.md)
- [Create and manage inherited processes](../../organizations/settings/work/manage-process.md)