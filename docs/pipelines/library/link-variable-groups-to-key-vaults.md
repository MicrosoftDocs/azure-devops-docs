---
title: Link a variable group to secrets in Azure Key Vault
description: Create a variable group that links to secrets in an Azure key vault.
ms.topic: tutorial
ms.author: v-catherbund
author: cebundy
ms.date: 08/25/2024
monikerRange: '<= azure-devops'
---

# Link a variable group to secrets in Azure Key Vault

This article shows you how to create a variable group that links to secrets stored in an Azure key vault. By linking the variable group to the key vault, you can ensure that your secrets are stored securely and your pipelines always have access to the latest secret values at runtime.

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [set secret variable in UI](../process/includes/variable-groups-link-secrets.md)]

For more information, see [Use Azure Key Vault secrets](../release/azure-key-vault.md).

## Related articles

* [Manage variable groups](./variable-groups.md)
* [Set secret variables](../process/set-secret-variables.md)
