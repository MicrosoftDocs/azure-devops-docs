---
title: Enable Kanban board badge status for a GitHub repo
titleSuffix: Azure Boards
description: Learn how to configure your Kanban board badge status. You can configure the badge status to appear on your GitHub repo. 
ms.service: azure-devops-boards
ms.topic: quickstart
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 10/20/2021
---

# Configure status badges for your GitHub repo 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 
 
You can add Markdown syntax to a GitHub repo `README.md` file to display your Kanban board's status in that repo. Show the status by adding the syntax you choose from your Kanban board settings.  

::: moniker range="azure-devops-2019"
> [!NOTE]   
> Requires Azure DevOps Server 2019 Update 1 or later version. 
::: moniker-end

The syntax shown works whether you've [connected your project to a GitHub.com or your GitHub Enterprise Server repository](connect-to-github.md). For GitHub Enterprise Server, your server must be network accessible to Azure DevOps Services. 

## Prerequisites 

* Your Azure Boards project must be connected to the GitHub repository where the commits and pull requests you want to link to/from exist. For details, see [Azure Boards-GitHub integration](index.md).  
* You must have a Kanban board you want to configure. When you add a team, you add a Kanban board for that team. To learn more, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).
* You must be added to the team administrator role for the team's settings you want to modify, or be a member of the **Project Administrators** security group. To get added, see [Add a team administrator](../../organizations/settings/add-team-administrator.md) or [Change project-level permissions](../../organizations/security/change-project-level-permissions.md).
* To add the status badge to the GitHub.com repository, you must be a contributor of the repository.  


## Open your Kanban board settings 

1. Sign into Azure Boards. 

1.  [Open your Kanban board](../boards/kanban-quickstart.md). If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board.

1. Choose the  :::image type="icon" source="../../media/icons/blue-gear.png" border="false":::  gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Open board settings for a team, vert nav](../../organizations/settings/media/configure-team/open-board-settings.png)  

1. Choose **Status badge** and then check or uncheck the **Allow anonymous users to access the status badge**. When unchecked, users who aren't signed in can still view the status badge.

	::: moniker range=">= azure-devops-2020"
	:::image type="content" source="media/badges/status-badge-s188.png" alt-text="Kanban Board Settings dialog,Status badge tab.":::
	::: moniker-end
	::: moniker range="azure-devops-2019"
	:::image type="content" source="media/badges/status-badge.png" alt-text="Kanban Board Settings dialog,Status badge tab, Azure DevOps Server 2019.":::
	::: moniker-end

1. Choose the badge type you want and choose the :::image type="icon" source="../../media/icons/copy.png" border="false"::: copy icon to copy the Markdown syntax for the badge. 

	**Show "In progress" columns only** ignores the first and last columns.  
	**Include all columns** includes the first and last columns of the board.  
	
	Also, you can customize the set of columns by specifying `2` for the columnOptions and then a comma-delimited list of the board columns to appear. For example, `?columnOptions=2&columns=Proposed,Committed,In%20Progress,In%20Review`, as shown in the following syntax. For column labels that include spaces, you must encode the space with `%20`. For example, `In%20Progress`.

	```
	[![Board Status](https://dev.azure.com/fabrikam/677da0fb-b067-4f77-b89b-f32c12bb8617/cdf5e823-1179-4503-9fb1-a45e2c1bc6d4/_apis/work/boardbadge/6fa7b56f-d27c-4e96-957d-f9e7b0f56705?columnOptions=2&columns=Proposed,Committed,In%20Progress,In%20Review)](https://dev.azure.com/fabrikam/677da0fb-b067-4f77-b89b-f32c12bb8617/_boards/board/t/cdf5e823-1179-4503-9fb1-a45e2c1bc6d4/Microsoft.RequirementCategory/)
	```

	And which will cause a badge similar to the following to display. 

	> [!div class="mx-imgBorder"]
	> ![A badge that displays.](media/badges/custom-columns.png) 

1. When done, choose <strong>Save and close</strong> or <strong>Cancel</strong>.

	> [!NOTE]  
	> The only setting that you can configure is the <strong>Allow anonymous users to access the status badge</strong>. The badge type under <strong> Settings</strong> only switches the  Markdown syntax for you to copy from the <strong>Sample Markdown</strong> and <strong>Image URL</strong> values. 

1. Open the README file in your GitHub repo and paste the syntax you copied to have the badge display.  

	You should see the same preview image that you selected with values that correspond to your Kanban board. For example: 

	![Status badge in gitHub repo](media/badges/badge-status-all-columns.png) 


## Related articles

- [Add columns to your Kanban board](../boards/add-columns.md)
- [Customize cards](../boards/customize-cards.md)
- [Configure team settings](../../organizations/settings/manage-teams.md) 
- [Troubleshoot GitHub & Azure Boards integration](troubleshoot-github-connection.md)