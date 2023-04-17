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

To publish a Python package to your feed, follow these steps:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed** and then select **twine** from the left navigation panel.

1. If this is your first time using Azure Artifacts with twine, select **Get the tools** to install the prerequisites.
 
1. Install the latest version of Azure Artifacts keyring

    ```Command
    pip install twine keyring artifacts-keyring
    ```

1. Add a .pypirc configuration file to your home directory

    ```Command
    touch ~/.pypirc
    ```

1. Add the following content to your .pypirc file

    ```Command
    [distutils]
    Index-servers =
      <organizationName>
    
    [<organizationName>]
    Repository = https://pkgs.dev.azure.com/<organizationName>/_packaging/<feedName>/pypi/upload
    ```

1. Create a source and a wheel distributions

   ```Command
   python setup.py sdist bdist_wheel
   ```
   
1. Run the following command to publish your package

   ```
   twine upload -r <organizationName> dist/*
   ```

## Consume Python packages

To install a Python package from the command line, follow these steps:

1. Update your Python package installer

    ```Command
    python -m pip install --upgrade pip
    ```

1. Ensure you have the latest version of Azure Artifacts keyring

    ```Command
    pip install twine keyring artifacts-keyring
    ```

1. [Create a virtual environment](https://docs.python.org/3/library/venv.html) if you don't have one already

1. Add a pip.ini (Windows) or pip.conf (Mac/Linux) configuration file to your virtual environment

    ```Command
    [global]
    extra-index-url=https://pkgs.dev.azure.com/<organizationName>/_packaging/<feedName>/pypi/simple/
    ```

1. Run the following command in your project directory to install your package

   ```
   pip install <package>
   ```

## Related articles

- [Feeds permissions](../feeds/feed-permissions.md)
- [Understand upstream sources](../concepts/upstream-sources.md)
- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)