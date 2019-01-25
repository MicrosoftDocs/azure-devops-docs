---
ms.prod: devops
ms.technology: devops-ecosystem
title: TFS/Dashboards/WidgetHelpers WidgetconfigurationSave API | Extensions for Azure DevOps Services
description: Documentation for the WidgetconfigurationSave helper class.
ms.assetid: F2FC3C7B-BF8B-459B-8BF3-EA1A805A5ADC
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# WidgetconfigurationSave

Module path: `TFS/Dashboards/WidgetHelpers`


### Members

<a name="Valid"/>
## Valid()

Static method used to save valid custom settings from user input in configuration pane.

### Syntax
<pre class='syntax'>
 void <b>WidgetconfigurationSave.Valid</b>(customSettings)
</pre>

### Parameters

* `customSettings`: CustomSettings. The custom settings to save which is serialized user input along with optional version.

<a name="Invalid"/>
## Invalid()

Static method used to indicate to the widget framework that user input is invalid and not ready to save

### Syntax
<pre class='syntax'>
 void <b>WidgetconfigurationSave.Invalid</b>()
</pre>

### Parameters
None