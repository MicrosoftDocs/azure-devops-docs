---
title: Xcode
description: Building Xcode projects using Azure Pipelines and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: e9dd0efb-8932-4a77-93be-28e209d486ca
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 08/31/2018
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---

# Xcode

This guidance explains how to build apps with Xcode.

## Example

For a working example of how to build an app with Xcode, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/adventworks/xcode-sample
```

The sample code includes a `azure-pipelines.yml` file at the root of the repository. You can use this file to build the app.

Follow all the instructions in [Create your first pipeline](../get-started-yaml.md) to create a build pipeline for the sample app.

## Build environment

You can use Azure Pipelines to build your apps with Xcode without needing to set up any infrastructure of your own. Xcode is preinstalled on [Microsoft-hosted macOS agents](../agents/hosted.md) in Azure Pipelines. You can use the macOS agents to run your builds.

For the exact versions of Xcode that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md).

# Install Apple provisioning profiles

# Install Apple signing certificates

### Signing and provisioning

#### Install Apple certificates

#### Install Apple provisioning profiles
