---
title: Set up upstream sources for your feed
description: Find out how to configure upstream sources for your Azure Artifacts feeds
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 12/22/2020
monikerRange: '>= tfs-2017'
---

# Configure upstream sources

Upstream sources enable you to use a single feed to store both the packages you produce and the packages you consume from both public packages managers (npmjs.com, NuGet.org, Maven Central, and PyPI) and Artifacts feeds. Once you've enabled an upstream source, any user connected to your feed can install a package from the remote feed and your feed will save a copy.

## Create a new feed that uses upstream sources

Follow the steps in [this guide](../concepts/feeds.md#create-a-feed) to create a new feed.

Under **Upstream sources** make sure you check the box to **Include packages from common public sources**.

Selecting this option will allow your feed to use packages from public packages hosts (**nuget.org** (NuGet), **npmjs.org** (npm), **PyPI** (Python), and **Maven Central** (Maven)) without having to include those package repositories in any of your settings or configuration files. 

> [!IMPORTANT]
> Maven snapshot artifacts are not currently supported in upstream sources.

## Add public upstream sources to an existing feed

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

## FAQs

### Why can't I see a package in the browser even though I can see it in one of my feed's upstreams?

Packages belonging to an upstream are available downstream soon after they are published, but will only show up in the feed's UI once they have been 'ingested,' which requires installing the package version for the first time in the downstream feed.

### What are views?

Views enable you to share with your consumers only a subset of package versions that have been tested and validated but hold back packages that are still under development and/or didn't meet your quality bar. See [What are feed views](../concepts/views.md) for more details.

### Why can't I see the feed I want to configure as an upstream?

It could be that the feed owner has not shared a view to be available as an upstream source.

## What's next?

- [Manage dependencies with upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
