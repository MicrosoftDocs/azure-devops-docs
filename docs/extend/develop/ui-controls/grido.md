---
title: Use the Grid Control | Extensions for Azure DevOps Services
description: Use the grid control to show rows and columns items that can be sorted, resized and moved in your app for Azure DevOps Services.
ms.assetid: 9933E798-3D75-A5FD-919E-F38EA313872B
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Use the grid control

This page shows different samples about the grid control.

**Go to [API Reference](../../reference/client/controls/grid.md) for more details.**

<a name="basic"></a>

## Grid height, grid width, and columns
This sample shows the basic usage of the grid. Note that, `canSortBy` is set to false for "Column 2" which disables sorting for that column.

``` typescript
  import Controls = require("VSS/Controls");
  import Grids = require("VSS/Controls/Grids");

  var container = $(".sample-container");

  var gridOptions: Grids.IGridOptions = {
    height: "100%",
    width: "100%",
    source: function () {
      var result = [], i;
      for (i = 0; i < 100; i++) {
        result[result.length] = [i, "Column 2 text" + i, "Column 3 " + Math.random()];
      }

      return result;
      } (),
      columns: [
        { text: "Column 1", index: 0, width: 50 },
        { text: "Column 2", index: 1, width: 200, canSortBy: false },
        { text: "Column 3", index: 2, width: 450 }]
  };

  Controls.create(Grids.Grid, container, gridOptions);
```

<a name="update"></a>
## Update grid source

This sample shows how the grid can be updated after it is initialized using `setDataSource`.
``` typescript
  import Controls = require("VSS/Controls");
  import Grids = require("VSS/Controls/Grids");

  var container = $(".sample-container");

  var source = [
    { name: "Germany", population: 8e7 },
    { name: "Turkey", population: 75e6 },
    { name: "Russia", population: 15e7 },
    { name: "Spain", population: 45e6 }
  ];

  var gridOptions: Grids.IGridOptions = {
    height: "300px",
    width: "500px",
    source: source,
    columns: [
      { text: "Country", width: 200, index: "name" },
      { text: "Population", width: 200, index: "population" }
    ]
  };

  var grid = Controls.create(Grids.Grid, container, gridOptions);

  // Update source 5 seconds later
  window.setTimeout(() => {
    source.push({ name: "Belgium", population: 1e7 });
    source.push({ name: "France", population: 64e6 });
    grid.setDataSource(source);

  }, 5000);
```

<a name="contextmenu"></a>
## Context menu

This sample shows the usage of contextMenu for each row in the grid. The item associated with the context menu is obtained using `args.get_commandArgument().item` in `menuItemClick` function.
``` typescript
  import Controls = require("VSS/Controls");
  import Grids = require("VSS/Controls/Grids");
  import Menus = require("VSS/Controls/Menus");

  var container = $(".sample-container");

  function menuItemClick(args) {
    // Get the item associated with the context menu
    var person = args.get_commandArgument().item;
    switch (args.get_commandName()) {
      case "open":
        alert(JSON.stringify(person));
        break;
      case "delete":
        confirm("Are you sure you want to delete " + person[0] + "?");
        break;
    }
  }

  function getContextMenuItems(): Menus.IMenuItemSpec[] {
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
      },
    ];
  }

  var gridOptions: Grids.IGridOptions = {
    height: "300px",
    width: "500px",
    source: [
      ["Julie E. Baker", new Date(1946, 3, 24), "B+"],
      ["Patrica B. Allen", new Date(1991, 1, 28), "AB+"],
      ["Scott A. Reeves", new Date(1984, 1, 29), "0+"],
      ["Debra D. Carter", new Date(1962, 7, 2), "A+"],
      ["Shari A. Lefebvre", new Date(1951, 7, 25), "0+"]
    ],
    columns: [
      { text: "Name", width: 200 },
      { text: "Date of Birth", width: 100, format: "d" },
      { text: "Blood Type", width: 100 }
    ],
    gutter: {
      contextMenu: true
    },
    contextMenu: {
      items: getContextMenuItems(),
      executeAction: menuItemClick,
      arguments: (contextInfo) => {
        return { item: contextInfo.item };
      }
    }
  };

  Controls.create(Grids.Grid, container, gridOptions);
```

<a name="open"></a>
## Open row details

This sample shows how an action can be executed when a row is opened. `openRowDetail` delegate is executed when the row is double clicked or enter key is hit when a row has the focus.
``` typescript
  import Controls = require("VSS/Controls");
  import Grids = require("VSS/Controls/Grids");

  var container = $(".item-list");

  var gridOptions: Grids.IGridOptions = {
    height: "100%",
    width: "100%",
    source: [
      { fn: "Julie E. Baker", dob: new Date(1946, 3, 24), nationality: "US" },
      { fn: "Patrica B. Allen", dob: new Date(1991, 1, 28), nationality: "CA" },
      { fn: "Scott A. Reeves", dob: new Date(1984, 1, 29), nationality: "CA" },
      { fn: "Debra D. Carter", dob: new Date(1962, 7, 2), nationality: "CA" },
      { fn: "Shari A. Lefebvre", dob: new Date(1951, 7, 25), nationality: "US" },
      { fn: "Ahmet Yilmaz", dob: new Date(1965, 1, 2), nationality: "TR" },
      { fn: "Albert Einstein", dob: new Date(1879, 2, 14), nationality: "DE" },
      { fn: "Bastian Schweinsteiger", dob: new Date(1984, 7, 1), nationality: "DE" }
    ],
    columns: [
      { text: "Full Name", index: "fn", width: 200 },
      { text: "Date of Birth", index: "dob", width: 100, format: "d" }
    ],
    openRowDetail: (index: number) => {
      // Double clicking row or hitting enter key when the row is selected
      // will cause this function to be executed
      var person = grid.getRowData(index);

      // Display item details
      $(".item-details").text(JSON.stringify(person));
    }
  };

  var grid = Controls.create(Grids.Grid, container, gridOptions);
```
<a name="hierarchy"></a>
## Hierarchy

By default first column is indented. Setting `indent: true` for a particular column will cause that column to have indentation for hierarchy. See column options in the below sample.
Settings `collapsed: true` will get a parent item to be displayed collapsed. To update the data source, use `gridSource.update(newItems);`.
``` typescript
  import Controls = require("VSS/Controls");
  import Grids = require("VSS/Controls/Grids");

  var container = $(".sample-container");

  var gridItems: Grids.IGridHierarchyItem[] = [
    { id: "001", name: "Baking" },
    {
      id: "002", name: "Beverages", children: [
        { id: "003", name: "Coffee" },
        {
          id: "004", name: "Tea", collapsed: true, children: [
            { id: "005", name: "Green Tea" },
            { id: "006", name: "Black Tea" },
            { id: "007", name: "Herbal Tea" },
            { id: "008", name: "Fruit Tea" },
            { id: "009", name: "Decaffeinated" }
          ]
        },
        { id: "010", name: "Water" },
        { id: "011", name: "Hot Cocoa" },
        {
          id: "012", name: "Sports & Energy Drinks", children: [
            { id: "013", name: "Liquids" },
            { id: "014", name: "Energy" },
            { id: "015", name: "Specialty" },
            { id: "016", name: "Other" }
          ]
        },
        { id: "017", name: "Soft Drinks" }
      ]
    },
    { id: "018", name: "Frozen Foods" },
    { id: "019", name: "Candy" }
  ];

  var gridOptions: Grids.IGridOptions = {
    height: "600px",
    width: "450px",
    columns: [
      { text: "Id", index: "id", width: 60 },
      { text: "Product Name", index: "name", width: 200, indent: true }
    ]
  };

  var grid = Controls.create<Grids.Grid, Grids.IGridOptions>(Grids.Grid, container, gridOptions);
  var gridSource = new Grids.GridHierarchySource(gridItems);
  grid.setDataSource(gridSource);
```

<a name="formatting"></a>
## Conditional formatting

This sample shows the customization of the grid cells. "Total" column is a calculated column and styled differently in `getCellContents` method.
``` typescript
  import Controls = require("VSS/Controls");
  import Grids = require("VSS/Controls/Grids");
  import Date_Utils = require("VSS/Utils/Date");
  import Number_Utils = require("VSS/Utils/Number");

  var container = $(".sample-container");

  function getColumns() {
    return [
      {
        index: "region",
        text: "Region",
        width: 80
      },
      {
        index: "rep",
        text: "Representative",
        width: 80
      },
      {
        index: "orderDate",
        text: "Order Date",
        width: 100,
        getCellContents: function (
          rowInfo, 
          dataIndex, 
          expandedState, 
          level, 
          column, 
          indentIndex, 
          columnOrder) {
            
          var orderDate = this.getColumnValue(dataIndex, column.index);
          return $("<div class='grid-cell'/>")
            .width(column.width || 100)
            .text(orderDate ? Date_Utils.localeFormat(orderDate, "y") : "");
        }
      },
      {
        index: "item",
        text: "Item",
        width: 80
      },
      {
        index: "unit",
        text: "Units",
        width: 60
      },
      {
        index: "cost",
        text: "Cost",
        width: 60,
        getCellContents: function (
          rowInfo, 
          dataIndex, 
          expandedState, 
          level, 
          column, 
          indentIndex, 
          columnOrder) {
          
          var cost = this.getColumnValue(dataIndex, "cost") || 0;
          return $("<div class='grid-cell'/>")
            .width(column.width || 150)
            .text(Number_Utils.localeFormat(cost, "C"));
        }
      },
      {
        index: "total",
        text: "Total",
        width: 150,
        getCellContents: function (
          rowInfo, 
          dataIndex, 
          expandedState, 
          level, 
          column, 
          indentIndex, 
          columnOrder) {
            
          var unit = this.getColumnValue(dataIndex, "unit") || 0,
            cost = this.getColumnValue(dataIndex, "cost") || 0,
            total = unit * cost;

          return $("<div class='grid-cell total'/>")
            .css("font-weight", "bold")
            .css("font-size", "11pt")
            .css("color", total >= 300 ? "red" : "green")
            .width(column.width || 100)
            .text(Number_Utils.localeFormat((unit * cost), "C"));
        },
        comparer: function (column, order, item1, item2) {
          var total1 = (item1.unit || 0) * (item1.cost || 0),
            total2 = (item2.unit || 0) * (item2.cost || 0);

          return total1 - total2;
        }
      }
    ];
  }

  function getSortOder() {
    return [{ index: "orderDate", order: "asc" }];
  }

  function getDataSource() {
    return [
      { orderDate: new Date(2010, 0, 6), region: 'Quebec', rep: 'Jones', item: 'Pencil', unit: 95, cost: 1.99 },
      { orderDate: new Date(2010, 0, 23), region: 'Ontario', rep: 'Kivell', item: 'Binder', unit: 50, cost: 19.99 },
      { orderDate: new Date(2010, 1, 9), region: 'Ontario', rep: 'Jardine', item: 'Pencil', unit: 36, cost: 4.99 },
      { orderDate: new Date(2010, 1, 26), region: 'Ontario', rep: 'Gill', item: 'Pen', unit: 27, cost: 19.99 },
      { orderDate: new Date(2010, 2, 15), region: 'Alberta', rep: 'Sorvino', item: 'Pencil', unit: 56, cost: 2.99 },
      { orderDate: new Date(2010, 3, 1), region: 'Quebec', rep: 'Jones', item: 'Binder', unit: 60, cost: 4.99 },
      { orderDate: new Date(2010, 3, 18), region: 'Ontario', rep: 'Andrews', item: 'Pencil', unit: 75, cost: 1.99 },
      { orderDate: new Date(2010, 4, 5), region: 'Ontario', rep: 'Jardine', item: 'Pencil', unit: 90, cost: 4.99 },
      { orderDate: new Date(2010, 4, 22), region: 'Alberta', rep: 'Thompson', item: 'Pencil', unit: 32, cost: 1.99 },
      { orderDate: new Date(2010, 5, 8), region: 'Quebec', rep: 'Jones', item: 'Binder', unit: 60, cost: 8.99 },
      { orderDate: new Date(2010, 5, 25), region: 'Ontario', rep: 'Morgan', item: 'Pencil', unit: 90, cost: 4.99 },
      { orderDate: new Date(2010, 6, 12), region: 'Quebec', rep: 'Howard', item: 'Binder', unit: 29, cost: 1.99 },
      { orderDate: new Date(2010, 6, 29), region: 'Quebec', rep: 'Parent', item: 'Binder', unit: 81, cost: 19.99 }
    ];
  }

  var gridOptions: Grids.IGridOptions = {
    width: "100%",
    height: "100%",
    columns: getColumns(),
    sortOrder: getSortOder(),
    source: getDataSource()
  };

  Controls.create(Grids.Grid, container, gridOptions);
```

<a name="dragdrop"></a>
## Drag & drop within grid
This sample shows dragging grid rows and dropping them to the same grid which basically changes the ordering of grid item.

``` css
  .row-drag-helper {
    background-color: orange;
    padding: 5px;
    cursor: move;
    padding-left: 30px;
  }
  
  .lower-drop-guide {
    border-bottom-color: orange;
  }
  
  .upper-drop-guide {
    border-top-color: orange;
  }
```

``` typescript
  import Controls = require("VSS/Controls");
  import Grids = require("VSS/Controls/Grids");
  
  var container = $(".sample-container");
  
  interface DragStartInfo extends Offset {
    dataIndex: number;
    canvasWidth: number;
  }
  
  interface DropTargetInfo {
    dataIndex: number;
    below: boolean;
  }
  
  interface MoveCompleteDelegate {
    (oldIndex: number, newIndex: number): void;
  }
  
  interface Offset {
    left: number;
    top: number;
  }
  
  class DragDropHandler {
    private _gridCanvas: JQuery;
    private _gridRowHeight: number;
    private _cursorOffset: Offset;
    private _dragStartInfo: DragStartInfo;
    private _lastDropTarget: JQuery;
  
    constructor(
      public grid: Grids.Grid,
      public dragdropScope: string,
      public dragdropTextProvider: (element: any) => string,
      public moveCompleteDelegate: MoveCompleteDelegate) {
  
      this.grid.setupDragDrop(this._getDraggableOptions(), this._getDroppableOptions());
      this._gridCanvas = this.grid.getElement().find(".grid-canvas");
      this._gridRowHeight = this.grid._rowHeight || 1;
    }
  
    private _resetLastDropTarget(): void {
      if (this._lastDropTarget) {
        this._lastDropTarget.removeClass("upper-drop-guide lower-drop-guide");
        this._lastDropTarget = null;
      }
    }
  
    private _getRowDataIndex(offset: Offset, dragStartInfo: DragStartInfo): DropTargetInfo {
      var canvasScrollTop = this._gridCanvas.scrollTop(),
        canvasScrollLeft = this._gridCanvas.scrollLeft(),
        offset = <Offset>{
          top: offset.top - dragStartInfo.top + canvasScrollTop + this._cursorOffset.top,
          left: offset.left - dragStartInfo.left + canvasScrollLeft + this._cursorOffset.left
        };
    
      // The left or right of the canvas, invalid drop
      if (offset.left <= 0 || offset.left > dragStartInfo.canvasWidth) {
        return null;
      }
  
      var itemsHeight = this.grid._count * this._gridRowHeight;
      // Above or below the canvas, invalid drop
      if (offset.top <= 0 || offset.top > itemsHeight) {
        return null;
      }
  
      var dataIndex = Math.floor((offset.top - 1) / this._gridRowHeight);
      // Dragged item and drop target is same, invalid drop
      if (dataIndex === dragStartInfo.dataIndex) {
        return null;
      }
    
      // Valid drop, return index of the drop target
      return {
        dataIndex: dataIndex,
        below: dataIndex > dragStartInfo.dataIndex
      };
  
    }
  
    private _getDraggableOptions(): any {
      this._cursorOffset = { left: 12, top: 12 };
  
      return {
        cursorAt: this._cursorOffset,
        axis: "",
        appendTo: document.body,
        scroll: false,
        scrollables: [".grid-canvas"],
        scrollablesAxis: "y",
        scope: this.dragdropScope,
        distance: 10,
        helper: (evt: JQueryEventObject, ui: any) => {
          var rowData = this.grid.getRowData(ui.draggingRowInfo.dataIndex);
          return $("<div />")
            .addClass("row-drag-helper")
            .text(this.dragdropTextProvider(rowData));
        },
        start: (evt: JQueryEventObject, ui: any) => {
          this._dragStartInfo = {
            top: ui.offset.top,
            left: ui.offset.left,
            dataIndex: ui.draggingRowInfo.dataIndex,
            canvasWidth: this._gridCanvas.width()
          };
        },
        stop: (evt: JQueryEventObject, ui: any) => {
          this._dragStartInfo = null;
          this._resetLastDropTarget();
        },
        drag: (evt: JQueryEventObject, ui: any) => {
          if (this._dragStartInfo) {
            this._resetLastDropTarget();
            var dropTargetInfo = this._getRowDataIndex(<Offset>ui.offset, this._dragStartInfo);
            if (dropTargetInfo) {
              this._lastDropTarget = <JQuery>this.grid.getRowInfo(dropTargetInfo.dataIndex).row;
              this._lastDropTarget.addClass(dropTargetInfo.below ? "lower-drop-guide" : "upper-drop-guide");
            }
          }
        }
      };
    }
  
    private _getDroppableOptions(): any {
      return {
        hoverClass: "",
        tolerance: "pointer",
        scope: this.dragdropScope,
        drop: (evt: JQueryEventObject, ui: any) => {
          var oldIndex = <number>ui.draggingRowInfo.dataIndex,
            newIndex = <number>ui.droppingRowInfo.dataIndex;
    
          // If different than selected index, perform move operation
          if (oldIndex !== newIndex && $.isFunction(this.moveCompleteDelegate)) {
            this.moveCompleteDelegate(oldIndex, newIndex);
          }
        }
      };
    }
  }
  
  var gridSource = function() {
    var result = [];
    for (var i = 0; i < 10; i++) {
      result.push([i, "Text " + i, Math.random()]);
    }
    return result;
  } ();
  
  var gridOptions: Grids.IGridOptions = {
    header: false,
    height: "300px",
    width: "500px",
    source: gridSource,
    columns: [
      { text: "Column 1", index: 0, width: 80 },
      { text: "Column 2", index: 1, width: 100 },
      { text: "Column 3", index: 2, width: 200 }]
  };
  
  var grid = Controls.create(Grids.Grid, container, gridOptions);
  var dragDrop = new DragDropHandler(grid, "my-scope", (item: any): string => {
    return `Moving item: ${JSON.stringify(item) }`;
  }, (oldIndex: number, newIndex) => {
    // Remove dragged item from the list
    var item = gridSource.splice(oldIndex, 1);
            
    // Add dragged item to the new location
    gridSource.splice(newIndex, 0, item[0]);
            
    // Update grid
    grid.setDataSource(gridSource);
            
    // Keep dropped item selected
    grid.setSelectedDataIndex(newIndex);
  });
```

<a name="dropoutside"></a>
## Drag & drop outside of the grid
This sample shows dragging grid rows and dropping them to an outside target.

``` html
  <div class="drop-target"></div>
```

``` css
  .row-drag-helper {
    background-color: orange;
    padding: 5px;
    cursor: move;
    padding-left: 30px;
  }
  
  .drop-target {
    position: absolute;
    top:20px;
    right: 20px;
    border: 2px dashed blue;
    width: 300px;
    height: 200px;
    overflow: auto;
  }
  
  
  .drop-target::before {
    content: "drop here";
    position:absolute;
    right: 5px;
    top: 0;
    color: blue;
    font-size: 14pt;
    
  }
  
  .drop-target.active {
    background-color: lightgreen
  }
```

``` typescript
  import Controls = require("VSS/Controls");
  import Grids = require("VSS/Controls/Grids");
  
  var container = $(".sample-container");
  var scope = "my-scope";
  
  var gridOptions: Grids.IGridOptions = {
      header: false,
      height: "300px",
      width: "500px",
      source: function () {
      var result = [];
      for (var i = 0; i < 10; i++) {
        result.push([i, "Text " + i, Math.random()]);
      }
      return result;
    } (),
      columns: [
          { text: "Column 1", index: 0, width: 80 },
          { text: "Column 2", index: 1, width: 100 },
          { text: "Column 3", index: 2, width: 200 }],
  
    draggable: {
      cursorAt: { left: 12, top: 12 },
      axis: "",
      containment: "",
      appendTo: document.body,
      revert: "invalid",
      refreshPositions: true,
      scroll: false,
      scope: scope,
      distance: 10,
      helper: (evt: JQueryEventObject, ui: any) => {
        var rowData = grid.getRowData(ui.draggingRowInfo.dataIndex);
        var $helper = $("<div />")
          .addClass("row-drag-helper")
          .text(`Moving item: ${JSON.stringify(rowData[1]) }`);
  
        $helper.data("rowData", rowData);
        return $helper;
      }
    }
  };
  
  var grid = Controls.create(Grids.Grid, container, gridOptions);
  
  $(".drop-target").droppable({
    scope: scope,
    over: function (e, ui) {
      var $dropTarget = $(e.target);
      $dropTarget.addClass("active");
    },
    out: function (e, ui) {
      var $dropTarget = $(e.target);
      $dropTarget.removeClass("active");
    },
    drop: function (e, ui) {
      var $dropTarget = $(e.target);
      $dropTarget.removeClass("active");
  
      var $helper = ui.helper;
      var rowData = $helper.data("rowData");
      $("<div />").appendTo($dropTarget).text(JSON.stringify(rowData));
    }
  });
```
