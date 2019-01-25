---
title: Grid Control | Extensions for Azure DevOps Services
description: Use the grid control to show rows and columns items that can be sorted, resized and moved in your app for Azure DevOps Services.
ms.assetid: d0b0cded-3e7f-4972-95bb-8b634fb13f94
ms.prod: devops
ms.technology: devops-ecosystem
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# Grid control

See [Use grid](../../../develop/ui-controls/grido.md) for basic usage and advanced samples.

## Create a grid

### TypeScript
``` javascript
import Controls = require("VSS/Controls");
import Grids = require("VSS/Controls/Grids");

// Create the grid in a container element
var grid = Controls.create<Grids.Grid, Grids.IGridOptions>(Grids.Grid, container, options);
```

### JavaScript
``` javascript
require(["VSS/Controls", "VSS/Controls/Grids"], function(Controls, Grids) {
    // Create the grid in a container element
    var grid = Controls.create(Grids.Grid, container, options);
});
```

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: How is the performance with huge data?

A: Grid uses UI virtualization which performs great on tens of thousands of rows. 

#### Q: Can I have variable height rows?

A: No at the moment. This is caused by UI virtualization where scrolling is managed by grid itself. However, we are thinking to improve this scenario.

<!-- ENDSECTION -->