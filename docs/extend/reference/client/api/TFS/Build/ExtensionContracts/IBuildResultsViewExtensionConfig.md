---
title: TFS/Build/ExtensionContracts IBuildResultsViewExtensionConfig API | Extensions for Azure DevOps Services
description: Interface defining the configuration that is shared between extension targeted at &quot;ms.vss-build-web.build-results-view&quot; and the host
ms.assetid: 70f8aa50-d7cf-5deb-ff37-0f06a26f593f
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# IBuildResultsViewExtensionConfig

Module path: `TFS/Build/ExtensionContracts`


### Members

* `onBuildChanged`: (handler: (build: [Build_Contracts.Build](../../../TFS/Build/Contracts/Build.md)): void): void. Required if reacting to the current build.
More than one callbacks can be added, and all will be called.
It is important to have at least one call back, since that&#x27;s how an extension can get information about the current build.

* `onViewDisplayed`: (onDisplayedCallBack: (): void): void. Optional, If needed, this callback will be called when this particular extension is selected/displayed

* `selectTab`: (tabId: string): void. Optional, for a given tab id, which can be contribution ID for tab or a well known tab id, 
the corresponding tab is selected if the tab is visible.

