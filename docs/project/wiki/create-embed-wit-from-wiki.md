---
title: Create and embed a work item from wiki
titleSuffix: Azure DevOps  
description: Learn how to create and embed work items with selected text in wiki content in Azure DevOps.  
ms.technology: devops-collab
ms.custom: wiki
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.reviewer: anian
ms.topic: conceptual
monikerRange: '>= azure-devops-2020'
ms.date: 09/24/2020 
---

# Create and embed a work item from wiki

[!INCLUDE [temp](../../includes/version-azure-devops-plus-azure-devops-server-2020.md)]

Create and embed work items in your wiki page content. This feature gives you an easy way to promote text to a link to a feature, task, or user story.

## Create and embed work item 

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`), and then select your **project**.

   ![Screenshot of sign-in to Azure DevOps, and then select Project](media/wiki/sign-in-to-azure-devops-select-project.png)

2. Select your **wiki**.
3. Highlight the text, and then select the type of work item you want to create from the **New work item** dropdown menu. The work item form opens with the selected text added as the title and description of the work item. 
4. Add information to the work item, such as entering an assignee in the Assign To box, and then select **Save**.
  
    ![Create and embed work items from Wiki content](media/wiki/create-embed-wit-from-wiki.gif)

The selected content in the wiki page is replaced with the embedded work item.

> [!NOTE]
> Only markdown plain text (including bold and italics) are replaced in the wiki page. For the rest of the content, like images, code blocks, and videos, the work item is created, but the embed must be done manually. This is to prevent the page from breaking due to the replaced work item. For more information, see [how to link to work items from a Wiki page](wiki-markdown-guidance.md#link-to-work-items-from-a-wiki-page).

## Show work item status

The status, ID, and title of an embedded work item is shown in the wiki page. Work item references in pull request comments and Boards discussions also show the status.

![Work item status shown on wiki page](media/wiki/show-work-item-status-wiki.png)

