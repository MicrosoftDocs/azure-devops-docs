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
monikerRange: "<=azure-devops"
ms.date: 02/18/2026
ai-usage: ai-assisted
---

# Add comments to wiki pages

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Add comments to wiki pages to enhance collaboration among team members.

## Prerequisites

[!INCLUDE [wiki-prerequisites](includes/wiki-prerequisites.md)]

## Add a comment

You can add a comment at the bottom of any wiki page.
Comments post on a per-branch basis.
For example, if you make a comment on a wiki page on the main branch, it doesn't appear in another published branch of a file of the same name.
The internal database stores comments.
For more information, see [Data locations for Azure DevOps](../../organizations/security/data-location.md).

:::image type="content" source="media/wiki/add-wiki-comment.png" alt-text="Screenshot of a comment added on a wiki page." border="true":::

When a user reacts to a comment on a wiki, the system sends an email notification to the commenter and optionally the followers.
When a user adds a comment on a wiki, the system sends an email notification to all followers of the wiki regardless of who is tagged in the comment.

## View Markdown and preview tabs

When you add a Markdown-based comment, a Markdown editor and preview tab appear.
Use these tabs to view and change how the comment renders before you add it.
You can also [@mention users and groups](../../organizations/notifications/at-mentions.md).
This @mention sends an email notification to each user or group, with a link to the wiki page.

:::image type="content" source="media/wiki/wiki-comments-markdown-preview-tabs.png" alt-text="Screenshot of wiki comments in Markdown and preview tabs." border="true":::

## Edit or delete a comment

Edit or delete any comments that you add to a wiki.
You can't edit or delete comments made by other users.

:::image type="content" source="media/wiki/wiki-comment.png" alt-text="Screenshot of editing or deleting a wiki comment." border="true":::

## Related content

- [Follow wiki pages, get notifications](follow-notifications-wiki-pages.md)
- [Create and embed a work item from wiki content](create-embed-wit-from-wiki.md)
- [Get Markdown guidance](markdown-guidance.md)
