---
title: Use the Splitter Control | Extensions for Azure DevOps Services
description: Use the splitter control to have split and resizable containers for other controls.
ms.assetid: 1EE1DD70-0C64-4B65-8F7F-175A9385041A
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Use the splitter control

This page shows different samples about the splitter control.

**Go to [API Reference](../../reference/client/controls/splitter.md) for more details.**

<a name="basic"></a>
## Splitter enhancement
Unlike other controls, it is more convenient to instantiate splitter control on an existing markup since splitter is a container control. Otherwise, it would be difficult to fill left and right panes programmatically.
 
There is a technic called enhancement which converts an existing html to a control. It is basically similar to what `Controls.create` does but instead of creating a new DOM element and associating it with the control, enhancement uses an existing element in the DOM tree.

Below sample shows a typical usage of splitter control.

``` html
	<button id="expand">Expand</button>
	<button id="collapse">Collapse</button>
	
	<div class="my-splitter horizontal splitter">
		<div class="leftPane">
			Left pane content
		</div>
		<div class="handleBar"></div>
		<div class="rightPane">
			Right pane content
		</div>
	</div>
```

``` css
	.my-splitter {
		margin: 10px;
		border: 5px solid gray;
		width:600px;
		height: 400px;	
	}
```

See how enhance is used below instead of `Controls.create`.
``` javascript
	import Controls = require("VSS/Controls");
	import Splitter = require("VSS/Controls/Splitter");
	
	var splitter = <Splitter.Splitter>Controls.Enhancement.enhance(Splitter.Splitter, $(".my-splitter"));
	
	$("#expand").click(()=> { splitter.expand(); });
	$("#collapse").click(()=> { splitter.collapse(); });
```

### Splitter Toggle Button via Enhancement
In the sample above the ```#expand``` and ```#collapse``` buttons are used to expand or collapse the Splitter control. However the Splitter control can include built-in toggle to expand or collapse the splitter and provide a label for the collapsed pane.

When using the ```Controls.create(...)``` method of Splitter creation the toggle can be included using the ```enableToggleButton``` field on the options object. However this facility is not available when using the ```Controls.Enhancement.enhance(...)``` method. To work around this you should include HTML which the ```enhance(...)``` method can attach appropriate styles and JavaScript handlers.

```html
    <div class="my-splitter horizontal splitter toggle-button-enabled">
		<div class="leftPane">
			Left pane content
		</div>
		<div class="handleBar">
            <div class="handlebar-label" title="Pane Title">
                <span class="handlebar-label-text">Pane Title</span>
            </div>
        </div>
		<div class="rightPane">
			Right pane content
		</div>
	</div>
```

By including this HTML structure in your code, you will have a Splitter control with an integrated toggle button and when collapsed a label on the collapsed pane.