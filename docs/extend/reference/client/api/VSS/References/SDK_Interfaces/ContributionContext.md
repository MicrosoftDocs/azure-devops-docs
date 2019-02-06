---
title: VSS/References/SDK.Interfaces ContributionContext API | Extensions for Azure DevOps Services
description: Model for a contribution context object which is used for contributed content provided by this service (e.g. Hubs). The content may be included in the parent DOM or iframe. This context provides information about how to populate the content.
ms.assetid: bb5238df-0af8-dc23-3da2-1ab1571b8164
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

# ContributionContext

Defined in vss.d.ts


Model for a contribution context object which is used for contributed content provided by this service (e.g. Hubs). The content may be included in the parent DOM or iframe. This context provides information about how to populate the content. 

### Members

* `containerCssClass`: string. CSS class for the container element which will host this content. Typical usage is to just supply a unique CSS class on the element, register an enhancement for that class in a TypeScript module, and reference that TypeScript module in this ContributionContent object.

* `contributionData`: any. Generic property bag which individual contributions can use to pass data to the client

* `cssModulePrefixes`: string[]. Specifies the prefixes for CSS modules that should map to the current service. e.g. &quot;VSS/LoaderPlugins/Css!EMS:ExtensionManagement&quot; would map to ExtensionManagement.css under the themed content path of this service if &quot;EMS&quot; is in the CSSModulePrefixes list.

* `cssReferences`: string[]. List of CSS scripts to include as links with the content. Relative paths are resolved to Themed CSS urls.

* `cssThemedRoot`: string. The root url for CSS files for the given theme

* `moduleLoaderConfig`: [ModuleLoaderConfiguration](../../../VSS/References/SDK_Interfaces/ModuleLoaderConfiguration.md). Module loader configuration which may be merged-in with the parent host (if injected into the DOM) Because the config may be merged with the host config, each root area path must be explicitly defined here rather than relying on basePath as a catch-all.

* `scriptModules`: string[]. List of script modules to reference. e.g. &quot;VSS/Controls/Grids&quot;. A require statement is issued for these modules

* `serviceLocations`: [ServiceLocations](../../../VSS/References/SDK_Interfaces/ServiceLocations.md). Lookup of urls for different services (at different host levels)

* `serviceUrl`: string. The root url of the service that can be used to resolve relative links when this content is hosted in another site.

* `staticRootUrl`: string. The static root url for this service

