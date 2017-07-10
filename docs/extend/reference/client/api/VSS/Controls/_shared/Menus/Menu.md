[!INCLUDE [styleoverrides](../../../../_data/style-overrides.md)]


* [getItem()](#method_getItem)
* [getItems()](#method_getItems)
* [updateCommandStates()](#method_updateCommandStates)


<a name="method_getItem"></a>
<h3 class='method'>getItem()</h3>

Gets the item which has the specified id.


#### Returns

MenuItem

#### Parameters

* `id`: string. ID associated with the menu item.

<a name="method_getItems"></a>
<h3 class='method'>getItems()</h3>

Gets an array of all menu items.


#### Returns

MenuItem[]


<a name="method_updateCommandStates"></a>
<h3 class='method'>updateCommandStates()</h3>

Updates the command states of the items with the specified ids.


#### Returns

void

#### Parameters

* `commands`: ICommand[]. List of commands to update.

