---
title: Event Types for Notifications Subscriptions
titleSuffix: Azure DevOps
description: "Review supported event types for automatic notifications in Azure DevOps: build or release, code under Git or TFVC source control, and work items."
ms.subservice: azure-devops-notifications
ms.topic: concept-article
toc: show
ms.author: chcomley
author: chcomley
ms.date: 05/05/2025
monikerRange: '<= azure-devops'
#customer intent: As a developer, I want to know the supported event types, so I can set up automatic notifications for my projects in Azure DevOps.
---

# Supported event types

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This reference article identifies the supported event types for notification subscriptions in Azure DevOps. The following sections list the event types by project notification category, including Build, Release, Work items, and Code under Git source control or Team Foundation version control (TFVC). 

## Build events

The following event types are supported for the project **Build** category in Azure DevOps:

|Event type |Fields |Roles |  
|-----------|-------|------|
| **Completed**      | Build controller <br> Build reason <br> Compilation status <br> Definition name <br> Requested by <br> Requested for <br> Status <br> Team project <br> Test status | _Last changed by_ <br> _Requested by_ <br> _Requested for_ <br> _Deleted by_ |
| **Status changed** |Changed by <br> Changed time <br> Quality <br> Team project | (not available) |

## Code events for Git

The following event types are supported for the **Code (Git)** category in Azure DevOps. These notification types apply to your project code under source control with Git. 

|Event type |Fields |Roles |  
|-----------|-------|------|
| **Push**         | Authored by <br> Branches updated <br> Changes in folder <br> Comment <br> Committed by <br> Pushed by <br> Repository name <br> Team project | _Pushed by_ |
| **Pull request** | Changed by <br> Changes in folder <br> Code under review <br> Created by <br> Event type <br> Policy Bypass <br> Repository name <br> Reviewers <br> Source branch name <br> Status <br> Target branch name <br> Team project <br> Vote | _Creator_ <br> _Reviewers_ <br> _Changed reviewers_ <br> _Reset reviewers_ |

## Code events for TFVC

The following event types are supported for the **Code (TFVC)** category in Azure DevOps. These notification types apply to your project code under control with Team Foundation Version control (TFVC).

|Event type |Fields |Roles |  
|-----------|-------|------|
| **Check in**    | Associated work item <br> Comment <br> Committer <br> File extension <br> File name <br> Folder path <br> Policy override comment <br> Server item <br> Team project | _Committer_ <br> _Owner_ |
| **Code review** | Area path <br> Changed by <br> Closing comment <br> Comment <br> My review status <br> Requested by <br> Review action <br> Review context type <br> Review owner <br> Reviewed item file name <br> Reviewed item parent path <br> Reviewers <br> State <br> Team project <br> Work item ID | _Requested by_ <br> _New reviewers_ <br> _Reviewers_ <br> _Declined reviewers_ |

## Work item events

The following event types are supported for the project **Work items** category in Azure DevOps. 

|Event type |Fields |Roles |  
|-----------|-------|------|
| **Created** <br> **Changed** <br> **Deleted** <br> **Restored** | Any work item field | _Assigned to (new)_ <br> _Assigned to (previous)_ <br> _Assigned to (current)_ <br> _Changed by_ <br> _Created by_ <br> _Authorized as_ |

## Release events

The following event types are supported for the project **Release** category in Azure DevOps:

|Event type |Fields |Roles |  
|-----------|-------|------|
| **Release approval pending** | Approval Type <br> Assigned To <br> Environment Name <br> Release Definition Name | _Assigned to_ <br> _Environment owner_ |
| **Deployment completed**     | Deployment request reason <br> Deployment requested for <br> Deployment Status <br> Environment Name <br> Environment Owner <br> Last Deployment Status <br> Release Definition Name <br> Release request reason <br> Release requested by | _Deployment requested for_ <br> _Environment owner_ <br> _Release requested by_ <br> _Approved by_ |
| **Deployment pending**       | Environment Name <br> Environment Owner <br> Release Definition Name | _Manual intervention recipient_ <br> _Environment owner_ |  

## Related content

- Review [default and supported notifications](oob-built-in-notifications.md)
- [Manage notifications for a team, project, or organization](manage-team-group-global-organization-notifications.md)