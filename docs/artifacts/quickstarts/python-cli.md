---
title: Publish Python packages (CLI)
description: Learn how to publish Python packages from the command-line interface.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.custom: engagement-fy23, devx-track-python
ms.date: 01/15/2025
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish Python packages (CLI)

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

This article guides you through publishing Python packages to an Azure Artifacts feed using the NuGet command-line interface.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [Python](https://www.python.org/downloads/). |

## Create a feed

[!INCLUDE [](../includes/create-feed.md)]

## Publish packages
 
1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

1. Select **twine** from the left navigation area. If this is your first time using Azure Artifacts with twine, make sure to install the prerequisites by selecting **Get the tools** and following the provided steps.

1. Add a *.pypirc* file to your home directory and paste the provided snippet into it. Your file should look similar to the following snippet. If you already have a *.pypirc* that contains credentials for the public PyPI index, we recommend removing the *[pypi]* section to avoid accidentally publishing private packages to PyPI.

    ```
    [distutils]
    Index-servers =
    FEED_NAME
    
    [FEED_NAME]
    Repository = https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/pypi/upload/
    ```

1. Run the following command in your project directory to create source and wheel distributions.

    ```
    python setup.py sdist bdist_wheel
    ```

1. Run the following command to publish your package. Use the *-r REPOSITORY_NAME* flag to ensure your private packages are not accidentally published to PyPI.

    ```
    twine upload -r REPOSITORY_NAME dist/*
    ```

> [!IMPORTANT]
> You must have twine 1.13.0 or higher to use **artifacts-keyring**. See [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements) for more details.

## Related content

- [Install Python packages (CLI)](install-python-packages.md)

- [Publish Python packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/pypi.md)

- [Use packages from PyPi.org](../python/use-packages-from-pypi.md)

