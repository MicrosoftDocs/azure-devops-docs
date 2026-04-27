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

Some web browsers block calls from iframes to local network resources as part of [Private Network Access](https://wicg.github.io/private-network-access/) protections. This blocking affects Azure DevOps organizations that use extensions that call back-end services hosted on internal company networks, such as:

- Custom extensions that connect to on-premises REST APIs or microservices
- Extensions that integrate with internal build servers or artifact repositories
- Extensions that communicate with self-hosted reporting or monitoring tools

If you need to keep using these extensions, toggle on the security policy **Allow extensions to access local network resources**.

> [!IMPORTANT]
> Enabling this policy relaxes browser-level network protections for all extensions in your organization. Only enable it if you trust the extensions installed in your organization and you have a business need to access local network resources. Review your installed extensions regularly and remove any that are unnecessary. For more information, see [Manage high privilege extensions](manage-high-privilege-extensions.md).

## Prerequisites

[!INCLUDE [prerequisites-pca-only](../includes/prerequisites-pca-only.md)]

## Enable the local network access policy

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).
2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.
3. Select **Policies**.
4. Under **Security policies**, toggle **Allow extensions to access local network resources** to **On**.

   :::image type="content" source="media/allow-extensions-local-network.png" alt-text="Screenshot showing the allow extensions to access local network resources toggle.":::

> [!NOTE]
> The policy is **Off** by default. An authorized user must toggle it **On** if needed.

## Related articles

- [Manage extension permissions](grant-permissions.md)
- [Manage high privilege extensions](manage-high-privilege-extensions.md)
- [Install extensions](install-extension.md)
