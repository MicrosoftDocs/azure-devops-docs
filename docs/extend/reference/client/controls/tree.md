---
title: TreeView Control | Extensions for Azure DevOps Services
description: Use the treeview to display hierarchical data in your app for Azure DevOps Services.
ms.assetid: 20DE4AA3-3B76-CAAF-0683-81F85BDE4F39
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

# TreeView control

See [Use treeview](../../../develop/ui-controls/treeviewo.md) for basic usage and advanced samples.

## Create a treeview

### TypeScript
``` javascript
import Controls = require("VSS/Controls");
import TreeView = require("VSS/Controls/TreeView");

// Create the treeView in a container element
var treeview = Controls.create(TreeView.TreeView, container, options);
```

### JavaScript
``` javascript
require(["VSS/Controls", "VSS/Controls/TreeView"], function(Controls, TreeView) {
    // Create the treeView in a container element
    var treeview = Controls.create(TreeView.TreeView, container, options);
});
```
