---
title: Quick reference for concepts related to work item tasks
titleSuffix: Azure Boards
description: Learn about query operators, macros, and sample queries used to list work items for Azure Boards and Azure DevOps.
ms.custom: work-items, engagement-fy23
ms.service: azure-devops-boards
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/02/2023
---

# Key concepts and work item tasks

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use this index to quickly access concepts and tasks related to work items and information on adding and updating work items&mdash;such as users stories, features, tasks, and bugs.


::: moniker range="azure-devops"

> [!NOTE]   
> The following features require that you enable the **New Boards Hub** preview feature. These features are only available for Azure DevOps Services at this time. To enable the **New Boards Hub**, see [Manage or enable features](../../project/navigation/preview-features.md).
> - [Change the link type of an existing link](../backlogs/add-link.md#change-link-type)
> - [Filter the history tab](../queries/history-and-auditing.md#filter-history) 
> - [Reassign a checklist item](../boards/add-task-checklists.md#checklist-actions) 
> - [Move a card to a specific column position](../boards/customize-cards.md#reorder-cards)
> - [Change the color of a swimlane on a Kanban board](../boards/expedite-work.md#add-or-remove-a-swimlane)
::: moniker-end


<a id="concepts" />

## Key concepts

---
:::row:::
   :::column span="1":::
      - [Agile glossary](agile-glossary.md)  
      - [Agile process](guidance/agile-process.md)  
      - [Area Paths](../../organizations/settings/about-areas-iterations.md)  
      - [Autocomplete work items](workflow-and-state-categories.md#auto-complete-work-items-with-pr)  
      - [Assigned to](about-work-items.md#assign)  
      - [Basic process](../get-started/plan-track-work.md)  
      <br/>
      - [Chart for work items widget](../../report/dashboards/widget-catalog.md#chart-wit-widget)  
      - [Charts](../../report/dashboards/charts.md)  
      - [Client tools](../../user-guide/tools.md)  
      - [CMMI process](guidance/cmmi-process.md)  
      - [Customization process models](../../reference/customize-work.md)  
      - [Dependencies](../best-practices-agile-project-management.md#manage-dependencies)  
      - [Delivery plans](../backlogs/backlogs-boards-plans.md)  
      <br/>
      - [Filtering](../backlogs/filter-backlogs-boards-plans.md)  
      - [Following](follow-work-items.md)  
      - [Inheritance process model](../../organizations/settings/work/inheritance-process-model.md)  
      - [Iteration Paths](../../organizations/settings/about-areas-iterations.md)  
      - [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)  
   :::column-end:::
   :::column span="1":::
      - [Link types](../queries/link-type-reference.md)  
      - [Linking and traceability](../queries/link-work-items-support-traceability.md)  
      - [Mobile browser](../..//project/navigation/mobile-work.md)  
      - [New Boards Hub](/azure/devops/release-notes/2022/sprint-202-update#new-boards-hubs-now-available-in-public-preview)  
      - [New work item widget](../../report/dashboards/widget-catalog.md#new-work-item)  
      - [On-premises XML process model](../../reference/on-premises-xml-process-model.md)  
      - [Permissions and access](../../organizations/security/permissions-access-work-tracking.md)  
      - [Process guidance](guidance/choose-process.md)  
      - [Process models](../../reference/customize-work.md)  
      <br/>
      ::: moniker range="azure-devops"
      - [Queries](../queries/about-managed-queries.md)  
      - [Recycle bin](../backlogs/remove-delete-work-items.md#restore)  
      - [Remote linking](../backlogs/add-link.md#remote-link)  
      - [Rich text fields](../queries/share-plans.md#rich-text-fields)  
      - [Rollup](../backlogs/display-rollup.md)  
      - [Scrum process](guidance/scrum-process.md)  
      - [State categories](workflow-and-state-categories.md)  
      ::: moniker-end
      ::: moniker range="azure-devops-2020"
      - [Queries](../queries/about-managed-queries.md)  
      - [Recycle bin](../backlogs/remove-delete-work-items.md#restore)  
      - [Rich text fields](../queries/share-plans.md#rich-text-fields)  
      - [Rollup](../backlogs/display-rollup.md)  
      - [Scrum process](guidance/scrum-process.md)  
      - [State categories](workflow-and-state-categories.md)  
      ::: moniker-end
      ::: moniker range="< azure-devops-2020"
      - [Queries](../queries/about-managed-queries.md)  
      - [Recycle bin](../backlogs/remove-delete-work-items.md#restore)  
      - [Requirements](../../cross-service/manage-requirements.md)  
      - [Rich text fields](../queries/share-plans.md#rich-text-fields)  
      - [Rollup](../../reference/xml/support-rollup-of-work-and-other-fields.md)  
      - [Scrum process](guidance/scrum-process.md)  
      - [State categories](workflow-and-state-categories.md)  
      ::: moniker-end
   :::column-end:::
   :::column span="1":::
      - [Tags](../queries/add-tags-to-work-items.md)  
      - [Track bugs as requirements or tasks](about-work-items.md#track)  
      - [Track dependencies](../plans/track-dependencies.md)  
      <br/> 
      - [Visual Studio work item experience](set-work-item-experience-vs.md)  
      <br/> 
      - [Work item fields](guidance/work-item-field.md)  
      - [Work item form](about-work-items.md#work-item-form)  
      - [Work item form controls](work-item-form-controls.md)  
      - [Work item templates](about-work-items.md#templates)  
      - [Work item types](about-work-items.md#work-item-types-wits)
      - [Work tracking limits](../../organizations/settings/work/object-limits.md)
      - [Workflow](workflow-and-state-categories.md)
   :::column-end:::
:::row-end:::
---
 

## Work item user tasks

Tasks listed below are available to users with **Contributor** permissions and **Basic** access.  

---
:::row:::
   :::column span="1":::
      - [Add a work item](../backlogs/add-work-items.md)  
      - [Add Epics](../boards/kanban-epics-features-stories.md)  
      - [Add Features](../boards/kanban-epics-features-stories.md)  
      - [Add items to a backlog](../backlogs/create-your-backlog.md)  
      - [Add items to a Kanban board](../boards/kanban-quickstart.md)  
      - [Add links](../backlogs/add-link.md)  
      - [Add tags](../queries/add-tags-to-work-items.md)  
      - [Add tasks](../sprints/add-tasks.md)  
      - [Add to discussion](../backlogs/add-work-items.md#capture-comments-in-the-discussion-section)    
      - [Apply a template to a work item](../backlogs/work-item-template.md)  
      - [Assign work to a team member](about-work-items.md#assign-work-items)  
      - [Attach files](../queries/share-plans.md#attach-files)  
      <br/>
      - [Bulk add or remove tags](../queries/add-tags-to-work-items.md#bulk-add-or-remove-tags)  
      - [Bulk modify work items (Excel)](../backlogs/office/bulk-add-modify-work-items-excel.md)  
      - [Bulk modify work items (Web)](../backlogs/bulk-modify-work-items.md)  
      <br/>
      - [Capture work item as a template](../backlogs/work-item-template.md#capture-a-work-item-as-a-template)  
      - [Change the link type](../backlogs/add-link.md#change-link-type)
      - [Change work item type](../backlogs/move-change-type.md#change-the-work-item-type)  
      - [Copy or clone a work item](../backlogs/copy-clone-work-items.md)  
      - [Copy work item URL](work-item-form-controls.md#copy-the-url)  
      - [Copy URL of attachment](../queries/share-plans.md#copy-url-attached-file)       
      - [Copy list of work items](../backlogs/copy-clone-work-items.md#copy-a-list-of-work-items)  
      - [Create a branch](../backlogs/connect-work-items-to-git-dev-ops.md)  
      - [Create a work tracking chart](../../report/dashboards/charts.md)  
      <br/>
      ::: moniker range=">= azure-devops-2020"
      - [Define a work item template](../backlogs/work-item-template.md)  
      - [Define work item URL](work-item-url-hyperlink.md)  
      - [Delete work item tags](../queries/add-tags-to-work-items.md#delete-remove-or-manage-tags)  
      - [Delete work items](../backlogs/remove-delete-work-items.md)  
      - [Display rollup](../backlogs/display-rollup.md)  
      ::: moniker-end
      ::: moniker range="< azure-devops-2020"
      - [Define a work item template](../backlogs/work-item-template.md)  
      - [Define work item URL](work-item-url-hyperlink.md)  
      - [Delete work item tags](../queries/add-tags-to-work-items.md#delete-remove-or-manage-tags)  
      - [Delete work items](../backlogs/remove-delete-work-items.md)  
      ::: moniker-end


      - [Email work item list](email-work-items.md)  
      - [Export a work item list](email-work-items.md#export)  
   :::column-end:::
   :::column span="1":::
      - [Filter a backlog, board, or plan](../backlogs/filter-backlogs-boards-plans.md)  
      - [Filter the History tab](../queries/history-and-auditing.md#filter-history)  
      - [Follow a work item](follow-work-items.md)  
      - [Forecast work items](../sprints/forecast.md)  
      - [Get notified of work item changes](../../organizations/notifications/manage-your-personal-notifications.md)  
      - [Group work items](../backlogs/organize-backlog.md#map-items-to-group-them-under-a-feature-or-epic)  
      <br/>
      - [Link to cross-organization work items](../backlogs/add-link.md)  
      - [Link to development objects](../backlogs/add-link.md)  
      - [Link to GitHub commits and pull requests](../github/link-to-from-github.md)  
      - [Link to work items from a wiki](../../project/wiki/wiki-markdown-guidance.md)  
      - [Link work items](../backlogs/add-link.md)  
      - [List work items](../queries/using-queries.md)  
      - [List work items in a wiki](../../project/wiki/wiki-markdown-guidance.md)  
      <br/>
      - [Manage bugs](../backlogs/manage-bugs.md)  
      - [Manage issues or impediments](../backlogs/manage-issues-impediments.md)
      - [Manage work item tags](../queries/add-tags-to-work-items.md#delete-remove-or-manage-tags)  
      - [Map work items](../backlogs/organize-backlog.md#map-items-to-group-them-under-a-feature-or-epic) 
      - [Move a card to a specific column position](../boards/customize-cards.md#reorder-cards) 
      - [Move work items to a sprint](../sprints/assign-work-sprint.md)  
      - [Move work items to another project](../backlogs/move-change-type.md#move)  
      <br/>
      - [Open work items](view-add-work-items.md)  
      - [Print work items](email-work-items.md#print-items)  
      - [Prioritize backlog items](../backlogs/create-your-backlog.md#reorder-backlog)  
      - [Query work item history](../queries/history-and-auditing.md#query-history)  
      - [Query for work items](../queries/using-queries.md)  
   :::column-end:::
   :::column span="1":::
      - [Reassign a checklist item](../boards/add-task-checklists.md#checklist-actions) 
      - [Reassign work items](../backlogs/bulk-modify-work-items.md#reassign-work-items)
      - [Remove work items](../backlogs/remove-delete-work-items.md#remove-work-items)  
      - [Request feedback ](/previous-versions/azure/devops/project/feedback/get-feedback)  
      - [Restore deleted work items](../backlogs/remove-delete-work-items.md#restore-or-permanently-delete-work-items)  
      <br/>
      - [Start storyboarding ](../queries/share-plans.md#storyboard)  
      - [Track dependencies](../plans/track-dependencies.md)  
      <br/>
      - [Update status of tasks (Taskboard)](../sprints/task-board.md)  
      - [Update status of work items (Kanban board)](../boards/kanban-quickstart.md)  
      - [Use #ID to link](../../organizations/notifications/add-links-to-work-items.md)  
      - [Use @mentions](../../organizations/notifications/at-mentions.md)  
      <br/>
      ::: moniker range=">= azure-devops-2020"
      - [View history](../queries/history-and-auditing.md#view-history)  
      - [View work items (mobile)](../../project/navigation/mobile-work.md)  
      - [View work items (web)](view-add-work-items.md)  
      - [View work assigned to me](view-add-work-items.md)  
      - [View work I'm following](view-add-work-items.md)  
      - [View work I've recently viewed or updated](view-add-work-items.md)  
      - [View work recently completed](view-add-work-items.md)  
      - [View work recently created](view-add-work-items.md)  
      - [View work where I'm mentioned](view-add-work-items.md)  
      ::: moniker-end
      ::: moniker range="< azure-devops-2020"
      - [View history](../queries/history-and-auditing.md#view-history)  
      - [View work items (mobile)](../../project/navigation/mobile-work.md)  
      - [View work items (web)](../backlogs/add-work-items.md)  
      ::: moniker-end
   :::column-end:::
:::row-end:::
---
 

## Administrative customization tasks 	

Tasks listed below must be performed by an administrator who has the necessary permissions, as they affect all users and teams within a project. 	

::: moniker range="azure-devops"  

You customize work item types using the Inheritance process model. 
<br/> 

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

You customize work item types using either the Inheritance process model or On-premises XML process model. The model in effect for the project depends on the [selection made for the project collection](/azure/devops/server/admin/manage-project-collections) where the project is defined.

### Inherited process model

::: moniker-end

::: moniker range=">= azure-devops-2020"
---
:::row:::
   :::column span="2":::
      - [Add a checkbox (Boolean) field](../../organizations/settings/work/customize-process-field.md#boolean-field)  
      - [Add a custom field](../../organizations/settings/work/customize-process-field.md)  
      - [Add a custom work item type](../../organizations/settings/work/customize-process-work-item-type.md#add-wit)  
      - [Add/remove custom fields](../../organizations/settings/work/customize-process-field.md)  
      - [Add/remove custom groups](../../organizations/settings/work/customize-process-form.md#groups)  
      - [Add/remove custom pages](../../organizations/settings/work/customize-process-form.md#pages)  
      - [Add/remove a custom control](../../organizations/settings/work/custom-controls-process.md)  
      - [Add/remove custom rules to a field](../../organizations/settings/work/custom-rules.md)  
      - [Add a person-name/Identity](../../organizations/settings/work/customize-process-field.md#identity)  
      - [Add a picklist (drop-down menu)](../../organizations/settings/work/customize-process-field.md#pick-list)  
      - [Add a rich-text (HTML) field](../../organizations/settings/work/customize-process-field.md#html)  
      - [Add, edit, or remove a WIT workflow state](../../organizations/settings/work/customize-process-workflow.md#states)  
      <br/>
      - [Change a field label](../../organizations/settings/work/customize-process-field.md#rename-field)  
      - [Change the WIT color or description](../../organizations/settings/work/customize-process-work-item-type.md#overview)  
      - [Change the reference process from Agile to Scrum](../../organizations/settings/work/change-process-agile-to-scrum.md)  
      - [Change the reference process from Basic to Agile](../../organizations/settings/work/change-process-basic-to-agile.md)  
      - [Change the reference process from Scrum to Agile](../../organizations/settings/work/change-process-scrum-to-agile.md)  
      - [Create a project](../../organizations/projects/create-project.md)  
      <br/>
   :::column-end:::
   :::column span="1":::
      - [Define Area Paths](../../organizations/settings/set-area-paths.md)  
      - [Define Iteration Paths](../../organizations/settings/set-iteration-paths-sprints.md)  
      - [Delete field](../../organizations/settings/work/customize-process-field.md#delete-field)  
      - [Delete a WIT](../../organizations/settings/work/customize-process-work-item-type.md#destroy)  
      - [Enable/disable a WIT](../../organizations/settings/work/customize-process-work-item-type.md#enable-disable)  
      <br/>
      - [Modify a default pick list](../../organizations/settings/work/customize-process-field.md#add-a-picklist)  
      - [Move the field within the layout](../../organizations/settings/work/customize-process-form.md#move-field)  
      - [Remove a field from form](../../organizations/settings/work/customize-process-field.md#remove-field)  
      - [Restrict modification](../../organizations/security/restrict-access.md#restrict-modifications-wits)  
      - [Set required/default options](../../organizations/settings/work/customize-process-field.md#options)  
      - [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md)
   :::column-end:::
:::row-end:::
---

::: moniker-end

::: moniker range="azure-devops-2019"

---
:::row:::
   :::column span="2":::
      - [Add a custom field](../../organizations/settings/work/customize-process-field.md)  
      - [Add a custom work item type (WIT)](../../organizations/settings/work/customize-process-work-item-type.md#add-wit)  
      - [Add/remove custom fields from a WIT](../../organizations/settings/work/customize-process-field.md)  
      - [Add/remove custom groups on a WIT form](../../organizations/settings/work/customize-process-form.md#groups)  
      - [Add/remove custom pages on a WIT form](../../organizations/settings/work/customize-process-form.md#pages)  
      - [Add/remove a custom control on a WIT form](../../organizations/settings/work/custom-controls-process.md)  
      - [Add/remove custom rules to a field](../../organizations/settings/work/custom-rules.md)  
      - [Add a person-name/Identity](../../organizations/settings/work/customize-process-field.md#identity)  
      - [Add a picklist (drop-down menu)](../../organizations/settings/work/customize-process-field.md#pick-list)  
      - [Add a rich-text (HTML) field](../../organizations/settings/work/customize-process-field.md#html)  
      - [Add, edit, or remove a WIT workflow state](../../organizations/settings/work/customize-process-workflow.md#states)  
      <br/>
      - [Change a field label](../../organizations/settings/work/customize-process-field.md#rename-field)  
      - [Change the WIT color or description](../../organizations/settings/work/customize-process-work-item-type.md#overview)  
      - [Create a project](../../organizations/projects/create-project.md)   
   :::column-end:::
   :::column span="1":::
      - [Define Area Paths](../../organizations/settings/set-area-paths.md)  
      - [Define Iteration Paths](../../organizations/settings/set-iteration-paths-sprints.md)  
      - [Delete field](../../organizations/settings/work/customize-process-field.md#delete-field)  
      - [Delete a WIT](../../organizations/settings/work/customize-process-work-item-type.md#destroy)  
      <br/>
      - [Enable/disable a WIT](../../organizations/settings/work/customize-process-work-item-type.md#enable-disable)  
      - [Modify a default pick list](../../organizations/settings/work/customize-process-field.md#add-a-picklist)  
      - [Move the field within the layout](../../organizations/settings/work/customize-process-form.md#move-field)  
      <br/>
      - [Remove a field from a form](../../organizations/settings/work/customize-process-field.md#remove-field)  
      - [Restrict modification](../../organizations/security/restrict-access.md#restrict-modifications-wits)  
      - [Set required/default options](../../organizations/settings/work/customize-process-field.md#options)  
      - [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md)
   :::column-end:::
:::row-end:::
---

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

### On-premises XML process model

::: moniker-end

::: moniker range="< azure-devops"

You customize work item types using the On-premises XML process model. For more customization options, see [On-premises XML process customization](../../reference/on-premises-xml-process-model.md).

---
:::row:::
   :::column span="2":::
      - [Add a checkbox (Boolean) field](../../reference/add-modify-field.md)  
      - [Add a custom field](../../reference/add-modify-field.md)  
      - [Add a custom pick list](../../reference/add-modify-field.md#picklist)  
      - [Add or modify a field](../../reference/add-modify-field.md)  
      - [Add rules to a field](../../reference/add-modify-field.md#add-rules)  
      - [Add a custom control field](../../reference/add-modify-field.md#custom-control)  
      - [Add fields that integrate with test, build, and version control](../../reference/add-modify-field.md#integration-fields)  
      - [Add/remove State or Reason fields (customize workflow)](../../reference/xml/change-workflow-wit.md)  
   :::column-end:::
   :::column span="1":::
      - [Change a field attribute](../../reference/add-modify-field.md#change-attribute)    
      - [Change a field label](../../reference/add-modify-field.md#change-label)    
      - [Define Area Paths](../../organizations/settings/set-area-paths.md)    
      - [Define Iteration Paths](../../organizations/settings/set-iteration-paths-sprints.md)    
      - [Define global lists](/previous-versions/azure/devops/reference/xml/define-global-lists)    
      - [Delete a field](../../reference/add-modify-field.md#delete-field)    
      - [Modify a predefined pick list](../../reference/add-modify-field.md#picklist)  
      - [Remove a field from a form](../../reference/add-modify-field.md#change-label)  
   :::column-end:::
:::row-end:::
---

::: moniker-end


## Related articles

- [Query quick reference](../queries/query-index-quick-ref.md)
- [Work item field index](../work-items/guidance/work-item-field.md)
- [Quick guide to default permissions and access](../get-started/permissions-access-boards.md)
