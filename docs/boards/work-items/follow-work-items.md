---
title: Follow work items and pull requests
titleSuffix: Azure Boards & Azure Repos
description: Track updates to work items and pull requests by following them to receive targeted notifications in Azure DevOps.
ms.custom: work-items, cross-project
ms.subservice: azure-devops-boards
ms.assetid: 77CAEE8E-BF1A-47DA-9818-A0C52BAC813C
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 07/21/2025
---

# Follow work items and pull requests  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

<a id="follow"></a>  

Stay informed about changes to specific work items or pull requests by using the Follow feature. This feature provides targeted notifications on a case-by-case basis, helping you track items that matter most to your work without information overload.

For automated notifications based on broader criteria, see [Manage personal notifications](../../organizations/notifications/manage-your-personal-notifications.md). For example, you can create subscriptions to automatically receive notifications whenever work items you created or are assigned to you're modified. 

> [!NOTE]  
> Notification subscriptions provide automated notifications based on criteria you specify for [yourself](../../organizations/notifications/manage-your-personal-notifications.md), a team, or a project. You can create subscriptions with field criteria to receive notifications based on various templates. The Follow feature complements subscriptions by providing immediate, item-specific tracking.
>
> ![Work item notification templates](media/follow-work/work-item-notifications.png) 

## Prerequisites

[!INCLUDE [prerequisites-work-items](../includes/prerequisites-work-items.md)]

## Follow a work item

To track changes to a specific work item, select the :::image type="icon" source="../media/icons/follow-icon.png" border="false"::: **Follow** icon. This action configures the system to send you notifications when changes occur to the work item.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing the Work item form with Follow icon control.](media/follow-work/follow-work-item.png) 

### Configure notification settings

You can customize when you receive notifications by selecting the :::image type="icon" source="../media/icons/gear_icon.png" border="false"::: **Settings** icon next to the Follow button.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing the Work item form notification settings dialog for follow.](media/follow-work/notification-settings-for-follow.png) 

Choose from the following notification options:

- **Subscribed** (default): Receive notifications for any change to the work item
- **Not Subscribed**: Receive notifications only when you're @mentioned
- **Custom**: Receive notifications when specific fields change:
  - **State**: When the work item status changes
  - **Assigned To**: When the assignee changes  
  - **Iteration Path**: When the iteration/sprint changes

### What triggers notifications

You receive notifications when team members make the following changes:
- Add comments or update the discussion
- Modify field values (title, description, priority, and so on)
- Add or remove attachments
- Change work item relationships (links, parent/child)
- Update tags or other metadata

> [!NOTE]
> You don't receive notifications for changes you make yourself.

Notifications are sent to your preferred email address. To change your email preferences, see [Change your preferred email address](../../organizations/notifications/change-email-address.md).

To stop following a work item, select the :::image type="icon" source="../media/icons/following-icon.png" border="false"::: **Following** icon.
 
<a id="follow-pr"></a>

## Follow a pull request 

To track changes to a specific pull request, select the :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **More actions** menu for the pull request, then choose :::image type="icon" source="../media/icons/follow-icon.png" border="false"::: **Follow**. This action configures notifications for changes to the pull request.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing the Pull Request context menu with Follow icon option.](media/follow-work/follow-pull-request.png) 

### Pull request notification triggers

You receive notifications when team members make these changes to the pull request:
- Add comments or participate in discussions
- Update the pull request description or title
- Add or remove reviewers
- Approve or request changes during review
- Add or remove attachments
- Update the source or target branch
- Complete or abandon the pull request

> [!NOTE]
> Like work items, you don't receive notifications for changes you make yourself.

Notifications are sent to your preferred email address. To modify your email preferences, see [Change your preferred email address](../../organizations/notifications/change-email-address.md).

To stop following a pull request, open the **More actions** menu and select :::image type="icon" source="../media/icons/following-icon.png" border="false"::: **Following**. 

## Manage work items you're following  

You can review and manage all work items you chose to follow from multiple locations in Azure DevOps.

::: moniker range="<=azure-devops"

### View followed work items via Queries

1. Go to **Boards** > **Queries**.
2. Select **All**.
3. Under **My Queries**, choose **Followed work items**.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing Boards>Queries>All>Followed work items navigation.](media/follow-work/following-work-items-vert.png)   

This view displays all items you're following across all projects and provides these capabilities:
- **Refresh** the view to see latest updates
- **Add or remove columns** to customize the display
- **Sort** by any column (title, state, assigned to, and so on)
- **Filter** results by text, tags, or other criteria
- **Open work items** in the work item pane for quick review
- **Enter full-screen mode** for detailed analysis

### View followed work items via Work Items hub

You can also access followed items through **Boards** > **Work Items** and select the **Following** pivot.

> [!div class="mx-imgBorder"]  
> ![Screenshot showing Boards>Work Items and pivot to Following.](media/follow-work/open-work-items-vert.png)   

This view provides a streamlined interface focused specifically on items you're following.

::: moniker-end   

## Query work items you're following

Use the **@Follows** macro in work item queries to create custom filtered lists of items you're following, combined with other query criteria.

### Basic @Follows query

The following example shows how to query for active work items you're following across all projects:

1. Create a new query or edit an existing one.
2. Add a clause using the **ID** field.
3. Set the operator to **In**.  
4. Enter **@Follows** as the value.

:::image type="content" source="media/follow-work/query-follows.png" alt-text="Screenshot showing Query Editor with ID In @Follows query clause.":::

### Advanced @Follows queries

You can combine the @Follows macro with other criteria for more specific results:

**Example 1: High-priority items you're following**
- **ID** In **@Follows** 
- **AND Priority** = **1**

**Example 2: Followed items assigned to your team**
- **ID** In **@Follows**
- **AND Assigned To** In Group **[Your Team Name]**

**Example 3: Recently updated followed items**
- **ID** In **@Follows**
- **AND Changed Date** >= **@Today - 7** (items changed in last 7 days)

### Save and share @Follows queries

You can save these queries for quick access and share them with team members. While the @Follows macro is personal to you, sharing the query structure helps teams create consistent follow-up workflows.

## Next step

> [!div class="nextstepaction"]
> [Add and update work items](../backlogs/add-work-items.md) 

## Frequently asked questions

### Q: Can I add someone else to follow a work item or PR?

**A:** No, you can't add another team member to follow a work item or pull request. But, you can help them set up notifications based on specific criteria, such as when work items are created or modified, or pull requests are created. For more information, see [Manage team notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md).

## Related content

- [Query for work items in Azure Boards](../queries/query-work-items.md)
- [Create and save managed queries with Query Editor](../queries/using-queries.md)
- [View and configure notifications](../../organizations/notifications/about-notifications.md)
- [Manage personal notifications](../../organizations/notifications/manage-your-personal-notifications.md)
- [View work item history](../queries/history-and-auditing.md)
