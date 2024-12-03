---
title: Get started with Python packages in Azure Artifacts
description: Learn how to set up your project to manage your Python packages in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 12/03/2024
monikerRange: '>= azure-devops-2019'
ms.custom: devx-track-python, py-fresh-zinc, engagement-fy23
"recommendations": "true"
---

# Get started with Python packages in Azure Artifacts

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Using Azure Artifacts, you can publish and download packages from feeds and public registries such as PyPi. This quickstart will guide you through creating a feed, configuring your project, and managing Python packages in your Azure Artifacts feed. In this article, you will learn how to:

> [!div class="checklist"]
>
> * Create a new feed.
> * Authenticate with your feed.
> * Publish Python packages.
> * Install packages from your feed.

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Download and install [Python](https://www.python.org/downloads/).

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
