---
author: ckanyika
ms.author: ckanyika
ms.date: 1/17/2025
ms.topic: include
---


### Sparse checkout for Azure Repos

The [git sparse-checkout](https://github.blog/open-source/git/bring-your-monorepo-down-to-size-with-sparse-checkout/) command is now supported in the YAML checkout task, alongside the [partial clone filter](/azure/devops/pipelines/yaml-schema/steps-checkout?view=azure-pipelines), to improve repository checkout performance. You can use the properties `sparseCheckoutDirectories` and `sparseCheckoutPatterns`.

Setting `sparseCheckoutDirectories` enables cone mode, where the checkout process uses directory matching. Alternatively, you can set `sparseCheckoutPatterns` which triggers non-cone mode, allowing more complex pattern matching. 

If both properties are set, the agent initialize cone mode with directory matching. If neither property is specified in the checkout task, the sparse checkout process is disabled. Any issues encountered during command execution results in the checkout task failing.

YAML example for sparse checkout cone mode:
```yaml
    checkout: repo
    sparseCheckoutDirectories: src
```

YAML example for sparse checkout non-cone mode:
```yaml

   checkout: repo
   sparseCheckoutPatterns: /* !/img 

```
> [!IMPORTANT]
> The sparse checkout feature requires agent **v3.248.0 (v4.248.0 for .NET 8)** or above. 

You can find the agent on the **[releases page](https://github.com/microsoft/azure-pipelines-agent/releases)**.


### Make cross-repo policies case-sensitive

Previously, the branch candidate preview for cross-repo policies displayed results in a case-insensitive manner, despite branch matching being case-sensitive. This inconsistency created potential misalignment, as it could appear that certain branches were protected when they weren't. 
To resolve this issue, we have updated the branch pattern preview to align with the case-sensitive behavior of policy application. 

Before fix:
> [!div class="mx-imgBorder"]
> [![Screenshot of before fix](../../media/248-repos-01.png "Screenshot of before fix")](../../media/248-repos-01.png#lightbox)



After:

> [!div class="mx-imgBorder"]
> [![Screenshot of after fix.](../../media/248-repos-02.png "Screenshot of after fix")](../../media/248-repos-02.png#lightbox)