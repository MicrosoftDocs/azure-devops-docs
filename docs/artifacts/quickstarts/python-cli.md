---
title: Publish and consume Python packages using the CLI
description: Publish and consume Python packages from the command-line interface
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 04/17/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish and consume Python packages using the command line

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers publishing and consuming packages from Azure Artifacts feeds and public registries like pypi.org. By following this quickstart guide, you can learn how to use the command line to publish and consume Python packages.

## Publish Python packages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed** and then select **twine** from the left navigation panel.

1. If this is your first time using Azure Artifacts with twine, select **Get the tools** to install the prerequisites.
 
1. Download and install Python, and then run the following command to install the latest version of Azure Artifacts keyring.

    ```Command
    pip install twine keyring artifacts-keyring
    ```

1. Add a .pypirc configuration file to your home directory.

    ```Command
    touch ~/.pypirc
    ```
    > [!NOTE]
    > If you already have a .pypirc file with credentials for the public PyPI index, it is recommended to remove the [pypi] section from your file to prevent unintended publication of private packages.

1. Paste the following snippet to your .pypirc file:

    ```Command
    [distutils]
    Index-servers =
      <ORGANIZATION_NAME>
    
    [<ORGANIZATION_NAME>]
    Repository = https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/PROJECT_NAME/_packaging/<FEED_NAME>/pypi/upload/
    ```

1. Create a source and wheel distributions.

   ```Command
   python setup.py sdist bdist_wheel
   ```
   
1. Run the following command to publish your package

   ```
   twine upload -r <ORGANIZATION_NAME> dist/*
   ```

## Consume Python packages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed** and then select **pip** from the left navigation panel.

1. If this is your first time using Azure Artifacts with pip, select **Get the tools** to install the prerequisites.

1. Download and install Python, and then run the following command to update your Python package installer.

    ```Command
    python -m pip install --upgrade pip
    ```

1. Install the latest Azure Artifacts keyring.

    ```Command
    pip install twine keyring artifacts-keyring
    ```

1. [Create a virtual environment](https://docs.python.org/3/library/venv.html) if you don't have one already.

1. Add a pip.ini (Windows) or pip.conf (Mac/Linux) configuration file to your virtualenv.

    ```Command
    [global]
    extra-index-url=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi/simple/
    ```

1. Run the following command in your project directory to install your package.

   ```
   pip install <PACKAGE_NAME>
   ```

## Related articles

- [Feeds permissions](../feeds/feed-permissions.md)
- [Understand upstream sources](../concepts/upstream-sources.md)
- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)