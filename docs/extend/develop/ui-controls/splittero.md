---
title: Use the splitter control | Extensions for Azure DevOps Services
description: Use the splitter control to split and have resizable containers for other controls.
ms.assetid: 1EE1DD70-0C64-4B65-8F7F-175A9385041A
ms.technology: devops-ecosystem
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 06/03/2020
---

# Use the splitter control

[!INCLUDE [version-vsts-only](../../../includes/version-vsts-only.md)]

This article explains the splitter control and how to use it in your code. 

> [!TIP]
> For more information, see [Formula Design System](https://azdevinternal.azureedge.net/components/splitter), and [API Reference](../../reference/client/controls/splitter.md)

<a name="basic"></a>

## Splitter enhancement

It's more convenient, than using other controls, to instantiate the splitter control on existing markup, as the splitter is a container control. Otherwise, it's hard to fill the left and right panes programmatically.
 
There's an enhancement, which converts existing HTML to a control. It's similar to what `Controls.create` does, but instead of creating a new DOM element and associating it with the control, the enhancement uses an existing element in the DOM tree.

The following example shows typical usage of the splitter control.

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

The following example shows how to use `enhance(...)` instead of `Controls.create`.

``` javascript
	import Controls = require("VSS/Controls");
	import Splitter = require("VSS/Controls/Splitter");
	
	var splitter = <Splitter.Splitter>Controls.Enhancement.enhance(Splitter.Splitter, $(".my-splitter"));
	
	$("#expand").click(()=> { splitter.expand(); });
	$("#collapse").click(()=> { splitter.collapse(); });
```

### Splitter toggle button via enhancement

In the previous example, the ```#expand``` and ```#collapse``` buttons are used to expand or collapse the splitter control. However, the splitter control can include a built-in toggle to expand or collapse the splitter and provide a label for the collapsed pane.

Using the ```Controls.create(...)``` method of the splitter creation, the toggle can be included using the ```enableToggleButton``` field on the options object. However, this facility isn't available when using the ```Controls.Enhancement.enhance(...)``` method. As a work-around, you should include HTML, to which the ```enhance(...)``` method can attach appropriate styles and JavaScript handlers.

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

By including this HTML structure in your code, you have the splitter control with an integrated toggle button and when it's collapsed, a label on the collapsed pane.
