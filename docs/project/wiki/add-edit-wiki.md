---
title: Add, Edit, Reorder, and Manage Wiki Pages
titleSuffix: Azure DevOps  
description: Learn how to add, edit, reorder, and manage pages for your team project wiki in Azure DevOps.  
ms.subservice: azure-devops-wiki
ms.custom: wiki, devx-track-azurecli, devdivchpfy22
ms.assetid: BD03B9EE-D4DC-4EDC-B0BF-5C11B34E14C9 
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 06/03/2025
---

# Add and edit wiki pages

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

After you set up a [wiki Git repository](./wiki-create-repo.md) for your team project, you can add a title for the wiki and page content. The Azure DevOps UI provides a side-by-side experience where you can edit pages and preview your changes as you work. 

In the **Edit** pane, you enter page content by using [Markdown format syntax](./markdown-guidance.md). You can also insert images, attachments, and links. As you make changes, the content updates in the **Preview** pane. Content with special formatting like headings, lists, links, and images display as rich-text in the **Preview** pane. 

:::image type="content" source="media/wiki/wiki-edit.png" border="false" alt-text="Screenshot of the Wiki home page in Azure DevOps showing the side-by-side experience where you can Edit page content and Preview your changes at the same time." lightbox="media/wiki/wiki-edit.png":::

While you edit the page, use the **Ctrl+S** keyboard shortcut to quickly save your work. You can also save your work with a custom revision message like "Added page links." This option is available on the **Save** :::image type="icon" source="../../media/icons/context-menu.png"::: dropdown menu:

:::image type="content" source="media/wiki/wiki-save-with-message.png" alt-text="Screenshot that shows how to select the Save with revision message option in Azure DevOps.":::

Other keyboard shortcuts are available. For more information, see [Keyboard shortcuts to manage wiki pages](../navigation/keyboard-shortcuts.md).

> [!NOTE]  
> This article describes how to add and edit pages in a wiki created for a team project. If you want to add or edit pages to a wiki published from a Git repository, see [Publish a Git repository to a wiki](publish-repo-to-wiki.md). 

::: moniker range="azure-devops"

## Wiki command-line tools

You can use Azure DevOps CLI commands to manage your wiki content. The following table provides links to sections in this article that describe how to work with specific commands.

| Command | Description |
|---------|-------------|
| [az devops wiki show](#open-wiki) | Open the wiki and show the wiki home page. |
| [az devops wiki page show](/cli/azure/devops/wiki/page#az-devops-wiki-page-show) | Show a specific page in the wiki. |
| [az devops wiki page create](#add-a-wiki-page)  | Add a new page to the wiki. |
| [az devops wiki page update](#edit-wiki-page)   | Edit an existing page in the wiki. |
| [az devops wiki page delete](#delete-wiki-page) | Delete a page in the wiki. |

::: moniker-end

## Prerequisites

| Category     | Requirements |
|--------------|--------------|
| **Project access** | Member of the project where the wiki is located. You can request access from your project administrator, as needed. |
| **Permissions**    | Member of the **Contributors** group. |
| **Access levels**  | At least **Basic** access. |
| **Tasks**          | Prepare a [provisioned wiki](wiki-create-repo.md) for your project. |

<!-- Section: Open the wiki -->

<a id="open-wiki">  </a>

[!INCLUDE  [temp](includes/open-wiki-hub.md)]

<a id="add-page"></a>

## Add a wiki page

This section describes how to add a page to your wiki. You can work directly with the Azure DevOps UI in the browser or use the Azure DevOps CLI.

### [Browser](#tab/browser) 

To add a new page to your wiki, you have two options. Start by selecting a page in the list, such as the home page.

- To add a page at the same level as the current page, select **New page** at the bottom of the Azure DevOps UI.

- To add a subpage to the current page, select **More options** (**...**) > **Add subpage**.

:::image type="content" source="media/wiki/add-new-page.png" border="false" alt-text="Screenshot that shows how to add a New page or new subpage to a wiki in Azure DevOps." lightbox="media/wiki/add-new-page.png":::

You can also use keyboard shortcuts to add pages. Select the current page, and then add a new page by selecting **n** or add a subpage by selecting **c**. For more information, see [Keyboard shortcuts to manage wiki pages](../navigation/keyboard-shortcuts.md#wiki-keyboard-shortcuts).

#### Page title and file name

Enter a unique title for the page. The value is case-sensitive. The title is used as the file name for the page. In the file name, spaces in the page title are replaced by hyphens (`-`). For example, the page title "How to contribute" corresponds to the file name _How-to-contribute.md_. The fully qualified path to the file should be 235 characters or less.

For other file name restrictions, see [Wiki Git repository files and file structure, File naming conventions](wiki-file-structure.md#file-naming-conventions).

### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

You can add a wiki page with the `az devops wiki page create` command:

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page create --path
                           --wiki
                           [--comment]
                           [--content]
                           [--encoding {ascii, utf-16be, utf-16le, utf-8}]
                           [--file-path]
                           [--project]
                           [--subscription]
```

For more information, see [Get started with the Azure DevOps CLI](../../../cli/index.md).

#### Parameters: Create page

The following parameters are available for the `wiki page create` command:

| Parameter        | Required | Description | Note |
|------------------|:--------:|-------------|------|
| `--path`         | Yes      | The fully qualified path for the wiki page. | |
| `--wiki`         | Yes      | The name or ID of the wiki. | |
| `--comment`      | No       | A comment to use in the commit message of the file **Add** operation. When no comment is specified, the default value is applied: "Added a new page using Azure DevOps CLI." | |
| `--content`      | No       | The content for the wiki page provided inline with the command, such as `--content "Hello World"`. | If you specify the page content by using the `--file-path` parameter, this parameter is **Ignored**. |
| `--file-path`    | No       | The path to the file that contains the page content. | |
| `--encoding`     | Maybe    | The encoding type of the page content. Possible values: `ascii`, `utf-16be`, `utf-16le`, and `utf-8`. | This parameter supports the `--file-path` parameter. When the `--file-path` parameter _isn't_ specified, this parameter is **Ignored**. |
| `--project -p`   | Maybe    | The name or ID of the project. You can configure the default project by using the `az devops configure -d project=NAME_OR_ID` command. | When the project isn't configured by default or picked up by using the `git config` command, the parameter is **Required**. |

For more information, see the Azure DevOps CLI [command reference](/cli/azure/devops/wiki#az-devops-wiki-show).

#### Example: Add wiki page in the browser

The following command creates a new page with the path "Get Started" in a wiki named "MyProjectwiki." The command specifies the wiki page content inline:

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page update --path 'Get Started' --wiki MyProjectwiki --content "**Contributor Support**<br>TODO: Add introduction"
```

#### Example: Update wiki page in the browser

The following command updates an existing wiki page with content from another file. The wiki page location is set with the `--path 'Get Started'` parameter. The page content is obtained from the `--file-path ./get-started-content.txt` parameter. The encoding for the file is also specified.

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page update --path 'Get Started' --wiki MyProjectwiki --file-path get-started-content.txt --encoding utf-8
```

::: moniker-end

[!INCLUDE [note-cli-not-supported](../../includes/note-cli-not-supported.md)]

* * *

<a id="page-title-names"></a>

### Page title and file name restrictions

[!INCLUDE [temp](./includes/wiki-naming-conventions.md)]

## Set the wiki home page

By default, the first page you add when you create a wiki is set as the wiki home page. You can change your wiki homepage if another page becomes more relevant. For more information, see [Reorder or move wiki pages](#reorder-or-move-wiki-pages).

## Edit and delete wiki pages

This section describes how to edit or delete a page in your wiki. You can work directly with the Azure DevOps UI in the browser or use the Azure DevOps CLI.

### [Browser](#tab/browser) 

There are several ways to edit an existing wiki page in the browser:

- Open the wiki page and select **Edit**.
- Open the wiki page and use the keyboard shortcut **e**.
- Select the wiki page in the page list, then select **More options** (**...**) > **Edit**.

For more information about specific editing functions, see [Use Markdown guidance](markdown-guidance.md).

::: moniker range="> azure-devops-2020"

#### Edit in Repos for code wikis

When you publish code as a wiki, you can edit the wiki pages in the **Repos** hub. The same side-by-side editor experience is available with the Markdown toolbar formatting options. Select **Edit** > **Edit in Repos** to create a branch and continue editing:

:::image type="content" source="media/wiki/edit-in-repos.png" alt-text="Screenshot that shows how to select the Edit in Repos option in Azure DevOps.":::

The **Edit in Repos** option is available only for code wikis that have branch policies enabled. If you don't see the option, it might be because your wiki isn't a code wiki or branch policies aren't enabled. For more information, see [Branch policies and settings](../../repos/git/branch-policies.md).

::: moniker-end

#### Delete wiki page in the browser

To delete a wiki page, select the wiki page in the page list, then select **More options** (**...**) > **Delete**. You can also select **Delete** from the right-click menu for the page.

After you select **Delete**, confirm the delete in the dialog.

> [!NOTE]  
> When you delete a wiki page, you also delete all metadata for the page and any subpages attached to the page.

### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

You can edit a wiki page with the `az devops wiki page update` command:

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page update --path
                           --version
                           --wiki
                           [--comment]
                           [--content]
                           [--file-path]
                           [--project]
                           [--subscription]
```

For more information, see [Get started with the Azure DevOps CLI](../../../cli/index.md).

#### Parameters: Update page

The following parameters are available for the `wiki page update` command:

| Parameter        | Required | Description | Note |
|------------------|:--------:|-------------|------|
| `--path`         | Yes      | The fully qualified path for the wiki page. | |
| `--wiki`         | Yes      | The name or ID of the wiki. | |
| `--version -v`   | No       | The version of the wiki page, which corresponds to the `ETag` entity tag value. | |
| `--comment`      | No       | A comment to use in the commit message of the file **Delete** operation. When no comment is specified, the default value is applied: "Updated page using Azure DevOps CLI." | |
| `--file-path`    | No       | The path to the file that contains the page content. | |
| `--project -p`   | Maybe    | The name or ID of the project. You can configure the default project by using the `az devops configure -d project=NAME_OR_ID` command. | When the project isn't configured by default or picked up by using the `git config` command, the parameter is **Required**. |
| `--subscription` | No       | The name or ID of the subscription. You can configure the default subscription with the `az account set -s NAME_OR_ID` command. | |

For more information, see the Azure DevOps CLI [command reference](/cli/azure/devops/wiki#az-devops-wiki-show).

#### Example: Update wiki page with inline content

The following command updates the content for the "Get Started" page in a wiki named "MyProjectwiki." The command specifies the wiki page content inline:

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page update --path 'Get Started' --wiki MyProjectwiki --content "**Contributor Support**<br>TODO: Add introduction" --version 1234abcd5678efgh2345ijkl6789mnop3456qrst
```

#### Example: Update wiki page with file content

The following command updates an existing wiki page with content from another file. The wiki page location is set with the `--path 'Get Started'` parameter. The page content is obtained from the `--file-path ./get-started-content.txt` parameter. The encoding for the file is also specified.

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page update --path 'Get Started' --wiki MyProjectwiki --file-path ./get-started-content.txt --encoding utf-8 --version 1234abcd5678efgh2345ijkl6789mnop3456qrst
```

### Delete wiki page

You can edit a wiki page with the `az devops wiki page delete` command:

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page delete --path
                           --wiki
                           [--comment]
                           [--project]
                           [--subscription]
                           [--yes]
                          
```

For more information, see [Get started with the Azure DevOps CLI](../../../cli/index.md).

#### Parameters: Delete page

The following parameters are available for the `wiki page delete` command:

| Parameter        | Required | Description | Note |
|------------------|:--------:|-------------|------|
| `--path`         | Yes      | The fully qualified path for the wiki page. | |
| `--wiki`         | Yes      | The name or ID of the wiki. | |
| `--comment`      | No       | A comment to use in the commit message of the file **Delete** operation. When no comment is specified, the default value is applied: "Deleted page using Azure DevOps CLI." | |
| `--project -p`   | Maybe    | The name or ID of the project. You can configure the default project by using the `az devops configure -d project=NAME_OR_ID` command. | When the project isn't configured by default or picked up by using the `git config` command, the parameter is **Required**. |
| `--subscription` | No       | The name or ID of the subscription. You can configure the default subscription with the `az account set -s NAME_OR_ID` command. | |
| `--yes -y`       | No       | Indicates that you don't want the operation to prompt you for confirmation. | |

For more information, see the Azure DevOps CLI [command reference](/cli/azure/devops/wiki#az-devops-wiki-show).

#### Example: Delete wiki page

The following command deletes the "Get Started" page in a wiki named "MyProjectwiki":

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page delete --path 'Get Started' --wiki 'MyProjectwiki'
```

::: moniker-end

[!INCLUDE [note-cli-not-supported](../../includes/note-cli-not-supported.md)]

* * *

## Reorder or move wiki pages

In the browser, you can reorder pages in the wiki tree view so the pages display in your preferred sequence. The default sequence is alphabetically by file name. You might change the sequence to reorder pages by article, category, or intended audience.

You can use the drag-and-drop action on page titles in the tree view to complete the following tasks:

- **Move**: Change the page/sub-page relationship of a page. If you move a page within the wiki sequence, links to the page from other wiki pages might break. You can manually [fix these links](#fix-broken-links-after-moving-a-page) after moving the page.

- **Reorder**: Change the order of a page within the wiki sequence. Reordering pages within the wiki sequence doesn't affect page links.

### Fix broken links after page moves

To fix a broken link after you move a page in the wiki sequence, follow these steps:

1. Test the other pages in your wiki and look for links to the moved page.

   Check for error messages on the page or missing content.

1. Open the page that has a broken link, select **Edit**, and go to the broken link in the page content.

   To find the broken link in the content, you can search for the name of the moved page, the original file path of the moved page, or the link text for the broken link.

1. Update the broken link. The typical fix is to change the URL or path in the link to target the new location for the moved page.

1. Save your changes to the page so the link updates.

1. Open the updated page in the browser and test the link. Confirm it successfully opens the moved page.

### Change order of top-level pages

You can use keyboard shortcuts to reorder top-level pages in the wiki sequence. This action doesn't work for subpages.

Select a page in the wiki page list and use the **CTRL + UP ARROW** or **CTRL + DOWN ARROW** shortcut to move the page within the sequence. The change applies immediately.

### Change page/sub-page order

You can also change the page/sub-page order for any page in the wiki sequence.

1. Select the page that you want to move in the wiki page list.

1. Select **More options** (**...**) > **Move**, which opens the **Move page** dialog.

1. In the **Move page** dialog, select the page to serve as the new _parent_ page.

   :::image type="content" source="media/wiki/wiki-move-page.png" border="false" alt-text="Screenshot that shows how to move a wiki page so it becomes a subpage of another page in the sequence." lightbox="media/wiki/wiki-move-page.png":::

1. After you select the new parent page, the system scans for any potential broken links based on the page move. It reports the links that need to be adjusted:

   :::image type="content" source="media/wiki/wiki-fix-affected-links.png" border="false" alt-text="Screenshot that shows how to have the system adjust any page links caused by a page move in the wiki sequence." lightbox="media/wiki/wiki-fix-affected-links.png":::

1. Select the **Update affected links in pages and work items (recommended)** option and then select **Move** to complete the page move.

For a complete list of keyboard shortcuts, see [Keyboard shortcuts to manage wiki pages](../navigation/keyboard-shortcuts.md#wiki-keyboard-shortcuts).

## Related content

- [View wiki page history and revert](wiki-view-history.md)
- [Compare provisioned vs. published wiki](provisioned-vs-published-wiki.md)
- [Use wiki Markdown guidance](markdown-guidance.md)