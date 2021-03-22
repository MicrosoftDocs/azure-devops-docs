---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 02/19/2020
---

To publish to an Azure Artifacts feed, set the identity under which the build runs as a **Contributor** on the feed. If your build pipeline is configured to run using the project collection scope, then give the **Project Collection Build Service** identity contributor access to the feed. If your build pipeline is configured to run using project scope, then the **Project Build Service** identity should be given contributor access to the feed. You can check the scope in which your builds run by opening the editor for your build pipeline, and looking at the **Options** tab. To learn more about permissions for Package Management feeds, see [Secure and share packages using feed permissions
](../../../artifacts/feeds/feed-permissions.md).