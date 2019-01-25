---
ms.prod: devops
ms.technology: devops-ecosystem
title: TFS/Dashboards/WidgetContracts IWidgetConfiguration API | Extensions for Azure DevOps Services
description: Documentation for the IWidgetConfiguration contract.
ms.assetid: 0BD0E5D1-27AD-45E1-AC74-A412466FAE62
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# IWidgetConfiguration

All widget configurations should [register](../../../../core-sdk.md#method_register) a function that returns an object satisfying this contract.

Module path: `TFS/Dashboards/WidgetContracts`


### Members

* `load`: Function. This is the method that is called by the widget framework to load the widget configuration. The first parameter for this method is of type [WidgetSettings](./WidgetSettings.md). This will have the current saved settings of the widget.
The second parameter for this method is of type [IWidgetConfigurationContext](./IWidgetConfigurationContext.md) which can be used to communicate with the widget framework. 
This method should return an object of type [WidgetStatus](./WidgetStatus.md) wrapped in a Promise. Widgets can use the [WidgetStatusHelper](./WidgetStatusHelper.md) to return either Success or Failure.

* `onSave`: Function. This is the method that is called by the widget framework when user clicks on the Save button. 
This method can be used to run any validations on user input if needed and show appropriate error message on the configuration pane to the user.
If user input is deemed valid, then return the [custom settings](./CustomSettings.md) to be saved via [WidgetConfigurationSave.Valid()](./WidgetConfigurationSave.md#Valid).
If user input is deemed invalid, then return invalid state via [WidgetConfigurationSave.Invalid()](./WidgetConfigurationSave.md#Invalid).



