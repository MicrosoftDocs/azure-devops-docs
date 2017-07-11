---
title: MenuBar Control | Extensions for Visual Studio Team Services
description: Used to display a toolbar in your app for Visual Studio Team Services.
ms.assetid: 62A19D22-D6BD-4BC2-8A36-D8E894087449
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# MenuBar control

See [Use menubar](../../../develop/ui-controls/menubaro.md) for basic usage and advanced samples.

## Create a menubar

### TypeScript
``` javascript
import Controls = require("VSS/Controls");
import Menus = require("VSS/Controls/Menus");

// Create the menubar in a container element
var menubar = Controls.create<Menus.MenuBar, any>(Menus.MenuBar, container, options);
```

### JavaScript
``` javascript
require(["VSS/Controls", "VSS/Controls/Menus"], function(Controls, MenuBar) {
    // Create the menubar in a container element
    var menubar = Controls.create(Menus.MenuBar, container, options);
});
```
## Options

[!INCLUDE [x](../api/VSS/Controls/_shared/Menus/MenuBarOptions.md)]

## Methods
[!INCLUDE [x](../api/VSS/Controls/_shared/Menus/Menu.md)]