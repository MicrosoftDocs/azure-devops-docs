---
title: Build pipeline history
ms.custom: seodec18
description: Learn about how you can determine what changed, when it happened, and who did it on Azure Pipelines and Team Foundation Server (TFS).
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: AB81E23E-DD84-4BDB-ACD9-AE03D783A303
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 3/15/2018
monikerRange: '>= tfs-2015'
---

# Build pipeline history

[!INCLUDE [temp](../_shared/version.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

From the **History** tab you can see a list of changes that includes who made the change and when the change occurred.

::: moniker range="tfs-2017"

## TFS 2017.3 and newer

::: moniker-end

::: moniker range=">= tfs-2017"

To work with a change, select it, click <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span>, and then click **Compare Difference** or **Revert Pipeline**.

::: moniker-end

::: moniker range="tfs-2017"

## TFS 2017 RTM

::: moniker-end

::: moniker range="<= tfs-2017"

After you've viewed the history, if you want details about a change, select it and then choose **Diff**. If you want to roll back to an earlier version, select it, and then click **Rollback**.

::: moniker-end

## Q & A 

<!-- BEGINSECTION class="md-qanda" -->

### Can I edit the JSON source directly?

No

[!INCLUDE [temp](../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
