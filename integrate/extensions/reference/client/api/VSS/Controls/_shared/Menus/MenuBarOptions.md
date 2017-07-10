```json
     {
        orientation: {string},
        showIcon: {boolean},
        items: [
            id: {string},
            text: {string},
            html: {string},
            title: {string},
            icon: {string},
            separator: {boolean},
            disabled: {boolean},
            childItems: {any},
            cssClass: {string},
            showText: {boolean},
            showHtml: {boolean},
            noIcon: {boolean}
        ],
        executeAction: {Function}
    }
```

Option            | Type    | Default | Notes
------------------|---------|---------|-------------
orientation|`string`|horizontal|Orientation of the menubar (horizontal or vertical)
showIcon|`boolean`|true|Determines whether icons are visible or not
items|`IMenuItemSpec[]`||Items to be displayed in the menu
items.id|`string`||Id of the menu item. Used to distinguish the menu item when action is executed or when changing command state of a menu item
items.text|`string`||Display text of the menu item
items.html|`string`||Display html of the menu item (mutually exclusive with text)
items.title|`string`||Text displayed when mouse is hovered on the menu item
items.icon|`string`||Icon for the menu item
items.separator|`boolean`|false|Determines whether the menu item is a separator or not. If specified along with text, menu item acts like a group text
items.disabled|`boolean`|false|Determines whether the menu item is initially disabled or not
items.childItems|`any`||Children of this menu item
items.cssClass|`string`||Extra css class name for this menu item
items.showText|`boolean`|true|Determines whether to show text for this item or not.
items.showHtml|`boolean`|true|Determines whether to show html for this item or not.
items.noIcon|`boolean`|false|Determines whether to disable icon for this item or not.
executeAction|`Function`||Action executed when a menu item is clicked
