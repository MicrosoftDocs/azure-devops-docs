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

    :::image type="content" source="media/python-demo-feed.png" alt-text="A screenshot showing how to create a need feed and enable upstream sources in Azure Artifacts.":::

## Add PyPI upstream

If you enabled *Upstream Sources* when creating your feed, PyPI should have been automatically added as an upstream source. Otherwise, you can manually add it by following these steps:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select the gear icon ![gear icon](../../media/icons/gear-icon.png) to open **Feed Settings**.

1. Select **Upstream Sources**, then select **Add Upstream**.

1. Select **Public source**, then choose **PyPI (https://pypi.org/)** from the dropdown list.

1. Select **Add**, then select **Save** in the upper-right corner to apply your changes.

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

Now that you’ve authenticated with your feed, you can install packages from the PyPI upstream as you normally would with pip. Any package you install is automatically saved to your Azure Artifacts feed.

In this example, you’ll install *requests*, a popular HTTP library for Python.

1. Open a command prompt and navigate to your project directory, then activate your virtual environment. Replace the placeholder with the name of the virtual environment you created earlier:

    ```
    <YOUR_VIRTUAL_ENVIRONMENT_NAME>/Scripts/Activate
    ```

1. Run the following command to install the *requests* package from PyPI.

    ```
    pip install requests
    ```

1.  pip install requestsShow more lines

1. Once the installation completes, Azure Artifacts saves a copy of the package to your feed. Navigate to your feed to verify that the package is available, as shown in the following screenshot.

    :::image type="content" source="media/package-saved-from-python-upstream-source.png" alt-text="A screenshot showing the requests package installed from PyPI upstream.":::

## Related content

- [Publish Python packages (CLI)](../quickstarts/python-cli.md)

- [Use upstream sources in a public feed](../how-to/public-feeds-upstream-sources.md)

- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)
