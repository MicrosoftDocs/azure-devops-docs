---
title: Get started with Python packages in Azure Artifacts
description: Quickly start hosting python packages with Azure Artifacts
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.date: 01/19/2023
monikerRange: '<= azure-devops'
ms.custom: devx-track-python, py-fresh-zinc, engagement-fy23
"recommendations": "true"
---

# Get started with Python packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This guide will walk you through using Azure Artifacts to publish and consume Python packages to and from your feed.

## Create a feed

[!INCLUDE [](../includes/create-feed.md)]
     
## Connect to feed

There are two primary ways to connect to a feed to publish or consume your Python packages:

1. Install and use the [artifacts-keyring](https://github.com/microsoft/artifacts-keyring) package, which will automatically set up authentication for you.
1. Manually set up credentials for your *.pypirc* pushes, and your *pip.ini*/*pip.conf* for pulls with a personal access token (PAT).

> [!NOTE]
> **artifacts-keyring** is not supported on newer versions of Ubuntu.

## Use artifacts-keyring to set up authentication

The [artifacts-keyring](https://github.com/microsoft/artifacts-keyring) package allows you to set up authentication to publish and consume your Python packages to and from your feed. Both [pip](https://pypi.org/project/pip/) and [twine](https://pypi.org/project/twine/) use the Python [keyring library](https://pypi.org/project/keyring/) to find credentials. 

> [!IMPORTANT]
> You must have pip 19.2 and twine 1.13.0 or higher to use **artifacts-keyring**. See [Usage requirements](https://github.com/microsoft/artifacts-keyring#requirements) for more details.

1. In an elevated command prompt window, run the following command to install the artifacts-keyring package:
   
   ```Command
   pip install artifacts-keyring
   ```
   
1. To install a package from your feed, run the following command:
    
    - **Project scoped feed**:

       ```Command
       pip install <PACKAGE_NAME> --index-url https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi/simple
       ```
    
    - **Organization scoped feed**:
    
       ```Command
       pip install <PACKAGE_NAME> --index-url https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/pypi/simple
       ```

1. To publish a package to your feed, run the following command:
   
    - **Project scoped feed**:
    
       ```Command
       twine upload --repository-url https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi/upload
       ```

    - **Organization scoped feed**:
    
       ```Command
       twine upload --repository-url https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/pypi/upload
       ```

> [!NOTE]
> The artifacts-keyring package is layered on top of the Azure Artifacts Credential Provider. For more advanced configuration options, check out the [artifacts-credprovider](https://github.com/microsoft/artifacts-credprovider) repository.

## Manually configure authentication

1. Create a [Personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read** scope to authenticate with Azure DevOps.

1. Select **Artifacts**, and then select your feed then select **Connect to feed**.

   :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot highlighting the connect to feed button.":::

1. Select **pip** under the **Python** section. 

   :::image type="content" source="media/pip-feed.png" alt-text="A screenshot highlighting the pip package type.":::

1. If this is your first time using Azure Artifacts with twine, select **Get the tools** to download and install the prerequisites.

1. [Create a virtualenv](https://docs.python.org/3/library/venv.html), if you don't already have one.

1. Add a *pip.ini* (Windows) or a *pip.conf* (Mac/Linux) file to your virtualenv. Make sure you don't check your personal access token into a public repository. 

    - **Project scoped feed**:

        ```
        [global]
        extra-index-url=https://<FEED_NAME>:<YOUR_PERSONAL_ACCESS_TOKEN>@pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/pypi/simple/
        ```

    - **Organization scoped feed**:

        ```
        [global]
        extra-index-url=https://<FEED_NAME>:<YOUR_PERSONAL_ACCESS_TOKEN>@pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/pypi/simple/
        ```

1. Run the following command in your project directory to install your package.

    ```Command
    pip install <PACKAGE_NAME>
    ```

When you connect to Azure DevOps for the first time, you'll be prompted for credentials. Enter your user name(any string) and your personal access token in the appropriate fields. The credentials will be cached locally and used to automatically sign you in the next time you use the service.

> [!NOTE]
> If you want to publish or consume your packages using Azure Pipelines, use the [Python Pip Authenticate](/azure/devops/pipelines/tasks/reference/pip-authenticate-v1) task to authenticate and install packages, or the [Python Twine Upload Authenticate](/azure/devops/pipelines/tasks/reference/twine-authenticate-v1) task to publish your packages.

## Related articles

- [Use feed views to share packages](../feeds/views.md)

- [Publish Python packages with Azure Pipelines](../../pipelines/artifacts/pypi.md).

- [Build Python apps](../../pipelines/ecosystems/python.md).

