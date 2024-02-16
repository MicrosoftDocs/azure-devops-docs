---
title: Get started with Python packages in Azure Artifacts
description: Quickly start hosting python packages with Azure.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 02/16/2024
monikerRange: '>= azure-devops-2019'
ms.custom: devx-track-python, py-fresh-zinc, engagement-fy23
"recommendations": "true"
---

# Quickstart: Publish and consume Python packages with Azure Artifacts using the command line

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

In this quickstart, you'll learn you how to publish and consume Python packages using an Azure Artifacts feed from the command line in your local development environment. 

To publish and consume packages in your Azure Pipelines, see [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md).

## Prerequisites

To run the following steps, you must have:

::: moniker range=">= azure-devops"

* An Azure DevOps organization. [Create one for free](../../pipelines/get-started/pipelines-sign-up.md).
* A personal access token (PAT) with **Packaging** > **Read** scope. To create one, see [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat).
* An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
* Python 3.8 or later installed on your local machine.
* pip 19.2 and twine 1.13.0 or higher.
* A Python package to publish from your local machine to your feed.

::: moniker-end

::: moniker range="< azure-devops"

* Access to an Azure DevOps Server collection.
* A personal access token (PAT) with **Packaging** > **Read** scope. To create one, see [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat).
* An Azure DevOps project. If you don't have one, [create a project](../../organizations/projects/create-project.md).
* Python 3.8 or later installed in your local development environment.
* pip 19.2 and twine 1.13.0 or higher.
* A Python package to publish from your local machine to your feed.
* An Azure DevOps personal access token (PAT) with **Packaging** > **Read** scope. To create one, see [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat).

::: moniker-end

## Create a feed

::: moniker range=">= azure-devops"

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a descriptive **Name** for your feed. You can leave the rest of the settings as default.

1. Select **Create**.

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="A screenshot showing how to create a  feed.":::

::: moniker-end

::: moniker range="< azure-devops-2022"

1. Go to your Azure DevOps collection, select your project.

1. Select **Artifacts**, and then select **Create Feed** to create a new feed.

1. Enter the following information for your feed:
     
    1. Enter a descriptive **Name** for your feed.
    1. Define its **Visibility** (indicating who can view packages within the feed). 
    1. Specify the **Scope** of your feed.  

1. Select **Create** when you're done.

    :::image type="content" source="../media/new-feed-dialog-devops-server.png" alt-text="A screenshot showing how to create a  feed.":::
::: moniker-end

::: moniker range="azure-devops-2022"

1. Go to your Azure DevOps collection, select your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a descriptive **Name** for your feed. You can leave the rest of the settings as default.

1. Select **Create**.

::: moniker-end

## Connect to feed

There are two primary ways to connect to a feed to publish or consume your Python packages:

1. Use the artifacts-keyring package, which automatically sets up authentication for you.
1. Manually set up credentials with a PAT.

> [!NOTE]
> **artifacts-keyring** is not supported on newer versions of Ubuntu.

## Use artifacts-keyring to set up authentication

The artifacts-keyring package works with the Python keyring package to allow you to set up authentication to publish and consume your Python packages to and from your feed. Both pip and twine use the Python keyring package to find credentials. 

> [!IMPORTANT]
> You must have pip 19.2 and twine 1.13.0 or higher to use **artifacts-keyring**. For more information, see [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements).

In an elevated command prompt window, run the following command to install the artifacts-keyring package:
   
   ```Command
   pip install artifacts-keyring
   ```

### Publish packages with artifacts-keyring

1. Select **Connect to feed** from your feed.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot highlighting the connect to feed.":::

 1. Select **twine** and copy the repository URL from the **Project setup** section.
 
   :::image type="content" source="media/screenshot-twine-connect-to-feed-url.png" alt-text="A screenshot of instructions to connect to feed with twine.":::

1. To publish a package to your feed, run the following command replacing \<FEED_URL\> with the repository URL you copied from the **Connect to feed** dialog:
    
    ```Command
    twine upload --repository-url <FEED_URL> dist/*
    ```

### Consume packages with artifacts-keyring

1. In your project, select **Artifacts** and then select your feed.

1. Select **Connect to feed**.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot highlighting the connect to feed button.":::

1. Select **pip** under the **Python** section. 

   :::image type="content" source="./media/pip-feed.png" alt-text="A screenshot of pip selection in Connect to feed.":::

1. Prepare your local your Python environment.

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

   :::image type="content" source="media/screenshot-pip-connect-to-feed-index-url.png" alt-text="A screenshot of the index-url in the Connect to feed dialog."::: 

1. To install a package from your feed, run the following command replacing \<PACKAGE_NAME\> with the package name from your feed and \<INDEX_URL\> with the index url you copied from the **Connect to feed** dialog:

    ```Command
    pip install <PACKAGE_NAME> --index-url <INDEX_URL>
    ```

When you connect to Azure DevOps for the first time, you're prompted for credentials. Enter your user name (any string) and your personal access token in the appropriate fields. The credentials will be cached locally and used to automatically sign you in the next time you use the service.

## Manually configure authentication

You can manually configure authentication to publish packages via twine and consume packages via pip without artifacts-keyring.

### Publish packages with manual configuration

Use the twine to upload your package to your Azure Artifacts feed.

1. Select **Artifacts**, and then select your feed then select **Connect to feed**.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot highlighting the connect to feed.":::

1. Select **twine** under the **Python** section.

   :::image type="content" source="media/screenshot-connect-to-feed-twine-selection.png" alt-text="A screenshot highlighting the twine package type.":::

1. On your development machine, ensure that twine is installed.  

    ```Command
    pip install -- upgrade twine
    ```

1. Follow the instructions in the **Project setup** section to set up your `.pypirc` file.  

    To avoid needing to enter your personal access token every time you publish a package, you can add your credentials to the `.pypirc` file. Ensure that you don't check your personal access token into a public repository.

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

1. To upload your package, run the following command in your project directory replacing \<FEED_NAME\> with your feed name. On Windows, you might need to specify the `pyirc` file location with the `--config-file` option.

    ```Command
    twine upload --repository <FEED_NAME> dist/*
    ```

### Consume packages with manual configuration

1. Select **Artifacts**, and then select your feed then select **Connect to feed**.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot highlighting the connect to feed button.":::

1. Select **pip** under the **Python** section. 

   :::image type="content" source="media/pip-feed.png" alt-text="A screenshot highlighting the pip package type.":::

1. Prepare your local your Python environment.

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

1. Add a *pip.ini* (Windows) or a *pip.conf* (Mac/Linux) file to the root directory of your virtualenv. Copy the `pip.ini` content from the **Project setup** section of the **Connect to feed** dialog and add it to your *pip.ini* or *pip.conf* file.
    
    To avoid needing to enter your personal access token every time you install a package from your feed, you can add your credentials to the *pip.ini* or *pip.conf* file. Make sure you don't check your personal access token into a public repository.

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

When you're finished with the resources you created, you can delete them to avoid incurring charges. When you delete a project, all it's project level Artifacts feeds are deleted.  

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


## Next steps

- [Use feed views to share packages](../feeds/views.md)

- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md)

- [Build Python apps](../../pipelines/ecosystems/python.md)[artifacts-keyring](https://github.com/microsoft/artifacts-keyring)

## Related articles

- [Artifacts keyring](https://github.com/microsoft/artifacts-keyring)

- [Python virtual environment](https://docs.python.org/3/library/venv.html)

- [twine](https://pypi.org/project/twine/)

- [pip](https://pypi.org/project/pip/)
