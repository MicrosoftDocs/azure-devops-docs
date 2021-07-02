---
title: Size and count limits in Azure Artifacts
description: Package count and size limits in Azure Artifacts 
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 10/31/2018
monikerRange: '>= tfs-2017'
---

# Limits

Azure Artifacts is a highly-scalable artifact service. In the course of everyday development, you shouldn’t need to worry about limits on size and quantity of packages you store. However, the service does have some architectural limits and also some limits imposed by the client tools (e.g. nuget.exe) it integrates with.

## Count limits

* **5000 versions** per package ID; use [retention policies](../how-to/delete-and-recover-packages.md#automatically-delete-old-package-versions-with-retention-policies) to automatically clean up old versions
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
