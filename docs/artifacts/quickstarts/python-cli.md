---
title: Publish and consume Python packages (CLI)
description: Learn how to publish and consume Python packages from the command-line interface.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.custom: engagement-fy23, devx-track-python
ms.date: 11/21/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish and consume Python packages (CLI)

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Azure Artifacts enables developers to manage their dependencies from a single feed. You can publish and consume Python packages to your feed from the command line. In this article, you'll learn how to:

> [!div class="checklist"]  
> * Create an new feed.
> * Publish Python packages to a feed.
> * Install Python packages from a feed.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- Download and install [Python](https://www.python.org/downloads/).

## Create a feed

[!INCLUDE [](../includes/create-feed.md)]

## Publish packages
 
1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

1. Select **twine** from the left navigation area. If this is your first time using Azure Artifacts with twine, make sure to install the prerequisites by selecting **Get the tools** and following the provided steps.

1. Add a *.pypirc* file to your home directory and paste the provided snippet into it. Your file should look similar to the following snippet. If you already have a *.pypirc* that contains credentials for the public PyPI index, we recommend removing the [pypi] section to avoid accidentally publishing private packages to PyPI.

    ```
    [distutils]
    Index-servers =
      HelloNodeFeed
    
    [HelloNodeFeed]
    Repository = https://pkgs.dev.azure.com/ramiMSFTDevOps/HelloNode/_packaging/HelloNodeFeed/pypi/upload/
    ```

1. Run the following command in your project directory to create source and wheel distributions.

    ```
    python setup.py sdist bdist_wheel
    ```

1. Run the following command to publish your package. Use the *-r <REPOSITORY>* flag to ensure your private packages are not accidentally published to PyPI.

    ```
    twine upload -r HelloNodeFeed dist/*
    ```

> [!IMPORTANT]
> You must have twine 1.13.0 or higher to use **artifacts-keyring**. See [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements) for more details.

## Consume Python packages

You can consume Python packages from your feed using the artifacts-keyring package or PAT authentication.

### Consume packages with artifacts-keyring

1. In your project, select **Artifacts** and then select your feed.

1. Select **Connect to feed**.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot highlighting the connect to feed button.":::

1. Select **pip** under the **Python** section. 

   :::image type="content" source="./media/pip-feed.png" alt-text="A screenshot of pip selection in Connect to feed.":::

1. Prepare your local Python environment.

    # [Windows](#tab/Windows)
    
    1. Ensure pip is installed and up to date:
    
        ```Command
        python -m pip install --upgrade pip
        ```
    
    1. To create and activate a Python virtual environment:
    
        ```Command
        python -m venv myenv
        myenv/Scripts/activate
        ```

    # [Linux and macOS](#tab/LinuxMac)
    
    1. Ensure pip is installed and up to date:
    
        ```Command
        python3 -m pip install --upgrade pip
        ```
    
    1. To create and activate a Python virtual environment:
    
        ```Command
        python3 -m venv myenv
        source myenv/bin/activate
        ```
    
    ---
        
1. Copy the `index-url` from the **Project setup** section of the **Connect to feed** dialog.

   :::image type="content" source="./media/screenshot-pip-connect-to-feed-index-url.png" alt-text="A screenshot of the index-url in the Connect to feed dialog."::: 

1. To install a package from your feed, run the following command replacing \<PACKAGE_NAME\> with the package name from your feed and \<INDEX_URL\> with the index url you copied from the **Connect to feed** dialog:

    ```Command
    pip install <PACKAGE_NAME> --index-url <INDEX_URL>
    ```

When you connect to Azure DevOps for the first time, you're prompted for credentials. Enter your user name (any string) and your personal access token in the appropriate fields. The credentials will be cached locally and used to automatically sign you in the next time you use the service.

### Consume packages with PAT authentication

1. Go to  your Azure DevOps Project and select **Artifacts**.
1. Select your feed and select **Connect to feed**.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot highlighting the connect to feed button.":::

1. Select **pip** under the **Python** section. 

   :::image type="content" source="media/pip-feed.png" alt-text="A screenshot highlighting the pip package type.":::

1. Prepare your local Python environment.

    # [Windows](#tab/Windows)
    
    1. Ensure pip is installed and up to date:
    
        ```Command
        python -m pip install --upgrade pip
        ```
    
    1. Create and activate a Python virtual environment:
    
        ```Command
        python -m venv myenv
        myenv/Scripts/activate
        ```

    # [Linux and macOS](#tab/LinuxMac)
    
    1. Ensure pip is installed and up to date:
    
        ```Command
        python3 -m pip install --upgrade pip
        ```
    
    1. To create and activate a Python virtual environment:
    
        ```Command
        python3 -m venv myenv
        source myenv/bin/activate
        ```

    ---

1. Add a *pip.ini* (Windows) or a *pip.conf* (Mac/Linux) file to the root directory of your virtual environment. Copy the content from the **Project setup** section of the **Connect to feed** dialog and add it to your *pip.ini* or *pip.conf* file.

    :::image type="content" source="./media/screenshot-pip-connect-to-feed-pip-ini.png" alt-text="A screenshot highlighting the pip.ini file content.":::

1. To avoid needing to enter your personal access token every time you install a package from your feed, you can add your credentials to the *pip.ini* or *pip.conf* file. Make sure you don't check your personal access token into a public repository.

    Example of a *pip.ini* or *pip.conf* file with credentials:

    ```
    [global]
    index-url=https://<FEED_NAME>:<YOUR_PERSONAL_ACCESS_TOKEN>@<FEED_URL>
    ```

1. To install your package, run the following command replacing \<PACKAGE_NAME\> with the package name from your feed.

    ```Command
    pip install <PACKAGE_NAME>
    ```

## Related articles

- [Configure permissions](../feeds/feed-permissions.md)
- [Understand upstream sources](../concepts/upstream-sources.md)
- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)
