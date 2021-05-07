---
title: Get started with Python packages in Azure Artifacts
description: Quickly start hosting python packages with Azure Artifacts
ms.technology: devops-artifacts
ms.topic: quickstart
ms.date: 02/26/2021
monikerRange: '>= tfs-2017'
ms.custom: devx-track-python
"recommendations": "true"
---

# Get started with Python packages in Azure Artifacts

**Azure DevOps Services | Azure DevOps Server 2019 | Azure DevOps Server 2020**

This guide will walk you through using Azure Artifacts to publish and consume Python packages to and from your feed.

## Create a feed

[!INCLUDE [](../includes/create-feed.md)]
     
## Connect to feed

There are two primary ways to connect to a feed to publish or consume your Python packages:

1. Install and use the [artifacts-keyring](https://github.com/microsoft/artifacts-keyring) package, which will automatically set up authentication for you.
1. Manually set up credentials for **pip.ini**/**pip.conf** for pushes, and **.pypirc** for pulls with a personal access token (PAT).

> [!NOTE]
> **artifacts-keyring** is not supported on newer versions of Ubuntu.

## Use artifacts-keyring to set up authentication

The **artifacts-keyring** package allows you to set up authentication to publish and consume your Python packages to and from your feed. Both [pip](https://pypi.org/project/pip/) and [twine](https://pypi.org/project/twine/) use the Python [keyring library](https://pypi.org/project/keyring/) to find credentials. 

> [!IMPORTANT]
> You must have pip 19.2 and twine 1.13.0 or higher to use **artifacts-keyring**.

1. In an elevated command prompt window, run the following command to install the artifacts-keyring package:
   
   ```Command
   pip install artifacts-keyring
   ```
   
1. Install packages from your feed. 
    
   ```Command
   pip install <package-name> --index-url https://pkgs.dev.azure.com/<your-organization-name>/<your-project-name>/_packaging/<your-feed-name>/pypi/simple
   ```

1. Publish packages to your feed.
   
   ```Command
   twine upload --repository-url https://pkgs.dev.azure.com/<your-organization-name>/<your-project-name>/_packaging/<your-feed-name>/pypi/upload
   ```

> [!NOTE]
> The artifacts-keyring package is layered on top of our Azure Artifacts Credential Provider. For more advanced configuration options, check out the [artifacts-credprovider](https://github.com/microsoft/artifacts-credprovider) repository.

## Manually configure authentication

1. Create a [Personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read** scope to authenticate into Azure DevOps.

1. From within your feed, select **Connect to feed**.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Connect to feed button":::

1. Select **pip** under the **Python** header. 

   :::image type="content" source="media/pip-feed.png" alt-text="Select pip to connect to your feed":::

1. Make sure you have installed the latest version of the **Azure Artifacts keyring** from the "Get the tools" menu.

    > [!NOTE]
    > The **artifacts-keyring** package provides authentication for publishing and consuming Python packages to and from Azure Artifacts feeds.

1. [Create a virtualenv](https://docs.python.org/3/library/venv.html), if you don't already have one.

1. Add a pip.ini (Windows) or pip.conf (Mac/Linux) file to your virtualenv. Make sure you don't check your personal access token into a public repository. 

    ```
    [global]
    extra-index-url=https://<your-feed-name>:<your-PAT-key>@pkgs.dev.azure.com/<your-organization-name>/<your-project-name>/_packaging/<your-feed-name>/pypi/simple/
    ```

1. Run the following command to install a package

    ```Command
    pip install <package-name>
    ```

When you connect to Azure DevOps for the first time, you will be prompted for credentials. Enter your user name(any string) and your personal access token in the appropriate fields. The credentials will be cached locally and used to automatically sign you in the next time you use the service.

> [!NOTE]
> If you want to set up authentication in Azure Pipelines, use the [Python Pip Authenticate](../../pipelines/tasks/package/pip-authenticate.md) task to install packages, or the [Python Twine Upload Authenticate](../../pipelines/tasks/package/twine-authenticate.md) task to push packages.

## Related articles

- [Publish Python packages in Azure Pipelines](../../pipelines/artifacts/pypi.md).

- [Build Python apps](../../pipelines/ecosystems/python.md).

