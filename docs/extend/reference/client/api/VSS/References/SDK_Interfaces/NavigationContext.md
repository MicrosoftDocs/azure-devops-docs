---
title: VSS/References/SDK.Interfaces NavigationContext API | Extensions for Azure DevOps Services
description: Structure to specify current navigation context of the executing request. The navigation context content&#x27;s are generally obtained from the request URL. Some context specifiers such as &quot;Account&quot; can be implicit and might come from current IVssServiceHost.
ms.assetid: a829e23f-9618-5e34-0dbd-9c5c588bf99a
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

# NavigationContext

Defined in vss.d.ts


Structure to specify current navigation context of the executing request. The navigation context content&#x27;s are generally obtained from the request URL. Some context specifiers such as &quot;Account&quot; can be implicit and might come from current IVssServiceHost. 

### Members

* `area`: string. A token to show which area the request has been targeted to. By default there are two areas &quot;Admin&quot; and &quot;Api&quot;. They can be specified in the URL as _admin and _api respectively.

* `currentAction`: string. Current action route value

* `currentController`: string. Current controller route value

* `currentParameters`: string. Current parameters route value (the path after the controller and action in the url)

* `topMostLevel`: [NavigationContextLevels](../../../VSS/References/SDK_Interfaces/NavigationContextLevels.md). Flag to show top most navigation context. For example the URL http://server:port/collection/project/_controller/action sets the Project bit while the URL http://server:port/collection/project/_admin/_controller/action sets also sets the area property to Admin.

