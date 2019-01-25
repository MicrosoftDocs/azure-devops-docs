---
ms.prod: devops
ms.technology: devops-ecosystem
title: TFS/Dashboards/WidgetHelpers WidgetStatusHelper API | Extensions for Azure DevOps Services
description: Documentation for the WidgetStatusHelper helper class.
ms.assetid: 56D8E588-8873-47A8-AE58-48CA0530D5A5
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# WidgetStatusHelper

Module path: `TFS/Dashboards/WidgetHelpers`


### Members

## Success()

Static method that returns success as [WidgetStatus](./WidgetStatus.md) wrapped in a promise

### Syntax
<pre class='syntax'>
 void <b>WidgetStatusHelper.Success</b>()
</pre>

### Parameters
None

## Failure()

Static method that returns failure as [WidgetStatus](./WidgetStatus.md) wrapped in a promise.

### Syntax
<pre class='syntax'>
 void <b>WidgetStatusHelper.Failure</b>(message)
</pre>

### Parameters

* `message`: string. The error message for the failure.