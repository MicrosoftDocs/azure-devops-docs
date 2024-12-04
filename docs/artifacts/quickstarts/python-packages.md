---
title: Get started with Python packages in Azure Artifacts
description: Learn how to set up your project and manage your Python packages in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 12/03/2024
monikerRange: '>= azure-devops-2019'
ms.custom: devx-track-python, py-fresh-zinc, engagement-fy23
"recommendations": "true"
---

# Get started with Python packages in Azure Artifacts

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Using Azure Artifacts, you can publish and download packages from feeds and public registries such as PyPi. This quickstart will guide you through creating a feed, configuring your project, and managing Python packages in your Azure Artifacts feed. In this article, you will learn how to:

> [!div class="checklist"]
>
> * Create a new feed.
> * Authenticate with your feed.
> * Publish Python packages.
> * Install packages from your feed.

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Download and install [Python](https://www.python.org/downloads/).

## Get the code

1. If you don't have your own Python project, you can use the following sample Python project:

    ```
    https://github.com/microsoft/python-package-template
    ```

1. To build your wheel and source distribution, run the following commands in your project directory:

    ```
    pip install --upgrade build
    python -m build
    ```

1. If your Python project has a *setup.py* file, you can also use this command to build your package:

    ```
    python setup.py sdist bdist_wheel
    ```

## Create a feed

[!INCLUDE [](includes/create-feed.md)]

## Connect to a feed

#### [twine](#tab/twine)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **twine** under the **Python** section.

1. If this is your first time using Azure Artifacts with twine, select **Get the tools** and follow the steps to install the prerequisites.

1. Add a *.pypirc* file to your home directory and paste the provided snippet. Your file should look like this:

    ```
    [distutils]
    Index-servers =
        FEED_NAME
    
    [FEED_NAME]
    Repository = https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/pypi/upload/
    ```

> [!NOTE]
> If your *.pypirc* file already contains credentials for the public PyPI index, we recommend removing the `[pypi]` section to prevent accidental publication of private packages to PyPI.

#### [pip](#tab/pip)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **pip** under the **Python** section.

1. If this is your first time using Azure Artifacts with pip, select **Get the tools** and follow the steps to install the prerequisites.

1. [Create a virtual environment](https://docs.python.org/3/library/venv.html).

1. Add a *pip.ini* file (Windows) or *pip.conf* file (Mac/Linux) to your virtual environment and paste the provided snippet into it. Your file should resemble the following:

    ```
    [global]
    index-url=https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/pypi/simple/
    ```

- - - 


## Publish packages

1. Run this command in your project directory to create source and wheel distributions:

    ```
    python setup.py sdist bdist_wheel
    
    ```

1. Run the following command to publish your package. Use the -r *FEED_NAME* flag to ensure your private packages are not accidentally published to PyPI.

    ```
    twine upload -r <FEED_NAME> dist/*
    ```

## Install packages

1. Run this command in your project directory to install your packages:

    ```
    pip install
    ```

1. To install a specific package, run the following command, replacing the placeholder with the package name from your feed.

    ```Command
    pip install <PACKAGE_NAME>
    ```

## Next steps

> [!div class="nextstepaction"]
> [Use packages from Python package index (PyPI)](../python/use-packages-from-pypi.md)
> [Set up upstream sources](../how-to/set-up-upstream-sources.md)
> [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)

