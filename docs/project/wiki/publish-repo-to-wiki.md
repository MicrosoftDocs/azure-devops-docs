---
title: Publish Git Repository Files to Team Wiki
titleSuffix: Azure DevOps  
description: Explore how to maintain your Markdown files in a Git code repository and publish them to your team project wiki in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devx-track-azurecli, devdivchpfy22, engagement-fy23
ms.topic: how-to
ms.assetid:
ms.author: chcomley
ms.reviewer: gopinach
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/04/2025
#customer intent: As an Azure DevOps developer, I want to maintain my project code in a Git repo, so I can publish the code files to a team project wiki.
---

# Publish a Git repo to a wiki

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

You can publish content that you already maintain in a Git repository to an Azure DevOps wiki. Your repo might contain files for a software development kit (SDK), product documentation, README content, and so on. You can also publish multiple wikis for a single team project.

When you publish your Markdown (_.md_) files to a wiki, you gain several benefits:

- Organize the content into a managed page sequence structure
- Browse and filter the table of contents
- Publish new versions of the content
- Manage content in the same way you manage your code base
- Search the wiki easily by using the wiki **Search** feature

For more information, see [Provisioned wiki versus published code as wiki](provisioned-vs-published-wiki.md).

This article describes how to add and edit content published to a wiki by using the Azure DevOps web portal and the Azure DevOps CLI. You can also work offline and update your wiki content in the same way that you collaborate on code within a Git repo. For more information, see [Update wiki pages offline](wiki-update-offline.md).

<a id="prereq">  </a>

## Prerequisites

| Category | Requirements |
|----------|--------------|
| **Project access** | Member of the project where the wiki is located. You can request access from your project administrator, as needed. |
| **Permissions**    | Member of the **Contributors** group. |
| **Git repository** | A Git repo defined in your team project. Ideally, the repo contains at least one Markdown file that you want to publish to your wiki. For more information, see [Create a new Git repo in your project](../../repos/git/create-new-repo.md). |

## Open the wiki

Connect to your Azure DevOps project by using a [supported web browser](/azure/devops/server/compatibility#supported-browsers) and select **Wiki**:

:::image type="content" source="./media/open-wiki-overview-page.png" border="false" alt-text="Screenshot of a wiki open in the browser and showing the wiki overview page." lightbox="./media/open-wiki-overview-page.png":::

If you need to switch your team project, select :::image type="icon" source="../../media/icons/project-icon.png"::: **Azure DevOps** to [browse all team projects and teams](../navigation/work-across-projects.md).

## Publish a Git repository to a wiki

This section describes how to publish your Git repository to a wiki. You can work directly with the Azure DevOps UI in the browser or use the Azure DevOps CLI.

### [Browser](#tab/browser)

To publish the Markdown files in your Git repo to a wiki, follow these steps:

1. From the **Wiki** landing page, select **Publish code as wiki**:  

   :::image type="content" source="media/wiki/create-wiki-or-publish-publish-option.png" border="false" alt-text="Screenshot that shows how to select the Publish code as wiki option in Azure DevOps." lightbox="media/wiki/create-wiki-or-publish-publish-option.png":::

	- If you don't see the **Publish code as wiki** option, you might need to first define a Git repo for your project. Follow the instructions in [Create a new Git repo](../../repos/git/create-new-repo.md), refresh the **Wiki** page, and then return to this procedure.

   - If you already have a team project wiki, you can expand the project dropdown menu and select **Publish code wiki**:

      :::image type="content" source="media/wiki/publish-code-menu-option.png" alt-text="Screenshot that shows how to select the Publish code as wiki option for a project.":::

1. In the **Publish code as wiki** dialog, select the repo, branch, and folder that contain the Markdown files. The Git repo must be within the team project. If you want to publish all Markdown files in the repo to your wiki, select the root of the repo (`/`) as the folder:

   :::image type="content" source="media/wiki/publish-wiki-options.png" alt-text="Screenshot that shows how to configure the new code wiki in the Publish code as wiki dialog.":::

1. Enter a name for the new wiki repo and select **Publish**. The wiki repo populates with the Markdown files and folders included in the repo you selected.

	The following image shows the published repo for the files contained in the azure-docs-sdk-node repo selected in the previous step:

   :::image type="content" source="media/wiki/published-wiki.png" alt-text="Screenshot that shows the published wiki created from Markdown files in a Git repo." lightbox="media/wiki/published-wiki.png":::

	The code wiki features a table of contents (TOC):

   - The TOC title is derived from the Markdown file name.
   - The Markdown (_.md_) files in the repo/branch/folder are listed in alphabetical order. 
   - A parent page is created for each subfolder defined within the published folder, even if the folder doesn't contain any Markdown files.

   The following image shows the TOC content for the azure-docs-sdk-node repo:

   :::image type="content" source="media/wiki/publish-wiki-sample-code-repo.png" alt-text="Screenshot of the TOC for the published code wiki.":::

#### Git repo branch mapped to wiki

The head of the Git repo branch is mapped to the published code wiki. Any changes made within the branch and selected folders are automatically reflected in the published code wiki. There are no other workflows involved.

> [!NOTE]
> You can publish up to 10 branches per published code wiki.

For the provisioned wiki with the extra Markdown files, you can add or edit pages in the same way that you maintain code in your Git repo.  

### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range="azure-devops"

You can publish a Git repo to a wiki with the [az devops wiki create](/cli/azure/devops/wiki#ext-azure-devops-az-devops-wiki-create) command. Run this command when you maintain Markdown files in an existing Git repo and you want to publish them to a wiki.

> [!NOTE]
> You can't publish code as a wiki if your project doesn't have a Git repo already defined. As needed, follow the instructions in [Create a new Git repo](../../repos/git/create-new-repo.md), refresh the **Wiki** page, and then return to this procedure.

```azurecli 
az devops wiki create [--mapped-path]
                      [--name]
                      [--org]
                      [--project]
                      [--repository]
                      [--type {projectwiki, codewiki}]
                      [--version]
```

For more information, see [Get started with the Azure DevOps CLI](../../cli/index.md).

#### Parameters: Publish code as wiki

The following parameters are available for the `wiki page create` command:

| Parameter        | Required | Description | Note |
|------------------|:--------:|-------------|------|
| `--mapped-path`  | Yes      | The mapped path for the wiki. | Specify backslash (`/`) to publish from the root of the wiki repo. |
| `--name`         | Yes      | The name for the wiki. | |
| `--type`         | Yes      | Specifies the type of wiki to create. To publish code as a wiki, use the `codewiki` type. | |
| `--org`          | Maybe    | The Azure DevOps organization URL. You can configure the default organization with the `az devops configure -d organization=ORG_URL` command. | When the organization isn't configured by default or picked up by using the `git config` command, the parameter is **Required**. Example: `--org https://dev.azure.com/<OrganizationName>/`. |
| `--project`      | Maybe    | The name or ID of the project. You can configure the default project by using the `az devops configure -d project=NAME_OR_ID` command. | When the project isn't configured by default or picked up by using the `git config` command, the parameter is **Required**. |
| `--repository`   | Yes      | The name or ID of the Git repository to publish the wiki from. | |
| `--version`      | Yes      | The Git repo branch name to publish the code wiki from. | |

#### Example: Publish code as wiki

The following command creates a wiki of type `codewiki` named "My Code Wiki" published from the "MyCodeRepo" repo. The wiki is published in the _wikis_ folder in the `main` branch and the result is shown in table format.

```azurecli 
az devops wiki create --name "My Code Wiki" --type codewiki --repository MyCodeRepo --mapped-path /wikis --version main --output table

ID                                     Name            Type
------------------------------------   -------------   --------
0000aaaa-1b1b-2c2c-3d3d-444444eeeeee   My Code Wiki    codewiki
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * *

## Edit, rename, or delete pages  

In the Azure DevOps web portal, you can edit, rename, or delete a wiki page:

1. In your project, select **Repos** > **Files** or **Code > Files**.

1. In the list of files, select the page you want to work on.

1. Select **More options** :::image type="icon" source="../../media/icons/actions-icon.png"::: for the file, and then select the action:

   :::image type="content" source="media/wiki/publish-code-edit-rename-file.png" alt-text="Screenshot that shows the More options menu for a wiki file that includes the edit, rename, and delete actions.":::

> [!NOTE]  
> You can manage your wiki repo in the same way you manage other Git repo by defining branch policies on the branch that you selected to publish to the wiki. If you don't define branch policies, you can also make changes and push them directly to the branch from your web portal or from a client.

The following sections describe how to complete the actions in more detail.

### Edit a page

As you edit a file, use the links to preview your changes or highlight changes made from the previous version.

- To discard your changes, select **Cancel**. For more information about supported Markdown features, see [Syntax guidance for Markdown usage](./markdown-guidance.md).  

- When you're done, add a comment about your updates, and then select **Commit**:

   :::image type="content" source="media/wiki/publish-wiki-commit-changes.png" alt-text="Screenshot of the Commit dialog to add your changes to your wiki repo.":::

   The system automatically presents you with a link to create a pull request. You can ignore this message when you're directly editing the wiki branch.

   :::image type="content" source="media/wiki/publish-wiki-create-pr.png" alt-text="Screenshot that shows the link to create a pull request.":::

> [!TIP]
> If you change the name or case of a file, update the _.order_ file that references the file to reflect the change. For more information, see [Change the page sequence, add, or update an .order file](#page-sequence).

### Rename a page

All pages that you want to display in the wiki TOC must use the Markdown (_.md_) file type. You can use the **Rename** action to rename a file, including changing the file extension.

The following example renames the _new-home-page.md_ file to _New-Home-Page.md_. The corresponding page displays in the wiki TOC with the label, "New Home Page."

:::image type="content" source="media/wiki/publish-wiki-rename-file-commit-dialog.png" alt-text="Screenshot that shows how to rename a file on the Rename Commit dialog.":::

Page titles are case-sensitive and must be unique within the folder. The title must be 235 characters or less. For more information, see [Page title naming restrictions](wiki-file-structure.md#file-naming-conventions).

### Delete a page

Any Markdown file that you don't want to appear in the wiki, you can delete from the published folder. If you included the file in a _.order_ file, delete the corresponding page entry from the _.order_ file. For more information, see [Change the page sequence, add, or update an .order file](#page-sequence).

<a id="add-page"></a>

## Add a page or multiple pages  

There are several ways you can add pages to your published wiki:

- Add a file to the wiki root folder or any subfolder
- Upload files to the wiki root folder or any subfolder
- Add or update any _.order_ file to specify the page sequence in the wiki TOC

For each update, you need to commit your changes to the wiki repo. Then, refresh your wiki for your published repo to review the changes.  

### Add a page from the web portal

To add a page to your published wiki, follow these steps:

1. In the Azure DevOps web portal, go to **Repos** > **Files** or **Code** > **Files** for the published repo.

1. Select **More options** :::image type="icon" source="../../media/icons/actions-icon.png"::: for the repo, then select **New** > **File**:

   :::image type="content" source="media/wiki/publish-code-add-edit-files-folder.png" alt-text="Screenshot that shows how to add a file to the published wiki repo in the Azure DevOps web portal.":::

1. In the dialog, enter a name for the new file that includes the Markdown (_.md_) file type.

   The file name should correspond to the page title that you want to display in the wiki TOC. Replace any spaces in the page title with hyphens (`-`) in the file name. Page titles are case-sensitive and must be unique within the folder. The title must be 235 characters or less. For more information, see [Page title naming restrictions](wiki-file-structure.md#file-naming-conventions).

   The following example adds a file named _Page-4.md_ that displays in the wiki TOC with the page title "Page 4."

   :::image type="content" source="media/wiki/publish-wiki-new-file-dialog.png" alt-text="Screenshot that shows how to specify the file name for the new file.":::

   Select **Create**.

1. When the page appears in the file list, select the page and then select **Edit**. Enter the contents for the page. For more information, see [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](./markdown-guidance.md).

1. When you're done, add the new page to your published repo by selecting **Commit**.

### Upload files to a folder

You can also upload files to a folder in the published wiki. This option is useful when you have existing content that you want to add.

1. In the Azure DevOps web portal, go to **Repos** > **Files** or **Code** > **Files** for the published repo.

1. Select **More options** :::image type="icon" source="../../media/icons/actions-icon.png"::: for the repo, then select **Upload file(s)**:

   :::image type="content" source="media/wiki/publish-wiki-upload-files.png" alt-text="Screenshot that shows how to upload existing files to the published wiki repo in the Azure DevOps web portal.":::

1. In the **Commit** dialog, select the folder and files you want to upload:

   :::image type="content" source="media/wiki/publish-wiki-upload-files-dialog.png" alt-text="Screenshot that shows how to select the folder and files you want to upload in the Commit dialog.":::

1. When you're done, upload the files to your published repo by selecting **Commit**.

### Add a page that has subpages

If you want a page in your wiki to have subpages, you need a Markdown file and folder that have the same name. The file and folder must be in the same wiki folder.

1. Create the new Markdown file by following the steps in [Add a page from the web portal](#add-a-page-from-the-web-portal).

1. To create the corresponding folder, select **More options** :::image type="icon" source="../../media/icons/actions-icon.png"::: for the repo, then select **New** > **Folder**.

1. In the **New Folder** dialog, enter the folder name, which must be identical to the Markdown file name:

   :::image type="content" source="media/wiki/publish-wiki-create-folder.png" alt-text="Screenshot that shows how to specify the new folder to serve as a page with subpages in the wiki TOC.":::

   Select **Create**.

1. In the wiki file list, select the new folder. Add one or more files as subpages to the folder.  

### Add or update the .order file

After you add files or folders to the published repo, the last step is to add or update the _.order_ file for any new or updated folders. Update the page sequence to ensure the new files and folders display in the wiki TOC as expected.

For more information, see [Change the page sequence, add, or update a .order file](#page-sequence). Any file not listed in the _.order_ file is added to the end of the alphabetical list in the page sequence. 

<a id="page-sequence"></a>

## Change page sequence with .order file

The _.order_ file at the wiki root specifies the display sequence for pages at the root level. The file is a plain text list of page names that correspond to the Markdown files in the folder, such as _Welcome_, _support_, _rel-2025_, and so on. Each folder within the wiki also has a _.order_ file that defines the page sequence for that folder. 

Follow these steps to set up an order sequence file for a folder:

1. In the **Code > Files** page, select **New file**. Name the file _.order_.

1. Edit the file contents to define the display sequence for the Markdown files in the folder. 

   Add an entry corresponds for each page file in the folder that you want to make visible to wiki users.
   
   Page titles are case-sensitive. The entry text should match the page title and case used in the file name, but don't include the Markdown (_.md_) file type.

The following example shows an _.order_ file for a folder with five files:  

```
readme-version-9
Project-Overview
Get-Started
Submit-a-pull-request
team-contacts
```

## Set the wiki home page

When you select **Wiki** in the Azure DevOps web portal, the home page for your wiki opens.

By default, the first page you add when you create a wiki is set as the wiki home page. When your wiki has multiple pages, the first file in the alphabetical sequence is set as the home page.

You can specify which page to use as the home page by setting the page sequence in the _.order_ file at the wiki root. Place the home page name on the top line in the root _.order_ file:

```
Wiki-Welcome
Project-Overview
Get-Started
Submit-a-pull-request
team-contacts
readme-version-9
```

## Promote folder to wiki page

You can display a folder in your repository as a page in your wiki. This process is known as _promoting_ a folder to a page.

For this scenario, you need the following configuration:

- A Markdown (_.md_) file in your wiki that has the same name as the folder.

- The Markdown file and folder must be peers at the same location in your wiki file list.

The following example shows a folder and Markdown (_.md_) file that are both named **Test**. The presence of the peers with the same name at the same location creates a page with the same name in the wiki sequence:

:::image type="content" source="media/wiki/promote-folder.png" border="false" alt-text="Screenshot that shows a folder and Markdown file named Test, which creates a page named Test in the wiki sequence.":::

## Select a wiki version

If your wiki has several published versions, the most recent version is shown by default.

You can select a different wiki version by expanding the branch dropdown list and selecting the version to display:

:::image type="content" source="media/wiki/publish-wiki-select-version.png" alt-text="Screenshot that shows how to select a specific version of a code wiki from the wiki dropdown menu.":::

<a id="unpublish-wiki"></a>

## Unpublish a code wiki

If you no longer want a Git repository to be published as a wiki, you can unpublish the wiki.

> [!WARNING]
> Unpublishing a wiki unpublishes the entire code wiki, which includes all published versions of the repository.

1. In the wiki list, select the wiki you want to unpublish, select **More options** (**...**) > **Unpublish wiki**:

   :::image type="content" source="media/wiki/unpublish-wiki-code-option.png" alt-text="Screenshot that shows how to select the Unpublish option for a wiki from the More options dropdown menu.":::

   After you select the **Unpublish** action, a dialog opens for confirmation.

1. In the confirmation dialog, select **Unpublish**:

   :::image type="content" source="media/wiki/unpublish-wiki.png" alt-text="Screenshot that shows how to unpublish a wiki.":::

## Related content

- [Provisioned vs. published wiki](provisioned-vs-published-wiki.md)
- [Update wiki offline](wiki-update-offline.md)
- [Wiki Markdown guidance](markdown-guidance.md)