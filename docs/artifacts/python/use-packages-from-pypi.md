---
title: Consume packages from PyPI
description: Learn how to consume packages from Python package index (PyPI) with upstream sources in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.custom: devx-track-python
ms.date: 03/16/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
ms.topic: how-to
---

# Consume packages from Python package index (PyPI)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to use a single feed to host their own packages as well as packages installed from public registries such as PyPI.org. When upstream sources are enabled, Azure Artifacts automatically saves a copy of any package installed from an upstream source by a collaborator or higher.
This article walks you through setting up your project and using the command line to consume Python packages from the Python Package Index (PyPI).

## Prerequisites

| **Product**        | **Requirements**       |
|--------------------|------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [Python](https://www.python.org/downloads/). |

## Create a new feed and add public upstreams

If you don’t already have a feed, follow the steps below to create one and enable Upstream sources. Otherwise, skip to the [next step](#add-pypi-upstream) to add PyPI as an upstream source.

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select **Create Feed**.

1. Enter a descriptive **Name** for your feed and set its **Visibility**. Specify the **Scope**, then check the **Upstream sources** checkbox to include packages from public registries.

1. Select **Create** when you're done.

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="A screenshot showing how to create a need feed.":::

## Add PyPI upstream

If you enabled *Upstream Sources* when creating your feed, PyPI should have been automatically added as an upstream source. Otherwise, you can manually add it by following these steps:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select the gear icon ![gear icon](../../media/icons/gear-icon.png) to open **Feed Settings**.

1. Select **Upstream Sources**, then select **Add Upstream**.

1. Select **Public source**, then choose **PyPI (https://pypi.org/)** from the dropdown list.

1. Select **Add**, then select **Save** in the upper-right corner to apply your changes.

    :::image type="content" source="media/add-pypi-upstream.png" alt-text="A screenshot displaying how to add PyPI as a new upstream source.":::

## Authenticate with your feed

Make sure you've installed Python from the prerequisites, then follow these steps to connect to your feed:

1. Run the following command to upgrade your Python package manager:

    ```
    python -m pip install --upgrade pip
    ```

1. Run the following command to install the Azure Artifacts keyring:

    ```
    pip install keyring artifacts-keyring
    ```

1. Create a [Personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read** scope to authenticate with Azure DevOps. The first time you connect to Azure DevOps, you’ll be prompted for credentials. Enter any value for the username, and use your PAT as the password. These credentials are cached locally and reused the next time you authenticate.

1. Navigate to your project directory, then create a virtual environment:

    ```
    python -m venv <VIRTUAL_ENVIRONMENT_NAME>
    ```

1. In your virtual environment, create a *pip.ini* file (Windows) or a *pip.conf* file (macOS/Linux), then add the following snippet. Replace the placeholders with the appropriate values. Don’t commit this file to a public repository, as it contains your personal access token.

    - **Project-scoped feed**:

        ```
        [global]
        extra-index-url=https://<FEED_NAME>:<YOUR_PERSONAL_ACCESS_TOKEN>@pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi/simple/
        ```

    - **Organization-scoped feed**:

        ```
        [global]
        extra-index-url=https://<FEED_NAME>:<YOUR_PERSONAL_ACCESS_TOKEN>@pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/pypi/simple/
        ```

## Install packages from PyPI

Now that we've configured our project to authenticate with our feed, we can begin installing packages from the PyPI upstream. In this example, we'll install `Flask`:

1. In a command prompt window, navigate to your project folder and run the following command to activate your virtual environment. Replace the placeholder with the name of the virtual environment you created earlier:

    ```Command
    <YOUR_VIRTUAL_ENVIRONMENT_NAME>/Scripts/Activate.ps1
    ```

1. Run the following command to check the packages installed in your virtual environment:

    ```Command
    pip list
    ```

1. Run the following command to install *Flask*.

    ```Command
    pip install -U Flask
    ```

1. Once your package is installed, Azure Artifacts will save a copy of this package to your feed. Your package should be available in your feed as shown in the screenshot below.

    :::image type="content" source="media/install-package-from-upstream.png" alt-text="A screenshot showing packages installed from PyPI upstream.":::

## Related articles

- [Publish and consume Python packages CLI](../quickstarts/python-cli.md)
- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)
- [Manage permissions](../feeds/feed-permissions.md)
