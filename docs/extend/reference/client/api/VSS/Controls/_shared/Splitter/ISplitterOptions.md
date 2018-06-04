```json
     {
        initialSize: {number},
        fixedSide: {string},
        vertical: {boolean},
        collapsedLabel: {string},
        enableToggleButton: {boolean},
        minWidth: {number},
        maxWidth: {number}
    }
```

Option            | Type    | Default | Notes
------------------|---------|---------|-------------
initialSize|`number`||Initial size of the grid in px.
fixedSide|`string`|left|Specifies which side of the splitter is fixed (left or right).
vertical|`boolean`|true|Specifies whether the split should be vertical or not.
collapsedLabel|`string`||Text displayed on splitter handle when toggle button is enabled and splitter is collapsed.
enableToggleButton|`boolean`|false|Enables the toggle button which displays a button for expand/collapse.
minWidth|`number`||Sets the minimum width of the splitter&#x27;s fixed side.
maxWidth|`number`||Sets the maximum width of the splitter&#x27;s fixed side.
