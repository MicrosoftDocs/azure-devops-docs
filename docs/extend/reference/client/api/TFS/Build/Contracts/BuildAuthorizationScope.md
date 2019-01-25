---
title: TFS/Build/Contracts BuildAuthorizationScope API | Extensions for Azure DevOps Services
ms.assetid: 5432e038-94b1-ac95-e0ea-4ec8907ec7b5
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# BuildAuthorizationScope

Module path: `TFS/Build/Contracts`

### Values

* `ProjectCollection` The identity used should have build service account permissions scoped to the project collection. This is useful when resources for a single build are spread across multiple projects.
* `Project` The identity used should have build service account permissions scoped to the project in which the build definition resides. This is useful for isolation of build jobs to a particular project to avoid any unintentional escalation of privilege attacks during a build.
