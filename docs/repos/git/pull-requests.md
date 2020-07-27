---
title: Review and merge code with pull requests
titleSuffix: Azure Repos
description:  Conduct a code review in a Git with Azure Repos or Azure DevOps Server, create a pull request.
ms.assetid: 4C9DFD24-E894-454A-A080-DA511C90CA74
ms.technology: devops-code-git 
ms.topic: conceptual
ms.date: 07/10/2020
monikerRange: '>= tfs-2013'
---

# Review code with pull requests

#### Azure Repos | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

Create pull requests to review and merge code in a [Git project](../../organizations/projects/create-project.md).
Pull requests let your team review code and give feedback on changes before merging it into the master branch.
Pull requests can come from either topic branches within the same repository or from a branch in a [fork](forks.md) of the original repository.
Reviewers can step through the proposed changes, leave comments, and vote to approve or reject the code.

New to pull requests? Learn more about how to [get feedback with Git pull requests](/azure/devops/learn/git/git-pull-requests).

## View and manage your pull requests

::: moniker range=">= azure-devops-2019"

1. To view pull requests in a specific repository in a project, [go to that project](../../project/navigation/go-to-project-repo.md) in the web portal and select **Repos** > **Pull requests**.

   ![View your pull requests](media/repos-navigation/repos-pull-requests.png)

1. Verify that you selected the correct repository.

   ![Choose your repo](media/repos-navigation/pull-requests-breadcrumb.png)

1. Select **Active** to show all active pull requests for the current repository. Select **Completed** or **Abandoned** to bring up a history of closed pull requests.

   ![Viewing completed and abandoned pull requests in Azure Repos](media/pull-requests/pr_status_widget.png)

1. You can view all of your pull requests across different projects in your organization by choosing **Pull requests** in the **My Work** view.

   ![View all your pull requests](media/pull-requests/view-all-my-pull-requests.png)

::: moniker-end

::: moniker range="<= tfs-2018"

Manage pull requests you own or are assigned to with the **Pull Requests** tab in the **Code** page on the web.

![Viewing completed and abandoned pull requests in Azure Repos](media/repos-navigation/repos-code-pull-requests.png)

::: moniker-end 

::: moniker range=">= tfs-2017" 

Select **Active** to show all active pull requests for the current repo.

Select **Completed** or **Abandoned** to bring up a history of closed pull requests.

![Viewing completed and abandoned pull requests in Azure Repos](media/pull-requests/pr_status_widget.png)

You can view all of your pull requests in your organization, across all projects, by choosing **My pull requests** from the **Projects** page.

![View all my pull requests](media/pull-requests/view-all-pull-requests.png)

::: moniker-end 

## Create a new pull request

Create a new pull request from:

- [Pushed feature branches to your Git repo](#after-pushing-a-branch)
- [The **Development** section in a linked work item](#from-a-linked-work-item)
- [From the Pull Requests page on the web](#from-the-pull-requests-page-on-the-web)
- [Team Explorer in Visual Studio](#from-visual-studio) 
- [Using the Azure DevOps Services CLI](#from-the-azure-devops-services-cli)

### After pushing a branch

::: moniker range=">= azure-devops-2019"

When you publish or update a feature branch, Azure Repos prompts you to create a pull request. This prompt is displayed on **Pull Requests** and **Files**.

![Creating Pull Request through pushed branch in Azure Repos](media/pull-requests/create-pr-from-push-new-nav.png)

![Creating Pull Request through pushed branch in Azure Repos](media/pull-requests/create-pr-from-push-files-tab-new-nav.png)

Select **Create a pull request** to go to a page where you can [enter your pull request details](pull-requests.md#finish) and create the pull request.

::: moniker-end

::: moniker range="<= tfs-2018"

When you publish or update a feature branch, Azure Repos prompts you to create a pull request in the **Code** view on the web. This prompt is displayed on **Pull Requests** and **Files**.

![Creating Pull Request through pushed branch in Azure Repos](media/pull-requests/create-pr-from-push.png)

![Creating Pull Request through pushed branch in Azure Repos](media/pull-requests/create-pr-from-push-files-tab.png)

Select **Create a pull request** to go to a page where you can [enter your pull request details](pull-requests.md#finish) and create the pull request.

::: moniker-end

### From a linked work item

Create a pull request directly from a work item linked to the branch.

1. From **Backlogs** or **Queries** in the **Work** view, open the work item with the linked branch.
1. In the **Development** area of the work item, select **Create a pull request**.

   ![Creating Pull Requests from the Development area of a Work Item with a Linked Branch](media/pull-requests/create-pr-from-work-item.png)

The link takes you to a page where you can [enter your pull request details](pull-requests.md#finish) and create the pull request.

### From the Pull Requests page on the web

Create pull requests from any branch from the **Pull Request** page on the web.

![New pull request](media/pull-requests/new-pr-button.png)

Select **New pull request** in the upper right. You can [enter your pull request details](pull-requests.md#finish) and create the pull request.
Pick the branch you want to have reviewed and the branch you want to merge the changes into, such as the master branch.  

![Choosing source and target branches for a pull request in Azure Repos](media/pull-requests/pr-branch-targets.png)

### From Visual Studio

Initiate pull requests directly from Visual Studio.

1. [Connect to your Project from Visual Studio](../../organizations/projects/connect-to-projects.md).

1. Select **View** > **Team Explorer** to open Team Explorer. You can also select Ctrl+\ then Ctrl+m.

1. Select **Home**, then choose **Pull Requests**.

   ![Pull Requests](media/pull-requests/pull-requests.png)

1. Select **New Pull Request** to open up a web browser where you can create the new pull request in the Azure DevOps Services web portal.

   ![Pull Requests](media/pull-requests/new-pull-request.png)

   In **Pull Requests**, you can also view pull requests opened by you or assigned to you.

   You can also initiate pull requests from Visual Studio from the **Branches** view in Team Explorer by right-clicking the branch name and selecting **Create pull request** while connected to your project.

   ![Pull Requests](media/pull-requests/new-pr-from-branch.png)

### From the Azure DevOps Services CLI

You can now manage your pull requests and other resources from the command line with [azure-devops](/cli/azure/ext/azure-devops/?view=azure-cli-latest). Azure Repos and Azure DevOps Server, formerly Team Foundation Server 2017 Update 2 or later, support pull requests by using the command line.

For a list of commands to create and manage pull requests, see [Manage pull requests](/cli/vsts/code/pr).

For more information about working with the Azure DevOps Services CLI, see [Get started with CLI](/cli/vsts/get-started).

<a name="finish"></a>

::: moniker range="azure-devops"

## Draft pull requests

Sometimes you may want to create a pull request but you aren't ready to send it to the entire team for review. A draft pull request indicates that a pull request is a work in progress. You don't have to resort to title prefixes such as WIP or DO NOT MERGE. When the pull request is ready for review, you can publish it, and begin or resume the full review process.

- [Draft pull request differences](#draft-pull-request-differences)
- [Create a draft pull request](#create-a-draft-pull-request)
- [Publish a draft pull request](#publish-a-draft-pull-request)
- [Mark as draft](#mark-as-draft)

### Draft pull request differences

Draft pull requests have the following differences from published pull requests:

- Build validation policies are enabled but not run automatically. They can be manually queued by selecting the **...** menu beside the build in the pull request.
- Voting is disabled while in draft mode.
- Required reviewers aren't automatically added.
- Notifications are sent while in draft mode, but only to reviewers that you explicitly add to the draft pull request.
- Draft pull requests are displayed in the pull requests list with a special badge.

  ![Draft PRs in list](media/pull-requests/draft-pull-request-badge.png)

### Create a draft pull request

To create a draft pull request, choose **Create as draft** when creating the pull request.

![Create as draft](media/pull-requests/create-draft-pr.png)

If you start your pull request title with WIP, **Create as draft** is selected as the default.

![Create as draft](media/pull-requests/create-draft-pr-wip.png)

### Publish a draft pull request

When you're ready to have the pull request reviewed and completed, you can publish it.

![Publish PR](media/pull-requests/publish-pr.png)

When you publish a pull request, required reviewers are assigned and notified, policies are evaluated, and voting begins.

### Mark as draft

To mark an active pull request as a draft, choose **Mark as draft**. Marking a pull request as draft resets all votes. If your pull request has any votes, you'll be asked to confirm.

![Mark as draft](media/pull-requests/mark-pr-as-draft.png)

::: moniker-end

## Add detail to your pull request

Link work items and describe the changes in the branch to make it easier for others to see what problem your changes solve.
Change the pull request title, add a detailed description, add reviewers, link work items, and make comments to explain your changes. When you're ready to create the pull request and have your changes reviewed, select **Create**.

![Adding details to a new pull request](media/pull-requests/add-detail-to-pr.png)

Don't worry if you don't have all of the work items, reviewers, or details ready when you create your pull request.
You can add them now when you create the pull request.
You can also add or update all of these items after you create the pull request.

### Help reviewers using pull request labels

Sometimes it's important to communicate extra information about a pull request to the reviewers. Maybe the pull request is still a work in progress, or it's a hotfix for an upcoming release. You can append some extra text in the title, perhaps a "[WIP]" prefix or "DO NOT MERGE". Labels now provide a way to tag pull requests with extra information. Use tags to communicate important details and help organize pull requests.

![PR request labels](media/pull-requests/pull-request-labels.png)

To add a label when creating a pull request, choose **Add label**. After you create a pull request, you can manage its labels in the **Labels** section.

![Add pull request label](media/pull-requests/add-pull-request-label.png)

In a future release, we'll make labels even more useful by making it easier to filter pull requests using labels.

### Add and remove reviewers

::: moniker range=">= azure-devops-2019"

Add reviewers to your pull request:

1. Select **Overview** in the pull request.

   ![Pull request overview](media/pull-requests/pull-request-overview-reviewers-new-nav.png)

1. Select the add button in the **Reviewers** area. ![Add button in pull requests](media/pull-requests/pr_add_icon.png)

1. Enter the name of the user or group to add to the reviewer list for the pull request. If the user isn't a member of your project, you'll need to [add them](../../organizations/security/add-users-team-project.md).

1. As you enter a name or email address, a list of matching users or groups appears. Select the user or group from the list to add them as a reviewer.

   ![Add pull request reviewer](media/pull-requests/add-pr-reviewer.png)

::: moniker-end

::: moniker range="<= tfs-2018"

Add reviewers to your pull request:

1. Select the **Overview** tab in the pull request.

   ![Pull request overview](media/pull-requests/pull-request-overview-reviewers.png)

1. Select the add button in the **Reviewers** area. ![Add button in pull requests](media/pull-requests/pr_add_icon.png)

1. Enter the name of the user or group to add to the reviewer list for the pull request. If the user isn't a member of your project, you'll need to [add them](../../organizations/security/add-users-team-project.md).

1. As you enter a name or email address, a list of matching users or groups appears. Select the user or group from the list to add them as a reviewer.

   ![Add pull request reviewer](media/pull-requests/add-pr-reviewer.png)

::: moniker-end

<a name="prlinkeditems"></a>
<a name="addworkitemstopr"></a>

### Link work items

::: moniker range=">= azure-devops-2019"

Link work items to your pull request:

1. Select the **Overview** tab in the pull request.

   ![Pull request overview](media/pull-requests/pull-request-overview-work-items-new-nav.png)

1. Select the add button in the **Work Items** area. ![Add icon in pull requests](media/pull-requests/pr_add_icon.png)

1. Enter the ID of the work item or search for work items with titles that match your text. Select the work item from the list that appears.

Remove work item links by selecting the remove button that appears when you hover over the work item. ![remove button](media/pull-requests/pr_remove_icon.png)
Removing a link only removes the link between a work item to a pull request. Links created in the branch or from commits stay in the work item.

::: moniker-end

::: moniker range="<= tfs-2018"

Link work items to your pull request:

1. Select **Overview** in the pull request.

   ![Pull request overview](media/pull-requests/pull-request-overview-work-items.png)

1. Select the add button in the **Work Items** area. ![Add button in pull requests](media/pull-requests/pr_add_icon.png)

1. Enter the ID of the work item or search for work items with titles that match your text. Select the work item from the list that appears.

Remove work item links by selecting the remove button that appears when you hover over the work item. ![remove icon](media/pull-requests/pr_remove_icon.png)
Removing a link only removes the link between a work item to a pull request. Links created in the branch or from commits stay in the work item.

::: moniker-end

### Edit pull request title and description

Update the title of a pull request by clicking the current title and updating the text. Choose the save button to save changes or select undo to discard your changes.

![Editing details in an existing Azure Repos pull request](media/pull-requests/edit_pr_information.png)

Edit the pull request description by selecting the edit link that appears when you hover over the existing description.

![Editing pull request description](media/pull-requests/edit-pr-description.png)

Keep these fields up to date so reviewers know what the changes in the pull request are trying to accomplish.

## Review a pull request

The **Overview** tab shows the current state of the pull request at a glance.
Review the title, description, and discussion to understand proposed changes and see issues brought up by other reviewers.  

![Pull request overview](media/pull-requests/pull-request-overview.png)

Starting with Visual Studio 2017 Update 6, you can check out the source branch from a pull request directly from **Pull Requests** in **Team Explorer**. Right-click the pull request and choose **Checkout Source Branch**.

![Check out source branch](./media/pull-requests/checkout-pr-source-branch.png)

### Browse code changes

Select **Files** to view the changes made to the source branch next to the target branch of the pull request.

>[!NOTE]
>The size limit for files in the files view and the diff view is 5 MB. To view and diff files larger than 5 MB, you can download the file and view it using a local diff tool.

![Pull request files](media/pull-requests/pull-request-files.png)

Review previous versions of the code from the **All updates** drop-down list.
Every time Azure Repos updates the branch, it adds a new version to the list and on the **Updates** tab.

The diff view updates as you select different changes.
It shows the differences between the files in the selected and previous version in the pull request.
Catch up with a pull request after being away from it by stepping through changes made since your last review.

![Pull request updates](media/pull-requests/pull-request-file-updates.png)

Browse a list of changes from the author using **Updates**.

![Pull request updates](media/pull-requests/pull-request-updates.png)

You can select and view changes made in commits on the branch in **Commits**.

![Pull request commits](media/pull-requests/pull-request-commits.png)

### Leave comments

Add comments to the pull request to make suggestions, reply to previous comments, and point out problems with the proposed changes.
Comment inline in the **Files** tab in your pull request by selecting the comment button. ![Comment button in a pull request](./media/pull-requests/pr_comment_icon.png)
Leave feedback not tied to a specific code change by commenting in **Overview**.
Reply directly to the author or other reviewers by using `@username` and reference work items using `#workitemID` in your comments. You can also reference other pull requests using `!pullrequestID`.

![Reviewing comments in Azure Repos pull requests](./media/pull-requests/pr_comments_summary.png)

Update comment status to let reviewers know what you are doing to address the concerns brought up in their review. New comments start in **Active** status. Select **Resolve** or **Reply &amp; resolve** to update comments in the conversation.

![Reviewing comments in Azure Repos pull requests](./media/pull-requests/pr-comments-reply-and-resolve.png)

Additional options are available in the comment resolution drop-down list.

![Reviewing comments in Azure Repos pull requests](./media/pull-requests/pr-comment-resolution.png)

- **Active**: Comment is still under review.
- **Pending**: The issue in this comment will be addressed, but isn't fixed yet.
- **Resolved**: The issue brought up in this comment has been fixed.
- **Won't Fix**: The suggestion in the comment is noted, but won't make changes in this pull request to address it.
- **Closed**: Discussion for this comment is closed.

### Vote on the changes

Use the button at the upper right to vote on the changes in a pull request.
The default option is **Approve**, but you can select other options from the drop-down list:

![Pull request voting options](./media/pull-requests/pr-voting-options.png)

- **Approve**: Agree with the proposed changes in the pull request as-is.
- **Approve with suggestions**: Agree with the pull request, but provide optional suggestions to improve the code.
- **Wait for author**: Don't approve the changes, and ask the author to review your comments. The author should let you know to review the code again after they address your concerns.
- **Reject**: The changes aren't acceptable. If you vote this way, leave a comment in the pull request to explain why.
- **Reset feedback**: Choose **Reset feedback** to remove your vote.

The number of required approvals in a pull request can be set from the [branch policy](branch-policies.md) for the branch. A pull request that meets the required number of approvals can be completed. Even if other reviewers reject the changes, the pull request is completed.

When you configure the [Require a minimum number of reviewers](branch-policies.md#require-a-minimum-number-of-reviewers) branch policy, select **Reset code reviewer votes when there are new changes** to reset votes when you push new changes.

Best practice: At least two reviewers should review and approve the changes in a significant pull request.  

## Update code in response to feedback

Update your code in response to comments. Then create a new [commit](commits.md) with the changes and [push](pushing.md) the updates to the branch in your Git repo.
You can make quick updates to your branch directly from the **Files** tab in **Code** on the web.

![Updating code directly during a pull request in Azure Repos](./media/pull-requests/pr_editing_changes.png)

::: moniker range="azure-devops"

## Change the target branch of a pull request

For most teams, nearly all pull requests target the same branch, such as `master` or `develop`. You may need to target a different branch, but it's easy to forget to change the target branch from the default. To change the target branch of an active pull request, see [Change the target branch of a pull request](/azure/devops/release-notes/2018/sprint-141-update#azure-repos).

::: moniker-end

## Complete the pull request

1. Select **Complete** in the upper right of the pull request view to complete your pull request after the reviewers approve of the changes.

   ![Complete button for the pull request with its drop-down options](./media/pull-requests/complete_pr_options.png)

   - **Complete**: Complete the pull request now and merge the changes to the target branch.
   - **Set auto-complete**: If you have branch policies, you can choose **Set auto-complete** to configure the pull request to close once it meets all branch policies.
   - **Abandon**: Close the pull request without merging the changes.

1. In **Complete pull request**, enter the message for the [merge commit](merging.md) and update the pull request description.

   ![Complete pull request dialog](./media/pull-requests/complete-pr-dialog.png)

1. Select any of the following options:

   - **Complete linked work items after merging** to complete any linked work items.
   - **Delete `<branch name>` after merging** to delete the source branch from the pull request.
   - **Squash changes when merging** to [squash merge](merging-with-squash.md) your pull request.
   - **Override branch policies and enable merge** to force a branch to merge even if it doesn't satisfy all branch policies. This option is only available if you have [Exempt from policy enforcement](branch-policies.md#bypass-branch-policies) permissions.

1. Select **Complete merge**.

Linked work items are also updated showing the pull request completion.

![Linked Work Items showing completed pull requests](./media/pull-requests/pr_workitem_complete.png)

::: moniker range=">= tfs-2017" 

### Complete automatically

Select **Set auto-complete** from the **Complete** drop-down list to complete the pull request and merge the changes as soon as it meets all [branch policies](branch-policies.md).
When the conditions satisfy branch policies, the pull request is completed. You receive an email notification. If there's a conflict or an error completing the pull request, email notifies you of the issue.

Once you set auto-complete, the pull request displays a banner.
Select **Cancel auto-complete** to turn off auto-complete and return the pull request to an active state. Starting with TFS 2018 Update 2, the banner [displays the outstanding list of policy criteria](/azure/devops/release-notes/2018/jan-24-vsts#view-remaining-policy-criteria-for-pull-request-auto-complete).

![A banner displays when your pull request is in auto-complete state](./media/pull-requests/pr_banner_autocomplete.png)

>[!NOTE]
>The **Auto-complete** option is available in Azure Repos and TFS 2017 and higher. It is only present when you have branch policies that must be satisfied. If you don't see **Auto-complete**, you don't have any branch policies. For more information, see [Branch policies](branch-policies.md).

::: moniker-end 

### Abandon your changes

Select **Abandon** from the drop-down on the **Complete** button to abandon your changes.
You can still view the abandoned pull request.
It stays linked to work items.

Reactivate an abandoned pull request at any time. Select the pull request from the **Abandoned** tab in the **Pull Request** view.

<a name="notifications"></a>
## Receiving notification of pull request updates

Subscribe to email alerts to get notified for changes to your pull requests.

>[!NOTE]
>By default, you are subscribed to several common pull request notifications. For a complete list of default notification subscriptions, see [Out-of-the-box (OOB) or default subscriptions](../../notifications/oob-built-in-notifications.md#out-of-the-box-oob-or-default-subscriptions)

::: moniker range=">= azure-devops-2019"

[Go to your project](../../project/navigation/go-to-project-repo.md) and select **Project settings** > **Notifications** to view your notification settings.

   ![Settings for pull request emails](./media/pull-requests/pr-notifications-new-nav.png)

- Choose **New subscription** to subscribe to additional notifications.

  ![Subscribe to emails](./media/pull-requests/new-subscription-new-nav.png)

- To edit a notification, select **...** for the notification and choose **View** to edit the subscription.

  ![Change subscription](./media/pull-requests/view-pr-notifications.png)

- To opt-out of a notification, set the **State** to **Off**.

  ![Opt out of emails](./media/pull-requests/opt-out-notifications.png)

::: moniker-end

::: moniker range="<= tfs-2018"

Select the settings button while you have your project open to bring up the project administration page.

![Open up the administrative area of the web portal for your project](media/pull-requests/gear_icon_settings.png) 

- Select the **Notifications** tab to view your notification settings, and choose **New subscription** to subscribe to additional notifications.

  ![Subscribe to emails](./media/pull-requests/pr-notifications.png)

- To edit a notification, select **...** for the notification and choose **View** to edit the subscription. 

  ![Change subscription](./media/pull-requests/view-pr-notifications.png)

- To opt-out of a notification, set the **State** to **Off**.

   ![Opt out of emails](./media/pull-requests/opt-out-notifications.png)

::: moniker-end

::: moniker range=">= tfs-2017" 

## Revert a pull request

To undo the changes in a pull request, follow these steps:

1. Open the completed pull request and select **Revert**.
   When you revert a pull request in this way, you create a new branch with changes that undo the pull request for an existing target branch in your repo.

1. In **Target branch**, select the branch where you want to undo the pull request changes.

1. In **Topic branch name**, select a new branch where the reverted changes are created, then select **Revert**.

1. Select **Create pull request** to merge the newly created branch in a second pull request to complete the revert.

> [!NOTE]
> The branch created during this revert has a single commit that reverts the file changes in the pull request. The branch doesn't contain a reverted commit for each of the commits merged in the original pull request.

## Cherry-pick a pull request

To copy changes made in a pull request to another branch in your repo, follow these steps:

1. In a completed pull request, select **Cherry-pick**, or for an active pull request, select **Cherry-pick** from the **...** menu.
   Cherry-picking a pull request in this way creates a new branch with the copied changes.
   Merge into a target branch in a second pull request.

1. In **Target branch**, enter the branch you want to merge the copied changes.

1. In **Topic branch name**, enter a new branch to contain the copied changes, then select **Cherry-pick**.

1. Select **Create pull request** to merge the topic branch into the target branch to complete the cherry-pick.

::: moniker-end 

## Set a new default branch

[!INCLUDE [](includes/change-default-branch-instructions.md)]

There are other aspects you should consider before making this change.
Learn about them in the topic on [changing your default branch](change-default-branch.md).
