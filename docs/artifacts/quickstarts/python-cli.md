---
title: Publish and consume packages from the CLI
description: Publish and consume Python packages from the command-line interface
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 03/10/2021
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish and consume Python packages from the command line

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can publish and consume packages from Azure Artifacts feeds as well as public registries such as pypi.org. Follow this quickstart to learn how to publish and consume Python packages using the command line.

## Publish Python packages

To publish a Python package to your feed, follow these steps:

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