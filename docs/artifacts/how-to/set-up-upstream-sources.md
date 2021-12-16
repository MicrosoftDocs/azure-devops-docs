---
title: Set up upstream sources for your feed
description: How to configure upstream sources for your Azure Artifacts feeds
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 12/16/2021
monikerRange: '>= tfs-2017'
---

# Configure upstream sources

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**

With upstream sources, you can use a single feed to store the packages you generate and the packages you consume from public registries such as npmjs.com, NuGet.org, Maven Central, and PyPI.org. Once you've enabled an upstream source, every time you install a package from the public registry, Azure Artifacts will save a copy of that package in your feed.

## Create a new feed and enable upstream sources

1. From within your project, select **Artifacts**.

    :::image type="content" source="../media/goto-feed-hub-azure-devops-newnav.png" alt-text="Screenshot of Artifacts button.":::

1. Select **Create Feed**.

    :::image type="content" source="../media/new-feed-button-azure-devops-newnav.png" alt-text="Screenshot of the create feed button.":::

1. Give your feed a **Name** and choose its **visibility**, and **scope** settings. Make sure you check the  **Include packages from common public sources** checkbox to enable upstream sources.

    :::image type="content" source="../media/new-feed-dialog-azure-devops.png" alt-text="Screenshot showing the create new feed window panel.":::

1. Select **Create** when you are done.

> [!IMPORTANT]
> Maven snapshots are not supported in upstream sources.

## Add public upstream sources to an existing feed

> [!NOTE]
> Upstream sources are not supported in public feeds.

1. With your feed selected, select the gear icon ![gear icon](../../media/icons/gear-icon.png) to access your **Feed settings**.
2. Select **Upstream sources**. If you don't have any upstream sources, you'll see a dialog where you can _Add upstream source_. If you already have it, you can select _Add upstream source_ in the top menu.
3. In the **Add a new upstream source** dialog, Select **Public source**. Note that public sources may be greyed out if you chose to include public upstream sources when creating the feed and they already exist in your upstream sources.

4. For public sources, choose **npmjs**, **NuGet Gallery**, **PyPI**, or **Maven Central**

> [!NOTE]
> You can also configure a custom upstream source for public repositories other than those listed above. Custom upstream sources are **only available for npm**. 

## Add an Azure Artifacts feed in your organization as an upstream source

1. With your feed selected, select the gear icon ![gear icon](../../media/icons/gear-icon.png) to access your **Feed settings**.
2. Select **Upstream sources**. If you don't have any upstream sources, you'll see a dialog where you can _Add upstream source_. If you already have it, you can select _Add upstream source_ in the top menu.
3. In the **Add a new upstream source** dialog, select **Azure Artifacts feed in this organization**.
4. Select the feed you would like to configure as an upstream source, and the other fields will populate automatically. 
5. Select the package types you want to use and select **Add**.

## Add an Azure Artifacts feed in a different organization within your Azure AD tenant as an upstream source

> [!IMPORTANT]
> Universal Packages only supports upstream sources in the same organization.

1. With your feed selected, select the gear icon ![gear icon](../../media/icons/gear-icon.png) to access your **Feed settings**.
2. Select **Upstream sources**. If you don't have any upstream sources, you'll see a dialog where you can _Add upstream source_. If you already have it, you can select _Add upstream source_ in the top menu.
3. In the **Add a new upstream source** dialog, select **Azure Artifacts feed in another organization**.
4. Enter the **Azure DevOps Services feed locator**, this is the `azure-feed://` prefix, followed by the organization name, project name, feed name, and your shared view. For example: `azure-feed://myOrg/myProject/myFeed@local`
5. Select the package types you want to use and your upstream source's name and select **Add**.

## Consume NuGet packages from upstream sources

Now you can open Visual Studio and install packages from the upstream sources you just configured:

1.	On the packages host website (e.g. nuget.org), copy the `Install-Package` command.
2.	In Visual Studio, open the Package Manager Console from Tools > NuGet Package Manager.
3.	Paste the `Install-Package` command into the Package Manager Console and run it.

Remember that you must be a collaborator, a contributor, or an owner to install new packages from the upstream, as a copy of each upstream package you use is saved to the feed on first use. Packages already saved from an upstream source can be used by Readers.

See [Consume NuGet packages in Visual Studio](../nuget/consume.md) for more details.

## Consume npm packages from upstream sources

Now you can open your favorite shell and install packages from the upstream sources you’ve configured. Just run:

```cmd
npm install --save <package>
```

Remember that you must be a collaborator, a contributor, or an owner to install new packages from the upstream, as a copy of each upstream package you use is saved to the feed on first use. Packages already saved from an upstream source can be used by Readers.

See the [Get started with npm packages in Azure Artifacts](../get-started-npm.md) for more details.

## What's next?

- [Manage dependencies with upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
