---
title: 'Wiki Differences: Provisioned or Published as Code'
titleSuffix: Azure DevOps
description: Understand the differences of maintaining an Azure DevOps wiki provisioned for a team project versus a wiki published as code. 
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: concept-article
ms.author: chcomley
ms.reviewer: gopinach
author: chcomley
ms.date: 05/28/2025
#customer intent: As an Azure DevOps developer, I want to compare provisioning a wiki with publishing a wiki as code, so I can choose the best approach for my team.
---

# Provisioned wiki vs. published as code wiki

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

<!--- Supports https://go.microsoft.com/fwlink/?linkid=866310 -->

You can maintain your wiki content in a [team project wiki](wiki-create-repo.md) or a [published as code wiki](publish-repo-to-wiki.md). With a _published as code wiki_, you can maintain several versioned wikis to support your content needs. This option is available when you enable Azure Repos.

While both options maintain the wiki content in Git repositories, the way you add, update, and manage the wiki content differs.

## Maintain wiki content

For both types of wiki, you can work directly in GitHub or work offline and then push your changes to the repo. 

For a _provisioned wiki_, you add and maintain wiki pages directly within the **Wiki** > **Pages** section of the repo. All content updates to a _provisioned wiki_ occur within the wiki itself.

For a _published as code wiki_, you add and maintain wiki content as code files in the repo. You access the files within the **Repos** or **Code** sections of the repo on GitHub.

The following image shows menu options for a _provisioned wiki_:

:::image type="content" source="media/wiki/diff-menu-options-provisioned.png" alt-text="Screenshot of menu options available for a provisioned wiki from the wiki Pages section.":::

Some menu options aren't supported for _published as code wiki_ pages. For a _published as code wiki_, the **Edit in Repos** option opens the current page, so you can edit the content in place. Updates you make to a page in the selected branch for the wiki automatically publish to the wiki.

## Add wiki pages

The **New page** and **Add subpage** menu options are available for both types of wiki in GitHub. For more information, see [Add and edit wiki pages](add-edit-wiki.md#add-a-wiki-page).

<a id="toc"></a>

## Adjust page sequence and page list

Both types of wiki apply the same folder and file structure within the Git repo. The difference is in how you maintain the page sequence.

For a *provisioned wiki*, GitHub manages the page sequence and page list automatically as you add or move pages within the navigation pane.

For a _published as code wiki_, you need to maintain the page sequence **manually**. To structure the list of pages in the navigation pane, you define an _*.order*_ file at the root and for each subfolder or parent page that contains subpages. For more information, see [Wiki Git repository files and file structure](wiki-file-structure.md#page-sequence-and-the-order-file).

<a id="revisions"></a>

## View page revisions and revert to earlier version

From the **Wiki** page for the Git repo, you can view the revisions of any page within the wiki. Use the **Revisions** or **View revisions** menu options. To revert the current page content to an earlier version, the process differs depending on the wiki page type.

For a *provisioned wiki* page, select the  **Revert** menu option. For more information, see [Revert a commit to a provisioned wiki page](wiki-view-history.md#revert-provision).

For a *published as code wiki* page, you work from a local branch and submit a pull request to update the branch you're working from.

<a id="versioning"></a>

## Use versioning and unpublish the wiki

Versioning support lets you publish different content versions to distinct wikis, based on a versioned branch of a Git repo. 

You can version and unpublish a wiki only if you're the user who published the code to create wiki. For more information, see [Unpublish a code wiki](publish-repo-to-wiki.md#unpublish-wiki).

## Delete project wiki

The following steps describe how to delete a project wiki.

> [!NOTE]
> You can't use the REST API to delete a project wiki. Instead, delete the wiki repository directly.

1. Clone the wiki repository to back up all content. You can find the wiki URL on the **More options** menu (**...**).

1. Get the Git repository ID associated with your wiki. You can use the [REST API](/rest/api/azure/devops/wiki/wikis/get?view=azure-devops-rest-7.1&tabs=HTTP&preserve-view=true) to get all the wikis in the project.
   
   For example, the `GET https://fabrikam.visualstudio.com/sampleProject/_apis/wiki/wikis?api-version=4.1` command returns all wikis in the project. Run the command and choose the wiki to delete.

1. Delete the Git repository associated with your wiki by using the REST API. Use the repository ID of the project wiki you found earlier. Double check the repository ID to ensure you don't remove the wrong wiki.

   For example, the `DELETE https://fabrikam.visualstudio.com/sampleProject /_apis/git/repositories/<repositoryId>?api-version=4.1` command deletes the wiki. Replace `<repositoryId>` with the repository ID of the wiki to delete.

## Update wiki while offline

You can work offline or in a local branch to update content for both types of wiki. For more information, see [Clone and update wiki pages offline](wiki-update-offline.md).

## Explore other features and operations

Both types of wiki support several other features and operations:

- [Markdown format](markdown-guidance.md)
- [HTML tags](markdown-guidance.md#use-html-tags-in-wiki-pages)
- [Insert and resize images](markdown-guidance.md#images)
- [Mathematical notation and characters](markdown-guidance.md#mathematical-notation)
- [Link to items with hash tag (#)](markdown-guidance.md#link-to-work-items-from-a-wiki-page)
- [Attach files](markdown-guidance.md#attach)
- [Filter Wiki contents](filter-print-wiki.md#filter-wiki-pages)
- [Print a Wiki page](filter-print-wiki.md#print-a-wiki-page)
- [Update content offline](wiki-update-offline.md)
- [Add or edit pages from the Wiki](add-edit-wiki.md)

A few operations and features are available for only one type of wiki or the usage approach differs:

> [!div class="mx-tdCol2BreakAll"]
> |Operation |Provisioned |Published as code |
> |----------|:----------:|:----------------:|  
> |[Support multiple wikis, name wiki](publish-repo-to-wiki.md)  |  | ✔️|
> |[Add or edit pages from **Repos** > **Files** <br> or from **Code** > **Files**](publish-repo-to-wiki.md) |  | ✔️ |
> |[Revert to earlier revision from **Wiki** page](wiki-view-history.md#revert-provision) | ✔️ |  |
> |[Revert to earlier revision from **Repos** options <br> or from **Code** options](wiki-view-history.md#revert-publish) | ✔️ | ✔️ |
> |[Maintain versioned wikis](#versioning) |  | ✔️ |
> |[Select wiki version](publish-repo-to-wiki.md#select-a-wiki-version) |  | ✔️ |
> |[Unpublish code wiki](publish-repo-to-wiki.md#unpublish-wiki) |  | ✔️ |

## Related content

- [Create a wiki for your team project](wiki-create-repo.md)
- [Wiki Git repository files and file structure](wiki-file-structure.md)
- [Publish a Git repository to a wiki](publish-repo-to-wiki.md)