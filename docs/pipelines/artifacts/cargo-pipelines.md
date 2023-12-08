---
title: Publish Cargo packages with Azure Pipelines
description: How to publish Cargo packages to an Azure Artifacts feed using Azure Pipelines
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.topic: quickstart
ms.date: 12/08/2023
monikerRange: azure-devops
"recommendations": "true"
---

# Publish Cargo packages with Azure Pipelines

Azure Pipelines enables developers to publish their Cargo packages to Azure Artifacts feeds and public registries such as Crates.io. In this article, you will learn how to publish your Cargo packages to an Azure Artifacts feed using both YAML and Classic pipelines.

This article will guide you through how to:

> [!div class="checklist"]  
> * Create an Azure Artifacts feed 
> * Connect to your feed
> * Publish Cargo packages 

## Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md) if you haven't already.

- An Azure DevOps project. [Create a project](../../organizations/projects/create-project.md#create-a-project) if you don't have one yet.
