---
title: Default and Supported Notifications
titleSuffix: Azure DevOps
description: "Learn about out of the box or default notifications set in Azure DevOps: build or release, code under Git or TFVC source control, extension management, and work items."
ms.subservice: azure-devops-notifications
ms.custom: cross-project
ms.topic: concept-article
toc: show
ms.author: chcomley
author: chcomley
ms.date: 05/05/2025
#customer intent: As a developer, I want to know the out of the box or default notifications for events in Azure DevOps, so I can set up notifications for my projects in Azure DevOps.
---

# Default and supported notifications

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can configure default subscriptions to send notifications to certain roles or user groups with specific associations to an event. Some examples include users who are assigned the _Reviewer_ role on a pull request, or the _Assignee (current)_ role that identifies the current **Assigned To** user of a changed work item.

In the description of the default subscription, you can see the roles that receive notifications, such as _"Notifies you when a build you queued or that was queued for you completes."_ Role-based subscriptions contain a **Roles** field that you can view by opening the subscription. Only users or groups that belong to the role listed within the subscription receive a notification for an event matched by the subscription.
  
Default subscriptions only send targeted notifications. The recipient is always somehow associated with the event that triggers the notification. For example, the default subscription for work item updates only sends an email notification to the user assigned to the work item.

## Out-of-the-box (OOB) or default subscriptions

The following sections list the events send notifications available to all subscribers, by default. For more information about unsubscribing from a notification, see [Unsubscribe from a notification](unsubscribe-default-notification.md).  

In the personal notifications page, the globe icon :::image type="icon" source="media/oob-notification.png"::: indicates an OOB subscription.

### Build events

The following OOB event types are supported by default for the project **Build** category in Azure DevOps:

|Event type |Trigger |Description |
|-----------|--------|------------| 
| **Build completed** | Build completes | Notifies you when a build you queued or that was queued for you completes. |  

### Code events for Git

The following OOB event types are supported by default for the **Code (Git)** category in Azure DevOps. These notification types apply to your project code under source control with Git. 

|Event type |Trigger |Description |
|-----------|--------|------------| 
| **Pull request**         | Pull request reviewers added or removed | Notifies you when you or another user gets added or removed from a pull request that you created. | 
| **Pull request**         | Pull request completion failures | Notifies you when a pull request you created fails to complete. |
| **Pull request**         | Pull request changes | Notifies you when changes are made to a pull request you created, or changes are made to a pull request for which you're assigned as a reviewer. |
| **Pull request comment** | Comment added to pull request | Notifies you about comments added to a pull request that you created, or a discussion you're involved in. |

### Code events for TFVC

The following OOB event types are supported by default for the **Code (TFVC)** category in Azure DevOps. These notification types apply to your project code under control with Team Foundation Version control (TFVC).

|Event type |Trigger |Description |
|-----------|--------|------------| 
| **Code review** | Changes to code review that you're working on | Notifies you when a change is made to a code review you're assigned to. |

### Extension management events

The following OOB event types are supported by default for the project **Extension management** category in Azure DevOps.

|Event type |Trigger |Description |
|-----------|--------|------------| 
| **Extension**                 | Extensions modified | Notifies you when extensions are modified. |
| **Extension request (batch)**	| Extensions requested, or existing requests updated | Notifies you when extensions are requested or existing requests are updated. |

### Release events

The following OOB event types are supported by default for the project **Release** category in Azure DevOps:

|Event type |Trigger |Description |
|-----------|--------|------------| 
| **Deployment pending**       | Manual intervention pending | Notifies you when a manual intervention is pending on your input. |
| **Deployment completed**     | Deployment to owned environment failed | Notifies you when a deployment to an environment you own fails to complete successfully and makes the environment unhealthy. |
| **Deployment completed**     | Deployment to approved environment failed | Notifies you when a deployment you approved fails to complete successfully and makes the environment unhealthy. |
| **Deployment completed**     | Deployment completion failures | Notifies you when a deployment you requested fails to complete successfully and makes the environment unhealthy. |
| **Release approval pending** | Deployment approval pending | Notifies you when an approval for a deployment is pending on your input. |

### Work (work items) events

The following OOB event types are supported by default for the project **Work** category in Azure DevOps. 

|Event type |Trigger |Description |
|-----------|--------|------------| 
| **Work item** | Work item moved from this project (area path changed) | Notifies you when the area path for a work item is moved to another project. |
| **Work item**	| Work item assigned | Notifies you when you're assigned or unassigned a work item. |

## Supported subscriptions

You can create subscriptions by using the following templates for yourself, a team, or a group. Within the subscription dialog, you can specify other fields based on the category. For more information, see [Manage personal notifications](manage-your-personal-notifications.md).

|Category |Template description |
|---------|---------------------|
| **Build** | A build completes. |
| **Build** | A build fails. |
| **Build** | The status changes for a build controller or agent. |
| **Build** | The quality changes for a build. |
| **Code (Git)** | A commit authored by you is pushed. |
| **Code (Git)** | You push a commit. |
| **Code (Git)** | A commit is pushed. |
| **Code (Git)** | A pull request is created or updated. |
| **Code (TFVC)** | Code is checked in. |
| **Code (TFVC)** | Code is checked in with a policy override. |
| **Code (TFVC)** | A file with a specific extension is checked in. |
| **Code (TFVC)** | A file under a specific path is checked in. |
| **Code (TFVC)** | A code review that you're working on changes. |
| **Work** | A work item that you created is changed.|
| **Work** | A work item assigned to you is changed. |
| **Work** | A work item is changed. |
| **Work** | A work item is assigned to you. |
| **Work** | A work item is deleted. |
| **Work** | A work item is restored. |
| **Extension management** | An extension is modified. |
| **Release** | An approval for a deployment is pending. |
| **Release** | A deployment is completed. |
| **Release** | A manual intervention for a deployment is pending. |

## Related content

- Learn [about notifications](about-notifications.md)
- [Manage personal notifications](manage-team-group-global-organization-notifications.md)
- [Unsubscribe from a notification](unsubscribe-default-notification.md)