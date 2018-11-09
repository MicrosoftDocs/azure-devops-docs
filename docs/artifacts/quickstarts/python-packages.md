---
title: Get started with Python packages in Azure Artifacts - Azure DevOps Services
description: Quickly start hosting python packages in Azure DevOps Services
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: quickstart
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 10/31/2018
monikerRange: 'vsts'
---

# Get started with Python packages in Azure Artifacts

This tutorial is an end-to-end guide on using Azure Artifacts to consume and publish Python packages using Azure DevOps Services. It covers license assigning and setup.

> [!NOTE]
> Python package functionality within Azure Artifacts is currently in public preview.

## Step 1: License the Azure Artifacts extension

### Assign Artifacts in Azure DevOps Services

Each organization gets five (5) free licenses. If you need more than 5 licenses, go to the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed) and select **Get**. Click **Buy** and purchase the additional licenses you need.  

You will need to assign your licenses by following the instructions below:

# [New navigation](#tab/new-nav)

1. Go to your organization, select **Admin settings** in the bottom left of the UX.
2. Select **Users**.
3. Select the user or users you wish to assign the Azure Artifacts extension to, and choose **Manage extensions**.
4. If selecting multiple users, click **Assign extensions** and choose the Azure Artifacts extension. If only selecting one user, check the Azure Artifacts box under _Extensions_ and select **Save changes**.

If you have a Visual Studio Enterprise license, you already have access to Azure Artifacts and don't need to be assigned a license, just ensure that you've been assigned the "Visual Studio Enterprise" access level.

# [Previous navigation](#tab/previous-nav)

1. Go to your account, navigate to the **Users** page, and select Package Management.
2. Select **Assign**, type the users you want to assign licenses to, then select **Ok**.

If you have a Visual Studio Enterprise license, you already have access to Package Management and don't need to be assigned a license, just ensure that you've been assigned the "Visual Studio Enterprise" access level.

---

## Step 2: Create a feed

On your first visit to **Azure Artifacts**, you'll be welcomed with an image telling you to create a new feed, click the **+ New feed** button.

In the dialog:
* **Name**: Give the feed a name. "PyPI" is the default repository name for `twine`, which is a utility used for publishing Python packages. For this reason, we recommend you to not name your feed "PyPI", as you may accidently push to the wrong repository if you don't provide a repository name with `-r`. 
* **Visibility**: Choose who can read and contribute (or update) packages in your feed.  An organization visible feed is created with permissions that allow all users in the organization to see/use your feed (recommended).  A private feed is created with permissions such that only you have access.
* **Packages from public sources**: Clicking _Use packages from public sources through this feed_ will add the public npm, NuGet, and PyPI registries as upstreams to your feed.  When upstreams are enabled, your client will be able to fetch packages from the public registry through your private feed and your private feed will cache those packages for you.  If you select _Use packages published to this feed_ your feed will be created without connectivity to public registries. You can connect them at a later date if you desire.
* When you're done, click _Create_.

# [New navigation](#tab/new-nav)
> [!div class="mx-imgBorder"] 
>![New feed dialog](../_shared/_img/new-feed-dialog-azure-devops-newnav.png)
> 

# [Previous navigation](#tab/previous-nav)
![New feed dialog](../_shared/_img/new-feed-dialog.png)

---

You can change these settings later by [editing the feed](../feeds/edit-feed.md).

## Step 3: Connect to your feed

1. From your feed in **Azure Artifacts**, click _Connect to Feed_

    # [New navigation](#tab/new-nav)
    > [!div class="mx-imgBorder"] 
    >![Connect to feed button in the upper-right of the page](../_shared/_img/connect-to-feed-azure-devops-newnav.png)
    > 

    # [Previous navigation](#tab/previous-nav)
    ![Connect to feed button in the upper-right of the page](../_shared/_img/connect-to-feed.png)

    --- 

When the _Connect to feed_ dialog opens, choose Python from the left menu (this may be called Python when we release). 

This will bring up instructions on how to publish a package to your feed using [Python’s twine command](https://pypi.org/project/twine/), and how to consume and download packages using [pip](https://pypi.org/project/pip/).

## Next steps

### Publish Python packages from your builds

If you want to consume or publish Python packages as part of your CI/CD pipeline, check out the [Publish Python packages from Azure Pipelines guide](/azure/devops/pipelines/targets/pypi).

### Python apps with Azure Pipelines

To learn more about how to create, configure, and use Python packages as part of your project or pipeline, check out the [Build Python apps with Azure Pipelines guide](https://docs.microsoft.com/en-us/azure/devops/pipelines/languages/python?view=vsts).

## Resources

If you’d like to learn more about how Python packages work, there’s a great writeup in the Architecture of Open Source Applications book, an excerpt of which may be found here:

* [The Architecture of Open Source Applications: Python Packaging](http://www.aosabook.org/en/packaging.html)














