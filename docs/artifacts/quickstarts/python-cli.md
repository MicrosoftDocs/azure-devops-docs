---
title: Publish and consume Python packages using the CLI
description: Publish and consume Python packages from the command-line interface.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.custom: engagement-fy23, devx-track-python
ms.date: 02/16/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish and consume Python packages using the command line

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Azure Artifacts enables developers to publish and consume packages from Azure Artifacts feeds and public registries like pypi.org. By following this quickstart guide, you can learn how to use the command line to publish and consume Python packages.

## Prerequisites

::: moniker range=">= azure-devops"

To run the following steps, you must have:

- An Azure DevOps organization. [Create one for free](../../pipelines/get-started/pipelines-sign-up.md).
- An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
- An Azure Artifacts feed. If you don't have one, [create a feed](python-packages.md#create-a-feed).
- A Python package to publish from your local machine to your feed.
 
::: moniker-end

::: moniker range="< azure-devops"

- A GitHub account where you can create a repository. [Create one for free](https://github.com).
- Access to an Azure DevOps Server collection.
- An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
- An Azure Artifacts feed. If you don't have one, [create a feed](python-packages.md#create-a-feed).
- A Python package to publish from your local machine to your feed.

::: moniker-end

## Publish Python packages

1. Go to your Azure DevOps project.

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed** and then select **twine** from the left navigation panel.

1. If connecting to the Azure Artifacts feed with twine for the first time, select **Get the tools** to install the prerequisites.
 
1. Download and install Python, and then run the following command to install the latest version of Azure Artifacts keyring.

    ```Command
    pip install twine keyring artifacts-keyring
    ```

1. Add a `.pypirc` configuration file to your home directory on Linux and macOS or your project directory on Windows.

    > [!NOTE]
    > If you already have a `.pypirc` file with credentials for the public PyPI index, it is recommended to remove the [pypi] section from your file to prevent unintended publication of private packages.

1. Paste the following snippet to your `.pypirc` file.

    ```Command
    [distutils]
    Index-servers =
      <FEED_NAME>
    
    [<FEED_NAME>]
    Repository = https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/PROJECT_NAME/_packaging/<FEED_NAME>/pypi/upload/
    ```

1. Create a source and wheel distributions.  

    If using setuptools, run the following command.

   ```Command
   python setup.py sdist bdist_wheel
   ```

    For `pyproject.toml`-based builds with backend hooks, use the `build` command to build your distribution package. For more information, see [Packaging Python Project](https://packaging.python.org/en/latest/tutorials/packaging-projects).

    ```Command
    python -m pip install --upgrade build
    python -m build
    ```   

1. Run the following command to publish your package to your Azure Artifacts feed. On Windows, use the `--config-file` parameter to specify the location of your `.pypirc` file.

   ```
   twine upload --repository <FEED_NAME> dist/*
   ```

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Consume Python packages

1. Go to your project, select **Artifacts**, then select your feed from the dropdown menu.

1. Select **Connect to feed** and then select **pip** from the left navigation panel.

1. If connecting to the Azure Artifacts feed with pip for the first time, select **Get the tools** to install the prerequisites.

1. Download and install Python, and then run the following command to update your Python package installer.

    ```Command
    python -m pip install --upgrade pip
    ```

1. Install the latest Azure Artifacts keyring.

    ```Command
    pip install keyring artifacts-keyring
    ```

1. [Create a virtual environment](https://docs.python.org/3/library/venv.html) if you don't have one already.

1. Add a pip.ini (Windows) or pip.conf (Mac/Linux) configuration file to the root of your virtualenv.

    ```Command
    [global]
    extra-index-url=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi/simple/
    ```

1. To install your package from the feed, run the following command.

   ```
   pip install <PACKAGE_NAME>
   ```

## Related articles

- [Configure permissions](../feeds/feed-permissions.md)
- [Understand upstream sources](../concepts/upstream-sources.md)
- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)
