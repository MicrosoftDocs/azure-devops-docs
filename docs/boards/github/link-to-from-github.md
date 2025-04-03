---
title: Link GitHub commits, PRs, branches, and issues to work items
titleSuffix: Azure Boards 
description: Learn how to links work items to GitHub commits, pull requests, branches, and issues, and automatically transition work item states in Azure Boards.  
ms.service: azure-devops-boards 
ms.custom: work-items, github, engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: "<=azure-devops"
ms.date: 10/02/2024
---

# Link GitHub commits, pull requests, branches, and issues to work items in Azure Boards

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

In this article, learn how to link work items to GitHub commits, pull requests, and branches after connecting your Azure Boards project with a GitHub repository. You can use the **#mention** syntax for commits and branches or add a GitHub commit, pull request, or branch link directly from the Azure Boards work item.

[!INCLUDE[temp](../includes/github-platform-support.md)]

## Prerequisites 

| Category | Requirements |
|--------------|-------------|
| **Permissions** | **Contributor** to both the Azure Boards project and the GitHub repository. |
| **Project connection** | Azure Boards project is connected to the GitHub repository where the commits, pull requests, and branch you want to link to or from exist. For more information, see [Azure Boards-GitHub integration](index.md). |

::: moniker range="azure-devops"
> [!NOTE]   
> Projects that use the Hosted XML process model require updates to the work item types to view the Development section and GitHub link types. For more information, see [Update XML definitions for select work item types](troubleshoot-github-connection.md#update-wits). 
::: moniker-end

## Use `AB#` to link from GitHub to Azure Boards work items

From a GitHub commit, pull request or issue, use the following syntax to create a link to your Azure Boards work item. Enter the `AB#ID` within the text of a commit message. Or, for a pull request or issue, enter the `AB#ID` within the title or description. Using `AB#ID` in a comment doesn't create a link on the work item.

```
AB#{ID}
```

For example, `AB#125` links to work item ID 125.

You can also enter a commit or pull request message to transition the work item. The system recognizes `fix`, `fixes`, and `fixed`, and applies it to the #-mention item that follows. Mentioned work items transition to the first **State** associated with the *Resolved* workflow category state. If no **State** is associated with *Resolved*, the work item transitions to the **State** associated with the *Completed* workflow category state. For more information, see [How workflow category states are used in Azure Boards backlogs and boards](../work-items/workflow-and-state-categories.md).

Review the following table of examples:

| Commit or pull request message              | Action |
| :------------------------------------------ | :----------------------------------------------- |
| `Fixed AB#123`                              | Links and transitions the work item to the *Resolved* workflow state category or, if none is defined, then the *Completed* workflow state category. |
| `Adds a new feature, fixes AB#123.`         | Links and transitions the work item to  the *Resolved* workflow state category or, if none is defined, then the *Completed* workflow state category. |
| `Fixes AB#123, AB#124, and AB#126`          | Links to Azure Boards work items 123, 124, and 126. Transitions only the first item, 123 to the *Resolved* workflow state category or, if none is defined, then the *Completed* workflow state category.|
| `Fixes AB#123, Fixes AB#124, Fixes AB#125` | Links to Azure Boards work items 123, 124, and 126. Transitions all items to   either the *Resolved* workflow state category or, if none is defined, then the *Completed* workflow state category. |
| `Fixing multiple bugs: issue #123 and user story AB#234` | Links to GitHub issue 123 and Azure Boards work item 234. No transitions are made. |

> [!NOTE]   
> If you connected the same GitHub repo to projects defined in two or more Azure DevOps organizations, you might see unexpected **AB#** mention linking. For more information, see [Resolve connection issues](connect-to-github.md#resolve-connection-issues). For this reason, we recommend that you only connect a GitHub repo to projects defined in a single Azure DevOps organization. 

<a id="link-existing"> </a>

When you add a link to a work item using AB#, those links appear in the **Development** section of the pull request.

:::image type="content" source="media/github/ab-links-development-control.png" alt-text="Screenshot of AB# links on the development section of GitHub pull request.":::

## Create GitHub branch from work item

To create a GitHub branch directly from a work item, do these steps:

1. From your board, find the work item from which you want to create a GitHub branch.

2. Select :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **Work item actions** > **New GitHub branch**.

   :::image type="content" source="media/link/create-github-branch-work-item-action.png" alt-text="Screenshot of work item More actions select and highlighted New GitHub branch option.":::

3. In the **Create a GitHub branch** dialog, enter the branch name, and select the GitHub repository and base branch.

4. Select **Create**.

   :::image type="content" source="media/link/create-github-branch-dialog.png" alt-text="Screenshot of Create a GitHub Branch dialog.":::

   Azure Boards creates the branch in the specified GitHub repository and links it to the work item. For more information, see [Azure Boards-GitHub integration](index.md).

<a id="link-work-item-to-branch-commit-pr">  </a>

## Add work item link to GitHub branch, commit, or pull request

1. Open the work item and go to the **Links** tab.

   :::image type="content" source="media/link/add-link-from-links-tab.png" alt-text="Screenshot of work item form, Links tab, Add link to issue.":::

2. From the **Add link** dialog, select one of the **GitHub** link types, select a GitHub repository, enter the URL to the GitHub branch, commit, or pull request, and then select **Add link**.

   In the following example, we add a link to a GitHub pull request.

   :::image type="content" source="media/link/link-from-azb-gh-pull-requests.png" alt-text="Screenshot of work item form, Links tab, Add link dialog, GitHub pull request link type selected.":::

   Azure Boards completes a check to ensure that you entered a valid link. The linked-to GitHub repository [must be connected to the Azure Boards project](connect-to-github.md) or the validation fails.

::: moniker range="<= azure-devops-2022"

> [!NOTE]   
> There's a delay when completing the AB# links if you are using Azure DevOps Server and GitHub Enterprise Server. We have a 'push-and-pull' design to pull from the GitHub events every hour on the incremental changes on Commit, PR, and Issue.

::: moniker-end

## Link automatic updates

Several events automatically update the links on the work item form, so you don’t need to create them manually. These include:

| GitHub Event       | Action |
| :----------------- | :----------------------------------------------------------- |
| **Link to branch** | When a pull request is created from a branch, it is automatically linked to the work item. |
| **Merge commit**   | After the pull request is merged, the resulting merge commit is automatically linked to the work item. |
| **Delete branch**  | If the branch is deleted (typically after merging), its link is automatically removed from the work item. |

## View or open links from the Development section

The Development section within the work item form lists the links created to GitHub commits and pull requests with the :::image type="icon" source="../../media/icons/github.png" border="false"::: GitHub icon. 

:::image type="content" source="media/link/git-hub-development-links.png" alt-text="Screenshot of work item form, Development section shows GitHub links.":::

Choose the link provided to open the commit or pull request in GitHub.  

<a id="view-github-objects-on-board"> </a>

## View GitHub objects on a board

With GitHub annotations enabled on the board, you can quickly open linked GitHub commits, pull requests, or issues for more detail. For more information, see [Customize cards](../boards/customize-cards.md).

:::image type="content" source="media/link/board-view-github-links.png" alt-text="Screenshot of board that shows GitHub links on work item cards.":::

## Next steps

> [!div class="nextstepaction"]
> [Configure status badges](configure-status-badges.md)

## Related articles

- [Integrate Azure Boards with GitHub](index.md)
- [Understand how workflow category states are used in Azure Boards backlogs and boards](../work-items/workflow-and-state-categories.md)
- [Link work items to objects](../backlogs/add-link.md)
- [Troubleshoot GitHub and Azure Boards integration](troubleshoot-github-connection.md)
