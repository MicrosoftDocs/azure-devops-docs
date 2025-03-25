---
title: Use packages from PyPI
description: How to consume packages from Python package index with Azure Artifacts
ms.service: azure-devops-artifacts
ms.custom: devx-track-python
ms.date: 11/17/2023
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Use packages from Python package index (PyPI)

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Using Azure Artifacts, developers can publish and consume packages from both Azure Artifacts feeds and external registries such as PyPI.org. By enabling upstream sources, you can streamline your package management, using a single feed to manage both your own packages and those consumed from public registries. Once enabled, Azure Artifacts automatically saves a copy of any package installed by a collaborator or higher from an upstream source. This article will guide you through setting up your project and using the command line to efficiently consume Python packages from PyPI. 

In this article, you'll learn how to:

> [!div class="checklist"]    
> * Enable upstream sources for your feed 
> * Add PyPI as an upstream source 
> * Setup your project
> * Install packages from Python package index 

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

- Download [Python](https://www.python.org/downloads/).

## Enable upstream sources when creating a new feed

If you haven't created a feed yet, follow the steps below to create a new one. Make sure to check the box for *upstream sources* to enable upstream sources. If you already have a feed, skip to the [next step](#add-pypi-as-a-new-upstream-source) to add PyPI as an upstream source.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed** to create a new feed.

1. Enter a descriptive **Name** for your feed and define its **Visibility** (indicating who can view packages within the feed). Specify the **Scope** of your feed, and then check the **Upstream sources** checkbox to include packages from public registries.

1. Select **Create** when you're done.

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="A screenshot showing how to create a need feed.":::

## Add PyPI as a new upstream source

If you selected the upstream sources checkbox during the creation of your feed, PyPI should have been automatically included as an upstream source. If not, you can manually add it by following these steps:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed Settings**.

1. Select **Upstream sources**, and then select **Add Upstream** to add a new upstream source.

1. Select **Public source**, and then select **PyPI (https://pypi.org/)** from the dropdown menu.

1. Select **Add** when you're done, and then select **Save** from the top right corner to save your changes.

    :::image type="content" source="media/add-pypi-upstream.png" alt-text="A screenshot displaying how to add PyPI as a new upstream source.":::

## Authenticate with your feed

1. Make sure you have downloaded Python, and then run the following command to upgrade your Python package manager:

    ```Command
    python -m pip install --upgrade pip
    ```

1. Run the following command to install the Azure Artifacts keyring:

    ```Command
    pip install keyring artifacts-keyring
    ```

1. Create a [Personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read** scope to authenticate with Azure DevOps. The first time you connect to Azure DevOps, you'll need to enter your credentials when prompted. Provide your username (any string) and your personal access token in the designated fields. These credentials will be cached locally and automatically used to sign you in the next time you use the service.

1. Navigate to your project folder, and then run the following command to create a new virtual environment:

    ```Command
    python -m venv <VIRTUAL_ENVIRONMENT_NAME>
    ```

1. Create a new *pip.ini* file (Windows) or a *pip.conf* file (Mac/Linux) in your virtual environment, and then paste the following snippet into your file. Make sure you replace the placeholders with the appropriate information, and be cautious not to commit this file to a public repository as it contains your personal access token.

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
