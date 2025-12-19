---
title: Publish and download Python packages with Azure Artifacts
description: Learn how to configure your project to publish and download Python packages with Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 07/02/2025
monikerRange: "<=azure-devops"
ms.custom: devx-track-python, py-fresh-zinc, engagement-fy23
"recommendations": "true"
---

# Publish and download Python packages with Azure Artifacts

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Using Azure Artifacts, you can publish and download packages from feeds and public registries such as PyPi. This quickstart guides you through creating a feed, configuring your project, and managing Python packages in your Azure Artifacts feed.

## Prerequisites

| **Product**        | **Requirements**     |
|--------------------|----------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [Python](https://www.python.org/downloads/). |

## Get the code

1. If you don't have your own Python project, you can use the following sample Python project. Otherwise, you can skip to the next section:

    ```
    https://github.com/Azure-Samples/azure-stack-hub-flask-hello-world
    ```

1. To build your wheel and source distribution, run the following commands in your project directory:

    ```
    pip install --upgrade build
    python -m build
    ```

1. If your Python project has a *setup.py* file, you can also build your package using:

    ```
    python setup.py sdist bdist_wheel
    ```

## Create a feed

[!INCLUDE [](../includes/create-feed.md)]

## Connect to your feed

#### [twine](#tab/twine)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Under the **Python** section, select **twine**.

1. If this is your first time using Azure Artifacts with twine, select **Get the tools** and follow the instructions to download Python and install Twine and the artifacts keyring.

1. Create a *pypirc* file in your home directory and paste the snippet provided in the **Project setup** section. Your file should look like this:

    ```
    [distutils]
    Index-servers =
        FEED_NAME
    
    [FEED_NAME]
    Repository = https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/pypi/upload/
    ```

> [!NOTE]
> If your *.pypirc* file already includes credentials for the public PyPI index, we recommend removing the `[pypi]` section to avoid accidentally publishing private packages to PyPI.

#### [pip](#tab/pip)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Under the **Python** section, select **pip**.

1. If this is your first time using Azure Artifacts with pip, select **Get the tools** and follow the instructions to download Python, update pip, and install the keyring.

1. [Create a virtual environment](https://docs.python.org/3/library/venv.html).

1. Add a *pip.ini* file (Windows) or *pip.conf* file (Mac/Linux) to your virtual environment, and paste the provided snippet into it. Your file should resemble the following:

    ```
    [global]
    index-url=https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/pypi/simple/
    ```

- - - 

## Publish packages to your feed

1. In your project directory, run the following command to create source and wheel distributions:

    ```
    python setup.py sdist bdist_wheel
    
    ```

1. To publish your package, use the command below. Be sure to use the -r *FEED_NAME* flag to avoid accidentally publishing to PyPI:

    ```
    twine upload -r <FEED_NAME> dist/*
    ```

## Install packages from your feed

1. To install packages from your feed, run the following command in your project directory:

    ```
    pip install
    ```

1. To install a specific package, replace the placeholder with the package name from your feed:

    ```
    pip install <PACKAGE_NAME>
    ```

## Related content

- [Set up upstream sources](../how-to/set-up-upstream-sources.md)

- [Use packages from Python package index (PyPI)](../python/use-packages-from-pypi.md)

- [Publish Python packages with Azure Pipelines YAML/Classic](../../pipelines/artifacts/pypi.md)

