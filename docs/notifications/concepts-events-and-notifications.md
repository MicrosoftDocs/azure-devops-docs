---
title: Events, subscriptions, and notifications
titleSuffix: Azure DevOps 
description: Learn about events and subscriptions in Azure DevOps, and how they're used to create notifications to users.
ms.technology: devops-collab
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 01/14/2021
monikerRange: '>= tfs-2017'
---

# Events, subscriptions, and notifications

[!INCLUDE [version-vsts-tfs-2017-on](../includes/version-tfs-2017-through-vsts.md)]

This article describes the different actions or operations that generate email notifications. 

## Events

Certain actions create **Events**, like when a work item gets created or a pull request is voted on. See the list of [supported event types](oob-supported-event-types.md).

## Subscriptions

A notification **subscription** is associated with a [supported event type](oob-supported-event-types.md). The subscription includes a set of filters used to match events. For example, a subscription for a _work item created_ event might include a filter that matches only the work item type: _Bug_. Or, a subscription for a _pull request created_ event might include a filter for a specific _repository and branch_.

### Default email subscriptions

Many useful email subscriptions are pre-defined and enabled by default in the system. They're known as **default subscriptions**. Default subscriptions provide out-of-box support for the most common notification scenarios. See the list of [available default subscriptions](oob-built-in-notifications.md).

An organization or team administrator can choose which of the default subscriptions to make available to their users. Learn how to [manage team and organization notifications](manage-team-group-global-organization-notifications.md).

Individual users can choose to opt out of any default subscription while other team members continue to be subscribed. Learn how to [manage personal notification subscriptions](manage-your-personal-notifications.md).

### Custom email subscriptions

Organization or team administrators can create **Custom email subscriptions** that apply to all members of the organization or team. Learn how to [manage team and organization notifications](./manage-team-group-global-organization-notifications.md). To learn more about querying with group clauses, see [Create managed queries](../boards/queries/using-queries.md#group-clauses).

Individuals can also create custom subscriptions, which apply only to them. Learn how to [manage personal subscriptions](manage-your-personal-notifications.md).

### Custom service hook subscriptions

**Service hooks subscriptions** can be used to integrate with third-party services. When an Azure DevOps event matches a service hook subscription, the third-party service receives a notification. For example, when an Azure DevOps build completes, a notification goes to a Slack channel with links back to the build artifact in Azure DevOps. See [Integrating with third party services](integrate-third-party-services.md).

## Notifications

When an **event** occurs in Azure DevOps, its content is compared with every **subscription** of that event type. If the subscription's filter conditions are met by the event, a notification is generated. **A notification is generated for every subscription/event match.**

Each notification is then delivered based on the delivery properties defined in the subscription (either as an email or as a service hook). [Learn more about email delivery options](concepts-email-recipients.md).
