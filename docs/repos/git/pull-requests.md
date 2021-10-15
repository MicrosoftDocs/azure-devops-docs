---
title: Review and merge code with pull requests
titleSuffix: Azure Repos
description: Learn how to view, create, review, update, and complete pull requests in Git with Azure Repos.
ms.assetid: 4C9DFD24-E894-454A-A080-DA511C90CA74
ms.technology: devops-code-git 
ms.topic: conceptual
ms.author: vijayma
author: vijayma
ms.date: 10/11/2021
monikerRange: '<= azure-devops'
---

# Create, review, and manage pull requests

[!INCLUDE [temp](../includes/version-tfs-2015-cloud.md)]
[!INCLUDE [temp](../includes/version-vs-2015-vs-2019.md)]

Create pull requests (PRs) to change, review, and merge code in a [Git project](../../organizations/projects/create-project.md). You can create PRs from branches in the same repository or from branches in your [fork](forks.md) of the repository.

Your team can review the PRs and give feedback on changes before they merge into the main branch. Reviewers can step through the proposed changes, leave comments, and vote to approve or reject the PRs.

For PR guidelines and management considerations, see [About pull requests](about-pull-requests.md).

## Prerequisites

::: moniker range="azure-devops"
- **Repos** must be enabled on your project. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md) to reenable Repos.
 
- To view or review PRs, you must be a member of an Azure DevOps project with **Basic** access or higher.
  - If you don't have a project, create one or [sign up for free](../../user-guide/sign-up-invite-teammates.md).
  - If you aren't a project member, [get added](../../organizations/accounts/add-organization-users.md).

- To contribute to a PR, you must be a member of the **Readers** security group or have the corresponding permissions.

- To create and complete a PR, you must be a member of the **Contributors** security group or have the corresponding permissions.

> [!NOTE]
> For public projects, users granted **Stakeholder** access have full access to Azure Repos.
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"
- **Repos** must be enabled on your project. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md) to reenable Repos.
- To view or review PRs, you must be a member of an Azure DevOps project with **Basic** access or higher. If you aren't a project member, [get added](../../organizations/security/add-users-team-project.md).
- To contribute to a PR, you must be a member of the **Readers** security group or have the corresponding permissions.
- To create and complete a PR, you must be a member of the **Contributors** security group or have the corresponding permissions.
::: moniker-end

::: moniker range="< azure-devops-2019"
- To view or review PRs, you must be a member of an Azure DevOps project with **Basic** access or higher. If you aren't a project member, [get added](../../organizations/security/add-users-team-project.md).
- To contribute to a PR, you must be a member of the **Readers** security group or have the corresponding permissions.
- To create and complete a PR, you must be a member of the **Contributors** security group or have the corresponding permissions.

::: moniker-end

To learn more about permissions and access, see [Default Git repository and branch permissions](../../organizations/security/default-git-permissions.md) and [About access levels](../../organizations/security/access-levels.md).

## View pull requests

# [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"

1. To view PRs in a specific repository in a project, [go to that project](../../project/navigation/go-to-project-repo.md) in the web portal and select **Repos** > **Pull requests**.

   ![Screenshot of viewing your pull requests.](media/pull-requests/repos-pull-requests.png)

1. Verify that you selected the correct repository.

   ![Screenshot of choosing your repo.](media/pull-requests/pull-requests-breadcrumb.png)

1. The default view shows your PRs under the **Mine** tab. Select **Active** to show all active PRs for the current repository. Select **Completed** or **Abandoned** to bring up lists of closed PRs.

   Select any PR in the list to go to that PR's **Overview** page.

   ![Screenshot of the view tabs for PRs in Azure Repos.](media/pull-requests/pr_status_widget.png)

1. You can view all of your PRs across different projects in your organization by choosing **Pull requests** in the **My Work** view.

   ![Screenshot of viewing all your pull requests.](media/pull-requests/view-all-my-pull-requests.png)

::: moniker-end

::: moniker range="<= tfs-2018"

Manage PRs you own or are assigned to with the **Pull Requests** tab in the **Code** page on the web.

![Screenshot of viewing completed and abandoned PRs in Azure Repos.](media/repos-navigation/repos-code-pull-requests.png)

::: moniker-end 

::: moniker range="<= tfs-2017" 

Select **Active** to show all active PRs for the current repo.

Select **Completed** or **Abandoned** to bring up a history of closed PRs.

![Viewing completed and abandoned PRs in Azure Repos.](media/pull-requests/pr_status_widget.png)

::: moniker-end 

::: moniker range="<= tfs-2018"

You can view all of your PRs in your organization, across all projects, by choosing **My pull requests** from the **Projects** page.

![View all my pull requests](media/pull-requests/view-all-pull-requests.png)

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

   ![Screenshot of the P R list in Visual Studio Team Explorer.](./media/pull-requests/list-prs.png)

### Filter PRs

Filtering helps you find and organize PRs to prioritize the most important files in your workflow.

From the Team Explorer **Pull Requests** view:
- Select **Active**, or **Assigned to me or my team**, to filter the PR lists by PR status or assignment.
- Type in the **Type here to filter the list** fields to filter the PR lists by date, author, branch, or other attributes.

### Check out a branch

Starting with Visual Studio 2017 Update 6, you can check out a PR's source branch directly from the **Pull Requests** view. Right-click a PR, and choose **Checkout Source Branch**.

![Screenshot that shows Checkout source branch.](./media/pull-requests/checkout-pr-source-branch.png)

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


***


### Mobile experience

All Azure Repos PR screens and actions are available on mobile devices.

![Screenshot of Azure Repos P R screens on a mobile device.](media/pull-requests/phone-screen.png)

<a name="create-a-new-pull-request"></a>
## Create a pull request

You can create a new PR from the Azure DevOps project website, from Visual Studio, or from the Azure DevOps CLI.

# [Browser](#tab/browser)

From the Azure DevOps project website, you can create a new PR from:

- [A feature branch pushed to your repo](#from-a-pushed-branch).
- [The Development section in a linked Azure Boards work item](#from-a-linked-work-item).
- [The Pull requests page](#from-the-pull-requests-page).

### From a pushed branch

::: moniker range=">= azure-devops-2019"

After you push or update a feature branch, Azure Repos displays a prompt to create a PR.

- On the **Pull requests** page:

  ![Screenshot that shows the prompt to create a P R on the Pull Requests tab in Azure Repos.](media/pull-requests/create-pr-from-push-new-nav.png)

- On the **Files** page:

  ![Screenshot that shows the prompt to create a P R on the Files tab in Azure Repos.](media/pull-requests/create-pr-from-push-files-tab-new-nav.png)

Select **Create a pull request** to go to a page where you can [enter your PR details](pull-requests.md#finish) and create the PR.

::: moniker-end

::: moniker range="<= tfs-2018"

After you push or update a feature branch, Azure Repos prompts you to create a PR in the **Code** view on the web. This prompt is displayed on **Pull Requests** and **Files**.

![Screenshot that shows the prompt to create a P R on the Pull Requests tab in Azure Repos.](media/pull-requests/create-pr-from-push.png)

![Screenshot that shows the prompt to create a P R on the Files tab in Azure Repos.](media/pull-requests/create-pr-from-push-files-tab.png)

Select **Create a pull request** to go to a page where you can [enter your PR details](pull-requests.md#finish) and create the PR.

::: moniker-end

### From a linked work item

You can create a PR directly from an Azure Boards work item linked to the branch.

1. In Azure Boards, from **Backlogs** or **Queries** in the **Work** view, open a work item that's linked to the branch.
1. In the **Development** area of the work item, select **Create a pull request**.

   ![Screenshot of creating a P R from the Development area of a work item with a linked branch.](media/pull-requests/create-pr-from-work-item.png)

The link takes you to a page where you can [enter your PR details](pull-requests.md#finish) and create the PR.

### From the Pull requests page

You can create PRs for any branch from your project's **Pull requests** page on the web.

1. On the **Repos** > **Pull requests** page, select **New pull request** at upper right.

   ![Screenshot of the New pull request button.](media/pull-requests/new-pr-button.png)

1. Select the branch with the changes and the branch you want to merge the changes into, such as the main branch.

   ![Screenshot of source and target branches for a P R in Azure Repos.](media/pull-requests/pr-branch-targets.png)

1. [Enter your PR details](pull-requests.md#finish) and create the PR.


# [Visual Studio](#tab/visual-studio)

To create PRs directly from Visual Studio:

1. From the **Pull Requests** view in Team Explorer, select **New Pull Request**.

   ![Screenshot of selecting New Pull Request.](media/pull-requests/new-pull-request.png)

1. Select the source and target branches, enter a title and optional description, and select **Create**. 

   ![Screenshot of creating a new P R in Visual Studio Team Explorer.](media/pull-requests/new-pr.png)

1. After the PR is created, select **Open in browser** to open the new PR in the Azure DevOps web portal.

You can also create PRs from the **Branches** view in Team Explorer by right-clicking the branch name and selecting **Create Pull Request**.

![Screenshot of initiating a P R from the Branches view.](media/pull-requests/new-pr-from-branch.png)


# [Azure Command Line](#tab/azure-command-line)

::: moniker range=">= azure-devops-2020"

To create a new PR in your project, use [az repos pr create](/cli/azure/repos/pr#az_repos_pr_create). The only parameters you need to add are `repository` and `source-branch`. If you don't specify `target-branch`, the PR targets the default branch of the target repository. To open the PR in your browser after creation, use `open`.

For example, the following command creates a PR from the `new` branch to the default `main` branch of the Fabrikam repository, and then opens the PR in the browser:

```azurecli
az repos pr create --repository Fabrikam --source-branch new --open
```

You can specify several other details about PRs at creation. To add details, reviewers, work items, and completion options to the PR at creation, see [Add details to PRs](#add-details-to-prs).

::: moniker-end


***


<a name="draft-pull-requests"></a>
## Create draft PRs

> [!NOTE]
> Draft PRs were added in the Azure DevOps Server 2019.1 update.

::: moniker range=">=azure-devops-2019"

If your PR isn't ready for review, you can create a draft PR to indicate work in progress. When the PR is ready for review, you can publish it, and begin or resume the full review process.

Draft PRs have the following differences from published PRs:

- Build validation policies don't run automatically. You can queue build validations manually by selecting the more options menu in the PR.
- Voting is disabled while in draft mode.
- Required reviewers aren't automatically added. Notifications are sent only to reviewers that you explicitly add to the draft PR.
- Draft PRs display in the PR list with a **Draft** badge.

  ![Screenshot showing a draft P R in the P R list.](media/pull-requests/draft-pull-request-badge.png)

::: moniker-end

# [Browser](#tab/browser)

::: moniker range=">=azure-devops-2019"
To create a draft PR, select the arrow next to **Create** and select **Create as draft** when creating the PR. You don't have to use title prefixes such as WIP or DO NOT MERGE.

![Screenshot showing Create as draft P R.](media/pull-requests/create-draft-pr.png)

::: moniker-end

::: moniker range=">=azure-devops-2019"

When you're ready to have the PR reviewed and completed, select **Publish** at upper right in the PR. Publishing a PR assigns required reviewers, evaluates policies, and kicks off voting.

![Screenshot showing Publish for a P R.](media/pull-requests/publish-pr.png)

To change an existing published PR to a draft, choose **Mark as draft**. Marking a PR as draft removes all existing votes.

![Screenshot showing Mark as draft.](media/pull-requests/mark-pr-as-draft.png)

::: moniker-end


# [Visual Studio](#tab/visual-studio)

To set a PR to draft, from the **Pull Requests** view in Team Explorer, right-click the PR and select **Open in browser**. On the PR's **Overview** page, select **Mark as draft**.


# [Azure Command Line](#tab/azure-command-line)

::: moniker range=">= azure-devops-2020"

To create a PR as a draft, set the `draft` parameter to `true` when you create the PR.

For example:

```azurecli
az repos pr create --repository Fabrikam --source-branch new --draft true
```

To set an existing PR to draft, use `az repos pr update --id <PR Id> --draft true`

To remove draft status from a PR, set `draft` to `false`.

::: moniker-end


***

<a name="finish"></a>
## Add details to PRs

# [Browser](#tab/browser)

On the **New pull request** page, enter a **Title** and detailed **Description** of your changes, so others can see what problems the changes solve. As in an existing PR, you can see the **Files** and **Commits** in your PR on separate tabs. You can add reviewers, link work items, and add tags to the PR.

When you're ready to have your changes reviewed, select **Create** to create the PR.

:::moniker range="azure-devops"

:::image type="content" source="media/pull-requests/create-new-pull-request-2020.png" alt-text="Screenshot that shows creating a new PR.":::

:::moniker-end

:::moniker range="<= azure-devops-2020"

:::image type="content" source="media/pull-requests/add-detail-to-pr.png" alt-text="Adding details to a new PR.":::

:::moniker-end

Don't worry if you don't have all of the work items, reviewers, or details ready when you create your PR. You can add or update these items after you create the PR.

### Edit PR title and description

Keep the PR title and description up to date so reviewers can understand the changes in the PR.

You can update the title of an existing PR by selecting the current title and updating the text. Select the **Save** icon to save changes, or select the **Undo** icon to discard the changes.

Edit the PR description by selecting the **Edit** icon in the **Description** section.

:::image type="content" source="media/pull-requests/pull-request-edit-title-description-2020.png" alt-text="Screenshot that shows editing the PR title and selecting the description Edit button.":::

::: moniker range="azure-devops"

### Use tags

Use tags to show important details and help organize PRs. Tags can communicate extra information to reviewers, such as that the PR is still a work in progress, or is a hotfix for an upcoming release. 

![Screenshot showing P Rs with tags.](media/pull-requests/pull-request-labels.png)

To add a tag when creating a PR, type a tag name in the **Tags** section. After you create the PR, you can manage tags in the **Tags** section.

:::image type="content" source="media/pull-requests/pull-request-tags-section.png" alt-text="Screenshot that shows the PR Tags section highlighted.":::

::: moniker-end

::: moniker range="<= azure-devops-2020"

### Help reviewers by using PR labels

You can communicate extra information about a PR to the reviewers by using labels. Maybe the PR is still a work in progress, or it's a hotfix for an upcoming release. Use labels to communicate important details and help organize PRs.

![Screenshot showing P Rs with labels.](media/pull-requests/pull-request-labels.png)

To add a label when creating a PR, choose **Add label**. After you create a PR, you can manage its labels in the **Labels** section.

![Add PR label](media/pull-requests/add-pull-request-label.png)

::: moniker-end

<a name="add-and-remove-reviewers"></a>
### Add reviewers

::: moniker range="azure-devops"

You can add reviewers in the **Reviewers** section of a new or existing PR. You can also make existing optional reviewers required, or change required reviewers to optional or remove them, unless they're required by policy.

If the user or group you want to review the PR isn't a member of your project, you'll need to [add them to the project](../../organizations/security/add-users-team-project.md) before you can add them as reviewers.

To add reviewers to your PR:

- In a new PR:

  1. On the **New pull request** page, under **Reviewers**, select **Search users and groups to add as reviewers**.
  1. As you enter a name or email address, a dropdown list shows a list of matching users and groups. Select names from the list to add as optional reviewers.
  1. To add required reviewers, select **Add required reviewers**, and then select **Search to add required reviewers** to search for and select the names.
  
  ![Screenshot of adding a reviewer to a new PR.](media/pull-requests/add-reviewer.png)

- In an existing PR:

  1. In the **Reviewers** section of the **Overview** page, select **Add**, and then select **Required reviewer** or **Optional reviewer**.

     :::image type="content" source="media/pull-requests/pull-request-add-reviewer-v2.png" alt-text="Pull request overview":::

  1. As you enter a name or email address, a list of matching users or groups appears. Select the names to add as reviewers.

     :::image type="content" source="media/pull-requests/pull-request-add-reviewer.png" alt-text="Add PR reviewer.":::

  To change a reviewer between required and optional, or remove a reviewer, select **More options** to the right of the reviewer name. To see the membership of a group or team designated as a reviewer, select the group's icon.

Branch policies can automatically include optional or required reviewers in all or certain PRs. You can change optional included reviewers to be required or remove them, but you can't remove reviewers that are required by branch policy.

In the **Reviewers** section of the PR **Overview** page, right-click **More options** next to an automatically included reviewer to see the branch policy that included them.

![Screenshot that shows View policy on a reviewer that's automatically included by branch policy.](media/pull-requests/view-policy.png)

::: moniker-end

:::moniker range="<= azure-devops-2020"

To add reviewers to your PR:

1. Select **Overview** in the PR.

   :::image type="content" source="media/pull-requests/pull-request-overview-reviewers-new-nav.png" alt-text="Screenshot that shows the PR Overview tab":::    

1. Select the **Add** button in the **Reviewers** area.

1. Enter the name of the user or group to add to the reviewer list for the PR. If the user isn't a member of your project, you'll need to [add them](../../organizations/security/add-users-team-project.md).

1. As you enter a name or email address, a list of matching users or groups appears. Select the user or group from the list to add them as a reviewer.

   :::image type="content" source="media/pull-requests/add-pr-reviewer.png" alt-text="Add PR reviewer.":::

:::moniker-end

::: moniker range="<= tfs-2018"

To add reviewers to your PR:

1. Select the **Overview** tab in the PR.

   ![PR overview](media/pull-requests/pull-request-overview-reviewers.png)

1. Select the add button in the **Reviewers** area. :::image type="icon" source="media/pull-requests/pull-request-add-button.png":::

1. Enter the name of the user or group to add to the reviewer list for the PR. If the user isn't a member of your project, you'll need to [add them](../../organizations/security/add-users-team-project.md).

1. As you enter a name or email address, a list of matching users or groups appears. Select the user or group from the list to add them as a reviewer.

   ![Add PR reviewer](media/pull-requests/add-pr-reviewer.png)

::: moniker-end

<a name="prlinkeditems"></a>
<a name="addworkitemstopr"></a>
### Link work items

::: moniker range="azure-devops"

To link work items to your PR:

- In a new PR:

  1. On the **New pull request** page, under **Work items to link**, select **Search work items by ID or title**.
  1. Start to enter a work item ID or title, and select the work item to link from the dropdown list that appears.

- In an existing PR:

  1. On the PR **Overview** tab, in the **Work items** area, select **+**.

     :::image type="content" source="media/pull-requests/pull-request-link-work-items-2020.png" alt-text="Screenshot that shows selecting the Overview tab and the work items section.":::

  1. Enter the ID of the work item or search for the work item title. Select the work item from the list that appears.

Remove a work item link by selecting the **x** icon next to the work item. Removing a link only removes the link between the work item and the PR. Links created in the branch or from commits remain in the work item.

::: moniker-end

:::moniker range="<= azure-devops-2020"

To link work items to your PR:

1. Select the **Overview** tab in the PR.

   :::image type="content" source="media/pull-requests/pull-request-overview-work-items-new-nav.png" alt-text="Screenshot that shows selecting the Overview tab and the link items button.":::

2. Select the add button in the **Work Items** area. ![Add icon in PRs](media/pull-requests/pr_add_icon.png)

3. Enter the ID of the work item or search for work items with titles that match your text. Select the work item from the list that appears.

Remove work item links by selecting the remove button that appears when you hover over the work item. ![remove button](media/pull-requests/pr_remove_icon.png)
Removing a link only removes the link between a work item to a PR. Links created in the branch or from commits stay in the work item.

:::moniker-end

::: moniker range="<= tfs-2018"

To link work items to your PR:

1. Select **Overview** in the PR.

   ![Select Overview in the PR.](media/pull-requests/pull-request-overview-work-items.png)

2. Select the add button in the **Work Items** area. :::image type="icon" source="media/pull-requests/pull-request-add-button.png":::

3. Enter the ID of the work item or search for work items with titles that match your text. Select the work item from the list that appears.

Remove work item links by selecting the remove button that appears when you hover over the work item. ![remove icon](media/pull-requests/pr_remove_icon.png)
Removing a link only removes the link between the work item and the PR. Links created in the branch or from commits stay in the work item.

::: moniker-end


# [Visual Studio](#tab/visual-studio)

When you create a PR in Visual Studio, enter a title and detailed description of your changes so others can see what problems the changes solve. Keep these fields up to date so reviewers can understand the changes in the PR.

To add reviewers, add tags, link work items, or change any details in an existing PR, open the PR in your browser. Right-click the PR from the **Pull Requests** view in Team Explorer, select **Open in browser**, and then make your updates on the PR's **Overview** page.


# [Azure Command Line](#tab/azure-command-line)

::: moniker range=">= azure-devops-2020"

You can add details during PR creation with [az repos pr create](/cli/azure/repos/pr#az_repos_pr_create), or update details in existing PRs with [az repos pr update](/cli/azure/repos/pr#az_repos_pr_update).

### Add or edit title and description

When you create a PR with `az repos pr create`, add a `title` and a detailed `description` of your changes so others can see what problems the changes solve. The `description` parameter accepts Markdown entry, and each value in the argument is a new line of the PR description.

For example:

```azurecli
az repos pr create --repository Fabrikam --source-branch new --title "Update the readme" --description "This PR updates the readme." "These are *new* changes."
```

Keep these fields up to date so reviewers can understand the changes in the PR. To update details of a PR, use `az repos pr update` with the required PR `id` parameter.

For example, to update the title and description for PR #21, use:

```azurecli
az repos pr update --id 21 --description "These updates are *no longer new*." --title "Old updates"
```

### Add reviewers

You can add optional reviewers to a PR at creation with<br>`az repos pr create --reviewer "<Reviewer Name>" "<Another Reviewer>"`.

For example:

```azurecli
az repos pr create --repository Fabrikam --source-branch new --reviewer "[Fabrikam]\Fabrikam Team" "[Fabrikam Fiber]\Web"
```

To add required reviewers, or change reviewers between optional and required, open and update the PR in the browser.

To manage reviewers for an existing PR, use [az repos pr reviewer](/cli/azure/repos/pr/reviewer).

- To add reviewers to an existing PR, use<br>`az repos pr reviewer add --id <PR Id> --reviewer "<Reviewer Name>" "<Another Reviewer>"`.
- To list the reviewers for a PR, use `az repos pr reviewer list --id <PR Id>`.
- To remove reviewers from a PR, use `az repos pr reviewer remove --id <PR Id> --reviewer "<Reviewer Name>"`.

### Link work items

You can link Azure Boards work items to PRs at PR creation with `az repos pr create --work-items <Id1> <Id2>`, where \<Id> is the work item's ID.

For example:

```azurecli
az repos pr create --repository Fabrikam --source-branch new --work-items 63 64
```

To manage work items for an existing PR, use [az repos pr work-item](/cli/azure/repos/pr/work-item).

- To link work items to an existing PR, use `az repos pr work-item add --id <PR Id> --work-items <Id1> <Id2>`.
- To list the work items linked to a PR, use `az repos pr work-item list --id <PR Id>`.
- To unlink a work item from a PR, use `az repos pr work-item remove --id <PR Id> --work-items <Id1>`.
  Removing a link only removes the link between the work item and the PR. Links created in the branch or from commits stay in the work item.

::: moniker-end


***


::: moniker range=">=azure-devops-2019"
<a name="change-the-target-branch-of-a-pull-request"></a>
### Change the target branch of an active PR

For most teams, nearly all PRs target a default branch, such as `main` or `develop`. If you sometimes need to target a different branch, it's easy to forget to change the target branch when you create the PR. If that happens, you can change the target branch of an active PR:

1. Select **More actions** at upper-right on the PR **Overview** page, and then select **Change target branch** from the dropdown menu.
1. In the **Change target branch** pane, select **Choose a target branch**, select the new branch, and then select **Change**.

::: moniker-end


## Review pull requests

The PR **Overview** tab shows the current state of the PR at a glance. You can review the title, description, and comments to understand proposed changes and see issues raised by other reviewers.

Teams can require PRs for any changes on protected branches, and set [branch policies](branch-policies.md) to require those PRs to meet certain criteria. To help get a quick picture of PR status, the PR **Overview** tab summarizes branch policies that are passing or failing. In some cases, the summary shows a snippet of the failure message from the check's log. The overview lists only failed policies, but you can see all the passed and failed policy checks by selecting **View \<n> checks**.

:::image type="content" source="media/pull-requests/pull-request-overview-2020.png" alt-text="Screenshot that shows the PR overview tab.":::

### Browse changes

::: moniker range="azure-devops"
- Select the **Files** tab of a PR to view the changes made in the source branch **Inline** or **Side-by-side** with the target branch.
  
  You can see how a file will look published by selecting the **View** button on a file, and then selecting **Preview**.
  
  :::image type="content" source="media/pull-requests/pull-request-browse-changes-2020.png" alt-text="Screenshot that shows a side-by-side diff view of file changes in a PR.":::
  
  >[!NOTE]
  >When viewing the difference for a *single selected file*, there's a file size limit of 5 MB. To view and diff files larger than 5 MB, you can download the file and view it using a local diff tool. When viewing the difference for a *collection of files*, the size limit for each file is 0.5 MB, for performance reasons.
::: moniker-end

::: moniker range="<= azure-devops-2020"
- Select **Files** to view the changes made to the source branch next to the target branch of the pull request.
  
  ![PR files](media/pull-requests/pull-request-files.png)
  
  >[!NOTE]
  >When viewing the difference for a *single selected file*, there's a file size limit of 5 MB. To view and diff files larger than 5 MB, you can download the file and view it using a local diff tool. When viewing the difference for a *collection of files*, the size limit for each file is 0.5 MB, for performance reasons.
::: moniker-end

::: moniker range="azure-devops"
- You can review previous versions of the code from the **All Changes** drop-down list.
  
  Every update to the branch adds a new version to the list and on the **Updates** tab of the PR. As you select different updates, the diff view updates to show the differences between the files in each version of the PR.

  You can catch up with PR updates after being away from the PR by stepping through changes made since your last review. You can view multiple updates at once by pressing **Shift** while selecting the updates you want to see. 
  
  :::image type="content" source="media/pull-requests/pull-request-all-changes-dropdown.png" alt-text="Screenshot that shows the All changes drop-down.":::

::: moniker-end

::: moniker range="<= azure-devops-2020"

- Review previous versions of the code from the **All updates** drop-down list.
  
  ![PR updates](media/pull-requests/pull-request-file-updates.png)

  Every update to the branch adds a new version to the list and on the **Updates** tab of the PR. As you select different updates, the diff view updates to show the differences between the files in each version of the PR.

  Catch up with PR updates after being away from the PR by stepping through changes made since your last review.

::: moniker-end

::: moniker range="azure-devops"
- Browse a list of changes from the author on the **Updates** tab.
  
  ![Browse a list of changes from the author.](media/pull-requests/new-pull-request-updates.png)

- View and select changes made in commits to the branch on the **Commits** tab.
  
  ![PR commits](media/pull-requests/new-pull-request-commits.png)
::: moniker-end

::: moniker range="<= azure-devops-2020"
- Browse a list of changes from the author on the **Updates** tab.
  
  ![Browse a list of changes from the author.](media/pull-requests/pull-request-updates.png)

- View and select changes made in commits to the branch on the **Commits** tab.
  
  ![PR commits](media/pull-requests/pull-request-commits.png)
::: moniker-end

::: moniker range=">= azure-devops-2019"

- View code coverage metrics for changes to ensure that you've adequately tested your changes through automated tests. Coverage status appears as a comment in the PR overview. You can view details of coverage information for every code line changed in the file diff view.

:::moniker-end

<a name="leave-comments"></a>
### Make comments

Add comments to a PR to make suggestions, reply to previous comments, and point out problems with proposed changes.

::: moniker range="azure-devops"
- Comment inline in the **Files** tab of a PR by selecting the comment button :::image type="icon" source="./media/pull-requests/new-comment-icon.png"::: next to the line you want to comment on.

  ![Screenshot of comments in Azure Repos P Rs.](./media/pull-requests/pr_comments_summary.png)
::: moniker-end

::: moniker range="<= azure-devops-2020"
- Comment inline in the **Files** tab of a PR by hovering over the line you want to comment on and selecting the comment button. ![Comment button in a PR](./media/pull-requests/pr_comment_icon.png).

  ![Screenshot of comments in Azure Repos P Rs.](./media/pull-requests/pr_comments_summary.png)
::: moniker-end

- To suggest changes directly, select the lightbulb icon in the comment interface, make your suggested changes in the code, and then select **Comment**.

  ![Screenshot showing how to make a suggested change.](./media/pull-requests/add-suggestion.png)

- Give feedback not tied to a specific code line by commenting on the **Overview** tab.

- Address the author or other reviewers directly in your comments by using `@username`, and reference work items by using `#workitemID`. You can also reference other PRs by using `!pullrequestID`.

<a name="vote-on-the-changes"></a>
### Vote on changes

# [Browser](#tab/browser)
Use the button at upper right in the PR to vote on the PR changes. The default option is **Approve**, but you can select other options from the dropdown list:

- **Approve**: Approve the proposed changes in the PR.
- **Approve with suggestions**: Approve the PR, but provide optional suggestions for improvement.
- **Wait for author**: Don't approve the changes, and ask the author to review your comments. The author should let you know to review the code again after they address your concerns.
- **Reject**: The changes aren't acceptable. Leave a comment in the PR to explain why.
- **Reset feedback**: Remove your vote.

![Screenshot that shows P R voting options.](./media/pull-requests/pr-voting-options.png)


# [Visual Studio](#tab/visual-studio)

To vote on a PR, from the **Pull Requests** view in Team Explorer, right-click the PR and select **Open in browser**. On the PR's **Overview** page, use the button at upper right to vote on the changes.


# [Azure Command Line](#tab/azure-command-line)

::: moniker range=">= azure-devops-2020"

To vote whether to approve a PR, use [az repos pr set-vote](/cli/azure/repos/pr#az_repos_pr_set_vote). The vote options are `approve`, `approve-with-suggestions`, `reject`, `reset`, or `wait-for-author`.

For example, to vote to approve PR #21, use:

```azurecli
az repos pr set-vote --id 21 --vote approve
```

::: moniker-end


***


## Respond to reviews

::: moniker range="azure-devops"
To make quick updates in response to comments or to fix issues, select **Edit** on the **Files** page in your branch on the web.

![Screenshot that shows the Edit button to update code directly in Azure Repos.](./media/pull-requests/edit-file.png)

After updating your code, [commit](commits.md) changes and [push](pushing.md) the updates to the branch in your repo.

You can also immediately apply changes that reviewers have suggested by selecting **Apply change** in the comment on the PR **Overview** page. Once you've applied all the changes you want, select **Commit all changes**.

![Screenshot that shows the Apply change button in a PR comment.](./media/pull-requests/apply-change.png)

::: moniker-end

::: moniker range="<= azure-devops-2020"
You can make quick updates to your branch directly from the **Files** tab in **Code** on the web.

![Screenshot that shows the Edit button to update code directly in Azure Repos.](./media/pull-requests/pr_editing_changes.png)
::: moniker-end

### Address comments

Reply to comments and update comment status to let reviewers know how you're addressing their comments and suggestions. 

To resolve a comment without replying, select **Resolve** under the comment. To reply to the comment, type your response in the **Write a reply** field, and select **Reply**. Select **Reply & resolve** to reply to and resolve the comment. Reply to specific reviewers by using `@username` in the reply, and reference work items by using `#workitemID`. You can also reference other PRs by using `!pullrequestID`.

New comments start in **Active** status. Select **Resolve** or **Reply & resolve** to update comment status to **Resolved**.

![Update comments in Azure Repos PRs.](./media/pull-requests/pr-comments-reply-and-resolve.png)

More options are available in the comment resolution dropdown list:

![Screenshot of more options in the comment resolution dropdown list.](./media/pull-requests/pr-comment-resolution.png)

- **Active**: The comment is still under review.
- **Pending**: The issue in this comment will be addressed, but isn't fixed yet.
- **Resolved**: The issue brought up in this comment is fixed.
- **Won't fix**: The suggestion in the comment is noted, but this PR won't address it.
- **Closed**: Discussion for this comment is closed.

:::moniker range=">= azure-devops-2019"

To keep track of files that have already been reviewed, select **More options** next to a file in your PR, and then select **Mark as reviewed**.

:::moniker-end

<a name="complete-the-pull-request"></a>
## Complete a pull request

After the PR gets all required approvals and meets all branch policy requirements, you can complete the PR.

# [Browser](#tab/browser)

::: moniker range="azure-devops"

1. Select **Complete** at upper right to complete the PR. Or select the dropdown arrow next to the **Complete** button, and select one of the following options:

   - **Complete**: Complete the PR now, and merge the changes to the target branch.
   - **Set auto-complete**: Configure the PR to complete and merge once it meets all required branch policies.
   - **Mark as draft**: Return the PR to draft status and remove all votes.
   - **Abandon**: Close the PR without merging the changes.

   ![Screenshot that shows the Complete button options for the PR.](./media/pull-requests/complete-pr-options.png)

1. In the **Complete pull request** pane:

   1. Under **Merge type**, select one of the following options:
      - **Merge (no fast forward)**: Merge with a non-linear history that preserves all commits.
      - **Squash commit**: Merge with a linear history that combines all source commits into a single commit on the target, or [squash merges](merging-with-squash.md) the PR.
      - **Rebase and fast-forward**: Rebase the source commits onto the target and fast-forward.
      - **Semi-linear merge**: Rebase source commits onto the target and create a two-parent merge.
   
      > [!NOTE]
      > Existing policies are still enforced. For example, if your branch currently has a "squash merge only" policy, you have to change that policy if you want to use the other merge types.
   
   1. Select any of the following post-completion options. Some options aren't available for some merge types.
      - **Complete associated work items after merging**: Complete any linked work items.
      - **Delete \<branch name> after merging**: Delete the PR's source branch after merging.
      - **Customize merge commit message**: Add a custom merge commit message. If you select this option, update the [merge commit](merging.md) message.
      - **Override branch policies and enable merge**. Force the merge even if the PR doesn't satisfy all branch policies. This option is only available if you have [Exempt from policy enforcement](branch-policies.md#bypass-branch-policies) permission.
   
   1. Select **Complete merge**.
     
   :::image type="content" source="media/pull-requests/pull-request-complete-merge-2020.png" alt-text="Screenshot that shows the complete PR dialog.":::

::: moniker-end

::: moniker range=">= azure-devops-2019 <= azure-devops-2020"

1. Select **Complete** at upper right to complete the PR. Or, select the dropdown arrow next to the **Complete** button, and select one of the following options:

   ![Screenshot that shows the Complete button options for the PR.](./media/pull-requests/complete_pr_options.png)

   - **Complete**: Complete the PR now, and merge the changes to the target branch.
   - **Set auto-complete**: If you have branch policies, configure the PR to complete and merge once it meets all required branch policies.
   - **Abandon**: Close the PR without merging the changes.

1. On the **Complete pull request** screen, enter the message for the [merge commit](merging.md) and update the PR description.

   ![Complete pull request dialog](./media/pull-requests/complete-pr-dialog.png)

1. Select any of the following options:
   - **Complete linked work items after merging** to complete any linked work items.
   - **Delete `<branch name>` after merging** to delete the source branch from the PR.
   - **Squash changes when merging** to [squash merge](merging-with-squash.md) your PR.
   - **Override branch policies and enable merge** to force a branch to merge even if it doesn't satisfy all branch policies. This option is only available if you have [Exempt from policy enforcement](branch-policies.md#bypass-branch-policies) permissions.
     
     
     > [!NOTE]
     > Existing policies are still enforced. For example, if your branch currently has a "squash merge only" policy in place, you have to edit that policy in order to use the other merge types.  

5. Select **Complete merge**.

::: moniker-end

::: moniker range=">= azure-devops-2019"
When you complete the merge, any linked work items automatically update to show the PR completion.

![Screenshot of linked work items showing completed P Rs.](./media/pull-requests/pr_workitem_complete.png)

::: moniker-end

::: moniker range="<= tfs-2018"

1. Select **Complete** in the upper right of the PR view to complete your PR after the reviewers approve of the changes.

   ![Complete button for the PR with its drop-down options](./media/pull-requests/complete_pr_options.png)

   - **Complete**: Complete the PR now and merge the changes to the target branch.
   - **Set auto-complete**: If you have branch policies, you can choose **Set auto-complete** to configure the PR to close once it meets all branch policies.
   - **Abandon**: Close the PR without merging the changes.

2. In **Complete pull request**, enter the message for the [merge commit](merging.md) and update the PR description.

   ![Complete PR dialog](./media/pull-requests/complete-pr-dialog.png)

3. Select any of the following post-completion options:

   - **Complete linked work items after merging** to complete any linked work items.
   - **Delete `<branch name>` after merging** to delete the source branch from the PR.
   - **Squash changes when merging** to [squash merge](merging-with-squash.md) your PR.
   - **Override branch policies and enable merge** to force a branch to merge even if it doesn't satisfy all branch policies. This option is only available if you have [Exempt from policy enforcement](branch-policies.md#bypass-branch-policies) permissions.

4. Select **Complete merge**.

Linked work items are also updated showing the PR completion.

![Linked Work Items showing completed PRs](./media/pull-requests/pr_workitem_complete.png)

::: moniker-end

::: moniker range=">= tfs-2017"

### Complete automatically

Select **Set auto-complete** from the **Complete** dropdown list to complete and merge the PR changes as soon as conditions satisfy all [branch policies](branch-policies.md). When the PR is completed, you receive an email notification. If a conflict or error prevents PR completion, email notifies you of the issue.

>[!NOTE]
>The **Set auto-complete** option is available in Azure Repos and TFS 2017 and higher when you have branch policies. If you don't see **Set auto-complete**, you don't have any branch policies. For more information, see [Branch policies](branch-policies.md).

By default, a PR that's set to autocomplete waits only on required policies. In the **Enable automatic completion** panel, you can choose to wait on optional policies as well.

![Screenshot that shows changing an optional policy to required in the Enable automatic completion panel.](media/pull-requests/enable-completion.png)

Starting with TFS 2018 Update 2, the PR **Overview** page displays the list of outstanding policy criteria the PR is waiting for. If you set a policy to be required in the **Enable automatic completion** panel, you can set it back to optional on the **Overview** page.

Select **Cancel auto-complete** to turn off autocomplete. 

::: moniker-end 

::: moniker range="azure-devops"
![Screenshot of a P R in autocomplete state.](./media/pull-requests/autocomplete.png)
::: moniker-end 

::: moniker range=">= tfs-2017 <= azure-devops-2020"
![Screenshot of a P R in autocomplete state.](./media/pull-requests/pr_banner_autocomplete.png)
::: moniker-end 

A PR set to autocomplete displays an **Auto-complete** badge on the **Pull requests** page.

![Screenshot showing an autocomplete P R in the P R list.](media/pull-requests/auto-complete-badge.png)

### Abandon your changes

To abandon your changes, select **Abandon** from the dropdown list on the **Complete** button. You can still view the abandoned PR, and it stays linked to work items.

To reactivate an abandoned PR at any time, open the PR from the **Abandoned** tab in the **Pull Request** view, and select **Reactivate** at upper right.


# [Visual Studio](#tab/visual-studio)

To complete a PR, from the **Pull Requests** view in Team Explorer, right-click the PR and select **Open in browser**. On the PR's **Overview** page, select **Complete** or set other options.


# [Azure Command Line](#tab/azure-command-line)

::: moniker range=">= azure-devops-2020"

To complete a PR and merge the changes, update the PR `status` to `completed` with [az repos pr update](/cli/azure/repos/pr#az_repos_pr_update).

For example, to complete PR #21, use:

```azurecli
az repos pr update --id 21 --status completed
```

### Set completion options

You can set PR completion options at PR creation with `az repos pr create`, or update existing PRs with `az repos pr update`. 

PR completion options include:

- `bypass-policy {false, true}`: Whether to bypass any required policies and complete the pull request once it can be merged.
- `bypass-policy-reason`: Reason for bypassing required policies.
- `delete-source-branch {false, true}`: Whether to delete the source branch after the pull request has been completed and merged.
- `merge-commit-message`: Customize the merge commit message.
- `squash {false, true}`: Whether to squash the source commits into a single target commit for merge.
- `transition-work-items {false, true}`: Whether to resolve linked work items when the PR merges.

The following example completes PR #21, deletes its source branch, resolves its linked work items, and adds a merge commit message:

```azurecli
az repos pr update --id 21 --status completed --delete-source-branch true --transition-work-items true --merge-commit-message "This update is complete."
```

### Complete automatically

Set autocomplete to complete a PR automatically when it passes all required approvals and branch policies. You can set autocomplete at PR creation, or update an existing PR.

- To set autocomplete at PR creation, use `az repos pr create --auto-complete true`.
- To update an existing PR to autocomplete, use `az repos pr update --id <PR Id> --auto-complete true`.

### Abandon your changes

To abandon a PR without merging it, use `az repos pr update --id <PR Id> –-status abandoned`. You can reactivate the PR by setting the status to `active`.

::: moniker-end


***


### Resolve merge conflicts

When you complete a PR, Git adds a new *merge commit* to the end of the main branch. This merge commit links the earlier histories of the main branch and the PR source branch. You must resolve any [merge conflicts](merging.md) between the PR branch and the target branch before you can merge the PR.


::: moniker range=">= azure-devops-2019"
### Rebase during PR completion

There are a few situations when rebasing during PR completion isn't possible:

- If a policy on the target branch prohibits using rebase strategies, you need **Override branch policies** permission to rebase.
- If the PR source branch has policies, you can't rebase it. Rebasing would modify the source branch without going through the policy approval process.
- If you used the Merge Conflict Extension to resolve merge conflicts, you can't rebase. Conflict resolutions applied to a three-way merge are seldom successful or valid when rebasing all the PR commits individually.

In all these cases, you can still rebase your branch locally and then push upstream, or squash-merge your changes when you complete the PR.

::: moniker-end

### Multiple merge base issue

In some cases, a PR has more than one true merge base, and this can cause security issues. If the files in the PR have different versions between the merge bases, a multiple merge base warning happens. For more information and remediation, see [Multiple merge base issue](about-pull-requests.md#multiple-merge-base-issue). 


::: moniker range=">= tfs-2017" 
## Revert a PR

To undo the changes from a PR, follow these steps:

1. Open the completed PR and select **Revert**. This action creates a new branch with changes that undo the PR in an existing target branch in your repo.

1. In the **Revert pull request** pane:

   1. Under **Target branch**, select the branch where you want to undo the PR changes.
   1. Under **Topic branch name required**, change the revert PR branch name if you want.
   1. Select **Revert**.

1. On the **New pull request** screen, select **Create**.

1. Merge the new PR to complete the revert.

> [!NOTE]
> The branch created during this revert has a single commit that reverts all the file changes from the original PR. The branch doesn't contain a reverted commit for each of the commits in the original PR.
::: moniker-end

## Next steps
- [About pull requests](about-pull-requests.md)
- [Change the default branch](change-default-branch.md)
- [Copy changes with cherry-pick](cherry-pick.md)
- [Pull request update notifications](pull-request-notifications.md)

