---
title: Size and count limits
description: Package count and size limits in Azure Artifacts 
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/25/2022
monikerRange: '>= tfs-2017'
---

# Package sizes and count limits

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

Azure Artifacts is a highly scalable package management solution that enables developers to create, host, and share different types of packages. In this article, we will cover the size and count limits that developers should be aware of when using Azure Artifacts. Some of these limits are imposed by the client tools that Azure Artifacts integrates with (example nuget.exe).

## Count limits

- **5000 versions** per package ID.
- **Unlimited package IDs** per feed.

> [!NOTE]
> You can use [retention policies](../how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) to automatically delete older package versions.

## Size limits

- **NuGet packages**: limited to 500 MB per file.

- **Npm packages**: limited to 500 MB per file.

- **Maven packages**: limited to 500 MB per file.

- **Python packages**: limited to 500 MB per file.
::: moniker range="= azure-devops" 
- **Universal Packages**: up to 4 TB per file (Recommended for large binary files).
::: moniker-end

> [!NOTE]
> Universal Packages are only available in Azure DevOps Services.

## Related articles

- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
- [Publish and download Universal Packages](../quickstarts/universal-packages.md)
- [Upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
