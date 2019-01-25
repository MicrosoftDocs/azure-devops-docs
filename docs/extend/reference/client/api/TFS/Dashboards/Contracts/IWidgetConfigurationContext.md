---
ms.prod: devops
ms.technology: devops-ecosystem
title: TFS/Dashboards/WidgetContracts IWidgetConfigurationContext API | Extensions for Azure DevOps Services
description: Documentation for the IWidgetConfigurationContext contract.
ms.assetid: 4BA1E4DC-AD0C-46A8-92F3-0BA6230EE308
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# IWidgetConfigurationContext

Module path: `TFS/Dashboards/WidgetContracts`


### Members

## notify()

The widget configuration calls this method when it wants to notify any of the WidgetEvents to the host. 
Currently, change in configuration is the only event that can be notified. 


### Syntax
<pre class='syntax'>
 void <b>widgetConfigurationContext.notify</b>(event, eventArgs)
</pre>

### Parameters

* `event`: string. This is the name of the event
* `eventArgs`: [EventArgs](./EventArgs.md). Arguments to be passed for the event that is being notified