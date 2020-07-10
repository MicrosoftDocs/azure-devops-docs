[!INCLUDE [styleoverrides](../../../../_data/style-overrides.md)]


* [setMinWidth()](#method_setMinWidth)
* [setMaxWidth()](#method_setMaxWidth)
* [resize()](#method_resize)
* [expand()](#method_expand)
* [collapse()](#method_collapse)
* [isExpanded()](#method_isExpanded)
* [getFixedSidePixels()](#method_getFixedSidePixels)
* [noSplit()](#method_noSplit)
* [split()](#method_split)
* [vertical()](#method_vertical)
* [horizontal()](#method_horizontal)
* [setCollapsedLabel()](#method_setCollapsedLabel)


<a name="method_setMinWidth"></a>
<h3 class='method'>setMinWidth()</h3>

Sets the minimum width of the splitter&#x27;s fixed side.


#### Returns

void

#### Parameters

* `minWidth`: number. minimum number of pixels the fixed side fills.

<a name="method_setMaxWidth"></a>
<h3 class='method'>setMaxWidth()</h3>

Sets the maximum width of the splitter&#x27;s fixed side.


#### Returns

void

#### Parameters

* `maxWidth`: number. maximum number of pixels the fixed side fills.

<a name="method_resize"></a>
<h3 class='method'>resize()</h3>

Resize the fixed side of the splitter to the specified size.


#### Returns

void

#### Parameters

* `newSize`: any. New fixed side size in px.
* `suppressFireResize`: boolean. Optional. Determines whether to suppress firing resize event or not.
* `useAnimation`: boolean. Optional. Determines whether to use animation during resize or not.

<a name="method_expand"></a>
<h3 class='method'>expand()</h3>

Expands the splitter.


#### Returns

void


<a name="method_collapse"></a>
<h3 class='method'>collapse()</h3>

Collapses the splitter.


#### Returns

void


<a name="method_isExpanded"></a>
<h3 class='method'>isExpanded()</h3>

Specifies whether the splitter is expanded or not.


#### Returns

boolean


<a name="method_getFixedSidePixels"></a>
<h3 class='method'>getFixedSidePixels()</h3>

Gets the fixed side size in px.


#### Returns

number


<a name="method_noSplit"></a>
<h3 class='method'>noSplit()</h3>

Disables the split.


#### Returns

void

#### Parameters

* `animate`: boolean. Optional. 

<a name="method_split"></a>
<h3 class='method'>split()</h3>

Enables the split.


#### Returns

void

#### Parameters

* `animate`: boolean. Optional. Determines split operation is animated or not (default false).
* `defaultExpandToPixels`: number. Optional. Specified value used for split amount. If not specified default value is used.

<a name="method_vertical"></a>
<h3 class='method'>vertical()</h3>

Changes split orientation to vertical.


#### Returns

void


<a name="method_horizontal"></a>
<h3 class='method'>horizontal()</h3>

Changes split orientation to horizontal.


#### Returns

void


<a name="method_setCollapsedLabel"></a>
<h3 class='method'>setCollapsedLabel()</h3>

Sets the label that is shown when the splitter is collapsed


#### Returns

void

#### Parameters

* `labelText`: string. Text displayed when the splitter is collapsed (null/empty for none)

