---
title: VSS/References/SDK.Interfaces Extension API | Extensions for Azure DevOps Services
description: Represents an Azure DevOps Services &quot;extension&quot; which is a container for contributions and contribution types
ms.assetid: dd0441f1-1e7e-a3f9-952a-6d905d28d7a3
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

# Extension

Defined in vss.d.ts


Represents an Azure DevOps Services &quot;extension&quot; which is a container for contributions and contribution types 

### Members

* `baseUri`: string. 

* `contributions`: [Contribution](../../../VSS/References/SDK_Interfaces/Contribution.md)[]. 

* `contributionTypes`: [ContributionType](../../../VSS/References/SDK_Interfaces/ContributionType.md)[]. 

* `eventCallbacks`: [ExtensionEventCallbackCollection](../../../VSS/References/SDK_Interfaces/ExtensionEventCallbackCollection.md). 

* `extensionId`: string. The friendly extension ID for this extension - unique for a given publisher.

* `extensionName`: string. The display name of the extension.

* `flags`: [ExtensionFlags](../../../VSS/References/SDK_Interfaces/ExtensionFlags.md). Extension flags relevant to contribution consumers

* `id`: string. Globally unique ID for this extension (the same ID is used for all versions of a single extension)

* `language`: string. 

* `manifestVersion`: any. 

* `publisherId`: string. Unique ID of the publisher of this extension

* `publisherName`: string. The display name of the publisher

* `registrationId`: string. Unique ID for this extension (the same ID is used for all versions of a single extension)

* `scopes`: string[]. 

* `serviceInstanceType`: string. 

* `version`: string. Version of this extension

