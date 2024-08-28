---
title: Differences between provisioned and published as code wiki
titleSuffix: Azure DevOps
description: Understand the differences of updating a provisioned wiki for a team project versus files you publish from a Git repository in Azure DevOps. 
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: conceptual
ms.assetid:
ms.author: chcomley
ms.reviewer: gopinach
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 08/05/2024  
---

# Provisioned wiki vs. published as code wiki

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

<!--- Supports https://go.microsoft.com/fwlink/?linkid=866310 -->

You can maintain your wiki content in a [team project wiki](wiki-create-repo.md) or a [published as code wiki](publish-repo-to-wiki.md). With a published as code wiki, you can maintain several versioned wikis to support your content needs, although it's available only if Azure Repos is enabled.

While both options maintain the wiki content in Git repositories, the way you add, update, and manage the wiki content differs.

> [!NOTE]  
> The published as code wiki feature is currently available on Azure DevOps Server 2018 and later versions. For older versions, you can only [provision a wiki for your team project](wiki-create-repo.md).  

## Wiki page menu options

With a *provisioned wiki*, you can add and edit pages directly within the **wiki**. All content updates to a *provisioned wiki* occur within the **wiki**.

With a *published as code wiki*, you can add, edit, and update content from **Repos** or **Code**.

The following image shows options for a provisioned wiki. Several of these options aren't supported for the **published as code wiki** pages.

:::image type="content" source="media/wiki/diff-menu-options-provisioned.png" alt-text="Screenshot of Provisioned wiki page menu options.":::

For example, the **Edit in Repos** option for the published as code wiki takes you to the **Repo** page to edit that specific page. Updates that you make to a page in the branch you selected for the wiki get automatically published to the wiki.

## Supported features and operational differences

Both types of wiki support the following features:

- [Markdown format](markdown-guidance.md)
- [HTML tags](markdown-guidance.md#use-html-tags-in-wiki-pages)
- [Insert and resize images](markdown-guidance.md#images)
- [Mathematical notation and characters](markdown-guidance.md#mathematical-notation)
- [Link to work items using #](markdown-guidance.md#link-to-work-items-from-a-wiki-page)
- [Attach files](markdown-guidance.md#attach)
- [Filter Wiki contents](filter-print-wiki.md)
- [Print a Wiki page](filter-print-wiki.md)
- [Update content offline](wiki-update-offline.md)
- [Add or edit pages from the Wiki](add-edit-wiki.md)

The following table summarizes those operations or features that might differ, depending on the wiki type.  

> [!div class="mx-tdCol2BreakAll"]
> |Operation |    Provisioned wiki    | Published as code wiki |
> |--------|--------------|--------------|  
> |[Support multiple wikis, name wiki](publish-repo-to-wiki.md)  |  | ✔️|
> |[Add or edit pages from **Repos** > **Files** or **Code** > **Files**](publish-repo-to-wiki.md) |  |✔️ |
> |[Revert to an earlier revision from the **Wiki**](wiki-view-history.md#revert-provision) |✔️ |  |
> |[Revert to an earlier revision from **Repos** or **Code**](wiki-view-history.md#revert-publish) |✔️ |✔️ |
> |[Maintain versioned wikis](#versioning) |  | ✔️ |
> |[Select a wiki version](publish-repo-to-wiki.md#select-a-wiki-version) |  | ✔️ |
> |[Unpublish a code wiki](publish-repo-to-wiki.md#unpublish-wiki) |  | ✔️ |

<a id="add-pages"></a>

## Add pages

For both types of wiki, select **New page** or **Add subpage**. For more information, see [Add and edit wiki pages](add-edit-wiki.md#add-a-wiki-page).

<a id="toc"></a>

## Page sequence and page list in navigation pane

The *provisioned wiki* manages the page sequence and page list automatically as you add or move pages within the navigation pane.

To structure the list of pages in the navigation pane for a *published as code wiki*, define the `*.order*` file at the root, and for each subfolder or parent page that contains subpages.

Both types of wikis follow the same file structure, it's just that the published as code wiki requires you to maintain the page sequence manually.

For more information about working with *`.order`* files, see [Wiki Git repository files and file structure](wiki-file-structure.md#order-file).

<a id="revisions"></a>

## Page revisions and reverting to a previous version

From the **wiki**, you can view the revisions of any wiki page. Select **Revisions** or the **View revisions** menu option.

But, the revert process differs depending on the wiki page type.  

- For a *provisioned wiki* page, select **Revert**, as described in [Revert a commit to a provisioned wiki page](wiki-view-history.md#revert-provision)
- For a *published as code wiki* page, work from a local branch and submit a pull request to update the branch you're working from.

<a id="versioning"></a>

## Versioning and unpublishing a wiki

With versioning, you can publish different content versions to distinct wikis, based on a versioned branch of a Git repo. You can version and unpublish a wiki only if you are the one who created it by publishing code to a wiki. For more information, see [Unpublish a code wiki](publish-repo-to-wiki.md#unpublish-wiki).

## Delete a project wiki

> [!NOTE]
> Wiki REST APIs don't support deleting a project wiki. So, you have to delete the wiki repository instead.

1. Clone the wiki repository to take backup of all its content. The **More options** has the clone wiki URL, which can be used to clone the wiki.

2. Get the git repository ID that backs your wiki. You can use the [REST API](/rest/api/azure/devops/wiki/wikis/get?view=azure-devops-rest-7.1&tabs=HTTP&preserve-view=true) to get all the wikis in the project.
   
   For example, `GET https://fabrikam.visualstudio.com/sampleProject/_apis/wiki/wikis?api-version=4.1` returns all the wikis in the project, so you can choose which one to delete.

3. Use the REST API to delete the backing Git repo. Use the repository ID of the project wiki you found in the previous step and double check the repository ID, so you don't remove the wrong one.

   For example, `DELETE https://fabrikam.visualstudio.com/sampleProject /_apis/git/repositories/{repositoryId}?api-version=4.1`

## Update a wiki offline

You can work offline or in a local branch to update content for a  *provisioned wiki* and *publish as code wiki*. For more information, see [Clone and update wiki pages offline](wiki-update-offline.md).

## Related articles

- [Create a wiki for your team project](./wiki-create-repo.md)
- [Wiki Git repository files and file structure](wiki-file-structure.md)
- [Publish a Git repository to a wiki](publish-repo-to-wiki.md)
- [Get Started with Git](../../repos/git/gitquickstart.md)
