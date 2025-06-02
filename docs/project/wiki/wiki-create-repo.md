---
title: Create Project Wiki to Share Information
titleSuffix: Azure DevOps
description: Share information with your team and increase collaboration by using a built-in team project wiki in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devx-track-azurecli, devdivchpfy22
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
monikerRange: '<= azure-devops'
ms.date: 06/02/2025
#customer intent: As a developer, I want to work with the built-in project wiki in Azure DevOps, so I can share information with my team and support collaboration. 
---

# Create a wiki for your project

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

In Azure DevOps, every team project has a wiki. You can use the wiki to share information with your team and support project contribution. The wiki is powered by a Git repository in the backend. This article describes how to open the project wiki and create the Git repo. 

When you create a team project, a wiki Git repo isn't created by default. You can create the repo to store your wiki Markdown files, or [publish existing Markdown files from a Git repository](publish-repo-to-wiki.md) to a wiki.

## Prerequisites

[!INCLUDE [wiki-prereqs-create-repository](includes/wiki-prereqs-create-repository.md)]

<!-- Section: Open the Wiki -->
[!INCLUDE [temp](includes/open-wiki-hub.md)]

## Create a wiki Git repository

This section describes how to create the Git repo for your wiki. You can work directly with the Azure DevOps UI in the browser or use the Azure DevOps CLI.

### [Browser](#tab/browser) 

In the browser, you can create a new Git repository to store your wiki pages and related artifacts. From the **Wiki** landing page, select **Create project wiki**. Even if you use Team Foundation Version Control (TFVC) for source control, you can create a wiki with a Git repository.

:::image type="content" source="media/wiki/create-wiki-or-publish-create-option.png" border="false" alt-text="Screenshot that shows how to select the Create project wiki or Publish code as wiki option in Azure DevOps." lightbox="media/wiki/create-wiki-or-publish-create-option.png":::

If you don't have the necessary permissions to create a wiki Git repo or you can't access any existing wikis, you see the following message:

:::image type="content" source="media/wiki/wiki-security-no-contributor.png" alt-text="Screenshot of the message for users with insufficient permissions to create a wiki Git repository.":::

Users with Project administrator-level access can create the wiki Git repo. Users with Stakeholder access can't create a wiki because they don't have permissions to work in the **Repos** or **Code** sections of the project.

The name for your wiki repo is based on your project name. The convention is `<ProjectName>.wiki`. If your team project name is `Contoso` then your wiki repo name is `Contoso.wiki`.

> [!TIP]
> You can create multiple wikis for a single project by [publishing your code as a wiki](publish-repo-to-wiki.md).

#### Access your wiki repo

The Git repository for your wiki (`ProjectName.wiki`) isn't included in the dropdown list of repositories in the **Repos** or **Code** sections of your project. The wiki repo is also not listed in the **Project Settings > Repositories** or **Version Control** pages. Instead, you can access your wiki repo from the **Repos** > **Files** page for your wiki.

1. Create the URL for the **Repos** > **Files** page. In the following URL, substitute your server, organization, project, and wiki name for any `<Placeholder>` portions:

   ::: moniker range="azure-devops"

   `https://dev.azure.com/<Organization>/<ProjectName>/_git/<WikiName>` 

   ::: moniker-end
   ::: moniker range=" < azure-devops"

   `https://<ServerName>/Default_Collection/<ProjectName>/_git/<WikiName>`

   ::: moniker-end

1. Paste the URL into a browser and open the **Files** page for your wiki.

1. On the **Repos** > **Files** page, locate your wiki repo name and select **More options** (**...**) > **Clone**. 

   :::image type="content" source="media/wiki/wiki-repo-files-select-clone.png" border="false" alt-text="Screenshot that shows how to open the Repos Files page for your wiki repo and then select the Clone option." lightbox="media/wiki/wiki-repo-files-select-clone.png"::: 

   The **Clone** option opens a popup that includes the URL for your wiki repo.

1. In the popup, select **HTTP** and then select the **Copy** icon (double page):

   :::image type="content" source="media/wiki/clone-wiki-repo-files.png" alt-text="Screenshot that shows how to access the wiki repo URL by selecting the HTTP option and the Copy icon.":::

   The URL is copied to your clipboard.

   Close the popup.

1. To access the wiki repo, paste the copied URL into the browser.

### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range="azure-devops"

You can create a wiki with the [az devops wiki create](/cli/azure/devops/wiki#ext-azure-devops-az-devops-wiki-create) command:

```azurecli 
az devops wiki create [--mapped-path]
                      [--name]
                      [--org]
                      [--project]
                      [--repository]
                      [--type {codewiki, projectwiki}]
                      [--version]
``` 

For more information, see [Get started with Azure DevOps CLI](../../cli/index.md).

> [!NOTE]
> If you want to create more than one wiki, you need to [publish your project code as a wiki](./publish-repo-to-wiki.md#publish-a-git-repository-to-a-wiki). You can set up multiple wiki repos for a single project.

#### Parameters

The following parameters are available for the `wiki create` command. The `type` parameter specifies the type of wiki to create: Project wiki (`projectwiki`) or Publish code as wiki (`codewiki`). 

| Parameter     | Required | Description |
|---------------|----------|-------------|
| `mapped-path` | Yes (`codewiki`) | The mapped path for the wiki. You can specify backslash (`/`) to publish from the root of the wiki repo. |
| `name`        | Yes (`codewiki`) | The name for the wiki. For the `projectwiki` type, when no name is specified, the wiki name is `TeamProjectName.wiki`. |
| `org`         | Maybe          | The Azure DevOps organization URL. You can configure the default organization with the `az devops configure -d organization=ORG_URL` command. <br> **Note**: When the organization isn't configured by default or picked up by using the `git config` command, the parameter is **Required**. Example: `--org https://dev.azure.com/<OrganizationName>/`. |
| `project`     | Maybe          | The name or ID of the project. You can configure the default project by using the `az devops configure -d project=NAME_OR_ID` command. <br> **Note**: When the project isn't configured by default or picked up by using the `git config` command, the parameter is **Required**. |
| `repository`  | Yes (`codewiki`) | The name or ID of the Git repository to publish the wiki from. |
| `type`        | No             | The type of wiki to create: Project wiki (`projectwiki`) or Publish code as wiki (`codewiki`). The default is `projectwiki`. |
| `version`     | Yes (`codewiki`) | The Git repo branch name to publish the code wiki from. |

#### Example: Create a project wiki

The following command creates a project wiki named "Fabrikam Fiber" and shows the output in table format:

```azurecli 
az devops wiki create --name "Fabrikam Fiber" --output table

ID                                    Name                 Type
------------------------------------  -------------------  -----------
7edcc35b-89be-465e-855e-377ba8660af7  Fabrikam Fiber.wiki  projectWiki

```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * * 

## Next step

> [!div class="nextstepaction"]
> [Add and edit wiki pages](add-edit-wiki.md)
