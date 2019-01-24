---
title: VSS/References/SDK.Interfaces PageContext API | Extensions for Azure DevOps Services
description: Global context placed on each VSSF web page (through json island data) which gives enough information for core TypeScript modules/controls on the page to operate
ms.assetid: 9a3b5883-8245-6560-dbd9-ea56b6d2c802
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

# PageContext

Defined in vss.d.ts


Global context placed on each VSSF web page (through json island data) which gives enough information for core TypeScript modules/controls on the page to operate 

### Members

* `appInsightsConfiguration`: [AppInsightsConfiguration](../../../VSS/References/SDK_Interfaces/AppInsightsConfiguration.md). Configuration for reporting telemetry/usage data to App Insights

* `coreReferences`: [CoreReferencesContext](../../../VSS/References/SDK_Interfaces/CoreReferencesContext.md). Core javascript and css references

* `cssModulePrefixes`: string[]. Specifies the prefixes for CSS modules that should map to the current service. e.g. &quot;VSS/LoaderPlugins/Css!EMS:ExtensionManagement&quot; would map to ExtensionManagement.css under the themed content path of this service if &quot;EMS&quot; is in the CSSModulePrefixes list.

* `diagnostics`: [DiagnosticsContext](../../../VSS/References/SDK_Interfaces/DiagnosticsContext.md). Diagnostic related information for the current page

* `featureAvailability`: [FeatureAvailabilityContext](../../../VSS/References/SDK_Interfaces/FeatureAvailabilityContext.md). Feature flag states to include by default in page data (avoids AJAX lookup)

* `globalization`: [GlobalizationContext](../../../VSS/References/SDK_Interfaces/GlobalizationContext.md). Globalization data for the current page based on the current user&#x27;s settings

* `microsoftAjaxConfig`: [MicrosoftAjaxConfig](../../../VSS/References/SDK_Interfaces/MicrosoftAjaxConfig.md). Configuration needed for Microsoft.Ajax library

* `moduleLoaderConfig`: [ModuleLoaderConfiguration](../../../VSS/References/SDK_Interfaces/ModuleLoaderConfiguration.md). The (AMD) module configuration

* `navigation`: [NavigationContext](../../../VSS/References/SDK_Interfaces/NavigationContext.md). Current navigation context.

* `serviceInstanceId`: string. The service instance type ID for the Azure DevOps Services service serving this page

* `serviceLocations`: [ServiceLocations](../../../VSS/References/SDK_Interfaces/ServiceLocations.md). 

* `timeZonesConfiguration`: [TimeZonesConfiguration](../../../VSS/References/SDK_Interfaces/TimeZonesConfiguration.md). Contains global time zone configuration information (e.g. which dates DST changes)

* `webAccessConfiguration`: [ConfigurationContext](../../../VSS/References/SDK_Interfaces/ConfigurationContext.md). Web Access configuration

* `webContext`: [WebContext](../../../VSS/References/SDK_Interfaces/WebContext.md). The web context information for the given page request

