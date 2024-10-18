---
title: Secret scanning patterns for GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Patterns for GitHub Advanced Security for Azure DevOps
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 10/18/2024
---

# Secret scanning patterns

Advanced Security maintains multiple sets of default secret scanning patterns: 

1. **Push protection patterns** - used to detect potential secrets at push time in repositories with secret scanning push protection enabled.
1. **User alert patterns** - used to detect potential secrets in repositories with secret scanning alerts enabled.
1. **Non-provider patterns** - used to detect common occurrences of structured secrets in repositories with secret scanning alerts enabled.

## Supported secrets 

| Section  | Explanation  |
|---|---|
|  Provider | The name of the token provider. |
| Token name | The type of token discovered by Advanced Security secret scanning. |
| User | A token for which leaks are reported to users post-push. This applies to all repositories where Advanced Security is enabled |
| Push protection | A token for which leaks are reported to users on push. This applies to all repositories where secret push protection enabled. |
| Validity | Tokens for which Advanced Security will attempt to perform a validity check. |

### Partner provider patterns

The following table lists the partner provider patterns supported by secret scanning. 

[!INCLUDE [provider-table](includes/provider-table.md)]

### Non-provider patterns

The following table lists the non-provider generated secrets detected by secret scanning. Non-provider secrets are viewable by selecting "Other" from the confidence dropdown on the secret scanning tab. For more information, see [Manage secret scanning alerts](#manage-secret-scanning-alerts).

> [!TIP]
> The detection of non-provider patterns is currently in beta and subject to change.

[!INCLUDE [non-provider-table](includes/non-provider-table.md)]  
