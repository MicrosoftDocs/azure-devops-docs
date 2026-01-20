---
title: Manage work items effectively
titleSuffix: Azure Boards 
description: Optimize work item management in Azure Boards. Learn to create, update, link, track, and organize work items with best practices for team collaboration.
ms.custom: devx-track-azurecli
ms.service: azure-devops-boards
ms.assetid: 9474A25E-A9D8-433D-8370-C94624B4ACD6  
ai-usage: ai-assisted
ms.author: chcomley
monikerRange: '<= azure-devops'
ms.topic: concept-article
ms.date: 01/13/2026
---

# Manage work items effectively

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)] 

Work items are the foundation of project management in Azure Boards, enabling teams to track and organize all types of work including user stories, product backlog items, tasks, test cases, and bugs. Effective work item management helps teams:

- **Plan and prioritize work** with clear descriptions and assignments
- **Track progress** through states and status updates
- **Coordinate team efforts** with links, dependencies, and notifications
- **Maintain visibility** across project stakeholders and management

This comprehensive guide covers essential work item management capabilities in Azure DevOps.


[!INCLUDE [temp](../includes/prerequisites-work-items.md)] 

## Update and modify work items

Regularly update work items to reflect current status, assignments, and progress. Key elements you can modify include:

- **Basic information**: Title, description, and acceptance criteria
- **Assignment and tracking**: Assigned team member, state, and iteration
- **Classification**: Area path, tags, and priority
- **Progress tracking**: Remaining work, completed work, and effort estimates

### [Browser](#tab/browser)

Access work items through the web interface for full editing capabilities. Select any work item to open the detailed form where you can make comprehensive updates.

# [Visual Studio 2019](#tab/visual-studio)

To update a work item. From the Team Explorer, select a work item. The work item form opens in the web portal where you can make changes to the work item form and save your changes.

### [Azure DevOps CLI](#tab/azure-devops-cli)

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

::: moniker range="azure-devops"

To assign a team member to a work item using the Azure DevOps CLI, use the [az boards work-item update](/cli/azure/boards/work-item#az-boards-work-item-update) command.  

```azurecli

az boards work-item update --id <work-item-id> --assigned-to <user-email> --org https://dev.azure.com/<organization-name> --project <project-name>

```

> [!TIP]
> If you set the default organization and project using the `az devops configure` command, you can omit the `--org` and `--project` parameters.

::: moniker-end

---

## View and track work items

Effectively viewing and tracking work items ensures team visibility and progress monitoring. The **Work items** page provides multiple viewing options:

- **My work items**: Items assigned to you or that you're following
- **Recent activity**: Recently created or updated items
- **Mentioned**: Items where you're @mentioned in discussions
- **Custom filters**: Filter by state, iteration, area path, or custom criteria

Use interactive filters and sorting to quickly find relevant work items and maintain awareness of project progress. 

::: moniker range="azure-devops"

You can also view work items from Visual Studio, Azure DevOps CLI, or the REST API.

::: moniker-end

For more information, see [View and add work items](../work-items/view-add-work-items.md).

## Link work items for traceability

Link work items to establish relationships, dependencies, and hierarchies that improve project visibility and traceability.

**Common linking patterns:**
- **Hierarchical links**: Connect epics → features → user stories → tasks
- **Dependency links**: Related work items that block or depend on others
- **Reference links**: Connect work items to commits, pull requests, or external resources

**Benefits of linking:**
- Maintain traceability from requirements to implementation
- Visualize work dependencies and relationships  
- Enable portfolio rollup and progress reporting
- Support effect analysis for changes

For comprehensive linking guidance, see [Link work items to objects](add-link.md) and [Link types reference](../../boards/queries/link-type-reference.md).


::: moniker range="azure-devops"

## Follow a work item

To track the progress of a single work item, select the **Follow** icon 
 :::image type="icon" source="../media/icons/follow-icon.png" border="false":::. This action sends you email alerts when changes are made to the work item.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing Work item form, Follow icon control.](../work-items/media/follow-work/follow-work-item.png) 

You receive notifications when other project members modify the work item, such as adding to the discussion, change a field value, or add an attachment.

You can specify the types of changes you want to be notified about. When you select the settings icon, :::image type="icon" source="../media/icons/settings-icon.png" border="false"::: you can select:

- **Not Subscribed**: Only receive notifications from this work item when you're @mentioned.
- **Subscribed**: Receive notifications for all changes to this work item.
- **Custom**: Specify notifications for:
  - **State Changed**: When the work item changes state
  - **Assigned To Changed**: When the work item is assigned to someone else
  - **Iteration Changed**: When the iteration path changes

Notifications are sent to your preferred email address, which you can [change from your user profile](../../organizations/notifications/change-email-address.md).

To stop following changes, select the  **Following** icon :::image type="icon" source="../media/icons/following-icon.png" border="false":::.

::: moniker-end

## Manage attachments and documentation

Attach relevant files and documentation to work items for context and reference.

**Attachment capabilities:**
- **File limits**: Up to 100 files per work item, 60 MB maximum per file
- **Supported formats**: Images, documents, code files, logs, and more
- **Access control**: Attachments inherit work item permissions

**Best practices:**
- Use descriptive filenames for easy identification
- Attach relevant screenshots for UI-related work items
- Include test data or logs for bug reports
- Consider linking to shared storage for large files

Manage attachments through the web portal's attachment tab. For detailed guidance, see [Manage attachments to work items](../work-items/manage-attachments.md).

## Organize with tags and categories

Tags provide flexible categorization for work items beyond formal area and iteration paths.

**Effective tagging strategies:**
- **Feature grouping**: Tag related work items for feature tracking
- **Skill requirements**: Identify work requiring specific expertise (frontend, backend, design)
- **Priority indicators**: Mark urgent or high-visibility items
- **Process stages**: Track work through custom workflow stages
- **Cross-team coordination**: Identify work affecting multiple teams

**Tag management tips:**
- Establish team conventions for consistent tagging
- Use specific, descriptive tags rather than generic terms
- Regularly review and clean up unused tags
- Use tags in queries and dashboard filters

For comprehensive tag management, see [Add tags to work items](../queries/add-tags-to-work-items.md).


[!INCLUDE [discussion-tip-azure-devops](../includes/discussion-tip-azure-devops.md)]


## Copy and clone work items efficiently

Cloning work items accelerates work creation while maintaining consistency and quality.

**Key benefits:**
- **Time efficiency**: Rapidly create similar work items without manual duplication
- **Consistency**: Preserve structure, fields, and formatting across related items
- **Template creation**: Establish reusable patterns for common work types
- **Bulk operations**: Generate multiple items for different team members or iterations
- **Historical preservation**: Maintain original context while tracking separate progress

**Common use cases:**
- Creating similar user stories across different features
- Generating tasks for recurring processes or ceremonies
- Establishing work item templates for new team members
- Duplicating bug reports for different environments or configurations

For step-by-step instructions, see [Copy or clone work items](copy-clone-work-items.md).

## Move work items between teams

Transfer work items between teams to accommodate changing priorities, skill requirements, or organizational restructuring.

**Prerequisites:**
- **Edit work items in this node** permission for the target team
- Understanding of target team's area path and iteration settings

**Common scenarios:**
- Reassigning work based on team expertise or capacity
- Reorganizing work due to project restructuring  
- Balancing workload across teams
- Moving work to specialized teams (security, performance, accessibility)

**Important considerations:**
- Moving items might affect team velocity calculations
- Update area path and iteration to match target team
- Communicate changes to affected stakeholders
- Review dependencies that might span teams

For detailed procedures, see [Move work items from one team to another](../work-items/move-work-items.md).

## Customize work item templates and types

Tailor work items to your team's specific processes and information requirements through customization options.

### Work item template customization approaches

- **Work item templates (Team-level)**
  - **Purpose**: Create reusable templates with predefined field values
  - **Scope**: Team-specific customizations
  - **Benefits**: Standardize common work patterns, reduce manual entry
  - **Use cases**: Sprint planning templates, bug report templates, user story formats

- **Work item type customization (Project-level)**
  - **Purpose**: Modify work item types with custom fields, rules, and layouts
  - **Scope**: Project-wide customizations
  - **Benefits**: Capture domain-specific information, enforce process compliance
  - **Use cases**: Custom fields for compliance tracking, specialized workflows

- **Process template inheritance (Organization-level)**
  - **Purpose**: Create organization-wide process standards
  - **Scope**: All projects using the custom process
  - **Benefits**: Consistent practices across teams, centralized governance
  - **Requirements**: Organization-level permissions

### Customization resources
- [Use work item templates](work-item-template.md)
- [Add and manage work item types](../../organizations/settings/work/customize-process-work-item-type.md)
- [About process customization and inherited processes](../../organizations/settings/work/inheritance-process-model.md)


## Delete work items

You can delete work items that are no longer needed. Deleted work items are moved to the Recycle Bin where they can be restored or permanently deleted.

For more information, see, [Remove, delete, or restore work items](remove-delete-work-items.md).


## Reporting and Analytics

Analytics views provide a powerful way to visualize and analyze your work items. You can use  create custom reports and dashboards to track progress, identify trends, and make data-driven decisions.

For more information, see [What is Analytics?](../../report/powerbi/what-is-analytics.md).

## Work item management best practices

Implement proven practices to maximize the effectiveness of work item management across different process frameworks.

### Universal best practices
- **Clear descriptions**: Write specific, actionable descriptions with clear acceptance criteria
- **Consistent estimation**: Use relative sizing or time-based estimates consistently
- **Regular updates**: Keep work item states current to reflect actual progress
- **Effective linking**: Maintain traceability through hierarchical and dependency links
- **Meaningful tags**: Use standardized tagging conventions for filtering and organization

### Process-specific guidance
**Agile methodology:**
- Focus on user value and iterative delivery
- Maintain a prioritized product backlog
- Use user stories with clear acceptance criteria
- [Agile process workflow guidance](../work-items/guidance/agile-process-workflow.md)

**Scrum framework:**
- Organize work into time-boxed sprints
- Maintain a definition of done
- Use product backlog items and tasks
- [Scrum process workflow guidance](../work-items/guidance/scrum-process-workflow.md)

**CMMI approach:**
- Emphasize process improvement and measurement
- Track requirements through implementation
- Use formal change control processes
- [CMMI process workflow guidance](../work-items/guidance/cmmi-process-workflow.md)

## Next step  

> [!div class="nextstepaction"]
> [Create your backlog](create-your-backlog.md) or 
> [Kanban board quickstart](../boards/kanban-quickstart.md) 

## Related content

- [View the work item field index](../work-items/guidance/work-item-field.md?toc=/azure/devops/boards/work-items/toc.json)
- [Explore work item form controls](../work-items/about-work-items.md#work-item-form-controls)
- [Set up notifications for changes](../../organizations/notifications/manage-your-personal-notifications.md)
- [Create and manage queries](../queries/using-queries.md)
- [Define status and trend charts](../../report/dashboards/charts.md)
- [Use clients that support tracking work items](../../user-guide/tools.md?toc=/azure/devops/boards/work-items/toc.json)
