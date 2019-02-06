---
title: VSS/References/SDK.Interfaces AppInsightsConfiguration API | Extensions for Azure DevOps Services
description: Model used to configure how TFS reports usage data to Application Insights
ms.assetid: f203b1bf-1c09-444f-aac5-91788754d051
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

# AppInsightsConfiguration

Defined in vss.d.ts


Model used to configure how TFS reports usage data to Application Insights 

### Members

* `autoTrackPage`: boolean. If true, automatically call &quot;trackPage&quot; when the page is loaded

* `customTrackPageData`: [AppInsightsCustomTrackPageData](../../../VSS/References/SDK_Interfaces/AppInsightsCustomTrackPageData.md). Optional data used to override the default values sent to trackPage

* `enabled`: boolean. Set to false if app insights reporting is not enabled/configured

* `insightsScriptUrl`: string. The url from which to retrieve app insights scripts

* `instrumentationKey`: string. The instrumentation key used to track this deployment&#x27;s usage

* `trackProjectInfo`: boolean. If true, include collection, project, and team info in the track-page urls

