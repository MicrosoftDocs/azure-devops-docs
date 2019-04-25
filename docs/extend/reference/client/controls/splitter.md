---
title: Splitter Control | Extensions for Azure DevOps Services
description: Use the splitter control to have split and resizable containers for other controls in your app for Azure DevOps Services.
ms.assetid: FD43DC4F-618E-4F7C-992A-F05734041A50
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

# Splitter control

See [Use splitter](../../../develop/ui-controls/splittero.md) for basic usage and advanced samples.

## Create a splitter

### TypeScript
``` javascript
  import Controls = require("VSS/Controls");
  import Splitter = require("VSS/Controls/Splitter");

  // Create the splitter in a container element
  var splitter = Controls.create<Splitter.Splitter, Splitter.ISplitterOptions>(Splitter.Splitter, container, options);
```

### JavaScript
``` javascript
  require(["VSS/Controls", "VSS/Controls/Splitter"], function(Controls, Splitter) {
      // Create the splitter in a container element
      var splitter = Controls.create(Splitter.Splitter, container, options);
  });
```


