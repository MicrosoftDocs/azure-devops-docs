---
title: Get started with Python packages
description: Quickly start hosting python packages with Azure Artifacts
ms.technology: devops-artifacts
ms.topic: quickstart
ms.date: 08/31/2020
monikerRange: '=azure-devops'
ms.custom: devx-track-python
---

# Get started with Python packages in Azure Artifacts

**Azure DevOps Services | Azure DevOps Server 2019 | Azure DevOps Server 2020**

This quickstart will walk you through using Azure Artifacts to publish and consume Python packages to and from your feed.

## Create a feed

[!INCLUDE [](../includes/create-feed.md)]
     
## Connect to your feed

There are two primary ways to connect to a feed to publish or consume your Python packages:

- Install and use the [artifacts-keyring](https://github.com/microsoft/artifacts-keyring), which sets up authentication for you.
- Manually set up credentials for `pip.ini`/`pip.conf` for pushes, and `.pypirc` for pulls with a personal access token (PAT).

> [!NOTE]
> `artifacts-keyring` is not supported on newer versions of Ubuntu.

## Use artifacts-keyring to set up authentication

The `artifacts-keyring` package allow your to set up authentication to publish and consume your Python packages to and from your feed. Both [pip](https://pypi.org/project/pip/) and [twine](https://pypi.org/project/twine/) use the Python [keyring library](https://pypi.org/project/keyring/) to find credentials. 

> [!IMPORTANT]
> You must have pip 19.2 and twine 1.13.0 or higher to use `artifacts-keyring`.

1. In an elevated command prompt window, run the following command to install the [artifacts-keyring](https://github.com/microsoft/artifacts-keyring) package:
   
   ```Command
   pip install artifacts-keyring
   ```
   
1. Install packages from your feed. 
    
   ```Command
   pip install <package-name> --index-url https://pkgs.dev.azure.com/<your-organization-name>/_packaging/<your-feed-name>/pypi/simple
   ```

1. Publish packages to your feed.
   
   ```Command
   twine upload --repository-url https://pkgs.dev.azure.com/<your-organization-name>/_packaging/<your-feed-name>/pypi/upload
   ```

## Manually configure authentication

1. From within your feed, select **Connect to feed**.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Connect to feed button":::

2. Select **pip** or **twine** under the Python header. 

   :::image type="content" source="media/pip-twine-feed.png" alt-text="Select pip or twine to connect to your feed":::

3. Follow the instructions under **Project setup** to set up your project.

4. Follow the steps in the next section to **Install** or **Publish** your packages.

## What's next?

- [Publish Python packages in Azure Pipelines](../../pipelines/artifacts/pypi.md).

- [Build Python apps](../../pipelines/ecosystems/python.md).

