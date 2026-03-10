---
title: Size and count limits
description: Learn about the count and size limits for each package type in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: limits-and-quotas
ms.date: 03/10/2026
monikerRange: "<=azure-devops"
---

# Package sizes and count limits

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to host and share packages while controlling access across teams and organizations. Azure Artifacts supports the following package types: NuGet, npm, Maven, Python, Cargo, and Universal Packages. This article covers the size and count limits you should be aware of when using Azure Artifacts. Some limits are enforced by the client tools that Azure Artifacts integrates withh (example nuget.exe).

> [!NOTE]
> Azure Artifacts provides 2 GiB of free storage per organization. This free tier is intended to help you evaluate Azure Artifacts. As your organization scales or begins handling production workloads, we recommend that you [set up billing for your organization](../../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing) to ensure you have sufficient storage capacity.

## Count limits

Azure Artifacts enforces the following count limits:

- **5000 versions** per package ID.

- **Unlimited package IDs** per feed.

- **20 upstreams** per package type per feed.

> [!NOTE]
> You can use [retention policies](../how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) to automatically delete older package versions and manage storage consumption.

## Size limits

The following table shows the maximum supported size for each package type:

::: moniker range="azure-devops" 

| Package type       | Package size limit (per file)   |
|--------------------|---------------------------------|
| NuGet              | 500 MiB                         |
| npm                | 500 MiB. Azure Artifacts enforces an additional hard limit of *375 KB* for the *package.json* file. |
| Maven              | 500 MiB                         |
| Python             | 500 MiB                         |
| Cargo              | 500 MiB                         |
| Universal Packages | 4 TiB                           |

> [!NOTE]
> 
Universal Packages that contain a very large number of files (100K+) may fail to publish. In this case, we recommend bundling the files into a *ZIP* or *TAR* archive to reduce the file count.

::: moniker-end

::: moniker range="azure-devops-2022" 

| Package type       | Package size limit (per file)   |
|--------------------|---------------------------------|
| NuGet              | 500 MiB                         |
| npm                | 500 MiB. Azure Artifacts enforces an additional hard limit of *375 KB* for the *package.json* file. |
| Maven              | 500 MiB                         |
| Python             | 500 MiB                         |
| Cargo              | 500 MiB                         |

::: moniker-end

::: moniker range="< azure-devops-2022" 

| Package type       | Package size limit (per file)   |
|--------------------|---------------------------------|
| NuGet              | 500 MiB                         |
| npm                | 500 MiB. Azure Artifacts enforces an additional hard limit of *375 KB* for the *package.json* file. |
| Maven              | 500 MiB                         |
| Python             | 500 MiB                         |


::: moniker-end

## Increase Artifacts storage limit 

When your organization reaches the 2 GiB free‑tier storage limit, you won’t be able to publish new packages. To continue, you can either delete existing packages to free up storage or increase your storage limit as follows:

1. [Set up billing for your organization](../../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing-for-your-organization).

1. Sign in to your Azure DevOps organization, then select **Organization settings**.

1. Select **Billing**, and from the **Usage limit** dropdown, select **No limit, pay for what you use**.

1. Select **Save** when you're done.

   :::image type="content" source="../media/increase-usage-limit.png" alt-text="A screenshot displaying how to increase Artifacts storage limit." lightbox="../media/increase-usage-limit.png":::

## Related content

- [Publish your first package](../get-started-artifacts-ai.md) 

- [Delete and recover packages](../how-to/delete-and-recover-packages.md)

- [Manage permissions](../feeds/feed-permissions.md)
