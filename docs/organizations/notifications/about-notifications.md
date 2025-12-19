---
title: About Notifications
description: Configure and manage notifications in Azure DevOps organizations, stay informed, and improve collaboration within development teams.
ms.subservice: azure-devops-notifications
toc: show
ms.custom: quarterly-update, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: concept-article
ms.date: 05/08/2025
#customer intent: As a developer, I want to configure and manage notifications in Azure DevOps organizations so I can stay informed and improve collaboration within my development teams.
---

# About notifications

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Notifications in Azure DevOps keep you and your team informed about project activity, including changes to work items, code reviews, pull requests, source control files, and builds. When an event occurs in Azure DevOps, the event content is compared with every subscription of that event type. A notification is generated for every subscription/event match that meets the filter conditions. Notifications are delivered through email or service hook, based on the delivery properties defined in the subscription. 

For more information, see the list of [supported event types](oob-supported-event-types.md) and [learn more about email delivery options](concepts-email-recipients.md).

## Notification types

There are four types of notifications that you can manage in Azure DevOps. The following table lists the types and the permissions or role required to manage each notification.

|Notification type |Role required to manage |
|------------------|------------------------|
| [Personal notifications](#personal-notifications) | User |
| [Team notifications](#team-and-project-level-notifications) | Team Administrator, or member of the Project Administrators group or Project Collection Administrators group |
| [Project notifications](#team-and-project-level-notifications) | Member of the Project Administrators group or Project Collection Administrators group |
| [Global notifications](#global-notifications) | Member of the Project Collection Administrators group |

### Personal notifications

There are several ways you can manage your personal notifications:

- View your notifications
- Set alerts only for yourself
- View and edit all subscriptions
- Add a custom subscription
- Unsubscribe or opt out of a team or project subscription

For more information, see [Manage your personal notifications](manage-your-personal-notifications.md).

### Team and project-level notifications

For team and project-level notifications, you can create a subscription for the following categories and templates:

|Category |Templates |
|---------|----------|
| **Build** | _Build completes_, _Build fails_, <br> _Status changes for legacy XAML build controller or agent_, <br> _Quality changes for legacy XAML build_ |
| **Code (Git)** | _Commit pushed_, _Comment added to pull request_, <br> _Pull request created or updated_, <br> _Pull request in review by my team updated_ |
| **Code (TFVC)** | _Code checked in_, _Code checked in with policy override_, <br> _Changes to code review_, _File in specific path checked in_, <br> _File with specific extension checked in_  |
| **Pipelines** | _Run stage waiting for approval_, <br> _Run stage waiting for manual validation_ |
| **Work** | _Work item created_, _Work item changed_, _Work item deleted_, <br> _Work item restored_, _Work item moved from this team project_ |
| **Artifacts** | _Package changed_ |
| **Extension management** | _Extension modified_ |
| **Release** | _Deployment approval pending_, _Deployment completes_, <br> _Release creation request fails_, <br> _Manual intervention for deployment pending_ |

> [!NOTE]
> You can also create a custom notification subscription for pull requests created or updated in a **draft state**. For more information, see [Custom notification subscription for draft pull requests](/azure/devops/release-notes/2020/repos/sprint-165-update#custom-notification-subscription-for-draft-pull-requests).

For more information, see [Manage team, group, and global notifications](manage-team-group-global-organization-notifications.md).

### Global notifications

Global notifications apply to all **projects** defined for an organization or collection.

## Subscriptions

A notification **subscription** is associated with a [supported event type](oob-supported-event-types.md). The subscription includes a set of filters that are used to match events. For example, a subscription for a _work item created_ event might include a filter that matches only the work item type, _Bug_. Or, a subscription for a _pull request created_ event might include a filter for a specific _repository and branch_.

### Default email subscriptions

Many useful email subscriptions are predefined and automatically enabled in the system. These resources and are referred to as **default subscriptions**. Default subscriptions provide out-of-box (OOB) support for the most common notification scenarios. For more information, see the list of [available default subscriptions](oob-built-in-notifications.md).

An organization or team administrator can choose which of the default subscriptions to make available to their users. For more information, see [Manage notifications for a team, project, or organization](manage-team-group-global-organization-notifications.md).

Individual users can choose to opt out of any default subscription while other team members remain subscribed. For more information, see [Manage your personal notifications](manage-your-personal-notifications.md).

The **Default subscriptions** section in Azure DevOps lists all default global subscriptions available. The globe icon :::image type="icon" source="media/oob-notification.png"::: indicates a default or OOB subscription. For more information, see [Default and supported notifications](./oob-built-in-notifications.md).

Members of the **Project Collection Administrators** group have permission to enable/disable any default subscription in this view. Any member of the **Project Collection Valid Users** group has permission to view the details of the default subscription. The view and enable options are available in the **More options** menu (**...**) associated with each individual subscription.

:::image type="content" source="media/view-organization-notification-default-subscriptions.png" alt-text="Screenshot of the organization-level notifications page showing the Default subscriptions section.":::

### Custom email subscriptions

Organization or team administrators can create **Custom email subscriptions** that apply to all members of the organization or team. For more information, see [Manage notifications for a team, project, or organization](./manage-team-group-global-organization-notifications.md). To learn more about querying with group clauses, see [Define a work item query](../../boards/queries/using-queries.md#group-clauses).

Users can also create custom subscriptions, which apply only to them. For more information, see [Manage your personal notifications](manage-your-personal-notifications.md).

### Custom service hook subscriptions

Use **service hooks subscriptions** to integrate with third-party services. When an Azure DevOps event matches a service hook subscription, the third-party service receives a notification. For example, when an Azure DevOps build completes, a notification goes to a Slack channel with links back to the build artifact in Azure DevOps. For more information, see [Integrate with third party services](integrate-third-party-services.md).

#### Subscribers

The **Subscribers** section begins with an empty identity search box. Enter any group, team, or individual to view the list of subscriptions associated with the specified identity.

You can find all notification subscriptions for the specified identity in this view. Management options are available from the **More options** menu (**...**) associated with each subscription. The globe icon :::image type="icon" source="media/oob-notification.png"::: indicates a default or OOB subscription. 

:::image type="content" source="media/view-organization-notification-subscribers.png" alt-text="Screenshot of organization-level notifications page showing the Subscribers list section.":::

#### Statistics

The **Statistics** section shows the most active notification subscriptions and the top event initiators (group, team, or individual). The statistics are for the current day only and the values reset at 00:00 UTC. One benefit of viewing the statistics is the ability to identify unintended high-volume subscriptions or event initiators.

:::image type="content" source="media/view-organization-notification-stats.png" alt-text="Screenshot of organization-level notifications page showing the Statistics section.":::

#### Settings

Manage global-level **Settings**, such as delivery preferences. The **Settings** section allows organization-level management by any member of the **Project Collection Administrators** group. All teams and groups inherit the _Default delivery option_ setting, which isn't explicitly set at the team or group level.

:::image type="content" source="media/view-organization-notification-settings.png" alt-text="Screenshot of organization-level notifications page showing the Settings section.":::

For more information, see [Manage team, group, and global notifications](manage-team-group-global-organization-notifications.md).

## Permissions for notifications

There are no UI permissions associated with managing email notifications or alerts. Instead, you can manage access by using the [TFSSecurity command line tool](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions).

- By default, members of the project level **Contributors** group can subscribe to alerts for themselves.
- Members of the **Project Collection Administrators** group, or users who have **Edit collection-level information** permission, can set alerts for others or for a team, within that collection.
- Members of the **Project Administrators** group, or users who have **Edit project-level information** permissions can set alerts in that project for others or for a team.

## Preferred email address

By default, the preferred contact email address for your organization profile receives notifications. This email address is usually the same address you use to sign into Azure DevOps. You can manage this email address from your organization preferences profile page. 

If you're enrolled in the Microsoft Entra profile information preview, your profile information is pulled directly from Microsoft Entra and can't be edited. For more information, see [Set your preferences](../settings/set-your-preferences.md).

> [!NOTE]
> Your preferred contact email address applies to all your organizations and can't be changed on a per-organization basis.

## Related content

- [Default and supported notifications](oob-built-in-notifications.md)
- [Query with group clauses](../../boards/queries/using-queries.md#group-clauses)
- [FAQs](faq-notifications.yml)
- [Default permissions and access set for collaboration tools](../../project/wiki/manage-readme-wiki-permissions.md?toc=/azure/devops/organizations/notifications/toc.json&bc=/azure/devops/organizations/notifications/breadcrumb/toc.json)
- [Azure DevOps data protection overview](../../organizations/security/data-protection.md?toc=/azure/devops/organizations/notifications/toc.json&bc=/azure/devops/organizations/notifications/breadcrumb/toc.json)