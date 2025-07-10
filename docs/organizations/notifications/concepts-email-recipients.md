---
title: How Notification Email Recipients are Determined
titleSuffix: Azure DevOps 
description: Explore how email recipients are determined for notifications and events in Azure DevOps.
ms.subservice: azure-devops-notifications
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: concept-article
ms.date: 05/15/2025
monikerRange: '<= azure-devops'
ms.custom: sfi-image-nochange
#customer intent: As an Azure DevOps developer, I want to understand how email recipients are determined for notifications and events, so I can ensure users receive the correct messages.
---

# Determine recipients of notification emails

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Many factors determine the recipients of an email notification when an event matches a subscription. If you're unaware, these factors can result in your inbox receiving too many or too few emails. Learn about how the type of subscription, its delivery settings, delivery preferences, and other factors determine the set of recipients.

[!INCLUDE [note-ui-changes](includes/note-ui-changes.md)]

## Custom personal subscriptions

With custom personal subscriptions, emails are delivered to the **Preferred email address** of the user who owns the subscription, or to the email address configured on the subscription.

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

### Preferred email address on a personal subscription (default)

:::image type="content" source="media/email-personal-preferred.png" alt-text="Screenshot that shows how to configure the preferred email address for a personal subscription.":::

### Custom email address on a personal subscription

:::image type="content" source="media/email-personal-other.png" alt-text="Screenshot that shows how to configure a custom email address for a personal subscription.":::

## Delivery settings for teams and groups

Delivery settings control the default delivery behavior when the team or group is the recipient of a notification. Each subscription is configured with a delivery option that looks at the recipients' delivery settings.

You can manage subscriptions and delivery settings at the team level or organization level.

### Organization-level settings

In **Organization settings**, select **Global notifications** > **Subscribers** > \<Team> > **Delivery settings**.

:::image type="content" source="media/team-delivery-settings-new-ui.png" border="false" alt-text="Screenshot that shows how to configure team delivery settings for an organization." lightbox="media/team-delivery-settings-new-ui.png":::

Select from the following settings:

- **Deliver to email address**: Notifications are delivered to a specific email address.
- **Deliver to individual members**: Notifications are delivered to each member of the group or team. This setting is usually the default option. For more information, see [Team expansion](#team-and-group-expansion-for-email-recipients).
- **Do not deliver**: Notifications aren't delivered by default.

:::image type="content" source="media/email-team-delivery-settings.png" border="false" alt-text="Screenshot of the team Delivery settings dialog showing the 'Deliver to individual members' options selected.":::

If you don't explicitly choose delivery settings for a team or group, the settings are determined from the [delivery options set at the organization level](manage-team-group-global-organization-notifications.md). The default value is either **Deliver to individual members** or **Do not deliver**. 

> [!TIP]
> The delivery settings dialog doesn't indicate whether the current selection is explicitly set or inherited.

## Custom team and group subscription recipients

The recipients for a custom team or group subscription are determined by the subscription. For certain delivery options, the default delivery setting for the team is used to determine the set of recipients.

:::image type="content" source="media/email-team-delivery-options-new.png" border="false" alt-text="Screenshot that shows how to configure the email delivery options for a custom team or group subscription.":::

The following delivery options are available for a group or team subscription:

- **Members of team by role**: Recipients are members of the team or group that have one of the selected roles (for example, Work Item Assignee).
- **Team preference**: Recipients are determined by the delivery setting of the team or group (**Do not deliver**, **Preferred email address**, or **Members of team**).
- **Custom email address**: Recipient is the specified email address.
- **Members of team**: Recipients are all members of the team or group, except members who are opted out of the subscription. 
- **SOAP**: Similar to API Management, recipients are specified by adding their email addresses (subscribing) to the SOAP service.

> [!NOTE]
> The default delivery setting of each member is honored, including groups that are members of the team or group.

### Member of team by role

The email recipient list is determined by members that had a role in the event. For example, the user assigned the work item has the role **Assigned to (new)** while the identity that was assigned the work item has the role **Assigned to (previous)**. The full list of roles for each event type is shown in the [supported event types](oob-supported-event-types.md).

:::image type="content" source="media/email-team-delivery-option-role.png" border="false" alt-text="Screenshot that shows the email team delivery option role.":::

The **Skip initiator** option, which appears for most event types, controls whether the user or group that started the event should be explicitly excluded from the set of recipients. In general, this option should be enabled (On) because most users don't want to receive a notification about their own actions.

### Team preference

The delivery option is taken from the team's delivery setting and can be one of the following options:

- **Deliver to email address**: The email is delivered to the team's preferred email address.
- **Deliver to individual members**: The process is described in the following section, [Members of team_](#members-of-team).
- **Do not deliver**: No email is delivered.

:::image type="content" source="media/email-team-delivery-option-preference.png" border="false" alt-text="Screenshot that shows the email team delivery option preference.":::

The team's delivery setting value is displayed after the **Address** label and can't be changed.

### Custom email address

The notifications are sent to multiple custom email addresses, which are separated by semicolons.

:::image type="content" source="media/email-team-delivery-option-custom.png" border="false" alt-text="Screenshot that shows the custom email team delivery options.":::

### Members of team

The team or group membership is expanded to determine the email recipients. In the simple case, a team or group expands to a list of individuals and each user is included on the **To**: line of the resulting email. However, the results of the expansion can be complicated and are explained in more detail in the [team and group expansion](#team-and-group-expansion-for-email-recipients) section.

:::image type="content" source="media/email-team-delivery-option-members.png" border="false" alt-text="Screenshot showing the name of a team for email delivery.":::

## Default subscription recipients

The delivery option for a default subscription is usually one or more roles. You can't change these values. The roles and the **Skip initiator** option vary depending on the event type. For more information and a list of roles available for each event type, see [Supported event types](oob-supported-event-types.md).

:::image type="content" source="media/email-delivery-default-subscription.png" border="false" alt-text="Screenshot showing recipients for default subscriptions.":::

> [!NOTE]
> The _Skip initiator_ option isn't available for all event types.

## Team and group expansion for email recipients

When a team or group receives a notification, and either the subscription or delivery preference is for all members, the team must be "expanded" to determine the actual set of email recipients. This process is potentially recursive, and starts by looking at the team's direct members.

Only members who are **not** opted out of the subscription are considered for the final recipient list. Any member who's an individual user is added to the recipient list. 

Only Azure DevOps Services groups remain. For each group, the group's delivery preferences are examined:

- **Do not deliver**: No further evaluation is done on this group and the next member group is evaluated.
- **Deliver to email address**: The email address is added to the final recipient list.
- **Deliver to individual members**: The group is expanded (like its parent group) and the same rules for evaluating its members are followed.

### Scenarios

This section explores several example scenarios. The following examples use symbols to denote the types of team members:

- `I`: Individual user
- `T`: Nested team or group
- `E`: Email-enabled Microsoft Entra group

#### Team member enables "Do not deliver" setting

Example team members:

- The primary team has three members: users `I1` and `I2`, and nested team `T1`.
- Team `T1` has the **Do not deliver** setting enabled.

Only users `I1` and `I2` receive the notification messages at their preferred contact email address. Members of the nested team `T1` aren't notified.

#### Team member enables "Deliver to individual members" setting

Example team members:

- The primary team has three members: users `I1` and `I2`, and nested team `T1`.
- Team `T1` has two member users, `I2` and `I3`.
- User `I2` is a member of both the primary team and team `T1`.
- Team `T1` has the **Deliver to individual members** setting enabled.

Team `T1` is expanded to identify its members. `I1`, `I2`, and `I3` all receive the notification messages at their preferred contact email address.

#### Team contains nested group

Example team members:

- The primary team has three members: users `I1` and `I2`, and nested team `T1`.
- Team `T1` has three members: users `I2` and `I3`, and nested team `T2`.
- Team `T2` has two member users, `I4` and `I5`.
- User `I2` is a member of both the primary team and team `T1`.
- Team `T1` has the **Do not deliver** setting enabled.
- Team `T2` has the **Deliver to individual members** setting enabled.

Because team `T1` has the **Do not deliver** setting enabled, the team **isn't** expanded to identify its members. Although team `T2` has the **Deliver to individual members** setting enabled, team `T2` is nested within team `T1`. The **Do not deliver** delivery preferences for `T1` takes precedence over settings made by its members. Only users `I1` and `I2` receive the notification messages at their preferred contact email address.

#### Team member is Microsoft Entra group

In this example, the primary team has three members: users `I1` and `I2`, and nested Microsoft Entra group `E1`.

Only users `I1` and `I2` receive the notification messages at their preferred contact email address unless `E1` is configured as an email-enabled security group. If `E1` is email-enabled, all members of `E1` will also receive the notifications.

Azure DevOps notifications don't expand to Microsoft Entra groups for delivering notifications to individual users. However, if you're using an Active Directory (AD) group that is categorized as an Email-enabled Security group in the Azure Portal, notifications can be delivered to all members within that group. This means that if your Entra Group is configured as an email-enabled security group, all members receive notifications as intended.

## Related content

- [Manage notifications for a team, group, global organization](manage-team-group-global-organization-notifications.md)
- [Default and supported notifications](oob-built-in-notifications.md)
- [Permissions, security groups, and service accounts reference](../../organizations/security/permissions.md)