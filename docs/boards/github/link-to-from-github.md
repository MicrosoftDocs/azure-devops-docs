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
ms.date: 02/26/2026
---

# Link GitHub commits, pull requests, branches, and issues to work items in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

In this article, learn how to link work items to GitHub commits, pull requests, branches, and builds after connecting your Azure Boards project with a GitHub repository. You can use the **#mention** syntax for commits and branches, use `!` mentions to reference GitHub pull requests from work item discussions, or add a GitHub commit, pull request, or branch link directly from the Azure Boards work item.

[!INCLUDE[temp](../includes/github-platform-support.md)]

## Prerequisites 

| Category | Requirements |
|--------------|-------------|
| **Permissions** | **Contributor** to both the Azure Boards project and the GitHub repository. |
| **Project connection** | Azure Boards project is connected to the GitHub repository where the commits, pull requests, and branch you want to link to or from exist. For more information, see [Azure Boards-GitHub integration](index.md). |

::: moniker range="azure-devops"
> [!NOTE]   
> To view the Development section and GitHub link types, projects that use the Hosted XML process model require updates to the work item types. For more information, see [Update XML definitions for select work item types](troubleshoot-github-connection.md#update-wits). 
::: moniker-end

## Use `AB#` to link from GitHub to Azure Boards work items

From a GitHub commit, pull request, or issue, use the following syntax to create a link to your Azure Boards work item. Enter the `AB#ID` within the text of a commit message. Or, for a pull request or issue, enter the `AB#ID` within the description. Using `AB#ID` in a comment or pull request title doesn't create a link on the work item.

```
AB#{ID}
```

For example, `AB#125` links to work item ID 125.

You can also enter a commit or pull request message to transition the work item. The system recognizes `{state}` or `{state category}`, along with `fix`, `fixes`, `fixed`, and applies it to the #-mention item that follows. 

When a pull request description includes a valid state name, for example, ``Closed AB#1234``, the system updates the referenced work item to that specific state. If the state name isn't recognized directly, Azure Boards tries to match it to a workflow category like ``Resolved`` or ``Completed``. If a match is found, the work item transitions to the first available state defined under that category.

By default, work items referenced with ``fix``, ``fixes``, or ``fixed`` transition to the first state associated with the **Resolved** category. If no such state exists in the current process, the system instead transitions the work item to the first state in the **Completed** category.

> [!IMPORTANT]  
> You can still link work items and target other branches, but state transition rules don't apply unless the pull request is merged into the default branch.

For more information, see [How workflow category states are used in Azure Boards backlogs and boards](../work-items/workflow-and-state-categories.md).

Review the following table of examples:

| Commit or pull request message              | Action |
| :------------------------------------------ | :----------------------------------------------- |
| `Fixed AB#123`                              | Links and transitions the work item to the *Resolved* workflow state category or, if none is defined, then the *Completed* workflow state category. |
| `Closed AB#123`                             | Links and transitions the work item to the *Closed* workflow state. If none is defined, no transitions are made. 
| `Adds a new feature, fixes AB#123.`         | Links and transitions the work item to  the *Resolved* workflow state category or, if none is defined, then the *Completed* workflow state category. |
| `Fixes AB#123, AB#124, and AB#126`          | Links to Azure Boards work items 123, 124, and 126. Transitions only the first item, 123 to the *Resolved* workflow state category or, if none is defined, then the *Completed* workflow state category.|
| `Fixes AB#123, Fixes AB#124, Fixes AB#125` | Links to Azure Boards work items 123, 124, and 126. Transitions all items to   either the *Resolved* workflow state category or, if none is defined, then the *Completed* workflow state category. |
| `Fixing multiple bugs: issue #123 and user story AB#234` | Links to GitHub issue 123 and Azure Boards work item 234. No transitions are made. |

> [!NOTE]   
> If you connected the same GitHub repo to projects defined in two or more Azure DevOps organizations, you might see unexpected **AB#** mention linking. For more information, see [Resolve connection issues](connect-to-github.md#resolve-connection-issues). For this reason, we recommend that you only connect a GitHub repo to projects defined in a single Azure DevOps organization. 

<a id="link-existing"> </a>

When you add a link to a work item using `AB#` in a pull request description, those links appear in the **Development** section of the GitHub pull request. These links are available only when you use `AB#` in the pull request description. They don't appear if you link to the pull request directly from the work item. Removing the `AB#` reference from the description also removes it from the Development section.

:::image type="content" source="media/github/ab-links-development-control.png" border="true" alt-text="Screenshot of AB# links on the development section of GitHub pull request.":::

## Create GitHub branch from work item

To create a GitHub branch directly from a work item, use the following steps:

1. From your board, find the work item that you want to use to create a GitHub branch.

1. Select :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **Work item actions** > **New GitHub branch**.

   :::image type="content" source="media/link/create-github-branch-work-item-action.png" border="true" alt-text="Screenshot of work item More actions select and highlighted New GitHub branch option.":::

1. In the **Create a GitHub branch** dialog, enter the branch name. Select the GitHub repository and base branch.

1. Select **Create**.

   :::image type="content" source="media/link/create-github-branch-dialog.png" border="true" alt-text="Screenshot of Create a GitHub Branch dialog.":::

   Azure Boards creates the branch in the specified GitHub repository and links it to the work item. For more information, see [Azure Boards-GitHub integration](index.md).

<a id="link-work-item-to-branch-commit-pr">  </a>

## Add work item link to GitHub branch, commit, or pull request

1. Open your work item and go to the **Development** area.
1. Select **Add link**. From each dropdown menu, select your **link type**, **GitHub repository**, and **GitHub pull request**.
   You can search and drill down within the repository to find and select a specific pull request or commit, without needing to copy and paste a URL.
1. Select **Add link**.
   
   :::image type="content" source="media/link/add-pull-request-link.png" border="true" alt-text="Screenshot showing five-step sequence for adding a pull request link to work item.":::

   Azure Boards checks to ensure that you entered a valid link. The linked-to GitHub repository [must be connected to the Azure Boards project](connect-to-github.md) or the validation fails.

::: moniker range="=azure-devops-2022"

> [!NOTE]   
> If you're using Azure DevOps Server and GitHub Enterprise Server, a delay exists when completing the AB# links. The process uses a 'push-and-pull' design to pull from the GitHub events every hour on the incremental changes on Commit, PR, and Issue.

::: moniker-end

## Automatic link updates

Several events automatically update the links on the work item form, so you don't need to create them manually. These events include:

| GitHub event       | Action |
| :----------------- | :----------------------------------------------------------- |
| **Link to branch** | When a pull request is created from a branch, it automatically links to the work item. |
| **Merge commit**   | After the pull request is merged, the resulting merge commit automatically links to the work item. |
| **Delete branch**  | If the branch is deleted (typically after merging), its link is automatically removed from the work item. |

## View or open links from the Development section

The Development section in the work item form lists the links created to GitHub commits and pull requests by using the :::image type="icon" source="../../media/icons/github.png" border="false"::: GitHub icon. 

:::image type="content" source="media/link/git-hub-development-links.png" border="true" alt-text="Screenshot of work item form, Development section shows GitHub links.":::

Select the link to open the commit or pull request in GitHub.

### GitHub pull request insights

Linked GitHub pull requests in the Development section show extra status details, so you can assess progress without opening the pull request in GitHub.

#### Prerequisites for pull request insights

To see pull request insights, go to the [Azure Boards app in GitHub](https://github.com/apps/azure-boards) and accept the updated permissions for read and write access to Checks.

:::image type="content" source="media/link/github-pr-insights-permissions.png" border="true" alt-text="Screenshot of the Azure Boards GitHub app permissions dialog showing the updated Checks permissions.":::

#### View pull request status details

1. Open a work item that has a linked GitHub pull request.
2. In the **Development** section, find the linked pull request. The following status details appear next to the pull request link:

   - **Draft status**: Shows whether the pull request is still a draft.
   - **Review status**: Shows whether the pull request needs review, has been approved, or has changes requested.
   - **Checks status**: Shows whether CI checks are passing, failing, or pending.

   :::image type="content" source="media/link/github-pr-status-detail-indicators.png" border="true" alt-text="Screenshot of the Development section showing a linked GitHub pull request with closed, review, and checks status detail indicators.":::

3. Hover over a status indicator to see more details, or select the pull request link to open it directly in GitHub.

<a id="mention-github-pull-requests">  </a>

## Mention GitHub pull requests by using `!`

Use `!` mentions to reference and discuss GitHub pull requests directly from any work item rich-text field or discussion comment. When you type `!` in a text field, a picker appears that you can use to search for and select a GitHub pull request from a connected repository. The selected pull request is inserted as a clickable link.

This feature makes it easy to reference related pull requests in work item descriptions, acceptance criteria, or discussion threads without manually copying URLs.

:::image type="content" source="media/link/github-pr-mentions.gif" border="true" alt-text="Gif showing how to use the ! mention to reference a GitHub pull request from a work item discussion.":::

## View build status for YAML pipelines (Integrated in build)

When you use Azure Pipelines YAML to build code hosted in a GitHub repository, you can automatically create *Integrated in build* links on associated work items. This feature provides build traceability for GitHub repos, achieving parity with the experience available for Azure Repos.

To enable this feature:

1. Open your YAML pipeline, select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions**, and then select **Settings**.
1. In the **Pipeline settings** dialog, enable **Automatically link new work items in this build**.

   :::image type="content" source="media/link/yaml-pipeline-auto-link-setting.png" border="true" alt-text="Screenshot of YAML Pipeline settings dialog showing the Automatically link new work items in this build option.":::

When the build finishes, an *Integrated in build* link automatically appears in the **Development** section of each associated work item, giving your team full traceability from work item to build.

:::image type="content" source="media/link/integrated-in-build-link.png" border="true" alt-text="Screenshot of work item showing the Integrated in build link in the Development section.":::

For more information about configuring this setting, see [Configure pipelines to support work tracking](../../pipelines/integrations/configure-pipelines-work-tracking.md).

<a id="view-github-objects-on-board"> </a>

## View GitHub objects on a board

By enabling GitHub annotations on the board, you can quickly open linked GitHub commits, pull requests, or issues for more detail. For more information, see [Customize cards](../boards/customize-cards.md).

:::image type="content" source="media/link/board-view-github-links.png" border="true" alt-text="Screenshot of board that shows GitHub links on work item cards.":::

## Next steps

> [!div class="nextstepaction"]
> [Configure status badges](configure-status-badges.md)

## Related content

- [Integrate Azure Boards with GitHub](index.md)
- [Configure pipelines to support work tracking](../../pipelines/integrations/configure-pipelines-work-tracking.md)
- [Understand how workflow category states are used in Azure Boards backlogs and boards](../work-items/workflow-and-state-categories.md)
- [Link work items to objects](../backlogs/add-link.md)
- [Troubleshoot GitHub and Azure Boards integration](troubleshoot-github-connection.md)
