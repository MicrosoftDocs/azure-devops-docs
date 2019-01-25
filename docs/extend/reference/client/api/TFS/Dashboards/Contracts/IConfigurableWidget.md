---
ms.prod: devops
ms.technology: devops-ecosystem
title: TFS/Dashboards/WidgetContracts IConfigurableWidget API | Extensions for Azure DevOps Services
description: Documentation for the IConfigurableWidget contract.
ms.assetid: EE51192C-4294-41AE-A24D-C1F26FE76617
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# IConfigurableWidget

All widgets that need configuration should [register](../../../../core-sdk.md#method_register) a function that returns an object satisfying this contract.

Module path: `TFS/Dashboards/WidgetContracts`

### Members

* `load`: Function. This is the method that is called by the widget framework to load the widget. Parameter for this method is of type [WidgetSettings](./WidgetSettings.md). 
This will have the current saved settings of the widget and should be used by the load method to load the widget.
It should return an object of type [WidgetStatus](./WidgetStatus.md) wrapped in a Promise. Widgets can use the [WidgetStatusHelper](./WidgetStatusHelper.md) to return either Success or Failure.

* `reload`: Function. This is the method that is called by the widget framework every time the configuration is changed or saved. Parameter for this method is of type [WidgetSettings](./WidgetSettings.md). 
This parameter holds the widget settings derived from user input in the configuration pane and should be used by the reload method to reload the widget.
It should return an object of type [WidgetStatus](./WidgetStatus.md) wrapped in a Promise. Widgets can use the [WidgetStatusHelper](./WidgetStatusHelper.md) to return either Success or Failure.

