```json
     {
        source: {any},
        expandStates: {number[]},
        header: {boolean},
        height: {string},
        width: {string},
        allowMultiSelect: {boolean},
        allowMoveColumns: {boolean},
        allowTextSelection: {boolean},
        lastCellFillsRemainingContent: {boolean},
        columns: [
            index: {any},
            name: {string},
            canSortBy: {boolean},
            canMove: {boolean},
            width: {number},
            headerCss: {string},
            rowCss: {string},
            text: {string},
            tooltip: {string},
            order: {string},
            hidden: {boolean},
            fixed: {boolean},
            format: {string}
        ],
        gutter: {
            contextMenu: {boolean},
            icon: {
                index: {any},
                tooltipIndex: {any}
            }
        },
        contextMenu: {
            items: {any},
            executeAction: {(args: any): any},
            useBowtieStyle: {boolean},
            columnIndex: {number or string}
        },
        sortOrder: [
            index: {any},
            order: {string}
        ],
        autoSort: {boolean},
        useBowtieStyle: {boolean}
    }
```

Option            | Type    | Default | Notes
------------------|---------|---------|-------------
source|`any`|[]|Data source of the grid. It can be array of arrays ([[], [], [], ...]),  array of objects ([{}, {}, {}, ...])
expandStates|`number[]`||Specifies the expand states of each item in the source. If an item has a total of n descendants; -n makes the item collapsed, n makes the item expanded, 0 means no children and descendants.
header|`boolean`|true|Determines whether the header is displayed or not
height|`string`||Height of the grid in px or %
width|`string`||Width of the grid in px or %
allowMultiSelect|`boolean`|true|Determines whether multiple selection is allowed or not
allowMoveColumns|`boolean`|true|Determines whether moving columns is allowed or not
allowTextSelection|`boolean`|false|Determines whether selecting text is allowed or not
lastCellFillsRemainingContent|`boolean`|false|Determines whether the last cell should fill remaining content (if exists)
columns|`IGridColumn[]`|[]|List of columns to be displayed in the grid
columns.index|`any`|index in the columns array|Index of the column which can be either number or string. If number specified, each item of the data source is expected to be an array. Then array[index] is displayed in the column. If string specified, each item if the data source is expected to be an object. Then object[index] is displayed in the column.
columns.name|`string`||Name of the column used for identification purposes
columns.canSortBy|`boolean`|true|Determines whether moving this column is enabled or not
columns.canMove|`boolean`|true|Determines whether sorting this column is enabled or not
columns.width|`number`|100|Width of the column in pixels
columns.headerCss|`string`||Css class to be added to the header cell
columns.rowCss|`string`||Css class to be added to the cells under this column
columns.text|`string`||Display text of the column
columns.tooltip|`string`||Tooltip text of the column
columns.order|`string`|asc|Specifies how ordering should be performed (&quot;asc&quot; or &quot;desc&quot;)
columns.hidden|`boolean`|false|Determines whether the column should be hidden or not
columns.fixed|`boolean`|false|Determines whether column moving effects this column or not
columns.format|`string`||If the value of cell is Date, format is used (like &#x27;mm/dd/yyyy&#x27;)
gutter|`IGridGutterOptions`|false|Options about the gutter. If specified false, gutter is invisible
gutter.contextMenu|`boolean`||Determines whether a context menu is show in the gutter or not
gutter.icon.index|`any`||String or number value to get the icon value from source item corresponding to current row
gutter.icon.tooltipIndex|`any`||String or number value to get the icon tooltip value from source item corresponding to current row
contextMenu|`IGridContextMenu`||Options about the context menu displayed when gutter clicked
contextMenu.items|`any`||Menu items to be shown when gutter clicked. Value can be a list of menu items or a function which returns an a list of menu items
contextMenu.executeAction|`(args: any): any`||Execute action for the popup menu
contextMenu.useBowtieStyle|`boolean`|false|Specifies whether to use the modern bowtie styling (bowtie styles are in preview and subject to change).
contextMenu.columnIndex|`number or string`||Column index for the context menu, if using bowtie styling
sortOrder|`IGridSortOrder[]`|[]|Initial sort info for the grid
sortOrder.index|`any`||Refers to column index
sortOrder.order|`string`|asc|Determines whether to sort ascending (default) or descending
autoSort|`boolean`|true|Specifies whether grid should be sorted initially using the sortOrder option
useBowtieStyle|`boolean`|false|Specifies whether to use the modern bowtie styling (bowtie styles are in preview and subject to change).
