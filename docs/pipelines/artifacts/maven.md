---
title: Use Maven artifact feeds
description: Learn about how you can use Maven artifacts with Azure Artifacts or Team Foundation Server (TFS).
ms.prod: devops
ms.technology: devops-artifacts
ms.assetid: fc81d7ee-fa9a-4c04-ac8c-6269d91987d3
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 01/31/2018
monikerRange: '>= tfs-2018'
---
 
# Set up Azure Pipelines and Maven

[!INCLUDE [version-tfs-2018](../_shared/version-tfs-2018.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

This guide covers the basics of using Azure Pipelines to work with Maven artifacts in Azure Artifacts feeds.
 
This walkthrough assumes that you've already added the correct build service identity to your feed.

1. Create a new build pipeline and select the **Maven** template.
<br>
2. Fill in the path to `pom.xml`, and configure the Maven goal you'd like for your build. Authentication to your Azure Artifacts feed should happen automatically.
<br>
