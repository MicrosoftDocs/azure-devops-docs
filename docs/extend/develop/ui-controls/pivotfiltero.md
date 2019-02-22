---
title: Use the Pivot Filter Control | Extensions for Azure DevOps Services
description: Use the pivot filter control to apply filtering on your list in your app for Azure DevOps Services.
ms.assetid: 36F80097-4DB7-4C63-8E0E-8C031CF07FCE
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Use the pivot filter control

This page shows how to use a pivot filter control.

<a name="basic"></a>
## Basic usage
This sample shows basic usage of a pivot filter. Please try to use html markup below since it picks up necessary styles from `hub-pivot` and `filters` classes.

``` html
  <div class="hub-pivot">
    <div class="filters filter-container"></div>
  </div>
  
  <div class="log"></div>
```  

``` javascript
  import Controls = require("VSS/Controls");
  import Navigation = require("VSS/Controls/Navigation");
  
  var container = $(".filter-container");
  
  Controls.create(Navigation.PivotFilter, container, {
    behavior: "dropdown",
    text: "My Filter",
    items: [
      { id: "v-1", text: "Value 1", value: "v1" },
      { id: "v-2", text: "Value 2", value: "v2", selected: true },
      { id: "v-3", text: "Value 3", value: "v3" }
    ],
    change: function(item) {
      var $log = $(".log"); 
      $log.html(`${$log.html()}<p>Filter changed to ${item.text} (${item.value})</p>`);
    }
  });
```