---
title: Default and supported notifications
titleSuffix: Azure DevOps
description: Learn about out of the box or default notifications set in Azure DevOps.
ms.subservice: azure-devops-notifications
ms.custom: cross-project
ms.topic: conceptual
toc: show
ms.author: chcomley
author: chcomley
ms.date: 12/20/2019
monikerRange: '<= azure-devops'
---

# Default and supported notifications

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Configure default subscriptions to send notifications to certain roles or user groups with specific associations to an event. For example, "reviewer" is a role on a pull request event. "Assignee (current)" is a role that reflects the current Assigned To user of a changed work item.

In the description of the default subscription, you can see the roles that receive notifications. For example, *"Notifies you when a build you queued or that was queued for you completes"*. Role-based subscriptions contain a Roles field that you can view by opening the subscription. Only users or groups that belong to the role listed within the subscription receive a notification for an event matched by the subscription.
  
Default subscriptions only send targeted notifications. That is, the recipient is always somehow associated with the event that triggered the notification. For example, the default subscription for work item updates only sends an email notification to the person assigned to the work item.

## Out-of-the-box (OOB) or default subscriptions

The following events send notifications to all subscribers, by default. For more information about unsubscribing from a notification, see [Unsubscribe from a notification](unsubscribe-default-notification.md).  

Within the personal notifications page, OOB subscriptions appear with the following image: ![Notification](media/oob-notification.png).


| Category | 	Type| 	Build| 	Description
|-----------------------|-------------------|---------------------|----------------| 
| Build	|Build completed	|Build completes	|Notifies you when a build you queued or that was queued for you completes|  
| Code (Git)| 	Pull request	| Pull request reviewers added or removed	| Notifies you when you or another user gets added or removed from a pull request that you created|  
| Code (Git)| 	Pull request| 	Pull request completion failures	| Notifies you when a pull request you created fails to complete | 
| Code (Git)| 	Pull request| 	Pull request changes	| Notifies you when changes are made to a pull request you created or are a reviewer for | 
| Code (Git)| 	Pull request comment| 	A comment is left on a pull request	| Notifies you about comments made to a pull request that you created or a discussion you're involved in | 
| Code (TFVC)| 	Code review	| A code review I'm working on changes	| Notifies you when a change is made to a code review you're assigned to| 
| Extension management| 	Extension| 	Extensions have been modified.	| Extensions have been modified. | 
| Extension management| 	Extension request (batch)	| Extensions are requested or requests are updated.	| Extensions are requested or requests are updated. | 
| Release| 	Deployment pending	| Manual intervention pending	| Notifies you when a manual intervention is pending on you | 
| Release| 	Deployment completed	| Deployment to an owned environment failed	| Notifies you when a deployment to an environment you own fails to complete successfully and makes the environment unhealthy | 
| Release| 	Deployment completed	| Deployment to an approved environment failed	| Notifies you when a deployment you approved fails to complete successfully  and makes the environment unhealthy | 
| Release| 	Deployment completed| 	Deployment completion failures	| Notifies you when a deployment you requested fails to complete successfully  and makes the environment unhealthy | 
| Release| 	Release approval pending| 	Deployment approval pending| 	Notifies you when an approval for a deployment is pending on you | 
| Work| 	Work item| 	A work item is moved from this project	| Notifies you when the area path for a work item is moved to another project | 
| Work	| Work item	| A work item assigned	| Notifies you when you get assigned or unassigned a work item | 

## Supported subscriptions

You can create subscriptions using the following templates for yourself, a team, or a group.  Within the subscription dialog, you can specify additional fields based on the category. For more information, see [Manage personal notifications](manage-your-personal-notifications.md).

| Category | 	Template |
|-----------------------|-------------------|
|Build | A build completes |
|Build | A build fails |
|Build | A build controller or agent's status changes |
|Build | A build's quality changes |
|Code (Git)| A commit authored by me is pushed |
|Code (Git)| A commit is pushed by me  |
|Code (Git)| A commit is pushed |
|Code (Git)| A pull request is created or updated |
|Code (TFVC)| Code is checked in |
|Code (TFVC)| Code is checked in with a policy override |
|Code (TFVC)| A file with a specific extension is checked in |
|Code (TFVC)| A file under a specific path is checked in |
|Code (TFVC)| A code review I'm working on changes |
|Work | A work item I created is changed |
|Work | A work item assigned to me is changed |
|Work | A work item is changed |
|Work | A work item is assigned to me |
|Work | A work item is deleted |
|Work | A work item is restored |
|Extension management | An extension is modified |
|Release | An approval for a deployment is pending |
|Release | A deployment is completed |
|Release | A manual intervention for a deployment is pending |

## Related articles

- [About notifications](about-notifications.md)
- [Manage personal notifications](./manage-team-group-global-organization-notifications.md)
- [Unsubscribe from a notification](unsubscribe-default-notification.md)