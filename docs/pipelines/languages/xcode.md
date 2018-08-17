---
title: Xcode
description: CI and CD for Xcode projects.
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: e9dd0efb-8932-4a77-93be-28e209d486ca
ms.manager: alewis
ms.author: dastahel
ms.reviewer: dastahel
ms.date: 08/17/2018
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
