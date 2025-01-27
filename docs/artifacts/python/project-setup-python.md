---
title: Connect your Python project to an Azure Artifacts feed
description: Learn how to set up your Python project and connect to an Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 01/24/2025
monikerRange: '>= azure-devops-2019'
---

# Connect your Python project to an Azure Artifacts feed

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

This article guides you through setting up your Python project and connecting to an Azure Artifacts feed.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [Python](https://www.python.org/downloads/). |

## Install the credential manager

If this is your first time using Azure Artifacts on this machine, run the following command to install the Azure Artifacts keyring, required for authenticating with Azure Artifacts feeds:

```
pip install keyring artifacts-keyring
```

## Project setup

Follow the steps below to set up your project and connect to your feed.

### [pip](#tab/pip)

Make sure you have the latest version of pip `python -m pip install --upgrade pip` and if you're using Linux, ensure you've installed the [prerequisites](https://pypi.org/project/artifacts-keyring/) required for the credential manager.

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **pip** from the left.

1. [Create a virtual environment](https://docs.python.org/3/library/venv.html) if you don't have one already.
 
1. Add a *pip.ini* (Windows) or *pip.conf* (Mac/Linux) file to your virtualenv and paste the provided snippet from the **Project setup** section into the file. Your config file should look similar to the following snippet: 

    ```
    [global]
    index-url=https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/pypi/simple/
    ```

> [!NOTE]
> You need pip version 19.2 or higher to use **artifacts-keyring**. For more information, see [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements).

### [twine](#tab/twine)

Make sure you've installed Twine `p install twine` and if you're using Linux, ensure you've installed the [prerequisites](https://pypi.org/project/artifacts-keyring/) required for the credential manager.

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **Twine** from the left.

1. Add a *.pypirc* file to your home directory and paste the provided snippet from the **Project setup** section into the file. Your config file should look similar to the following snippet:

    > [!NOTE]
    > If your config file contains credentials for the public PyPI index, we recommend removing the *[pypi]* section to prevent accidentally publishing private packages to the public registry.

    ```
    [distutils]
    Index-servers =
    FEED_NAME
    
    [FEED_NAME]
    Repository = https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/pypi/upload/
    ```

> [!NOTE]
> You need Twine 1.13.0 or higher to use **artifacts-keyring**. For more information, see [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements).

- - -

## Next steps
> [!div class="nextstepaction"]
> [Publish Python packages](../quickstarts/python-cli.md)