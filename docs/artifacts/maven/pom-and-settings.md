---
title: Set up your Maven project
description: Learn how to set up your Maven project and connect to an Azure Artifacts feed.ss
ms.service: azure-devops-artifacts
ms.assetid: 944f45ee-baa3-45ba-8467-5e7ab2bc47cf
ms.topic: conceptual
ms.date: 06/10/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Connect your Maven project with Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can seamlessly publish and restore Maven packages from feeds and public registries. Azure Artifacts supports upstreaming from Maven Central, Google Maven Repository, Gradle Plugins, and JitPack. This guide will walk you through the process of setting up your Maven project and connecting to your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- An Azure Artifacts feed. [Create one for free](../concepts/feeds.md#create-a-new-feed).

- [Download](https://maven.apache.org/download.cgi) and [Install](https://maven.apache.org/install.html) Apache Maven.

[!INCLUDE [](../includes/maven/pom-and-settings.md)]

> [!NOTE]
> If your `settings.xml` file is shared within your team, you can use mvn to [encrypt your passwords](https://maven.apache.org/guides/mini/guide-encryption.html).
