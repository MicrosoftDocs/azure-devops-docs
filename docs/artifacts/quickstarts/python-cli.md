---
title: Publish and consume Python packages (CLI)
description: Learn how to publish and consume Python packages from the command-line interface.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.custom: engagement-fy23, devx-track-python
ms.date: 11/21/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish and consume Python packages (CLI)

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Azure Artifacts enables developers to manage their dependencies from a single feed. You can publish and consume Python packages to and from your feed using the command line. In this article, you'll learn how to:

> [!div class="checklist"]  
> * Create an new feed.
> * Publish Python packages to a feed.
> * Install Python packages from a feed.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- Download and install [Python](https://www.python.org/downloads/).

## Create a feed

[!INCLUDE [](../includes/create-feed.md)]

## Publish packages
 
1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

1. Select **twine** from the left navigation area. If this is your first time using Azure Artifacts with twine, make sure to install the prerequisites by selecting **Get the tools** and following the provided steps.

1. Add a *.pypirc* file to your home directory and paste the provided snippet into it. Your file should look similar to the following snippet. If you already have a *.pypirc* that contains credentials for the public PyPI index, we recommend removing the [pypi] section to avoid accidentally publishing private packages to PyPI.

    ```
    [distutils]
    Index-servers =
      HelloNodeFeed
    
    [HelloNodeFeed]
    Repository = https://pkgs.dev.azure.com/ramiMSFTDevOps/HelloNode/_packaging/HelloNodeFeed/pypi/upload/
    ```

1. Run the following command in your project directory to create source and wheel distributions.

    ```
    python setup.py sdist bdist_wheel
    ```

1. Run the following command to publish your package. Use the *-r <REPOSITORY>* flag to ensure your private packages are not accidentally published to PyPI.

    ```
    twine upload -r HelloNodeFeed dist/*
    ```

> [!IMPORTANT]
> You must have twine 1.13.0 or higher to use **artifacts-keyring**. See [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements) for more details.

## Install packages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

1. Select **pip** from the left navigation area. If this is your first time using Azure Artifacts with pip, make sure to install the prerequisites by selecting **Get the tools** and following the provided steps.

1. [Create a virtual environment](https://docs.python.org/3/library/venv.html).

1. Add a *pip.ini* (Windows) or *pip.conf* (Mac/Linux) file to your virtualenv and paste the provided snippet into it. Your file should look similar to the following snippet: 

    ```
    [global]
    index-url=https://pkgs.dev.azure.com/ramiMSFTDevOps/HelloNode/_packaging/HelloNodeFeed/pypi/simple/
    ```

1. Run this command in your project directory to install your packages:

    ```
    pip install
    ```

> [!IMPORTANT]
> You must have pip 19.2 or higher to use **artifacts-keyring**. See [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements) for more details.

## Related content

- [Use packages from PyPi](../python/use-packages-from-pypi.md)
- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)
- [Configure permissions](../feeds/feed-permissions.md)
