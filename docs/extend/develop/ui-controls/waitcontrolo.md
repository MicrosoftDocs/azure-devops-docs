---
title: Use the Wait Control | Extensions for Azure DevOps Services
description: Use the wait control to display progress message for long running operations in your app for Azure DevOps Services.
ms.assetid: 175EDE3B-6989-4485-8FEC-014F6380D44F
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Use the wait control

This page shows different samples about the wait control.

**Go to [API Reference](../../reference/client/controls/waitcontrol.md) for more details.**

<a name="basic"></a>
## Start and end
This sample shows basic start and end operations for the wait control. 

``` typescript
  import Controls = require("VSS/Controls");
  import StatusIndicator = require("VSS/Controls/StatusIndicator");

  var container = $(".sample-container");

  var waitControlOptions: StatusIndicator.IWaitControlOptions = {
    target: $("#target"),
    cancellable: true
  };
  
  var waitControl = Controls.create(StatusIndicator.WaitControl, container, waitControlOptions);
  
  // Start operation when the start button is clicked
  $("#start").click(function() { waitControl.startWait(); });
  
  // End operation when the end button is clicked
  $("#end").click(function() { waitControl.endWait(); });
```
<a name="long-running"></a>
## Long running operation
This sample shows a cancellable long running operation which simulates 10 steps. This operation can be cancelled at any time using cancel link or ESC key.

``` typescript
  import Controls = require("VSS/Controls");
  import StatusIndicator = require("VSS/Controls/StatusIndicator");

  var container = $(".sample-container");

  var waitControlOptions: StatusIndicator.IWaitControlOptions = {
    target: $("#target"),
    cancellable: true,
    cancelTextFormat: "{0} to cancel",
    cancelCallback: function() {
      console.log("cancelled");
    }
  };
  
  var opCount: number;
  var currentOp: number;
  function nextOp() {
    currentOp += 1;
    // Check the operation is cancelled
    if (!waitControl.isCancelled()) {
      if (currentOp <= opCount) {
        var message = `Processing ${currentOp} of ${opCount}`;
          waitControl.setMessage(message);
          window.setTimeout(nextOp, Math.ceil(Math.random() * 5000));
      } else {
         waitControl.endWait();
      }
    }
  }

  // Operation starts when long-op button is clicked
  $("#long-op").click(function() {
    opCount = 10;
    currentOp = 0;
    waitControl.startWait();
    nextOp();
  });
```