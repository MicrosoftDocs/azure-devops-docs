---
title: Add status badges for your GitHub repo
titleSuffix: Azure Boards
description: Learn how to add and configure your board badge status so it appears on your GitHub repo. 
ms.service: azure-devops-boards
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 03/24/2026
ai-usage: ai-assisted
---

# Add status badges for your GitHub repo 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 
 
Add Markdown syntax to a GitHub repo `README.md` file to display your board status as a badge. Copy the syntax from your board settings and paste it into the README.

This syntax works for both [GitHub.com and GitHub Enterprise Server connections](connect-to-github.md). For GitHub Enterprise Server, your server must be network accessible to Azure DevOps Services. 

## Prerequisites 

| Category | Requirements |
|--------------|-------------|
| **Permissions** | [Team administrator](../../organizations/settings/add-team-administrator.md) for the board's team, or member of the [**Project Administrators**](../../organizations/security/change-project-level-permissions.md) group. |
| **GitHub integration** | Project [connected to the GitHub repository](index.md) where you want to display the badge. |
| **Board** | An existing board for the team. Each team gets a board automatically. For more information, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md). |
| **Repository access** | Contributor access to the GitHub repository where you add the badge. |

## Add a status badge

1. Sign in to Azure Boards and [open your board](../boards/kanban-quickstart.md). 

1. Select :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: gear icon to open board settings.  

   :::image type="content" source="../../organizations/settings/media/configure-team/open-board-settings.png" alt-text="Screenshot of opening board settings."::: 

1. Select **Status badge**, then select or clear **Allow anonymous users to access the status badge**. When this option is cleared, users who aren't signed in can still view the badge.

   ::: moniker range="<=azure-devops"
   :::image type="content" source="media/badges/status-badge-s188.png" alt-text="Screenshot of board Settings dialog, Status badge tab.":::
   ::: moniker-end
   

1. Select a badge type, then select :::image type="icon" source="../../media/icons/copy.png" border="false"::: **Copy** to copy the Markdown syntax.

   - **Show "In progress" columns only** — excludes the first and last columns.  
   - **Include all columns** — shows all columns, including the first and last.  
   - **Custom columns** — set `columnOptions=2` and add a comma-delimited list of columns. Encode spaces as `%20` (for example, `In%20Progress`).

     Example syntax:

	```
	[![Board Status](https://dev.azure.com/fabrikam/677da0fb-b067-4f77-b89b-f32c12bb8617/cdf5e823-1179-4503-9fb1-a45e2c1bc6d4/_apis/work/boardbadge/6fa7b56f-d27c-4e96-957d-f9e7b0f56705?columnOptions=2&columns=Proposed,Committed,In%20Progress,In%20Review)](https://dev.azure.com/fabrikam/677da0fb-b067-4f77-b89b-f32c12bb8617/_boards/board/t/cdf5e823-1179-4503-9fb1-a45e2c1bc6d4/Microsoft.RequirementCategory/)
	```

   The rendered badge looks similar to the following image.

   :::image type="content" source="media/badges/custom-columns.png" alt-text="Screenshot showing badge rendered.":::

1. Select **Save**.

   The **Allow anonymous users to access the status badge** option is the only configurable setting. The badge type selection only changes the Markdown syntax available to copy.

1. Open the `README.md` file in your GitHub repo and paste the copied syntax.

	The badge renders with values that correspond to your board. 

## Related content

- [Add columns to your board](../boards/add-columns.md)
- [Customize cards](../boards/customize-cards.md)
- [Configure team settings](../../organizations/settings/manage-teams.md)
- [Change GitHub repository access](install-github-app.md#change-repository-access)
- [Integrate Azure Boards with GitHub](index.md) 
- [Troubleshoot GitHub & Azure Boards integration](connect-to-github.md#resolve-connection-issues)
