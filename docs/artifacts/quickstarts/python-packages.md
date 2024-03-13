---
title: Get started with Python packages in Azure Artifacts
description: Quickly start hosting and consuming python packages with Azure.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 02/21/2024
monikerRange: '>= azure-devops-2019'
ms.custom: devx-track-python, py-fresh-zinc, engagement-fy23
"recommendations": "true"
---

# Quickstart: Publish and consume Python packages with Azure Artifacts using the command line (CLI)

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

In this quickstart, you learn how to create an Azure Artifacts feed and use your feed to publish and consume Python packages from the command line in your local development environment. When you're finished, you have a Python package published to your feed and installed from your feed to your local development environment.

To publish and consume packages in your Azure Pipelines, see [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md).

## Prerequisites

To run the following steps, you must have:

::: moniker range=">= azure-devops"

* An Azure DevOps organization. [Create one for free](../../pipelines/get-started/pipelines-sign-up.md).
* A personal access token (PAT) with **Packaging** > **Read** scope. To create one, see [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat).
* An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
* Python 3.8 or later installed on your local machine. [Download Python here](https://www.python.org/downloads).
* pip 19.2 and twine 1.13.0 or higher.
* A Python package to publish from your local machine to your feed.
* If using the sample Python package:
    * A GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
    * git installed on your local machine. 

::: moniker-end

::: moniker range="< azure-devops"

*  A GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
* Access to an Azure DevOps Server collection.
* A personal access token (PAT) with **Packaging** > **Read** scope. To create one, see [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat).
* An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
* Python 3.8 or later installed in your local development environment.
* pip 19.2 and twine 1.13.0 or higher.
* If using the sample Python package:
    * A GitHub account. Create a free [GitHub account](https://github.com/join) if you don't have one already.
    * git installed on your local machine. 


::: moniker-end

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
1. From a CLI on your local machine, clone the repository with the following command using the URL you copied from your forked repository: 

    ```Command
    git clone <REPOSITORY_URL>
    ```

1. Change directory to the cloned repository.

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

## Create a feed

[!INCLUDE [Create a feed](../includes/create-feed-gt-eq-2019.md)]

## Publish your package to your feed

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

    :::image type="content" source="./media/screenshot-twine-connect-to-feed-pyirc.png" alt-text="A screenshot highlighting the `.pyirc` content.":::

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

1. To upload your package, run the following command in your project directory replacing \<FEED_NAME\> with your feed name. On Windows, you might need to specify the `.pypirc` file location with the `--config-file` argument.

    ```Command
    twine upload --repository <FEED_NAME> dist/*
    ```

### Install a package from your feed

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
    extra-index-url=https://<FEED_NAME>:<YOUR_PERSONAL_ACCESS_TOKEN>@<FEED_URL>
    ```

1. To install your package, run the following command replacing \<PACKAGE_NAME\> with the package name from your feed.

    ```Command
    pip install <PACKAGE_NAME>
    ```

## Clean up resources

When you're finished with the resources you created, you can delete them to avoid incurring charges. When you delete a project, all its project level artifacts feeds are deleted.  

To delete a project: 

1. Select **Project Settings**.
1. On the **Project details** page, select **Delete** at the bottom of the page.
1. Enter the name of the project to confirm, and then select **Delete**.

If you want to only delete the feed:

1. Select **Artifacts** and select your feed from the drop-down menu.
1. Select the settings button.
1. From the **Feed settings** tab, select **Delete feed**.
1. Select **Delete** to confirm.

To clean up your local development environment:

1. To deactivate your virtual environment, run the following command:

    ```Command
    deactivate
    ```

1. To delete your virtual environment, delete the directory where it was created.
1. Remove the `.pypirc` file from your home directory.

If you cloned the sample Python package, you can delete the repository from your local machine and your GitHub account.


## Next steps

- [Use feed views to share packages](../feeds/views.md)

- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)

- [Build Python apps](../../pipelines/ecosystems/python.md)

## Related articles

- [Artifacts keyring](https://github.com/microsoft/artifacts-keyring)

- [Python virtual environment](https://docs.python.org/3/library/venv.html)
