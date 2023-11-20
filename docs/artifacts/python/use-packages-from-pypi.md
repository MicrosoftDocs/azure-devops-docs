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

Using Azure Artifacts, developers can publish and consume packages from Azure Artifacts feeds and external registries such as pypi.org. This article will guide you through setting up your project and using the command line to efficiently consume Python packages from Pypi. 

In this article, you'll learn how to:

> [!div class="checklist"]    
> * Enable upstream sources for your feed 
> * Add PyPi as an upstream source 
> * Setup your project
> * Install packages from Python package index 

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed.

- Download [Python](https://www.python.org/downloads/).