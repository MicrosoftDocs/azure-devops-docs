---
title: Publish and download Universal Packages
description: How to publish and download universal packages to and from Azure Artifacts.
ms.assetid: f47b858c-138d-426d-894c-a5fe1d5aa08e
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/12/2021
monikerRange: 'azure-devops'
---

# Publish and download Universal Packages

With universal packages, users are able to store different types of packages other than the widely used ones like NuGet, npm, Maven, or Python packages. Uploaded packages can vary in size (tested up to 4TB) but should always have a name and a version number. You can publish and download universal packages from the command line using the Azure CLI. 

This quickstart will walk you through the steps to publish and download your first universal package to/from your feed using the command line.

## Prerequisites

1. Download and install the latest [Azure CLI](/cli/azure/install-azure-cli) version.
2. If you're using Linux, make sure you have the appropriate [.NET on Linux](/dotnet/core/linux-prerequisites) version. 

To check the version of Azure CLI modules and extensions that you currently have, run the following command: 
   ```cmd
   az --version
   ```

You can install the Azure DevOps extension using the following command:
   ```cmd
   az extension add --name azure-devops
   ```

If you already have the Azure DevOps extension but you want to update to the latest version, run the following command:

   ```cmd
   az extension update --name azure-devops
   ```

## Prepare files for publishing

Create a new directory, and copy the files you want to publish as a package into that directory.

## Create a feed

A feed is a container that host your packages. You can publish and consume your packages through a particular feed.

If you don't already have an Azure Artifacts feed, create one now and note its name. If you already have a feed, just note the name and [Skip to the next step](#publish-a-package) of this article to learn how to publish your universal packages.

1. Go to **Artifacts**:

   > [!div class="mx-imgBorder"] 
   > ![Go to Azure Artifacts](../media/goto-feed-hub-azure-devops-newnav.png)

1. Select **Create feed**:

   > [!div class="mx-imgBorder"] 
   > ![New feed button](../media/new-feed-button-azure-devops-newnav.png)

1. In the dialog box:

   - Give the feed a name.
   - Choose who can read and contribute (or update) packages in your feed.
   - Choose the upstream sources for your feed.
   - When you're done, select **Create**.

   Most of the default settings work great for most feed users. Making your feed organization visible means you can share a single source of packages across your entire team.
   
   Enabling [upstream sources](../concepts/upstream-sources.md) makes it easy to use your favorite OSS packages and gives you more protection against outages and corrupted or compromised packages.

   > [!div class="mx-imgBorder"] 
   > ![New feed dialog box](../media/new-feed-dialog.png)

You can still change these settings later from your feed settings.

With your feed selected, select the gear icon ![gear icon](../../media/icons/gear-icon.png) to access the **Feed settings**.

> [!div class="mx-imgBorder"] 
> ![Edit feed button](../media/editfeed-azure-devops-newnav.png)


## Log in to Azure DevOps

After you've installed the CLI, open your shell of choice (for example, PowerShell or cmd) and browse to the directory that you just created. Then, log in to Azure DevOps by using the following command. Replace the items in square brackets (`[]`) with appropriate values.

```azurecli
az login
```

> [!NOTE]
> To access tenant without subscriptions, run `az login` with "--allow-no-subscription" option.

Next, set the organization that you just logged in to as the CLI's default. Again, replace the item in square brackets.

```azurecli
az devops configure --defaults organization=https://dev.azure.com/[your-organization] project=ContosoWebApp
```

<a name="publish-a-package"></a>

## Publish a Universal Package

Publish a package with `az artifacts universal publish`. The following example publishes a package named _my-first-package_ with version _1.0.0_ to the _FabrikamFiber_ feed in the _fabrikam_ organization with a placeholder description.

Update these values as desired, and use the feed name that you noted earlier. Package names must be lowercase and can use only letters, numbers, and dashes (`-`). Package versions must be lowercase [Semantic Versioning (SemVer) 2.0.0](https://semver.org/spec/v2.0.0.html) without build metadata (`+` suffix).

```azurecli
az artifacts universal publish --organization https://dev.azure.com/fabrikam --feed FabrikamFiber --name my-first-package --version 1.0.0 --description "Your description" --path .
```

## View the package in your feed

To see the package that you just published, go to the organization that you specified in the publish command, select any project, and then select the **Artifacts** icon on the left side navigation.

> [!div class="mx-imgBorder"] 
> ![Universal Package listing in a sample feed](media/universal-in-feed.png)

## Download a Universal Package

Now that you've published a package, you can download it to a different directory on your machine. To do that, make a new directory and switch to it. Then run the command in the example to download your package.

You must use the Azure CLI to download the package. Azure DevOps doesn't support direct HTTP/HTTPS download links or other ways to download the package. 

The following example downloads a package with the same metadata as the publish example. Update these values to match the values that you selected when you published your package.

```azurecli
az artifacts universal download --organization https://dev.azure.com/fabrikam --feed FabrikamFiber --name my-first-package --version 1.0.0 --path .
```

### Filtered Universal Package downloads

For large Universal Packages, you might want to download a few files instead of the entire package. You can use the ```--file-filter``` feature to download a subset of the Universal Package files.

The ```--file-filter``` command follows the [.gitignore syntax](https://git-scm.com/docs/gitignore#_pattern_format). Make sure you have the latest Azure DevOps CLI extension: ```az extension update -n azure-devops```

The following example uses a minimatch pattern to download all ```.exe```'s and ```dll```'s in your Universal Package. Don't forget to update these values to match the values that you selected when you published your package.

```azurecli
az artifacts universal download --organization https://dev.azure.com/fabrikam --feed FabrikamFiber --name my-first-package --version 1.0.0 --path .  --file-filter **/*.exe;**/*.dll
```

### Downloading the latest version

When downloading a Universal Package, you can use a wildcard expression in the `version` parameter to download the highest version of a package according to [Semantic Versioning](https://semver.org) precedence rules.  

#### Examples
`*`: Highest version  
`1.*`: Highest version with major version `1`  
`1.2.*`: Highest patch release with major version `1` and minor version `2`  
  
Wildcard expressions do not currently support pre-release versions. It is not possible to get the latest pre-release version of a package.  
  
Note that while Semantic Versioning specifies that versions must increase over time, Azure Artifacts does not enforce this rule. As such, the highest matching version that will be downloaded is not necessarily the most recently published version.

## What's next?

- [Publish and download Universal Packages in Azure Pipelines](../../pipelines/artifacts/universal-packages.md).
- [Universal Package task](../../pipelines/tasks/package/universal-packages.md).
