---
ms.prod: devops
ms.technology: devops-ecosystem
title: TFS/Dashboards/WidgetContracts CustomSettings API | Extensions for Azure DevOps Services
description: Documentation for the CustomSettings contract.
ms.assetid: 19CB39FF-952A-4071-BED8-48F4DE45F082
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# CustomSettings

Module path: `TFS/Dashboards/WidgetContracts`


### Members

* `data`: string. This is the user input in configuration pane that has been serialized to string. 

* `version`: This is a JSON object for the Semantic Version of the custom settings. For example: { major: 1, minor: 2, path: 0}.
This is an optional field, if nothing is provided a default value of { major: 1, minor: 0, path: 0} is used by the framework.

