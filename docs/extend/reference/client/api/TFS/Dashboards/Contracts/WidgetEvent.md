---
ms.prod: devops
ms.technology: devops-ecosystem
title: TFS/Dashboards/WidgetHelpers WidgetEvent API | Extensions for Azure DevOps Services
description: Documentation for the WidgetEvent contract.
ms.assetid: AFD7472A-20F1-41C2-A082-0085AD1B40CF
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# WidgetEvent

Module path: `TFS/Dashboards/WidgetHelpers`

### Properties

* `ConfigurationChange`: Configuration has changed. When this event is notified, the preview is updated and Save button is enabled.


### Members

## Args()

Method called to construct the EventArgs object. 


### Syntax
<pre class='syntax'>
 void <b>WidgetEvent.Args</b>(data)
</pre>

### Parameters

* `data`: any. Arguments to be passed for the event that is being notified