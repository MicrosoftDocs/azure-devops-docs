---
title: Size and count limits
description: Package count and size limits in Azure Artifacts 
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/01/2022
monikerRange: '>= tfs-2017'
---

# Package sizes and count limits

Azure Artifacts is a highly-scalable package management solution that enables developers to create, host, and share different types of packages. In this article, we will cover the size and count limits that developers should be aware of when using Azure Artifacts. Some of these limits are imposed by the client tools that Azure Artifacts integrates with (example nuget.exe).

## Count limits

* **5000 versions** per package ID; use [retention policies](../how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) to automatically clean up old versions
* **Unlimited package IDs** per feed

## Size limits

* NuGet packages are limited to 500 MB.
* npm packages are limited to 500 MB.
* Maven packages are limited to 500 MB per file.
* Python packages are limited to 500 MB per file.
::: moniker range="<= tfs-2018 || azure-devops"
* Universal Packages have been tested up to 1 TB and are recommended for managing large binary content.
::: moniker-end

> [!NOTE]
> Universal Package is not supported in Azure DevOps Server 2019 and 2020. 
