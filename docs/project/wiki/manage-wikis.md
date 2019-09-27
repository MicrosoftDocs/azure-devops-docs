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
ms.date: 09/27/2019
monikerRange: 'azure-devops'
---

# Manage wikis

[!INCLUDE [temp](../../_shared/version-azure-devops.md)]

In this article, find the following CLI commands for managing wikis.

## Commands

|Commands  |description  |
|---------|---------|
|[az devops wiki create](#create-a-wiki)     | Create a wiki.        |
|[az devops wiki delete](#delete-a-wiki)   | Delete a wiki.        |
|[az devops wiki list](#list-wikis)   |  List all the wikis in a project or organization.       |
|[az devops wiki page](add-edit-wiki.md)    |  Manage wiki pages.       |
|[az devops wiki page create](#create-a-wiki-page)     | Add a new page.        |
|[az devops wiki page delete](add-edit-wiki.md#delete-wiki-page)   | Delete a page.        |
|[az devops wiki page show](add-edit-wiki.md#view-a-wiki-page)    | Get the content of a page or open a page.        |
|[az devops wiki page update](add-edit-wiki.md#edit-wiki-page)   |  Edit a page.       |
|[az devops wiki show](#show-wiki)    |  Show details of a wiki.       |

## Create a wiki

To create a wiki, enter the `az devops wiki create` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki create [--mapped-path]
                      [--name]
                      [--project]
                      [--repository]
                      [--subscription]
                      [--type {codewiki, projectwiki}]
```

### Optional parameters

- **--mapped-path**: [Required for codewiki type] Mapped path of the new wiki e.g. '/' to publish from root of repository.
--name: Name of the new wiki.
- **--project -p**: Optional. Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config.
- **--repository -r**: [Required for codewiki type] Name or ID of the repository to publish the wiki from.
- **--subscription**: Optional. Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`.
- **--type --wiki-type**: Type of wiki to create. Accepted values: codewiki, projectwiki. Default value: projectwiki.

### Examples

Create a named project wiki.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki create --name myprojectwiki
```

Create a code wiki from a folder in a code repository.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki create --name WIKI_NAME --type codewiki
--repository REPO_NAME --mapped-path PATH_TO_PUBLISH
```

## Delete a wiki

To delete a wiki, enter the `az devops wiki delete` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki delete 
                      [--wiki]
                      [--project]
                      [--subscription]
                      [--yes]
```

### Parameters

- **--wiki**: Required. Name or ID of the wiki to delete.
- **--project -p**: Optional. Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config.
- **--subscription**: Optional. Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`.
- **--yes -y**: Optional. Do not prompt for confirmation.

### Example

Delete a wiki without a prompt for confirmation.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki delete --wiki myprojectwiki --yes
```

## List wikis

To list all the wikis in a project or an organization, enter the `az devops wiki list` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki list 
                    [--project]
                    [--scope {organization, project}]
                    [--subscription]
```

### Optional parameters

- **--project -p**: Optional. Name or ID of the project.
- **--scope**: Optional. List the wikis at project or organization level. Accepted values: organization, project. Default value: project.
- **--subscription**: Optional. Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`.

### Examples

List all wikis for a project.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki list
```

List all wikis in the organization.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki list --scope organization
```

## Show wiki

To show details of a wiki, enter the `az devops wiki show` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki show --wiki
                    [--open]
                    [--project]
                    [--subscription]
```

### Parameters

- **--wiki**: Required. Name or ID of the wiki.
- **--open**: Optional. Open the wiki page in your web browser.
- **--project -p**: Optional. Name or ID of the project.
- **--subscription**: Optional. Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`.

### Example

Show the wiki named 'myprojectwiki' and open the wiki page in your web browser.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki show --wiki myprojectwiki --open
```

## Create a wiki page

To add a new wiki page, enter the `az devops wiki page create` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki page create --path
                           --wiki
                           [--comment]
                           [--content]
                           [--encoding {ascii, utf-16be, utf-16le, utf-8}]
                           [--file-path]
                           [--project]
                           [--subscription]
```

### Parameters

- **--path**: Required. Path of the wiki page.
- **--wiki**: Required. Name or ID of the wiki.
- **--comment**: Optional. Comment in the commit message of file add operation. Default value: Added a new page using Azure DevOps CLI.
- **--content**: Optional. Content of the wiki page. Ignored if --file-path is specified.
- **--encoding**: Optional. Encoding of the file. Used in conjunction with --file-path parameter.
- **--file-path**: Optional. Path of the file input if content is specified in the file.
- **--project -p**: Optional. Name or ID of the project.
- **--subscription**: Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID.

### Examples

Create a new page with path 'my page' in a wiki named 'myprojectwiki' with inline content.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki page create --path 'my page' --wiki myprojectwiki --content "Hello World"
```

Create a new page with path 'my page' in a wiki named 'myprojectwiki' with content from a file.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki page create --path 'my page' --wiki myprojectwiki --file-path a.txt --encoding utf-8
```





