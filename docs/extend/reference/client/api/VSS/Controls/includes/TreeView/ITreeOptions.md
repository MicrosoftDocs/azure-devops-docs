```json
     {
        nodes: {TreeNode[]},
        showIcons: {boolean},
        clickToggles: {boolean},
        clickSelects: {boolean},
        droppable: {any},
        draggable: {any},
        useBowtieStyle: {boolean}
    }
```

Option            | Type    | Default | Notes
------------------|---------|---------|-------------
nodes|`TreeNode[]`||List of nodes used by TreeView for rendering. TreeView only accepts nodes of concrete type TreeNode. Existing node hierarchy needs to be converted to TreeNode before providing to TreeView, see samples for details.
showIcons|`boolean`|true|Determines whether icons of the nodes are visible or not.
clickToggles|`boolean`|false|Determines whether clicking a node expands/collapses the node or not (if the node has children).
clickSelects|`boolean`|true|Determines whether clicking a node selects the node or not.
droppable|`any`||Defines &quot;droppable&quot; options for drag and drop (see jQuery UI droppable options)
draggable|`any`||Defines &quot;draggable&quot; options for drag and drop (see jQuery UI draggable options)
useBowtieStyle|`boolean`|false|Specifies whether to use the modern bowtie styling (bowtie styles are in preview and subject to change).
