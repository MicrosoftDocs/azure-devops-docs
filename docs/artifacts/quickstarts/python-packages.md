---
title: Get started with Python packages in Azure Artifacts - Azure DevOps Services
description: Quickly start hosting python packages in Azure DevOps Services
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: quickstart
ms.manager: jillfra
ms.author: phwilson
author: chasewilson
ms.date: 10/31/2018
monikerRange: '=azure-devops'
---

# Get started with Python packages in Azure Artifacts

This quickstart guides you through using Azure Artifacts to consume and publish Python packages in Azure DevOps Services. It covers license assigning and setup.

## Create a feed

On your first visit to Azure Artifacts, you're welcomed with an image that prompts you to create a new feed. Select the **+ New feed** button.

In the dialog box:
* **Name**: Give the feed a name. "PyPI" is the default repository name for `twine`, which is a tool for publishing Python packages. We recommend that you don't name your feed "PyPI," because you might accidentally push to the wrong repository if you don't provide a repository name with `-r`. 
* **Visibility**: Choose who can read and contribute (or update) packages in your feed.  An organization-visible feed is created with permissions that allow all users in the organization to see and use your feed (recommended).  A private feed is created with permissions such that only you have access.
* **Packages from public sources**: Selecting **Use packages from public sources through this feed** will add the public npm, NuGet, and PyPI registries as upstreams to your feed. When upstreams are enabled, your client will be able to fetch packages from the public registry through your private feed, and your private feed will cache those packages for you. If you select **Use packages published to this feed**, your feed will be created without connectivity to public registries. You can connect them later if you want.
* When you're done, select **Create**.

> [!div class="mx-imgBorder"] 
>![New feed dialog box](../_shared/_img/new-feed-dialog-azure-devops-newnav.png)
> 

You can change these settings later by [editing the feed](../feeds/edit-feed.md).

## Connect to your feed

There are two primary ways to connect to a feed to push or pull Python packages:
1. Install and use the [Python Credential Provider (artifacts-keyring)](https://github.com/microsoft/artifacts-keyring), which sets up authentication for you
2. Set up your `pip.ini`/`pip.conf` for pushes, or your `.pypirc` for pulls, manually with credentials via a PAT

### Option 1: Connect with Python Credential Provider to automate authentication

The Python Credential Provider is a package (artifacts-keyring) that can be installed from the Python Package Index (PyPI). It allows the [pip command](https://pypi.org/project/pip/) (for package pulls) and the [twine command](https://pypi.org/project/twine/) (for package pushes) to authenticate to your feed by sending you through an authentication flow in your web browser. 

**IMPORTANT:** You must have `pip version 19.2` and `twine version 1.13.0` or higher installed to use the Python Credential Provider.

1. From your command-line, install the [artifacts-keyring package](https://github.com/microsoft/artifacts-keyring):
    
    `pip install artifacts-keyring`

2. Install or upload packages to your feed:
    1. Install: `pip install <package_name> --index-url https://pkgs.dev.azure.com/<org_name>/_packaging/<feed_name>/pypi/simple`
    2. Upload: `twine upload --repository-url https://pkgs.dev.azure.com/<org_name>/_packaging/<feed_name>/pypi/upload <package_wheel_or_other_dist_format>`
3. Follow the authentication flow in your browser

> **Note:** The Python Credential Provider is designed for manual interaction. If you want to set up authentication in an Azure DevOps pipeline, you will want to use the [Pip Authenticate Task](../../pipelines/tasks/package/pip-authenticate.md) for installing packages or [Twine Authentication Task](../../pipelines/tasks/package/twine-authenticate.md) for pushing.


### Option 2: Connect by manually configuring authentication

1. From your feed in **Azure Artifacts**, select **Connect to feed**.

   > [!div class="mx-imgBorder"] 
   >![Connect to feed button on the upper right of the page](../_shared/_img/connect-to-feed-azure-devops-newnav.png)
   > 

2. When the **Connect to feed** dialog box opens, choose Python from the left menu. 

This will bring up instructions on how to publish a package to your feed by using [Python’s twine command](https://pypi.org/project/twine/), and how to consume and download packages by using [pip](https://pypi.org/project/pip/).

## Next steps

### Publish Python packages from your builds

If you want to consume or publish Python packages as part of your continuous integration/continuous delivery (CI/CD) pipeline, check out the [Publish Python packages from Azure Pipelines guide](/azure/devops/pipelines/targets/pypi).

### Build Python apps with Azure Pipelines

To learn more about how to create, configure, and use Python packages as part of your project or pipeline, check out the [Build Python apps with Azure Pipelines guide](https://docs.microsoft.com/azure/devops/pipelines/languages/python?view=azure-devops).

## Resources

If you’d like to learn more about how Python packages work, there’s a great write-up in the *Architecture of Open Source Applications* book. Here's an excerpt:

* [The Architecture of Open Source Applications: Python Packaging](http://www.aosabook.org/en/packaging.html)
