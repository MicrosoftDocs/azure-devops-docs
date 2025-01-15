---
title: Install Python packages (CLI)
description: Learn how to install Python packages from the command-line interface.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 01/15/2025
monikerRange: '>= azure-devops-2019'
---

# Install Python packages (CLI)

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

This article guides you through setting up your project and installing Python packages using the NuGet command-line interface.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [Python](https://www.python.org/downloads/). |

## Create a feed

[!INCLUDE [](../includes/create-feed.md)]

## Install packages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

1. Select **pip** from the left navigation area. If this is your first time using Azure Artifacts with pip, make sure to install the prerequisites by selecting **Get the tools** and following the provided steps.

1. [Create a virtual environment](https://docs.python.org/3/library/venv.html).

1. Add a *pip.ini* (Windows) or *pip.conf* (Mac/Linux) file to your virtualenv and paste the provided snippet into it. Your file should look similar to the following snippet: 

    ```
    [global]
    index-url=https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/pypi/simple/
    ```

1. Run this command in your project directory to install your packages:

    ```
    pip install
    ```

> [!IMPORTANT]
> You must have pip 19.2 or higher to use **artifacts-keyring**. See [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements) for more details.

## Related content

- [Publish Python packages (CLI)](python-cli.md)

- [Publish Python packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/pypi.md)

- [Use packages from PyPi.org](../python/use-packages-from-pypi.md)
