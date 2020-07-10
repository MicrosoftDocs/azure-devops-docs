[!INCLUDE [styleoverrides](../../../../_data/style-overrides.md)]




* [getText()](#method_getText)
* [setText()](#method_setText)
* [getValue&lt;TValue&gt;()](#method_getValue)
* [toggleDropDown()](#method_toggleDropDown)
* [setSource()](#method_setSource)
* [getEnabled()](#method_getEnabled)
* [setEnabled()](#method_setEnabled)
* [getMode()](#method_getMode)
* [setMode()](#method_setMode)
* [setType()](#method_setType)
* [getComboType()](#method_getComboType)
* [setInvalid()](#method_setInvalid)


<a name="method_getText"></a>
<h3 class='method'>getText()</h3>

Gets the current text value of the combo.


#### Returns

string


<a name="method_setText"></a>
<h3 class='method'>setText()</h3>

Sets the text of the combo.


#### Returns

void

#### Parameters

* `text`: string. New value to set.
* `fireEvent`: boolean. Optional. Determines whether to fire change event or not (default false).

<a name="method_getValue"></a>
<h3 class='method'>getValue&lt;TValue&gt;()</h3>

Gets the underlying value of the combo. If the type is &#x27;list&#x27;, value is string. If the type is &#x27;date-time&#x27;, value is Date. If the type is &#x27;multi-value&#x27;, value is string[].


#### Returns

TValue


<a name="method_toggleDropDown"></a>
<h3 class='method'>toggleDropDown()</h3>

Programmatically toggles the dropdown.


#### Returns

void


<a name="method_setSource"></a>
<h3 class='method'>setSource()</h3>

Sets a new source for the combo.


#### Returns

void

#### Parameters

* `source`: any[] or Function. New source for the combo.

<a name="method_getEnabled"></a>
<h3 class='method'>getEnabled()</h3>

Gets the enabled state of the combo.


#### Returns

boolean


<a name="method_setEnabled"></a>
<h3 class='method'>setEnabled()</h3>

Sets the enabled state of the combo.


#### Returns

void

#### Parameters

* `value`: boolean. True for enabled, false for disabled.

<a name="method_getMode"></a>
<h3 class='method'>getMode()</h3>

Gets the mode of the combo.


#### Returns

string


<a name="method_setMode"></a>
<h3 class='method'>setMode()</h3>

Sets the mode of the combo.


#### Returns

void

#### Parameters

* `value`: string. &#x27;drop&#x27; or &#x27;text&#x27;.

<a name="method_setType"></a>
<h3 class='method'>setType()</h3>

Sets the type of the combo.


#### Returns

void

#### Parameters

* `type`: string. 

<a name="method_getComboType"></a>
<h3 class='method'>getComboType()</h3>

Gets the type of the combo.


#### Returns

string


<a name="method_setInvalid"></a>
<h3 class='method'>setInvalid()</h3>

Sets the invalid state of the combo.


#### Returns

void

#### Parameters

* `value`: boolean. True for invalid, false for valid.

