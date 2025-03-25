---
title: Create a project wiki to share information
titleSuffix: Azure DevOps
description: Share information with your team and increase collaboration using a built-in team project wiki in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devx-track-azurecli, devdivchpfy22
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
monikerRange: '<= azure-devops'
ms.date: 01/05/2024
---

# Create a wiki for your project

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

In this article, learn how to open a wiki and create a Git repo for your wiki. Every team project has a wiki. Use the wiki to share information with your team to understand and contribute to your project.

Each team project wiki is powered by a Git repository in the back-end. When you create a team project, a wiki Git repo isn't created by default. Create a Git repository to store your wiki Markdown files, or [publish existing Markdown files from a Git repository](publish-repo-to-wiki.md) to a wiki.

<a id="prereq">  </a>

## Prerequisites

[!INCLUDE [wiki-prereqs-create-repository](includes/wiki-prereqs-create-repository.md)]

[!INCLUDE [temp](includes/open-wiki-hub.md)]

## Create a wiki Git repository

#### [Browser](#tab/browser) 

Create a new Git repository that stores all your wiki pages and related artifacts. From the wiki landing page, select **Create Project wiki**. Even if you use TFVC for source control, you can create a wiki with a Git repository.

::: moniker range="<=azure-devops"

> [!div class="mx-imgBorder"]  
> ![Screenshot of Create wiki, Git repo for your wiki or publish existing repo Markdown files.](media/wiki/create-wiki-or-publish-create-option.png)
::: moniker-end

If you don't have access to create a wiki Git repository or if you don't have access to any of the existing wikis, the following message appears.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Insufficient permissions to create a wiki repository.](media/wiki/wiki-security-no-contributor.png)

Your administrator can create the wiki Git repository or you can request that they elevate your permissions. Stakeholders can't create a wiki, as they have no permissions to work in **Repos** or **Code**.

The wiki Git repo is referred as `TeamProjectName.wiki`. For example, if your team project is `foobar` then the wiki repo is labeled `foobar.wiki`.

> [!NOTE]
> If you want to create more wikis, then you must [publish code as a wiki](publish-repo-to-wiki.md). You can set up multiple wiki repos within a single project.

### How can I go to the Git repository?

The *TeamProjectName.wiki* doesn't appear in the drop-down menu of repositories from **Repos** or **Code**. It also isn't in the list provided from the **Project Settings > Repositories** or **Project Settings > Version Control** pages.  
However, you can get to it from the following URL:

::: moniker range="azure-devops"
`https://dev.azure.com/<Org_Name>/<Team_Project_Name>/_git/<Wiki_Name>` 
::: moniker-end

::: moniker range=" < azure-devops"
`https://<Server_Name>/Default_Collection/<Team_Project_Name>/_git/<Wiki_Name>` 
::: moniker-end

Select **Clone Wiki** from the ellipsis near the wiki picker to access the wiki URL.

:::image type="content" source="media/wiki/clone-wiki.png" alt-text="Screenshot of Clone wiki action."::: 

The URL of the wiki Git repository is exposed. Copy and paste it into your web browser to access the underlying Git repo.

#### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range="azure-devops"

You can create a wiki with the [az devops wiki create](/cli/azure/devops/wiki#ext-azure-devops-az-devops-wiki-create) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

> [!NOTE]
> To create more than one wiki, you must [publish code as a wiki](./publish-repo-to-wiki.md#publish-a-git-repository-to-a-wiki). You can set up multiple wiki repos within a single project.

```azurecli 
az devops wiki create [--mapped-path]
                      [--name]
                      [--org]
                      [--project]
                      [--repository]
                      [--type {codewiki, projectwiki}]
                      [--version]
``` 

#### Parameters 

- **mapped-path**: (Required for the **codewiki** type). Mapped path of the new wiki. For example, you can specify `/` to publish from the root of the repository. 
- **name**: (Required for the **codewiki** type). Name of the new wiki. If you don't specify a name for type **projectwiki**, then the new wiki gets named `TeamProjectName.wiki`.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **repository**: (Required for the **codewiki** type). Name or ID of the repository to publish the wiki from.
- **type**: Type of wiki to create. The accepted values are **projectwiki** (default) and **codewiki**.
- **version**: (Required for the **codewiki** type). Repository branch name to publish the code wiki from.

#### Example 

The following command creates a wiki named "Fabrikam Fiber" and shows the output in table format.

```azurecli 
az devops wiki create --name "Fabrikam Fiber" --output table

ID                                    Name                 Type
------------------------------------  -------------------  -----------
7edcc35b-89be-465e-855e-377ba8660af7  Fabrikam Fiber.wiki  projectWiki

```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * * 

## Next steps

> [!div class="nextstepaction"]
> [Add and edit wiki pages](add-edit-wiki.md)
