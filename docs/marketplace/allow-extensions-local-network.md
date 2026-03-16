---
title: Allow extensions to access local network resources - Azure DevOps
description: Learn how to enable the security policy that allows extensions to access local network resources in Azure DevOps.
ms.topic: how-to
ai-usage: ai-assisted
ms.subservice: azure-devops-marketplace
ms.author: chcomley
author: chcomley
ms.date: 03/16/2026
monikerRange: 'azure-devops'
---

# Allow extensions to access local network resources

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

> [!NOTE]
> This feature is gradually being released. If it's not yet available in your organization, check back again in a few days.

Some web browsers block calls from iframes to local network resources. This blocking affects Azure DevOps organizations that use extensions that call back-end services hosted on internal company networks.

If you need to keep using these extensions, toggle on the security policy **Allow extensions to access local network resources**.

## Enable the policy

To find the specific policy, go to **Organization Settings** > **Policies** and look under the **Security policies** section.

> [!NOTE]
> The policy is **Off** by default. An authorized user must toggle it **On** if needed.

:::image type="content" source="media/toggle-allow-extension-local-network.png" alt-text="Screenshot showing the allow extensions to access local network resources toggle.":::

## Related articles

- [Manage extension permissions](grant-permissions.md)
- [Manage high privilege extensions](manage-high-privilege-extensions.md)
- [Install extensions](install-extension.md)
