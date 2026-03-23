---
title: Create and embed a work item from wiki
titleSuffix: Azure DevOps  
description: Create and embed work items with selected text in wiki content in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.reviewer: anian
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 02/18/2026
ai-usage: ai-assisted
---

# Create and embed a work item from wiki

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Create and embed work items in your wiki page content. This feature provides an easy way to promote text to a link to a feature, task, or user story.

## Prerequisites

[!INCLUDE [wiki-prerequisites](includes/wiki-prerequisites.md)]

## Create and embed work item 

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`).

    :::image type="content" source="media/wiki/sign-in-to-azure-devops-select-project.png" alt-text="Screenshot of signing in to Azure DevOps and selecting a project." border="true":::

1. Open your **wiki**.
1. Highlight the text, and then choose the type of work item you want to create from the **New work item** dropdown menu.
   The work item form opens with the selected text added as the title and description of the work item.
1. Add information to the work item, such as entering an assignee in the **Assign To** box, and then select **Save & Close**.

    :::image type="content" source="media/wiki/create-embed-wit-from-wiki.gif" alt-text="Screenshot of creating and embedding work items from wiki content." border="true":::

The selected content in the wiki page is replaced with the embedded work item.

> [!NOTE]
> Only Markdown plain text, including bold and italics, gets replaced in the wiki page.
For the rest of the content like images, code blocks, and videos, the work item gets created, but the embed must be done manually.
This process is to prevent the page from breaking due to the replaced work item.
For more information, see [Link to work items from a Wiki page](markdown-guidance.md#link-work-items).

## Show work item status

The status, ID, and title of an embedded work item appears in the wiki page.
Work item references in pull request comments and Boards discussions also show the status.

:::image type="content" source="media/wiki/show-work-item-status-wiki.png" alt-text="Screenshot of work item status shown on a wiki page." border="true":::

## Related content

- [Add and edit wiki pages](add-edit-wiki.md)  
- [View wiki page history and revert](wiki-view-history.md)
- [Clone and update wiki content offline](wiki-update-offline.md)
- [Use wiki keyboard shortcuts](../navigation/keyboard-shortcuts.md#wiki-keyboard-shortcuts)
- [Filter or print wiki content](filter-print-wiki.md) <sup>1</sup>
- [Use Markdown syntax](markdown-guidance.md)
