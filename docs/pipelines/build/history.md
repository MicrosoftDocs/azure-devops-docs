---
title: View Classic pipeline history
description: Learn how to determine what changed, when it happened, and who made the changes using the build history in your classic pipelines.
ms.topic: how-to
ms.assetid: AB81E23E-DD84-4BDB-ACD9-AE03D783A303
ms.date: 09/06/2024
monikerRange: '<= azure-devops'
---

# View Classic pipeline history

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Pipelines, you can set up a classic pipeline to build your project. This article will guide you through checking the history of your classic pipeline to see what changed, when it happened, and who made the changes.

## Prerequisites

- Create an Azure DevOps [organization](../organizations/accounts/create-organization.md) and a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

- A working Classic pipeline. 

From the **History** tab you can see a list of changes that includes who made the change and when the change occurred.

To work with a change, select it, click **...**, and then click **Compare Difference** or **Revert Pipeline**.


## FAQ 

<!-- BEGINSECTION class="md-qanda" -->

### Can I edit the JSON source directly?

No

[!INCLUDE [temp](../includes/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../includes/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
