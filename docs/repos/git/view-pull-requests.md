---
title: View, filter, and open pull requests
titleSuffix: Azure Repos
description: Learn different ways to list, filter, and open Git pull requests in Azure Repos.
ms.assetid: 4C9DFD24-E894-454A-A080-DA511C90CA74
ms.technology: devops-code-git 
ms.topic: conceptual
ms.author: vijayma
author: vijayma
ms.date: 10/30/2021
monikerRange: '<= azure-devops'
---

# View, filter, and open pull requests

[!INCLUDE [temp](../includes/version-tfs-2015-cloud.md)]
[!INCLUDE [temp](../includes/version-vs-2015-vs-2019.md)]

Teams can require PRs for any changes on protected branches, and set [branch policies](branch-policies.md) to require those PRs to meet certain criteria. There are several ways to list and filter PRs for a project, and open active PRs for review.

## Prerequisites

::: moniker range="azure-devops"
- **Repos** must be enabled on your project. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md) to reenable Repos.
 
- To view PRs, you must be a member of the Azure DevOps project the PR is in, with **Basic** access or higher. If you aren't a project member, [get added](../../organizations/accounts/add-organization-users.md).

> [!NOTE]
> For public projects, users granted **Stakeholder** access have full access to Azure Repos.
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"
- **Repos** must be enabled on your project. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md) to reenable Repos.
- To view PRs, you must be a member of the Azure DevOps project with **Basic** access or higher. If you aren't a project member, [get added](../../organizations/security/add-users-team-project.md).
::: moniker-end

::: moniker range="< azure-devops-2019"
- To view or review PRs, you must be a member of the Azure DevOps project with **Basic** access or higher. If you aren't a project member, [get added](../../organizations/security/add-users-team-project.md).

::: moniker-end

To learn more about permissions and access, see [Default Git repository and branch permissions](../../organizations/security/default-git-permissions.md) and [About access levels](../../organizations/security/access-levels.md).

## Mobile experience

You can use mobile devices to view all Azure Repos PR screens and actions.

![Screenshot of Azure Repos P R screens on a mobile device.](media/view-pull-requests/phone-screen.png)

## List PRs

You can list PRs by using the Azure DevOps project website, Visual Studio, or the Azure DevOps command line.

# [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"

1. To list PRs in a specific repository in a project, [go to that project](../../project/navigation/go-to-project-repo.md) in the web portal and select **Repos** > **Pull requests**.

   ![Screenshot of viewing your pull requests.](media/view-pull-requests/repos-pull-requests.png)

1. Verify that you selected the correct repository.

   ![Screenshot of choosing your repo.](media/view-pull-requests/pull-requests-breadcrumb.png)

1. The default view shows your PRs under the **Mine** tab. Select **Active** to show all active PRs for the current repository. Select **Completed** or **Abandoned** to bring up lists of closed PRs.

   Select any PR in the list to go to that PR's **Overview** page.

   ![Screenshot of the view tabs for PRs in Azure Repos.](media/view-pull-requests/pr-status-widget.png)

1. You can list all of your PRs across different projects in your organization by choosing **Pull requests** in the **My Work** view.

   ![Screenshot of viewing all your pull requests.](media/view-pull-requests/view-all-my-pull-requests.png)

::: moniker-end

::: moniker range="<= tfs-2018"

Manage PRs you own or are assigned to with the **Pull Requests** tab in the **Code** page on the web.

![Screenshot of viewing completed and abandoned PRs in Azure Repos.](media/view-pull-requests/repos-code-pull-requests.png)

::: moniker-end 

::: moniker range="<= tfs-2017" 

Select **Active** to show all active PRs for the current repo.

Select **Completed** or **Abandoned** to bring up a history of closed PRs.

![Viewing completed and abandoned PRs in Azure Repos.](media/view-pull-requests/pr-status-widget.png)

::: moniker-end 

::: moniker range="<= tfs-2018"

You can view all of your PRs in your organization, across all projects, by choosing **My pull requests** from the **Projects** page.

![View all my pull requests](media/view-pull-requests/view-all-pull-requests.png)

::: moniker-end 

### Filter PRs

Filtering helps you find and organize PRs to prioritize the most important files in your workflow.

::: moniker range=">= azure-devops-2019"

- To filter PRs by target branch, on the select the **Filter** icon at upper right, and then select **Target branch**. Select the branch you want from the dropdown list.

- To create queries with more filters, select **Customize view** on the **Pull requests** page, and then select **Add section**. In the **Customize section** pane, you can create queries with more filters, such as draft state. These queries create separate and collapsible sections to enable better PR actionability. The queries work across repositories on the **My pull requests** tab of the organization home page.

::: moniker-end

::: moniker range=">= azure-devops-2020"

On a PR **Files** page, you can use several filters to select files and comments for faster reviews. Select **Filter**, and then select among the following options:

- Keyword: Enter a keyword.
- Reviewed/Unreviewed: **All** (default), **Pending**, **Reviewed**.
- Commented files: **All files** (default), **Files with comments**.
- Comments: **Show** (default), **What's new**, **Hide**.
- Comment status: **Active** (default), **Pending**, **Resolved**, **As designed**, **Won't fix**, **Closed**.
- Commented by: **All comments** (default), or a specific person.

::: moniker-end


# [Visual Studio](#tab/visual-studio)

In Visual Studio 2015, 2017, and 2019, you can access PRs from Visual Studio Team Explorer.

1. [Connect to your project from Visual Studio](../../organizations/projects/connect-to-projects.md).

1. Select **View** > **Team Explorer** to open Team Explorer. You can also press **Ctrl**+**\\**, **Ctrl**+**M**.

1. From **Home**, select **Pull Requests** to view lists of PRs opened by you or assigned to you.
   - To view the PR list in the Azure DevOps web portal, select **Actions** and then select **Open in browser**.
   - To open a PR in the web portal, right-click the PR and select **Open in browser**.

   ![Screenshot of the P R list in Visual Studio Team Explorer.](./media/view-pull-requests/list-prs.png)

### Filter PRs

Filtering helps you find and organize PRs to prioritize the most important files in your workflow.

From the Team Explorer **Pull Requests** view:
- Select **Active**, or **Assigned to me or my team**, to filter the PR lists by PR status or assignment.
- Type in the **Type here to filter the list** fields to filter the PR lists by date, author, branch, or other attributes.

### Check out a branch

Starting with Visual Studio 2017 Update 6, you can check out a PR's source branch directly from the **Pull Requests** view. Right-click a PR, and choose **Checkout Source Branch**.

![Screenshot that shows Checkout source branch.](./media/view-pull-requests/checkout-pr-source-branch.png)

[!INCLUDE [temp](includes/note-new-git-tool.md)]


# [Azure Command Line](#tab/azure-command-line)

::: moniker range=">= azure-devops-2020"

In Azure DevOps Server 2020 and Azure DevOps Services, you can manage PRs and other resources from the [Azure command-line interface (CLI)](/cli/azure/?view=azure-cli-latest&preserve-view=true) with the `azure-devops` extension. For more information about working with the Azure DevOps Services CLI, see [Get started with Azure DevOps CLI](../../cli/index.md).

Many `az devops` commands require `--org` and `--project` parameters. To avoid having to enter these parameters, you can set a default Azure DevOps organization and project with `az devops configure --defaults`.

For example, to set the Fabrikam Fiber project and FabrikamPrime organization as defaults, use:

```azurecli
az devops configure --defaults organization=https://fabrikamprime.visualstudio.com project="Fabrikam Fiber"
```

Once you set the defaults, `az devops` commands use the default organization and project. You can use the `org` and `project` parameters to specify other organizations and projects you have access to.

Azure Repos CLI commands for PRs use [az repos pr](/cli/azure/repos/pr).

### List and show PRs

To list active PRs in your project with their details, use [az repos pr list](/cli/azure/repos/pr#az_repos_pr_list). To list all PRs regardless of status, use <br>`az repos pr list --status all`.

To show all the details for a single PR, use [az repos pr show](/cli/azure/repos/pr#az_repos_pr_show) with the required `id` parameter. The PR `id` is the `pullRequestId` from the PR list details. To open the PR in your browser, use `open`.

For example, to see the details for PR #21 and open it in your browser, use:

```azurecli
az repos pr show --id 21 --open
```

### Filter PRs

Filtering helps you find and organize PRs to prioritize the most important files in your workflow.

You can use several parameters with [az repos pr list](/cli/azure/repos/pr#az_repos_pr_list) to filter the list of PRs, such as:

```azurecli
az repos pr list [--creator]
                 [--project]
                 [--repository]
                 [--reviewer]
                 [--source-branch]
                 [--status {abandoned, active, all, completed}]
                 [--target-branch]
                 [--top]
```
The `creator` and `reviewer` values can be display names or email addresses. The `top` parameter defines the maximum number of PRs to list.

For example, to list details about the last PR you created, regardless of its status, use:

```azurecli
az repos pr list --creator "My Name" --status all --top 1
```

### Check out a branch

Use [az repos pr checkout](/cli/azure/repos/pr#az_repos_pr_checkout) with the required `id` parameter to check out a PR branch locally, as long as there are no local changes.

For example, to check out the branch for PR #21 locally, use:

```azurecli
az repos pr checkout --id 21
```

::: moniker-end

::: moniker range="<= azure-devops-2019"

The Azure CLI isn't supported in this version. For more information, see [Get started with Azure DevOps CLI](../../cli/index.md).

::: moniker-end


[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

***


## Open a PR

When you open a PR from the browser, from Visual Studio, or from Azure CLI, the PR opens to its **Overview** tab. The **Overview** tab shows the PR title, description, reviewers, linked worked items, history, and status. You can see a summary of branch policies that are passing or failing, and see comments reviewers have made.

:::image type="content" source="media/view-pull-requests/pull-request-overview-2020.png" alt-text="Screenshot that shows the P R Overview tab.":::

On the PR **Files** tab, you can review the actual changes in the PR files. On the **Updates** and **Commits** tabs, you can see changes the author has made to update the PR branch.

To review the changes, make comments or suggestions, or approve or vote on the PR, see [Review pull requests](review-pull-requests.md).

## Next steps

- [Create a pull request](pull-requests.md)
- [Review pull requests](review-pull-requests.md)
- [Pull request update notifications](pull-request-notifications.md)
- [Complete a pull request](complete-pull-requests.md)
- [Change the default branch](change-default-branch.md)
- [Copy changes with cherry-pick](cherry-pick.md)
- [About pull requests and permissions](about-pull-requests.md)
