---
title: Events, subscriptions, and notifications
titleSuffix: Azure DevOps 
description: Learn about events and subscriptions in Azure DevOps Services and TFS, and how they are used to create notifications to users
ms.technology: devops-collab
ms.prod: devops
ms.manager: jillfra
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/10/2018
monikerRange: '>= tfs-2017'
---

# Events, subscriptions, and notifications

[!INCLUDE [version-vsts-tfs-2017-on](../boards/_shared/version-vsts-tfs-2017-on.md)]

> [!NOTE]
> This topic applies to Azure DevOps Services, TFS 2017 Update 1, and later versions. If you work from an on-premises TFS 2017 or earlier versions, see [Set alerts, get notified when changes occur](../work/track/alerts-and-notifications.md). For on-premises TFS, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts) for team members to see the Notifications option from their organization menu and to receive notifications.

## Events

**Events** are raised when certain actions occur, like when a work item is created or a pull request is voted on. See the list of [supported event types](oob-supported-event-types.md).

## Subscriptions

A notification **subscription** is associated with a [supported event type](oob-supported-event-types.md) and includes a set of filters which are used to match events with the subscription. For example, a subscription for a _work item created_ event might include a filter which matches only the work item type: _Bug_, or a subscription for a _pull request created_ event might include a filter for a specific _repository and branch_.

### Default email subscriptions

Many useful email subscriptions are pre-defined and enabled by default in the system. These are known as **default subscriptions**. Default subscriptions are intended to provide out-of-box support for the most common notification scenarios. See the list of [available default subscriptions](oob-built-in-notifications.md).

An organization or team administrator can choose which of the default subscriptions to make available to their users. Learn how to [manage team notifications](howto-manage-team-notifications.md) or [manage organization level notifications](howto-manage-organization-notifications.md).

Individual users can choose to opt out of any default subscription while other team members continue to be subscribed. Learn how to [manage personal notification subscriptions](howto-manage-personal-notifications.md).

### Custom email subscriptions

**Custom email subscriptions** can be created by organization or team administrators which apply to all members of the organization or team. Learn how to [manage team notifications](howto-manage-team-notifications.md) or [manage organization notifications](howto-manage-organization-notifications.md).

Individuals can also create custom subscriptions which apply only to them. Learn how to [manage personal subscriptions](howto-manage-personal-notifications.md).

### Custom service hook subscriptions

**Service hooks subscriptions** can be used to integrate with third party services. When an Azure DevOps Services event matches a service hook subscription, a notification is delivered to the third party service. For example, when an Azure DevOps Services build completes, a notification can be delivered to a Slack channel with links back to the build artifact in Azure DevOps Services. To learn more, see [Integrating with third party services](howto-integrate-third-party-services.md).

## Notifications

When an **event** occurs in Azure DevOps Services or TFS, its content is compared with every **subscription** of that event type. If the subscription's filter conditions are met by the event, a notification is generated. **A notification is generated for every subscription/event match.**

Each notification is then delivered based on the delivery properties defined in the subscription (either as an email or as a service hook). [Learn more about email delivery options](concepts-email-recipients.md).
