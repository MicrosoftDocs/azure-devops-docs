---
title: Quick reference for concepts related to work item tasks
titleSuffix: Azure Boards
description: Learn about query operators, macros, and sample queries used to list work items for Azure Boards and Azure DevOps.
ms.custom: work-items, engagement-fy23
ms.service: azure-devops-boards
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 09/05/2025
---

# Key concepts and work item tasks

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use this index to quickly access concepts and tasks related to work items and information on adding and updating work items&mdash;such as user stories, features, tasks, and bugs.

::: moniker range="azure-devops"

> [!NOTE]   
> The following features require the **New Boards Hub** feature, which is enabled by default. For more information, see [Manage or enable features](../../project/navigation/preview-features.md):
> - [Change the link type of an existing link](quick-ref.md#common-work-item-tasks)
> - [Filter the history tab](../queries/history-and-auditing.md#filter-history) 
> - [Reassign a checklist item](../boards/add-task-checklists.md#checklist-actions) 
> - [Move a card to a specific column position](../boards/customize-cards.md#reorder-cards)
> - [Change the color of a swimlane on a board](../boards/expedite-work.md#add-or-remove-a-swimlane)
::: moniker-end

<a id="concepts"></a>

## Key concepts

---
:::row:::
   :::column span="1":::
      **Core concepts**
      - [Agile glossary](agile-glossary.md)  
      - [Work item types](about-work-items.md)
      - [Work item form](about-work-items.md)  
      - [Work item templates](about-work-items.md#templates)
      - [Workflow and state categories](workflow-and-state-categories.md)
      - [Assigned to](about-work-items.md#assign)  
      - [Tags](../queries/add-tags-to-work-items.md)  
      - [Following](follow-work-items.md)  
      
      **Process frameworks**
      - [Basic process](../get-started/plan-track-work.md)  
      - [Agile process](guidance/agile-process.md)  
      - [Scrum process](guidance/scrum-process.md)  
      - [CMMI process](guidance/cmmi-process.md)  
      - [Process guidance](guidance/choose-process.md)  
   :::column-end:::
   :::column span="1":::
      **Project structure**
      - [Area Paths](../../organizations/settings/about-areas-iterations.md)  
      - [Iteration Paths](../../organizations/settings/about-areas-iterations.md)  
      - [Teams and Agile tools](../../organizations/settings/about-teams-and-settings.md)
      
      **Linking and relationships**
      - [Link types](../queries/link-type-reference.md)  
      - [Link work items to other objects](../backlogs/add-link.md)  
      - [Dependencies](../best-practices-agile-project-management.md#manage-dependencies)  
      - [Track dependencies](../plans/track-dependencies.md)
      ::: moniker range="azure-devops"
      - [Remote linking](../backlogs/add-link.md)
      ::: moniker-end
      
      **Boards and backlogs**
      - [Delivery plans](../backlogs/backlogs-boards-plans.md)  
      - [Filtering](../backlogs/filter-backlogs-boards-plans.md)  
      ::: moniker range="<=azure-devops"
      - [Rollup](../backlogs/display-rollup.md)  
      ::: moniker-end
   :::column-end:::
   :::column span="1":::
      **Queries and reporting**
      ::: moniker range="<=azure-devops"
      - [Queries](../queries/about-managed-queries.md)  
      ::: moniker-end
      - [Charts](../../report/dashboards/charts.md)  
      - [Chart for work items widget](../../report/dashboards/widget-catalog.md#chart-wit-widget)  
      - [New work item widget](../../report/dashboards/widget-catalog.md#new-work-item)  
      
      **Customization and administration**
      - [Customization process models](../../reference/customize-work.md)  
      - [Inheritance process model](../../organizations/settings/work/inheritance-process-model.md)  
      - [On-premises XML process model](../../reference/on-premises-xml-process-model.md)  
      - [Set permissions and access](../../organizations/security/set-permissions-access-work-tracking.md)  
      - [Work tracking limits](../../organizations/settings/work/object-limits.md)
      
      **Tools and integration**
      - [Client tools](../../user-guide/tools.md)  
      - [Mobile browser](../../project/navigation/mobile-work.md)  
      - [Visual Studio work item experience](set-work-item-experience-vs.md)  
      - [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)  
   :::column-end:::
:::row-end:::
---

## Common work item tasks

The following tasks are available to users with **Contributor** permissions and **Basic** access.  

---
:::row:::
   :::column span="1":::
      **Create and add work items**
      - [Add a work item](../backlogs/add-work-items.md)  
      - [Add items to a backlog](../backlogs/create-your-backlog.md)  
      - [Add items to a board](../boards/kanban-quickstart.md)  
      - [Add Epics](../boards/kanban-epics-features-stories.md)  
      - [Add Features](../boards/kanban-epics-features-stories.md)  
      - [Add tasks](../sprints/add-tasks.md)  
      - [Apply a template to a work item](../backlogs/work-item-template.md)  
      - [Capture work item as a template](../backlogs/work-item-template.md#capture-a-work-item-as-a-template)  
      ::: moniker range="<=azure-devops"
      - [Define a work item template](../backlogs/work-item-template.md)
      ::: moniker-end
      
      **View and navigate work items**
      - [Open work items](view-add-work-items.md)  
      ::: moniker range="<=azure-devops"
      - [View work items (mobile)](../../project/navigation/mobile-work.md)  
      - [View work items (web)](view-add-work-items.md)  
      - [View work assigned to me](view-add-work-items.md)  
      - [View work I'm following](view-add-work-items.md)  
      - [View work I've recently viewed or updated](view-add-work-items.md)  
      - [View work recently completed](view-add-work-items.md)  
      - [View work recently created](view-add-work-items.md)  
      - [View work where I'm mentioned](view-add-work-items.md)  
      ::: moniker-end
   :::column-end:::
   :::column span="1":::
      **Update and modify work items**
      - [Assign work to a team member](about-work-items.md#assign-work-items)  
      - [Add to discussion](../backlogs/add-work-items.md#capture-comments-in-the-discussion-section)    
      - [Update status of tasks (Taskboard)](../sprints/task-board.md)  
      - [Update status of work items (board)](../boards/kanban-quickstart.md)  
      - [Change work item type](../backlogs/move-change-type.md#change-the-work-item-type)  
      - [Move work items to a sprint](../sprints/assign-work-sprint.md)  
      - [Move work items to another project](../backlogs/move-change-type.md#move)  
      - [Move a card to a specific column position](../boards/customize-cards.md#reorder-cards) 
      - [Reassign work items](../backlogs/bulk-modify-work-items.md#reassign-work-items)
      - [Reassign a checklist item](../boards/add-task-checklists.md#checklist-actions) 
      
      **Bulk operations**
      - [Bulk modify work items (Web)](../backlogs/bulk-modify-work-items.md)  
      - [Bulk modify work items (Excel)](../backlogs/office/bulk-add-modify-work-items-excel.md)  
      - [Bulk add or remove tags](../queries/add-tags-to-work-items.md#bulk-add-or-remove-tags)  
      
      **Copy and clone**
      - [Copy or clone a work item](../backlogs/copy-clone-work-items.md)  
      - [Copy work item URL](about-work-items.md#copy-the-url)       
      - [Copy list of work items](../backlogs/copy-clone-work-items.md#copy-a-list-of-work-items)  
   :::column-end:::
   :::column span="1":::
      **Links and relationships**
      - [Add links](../backlogs/add-link.md)  
      - [Link work items](../backlogs/add-link.md)  
      - [Link to cross-organization work items](../backlogs/add-link.md)  
      - [Link to development objects](../backlogs/add-link.md)  
      - [Link to GitHub commits and pull requests](../github/link-to-from-github.md)  
      - [Change the link type](../backlogs/add-link.md#change-the-link-type-of-an-existing-link)
      - [Create a branch](../backlogs/connect-work-items-to-git-dev-ops.md)  
      - [Use #ID to link](../../organizations/notifications/add-links-to-work-items.md)  
      
      **Tags and organization**
      - [Add tags](../queries/add-tags-to-work-items.md)  
      - [Manage work item tags](../queries/add-tags-to-work-items.md#delete-remove-or-manage-tags)  
      ::: moniker range="<=azure-devops"
      - [Delete work item tags](../queries/add-tags-to-work-items.md#delete-remove-or-manage-tags)  
      ::: moniker-end
      - [Group work items](../backlogs/organize-backlog.md#map-items-to-group-them-under-a-feature-or-epic)  
      - [Map work items](../backlogs/organize-backlog.md#map-items-to-group-them-under-a-feature-or-epic) 
      - [Prioritize backlog items](../backlogs/create-your-backlog.md#reorder-backlog)  
      
      **Follow and notifications**
      - [Follow a work item](follow-work-items.md)  
      - [Get notified of work item changes](../../organizations/notifications/manage-your-personal-notifications.md)  
      - [Use @mentions](../../organizations/notifications/at-mentions.md)  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      **Queries and search**
      - [Query for work items](../queries/using-queries.md)  
      - [List work items](../queries/using-queries.md)  
      - [Query work item history](../queries/history-and-auditing.md#query-history)  
      ::: moniker range="<=azure-devops"
      - [View history](../queries/history-and-auditing.md#view-history)  
      ::: moniker-end
      - [Filter the History tab](../queries/history-and-auditing.md#filter-history)  
      - [Filter a backlog, board, or plan](../backlogs/filter-backlogs-boards-plans.md)  
      
      **Specialized work item types**
      - [Manage bugs](../backlogs/manage-bugs.md)  
      - [Track bugs as requirements or tasks](about-work-items.md#track)  
      - [Manage issues or impediments](../backlogs/manage-issues-impediments.md)
      - [Request feedback](/previous-versions/azure/devops/project/feedback/get-feedback)  
   :::column-end:::
   :::column span="1":::
      **Planning and forecasting**
      - [Forecast work items](../sprints/forecast.md)  
      - [Track dependencies](../plans/track-dependencies.md)  
      ::: moniker range="<=azure-devops"
      - [Display rollup](../backlogs/display-rollup.md)  
      ::: moniker-end
      
      **Reporting and visualization**
      - [Create a work tracking chart](../../report/dashboards/charts.md)  
      - [Link to work items from a wiki](../../project/wiki/markdown-guidance.md)  
      - [List work items in a wiki](../../project/wiki/markdown-guidance.md)
      - [Start storyboarding](/previous-versions/azure/devops/boards/backlogs/office/storyboard-your-ideas-using-powerpoint)
   :::column-end:::
   :::column span="1":::
      **Export and sharing**
      - [Send email of work item list](email-work-items.md)  
      - [Export a work item list](email-work-items.md#export)  
      - [Print work items](email-work-items.md#print-items)  
      
      **Delete and restore**
      ::: moniker range="<=azure-devops"
      - [Delete work items](../backlogs/remove-delete-work-items.md)  
      ::: moniker-end
      - [Remove work items](../backlogs/remove-delete-work-items.md#remove-work-items)  
      ::: moniker range="azure-devops"
      - [Restore deleted work items](../backlogs/remove-delete-work-items.md#restore-or-permanently-delete-work-items)  
      ::: moniker-end
   :::column-end:::
:::row-end:::
---

## Administrative and customization tasks 	

Administrators with the necessary permissions perform the following tasks, as they affect all users and teams within a project. 	

::: moniker range="azure-devops"  

You customize work item types using the Inheritance process model. 

::: moniker-end

::: moniker range="<azure-devops"

You customize work item types using either the Inheritance process model or On-premises XML process model. The model in effect for the project depends on the [selection made for the project collection](/azure/devops/server/admin/manage-project-collections) where the project is defined.

### Inherited process model

::: moniker-end

::: moniker range="<=azure-devops"
---
:::row:::
   :::column span="1":::
      **Project configuration**
      - [Create a project](../../organizations/projects/create-project.md)  
      - [Define Area Paths](../../organizations/settings/set-area-paths.md)  
      - [Define Iteration Paths](../../organizations/settings/set-iteration-paths-sprints.md)  
      - [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md)
      - [Restrict modification](../../organizations/security/restrict-access.md#restrict-modifications-wits)  
      
      **Work item type customization**
      - [Add a custom work item type](../../organizations/settings/work/customize-process-work-item-type.md#add-wit)  
      - [Change the WIT color or description](../../organizations/settings/work/customize-process-work-item-type.md#overview)  
      - [Enable/disable a WIT](../../organizations/settings/work/customize-process-work-item-type.md#enable-disable)  
      - [Delete a WIT](../../organizations/settings/work/customize-process-work-item-type.md#destroy)  
   :::column-end:::
   :::column span="1":::
      **Field customization**
      - [Add a custom field](../../organizations/settings/work/customize-process-field.md)  
      - [Add a checkbox (Boolean) field](../../organizations/settings/work/customize-process-field.md#boolean-field)  
      - [Add a person-name/Identity](../../organizations/settings/work/customize-process-field.md#identity)  
      - [Add a picklist (drop-down menu)](../../organizations/settings/work/customize-process-field.md#pick-list)  
      - [Add a rich-text (HTML) field](../../organizations/settings/work/customize-process-field.md#html)  
      - [Change a field label](../../organizations/settings/work/customize-process-field.md#rename-field)  
      - [Delete field](../../organizations/settings/work/customize-process-field.md#delete-field)  
      - [Modify a default pick list](../../organizations/settings/work/customize-process-field.md#add-a-picklist)  
      - [Set required/default options](../../organizations/settings/work/customize-process-field.md#options)  
   :::column-end:::
   :::column span="1":::
      **Form and workflow customization**
      - [Add/remove custom groups](../../organizations/settings/work/customize-process-form.md#groups)  
      - [Add/remove custom pages](../../organizations/settings/work/customize-process-form.md#pages)  
      - [Add/remove a custom control](../../organizations/settings/work/custom-controls-process.md)  
      - [Add/remove custom rules to a field](../../organizations/settings/work/custom-rules.md)  
      - [Add, edit, or remove a WIT workflow state](../../organizations/settings/work/customize-process-workflow.md#states)  
      - [Move the field within the layout](../../organizations/settings/work/customize-process-form.md#move-field)  
      - [Remove a field from form](../../organizations/settings/work/customize-process-field.md#remove-field)  
      
      **Process migration**
      - [Change the reference process from Agile to Scrum](../../organizations/settings/work/change-process-agile-to-scrum.md)  
      - [Change the reference process from Basic to Agile](../../organizations/settings/work/change-process-basic-to-agile.md)  
      - [Change the reference process from Scrum to Agile](../../organizations/settings/work/change-process-scrum-to-agile.md)  
   :::column-end:::
:::row-end:::
---

::: moniker-end

::: moniker range="<azure-devops"

### On-premises XML process model

You customize work item types using the On-premises XML process model. For more customization options, see [On-premises XML process customization](../../reference/on-premises-xml-process-model.md).

---
:::row:::
   :::column span="1":::
      **Project configuration**
      - [Define Area Paths](../../organizations/settings/set-area-paths.md)    
      - [Define Iteration Paths](../../organizations/settings/set-iteration-paths-sprints.md)    
      - [Define global lists](/previous-versions/azure/devops/reference/xml/define-global-lists)    
      
      **Field customization**
      - [Add a checkbox (Boolean) field](../../reference/add-modify-field.md)  
      - [Add a custom field](../../reference/add-modify-field.md)  
      - [Add or modify a field](../../reference/add-modify-field.md)  
      - [Add a custom pick list](../../reference/add-modify-field.md#picklist)  
      - [Add a custom control field](../../reference/add-modify-field.md#custom-control)  
   :::column-end:::
   :::column span="1":::
      **Field rules and attributes**
      - [Add rules to a field](../../reference/add-modify-field.md#add-rules)  
      - [Change a field attribute](../../reference/add-modify-field.md#change-attribute)    
      - [Change a field label](../../reference/add-modify-field.md#change-label)    
      - [Delete a field](../../reference/add-modify-field.md#delete-field)    
      - [Remove a field from a form](../../reference/add-modify-field.md#change-label)  
      - [Modify a predefined pick list](../../reference/add-modify-field.md#picklist)  
   :::column-end:::
   :::column span="1":::
      **Workflow and integration**
      - [Add/remove State or Reason fields (customize workflow)](../../reference/xml/change-workflow-wit.md)  
      - [Add fields that integrate with test, build, and version control](../../reference/add-modify-field.md#integration-fields)  
   :::column-end:::
:::row-end:::
---

::: moniker-end

## Related content

- [Query quick reference](../queries/query-index-quick-ref.md)
- [Work item field index](../work-items/guidance/work-item-field.md)
- [Quick guide to default permissions and access](../get-started/permissions-access-boards.md)
