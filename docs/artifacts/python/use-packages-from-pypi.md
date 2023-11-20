---
title: Use packages from PyPI
description: How to consume packages from Python package index with Azure Artifacts
ms.service: azure-devops-artifacts
ms.date: 11/17/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Use packages from Python package index (PyPI)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using Azure Artifacts, developers can publish and consume packages from Azure Artifacts feeds and external registries such as pypi.org. This article will guide you through setting up your project and using the command line to efficiently consume Python packages from PyPI. 

In this article, you'll learn how to:

> [!div class="checklist"]    
> * Enable upstream sources for your feed 
> * Add PyPI as an upstream source 
> * Setup your project
> * Install packages from Python package index 

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

- Download [Python](https://www.python.org/downloads/).

## Enable upstream sources

If you haven't created a feed yet, follow the steps below to create a new one. Make sure to check the box for *upstream sources* to enable upstream sources. If you already have a feed, skip to the [next step](#add-pypi-upstream) to add PyPI as an upstream source.

[!INCLUDE [](../includes/create-feed.md)]

## Add PyPI upstream

If you selected the upstream sources checkbox during the creation of your feed, PyPI should have been automatically included as an upstream source. If not, you can manually add it by following these steps:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select the gear icon ![gear icon](../../media/icons/gear-icon.png) to navigate to **Feed Settings**.

1. Select **Upstream sources**, and then select **Add Upstream** to add a new upstream source.

1. Select **Public source**, and then select **PyPI (https://pypi.org/)** from the dropdown menu.

1. Select **Save** when you're done, and then select **Save** one more time from the top right corner to save your changes.

