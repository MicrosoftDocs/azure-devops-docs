```json
     {
        target: {JQuery},
        message: {string},
        messageFormat: {string},
        cancellable: {boolean},
        cancelTextFormat: {string},
        cancelCallback: {Function},
        fade: {boolean},
        showDelay: {number},
        backgroundColor: {string},
        image: {string}
    }
```

Option            | Type    | Default | Notes
------------------|---------|---------|-------------
target|`JQuery`|window|Target element in which an overlay and a message box is displayed. If not specified, whole window is used.
message|`string`||Text to be displayed in the message box.
messageFormat|`string`||Message format used if the cancellable is true. Default value is {message}({cancelText}).
cancellable|`boolean`|false|Specifies whether this is control is cancellable or not. If yes, a cancel link is displayed in the message box.
cancelTextFormat|`string`|Press {0} to cancel|Cancel text format used when displaying cancel text.
cancelCallback|`Function`||Callback executed when the control is cancelled.
fade|`boolean`|true|Specifies whether to fade out the message box when the operation is cancelled or ended.
showDelay|`number`|250|Specifies the amount of delay in milliseconds when the message box is displayed.
backgroundColor|`string`||Overlay color.
image|`string`||Progress image to be displayed.
