---
title: Use the TreeView Control | Extensions for Azure DevOps Services
description: Use the treeview to display hierarchical data in your app for Azure DevOps Services.
ms.assetid: 8A32169B-3E9F-688A-B886-0A5627B863E8
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Use the treeview control

This page shows different samples about the treeview control.

> Go to [API Reference](../../reference/client/controls/tree.md) for more details.

<a name="basic"></a>

## Basic treeview

This sample shows the basic usage of the TreeView control. The items of tree source need to be `TreeView.TreeNode`.
``` javascript
  import Controls = require("VSS/Controls");
  import TreeView = require("VSS/Controls/TreeView");

  var container = $(".sample-container");

  var source = [
   { name: "Asia", icon: "icon icon-people", children: [
      { name: "Russia" }, 
      { name: "Afghanistan" }, 
      { name: "India" }, 
      { name: "China" }] 
   },
   { name: "Africa", icon: "icon icon-people", children: [
      { name: "Algeria" }, 
      { name: "Botswana" }, 
      { name: "Cameroon" }] 
   },
   { name: "Europe", icon: "icon icon-people", children: [
      { name: "Germany" }, 
      { name: "Slovenia" }, 
      { name: "Belgium" }, 
      { name: "Luxembourg" }, 
      { name: "Turkey" }
      ], 
      expanded: true 
   }
  ];

  // Converts the source to TreeNodes
  function convertToTreeNodes(items) {
    return $.map(items, function (item) {
      var node = new TreeView.TreeNode(item.name);
      node.icon = item.icon;
      node.expanded = item.expanded;
      if (item.children && item.children.length > 0) {
        node.addRange(convertToTreeNodes(item.children));
      }
      return node;
    });
  }

  // Generate TreeView options
  var treeviewOptions = {
    width: 400,
    height: "100%",
    nodes: convertToTreeNodes(source)
  };

  // Create the TreeView inside the specified container
  Controls.create(TreeView.TreeView, container, treeviewOptions);
```
<a name="selectionchange"></a>

## Attach to node selection change

Below code works based on **Basic tree** example above. Attaching `selectionchanged` event of container element to get notified when node selection changes.
``` javascript
  var container = $(".sample-container");

  // Attach selectionchanged event using a DOM element containing treeview
  container.bind("selectionchanged", function (e, args) {
    var selectedNode = args.selectedNode;
    if(selectedNode) {
      alert(`${selectedNode.text} selected!`);
    }
  });
```
<a name="addremove"></a>

## Add/remove nodes
Below code works based on **Basic tree** example above. This sample displays how to add nodes to TreeView as well as removing nodes from it.

``` html
  <button id="btnAdd">Add cities to Turkey</button>
  <button id="btnRemove">Remove Africa node</button>
```

``` javascript
  $("#btnAdd").click(function(e) {
    // Find the node to add new children
    var turkeyNode = treeview.rootNode.findNode("europe/turkey");
    
    // Prepare new children
    var turkeyCities = [
      new TreeView.TreeNode("Istanbul"),
      new TreeView.TreeNode("Ankara"),  
      new TreeView.TreeNode("Izmir")
    ];
    
    // Add children to the node
    turkeyNode.addRange(turkeyCities);
    // Set node expanded
    turkeyNode.expanded = true;
    // Update treeview with the new node 
    treeview.updateNode(turkeyNode);
  });

  $("#btnRemove").click(function(e) {
      // Find the node to be removed
      var africaNode = treeview.rootNode.findNode("africa");
      if(africaNode) {
        // Remove the node if exists
        treeview.removeNode(africaNode);
      } else {
        alert("Node not found");
      }
  });
```
<a name="setselectednode"></a>

## Set selected node programmatically
Below code works based on **Basic tree** example above. It enables setting a node selected programmatically.

```html
<button id="btnSelectedNode">Set Belgium selected</button>
```

``` javascript
$("#btnSelectedNode").click(function (e) {
  // Keep a reference to old selected node
  var oldSelectedNode = treeview.getSelectedNode();
  // Find new node to select
  var belgiumNode = treeview.rootNode.findNode("europe/belgium");
  // Set new selected node 
  treeview.setSelectedNode(belgiumNode);
  alert(`Node selection changed from ${oldSelectedNode.text} to ${belgiumNode.text}`);
});
```

<a name="contextmenu"></a>

## Context menu
Below code works based on the `source` used in **Basic tree** example above. The sample shows the usage of contextMenu for each node in the treeView. The item associated with the context menu is obtained using `args.get_commandArgument().item` in `menuItemClick` function.


``` javascript
  function menuItemClick(args) {
    // Get the item associated with the context menu
    var node = args.get_commandArgument().item;
    switch (args.get_commandName()) {
      case "open":
        alert(node.path());
        break;
      case "delete":
        confirm(`Are you sure you want to delete ${node.text}?`);
        break;
    }
  }

  function getContextMenuItems() {
    return [
        {
          id: "open",
          text: "Open Details"
        },
        { separator: true },
        {
          id: "delete",
          text: "Delete",
          icon: "icon-delete"
        }
    ];
  }

  // Generate TreeView options
  var treeviewOptions = {
    width: 400,
    height: "100%",
    nodes: convertToTreeNodes(source), // Nodes are defined above
    contextMenu: {
      items: getContextMenuItems(),
      executeAction: menuItemClick,
      arguments: function(contextInfo) {
        return { item: contextInfo.item };
      }
    }
  };
```