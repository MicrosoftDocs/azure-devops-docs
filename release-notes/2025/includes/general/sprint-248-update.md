---
author: ckanyika
ms.author: ckanyika
ms.service: azure-devops
ms.date: 1/14/2025
ms.topic: include
---

### Sparse checkout for Azure Repos

The [git sparse-checkout](https://github.blog/open-source/git/bring-your-monorepo-down-to-size-with-sparse-checkout/) command is now supported in the YAML checkout task, alongside the [partial clone filter](https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/steps-checkout?view=azure-pipelines), to improve repository checkout performance. You can use the properties `sparseCheckoutDirectories` and `sparseCheckoutPatterns`.

Setting `sparseCheckoutDirectories` will enable cone mode and the checkout process will use directory-matching. You can also set `sparseCheckoutPatterns` which will trigger non-cone mode and allow for more complicated pattern-matching. If both properties are set, the agent will initialize cone mode with directory matching. If both properties are left out from the checkout task, the agent will disable the sparse checkout process. Any issues encountered while running the command will cause the checkout task to fail. 

YAML example for sparse checkout cone mode:
- `checkout: repo
  sparseCheckoutDirectories: src

YAML example for sparse checkout non-cone mode:
- checkout: repo
  sparseCheckoutPatterns: /* !/img

The sparse checkout feature requires agent v3.248.0 (v4.248.0 for .NET 8) or above. You can find the agent on the [releases](https://github.com/microsoft/azure-pipelines-agent/releases) page.


