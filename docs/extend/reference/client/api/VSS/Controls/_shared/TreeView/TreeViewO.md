[!INCLUDE [styleoverrides](../../../../_data/style-overrides.md)]




* [getSelectedNode()](#method_getSelectedNode)
* [setSelectedNode()](#method_setSelectedNode)
* [removeNode()](#method_removeNode)
* [updateNode()](#method_updateNode)
* [getNodeFromElement()](#method_getNodeFromElement)


<a name="method_getSelectedNode"></a>
<h3 class='method'>getSelectedNode()</h3>

Gets the currently selected node.


#### Returns

TreeNode


<a name="method_setSelectedNode"></a>
<h3 class='method'>setSelectedNode()</h3>

Sets the specified node as selected.


#### Returns

void

#### Parameters

* `node`: TreeNode. Node to be selected.
* `suppressChangeEvent`: boolean. Optional. If specified true, &quot;selectionChanged&quot; event doesn't fire.

<a name="method_removeNode"></a>
<h3 class='method'>removeNode()</h3>

Removes the specified node from the tree.


#### Returns

void

#### Parameters

* `node`: TreeNode. Node to be removed.

<a name="method_updateNode"></a>
<h3 class='method'>updateNode()</h3>

Update the specified node by refreshing the child nodes if anything is added or removed.


#### Returns

void

#### Parameters

* `node`: TreeNode. Node to be updated.

<a name="method_getNodeFromElement"></a>
<h3 class='method'>getNodeFromElement()</h3>

Gets the node associated with the provided DOM/JQuery element.


#### Returns

TreeNode

#### Parameters

* `element`: any. Element to get the node for.

