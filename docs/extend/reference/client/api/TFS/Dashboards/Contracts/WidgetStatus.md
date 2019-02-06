---
ms.prod: devops
ms.technology: devops-ecosystem
title: TFS/Dashboards/WidgetContracts WidgetStatus API | Extensions for Azure DevOps Services
description: Documentation for the WidgetStatus contract.
ms.assetid: 80994108-EAB5-414E-A986-A0EF90D9DF0D
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# WidgetStatus

Object that represents either a success or failure for widget operations. 

Module path: `TFS/Dashboards/WidgetContracts`

### Properties

* `message`: string. In case of failures, a user friendly message returned by the widget to explain why it wasn't successful in an operation. In case of success, an empty message is returned. 
