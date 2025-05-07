---
title: Troubleshoot Not Receiving Notification Emails
titleSuffix: Azure DevOps
description: Discover why you aren't receiving emails from your Azure DevOps notification subscriptions and fix the problem.
ms.subservice: azure-devops-notifications
ms.custom: quarterly-update
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: troubleshooting-general
ms.date: 05/07/2025
#customer intent: As a developer, I want to troubleshoot why I'm not receiving emails from my notification subscriptions so I can fix the problem.
---

# Not getting emails from subscriptions or notifications

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article provides troubleshooting information to help you address why you might not be receiving an expected subscription or notification email. An email is sent when an [event](oob-supported-event-types.md) occurs that matches a notification subscription. For more information about notification subscriptions, see the [notifications overview](about-notifications.md).

If you're not receiving an expected notification email, here are some possible causes:

* The email server is down, unreachable, or rejected authenticated.
* The email is delivered to an unchecked folder.
* The subscription is disabled or opted-out.
* The event doesn't match the specified subscription filter conditions.
* The subscription is defined to not send emails to the initiator of an event.
* The organization level **Do not deliver** setting is impacting email delivery.
* The team or group level [**Do not deliver**](#check-do-not-deliver-team-or-group-setting) setting is impacting email delivery.
* You're not a member of the group or team receiving the email.
* You're a member of a Windows Server Active Directory (Windows AD) group and the subscription contains an `@Me` mention clause.
* You don't have permission to view the event details, which are included in the email.

## Prerequisites

[!INCLUDE [prerequisites-project-member-only](../../includes/prerequisites-project-member-only.md)]

## Troubleshoot missing notifications

The following sections describe possible solutions to resolve the issue of missing notification emails.

### Check other email folders

Personal or organizational email rules can affect message delivery and change the target folder. Ensure the expected email isn't delivered to a different email folder, including the Junk or Deleted Items folders.

### Confirm subscription is enabled

Different **Notification** settings and configuration scenarios can disable a subscription. Make sure the subscription is enabled as expected. In your personal subscriptions, locate the subscription for which you're expecting to receive the email. For more information, see [Open your personal subscriptions](navigating-the-ui.md#open-person-level).

Azure DevOps displays a disabled subscription as grayed (not available) in the **Notification** settings user interface. The following screenshot shows an example with two subscriptions, where the first subscription is enabled and the second is disabled:

:::image type="content" source="media/subscription-disabled.png" alt-text="Screenshot that shows the visual difference for an enabled and a disabled subscription in Azure DevOps.":::

Here are some scenarios where a subscription might not be available:

- A _default_ subscription disables when an administrator opts out at the organization or team level, or if you opt out in your personal subscription settings.
- A _custom_ subscription disables when an administrator disables the subscription at the organization or team level, or if you disable a personal custom subscription.

### Inspect subscription filter conditions

Filter conditions can prevent the system from generating the email, or cause you not to receive the email. The system only generates an email if an Azure DevOps Services event matches _all_ filter conditions for the subscription.

You can view the filter conditions by selecting the subscription link in the subscription user interface. You can view the filter conditions even if you don't have permission to change them. Closely inspect _all_ filter conditions to see if they match the Azure DevOps Services event.

### Check "Skip initiator" option

When the **Skip initiator** option is set on a subscription, the system excludes the initiator of the Azure DevOps Services event from the email recipient list, while all others receive the event.

Consider a subscription for a _work item changed_ event. You might set the **Skip initiator** option to avoid receiving email for changes you make to the work item. For more information, see [Exclude yourself from notification emails of events you started](exclude-self-from-email.md).

### Check "Do not deliver" organization setting

Similar to the **Skip initiator** option, the **Do not deliver** setting can also interfere with message delivery. On the organization-level notifications page, select **Settings**, and check the **Do not deliver** setting. For more information, see [Manage notifications for a team, project, or organization](manage-team-group-global-organization-notifications.md).

When the [delivery setting](#check-do-not-deliver-team-or-group-setting) is **Do not deliver**, all teams or groups that don't explicitly specify the delivery option inherit the **Do not deliver** setting. This setting alone doesn't necessarily indicate an email isn't delivered, but it can contribute to the problem.

After you check the delivery setting at the organizational, see if a group or team delivery setting inherits the value and blocks delivery to your group or team.

### Check "Do not deliver" team or group setting

When a team or group specifies the **Deliver to individual members** setting, other groups within the same team or group might specify different delivery settings. Conflicts can arise when the system encounters different values for the setting at various levels within the membership hierarchy. For more information about membership inheritance, and how to send email only to specific members, see [Determine recipients of notification emails](concepts-email-recipients.md).

### Confirm contact email address

Your preferred email address for the subscription might not be the same address you're waiting on for delivery of the notifications. Your contact email address is a user profile setting. Verify that your contact address is the same address for which you're expecting to receive email.

To see your contact email address, hover over the **User settings** icon :::image type="icon" source="../../media/icons/user-settings-gear.png"::: and select **Profile**. Check the value of the **Contact email** setting. For more information, see [Set user preferences](../../organizations/settings/set-your-preferences.md).

### Verify @Me filter expansion for teams or groups

When the notification email configuration uses the `@Me` filter clause, the system expands the filter to locate matches in the recipient list. However, Windows AD groups aren't expanded for filter matching. If you specify team or group members by using Windows AD groups, these members don't receive the notification emails.

Specify the full email address for each member of any Windows AD group.

### Ensure recipient permissions for event artifacts

An event email includes any event artifact data, such as a work item. The intended email recipients must have permission to view the event artifacts. Recipients without sufficient permission don't receive the email. The system filters the email recipients to include only members with sufficient permissions.

Determine whether filtering based on permissions is causing the missing email notification by checking the notification delivery logs. For more information, see [How to enable subscription logging for troubleshooting](use-subscription-logging.md).

### Confirm subscription creator or modifier permissions

Email notifications can stop when permissions change for the subscription creator or the last user to modify the subscription.

When the creator or the last modifying user lose permissions to the project, the system filters notifications for the subscription silently. No emails are delivered.

Check the details for the subscription, and verify the permissions for all users with subscription-level access.

## Related content

- Contact [customer support](../../user-guide/provide-feedback.md)