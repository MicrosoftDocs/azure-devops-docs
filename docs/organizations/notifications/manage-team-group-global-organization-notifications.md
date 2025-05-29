---
title: Manage Notifications - Team, Project, Organization
titleSuffix: Azure DevOps
description: Configure email notifications for your team, project, or organization when changes occur to source code, git, work items, and builds in Azure DevOps.
ms.subservice: azure-devops-notifications
ms.assetid: 6edc44d0-2729-46f5-8108-c8a5160a6a7a
ms.custom: cross-project
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.date: 05/14/2025
monikerRange: '<= azure-devops'
#customer intent: As a developer, I want to set notifications for my team, project, or organization, so I can receive email about changes to source code, git, work items, and builds in Azure DevOps.
---

# Manage notifications for your team, project, or organization

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can manage email notifications for your team, project, organization, or collection and receive notifications when changes occur to work items, code reviews, pull requests, source control files, and builds.

For example, when a high priority work item is assigned to your team's area path, a notification email is sent to the team. For more information, see [Notification types](about-notifications.md#notification-types).

## Prerequisites

[!INCLUDE [prerequisites-notifications](includes/prerequisites-notifications.md)]

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

## Create email subscription

A subscription lets you control the activity events that trigger notifications and how the recipients receive the messages. For more information, see [notification types](about-notifications.md#notification-types).

1. Sign in to your organization (`https://dev.azure.com/<organization>`).

1. Select **Project settings** > **Notifications**:

    :::image type="content" source="media/nav-team-notifications-hub-newnav.png" border="false" alt-text="Screenshot of the Project Settings, Team Notifications page in Azure DevOps." lightbox="media/nav-team-notifications-hub-newnav.png":::

1. On the **Notifications** page for the project, select **New subscription**:

   :::image type="content" source="media/new-subscription-newnav.png" alt-text="Screenshot that shows how to select the New subscription option in Azure DevOps." lightbox="media/new-subscription-newnav.png":::

1. Select the **Category** and the **Template** type to use in the new subscription, and then select **Next**. For a list of supported templates, see [Default and supported notifications](oob-built-in-notifications.md).

   ::: moniker range="azure-devops"

   :::image type="content" source="media/new-sub-page-preview.png" alt-text="Screenshot that shows how to select the event category and template page.":::

   ::: moniker-end
   ::: moniker range="< azure-devops"

   :::image type="content" source="media/new-sub-page.png" alt-text="Screenshot that shows how to select the event category and template in earlier versions of Azure DevOps.":::

   ::: moniker-end

1. Enter a **Description** to help you identify the subscription later:

   :::image type="content" source="media/new-sub-description.png" alt-text="Screenshot that shows how to add a description to help you identify the subscription later.":::

1. Identify which team members should receive a notification:

   ::: moniker range="azure-devops"

   :::image type="content" source="media/new-sub-team-delivery-by-role-preview.png" alt-text="Screenshot that shows how to select team members and roles to receive notifications." lightbox="media/new-sub-team-delivery-by-role-preview.png":::

   ::: moniker-end
   ::: moniker range="< azure-devops"

   :::image type="content" source="media/new-sub-team-delivery-by-role.png" alt-text="Screenshot that shows how to select team members and roles for notifications in earlier versions of Azure DevOps." lightbox="media/new-sub-team-delivery-by-role.png":::

   ::: moniker-end

   1. Expand the **Deliver to** dropdown list and select the delivery option for the notification:

      - **Members of \<Name> Team by role**: Only certain team members associated with the event are notified. For example, for work item changes, you might want only the _Current Assignee_ of the work item to receive a notification.

      - **Team preference**: Use the team's default delivery preference. For more information, see [Manage delivery settings](#manage-global-delivery-settings).

      - **Custom email address**: Send email to a specified email address.

      - **Members of \<Name> Team**: Send individual email to each member of the team.
      
      ::: moniker range="azure-devops"
      - **SOAP**: Send email notifications to subscribers of the SOAP service.
      ::: moniker-end

   1. As needed, expand the **Roles** dropdown list and select the checkbox for any applicable role for the message recipients.
   
      For the **Members of \<Name> Team by role** delivery option, the _Creator_ and _Reviewers_ roles have self-explanatory names. The name of the role matches closely with the role purpose. The other two roles need a bit more explanation:

      - The _Changed reviewers_ role applies to any reviewer who is added or deleted as a result of policies defined for the set of files. Suppose a push is made to a pull request and the push introduces a change to the _Task1.cs_ file. If the repo has a policy that requires Person A to review changes to the _Task1.cs_ file, then Person A has the _Changed reviewers_ role for that iteration of the pull request.
      
      - The _Reset reviewers_ role is related to the "Reset votes" policy. Suppose the same repo has the "Reset votes on new pushes" policy. Also, Person B is set as a required reviewer for the pull request, and they approve the PR. Because the repo defines the "Reset votes" policy, the vote for Person B is reset. As a result, Person B has the _Reset reviewers role_ for this iteration of the pull request.

   1. As needed, update the **Skip initiator** option.
   
      For certain activities, when you select the **Members of \<Name> Team by role** option, you can choose to have the user that initiated the activity receive a notification. This notification is controlled by the **Skip initiator** option. By default, the option is enabled (the box is checked), which means the user that starts the change isn't notified.

      > [!TIP]
      > If you don't want to receive a notification for an event you initiated, enable the **Skip initiator** option. For more information, see [Exclude yourself from notification emails for events that you initiate](exclude-self-from-email.md).

1. For the **Filter** option, specify whether you want to receive notifications for activity in **Any team project** or only **A specific team project**:

   :::image type="content" source="media/new-sub-scope.png" alt-text="Screenshot that shows how to specify the scope of the notifications, either any team project or only a specific team project.":::

1. As needed, use the **Filter criteria** section to configure conditional clauses for your notification conditions. For any fields that require a user as a value, such as **Created By**, enter the username or email address of the user.

   :::image type="content" source="media/new-sub-filter-conditions.png" alt-text="Screenshot that shows how to configure other filter criteria." lightbox="media/new-sub-filter-conditions.png":::

1. Select **Finish** to save the new subscription.

## Manage global delivery settings

Global notifications apply to all **projects** defined for an organization or collection. Choose to allow or block delivery of emails for all subscriptions owned by a team or a group. This value is a default setting that applies only if the team or group doesn't explicitly set the option. For more information, see [Global notifications](about-notifications.md#global-notifications).

::: moniker range="azure-devops"

> [!TIP]
> Azure DevOps doesn't support organization-wide notifications. An alternate approach is to specify an email distribution list that sends messages to your entire organization. You can also generate a banner with the [**az devops banner command**](../../organizations/settings/manage-banners.md) visible to all users when they sign in. For more information, see [Add and manage information banners in Azure DevOps](../../organizations/settings/manage-banners.md).

::: moniker-end
::: moniker range="azure-devops-2020"

> [!TIP]
> You can send an email to all collections in an application tier. For more information, see [Configure an SMTP server and customize email for alerts and feedback requests](/azure/devops/server/admin/setup-customize-alerts). You can also generate a banner to communicate with users without sending out mass emails. For more information, see [Add and manage information banners in Azure DevOps](../../organizations/settings/manage-banners.md).

::: moniker-end

[!INCLUDE [opt-out-notification](includes/opt-out-notification.md)]

## Related content

- [Set your notification preferences](../../organizations/settings/set-your-preferences.md)
- [Review default and supported notifications](oob-built-in-notifications.md)
- [Follow a specific work item](../../boards/work-items/follow-work-items.md)