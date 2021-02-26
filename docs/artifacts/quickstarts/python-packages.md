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

There are two primary ways to connect to a feed to push or pull Python packages:

- Install and use the [Python Credential Provider (artifacts-keyring) (preview)](https://github.com/microsoft/artifacts-keyring), which sets up authentication for you.
- Manually set up credentials for `pip.ini`/`pip.conf` for pushes, or `.pypirc` for pulls, through a personal access token (PAT).

> [!NOTE]
> `artifacts-keyring` is not supported on newer versions of Ubuntu.

### Option 1: Use Python Credential Provider (preview) to automate authentication

The Python Credential Provider is an `artifacts-keyring` package in public preview that you can install from the Python Package Index (PyPI). The Python Credential Provider lets the [pip](https://pypi.org/project/pip/) and [twine](https://pypi.org/project/twine/) commands authenticate by sending you through an authentication flow in your web browser. 

The Python Credential Provider is a manual interaction. If you want to set up authentication in an Azure Pipelines pipeline, use the [Pip Authenticate task](../../pipelines/tasks/package/pip-authenticate.md) to install packages, or the [Twine Upload Authenticate task](../../pipelines/tasks/package/twine-authenticate.md) to push packages.

> [!IMPORTANT]
> You must have `pip` version 19.2 and `twine` version 1.13.0 or higher installed to use the Python Credential Provider.

1. From your command line, install the [artifacts-keyring](https://github.com/microsoft/artifacts-keyring) package:
   
   ```bash
   pip install artifacts-keyring --pre
   ```
   
2. Install or upload packages to your feed. 
   
   For `pip` installs, run the following command:
   
   ```bash
   pip install <package-name> --index-url https://pkgs.dev.azure.com/<your-organization-name>/_packaging/<your-feed-name>/pypi/simple
   ```
   
   For `twine` uploads, run the following command:
   
   ```bash
   twine upload --repository-url https://pkgs.dev.azure.com/<your-organization-name>/_packaging/<your-feed-name>/pypi/upload
   ```
   
3. Follow the authentication flow in your browser.

### Option 2: Manually configure authentication

1. From your feed in **Azure Artifacts**, select **Connect to feed**.

   > [!div class="mx-imgBorder"] 
   > ![Connect to feed button on the upper right of the page](../media/connect-to-feed-azure-devops-newnav.png)

2. Choose either **pip** or **twine** under the Python header. 

   > [!NOTE]
   > You can use the **Get the tools** button to get **pip**, **twine** and the **artifacts keyring**.

3. Follow the instructions under **Project setup** to set up your project.

4. To publish your package, follow the steps in the **Publish packages** section.

For more information, check out the following resources to:
- Publish a package to your feed by using [Python’s twine command](https://pypi.org/project/twine/).
- How to consume and download packages by using [pip](https://pypi.org/project/pip/).

## What's next?

- [Publish Python packages in Azure Pipelines](../../pipelines/artifacts/pypi.md).

- [Build Python apps](../../pipelines/ecosystems/python.md).

