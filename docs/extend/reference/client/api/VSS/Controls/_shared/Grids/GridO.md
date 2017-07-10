[!INCLUDE [styleoverrides](../../../../_data/style-overrides.md)]




* [getSelectionCount()](#method_getSelectionCount)
* [setDataSource()](#method_setDataSource)
* [setDataSource()](#method_setDataSource)
* [getRowInfo()](#method_getRowInfo)
* [getRowData()](#method_getRowData)
* [getColumns()](#method_getColumns)
* [getSortOrder()](#method_getSortOrder)
* [setColumnOptions()](#method_setColumnOptions)
* [expandAll()](#method_expandAll)
* [collapseAll()](#method_collapseAll)
* [expandByLevel()](#method_expandByLevel)
* [collapseByLevel()](#method_collapseByLevel)
* [tryToggle()](#method_tryToggle)
* [getContextMenuRowInfo()](#method_getContextMenuRowInfo)


<a name="method_getSelectionCount"></a>
<h3 class='method'>getSelectionCount()</h3>

Gets the number of selected items.


#### Returns

number


<a name="method_setDataSource"></a>
<h3 class='method'>setDataSource()</h3>

Sets the source of the grid using GridSource object.


#### Returns

void

#### Parameters

* `source`: IGridSource. GridSource object to set the grid source.

<a name="method_setDataSource"></a>
<h3 class='method'>setDataSource()</h3>

Sets the data source, expands states, columns and sort order of the grid.


#### Returns

any

#### Parameters

* `source`: any[]. Optional. New source for the grid (See grid options for details).
* `expandStates`: any[]. Optional. Expand states for the new source. If source is not in hierarchical structure, specify null (See grid options for details).
* `columns`: IGridColumn[]. Optional. New columns for the grid (See grid options for details).
* `sortOrder`: IGridSortOrder[]. Optional. New sort order for the grid (See grid options for details).
* `selectedIndex`: number. Optional. Index of the rows to be selected after new data source is set.
* `suppressRedraw`: boolean. Optional. If true, grid is not redrawn after data source is set.

<a name="method_getRowInfo"></a>
<h3 class='method'>getRowInfo()</h3>

Gets the information about a row associated with the given data index.

Returns a rowInfo object containing rowIndex, dataIndex and a jQuery wrapper for the actual row.


#### Returns

IGridRowInfo

#### Parameters

* `dataIndex`: number. The data index for the record to retrieve.

<a name="method_getRowData"></a>
<h3 class='method'>getRowData()</h3>

Gets the data being used to display the row at the provided data index.


#### Returns

any

#### Parameters

* `dataIndex`: number. The data index for the record to retrieve.

<a name="method_getColumns"></a>
<h3 class='method'>getColumns()</h3>

Gets the columns currently being displayed in the grid.


#### Returns

IGridColumn[]


<a name="method_getSortOrder"></a>
<h3 class='method'>getSortOrder()</h3>

Gets the current sort order being used in the grid.


#### Returns

IGridSortOrder[]


<a name="method_setColumnOptions"></a>
<h3 class='method'>setColumnOptions()</h3>

Set new column info for the column associated with the specified column name.


#### Returns

void

#### Parameters

* `columnName`: string. Name of the column to change the options.
* `options`: IGridColumn. Optional. New column options.

<a name="method_expandAll"></a>
<h3 class='method'>expandAll()</h3>

Expands all rows of the grid (if source data is hierarchical).


#### Returns

void


<a name="method_collapseAll"></a>
<h3 class='method'>collapseAll()</h3>

Collapses all rows of the grid (if source data is hierarchical).


#### Returns

void


<a name="method_expandByLevel"></a>
<h3 class='method'>expandByLevel()</h3>

Expands all rows at or below specified level (if source data is hierarchical).


#### Returns

void

#### Parameters

* `level`: number. Level to expand.

<a name="method_collapseByLevel"></a>
<h3 class='method'>collapseByLevel()</h3>

Collapses all rows at or below specified level (if source data is hierarchical).


#### Returns

void

#### Parameters

* `level`: number. Level to collapse.

<a name="method_tryToggle"></a>
<h3 class='method'>tryToggle()</h3>

Expand or collapse node(s), and set selection focus at a given target index or at the current selected index as default behavior.


#### Returns

boolean

#### Parameters

* `expand`: boolean. If true, expands the node, otherwise collapsed.
* `applyToAllRows`: boolean. True to expand or collapse all nodes, false to expand or collapse the node at a given target index, or at the current selected index as default behavior.
* `targetIndex`: number. Optional. The node index to be expanded or collapsed, and get selection focus.

<a name="method_getContextMenuRowInfo"></a>
<h3 class='method'>getContextMenuRowInfo()</h3>

Gets info about the row on which context menu is opened.

If no context menu is open, returns null.


#### Returns

IGridRowInfo


