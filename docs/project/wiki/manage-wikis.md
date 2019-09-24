---
title: Manage wikis in Azure DevOps
titleSuffix: Azure DevOps
description: Learn how to manage wikis in Azure DevOps
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.topic: conceptual
ms.assetid: 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.reviewer: sancha
ms.date: 09/24/2019
monikerRange: 'azure-devops'
---

# Manage wikis

[!INCLUDE [temp](../../_shared/version-azure-devops.md)]

In this article, find the following CLI commands for managing wikis.

## Commands

|Commands  |description  |
|---------|---------|
|[az devops wiki create](#create-wiki)     | Create a wiki.        |
|[az devops wiki delete](#delete-a-wiki)   | Delete a wiki.        |
|[az devops wiki list](#list-wikis)   |  List all the wikis in a project or organization.       |
|[az devops wiki page](add-edit-wiki.md)    |  Manage wiki pages.       |
|[az devops wiki page create](#create-a-wiki-page)     | Add a new page.        |
|[az devops wiki page delete](add-edit-wiki.md#delete-wiki-page)   | Delete a page.        |
|[az devops wiki page show](add-edit-wiki.md#get-wiki-page-content)    | Get the content of a page or open a page.        |
|[az devops wiki page update](add-edit-wiki.md#edit-wiki-page)   |  Edit a page.       |
|[az devops wiki show](#show-wiki)    |  Show details of a wiki.       |

## Create wiki

To create a wiki, enter the `az devops wiki create` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki create [--detect {false, true}]
                      [--mapped-path]
                      [--name]
                      [--org]
                      [--project]
                      [--repository]
                      [--type {codewiki, projectwiki}]
                      [--version]
```

### Optional parameters

- **--detect**: Automatically detect organization. Accepted values: false, true.
- **--mapped-path**: [Required for codewiki type] Mapped path of the new wiki e.g. '/' to publish from root of repository.
--name: Name of the new wiki.
- **--org --organization**: Optional. Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/.
- **--project -p**: Optional. Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config.
- **--repository -r**: [Required for codewiki type] Name or ID of the repository to publish the wiki from.
- **--type --wiki-type**: Type of wiki to create. Accepted values: codewiki, projectwiki. Default value: projectwiki.
- **--version -v**: [Required for codewiki type] Repository branch name to publish the code wiki from.

### Examples

Create a project wiki.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki create --name myprojectwiki
```

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki create --name WIKI_NAME --type codewiki --version BRANCH_NAME
--repository REPO_NAME --mapped-path PATH_TO_PUBLISH
```

## Delete a wiki

To delete a wiki, enter the `az devops wiki delete` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki delete --wiki
                      [--detect {false, true}]
                      [--org]
                      [--project]
                      [--yes]
```

### Parameters

- **--wiki**: Required. Name or ID of the wiki to delete.
- **--detect**: Optional. Automatically detect organization.
- **--org --organization**: Optional. Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/.
- **--project -p**: Optional. Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config.
- **--yes -y**: Optional. Do not prompt for confirmation.

## List wikis

To list all the wikis in a project or an organization, enter the `az devops wiki list` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki list [--detect {false, true}]
                    [--org]
                    [--project]
                    [--scope {organization, project}]
```

### Parameters

- **--detect**: Optional. Automatically detect organization.
- **--org --organization**: Optional. Azure DevOps organization URL.
- **--project -p**: Optional. Name or ID of the project.
- **--scope**: Optional. List the wikis at project or organization level. Accepted values: organization, project. Default value: project.

### Examples

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki list
```

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki list --scope organization
```

## Show wiki

To show details of a wiki, enter the `az devops wiki show` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki show --wiki
                    [--detect {false, true}]
                    [--open]
                    [--org]
                    [--project]
```

### Parameters

- **--wiki**: Required. Name or ID of the wiki.
- **--detect**: Optional. Automatically detect organization.
- **--open**: Optional. Open the wiki page in your web browser.
- **--org --organization**: Optional. Azure DevOps organization URL.
- **--project -p**: Optional. Name or ID of the project.

### Example

## Create a wiki page

To add a new wiki page, enter the `az devops wiki page create` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki page create --path
                           --wiki
                           [--comment]
                           [--content]
                           [--detect {false, true}]
                           [--encoding {ascii, utf-16be, utf-16le, utf-8}]
                           [--file-path]
                           [--org]
                           [--project]
```

### Parameters

- **--path**: Required. Path of the wiki page.
- **--wiki**: Required. Name or ID of the wiki.
- **--comment**: Optional. Comment in the commit message of file add operation. Default value: Added a new page using Azure DevOps CLI.
- **--content**: Optional. Content of the wiki page. Ignored if --file-path is specified.
- **--detect**: Optional. Automatically detect organization.
- **--encoding**: Optional. Encoding of the file. Used in conjunction with --file-path parameter.
- **--file-path**: Optional. Path of the file input if content is specified in the file.
- **--org --organization**: Optional. Azure DevOps organization URL.
- **--project -p**: Optional. Name or ID of the project.

### Examples

Create a new page with path 'my page' in a wiki named 'myprojectwiki' with inline content.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki page create --path 'my page' --wiki myprojectwiki --content "Hello World"
```

Create a new page with path 'my page' in a wiki named 'myprojectwiki' with content from a file.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki page create --path 'my page' --wiki myprojectwiki --file-path a.txt            --encoding utf-8
```





