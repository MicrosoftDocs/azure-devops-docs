---
title: Get started with Stakeholder access 
titleSuffix: Azure DevOps 
description: Learn how to add and update work items and view work tracking progress with Stakeholder access in Azure Boards.
ms.service: azure-devops-boards
ms.assetid: D76507F1-3154-4EE5-A23A-9179C2F5A365
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 10/11/2024
#customer intent: As a stakeholder, I want to understand how to use my access to manage work items for my team in Azure Boards. 
---

# Get started as a Stakeholder

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="azure-devops"
*Stakeholders* are users with free but limited access to Azure DevOps features and functions. With Stakeholder access, you can add and modify work items, manage build and release pipelines, and view dashboards. You can check project status and provide direction, feedback, feature ideas, and business alignment to a team. For more information, see [Create your first pipeline](../../pipelines/create-first-pipeline.md) and [Supported source repositories](../../pipelines/repos/index.md).
::: moniker-end  

::: moniker range="< azure-devops"
*Stakeholders* are users with free but limited access to Azure DevOps features and functions. With Stakeholder access, you can add and modify work items, view and approve pipelines, and view dashboards. You can check project status and provide direction, feedback, feature ideas, and business alignment to a team.
::: moniker-end  

For more information, see the [Stakeholder access quick reference](stakeholder-access.md) and the [feature matrix](https://azure.microsoft.com/services/devops/compare-features/).

## Prerequisites

**Private project:**

- You must have Stakeholder access and be a member of the Contributors or Project Administrators group. You can view boards, open and modify work items, and add child tasks to a checklist. You can't reorder or reparent a backlog item by using the drag-and-drop method. You can't update a field on a card.

**Public project:**

- You must have Stakeholder access and be a member of the Contributors or Project Administrators group to have full access to all Azure Boards features. For more information, see [Default permissions quick reference](../security/permissions-access.md).

::: moniker range="azure-devops"
To get access as a Stakeholder, ask your organization owner or Project Collection Administrator to add you to a project with Stakeholder access. For more information, see [Add organization users and manage access](../accounts/add-organization-users.md).
::: moniker-end  
::: moniker range="< azure-devops"
To get access as a Stakeholder, ask your server administrator to add you to a security group that has Stakeholder access. For more information, see [Change access levels](change-access-levels.md).
::: moniker-end  

## Sign in to a project

1. Select the link provided in your email invitation or open a browser window and enter the URL for the web portal.

   ::: moniker range="azure-devops"  
   `https://dev.azure.com/OrganizationName/ProjectName`
   ::: moniker-end
   ::: moniker range="< azure-devops"
   `http://ServerName:8080/tfs/DefaultCollection/ProjectName`

   For example, to connect to the server named **FabrikamPrime** and the project named **Contoso**, enter `http://FabrikamPrime:8080/tfs/DefaultCollection/Contoso`.
   ::: moniker-end

1. Enter your credentials. If you can't sign in, ask the organization owner or Project Administrator to add you as a member of the project with Stakeholder access.

## Understand work items and types

Work items support planning and tracking work. Each work item is based on a work item type. Each work item is assigned an identifier, which is unique in an organization or project collection.

Different work items track different types of work. The work item types available are based on the [process that was used when your project was created](../../boards/work-items/guidance/choose-process.md). The options are *Agile*, *Basic*, *Scrum*, or *Capability Maturity Model Integration (CMMI)*, as illustrated in the following images. For more information, see [About work items and work item types](../../boards/work-items/about-work-items.md).

[!INCLUDE [work item types](../../boards/includes/work-item-types.md)]

## Open your board

After you connect to a project, you can view work items.

::: moniker range="azure-devops"
1. In your project, select **Boards** > **Boards**. From the dropdown menu, select a team board.

   :::image type="content" source="../../boards/boards/media/quickstart/open-kanban-board-agile.png" alt-text="Screenshot that shows opening your board, cloud version.":::

   You can also enter a keyword in the search box or select **View Board directory** to see a list of available team boards.

   :::image type="content" source="../../boards/boards/media/quickstart/select-kanban-team-board.png" alt-text="Screenshot that shows selecting another team's board.":::

   > [!TIP]
   > Select the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to make a team board a favorite. Favorite artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorite icon) appear at the top of the team selector list.

1. Ensure that for the backlog level, you select:

    - **Stories** for Agile.
    - **Issues** for Basic.
    - **Backlog items** for Scrum.
    - **Requirements** for CMMI.

   :::image type="content" source="../../boards/sprints/media/assign-items-sprint/select-product-backlog-agile.png" alt-text="Screenshot that shows the menu to select the product backlog level option of Backlog items, Stories, Issues, or Requirements.":::

::: moniker-end
::: moniker range=">= azure-devops-2019 < azure-devops"

1. In your project, select **Boards** > **Boards**. From the dropdown menu, select a team board.

   :::image type="content" source="../../boards/boards/media/quickstart/open-kanban-board-agile.png" alt-text="Screenshot that shows opening your board in on-premises versions.":::

   To select another team's board, open the selector. Then select a different team, or select the :::image type="icon" source="../../media/icons/home-icon.png"::: **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

   :::image type="content" source="../../boards/boards/media/quickstart/select-kanban-team-board.png" alt-text="Screenshot that shows selecting another team's board in on-premises versions.":::

   > [!TIP]
   > Select the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to make a team board a favorite. Favorite artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorite icon) appear at the top of the team selector list.

1. Check that for the backlog level  you selected:

    - **Stories** for Agile.
    - **Issues** for Basic.
    - **Backlog items** for Scrum.
    - **Requirements** for CMMI.

   :::image type="content" source="../../boards/boards/media/quickstart/select-product-backlog-agile.png" alt-text="Screenshot that shows selecting the product backlog level option of Backlog items, Stories, Issues, or Requirements for on-premises versions.":::

::: moniker-end

## Add work items

::: moniker range="azure-devops"
From your board, select the :::image type="icon" source="../../media/icons/add-icon.png" border="false"::: plus sign, enter a title, and then select **Enter**.

:::image type="content" source="../../boards/boards/media/quickstart/add-new-item-agile-s155.png" alt-text="Screenshot that shows the highlighted New item button.":::
::: moniker-end  

::: moniker range="< azure-devops"
From the board, you can't add work items, but you can open them and annotate them. To add work items, open the backlog by selecting the **Backlog** link. Also, you can't update the status of a work item by using the drag-and-drop method to move a different column or reorder cards within a column.
::: moniker-end  

For more information, see [View and add work items](../../boards/work-items/view-add-work-items.md).

::: moniker range=">= azure-devops-2020"

## Update work items

Your work item forms might differ from the following images, but the functionality is the same.

### Change status

Drag a work item downstream as you finish work.

:::image type="content" source="../../boards/boards/media/alm-cc-move-card.png" alt-text="Screenshot that shows a board that uses an Agile template to update the status of a work item.":::

::: moniker-end  
::: moniker range="azure-devops-2020"
> [!NOTE]
> Stakeholders can only use the drag-and-drop method to move cards to different columns with the Azure DevOps Server 2020.1 update. For more information, see the [Release Notes](/azure/devops/server/release-notes/azuredevops2020u1#stakeholders-can-move-work-items-across-board-columns).
::: moniker-end

### Add details

To open a work item, double-click the title or highlight it, and then select **Enter**. This example shows how to assign work. You can only assign work to a user who was added to the project.

#### [Agile process](#tab/agile-process)

This example assigns the story to Raisa Pokrovskaya and at-mentions Raisa in a discussion note. When you're finished, select **Save & Close**.

:::image type="content" source="../../boards/get-started/media/plan-track-work/user-story-form-add-details.png" alt-text="Screenshot that shows details in the Discussion box on the User Story work item form.":::

#### [Basic process](#tab/basic-process)

This example assigns the issue to Raisa Pokrovskaya and at-mentions Raisa in a discussion note. When you're finished, select **Save & Close**.

:::image type="content" source="../../boards/get-started/media/track-issues/issue-form-add-details.png" alt-text="Screenshot that shows details in the Discussion box on the Issues work item form.":::

#### [Scrum process](#tab/scrum-process)

This example assigns the Product backlog item to Jamal Hartnett and adds a description and tags. When you're finished, select **Save & Close**.

:::image type="content" source="../../boards/media/pbi-form-cloud.png" alt-text="Screenshot that shows adding details to the Scrum Product backlog work item form.":::

#### [CMMI process](#tab/cmmi-process)

This example assigns the Requirement work item to Jamal Hartnett. When you're finished, select **Save & Close**.

:::image type="content" source="../../boards/media/requirement-form-cloud.png" alt-text="Screenshot that shows the Requirement work item form.":::

#### CMMI-specific field descriptions

[!INCLUDE [cmmi field descriptions](../../boards/includes/section-cmmi-field-descriptions.md)]

***

To add more details, change field values, add a description or tags, and add comments. For more information, see:

- [Plan and track work in Azure Boards](../../boards/get-started/plan-track-work.md).
- [Add tags to work items](../../boards/queries/add-tags-to-work-items.md). As a Stakeholder, you can add existing tags to a work item, but you can't add new tags.
- [Capture comments in the Discussion section](../../boards/get-started/plan-track-work.md#capture-comments-in-the-discussion-section).

## View as backlog

Check the product backlog to see how the team prioritized their work. Backlog items appear in priority order. Work item types might include bugs, depending on the process used when your project was created. For more information, see [About default processes and process templates](../../boards/work-items/guidance/choose-process.md).

::: moniker range="azure-devops"
From the board, select **View as backlog**.

:::image type="content" source="../../boards/media/switch-to-backlog-cloud.png" alt-text="Screenshot that shows View as backlog in a cloud version.":::
::: moniker-end

::: moniker range=" < azure-devops"
From the board, select **View as backlog**.
:::image type="content" source="../../boards/media/switch-to-backlog-2019.png" alt-text="Screenshot that shows View as backlog in an on-premises version.":::
::: moniker-end

The list of backlog items appears in priority order. You can add a backlog item, which goes to the bottom of the list. With Stakeholder access, you can't reprioritize work.

<a id="query">  </a>

## Find work items

::: moniker range=">= azure-devops-2019"

Select **Boards** > **Work Items**. Then select an option from the dropdown menu. For example, select **Assigned to me**.

:::image type="content" source="media/stakeholder/work-items-assigned-to-me.png" alt-text="Screenshot that shows selections of work on the Work Items page and choosing Assigned to me.":::

For more information, see:

- [View, run, or email a work item query](../../boards/queries/view-run-query.md)
- [View and add work items](../../boards/work-items/view-add-work-items.md)

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Create your product backlog](../../boards/backlogs/create-your-backlog.md)
 
## Related articles

- [Add work items](../../boards/backlogs/add-work-items.md)
- [Get started with Kanban boards](../../boards/boards/kanban-quickstart.md)
- [Learn about access levels](access-levels.md)
- [Change access levels](change-access-levels.md)
