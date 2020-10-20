---
title: Artifact storage
description: Azure storage breakdown at organization and project levels to show data consumption by project and type.
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 10/20/2020
ms.author: rabououn
author: ramiMSFT
monikerRange: '>= tfs-2017'
---

# Artifact Storage breakdown

[!INCLUDE [temp](../includes/version-tfs-2017-through-vsts.md)]

Azure Artifacts offers a free tier plan that includes 2 GiB of free storage for different types of packages. Once you reach your maximum storage limit, you can either upgrade to a payed subscription or delete some of your existing artifacts.

Starting November 1st 2020, Azure Artifacts will be switching to a consumption-based billing for all package types (NuGet, npm, Python, Maven and Universal packages). Symbols storage will be free for now and billing it will be deferred to a later time.

> [!NOTE]
> Organizations created prior to May 6th 2019 will remain on the per-subscription billing and will switch over to per-storage usage billing starting from November 1st 2020.