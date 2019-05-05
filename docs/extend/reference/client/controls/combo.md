---
title: Combo Control | Extensions for Azure DevOps Services
description: Use the combo control to have an editable control with the drop down support like list, tree, date-time and multi-value.
ms.assetid: 830B76D7-FE6F-CE63-0689-7DA663207A51
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

# Combo control

See [Use combo](../../../develop/ui-controls/comboo.md) for basic usage and advanced samples.

## Create a combo

### TypeScript
``` javascript
  import Controls = require("VSS/Controls");
  import Combos = require("VSS/Controls/Combos");

  // Create the combo in a container element
  var combo = Controls.create<Combos.Combo, Combos.IComboOptions>(Combos.Combo, container, options);
```

### JavaScript
``` javascript
  require(["VSS/Controls", "VSS/Controls/Combos"], function(Controls, Combos) {
      // Create the combo in a container element
      var combo = Controls.create(Combos.Combo, container, options);
  });
```
