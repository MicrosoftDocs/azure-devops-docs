---
title: Troubleshoot notification emails
titleSuffix: Azure DevOps
description: Troubleshoot missing, delayed, or unexpected notification emails from Azure DevOps subscriptions and fix the problem.
ms.subservice: azure-devops-notifications
ms.custom: quarterly-update, copilot-scenario-highlight
ms.reviewer: wismythe
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: troubleshooting
ms.date: 04/20/2026
monikerRange: '<= azure-devops'
#customer intent: As a developer, I want to troubleshoot why I'm not receiving, getting delayed, or receiving unexpected notification emails so I can fix the problem.
---

# Troubleshoot notification emails

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

An email is sent when an [event](oob-supported-event-types.md) occurs that matches a notification subscription. For more information about notification subscriptions, see the [notifications overview](about-notifications.md).

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

This article helps you troubleshoot common issues with Azure DevOps notification emails, including missing, delayed, and unexpected emails.

## Prerequisites

[!INCLUDE [prerequisites-project-member-only](../../includes/prerequisites-project-member-only.md)]

## Troubleshoot missing notifications

If you're not receiving an expected notification email, here are some possible causes:

* The email server is down, unreachable, or rejected the connection.
* The email is delivered to an unchecked folder.
* The subscription is disabled or opted-out.
* The event doesn't match the specified subscription filter conditions.
* The subscription is defined to not send emails to the initiator of an event.
* The **Do not deliver** setting at the organization, team, or group level is impacting email delivery.
* You're not a member of the group or team receiving the email.
* You're a member of a Windows Server Active Directory (Windows AD) group and the subscription contains an `@Me` mention clause.
* You don't have permission to view the event details, which are included in the email.

The following sections describe possible solutions to resolve the issue of missing notification emails.

### Check other email folders

Personal or organizational email rules can affect message delivery and change the target folder. Ensure the expected email isn't delivered to a different email folder, including the Junk or Deleted Items folders.

### Confirm subscription is enabled

Different **Notification** settings and configuration scenarios can disable a subscription. Ensure the subscription is enabled as expected. In your personal subscriptions, locate the subscription for which you're expecting to receive the email. For more information, see [Open your personal subscriptions](navigating-the-ui.md#open-person-level).

Azure DevOps displays a disabled subscription as grayed (not available) in the **Notification** settings user interface. The following screenshot shows an example with two subscriptions, where the first subscription is enabled and the second is disabled:

:::image type="content" source="media/subscription-disabled.png" alt-text="Screenshot that shows the visual difference for an enabled and a disabled subscription in Azure DevOps.":::

Here are some scenarios where a subscription might not be available:

- A _default_ subscription disables when an administrator opts out at the organization or team level, or if you opt out in your personal subscription settings.
- A _custom_ subscription disables when an administrator disables the subscription at the organization or team level, or if you disable a personal custom subscription.

### Inspect subscription filter conditions

Filter conditions can prevent the system from generating the email, or cause you not to receive the email. The system only generates an email if an Azure DevOps event matches _all_ filter conditions for the subscription.

You can view the filter conditions by selecting the subscription link in the subscription user interface. You can view the filter conditions even if you don't have permission to change them. Closely inspect _all_ filter conditions to see if they match the Azure DevOps event.

### Check 'Skip initiator' option

When the **Skip initiator** option is set on a subscription, the system excludes the initiator of the Azure DevOps event from the email recipient list, while all others receive the event.

Consider a subscription for a _work item changed_ event. You might set the **Skip initiator** option to avoid receiving email for changes you make to the work item. For more information, see [Exclude yourself from notification emails of events you started](exclude-self-from-email.md).

### Check 'Do not deliver' setting for organization

Similar to the **Skip initiator** option, the **Do not deliver** setting can also interfere with message delivery. On the organization-level notifications page, select **Settings**, and check the **Do not deliver** setting. For more information, see [Manage notifications for a team, project, or organization](manage-team-group-global-organization-notifications.md).

When the [delivery setting](#check-do-not-deliver-setting-for-team-or-group) is **Do not deliver**, all teams or groups that don't explicitly specify the delivery option inherit the **Do not deliver** setting. This setting alone doesn't necessarily indicate an email isn't delivered, but it can contribute to the problem.

After you check the delivery setting at the organizational level, see if a group or team delivery setting inherits the value and blocks delivery to your group or team.

### Check 'Do not deliver' setting for team or group

When a team or group specifies the **Deliver to individual members** setting, other groups within the same team or group might specify different delivery settings. Conflicts can arise when the system encounters different values for the setting at various levels within the membership hierarchy. For more information about membership inheritance, and how to send email only to specific members, see [Determine recipients of notification emails](concepts-email-recipients.md).

### Confirm contact email address

Your preferred email address for the subscription might not be the same address you're waiting on for delivery of the notifications. Your contact email address is a user profile setting. Verify that your contact address is the same address for which you're expecting to receive email.

To see your contact email address, select :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: **User settings** > **Profile**. Check the value of the **Contact email** setting. For more information, see [Set user preferences](../../organizations/settings/set-your-preferences.md).

### Verify @Me filter expansion for teams or groups

When the subscription or notifications configuration uses an `@Me` filter clause, the system expands the filter to locate matches in the recipient address list. However, Windows AD groups aren't expanded for filter matching. If you specify email addresses for team or group members by using Windows AD groups, these members don't receive the notification emails.

Specify the full email address for each team member of any Windows AD group.

### Ensure recipient permissions for event artifacts

An event email includes any event artifact data, such as a work item. The intended email recipients must have permission to view the event artifacts. Recipients without sufficient permission don't receive the email. The system filters the email recipients to include only members with sufficient permissions.

Determine whether filtering based on permissions is causing the missing email notification by checking the notification delivery logs. For more information, see [How to enable subscription logging for troubleshooting](use-subscription-logging.md).

### Confirm subscription creator or modifier permissions

Email notifications can stop when permissions change for the subscription creator or the last user to modify the subscription.

When the creator or the last modifying user loses permissions to the project, the system filters notifications for the subscription silently. No emails are delivered.

Check the details for the subscription, and verify the permissions for all users with subscription-level access.

## Troubleshoot delayed notifications

If you're not receiving notification emails at the expected time, consider the following possible causes:

* Your organization generates a high volume of notifications.
* Poorly defined subscription filters create duplicate or unnecessary notifications.
* Your email provider is throttling or delaying delivery.

### Check notification statistics for high volume

Poorly defined subscription filters or duplicate subscriptions might cause an unexpectedly high volume of notifications, which delays processing or delivery of emails. Review notification statistics to identify subscriptions or event initiators that generate excessive volume. For more information, see [View and analyze notification statistics](view-organization-notification-statistics.md).

## Troubleshoot unexpected notifications

If you receive a notification email that you didn't expect, it could be for one of the following reasons:

* The email is sent to a group of which you're a member.
* An unexpected subscription triggered the email.

### Inspect the 'To:' line on the email

Your email address or a group address appears on the **To:** line. If you receive unexpected emails, you might be part of a group that receives the email. The subscription administrator might have configured the email delivery preferences to a wider group than intended.

### Inspect the footer of the unexpected email

All notification emails have a footer that contains a link to view the subscription that triggered the email. Select the link to view the subscription details. You received the email because you're subscribed to this subscription. If it's an organization or team subscription, you can opt out of it.

:::image type="content" source="media/email-footer-view.png" alt-text="Screenshot of notification email footer with a link to view the subscription.":::

## Use AI to troubleshoot notification issues

The following example prompt for Copilot Chat helps you troubleshoot Azure DevOps email notification and subscription issues. Copy and paste this prompt into Copilot Chat, replacing the placeholders with your specific information.

For the best AI assistance, include specific details like the subscription name, event type, filter conditions, and delivery settings that might be affecting your notifications.

```copilot-chat
# Example prompt for troubleshooting notification issues
I'm having trouble receiving email notifications for my Azure DevOps subscription. 
Here are the details:
- Subscription Name: [Your Subscription Name]
- Event Type: [for example, Work Item Updated]
- Filter Conditions: [for example, State = Resolved]
- Delivery Settings: [for example, Deliver to individual members]

Can you help me identify potential issues and solutions?
```

*Copilot is powered by AI, so surprises and mistakes are possible. For more information, see [Copilot general use FAQs](https://aka.ms/copilot-general-use-faqs).*

## Contact customer support

If you can't resolve the issue with the previous steps, consider contacting [customer support](../../user-guide/provide-feedback.md).

## Related content

- [About notifications](about-notifications.md)
- [View notification statistics for your organization](view-organization-notification-statistics.md)
- [How to enable subscription logging for troubleshooting](use-subscription-logging.md)
- [All troubleshooting guides & FAQs](../../troubleshoot/index.yml)
