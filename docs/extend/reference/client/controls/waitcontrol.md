---
title: Wait Control | Extensions for Visual Studio Team Services
description: Use the wait control to display progress message for long running operations in your app for Visual Studio Team Services.
ms.assetid: 418275E5-F2BA-42DF-B5E6-A88324B25123
ms.prod: vs-devops-alm
ms.technology: vsts-sub-api
ms.service: vsts-extend
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Wait control

See [Use wait control](../../../develop/ui-controls/waitcontrolo.md) for basic usage and advanced samples.

## Create a wait control

### TypeScript
``` javascript
  import Controls = require("VSS/Controls");
  import StatusIndicator = require("VSS/Controls/StatusIndicator");

  // Create the wait control in a container element
  var waitcontrol = Controls.create<StatusIndicator.WaitControl, StatusIndicator.IWaitControlOptions>(StatusIndicator.WaitControl, container, options);
```

### JavaScript
``` javascript
  require(["VSS/Controls", "VSS/Controls/StatusIndicator"], function(Controls, StatusIndicator) {
      // Create the wait control in a container element
      var waitcontrol = Controls.create(StatusIndicator.WaitControl, container, options);
  });
```

