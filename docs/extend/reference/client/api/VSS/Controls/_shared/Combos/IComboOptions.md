```json
     {
        id: {string},
        type: {string},
        mode: {string},
        value: {string},
        label: {string},
        source: {any[]},
        enabled: {boolean},
        allowEdit: {boolean},
        cssClass: {string},
        iconCss: {string},
        inputCss: {string},
        invalidCss: {string},
        disabledCss: {string},
        dropButtonHoverCss: {string},
        disableTextSelectOnFocus: {boolean},
        change: {(): any},
        indexChanged: {(index: number): void}
    }
```

Option            | Type    | Default | Notes
------------------|---------|---------|-------------
id|`string`||Id added to the underlying input for accessibility.
type|`string`|list|Type of the combo. It can be &#x27;list&#x27;, &#x27;date-time&#x27;, &#x27;multi-value&#x27;, &#x27;tree&#x27; or &#x27;treeSearch&#x27;.
mode|`string`||Mode of the combo. It can be &#x27;text&#x27; or &#x27;drop&#x27;. Used by the combo of &#x27;list&#x27; type. Determines whether to show drop icon or not.
value|`string`||Sets the initial value for the combo.
label|`string`||Allows screen readers to read combo value. Should be used along with id.
source|`any[]`||Data source of the combo.
enabled|`boolean`||Determines whether the combo is enabled or not.
allowEdit|`boolean`||Specifies whether the combo can be edited or not. The difference from enabled is items in the dropdown can be selected.
cssClass|`string`||Extra css class applied to combo.
iconCss|`string`||Css class for drop icon.
inputCss|`string`||Css class for the input.
invalidCss|`string`||Css class applied for invalid state.
disabledCss|`string`||Css class applied for disabled state.
dropButtonHoverCss|`string`||Css class applied to drop button when hovered.
disableTextSelectOnFocus|`boolean`||Set to &#x27;true&#x27; to disable selecting all text in the combobox when it gets focus from another app
change|`(): any`||Called when the text of the combo changes.
indexChanged|`(index: number): void`||Called when selected item changes. Argument is the index of the selected item.
