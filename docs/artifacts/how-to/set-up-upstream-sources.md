---
title: Set up upstream sources for packages in Azure DevOps Services and TFS
description: Find out how to configure upstream packages from multiple sources in Azure DevOps Services and TFS
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: conceptual
ms.manager: mijacobs
ms.author: phwilson
author: chasewilson
ms.date: 01/24/2018
monikerRange: '>= tfs-2017'
---

# Configure upstream sources for Azure DevOps Services and TFS packages

Upstream sources enable you to use a single feed to store both the packages you produce and the packages you consume from "remote feeds": both public feeds (e.g. npmjs.com and nuget.org) and authenticated feeds (i.e. other Azure DevOps Services feeds in your organization or Azure Active Directory (AAD) tenant). Once you've enabled an upstream source, any user connected to your feed can install a package from the remote feed, and your feed will save a copy.

For more in-depth information on the concepts and best practices regarding upstream sources, check out the [upstream sources concepts documentation](../concepts/upstream-sources.md).

## Create a new feed that uses upstream sources

Navigate to the **Packages** page and select "New Feed".

Underneath _Upstream Sources_, select _Use packages from public sources through this feed_.

Selecting this option now means your feed will be configured to find and use packages from all of the public upstream sources (**nuget.org** (NuGet), **npmjs.org** (npm), **PyPI** (Python), and **Maven Central** (Maven)) without having to include those package repositories in any of your settings or configuration files. 

## Add public upstream sources to an existing feed

1. From your feed page, go to **Feed settings** by clicking the gear icon
2. On the **Upstream sources** tab, if you don't have any upstream sources you'll see a dialog where you can choose _Add upstream source_. If you do already have upstreams, you can select _Add upstream source_ in the top menu.
3. In the **Add a new upstream source** dialog, choose _Public source_

    > [!NOTE]
    > Public sources may be greyed out if you chose to include public upstream sources when creating the feed and they already exist in your upstream sources.

4. For public sources, choose **npmjs**, **NuGet Gallery**, **PyPI**, or **Maven Central**

    > [!NOTE]
    > You can also configure a custom upstream source for public repositories other than those listed above. Custom upstream sources are **only available for npm**. 

## Add an Azure Artifacts feed in your organization as an upstream source

1. From your feed page, go to **Feed settings** by clicking the gear icon
2. On the **Upstream sources** tab, if you don't have any upstream sources you will see the below dialog where you can choose _Add upstream source_. If you do already have upstreams, you can select _Add upstream source_ in the top menu.
3. In the **Add a new upstream source** dialog, choose _Azure Artifacts feed in this organization_
4. Select the feed you would like to configure as an upstream source, and the other fields will populate automatically. 
5. Select the package types you want to use and click _Add_.

## Add an Azure Artifacts feed in a different organization within your AAD tenant as an upstream source

1. From your feed page, go to **Feed settings** by clicking the gear icon
2. On the **Upstream sources** tab, if you don't have any upstream sources you will see the below dialog where you can choose _Add upstream source_. If you do already have upstreams, you can select _Add upstream source_ in the top menu.
3. In the **Add a new upstream source** dialog, choose _Azure Artifacts feed in another organization_
4. Enter the **Azure DevOps Services feed locator**, this is just `azure-feed://` followed by the organization name, feed name, and the view that is shared. For example: `azure-feed://myOrg/myFeed@local`
5. Select the package types you want to use and click _Add_.

## Consuming NuGet packages from upstream sources

Now you can open Visual Studio and install packages from the upstream sources you've configured. As covered already on the [consume NuGet packages documentation](../nuget/consume.md), You'll need to use these instructions to install packages from the upstream:

1.	On the upstream source (e.g. nuget.org), copy the Install-Package command
2.	In Visual Studio, open the Package Manager Console from Tools > NuGet Package Manager
3.	Paste the Install-Package command into the Package Manager Console and run it

Remember that you must be a Collaborator, Contributor, or Owner to install new packages from the upstream, as a copy of each upstream package you use is saved to the feed on first use. Packages already saved from an upstream source can be used by Readers.

## Consuming npm packages from upstream sources

Now you can open your favorite shell and install packages from the upstream sources you’ve configured. Just run:

```
npm install --save <package>
```

See the [npm install docs](../get-started-npm.md) for more details.

Remember that you must be a Collaborator, Contributor, or Owner to install new packages from the upstream, as a copy of each upstream package you use is saved to the feed on first use. Packages already saved from an upstream source can be used by Readers.

## FAQs

### What are views?

Views are covered in the [views concepts page](../concepts/views.md), but simply put it's the set of packages that the feed owner believes should be consumed and has chosen to release by default. 

### Why can't I see the feed I want to configure as an upstream?

It could be the case that the feed owner has not shared a view to be available for upstreaming.
