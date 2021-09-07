---
title: Get started with notifications in Azure DevOps
description: Understand how notifications or alerts are managed in Azure DevOps.
ms.technology: devops-collab
toc: show
ms.custom: quarterly-update
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 01/14/2021
monikerRange: '<= azure-devops'
---

# About notifications

[!INCLUDE [version-all](../includes/version-all.md)]

Notifications help you and your team stay informed about activity that occurs within your projects in Azure DevOps. You can get notified when changes occur to the following items:

- work items
- code reviews
- pull requests
- source control files
- builds

For example, you can get notified whenever you or your team resolves a bug or are assigned a work item.

Notifications get sent based on set up rules or subscriptions.
Subscriptions arise from the following instances:

- Out-of-the-box (OOB) or default
- Created by an administrator for a team or group that you belong to
- Created by you

## Notification types

There are four types of notifications that you can manage in Azure DevOps. See the following table of the notification types and required permission or role to manage.

| Notification type                           | Role required to manage                                     |
|---------------------------------------------|-------------------------------------------------------|
|[Personal notifications](#personal-notifications)           | User     |
|[Team notifications](#team-and-project-level-notifications)                          | Team Administrator or member of the Project Administrators group or Project Collection Administrators group                                 |
|[Project notifications](#team-and-project-level-notifications)                      | Member of the Project Administrators group or Project Collection Administrators group |
|[Global notifications](#global-notifications)| Member of the Project Collection Administrators group |

### Personal notifications

You can manage your personal notifications in the following manner.

- View your notifications
- Set alerts just for yourself
- View and edit all subscriptions
- Add a custom subscription
- Unsubscribe or opt out of a team or project subscription

For more information, see [Manage your personal notifications](manage-your-personal-notifications.md).

### Team and project-level notifications

You can create a subscription for the following categories and select from the following templates.

|Category  |Template options  |
|---------|---------|
|Build | <ul><li>a build completes</li><li>a build fails</li><li>a legacy XAML build controller or agent's status changes</li><li>a legacy XAML build's quality changes</li></ul>   |
|Code (Git)  |  <ul><li>a commit is pushed</li><li>a pull request is created or updated</li><li>a pull request my team is a reviewer on is updated</li><li>a comment is made on a pull request</li></ul>  |
|Code (TFVC)    | <ul><li>code is checked in</li><li>code is checked in with a policy override</li><li>a file with a specific extension is checked in</li><li>a file under a specific path is checked in</li><li>any code review changes</li></ul>  |
|Pipelines | <ul><li>run stage waiting for approval</li><li>run stage waiting for Manual validation</li></ul>
|Work   | <ul><li>a work item is created</li><li>a work item is changed</li><li>a work item is deleted</li><li>a work item is restored</li><li>a work item is moved from this team project</li></ul>    |
|Artifacts    | <ul><li>a package is changed</li></ul>       |
|Extension management | <ul><li>an extension is modified</li></ul>   |
|Release | <ul><li>an approval for a deployment is pending</li><li>a deployment is completed</li><li>a request for release creation failed</li><li>a manual intervention for a deployment is pending</li></ul> |

:::moniker range=">= azure-devops-2020"

> [!NOTE]
> You can also create a custom notification subscription for pull requests that are created or updated in a **draft state**. For more information, see [Custom notification subscription for draft pull requests](/azure/devops/release-notes/2020/repos/sprint-165-update#custom-notification-subscription-for-draft-pull-requests).

:::moniker-end

For more information, see [Manage team, group, and global notifications](manage-team-group-global-organization-notifications.md).

### Global notifications

Global notifications apply to all **projects** defined for an organization or collection.

#### Default subscription

The **Default subscriptions** tab lists all default global subscriptions available. The ![globe](media/oob-notification.png) on a notification subscription indicates the subscription is a default subscription. View all [default notification subscriptions](./oob-built-in-notifications.md).

Members of the **Project Collection Administrators** group have permission to enable/disable any default subscription in this view. Any member of the **Project Collection Valid Users** group has permission to view the details of the default subscription. The view and enable options are available in the context menu (`...`) associated with each individual subscription.

   :::image type="content" source="media/view-organization-notification-default-subscriptions.png" alt-text="Screenshot of the organization-level notifications page: Default subscriptions tab.":::

#### Subscribers

The **Subscribers** section begins with an empty identity search box. Enter any group, team, or individual to view the list of subscriptions associated with the specified identity.

All notification subscriptions for the chosen identity are listed in this view. Management options are available from the context menu (`...`) associated with each subscription. The ![globe](media/oob-notification.png) on subscription row indicates a default subscription.

   :::image type="content" source="media/view-organization-notification-subscribers.png" alt-text="Screenshot of organization-level notifications page: Subscribers list.":::

#### Statistics

The **Statistics** section shows the most active notification subscriptions and the top event initiators (group, team, or individual). The statistics are only for the current day and reset at 00:00 UTC. A benefit of these statistics is identifying unintended high volume subscriptions or event initiators.

   :::image type="content" source="media/view-organization-notification-stats.png" alt-text="Screenshot of organization-level notifications page, Statistics section.":::

#### Settings

Manage global-level **Settings**, such as delivery preferences.

The **Settings** section allows organization-level management by any member of the **Project Collection Administrators** group. All teams and groups inherit the _Default delivery option_ setting. This setting, _Default delivery option_,  isn't explicitly set at the team or group level.

   :::image type="content" source="media/view-organization-notification-settings.png" alt-text="Screenshot of organization-level notifications page: Settings.":::

For more information, see [Manage team, group, and global notifications](manage-team-group-global-organization-notifications.md).

## Permissions for notifications

There are no UI permissions associated with managing email notifications or alerts. Instead, they can be managed using the [TFSSecurity command line tool](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions).

- By default, members of the project level **Contributors** group can subscribe to alerts for themselves.
- Members of the **Project Collection Administrators** group, or users who have **Edit collection-level information** permission, can set alerts for others or for a team, within that collection.
- Members of the **Project Administrators** group, or users who have **Edit project-level information** permissions can set alerts in that project for others or for a team.

## Preferred email address

The preferred email address for your organization profile gets notifications, by default. It's typically the email address you signed into Azure DevOps with. You can manage this email address via your organization preferences profile page.

> [!NOTE]
> Your preferred email address applies across all of your organizations and cannot be changed on a per-organization basis.

::: moniker range=">= tfs-2017 < azure-devops"

## Integrating with other services

If your team uses an external service to collaborate&mdash;such as Campfire, Flowdock, or Slack&mdash;you can configure notifications to be sent to these services. These services are supported out of the box:

- [Campfire](../service-hooks/overview.md?bc=%252fazure%252fdevops%252fnotifications%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fnotifications%252ftoc.json) 
- [Flowdock](../service-hooks/overview.md?bc=%252fazure%252fdevops%252fnotifications%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fnotifications%252ftoc.json) 
- [HipChat](../service-hooks/overview.md?bc=%252fazure%252fdevops%252fnotifications%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fnotifications%252ftoc.json) 
- [Slack](../service-hooks/services/slack.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)  
- [Microsoft Teams](../service-hooks/services/teams.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)

You can also use a third-party service like Zapier to send notifications to hundreds of other services. Learn more about [Zapier and Azure DevOps Services integration](../service-hooks/overview.md).

::: moniker-end

::: moniker range="< azure-devops"

## On-premises SMTP server

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

::: moniker-end

## Related articles

- [Default and supported notifications](oob-built-in-notifications.md)
- [Query with group clauses](../boards/queries/using-queries.md#group-clauses)
- [FAQs](faq-notifications.yml)
- [Default permissions and access set for collaboration tools](../project/wiki/wiki-readme-permissions.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)
- [Azure DevOps data protection overview](../organizations/security/data-protection.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)
