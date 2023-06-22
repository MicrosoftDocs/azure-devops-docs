---
title: Restore a deleted wiki
titleSuffix: Azure DevOps
description: Restore a provisioned or published wiki that was deleted by mistake in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom:
ms.topic: how-to
ms.assetid: 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/22/2023
---

# Restore a deleted wiki

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

If someone deleted a provisioned or published wiki by mistake, you can restore it.

<a id="prereq">  </a>

## Prerequisites

::: moniker range="azure-devops"

* You must have at least Basic access to restore a wiki.
* You must have the permission **Create Repository** to publish code as wiki. By default, this permission is set for members of the [Project Administrators group](../../repos/git/set-git-repository-permissions.md). 
* Anyone who is a member of the Contributors security group can add or edit wiki pages. Anyone with access to the team project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view the wiki.

::: moniker-end

::: moniker range=" < azure-devops"

* You must have the permission **Create Repository** to publish code as wiki. By default, this permission is set for members of the [Project Administrators group](../../repos/git/set-git-repository-permissions.md). 
* Anyone who is a member of the Contributors security group can add or edit wiki pages. Anyone with access to the team project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view the wiki.

::: moniker-end

[!INCLUDE [temp](includes/open-wiki-hub.md)]

## Restore a wiki

#### [Browser](#tab/browser) 



#### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range="azure-devops"


```azurecli 
az devops wiki restore [--mapped-path]
                      [--name]
                      [--org]
                      [--project]
                      [--repository]
                      [--type {codewiki, projectwiki}]
                      [--version]
``` 

#### Parameters 

- **mapped-path**: (Required for the **codewiki** type). Mapped path of the new wiki. For example, you can specify '/' to publish from the root of the repository. 
- **name**: (Required for the **codewiki** type). Name of the new wiki. If you don't specify a name for type **projectwiki**, then the new wiki will be named *TeamProjectName.wiki*.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **repository**: (Required for the **codewiki** type). Name or ID of the repository to publish the wiki from.
- **type**: Type of wiki to create. The accepted values are **projectwiki** (default) and **codewiki**.
- **version**: (Required for the **codewiki** type). Repository branch name to publish the code wiki from.

::: moniker-end
[!INCLUDE [temp](../../includes/note-cli-supported-server.md)]
::: moniker range="azure-devops"

#### Example 

The following command restores a wiki named "Fabrikam Fiber" and shows the output in table format.

```azurecli 
....

```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * * 

## Next steps

> [!div class="nextstepaction"]
> [Add and edit wiki pages](add-edit-wiki.md)
