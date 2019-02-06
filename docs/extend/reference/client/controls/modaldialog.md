---
title: Modal Dialog Control | Extensions for Azure DevOps Services
description: Use the modal dialog control to collect user input or display message in your app for Azure DevOps Services.
ms.assetid: 1ABD1859-0BF4-4546-A750-1786B0227E0A
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

# Modal dialog control

See [Use modal dialog](../../../develop/ui-controls/modaldialogo.md) for basic usage and advanced samples.

## Create a modal dialog

### TypeScript
``` javascript
  import Dialogs = require("VSS/Controls/Dialogs");

  // Create the modal dialog
  var dialog = Dialogs.show<Dialogs.ModalDialog, Dialogs.IModalDialogOptions>(Dialogs.ModalDialog, options);
```

### JavaScript
``` javascript
  require(["VSS/Controls/Dialogs"], function(Dialogs) {
      // Create the modal dialog
      var dialog = Dialogs.show(Dialogs.ModalDialog, options);
  });
```


