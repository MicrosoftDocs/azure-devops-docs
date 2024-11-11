---
title: Size and count limits
description: Package count and size limits in Azure Artifacts 
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 02/25/2022
monikerRange: '<= azure-devops'
---

# Package sizes and count limits

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts is a highly scalable package management solution that enables developers to create, host, and share different types of packages. In this article, we will cover the size and count limits that developers should be aware of when using Azure Artifacts. Some of these limits are imposed by the client tools that Azure Artifacts integrates with (example nuget.exe).

> [!NOTE]
> Azure Artifacts provides 2 GiB of free storage for each organization. This free tier is designed to help you evaluate if Azure Artifacts fits your workflow. As your organization starts handling more critical tasks, we recommend [set up billing](../../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing) to ensure you have the appropriate resources.

## Count limits

- **5000 versions** per package ID.
- **Unlimited package IDs** per feed.
- **20 upstreams** per package type per feed.

> [!NOTE]
> You can use [retention policies](../how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) to automatically delete older package versions.

## Size limits

- **NuGet packages**: limited to 500 MiB per file.

- **Npm packages**: limited to 500 MiB per file.

- **Maven packages**: limited to 500 MiB per file.

- **Python packages**: limited to 500 MiB per file.

::: moniker range="= azure-devops" 
- **Cargo packages**: limited to 500 MiB per file.

- **Universal Packages**: up to 4 TiB per file (Recommended for large binary files).
::: moniker-end

> [!NOTE]
> Universal Packages are only available in Azure DevOps Services.

## Related articles

- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
- [Publish and download Universal Packages](../quickstarts/universal-packages.md)
- [Upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
