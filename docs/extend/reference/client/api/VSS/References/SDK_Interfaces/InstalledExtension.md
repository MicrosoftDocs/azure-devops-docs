---
title: VSS/References/SDK.Interfaces InstalledExtension API | Extensions for Azure DevOps Services
description: Represents an Azure DevOps Services extension along with its installation state
ms.assetid: 0b2dda96-6ff3-0d05-711c-a33de4a6da69
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# InstalledExtension

Defined in vss.d.ts


Represents an Azure DevOps Services extension along with its installation state 

### Members

* `baseUri`: string. 

* `contributions`: [Contribution](../../../VSS/References/SDK_Interfaces/Contribution.md)[]. 

* `contributionTypes`: [ContributionType](../../../VSS/References/SDK_Interfaces/ContributionType.md)[]. 

* `eventCallbacks`: [ExtensionEventCallbackCollection](../../../VSS/References/SDK_Interfaces/ExtensionEventCallbackCollection.md). 

* `extensionId`: string. 

* `extensionName`: string. 

* `flags`: [ExtensionFlags](../../../VSS/References/SDK_Interfaces/ExtensionFlags.md). 

* `id`: string. 

* `installState`: [InstalledExtensionState](../../../VSS/References/SDK_Interfaces/InstalledExtensionState.md). Information about this particular installation of the extension

* `language`: string. 

* `manifestVersion`: any. 

* `publisherId`: string. 

* `publisherName`: string. 

* `registrationId`: string. 

* `scopes`: string[]. 

* `serviceInstanceType`: string. 

* `version`: string. 

