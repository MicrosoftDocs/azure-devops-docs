---
title: Supported event types for notifications subscriptions
titleSuffix: Azure DevOps
description: List of supported event types to set up automatic notifications in Azure DevOps Services and TFS
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
toc: show
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/11/2018
monikerRange: '>= tfs-2017'
---

# Supported event types

[!INCLUDE [version-vsts-tfs-2017-on](../boards/_shared/version-vsts-tfs-2017-on.md)]

Learn the supported event types for notification subscriptions in Azure DevOps Services and Team Foundation Server (TFS) in the following table. Check out the [Events, subscriptions, and notifications concepts article](concepts-events-and-notifications.md) to learn more about events and event types.

| Category  |  Type     |   Fields|   Roles|   |
|-----------|-----------|---------|---|---|
|Build|Completed|Build controller<br>Build reason<br>Compilation status<br>Definition name<br>Requested by<br>Requested for<br>Status<br>Team project<br>Test status|Last changed by<br>Requested by<br>Requested for<br>Deleted by
|Build|Status changed|Changed by<br>Changed time<br>Quality<br>Team project|
|Code (Git)|Push|Authored by<br>Branches updated<br>Changes in folder<br>Comment<br>Committed by<br>Pushed by<br>Repository name<br>Team project|Pushed by
|Code (Git)|Pull request|Changed by<br>Changes in folder<br>Code under review<br>Created by<br>Event type<br>Policy Bypass<br>Repository name<br>Reviewers<br>Source branch name<br>Status<br>Target branch name<br>Team project<br>Vote|Creator<br>Reviewers<br>Changed reviewers<br>Reset reviewers
|Code (TFVC)|Check in|Associated work item<br>Comment<br>Committer<br>File extension<br>File name<br>Folder path<br>Policy override comment<br>Server item<br>Team project|Committer<br>Owner
|Code (TFVC)|Code review|Area path<br>Changed by<br>Closing comment<br>Comment<br>My review status<br>Requested by<br>Review action<br>Review context type<br>Review owner<br>Reviewed item file name<br>Reviewed item parent path<br>Reviewers<br>State<br>Team project<br>Work item id|Requested by<br>New reviewers<br>Reviewers<br>Declined reviewers
|Work item|Created<br>Changed<br>Deleted<br>Restored|Any work item field|Assigned to (new)<br>Assigned to (previous)<br>Assigned to (current)<br>Changed by<br>Created by<br>Authorized as
|Release|Release approval pending|Approval Type<br>Assigned To<br>Environment Name<br>Release Definition Name|Assigned to<br>Environment owner
|Release|Deployment completed|Deployment request reason<br>Deployment requested for<br>Deployment Status<br>Environment Name<br>Environment Owner<br>Last Deployment Status<br>Release Definition Name<br>Release request reason<br>Release requested by|Deployment requested for<br>Environment owner<br>Release requested by<br>Approved by
|Release|Deployment pending|Environment Name<br>Environment Owner<br>Release Definition Name|Manual intervention recipient<br>Environment owner