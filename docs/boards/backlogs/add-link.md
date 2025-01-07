---
title: Link work items to other objects
titleSuffix: Azure Boards
description: Learn how to link work items to user stories, bugs, remote work items, a git branch, and other elements in Azure Boards.
ms.custom: cross-project, devx-track-azurecli, engagement-fy24
ms.service: azure-devops-boards
ms.assetid: 7130A14B-C760-4622-B97A-8DA27A1B3D02  
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 01/07/2025
#customer intent: As a team member, I want to understand how links between work items and other elements operate and help project planning and development.
---

# Link work items to objects

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Work item links are associations between two work items or a work item and another object. Links describe the relationship between objects. You can use work item links to track dependencies and related work for traceability, share information, manage complex projects that involve multiple teams or products, track code changes, tests, and more.

## Prerequisites

::: moniker range=" azure-devops"

| Prerequisite | Description |
|:-------------|:------------|
| **Project Administrator or Contributor member** | [Project member](../../organizations/security/add-users-team-project.md) and member of the **Contributors** or **Project Administrators** security group. |
| **Stakeholder access** | To add or modify work items, you must be granted [**Stakeholder** access or higher](../../organizations/security/stakeholder-access.md). Users with **Stakeholder** access for public projects have full access to backlog and board features, like users with **Basic** access. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). |
| **Contributor member or Allow permissions** | - To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set to **Allow**. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).</br>- To configure the integration options for a Classic release pipeline, you must have permissions to edit the release.</br>- To link work items to commits and pull requests, you must have your **Edit work items in this node** permissions set to **Allow** for the Area Path assigned to the work item. By default, the Contributors group has this permission set.</br>- To view work items, you must have your **View work items in this node** permissions set to **Allow** for the Area Path assigned to the work item. |
| **Defined iterations** | To use the **Planning** pane, your team administrator must [define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). |

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops"

| Prerequisite | Description |
|:-------------|:------------|
| **Project Administrator or Contributor member** | [Project member](../../organizations/security/add-users-team-project.md) and member of the **Contributors** or **Project Administrators** security group. |
| **Stakeholder access** | To add or modify work items, you must be granted [**Stakeholder** access or higher](../../organizations/security/stakeholder-access.md). |
| **Contributor member or Allow permissions** | - To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set to **Allow**. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).<br>- To configure the integration options for a Classic release pipeline, you must have permissions to edit the release.<br>- To link work items to commits and pull requests, you must have your **Edit work items in this node** permissions set to **Allow** for the Area Path assigned to the work item. By default, the Contributors group has this permission set.<br>- To view work items, you must have your **View work items in this node** permissions set to **Allow** for the Area Path assigned to the work item. |
| **Defined iterations** | To use the **Planning** pane, your team administrator must [define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). |

::: moniker-end

::: moniker range="< azure-devops-2020"

| Prerequisite | Description |
|:-------------|:------------|
| **Project Administrator or Contributor member** | [Project member](../../organizations/security/add-users-team-project.md) and member of the **Contributors** or **Project Administrators** security group. |
| **Stakeholder access** | To add or modify work items, you must be granted [**Stakeholder** access or higher](../../organizations/security/stakeholder-access.md). |
| **Contributor member or Allow permissions** | To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set to **Allow**. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md). |
| **Defined iterations** | To use the **Planning** pane, your team administrator must [define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). |

::: moniker-end

## Types of links

The following types of links help you manage the various relationships between work items and other objects.

| Link type category | Description |
|:----------|:------------|
| **Build** | Connects a work item to a build number, found in build, or integrated in build. |
| **Code** | Connects a work item to a branch, changeset, commit, pull request, tag, or versioned item. |
| **GitHub** | Connects a work item to a GitHub repository branch, commit, issue, or pull request. |
| **Remote work** | Connects a work item defined in a different organization that either consumes from, produces for, or is remotely related via URL. |
| **Requirement** | Connects a work item to a storyboard via URL. |
| **Test** | Connects a work item to a test attachment or result. |
| **Wiki** | Connects a work item to a wiki page. |
| **Work** | Connects a work item to various aspects of your work, including: <br> - Affected by <br> - Affects <br> - Child <br> - Duplicate <br> - Duplicate of <br> - Hyperlink <br> - Integrated in release stage <br> - Parent <br> - Predecessor <br> - Referenced by <br> - References <br> - Related <br> - Shared steps <br> - Successor <br> - Test case <br> - Tested by <br> - Tests |

For more information about work link types, including parent/child, related, and predecessor-successor, see [Work link types](../queries/link-type-reference.md#work-link-type).

## Link work items to various objects

To link work items to various objects, follow these general steps:

1. Sign in to your organization (`https://dev.azure.com/{Your_Organization}`).
2. Open the existing work item that you want to link from, or create a new one.
3. Select **Links** > **Add link**, and then select **Existing item** or **New item**.

   :::image type="content" source="media/add-link/add-link-new-item.png" alt-text="Screenshot sequence to add new or existing item link to work item.":::

4. In the **Link type** dropdown list, select the [link type](#types-of-links) that you want to create.
5. In the field that follows, enter or select the object that you want to link to.
6. (Optional) Enter a comment to describe the link.
7. Select **Add link** to create the link.

For more specific instructions on linking different types of work items, refer to the sections that follow.

> [!TIP]
> You can use other features to link or change links that use the **Parent/Child** link type. Some features are version-dependent. For more information, see the following articles:
>
> - To link backlog items to portfolio backlog items or change the link structure, [use the mapping pane to organize your backlog](../backlogs/organize-backlog.md). You can also choose to **Show Parents** and [drag-and-drop items within the tree hierarchy](organize-backlog.md).
> - To create and link tasks to backlog items, [use the sprint backlog page](../sprints/assign-work-sprint.md). You can also drag-and-drop items to change the link structure from the web portal.
> - To indent, outdent, and change the link structure of a tree hierarchy, [reparent and reorder items from a backlog in the web portal](../backlogs/organize-backlog.md) or use a [tree query in Team Explorer](../queries/using-queries.md).
> - To add or delete work items or change the link structure, use Excel. See [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).

## Link a work item to another work item

To add a link to another work item in the web portal, do the following steps:

1. Open the work item that you want to link from.
2. In the work item form, you can choose from two ways to do this task:
   - Go to the **Related Work** section and select **Add link** > **Existing item**.
   - Select **Links** > **Add link** > **Existing item**.

   :::image type="content" source="media/add-link/work-item-add-link-sequence.png" alt-text="Screenshot shows highlighted buttons sequence to add a link to an existing work item from the Links tab.":::

3. In the **Link type** dropdown list, select the [link type](#types-of-links) that you want to create, for example, **Child**, **Parent**, or **Related**.
4. In the **Work items to link** field, enter the ID of the work item you want to link to, or select from the dropdown menu, and then select **Add link**.

   The following example uses the **Related** link type to a test case with ID of *280*.

   ::: moniker range=" azure-devops"
   :::image type="content" source="media/add-link/add-link-dialog.png" alt-text="Screenshot of Add link dialog, web portal, to an existing work item.":::

   You can only add links one at a time. You can't enter their IDs separated by commas or spaces.
   ::: moniker-end

   ::: moniker range="< azure-devops"
   To link to multiple work items, enter their IDs separated by commas or spaces. If you don't know the IDs or \to link to an item in a different project, select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions**.
   ::: moniker-end

## Link several work items

1. From the web portal, open a [backlog](create-your-backlog.md) or [query results page](../queries/view-run-query.md).
2. [Multi-select (highlight) the work items](bulk-modify-work-items.md#multi-select) to add a link to.
3. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions** for the selected work items, select **Add link**, and then choose **Link to an existing item...** or **Link to a new work item...**.

   In the following example, we multi-select from the product backlog and choose **Link to an existing item...**.

   :::image type="content" source="media/add-link/multi-select-add-link.png" alt-text="Screenshot of backlog context menu, Multi-select items in backlog, open context menu, choose Add link to an existing work item.":::

4. Select from the **Link type** dropdown menu, for example, **Parent**, **Child**, or **Related**.
5. In the **Work item** field, enter the ID of the work item you want to link to, then select **Add link**.

::: moniker range=" azure-devops"

## Change the link type of an existing link

1. From the web portal, open your work item and select **Links**.  
1. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions** > **Edit link**.

   :::image type="content" source="media/add-link/change-link-type.png" alt-text="Screenshot of Links tab, open More actions, choose Edit link option.":::

1. Choose the link type to change to, and then select **Save**.

   :::image type="content" source="media/add-link/edit-link-dialog.png" alt-text="Screenshot of Edit link dialog.":::

::: moniker-end

## Link work items to new work items

Do the following steps to link a work item to a new work item.

1. From your work item, select **Links** > **Add link** > **New item**.
   
   :::image type="content" source="media/add-link/add-link-new-item.png" alt-text="Screenshot sequence to add new or existing item link to work item.":::

2. Specify the **Link type** and **Work Item Type**, and enter a title for the new work item and optional comment. Select **Add link**. 

   :::image type="content" source="media/add-link-related-new-item-issue.png" alt-text="Screenshot of Add link dialog, Link to new work item.":::

   The new work item opens.

3. Enter additional information and **Save** the work item.

   :::image type="content" source="media/add-link/new-issue-linked-item.png" alt-text="Screenshot of new work item Issue added.":::

::: moniker range=" azure-devops"

<a id="remote-work-items">  </a>

## Link work items to remote work items (cross-organization)

Do the following steps to link work items to objects defined in other Azure DevOps organizations. You can only do so if both organizations use the same Microsoft Entra ID to manage users.

1. From your work item, select **Links** > **Add link** > **Existing item**.
   
   :::image type="content" source="media/add-link/work-item-add-link-sequence.png" alt-text="Screenshot shows sequence to add link to newly created a work item.":::

2. Choose one of the following remote link types from the **Link type** dropdown menu:

   - **Consumes From** or **Produces For**: When you want to track dependencies of work items that are defined in different organizations and managed by different teams.
   - **Remote Related**: When the work items being linked are defined in different organizations and managed by different teams, but don't have strong inter-dependencies.

3. Enter the URL of the remote work item, and then select **Add link**.

   The following example uses the **Remote Related** link type to link to work item ID *350* that exists in the *remotelinkingtest2* organization, *RemoteLinking* project.

   :::image type="content" source="media/add-link/add-remote-related-link.png" alt-text="Screenshot of removing a work item link.":::

   The link tab maintains a count of all links to the work item. The **Remote Link Count** [field](../queries/linking-attachments.md) maintains a count of the number of links added to a work item that link to a work item defined in another project or organization.

   The following example shows two remote links, indicated by the :::image type="icon" source="../../media/icons/cloud-link.png" border="false"::: cloud icon, added to a user story.

   :::image type="content" source="media/add-link/links-tab-remote-links.png" alt-text="Screenshot of User Story form, Link tab, showing two external links.":::
::: moniker-end

::: moniker range=">= azure-devops-2020"

## Link work items to pull requests

1. In the description of your pull request, enter `#` to trigger the `#ID` work item picker. A list displays 50 work items that you recently modified or are assigned to you.

   :::image type="content" source="media/add-link/link-pr-to-work-item.png" alt-text="Screenshot of work item list produced when entering the symbol # in PR description.":::

1. To narrow the list of suggested work items, enter up to five keywords that match the work item type, ID, or title.

   :::image type="content" source="media/add-link/keyword-pr-link.png" alt-text="Screenshot of entering keyword after the symbol # and resulting work item in search.":::

::: moniker-end

For more information, see [Link to work items from pull requests, commits, and comments](../../organizations/notifications/add-links-to-work-items.md#link-wit-id).

<a id="link-github"></a>

## Link work items to GitHub objects

::: moniker range=">= azure-devops-2020"
When you connect Azure Boards with GitHub repositories, you can link work items to a **GitHub Branch**, **GitHub Commit**, **GitHub Issue**, and **GitHub Pull Request**. You can use GitHub for software development while you use Azure Boards to plan and track your work.
::: moniker-end

::: moniker range="azure-devops-2019"
When you connect Azure Boards with GitHub repositories, you can link work items to a **GitHub Commit** and **GitHub Pull Request**. You can use GitHub for software development while you use Azure Boards to plan and track your work.
::: moniker-end

> [!IMPORTANT]  
> You can only link work items to GitHub objects that have repositories connected to Azure Boards. For more information, see [Connect Azure Boards to GitHub](../github/connect-to-github.md), and [Link to work items from pull requests, commits, and comments](../../organizations/notifications/add-links-to-work-items.md#link-wit-id).

For more information, see [Link GitHub commits, pull requests, branches, and issues to work items](../github/link-to-from-github.md) and [Auto complete work items with pull requests](../work-items/auto-complete-work-items-pull-requests.md).

## Link several work items to new git branches

1. From a backlog or query results page, [multi-select the work items](bulk-modify-work-items.md#multi-select) that you want to link to a new git branch.
2. Select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon, and then **New branch...**. For more information, see [Link work items to Git development objects](connect-work-items-to-git-dev-ops.md).  

   :::image type="content" source="media/add-link/link-git-branch.png" alt-text="Screenshot of backlog, context menu, choose Link multiple backlog items to a git branch.":::

## Link work items to builds

Do the following steps to link work items to existing builds. These builds can be in your project or to other projects in your organization or collection.

::: moniker range="azure-devops-2020"
> [!NOTE]
> This feature requires installation of Azure DevOps Server 2020.1 update. For more information, see [Azure DevOps Server 2020 Update 1 RC1 Release Notes, Boards](/azure/devops/server/release-notes/azuredevops2020u1#customize-work-item-state-when-pull-request-is-merged).  
::: moniker-end

::: moniker range=">= azure-devops-2020"

1. From your work item, select **Links** > **Add link** > **Existing item**.

2. From the **Add link** dialog, choose one of the build link types: **Build**, **Found in build**, **Integrated in build**. Specify the build number.

   The build number is a combination of the pipeline and build name. If you don't know the build number, select **Find builds**.

   :::image type="content" source="media/add-link/add-link-find-builds.png" alt-text="Screenshot shows highlighted button, Find builds.":::

3. Choose the parameters to filter your search of builds.

   To link to a build in a different project, first choose the **Project** whose build you want to link to.  

   For example, you can specify a build number, select a build pipeline, or a build result, such as, **All**, **succeeded**, **partially succeeded**, **failed**, or **canceled**. Or, with **Succeeded** selected for **Result**, select **Find builds** to list the available builds you can link to.

   :::image type="content" source="media/add-link/find-builds-dialog-filled-out.png" alt-text="Screenshot of Find builds dialog with project selected and builds listed.":::

4. Choose the build from the list you want to link to and then select **Confirm**.
5. Select **Add link** to complete the operation.

   :::image type="content" source="media/add-link/add-link-build-filled-in.png" alt-text="Screenshot of Add link dialog with Build number entered.":::

::: moniker-end

::: moniker range="azure-devops-2019"

You can link work items to existing builds from the **Add link** dialog.

1. From the **Links** tab of a work item, choose **Add link** > **Existing item**.

2. From the **Add link** dialog, choose one of the build link types: **Build**, **Found in build**, **Integrated in build**. Specify the build number.

   The build number is a combination of the pipeline and build name. If you don't know the build number, search for it by choosing the :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: icon.

   :::image type="content" source="../../media/add-links/add-link-build.png" alt-text="Screenshot of Add link dialog with Build link type selected.":::

3. From the **Link builds** dialog, choose the parameters to filter your search of builds.

   For example, you can specify a build number, select a build pipeline, or a build result, such as, **All**, **succeeded**, **partially succeeded**, **failed**, or **canceled**. Or, with **All** selected for **Result**, choose **Find** to list the available builds to link to.

   :::image type="content" source="media/add-link/find-builds-dialog-2020-and-previous-versions.png" alt-text="Screenshot of Find builds dialog, link to a build within your project.":::  

4. Choose the build from the list you want to link to and then select **OK**.

5. From the **Add link** dialog, choose **OK** to complete the operation.

   :::image type="content" source="../../media/add-links/add-link-build-filled-in.png" alt-text="Screenshot of Add link dialog with Build number entered.":::

::: moniker-end

## Link work items to deployments

As you develop your software, you can capture which code changes and builds support the completion of a work item. Your team can understand what work was done or how a bug was fixed through the audit trail of changes to the code base.

The link types used to construct these links are: **Branch**, **Build**, **Changeset**, **Commit**, **Found in build**, **Integrated in build**, **Pull Request**, **Versioned Item**, and **Integrated in release environment**. These types appear in the following image.

:::image type="content" source="../queries/media/link-type-reference/conceptual-link-types-devops-objects.png" alt-text="Conceptual image of devops link types.":::

> [!TIP]
> Drive development from the work item when you create it. You can also add the work item ID when creating branches, commits, and pull requests. Git lets you link work items to commits using the **Commit** link type. Here are the ways to do it:
>
> - Before committing your changes, add work item IDs in **Git Changes** for Visual Studio 2022 or **Team Explorer** for previous versions of Visual Studio:
>
>   :::image type="content" source="../queries/media/link-git-commit-items.png" alt-text="Screenshot of adding work item ID or dragging items before committing changes.":::
>
> - Use the [git-commit](https://git-scm.com/docs/git-commit) command and include the work item ID in your comment. For example, apply this comment `#35 Catch null exception` to your commit. When you push the commit, the system creates a Commit link between the commit and work item #35.
> - Use the **Development** control for Git development from the work item. For more information, see [Drive Git development from a work item in Azure Boards](../backlogs/connect-work-items-to-git-dev-ops.md).

As shown in the following image, the Deployment control displays release information for two release stages. It includes work items linked to a Git commit or pull request for a release pipeline configured to integrate with Azure Boards.

:::image type="content" source="../work-items/media/deployments-control/releases-stages-1.png" alt-text="Screenshot of multiple environments that the release is targeting.":::

### Deployment control

The Deployment control provides several features to help you manage and track the release status of work items. The following list outlines these features:

- **Default appearance:** The Deployment control appears on the work item forms for User Story (Agile), Product Backlog Item (Scrum), Issue (Basic), Requirement (CMMI), Feature, Epic, Bug, Task, and Test Case work item types by default.
- **Custom work item types:** Custom work item types that use the Inherited process are automatically enabled.
- **Release information:** The Deployment control shows the release information for two stages of the release pipeline integrated with Azure Boards.
- **Linked work items:** This control only shows the work items that are linked to a Git commit or pull request for this pipeline.
- **Visual insight:** Gain visual insight into the status of a work item as it is deployed to different release environments and quickly navigate to each release stage and run.

   :::image type="content" source="../work-items/media/deployments-control/deployment-control-intro.png" alt-text="Screenshot of Work item form, Deployment control.":::

- **Commit associations:** Work items associated with commits in the build show the status of the release.
- **Project scope:** Only work items within the same project get linked to where the release pipeline is defined.

   :::image type="content" source="../work-items/media/deployments-control/release-settings-stages-1.png" alt-text="Screenshot showing multiple environments that the release is targeting.":::

- **Stage visibility:** When you open a work item, you can see the stages in real time.
   
   :::image type="content" source="../work-items/media/deployments-control/deployments-control-1.png" alt-text="Screenshot of Release Settings Stages, including Testing, Staging, Production, and Development.":::

To populate the Deployment control, do the following steps:

> [!NOTE]
> The Deployment control requires configuration of a Classic release pipeline. It doesn't support linking to release stages defined for a YAML pipeline.

1. Define a Classic release pipeline and set up the release stages as described in [Define your multi-stage continuous deployment (CD) pipeline](../../pipelines/release/define-multistage-release-process.md).
2. Configure the pipeline.
3. Link work items to a commit or pull request in Azure Repos Git repository. For more information, see:

   - [Drive Git development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md)  
   - [Link to work items from other objects](../../organizations/notifications/add-links-to-work-items.md)

4. Run the pipeline.

<!--- 
### Unsupported scenarios 
Support for GitHub.com, GitHub Enterprise Server, and other Git repositories aren't supported. 
Other scenarios that aren't supported at this time: 
- Work items linked to Team Foundation Version control changesets, shelvesets, or builds aren't supported. 
-  Work items linked to a Git pull request which are stored in a different project aren't linked to the release runs. 
- Manual versus scheduled triggers
--> 

## Link work items to TFVC code development

Team Foundation Version Control (TFVC) allows you to link work items to version control changesets or versioned source code files using the **Changeset** and **Versioned Item** link types. When you check in pending changes or use My Work to check in changes, work items are automatically linked to your changes. For more information, see [Check in your work](../../repos/tfvc/check-your-work-team-codebase.md).

:::image type="content" source="../../repos/tfvc/media/check-your-work-team-codebase/IC593474.png" alt-text="Screenshot of Team Explorer, My Work, Pending Changes, check in.":::

<a id="test-plan-links">  </a>

## Link work items to tests

Test-related link types link test case management work items to one another or to other work items. From the web portal or Microsoft Test Manager, you can view which test cases are defined for a test suite and which test suites are defined for a test plan. These objects aren't linked to each other through link types.

You can link work items to test cases using the **Tested/Tested By** link types. Use the same link controls you use to link work items to other work items. See [Link work items](#link-work-items).

The following image shows the full set of link types that you can use with test management work item types. Most links between test management objects occur by running a task from the **Test** pages or Microsoft Test Manager.

:::image type="content" source="../queries/media/link-tracking-work-item-test-case-link-types.png" alt-text="Screenshot of Link types used to link test objects.":::

For example, when you add Shared Steps to a Test Case, they automatically get linked using the **Test Case/Shared Steps** link types. For more information, see [Share steps between test cases](/previous-versions/azure/devops/test/mtm/share-steps-between-test-cases).

:::image type="content" source="../queries/media/link-work-items-support-traceability/test-case-work-item-form.png" alt-text="Screenshot of test work item form showing steps." lightbox="../queries/media/link-work-items-support-traceability/test-case-work-item-form.png":::

:::image type="content" source="media/add-link/insert-shared-steps.png" alt-text="Screenshot of Insert Shared Steps dialog.":::

From the **Test** section, you can add test plans, test suites, and test cases, which are automatically linked. You can't add these items through a specific link type. The test system creates and manages the associations of test results to test cases and test plans.

<a id="links-attachments"></a>

## Link work items to a Web site, network share, storyboard, or document

You can use a hyperlink or storyboard link type to link a work item to a website, network share, or document on a network share. Both link types are one-way links. To add these link types, use the same controls described earlier. See [Link work items](#link-work-items).

When using the storyboard link type, specify a storyboard or document that provides work item specifications. This link type allows your team to access the shared file and add their comments.

:::image type="content" source="../queries/media/link-tracking-work-item-to-url-link-types.png" alt-text="Screenshot of Hyperlink or Storyboard link type to link a work item to a URL.":::

## View dependencies and track related work

Azure DevOps provides several ways to view dependencies and track related work:

- **Query Editor**: You can use the Query Editor to create custom queries that show all work items linked to a specific work item.
- **Backlogs and Boards**: The Backlogs and Boards views show parent-child relationships between work items, allowing you to see dependencies at a glance.
- **Dependency Tracker**: The Dependency Tracker is a Power BI report that provides a visual representation of dependencies between work items.

To view the list of all objects linked to a work item, do the following steps:

1. Open the work item and select :::image type="icon" source="../media/icons/icon-links-tab-wi.png" border="false"::: **Links**. The links tab indicates the count of all linked objects. Linked objects get grouped under their link type, with a count within each group.

   :::image type="content" source="../media/view-link-list/links-tab-link-count.png" alt-text="Screenshot of Links tab with count of linked objects.":::

1. (Optional) Expand or collapse each group, and sort within each group by **State**, **Latest Update**, or **Comment** by choosing the corresponding column title.

   For example, the following **Links** tab shows a portion of the 64 linked objects for a work item.

   :::image type="content" source="../media/view-link-list/list-linked-objects-links-tab.png" alt-text="Screenshot of Links tab with many linked objects." lightbox="../media/view-link-list/list-linked-objects-links-tab.png":::

   Links prefaced with the :::image type="icon" source="../../media/icons/required-icon.png" border="false"::: exclamation mark indicate that the build, release, or other object is deleted. Due to retention policies, these objects automatically get deleted after a certain time period.

## Query for linked work items 

To filter items based on hierarchical links, use the **Tree of work items** query type. To filter items based on all link types, use **Work items and direct links**.

To find work items linked to other work items with specific link types, use a query that shows a primary and a secondary set of work items:
- The primary set meets the field criteria.
- The secondary set is linked to the primary set.

You can’t query for work items in releases, but you can query for work items with external links. Add more query filters to refine your search.

For more information, see [Query work items by link or attachment count](../queries/linking-attachments.md).

You can't construct a query that shows a hierarchical view of Test Plans, Test Suites, and Test Cases. These items aren't linked together using Parent/Child or any other link type. You can only view the hierarchy through the **Test** > **Test Plans** page. For more information, see [Create test plans and test suites](../../test/create-a-test-plan.md).

<a id="azure-cli"></a>

::: moniker range="azure-devops"

## Use Azure CLI to add, remove, or show links

You can add, remove, and show details of links to a work item with the [az boards work-item relation](/cli/azure/boards/work-item/relation) command. For more information, see [Get started with Azure DevOps CLI](../../cli/index.md).

Link types include work link types, remote link types, hyperlinks, and attached files. For a list of all link types that you can specify, run the [az boards work-item relation list-type](../queries/link-type-reference.md#list-link-types) command.

```azurecli
az boards work-item relation add
az boards work-item relation remove
az boards work-item relation show
```

In the following examples, the organization is *fabrikam* and the project ID corresponds to *aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb*. The table format is used to show the output. For other formats, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli).  

### Link work items

To link one or more work items to a single work item, enter the [az boards work-item relation add](/cli/azure/boards/work-item/relation#az-boards-work-item-relation-add) command.

Required parameters include the ID of the work item to link to and the link type. Supported link types include *Parent*, *Child*, *Related*, and *Remote Related*. For a list of all link types, run the [az boards work-item relation list-type](../queries/link-type-reference.md#list-link-types) command.

For work items defined within the same organization, you must specify the work item ID or target URL. For work items defined in a remote organization, specify the target URL. You can specify multiple values by separating IDs or URLs with a comma.

```azurecli
az boards work-item relation add --id
                                 --relation-type
                                 [--detect {false, true}]
                                 [--org]
                                 [--target-id]
                                 [--target-url]
```

The following command links work item *ID=2807* to work item *ID=2794* with the *Child* link type. The command returns a list of all links currently defined for the work item.

```azurecli
az boards work-item relation add --id 2794 --relation-type Child --target-id 2856 --output table
Are you sure you want to remove this relation(s)? (y/n): y
Relation Type    Url
---------------  -------------------------------------------------------------------------------------------------
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2850
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2808
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2820
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2856
Parent           https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2811
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2876
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2801
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2877
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2805
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2807
```

To view the information for the linked work items, enter one of the URLs listed in your browser.

### Remove work item links

To remove one or more linked work items from a single work item, enter the [az boards work-item relation remove](/cli/azure/boards/work-item/relation#az-boards-work-item-relation-remove) command.

Required parameters include the ID of the work item to remove the link from and the link type. You can only remove links to work items defined in the same organization. You can specify any of the supported link types except remote link types.

You must specify the target work item ID. You can specify multiple values by separating IDs or URLs with a comma.

```azurecli
az boards work-item relation remove --id
                                    --relation-type
                                    --target-id
                                    [--detect {false, true}]
                                    [--org]
                                    [--yes]
```

The following command removes the link to work item *ID=2794* from work item *ID=2856* to work item  with the *Child* link type. The command returns a list of all links currently defined for the work item.

```azurecli
az boards work-item relation remove --id 2794 --relation-type Child --target-id 2807 --output table
Are you sure you want to remove this relation(s)? (y/n): y
Relation Type    Url
---------------  -------------------------------------------------------------------------------------------------
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2850
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2808
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2820
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2856
Parent           https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2811
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2876
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2801
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2877
Child            https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2805 
```

To view the information for the linked work items, enter one of the URLs listed in your browser.

### Show details of links made for a single work item

To view the work items linked to a single work item, enter the [az boards work-item relation show](/cli/azure/boards/work-item/relation#az-boards-work-item-relation-show) command. For a list of all link types that can be returned, run the [az boards work-item relation list-type](../queries/link-type-reference.md#list-link-types) command.

```azurecli
az boards work-item relation show --id
                                  [--detect {false, true}]
                                  [--org]
```

The following command lists the details of links defined for work item *ID=2931* in the *fabrikam* organization in table format.

```azurecli
az boards work-item relation show --id 2931 --output table
Relation Type    Url
---------------  -----------------------------------------------------------------------------------------------------------------------------------
Related          https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2932
Successor        https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2932
Remote Related   https://dev.azure.com/fabrikam-fiber5/bbbbbbbb-1111-2222-3333-cccccccccccc/_apis/wit/workItems/1777
Parent           https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2930
Predecessor      https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/workItems/2933
Attached File    https://dev.azure.com/fabrikam/aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb/_apis/wit/attachments/1cc6c026-b4ed-420c-bfe6-065be726cba7
```

To view the information for the linked work items, enter one of the URLs listed in your browser. Choose the URL for an attached file to download the attachment.
::: moniker-end

## Delete work item links

Do the following steps to delete a work item link.

1. Open the work item.
2. Select the **Links** tab to see the list of links.
3. Select the link that you want to delete, and then select **Remove link**.
4. Confirm that you want to delete the link.

After a work item gets linked to a commit or pull request, it continues to appear as part of the release stages. For example, if you have a work item that didn't pass testing criteria, you might want to remove it from the builds and releases.

To remove the work item from participating in future builds and releases, delete the link to the most recent commit and pull request.

## Related articles

- [Review the reference guide for link types](../queries/link-type-reference.md)
- [Drive Git development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md)
- [Track dependencies by using Delivery Plans](../plans/track-dependencies.md)
- [Organize your backlog and map child work items](../backlogs/organize-backlog.md)
- [Download the Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization)
