---
title: Add comments to wiki pages 
titleSuffix: Azure DevOps 
description: Learn how to add comments to wiki pages in Azure DevOps. 
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: how-to
ms.assetid:
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
monikerRange: '>= azure-devops-2020'
ms.date: 08/05/2024
---

# Add comments to wiki pages

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Learn how to add comments to wiki pages to enhance collaboration among team members.

## Prerequisites

[!INCLUDE [wiki-prerequisites](includes/wiki-prerequisites.md)]

## Add a comment

You can add a comment at the bottom of any wiki page. Comments get posted on a per-branch basis. For example, if you make a comment on a wiki page on the main branch, it doesn't appear in another published branch of a file of the same name. Comments get stored on the internal database. For more information, see [Data locations for Azure DevOps](../../organizations/security/data-location.md).

![Screenshot of Created comment on wiki page.](media/wiki/add-wiki-comment.png)

When a user reacts to a comment on a wiki, an email notification gets sent to the commenter and optionally the followers. When a user adds a comment on a wiki, an email notification gets sent to all followers of the wiki regardless of who is tagged in the comment.

## View Markdown and preview tabs

When you add a Markdown-based comment, there's a Markdown editor and preview tab. Use these tabs to view and change how the comment is rendered before you add it. You can also [@mention users and groups](../../organizations/notifications/at-mentions.md). This @mention sends an email notification to each user or group, with a link to the wiki page.

![Screenshot of wiki comments in Markdown and preview tabs.](media/wiki/wiki-comments-markdown-preview-tabs.png)

## Edit or delete a comment

Edit or delete any comments that you added to a wiki. You can't edit or delete comments made by other users.

![Screenshot of Edit or delete wiki comment.](media/wiki/wiki-comment.png)

## Related articles

- [Follow wiki pages, get notifications](follow-notifications-wiki-pages.md)
- [Create and embed a work item from wiki content](create-embed-wit-from-wiki.md)
- [Get Markdown guidance](markdown-guidance.md)
