---
title: About notifications
description: Learn how to configure and manage notifications in Azure DevOps organizations to stay informed and improve collaboration within development teams.
ms.subservice: azure-devops-notifications
toc: show
ms.custom: quarterly-update, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 02/13/2023
monikerRange: '<= azure-devops'
---

# About notifications

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Notifications in Azure DevOps keep you and your team informed about project activity, including changes to work items, code reviews, pull requests, source control files, and builds. When an event occurs in Azure DevOps, its content is compared with every subscription of that event type, and a notification is generated for every subscription/event match that meets the filter conditions. Notifications are delivered through email or service hook, based on the delivery properties defined in the subscription. 

For more information, see the list of [supported event types](oob-supported-event-types.md) and [learn more about email delivery options](concepts-email-recipients.md).

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
- Set alerts only for yourself
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

## Subscriptions

A notification **subscription** is associated with a [supported event type](oob-supported-event-types.md). The subscription includes a set of filters used to match events. For example, a subscription for a _work item created_ event might include a filter that matches only the work item type, _Bug_. Or a subscription for a _pull request created_ event might include a filter for a specific _repository and branch_.

### Default email subscriptions

Many useful email subscriptions are predefined and enabled by default in the system. They're known as **default subscriptions**. Default subscriptions provide out-of-box support for the most common notification scenarios. See the list of [available default subscriptions](oob-built-in-notifications.md).

An organization or team administrator can choose which of the default subscriptions to make available to their users. Learn how to [manage team and organization notifications](manage-team-group-global-organization-notifications.md).

Individual users can choose to opt out of any default subscription while other team members remain subscribed. Learn how to [manage personal notification subscriptions](manage-your-personal-notifications.md).

The **Default subscriptions** tab lists all default global subscriptions available. The ![globe](media/oob-notification.png) on a notification subscription indicates the subscription is a default subscription. View all [default notification subscriptions](./oob-built-in-notifications.md).

Members of the **Project Collection Administrators** group have permission to enable/disable any default subscription in this view. Any member of the **Project Collection Valid Users** group has permission to view the details of the default subscription. The view and enable options are available in the context menu (`...`) associated with each individual subscription.

   :::image type="content" source="media/view-organization-notification-default-subscriptions.png" alt-text="Screenshot of the organization-level notifications page: Default subscriptions tab.":::

### Custom email subscriptions

Organization or team administrators can create **Custom email subscriptions** that apply to all members of the organization or team. Learn how to [manage team and organization notifications](./manage-team-group-global-organization-notifications.md). To learn more about querying with group clauses, see [Create managed queries](../../boards/queries/using-queries.md#group-clauses).

Individuals can also create custom subscriptions, which apply only to them. Learn how to [manage personal subscriptions](manage-your-personal-notifications.md).

### Custom service hook subscriptions

Use **service hooks subscriptions** to integrate with third-party services. When an Azure DevOps event matches a service hook subscription, the third-party service receives a notification. For example, when an Azure DevOps build completes, a notification goes to a Slack channel with links back to the build artifact in Azure DevOps. See [Integrating with third party services](integrate-third-party-services.md).


#### Subscribers

The **Subscribers** section begins with an empty identity search box. Enter any group, team, or individual to view the list of subscriptions associated with the specified identity.

You can find all notification subscriptions for the chosen identity in this view. Management options are available from the context menu (`...`) associated with each subscription. The ![globe](media/oob-notification.png) on subscription row indicates a default subscription.

   :::image type="content" source="media/view-organization-notification-subscribers.png" alt-text="Screenshot of organization-level notifications page: Subscribers list.":::

#### Statistics

The **Statistics** section shows the most active notification subscriptions and the top event initiators (group, team, or individual). The statistics are only for the current day and reset at 00:00 UTC. A benefit of these statistics is identifying unintended high-volume subscriptions or event initiators.

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

::: moniker range=" < azure-devops"


## Integrating with other services

If your team uses an external service to collaborate&mdash;such as Campfire or Slack&mdash;you can configure notifications for these services. We support the following out of the box services.

- [Campfire](../../service-hooks/overview.md?bc=%252fazure%252fdevops%252fnotifications%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fnotifications%252ftoc.json) 
- [HipChat](../../service-hooks/overview.md?bc=%252fazure%252fdevops%252fnotifications%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fnotifications%252ftoc.json) 
- [Slack](../../service-hooks/services/slack.md?toc=/azure/devops/organizations/notifications/toc.json&bc=/azure/devops/organizations/notifications/breadcrumb/toc.json)  
- [Microsoft Teams](../../service-hooks/services/teams.md?toc=/azure/devops/organizations/notifications/toc.json&bc=/azure/devops/organizations/notifications/breadcrumb/toc.json)

You can also use a third-party service like Zapier to send notifications to hundreds of other services. Learn more about [Zapier and Azure DevOps Services integration](../../service-hooks/overview.md).

::: moniker-end

::: moniker range="< azure-devops"

## On-premises SMTP server

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

::: moniker-end

## Related articles

- [Default and supported notifications](oob-built-in-notifications.md)
- [Query with group clauses](../../boards/queries/using-queries.md#group-clauses)
- [FAQs](faq-notifications.yml)
- [Default permissions and access set for collaboration tools](../../project/wiki/wiki-readme-permissions.md?toc=/azure/devops/organizations/notifications/toc.json&bc=/azure/devops/organizations/notifications/breadcrumb/toc.json)
- [Azure DevOps data protection overview](../../organizations/security/data-protection.md?toc=/azure/devops/organizations/notifications/toc.json&bc=/azure/devops/organizations/notifications/breadcrumb/toc.json)
