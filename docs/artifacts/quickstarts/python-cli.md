---
title: Publish and consume Python packages using the CLI
description: Publish and consume Python packages from the command-line interface.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.custom: engagement-fy23, devx-track-python
ms.date: 02/18/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish and consume Python packages using the command line

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Azure Artifacts enables developers to publish and consume Python packages from Azure Artifacts feeds and public registries like pypi.org. By following this quickstart guide, you can learn how to use the command line to publish and consume Python packages.

## Prerequisites

::: moniker range=">= azure-devops"

To run the following steps, you must have:

- An Azure DevOps organization. [Create one for free](../../pipelines/get-started/pipelines-sign-up.md).
- An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
- An Azure Artifacts feed. If you don't have one, [create a feed](python-packages.md#create-a-feed).
- A Python package to publish from your local machine to your feed.
 
::: moniker-end

::: moniker range="< azure-devops"

- Access to an Azure DevOps Server collection.
- An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
- An Azure Artifacts feed. If you don't have one, [create a feed](python-packages.md#create-a-feed).
- A Python package to publish from your local machine to your feed.

::: moniker-end

## Publish Python packages

Azure Artifacts support twine to upload Python packages to your feed. 

### Configure your Python environment with twine

To publish Python packages to your feed, you need to install twine and configure your `.pypirc` file.

1. Go to your Azure DevOps project.

1. Select **Artifacts** and select your feed from the drop-down menu.

1. Select **Connect to feed** and select **twine** from the Python section.

1. If connecting to the Azure Artifacts feed with twine for the first time, select **Get the tools** and follow the steps to install the prerequisites.
 
1. Follow the instructions in **Project setup** to configure the `.pypirc` file. Copy the snippet provided in the **Project setup** section and paste it into your `.pypirc` file.

## Build your Python package

1. Create source and wheel distributions.  

    If using setuptools, run the following command from your local project root directory.

   ```Command
   python setup.py sdist bdist_wheel
   ```

    For `pyproject.toml`-based builds with backend hooks, use the `build` command to build your distribution package. For more information, see [Packaging Python Project](https://packaging.python.org/en/latest/tutorials/packaging-projects).

    ```Command
    python -m pip install --upgrade build
    python -m build
    ```   

### Publish your Python package to your feed

1. Run the following command to publish your package to your Azure Artifacts feed. On Windows, use the `--config-file` parameter to specify the location of your `.pypirc` file.

   ```
   twine upload --repository <FEED_NAME> dist/*
   ```

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Consume Python packages

Azure Artifacts supports pip to install Python package from your feed.

### Configure your Python environment with pip

1. Go to your project, select **Artifacts**, then select your feed from the drop-down menu.

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
    1.  Select **Close** to close the **Get the tools** dialog.

1. Follow the instructions in the **Project setup** section.

    1. Create and activate a Python virtual environment.

        # [Windows](#tab/Windows)
    
        ```Command
        python -m venv myenv
        myenv/Scripts/activate
        ```

       # [Linux and macOS](#tab/LinuxMac)
    
        ```Command
        python3 -m venv myenv
        source myenv/bin/activate
    
        ---

    1. Create a `pip.ini` (Windows) or `pip.conf` (Linux/macOS) in the root the the virtual environment and copy the snippet provided in the **Project setup** section and paste it into the file.

    
### Install your Python package from your feed

1. To install your package from the feed, run the following command replacing \<PACKAGE_NAME\> with the package from your feed.

   ```
   pip install <PACKAGE_NAME>
   ```

## Related articles

- [Configure permissions](../feeds/feed-permissions.md)
- [Understand upstream sources](../concepts/upstream-sources.md)
- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)
