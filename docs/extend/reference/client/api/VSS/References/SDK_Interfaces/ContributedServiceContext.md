---
title: VSS/References/SDK.Interfaces ContributedServiceContext API | Extensions for Azure DevOps Services
description: Page context configuration that can be contributed by remote services (different Azure DevOps Services services delivering content to the page)
ms.assetid: 342d593c-8248-6e29-40dc-b61354481a0c
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

# ContributedServiceContext

Defined in vss.d.ts


Page context configuration that can be contributed by remote services (different Azure DevOps Services services delivering content to the page) 

### Members

* `cssModulePrefixes`: string[]. Specifies the prefixes for CSS modules that should map to the current service. e.g. &quot;VSS/LoaderPlugins/Css!EMS:ExtensionManagement&quot; would map to ExtensionManagement.css under the themed content path of this service if &quot;EMS&quot; is in the CSSModulePrefixes list.

* `featureAvailability`: [FeatureAvailabilityContext](../../../VSS/References/SDK_Interfaces/FeatureAvailabilityContext.md). Feature flag states to include by default in page data (avoids AJAX lookup)

* `moduleLoaderConfig`: [ModuleLoaderConfiguration](../../../VSS/References/SDK_Interfaces/ModuleLoaderConfiguration.md). Module loader configuration which may be merged-in with the parent host (if injected into the DOM) Because the config may be merged with the host config, each root area path must be explicitly defined here rather than relying on basePath as a catch-all.

* `paths`: [ConfigurationContextPaths](../../../VSS/References/SDK_Interfaces/ConfigurationContextPaths.md). Paths to resources on this service

* `serviceLocations`: [ServiceLocations](../../../VSS/References/SDK_Interfaces/ServiceLocations.md). Lookup of urls for different services (at different host levels)

* `serviceRootUrl`: string. The root url of the service that can be used to resolve relative links when this content is hosted in another site.

* `serviceTypeId`: string. Instance ID of the service

