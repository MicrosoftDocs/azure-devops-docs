---
title: Publish and consume packages from the CLI
description: Publish and consume Python packages from the command line interface
ms.technology: devops-artifacts
ms.topic: quickstart
ms.date: 03/10/2021
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Publish and consume Python packages from the command line

**Azure DevOps Services | Azure DevOps Server 2019 | Azure DevOps Server 2020**

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
    Repository = https://pkgs.dev.azure.com/<organizationName>/_packaging/<organizationName>/pypi/upload
    ```

1. Create a source and a wheel distributions

   ```Command
   python setup.py sdist bdist_wheel
   ```
   
1. Run the following command to publish your package

   ```
   twine upload -r <organizationName> dist/*
   ```
