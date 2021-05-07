---
title: Publish and download universal packages
description: How to publish and download universal packages to and from Azure Artifacts.
ms.assetid: f47b858c-138d-426d-894c-a5fe1d5aa08e
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/12/2021
monikerRange: '>= tfs-2017'
---

# Publish and download universal packages

With universal packages, users are able to store different types of packages other than the widely used ones like NuGet, npm, Maven, or Python packages. Uploaded packages can vary in size (tested up to 4 TB) but should always have a name and a version number. You can publish and download universal packages from the command line using the Azure CLI. 

This quickstart will walk you through the steps to publish and download your first universal package to/from your feed using the command line.

## Prerequisites

1. Download and install the latest [Azure CLI](/cli/azure/install-azure-cli) version.
2. If you're using Linux, make sure you have the appropriate [.NET on Linux](/dotnet/core/linux-prerequisites) version. 

To check the version of Azure CLI modules and extensions that you currently have, run the following command: 
   ```Command
   az --version
   ```

You can install the Azure DevOps extension using the following command:
   ```Command
   az extension add --name azure-devops
   ```

If you already have the Azure DevOps extension but you want to update to the latest version, run the following command:

   ```Command
   az extension update --name azure-devops
   ```

## Create a feed

A feed is an organizational construct that allows you to store and manage your packages and control who can access them.

[!INCLUDE [](../includes/create-feed.md)]

## Log in to Azure DevOps

After you've installed the Azure CLI, run the following command in an elevated command prompt window to log in to Azure. Replace the text in the square brackets [] with the appropriate names.

```Command
az login
```

> [!TIP]
> To access tenants without subscriptions, run `az login --allow-no-subscription`.

Next, set your project and organization as the CLI's default.

```Command
az devops configure --defaults organization=https://dev.azure.com/[your-organization] project=[your-project-name]
```

<a name="publish-a-package"></a>

## Publish a universal package

Now we can use the `az artifacts universal` command to manage our universal packages. In the following example we will publish _my-first-package_, version _1.0.0_ to _FabrikamFiber_ feed in the _Fabrikam_ organization. FibrikamFiber is an organization-scoped feed.

Package names must be lowercase and can only use letters, numbers, and dashes. Package versions must be lowercase without build metadata (+ suffix). See [SemVer](https://semver.org/spec/v2.0.0.html) to learn more about semantic versioning.

```Command
az artifacts universal publish --organization https://dev.azure.com/Fabrikam --feed FabrikamFiber --name my-first-package --version 1.0.0 --description "My first universal package" --path .
```

## View the package in your feed

To view the package that you just published, go to your organization, select your project, select **Artifacts**, then select your feed from the drop-down menu. 

> [!div class="mx-imgBorder"] 
> ![View published universal package](media/universal-in-feed.png)

## Download a universal package

Now that you've published your first universal package, let's try to download it using Azure CLI. The following example will download the package that we published earlier.

```Command
az artifacts universal download --organization https://dev.azure.com/Fabrikam --feed FabrikamFiber --name my-first-package --version 1.0.0 --path .
```

> [!NOTE]
> Azure DevOps doesn't support direct HTTP/HTTPS download links. 

## Bulk-download universal packages

If you want to download a large number of universal packages, you can use the `--file-filter` wildcard filter to bulk-download a group of universal packages.

The following example uses wildcards to download all *.exe* and *.dll* files from our feed.

```azurecli
az artifacts universal download --organization https://dev.azure.com/fabrikam --feed FabrikamFiber --name my-first-package --version 1.0.0 --path .  --file-filter **/*.exe;**/*.dll
```

### Downloading the latest version

To download the latest version of a universal package, you can use wildcards in the string you pass to the `version` argument.

`--version *`: latest version.
`--version 1.*`: latest version with major version 1. 
`--version 1.2.*`: latest patch release with major version 1 and minor version 2.  
  
> [!NOTE]
> pre-release versions does not support wildcards.  


## Next steps

- [Publish and download universal packages in Azure Pipelines](../../pipelines/artifacts/universal-packages.md).
- [universal package task](../../pipelines/tasks/package/universal-packages.md).
