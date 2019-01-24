---
ms.prod: devops
ms.technology: devops-ecosystem
title: TFS/Dashboards/WidgetContracts IWidget API | Extensions for Azure DevOps Services
description: Documentation for the IWidget contract.
ms.assetid: 2F1CB8E2-5027-4134-A96B-E60979DFD11E
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# IWidget

All widgets should [register](../../../../core-sdk.md#method_register) a function that returns an object satisfying this contract.

Module path: `TFS/Dashboards/WidgetContracts`


### Members

* `load`: Function. This is the method that is called by the widget framework to load the widget. Parameter for this method is of type [WidgetSettings](./WidgetSettings.md). 
This will have the current saved settings of the widget and should be used by the load method to load the widget.
It should return an object of type [WidgetStatus](./WidgetStatus.md) wrapped in a Promise. Widgets can use the [WidgetStatusHelper](./WidgetStatusHelper.md) to return either Success or Failure.

* `disableWidgetForStakeholders`: Function. Optional. This is the method that is called by the widget framework before loading the widget to determine if the widget needs to show a disabled view for Stakeholders.
It should return an object of type boolean.
Users with Stakeholder license have [restricted access](http://go.microsoft.com/fwlink/?LinkID=787012&clcid=0x409) to Azure DevOps Services features. 
In case your widget makes use of any feature that Stakeholders don't have access to, implement this method and return true.
The framework will present the appropriate experience to stakeholders when they see your widget.