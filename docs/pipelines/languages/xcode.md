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

# PLACEHOLDER PLACEHOLDER PLACEHOLDER

# Xcode

**Azure Pipelines | TFS 2018 | TFS 2017.2**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

::: moniker range="<= tfs-2018"
> [!NOTE]
> 
> This guidance applies to Azure Pipelines.
::: moniker-end

This guide explains creating pipelines for Xcode projects. Before this guidance, read the [YAML quickstart](../get-started-yaml.md).

::: moniker range="vsts"
> [!NOTE]
> To use YAML you must have the **Build YAML definitions** [preview feature](../../project/navigation/preview-features.md) enabled on your organization.
::: moniker-end

## Get started

You can build Xcode projects using [Microsoft-hosted agents](../agents/hosted.md) that include tools for Xcode. Or, you can use [self-hosted agents](../agents/agents.md#install) with specific tools you need.
