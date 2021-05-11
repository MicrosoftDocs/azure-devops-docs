---
title: How notification email recipients are determined
titleSuffix: Azure DevOps 
description: Describes how email recipients are determined for notifications and events in Azure DevOps.
ms.technology: devops-collab
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 07/14/2020
monikerRange: '>= tfs-2017'
---


# How email recipients of notifications are determined

[!INCLUDE [version-vsts-tfs-2017-on](../includes/version-tfs-2017-through-vsts.md)]

Who receives an email notification when an event matches a subscription involves a number of factors. Not understanding these factors can result in your inbox receiving too many (or too few) emails. The following explains how the type of subscription, its delivery settings, delivery preferences, and other factors determine the set of recipients.

[!INCLUDE [note-ui-changes](includes/note-ui-changes.md)]

## Recipients for custom personal subscriptions

The recipients for a custom personal subscription is the easiest to understand: emails are delivered to the _preferred email address_ of the user that owns the subscription or to the email address configured on the subscription.

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

**Preferred email address on a personal subscription (the default)**

> [!div class="mx-imgBorder"]  
>![Screenshot of preferred email address.](media/email-personal-preferred.png)

**Custom email address on a personal subscription**

> [!div class="mx-imgBorder"]  
>![Screenshot of custom email address.](media/email-personal-other.png)

## Delivery settings for teams and Azure DevOps groups

Before we look at the recipients for team and group subscriptions, let's look at the delivery settings for teams and Azure DevOps groups in general. These settings control the default delivery behavior when the team or group is the recipient of a notification and the subscription is configured with a delivery option that looks at the recipient's delivery settings.

> [!NOTE]
> Teams are just a special type of group. Subscriptions and delivery settings for a team can be managed in the team level settings UI or at the organization level.

::: moniker range=">= azure-devops-2019"

**Organization settings**

Within Organization settings, select **Global notifications** > **Subscribers** > your **Team** > **Delivery settings**

   ![Team Delivery settings](media/team-delivery-settings-new-ui.png)

::: moniker-end

::: moniker range="<= tfs-2018"

**Team delivery settings in organization-level settings**

![Screenshot showing organization level settings.](media/email-team-subscribers-view.png)

::: moniker-end

**Team Delivery settings dialog**

![Screenshot showing Team Delivery settings dialog.](media/email-team-delivery-settings.png)

The following delivery settings are available for a group or team:

* **Deliver to email address:** notifications are delivered to a specific email address.
* **Deliver to individual members:** notifications are delivered to each member of the group or team. This is usually the default option. See the following section on [team expansion](#team-and-group-expansion-for-email-recipients) for more details on how this option works.
* **Do not deliver:** notifications are not delivered by default.

If a delivery setting is not explicitly set for a team or group, the value is determined from the [organization-level delivery setting](manage-team-group-global-organization-notifications.md) and is either _Deliver to individual members_ or _Do not deliver_. 
> [!NOTE]
> The delivery settings dialog does not indicate whether the current selection was explicitly set or if it was inherited.

## Recipients for custom team and group subscriptions

The recipients for a custom team or group subscription are controlled by the subscription, but with certain delivery options, the team's default delivery setting is used to determine the set of recipients.

::: moniker range=">= azure-devops-2019"

![email-team-delivery-options](media/email-team-delivery-options-new.png)

The following delivery options are available for a group or team subscription:

* **Members of team by role:** recipients are members of the team or group that have one of the selected roles (e.g. work item assignee)
* **Team preference:** recipients are determined by the delivery setting of the team or group (_Do not deliver_, _preferred email address_, or _members of team_) 
* **Custom email address:** recipient is the specified email address
* **Members of team:**: recipients are all members of the team or group, except members that have opted out of the subscription. 
> [!NOTE]
> The default delivery setting of each member is honored, including groups that are members of the team or group.


::: moniker-end

::: moniker range="<= tfs-2018"

![Screenshot showing email team delivery options.](media/email-team-delivery-options.png)

The following delivery options are available for a group or team subscription:

* **Member of team by role:** recipients are members of the team or group that have one of the selected roles (e.g. work item assignee)
* **Team preference:** recipients are determined by the delivery setting of the team or group (_Do not deliver_, _preferred email address_, or _members of team_) 
* **Custom email address:** recipient is the specified email address
* **Members of team:**: recipients are all members of the team or group, except members that have opted out of the subscription. 
> [!NOTE]
> The default delivery setting of each member is honored, including groups that are members of the team or group.


::: moniker-end

### Option: Member of team by role

The email recipient list is determined by members that had a role in the event. For example, the user assigned the work item has the role _Assigned to (new)_ while the identity that was previously assigned the work item has the role _Assigned to (previous)_. The full list of roles for each event type are shown in the [supported event types](oob-supported-event-types.md).

![Screenshot showing email team delivery option role.](media/email-team-delivery-option-role.png)

The option _Skip initiator_, which appears for most event types, controls whether the user or group that initiated (caused) the event should be explicitly excluded from the set of recipients. In general, this option should be "on" since most users do not want to receive a notification about something they did.

### Option: Team preference
The delivery option is taken from the team's delivery setting. It can be one of the following:

* **Deliver to email address:** The email is delivered to the team's preferred email address.
* **Deliver to individual members:** See the following [_Members of team_](#option-members-of-team) section.
* **Do not deliver:** No email is delivered.

![Screenshot showing email team delivery option preference.](media/email-team-delivery-option-preference.png)

The team's delivery setting value is displayed following the _Address_ label and can't be changed.

### Option: Custom email addresses
The email gets sent to multiple custom email addresses, which are separated by semicolons.

![Screenshot showing custom email team delivery options.](media/email-team-delivery-option-custom.png)

### Option: Members of team
The team or group membership is expanded to determine the email recipients. In the simple case a team or group expands to a list of individuals and each is included on the **To:** line of the resulting email. However, the results of this expansion can be complicated and are explained in more detail in the [team and group expansion](#team-and-group-expansion-for-email-recipients) section.

![Screenshot showing the name of a team for email delivery.](media/email-team-delivery-option-members.png)

## Recipients for default subscriptions

The delivery option for a default subscription is usually one or more roles. When viewing a default subscription, you'll notice these values can't be changed. The roles and the _Skip initiator_ option vary depending on the event type. See [supported event types](oob-supported-event-types.md) for a list of roles available for each event type. 

> [!NOTE]
> The _Skip initiator_ option is not available for all event types.

![Screenshot showing recipients for default subscriptions.](media/email-delivery-default-subscription.png)

## Team and group expansion for email recipients

When a team (or group) is the recipient of a notification and either the subscription or the team's delivery preference indicates that all members of that team should be notified, the team must be "expanded" to determine the actual set of email recipients. This is a potentially recursive process that starts by looking at the team's direct members.

First, only members that have not opted out of the subscription are considered for the final recipient list. Next, any member that is an individual user or mail-enabled group is added to the recipient list. This leaves only Azure DevOps Services groups remaining. For each group, the group's delivery preferences are examined:

* "Do not deliver": no further evaluation is performed on this group and the next member group is evaluated
* "Deliver to email address": the email address is added to the final recipient list
* "Deliver to individual members": the group is expanded (like its parent group) and the same rules for evaluating its members are followed

Let's look at a few scenarios. For these examples, we use the following symbols to denote the types of members:

* `I`: individual user
* `T`: nested team or group
* `A`: mail-enabled Azure Active Directory (Azure AD) group.

### Scenario 1: A member with _Do not deliver_ preference

The team has members `I1`, `I2`, and `T1`. `T1`'s delivery preference is _Do not deliver_.

What happens: only `I1` and `I2` are notified via their preferred email addresses. Members of `T1` are not notified.

### Scenario 2: A member with _Deliver to individual members_ preference

The team has members `I1`, `I2`, and `T1`. `T1`'s delivery preference is _Deliver to individual members_. `T1` has members `I2` and `I3`.

What happens: `T1` is expanded (because of its delivery preference) and therefore `I1`, `I2`, and `I3` are notified via their preferred email addresses.

### Scenario 3: A nested group

The team has members `I1`, `I2`, and `T1`. `T1` has members `I2`, `I3`, and `T2`. `T1`'s delivery preference is _Do not deliver_. `T2` has members `I4` and `I5`. `T2`'s delivery preference is _Deliver to individual members_. 

What happens: because `T1` is not expanded (because its delivery preference is "do not deliver"), only `I1` and `I2` are notified via their preferred email addresses.

### Scenario 4: A member that is an Azure AD group

The team has members `I1`, `I2`, and `A1`.

What happens: `I1`, `I2`, and `A1` are notified via their preferred email addresses.
