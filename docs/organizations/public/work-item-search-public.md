---
title: Search for work items
titleSuffix: Azure DevOps Services Public Project
description: Use Work Item Search to search across all work item fields over one or more public projects.  
ms.technology: devops-public-projects
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: quickstart
ms.date: 07/25/2022
monikerRange: 'azure-devops'
---

# Search for work items defined in a public project

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]  

Learn how to perform a work item search to quickly find work items defined within a public project.

<a name="start-search"></a>

## Initiate a search

1. Sign in to your organization: ```https://dev.azure.com/{yourorganization}```.

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screen shot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Boards**, and then **Work items**.

   ![Screen shot showing highlighted buttons for selecting Boards, and then Work items.](media/select-boards-work-items-preview.png)

4. Enter your search.

   ![Screen shot showing work items search box.](media/search-work-items-modern.png)

## Fine-tune your search

1. Fine tune your search by specifying the fields to search. Enter `a:` and a user name
   to search for all items assigned to that user.

	> [!div class="mx-imgBorder"]  
	> ![Search from the title bar](media/search/search-work-vert.png)

   The quick filters you can use are:

   * `a:` for **Assigned to:** 
   * `c:` for **Created by:** 
   * `s:` for **State** 
   * `t:` for **Work item type**<p />

2. Start to enter the name of a field in your work items; for example, enter `ta`.

   ![Quick filters as you enter](../../project/search/media/work-item-search-get-started/dyna-dropdown.png)

   The dropdown list shows work item field name suggestions
   that match user input thereby helping the user to complete the search faster. For example, a search such as
   **tags:Critical** finds all work items tagged 'Critical'.

3. Add more filters to further narrow your search, and use Boolean operators
   to combine terms if necessary. For example,
   **a: Chris t: Bug s: Active** finds all active bugs assigned
   to a user named Chris.

4. Narrow your search to specific types
   and states, by using the drop-down selector lists at the upper portion of the results page.

## Next steps

> [!div class="nextstepaction"]
> [Search the code base](code-search-public.md)
