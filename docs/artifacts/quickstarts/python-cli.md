---
title: Publish and consume Python packages using the CLI
description: Publish and consume Python packages from the command-line interface.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.custom: engagement-fy23, devx-track-python
ms.date: 02/21/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish and consume Python packages using the command line (CLI)

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Azure Artifacts allows you to create, host, and share Python packages with your team or organization. You can publish and consume Python packages using an Azure Artifacts feed from the command line in your local development environment.

In this article you learn how to:

* Create an Azure Artifacts feed.
* Set up authentication with either the Python artifacts-keyring package or, a personal access token (PAT).
* Publish Python packages to your feed.
* Consume Python packages from your feed.

To publish and consume packages in your Azure Pipelines, see [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md).

## Prerequisites

To run the following steps, you must have:

::: moniker range=">= azure-devops"

* An Azure DevOps organization. [Create one for free](../../pipelines/get-started/pipelines-sign-up.md).
* A personal access token (PAT) with **Packaging** > **Read** scope. To create one, see [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat).
* An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
* Python 3.9 or later installed on your local machine. [Download Python here](https://www.python.org/downloads).
* pip 24.0 and twine 5.0.0 or higher.
* A Python package to publish from your local machine to your feed.
* If using the sample Python package:
    * A GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
    * git installed on your local machine. 

::: moniker-end

::: moniker range="< azure-devops"

* A GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
* Access to an Azure DevOps Server collection.
* A personal access token (PAT) with **Packaging** > **Read** scope. To create one, see [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat).
* An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
* Python 3.9 or later installed in your local development environment.
* pip 24.0 and twine 5.0.0 or higher.
* If using the sample Python package:
    * A GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
    * git installed on your local machine. 

::: moniker-end


## Create an Azure Artifacts feed

If you don't have a feed, use the following steps to create one.

[!INCLUDE [Create a feed](../includes/create-feed-gt-eq-2019.md)]

## Create a local Python package

You need a Python package to publish to your feed. If you don't have a package to publish, you can clone a sample Python package from GitHub.

### Clone the sample Python package


Use the following steps to use the sample Python package from GitHub.

1. Go to the following GitHub repository:

    ```html
    https://github.com/microsoft/python-package-template
    ```

1. Fork the repository to your GitHub account.
1. Go to your forked repository, and select **Code**.
1. Copy the URL of your forked repository.
1. From a CLI on your local machine, clone the repository to your local machine using the URL you copied from your forked repository. 

    ```Command
    git clone <REPOSITORY_URL>
    ```

1. Change directory to your cloned repository.

    ```Command
    cd python-package-template
    ```

### Build your package

To build your wheel and source distribution, run the following commands in your project directory:

```Command
pip install --upgrade build
python -m build
```

If your Python project has a `setup.py` file, you can use the following command to build your package:

```Command
python setup.py sdist bdist_wheel
```

## Connect to feed

There are two primary ways to connect to a feed to publish or consume your Python packages:

1. Use the artifacts-keyring package, which automatically sets up authentication for you.
1. Manually set up credentials with a PAT.

> [!NOTE]
> **artifacts-keyring** is not supported on newer versions of Ubuntu.


> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Set up artifacts-keyring for authentication

The artifacts-keyring package works with the Python keyring package to allow you to set up authentication to publish and consume your Python packages to and from your feed. Both pip and twine use the Python keyring package to find credentials. 

> [!IMPORTANT]
> You must have pip 19.2 and twine 1.13.0 or higher to use **artifacts-keyring**. For more information, see [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements).

If you choose to use **artifacts-keyring**, you must install the package before you can use it.

In an elevated command prompt window, run the following command to install the artifacts-keyring package:
   
   ```Command
   pip install artifacts-keyring
   ```

## Publish Python packages

You can publish Python packages to your feed using the artifacts-keyring package or PAT authentication.

### Publish packages with artifacts-keyring

1. Select **Connect to feed** from your feed.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot highlighting the connect to feed.":::

 1. Select **twine** and copy the repository URL from the **Project setup** section.
 
       :::image type="content" source="./media/screenshot-twine-connect-to-feed-url.png" alt-text="A screenshot of instructions to connect to feed with twine.":::

1. To publish a package to your feed, run the following command replacing \<FEED_URL\> with the repository URL you copied from the **Connect to feed** dialog:
    
    ```Command
    twine upload --repository-url <FEED_URL> dist/*
    ```

### Publish packages with PAT authentication

Use twine to upload your package to your Azure Artifacts feed.

1. Go to  your Azure DevOps Project and select **Artifacts**.
1. Select your feed and select **Connect to feed**.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot highlighting the connect to feed.":::

1. Select **twine** under the **Python** section.

   :::image type="content" source="./media/screenshot-connect-to-feed-twine-selection.png" alt-text="A screenshot highlighting the twine package type.":::

1. On your development machine, ensure that twine is installed.  

    ```Command
    pip install --upgrade twine
    ```

1. Follow the instructions in the **Project setup** section to set up your `.pypirc` file.  

   :::image type="content" source="./media/screenshot-twine-connect-to-feed-pyirc.png" alt-text="A screenshot highlighting the `.pyirc` file content.":::

1. To avoid needing to enter your personal access token every time you publish a package, you can add your credentials to the `.pypirc` file. Ensure that you don't check your personal access token into a public repository.

    Example of a `.pypirc` file with credentials:

    ```
    [distutils]
    Index-servers =
        <FEED_NAME>

    [<FEED_NAME>]
    Repository = <FEED_URL>
    username = <FEED_NAME>
    password = <YOUR_PERSONAL_ACCESS_TOKEN>
    ```

1. To upload your package, run the following command in your project directory replacing \<FEED_NAME\> with your feed name. On Windows, you might need to specify the `pypirc` file location with the `--config-file` option.

    ```Command
    twine upload --repository <FEED_NAME> dist/*
    ```

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
