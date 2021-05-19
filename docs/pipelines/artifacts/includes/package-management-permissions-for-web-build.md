---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 02/19/2020
---

To publish packages to an Azure Artifacts feed from your pipeline, set the identity under which the build runs as a feed **Contributor**.If your build pipeline is configured to run using the project collection scope, add the **Project Collection Build Service** identity as a feed **Contributor**. 

If your build pipeline is configured to run using project scope, then the **Project Build Service** identity should be given contributor access to the feed. 
You can check the scope in which your builds run by opening the pipeline editor and checking the **Options** tab.
For more information on feeds permissions, see [manage packages with feed permissions](../../../artifacts/feeds/feed-permissions.md).
