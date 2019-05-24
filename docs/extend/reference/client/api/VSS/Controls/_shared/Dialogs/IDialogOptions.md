```json
     {
        content: {string or JQuery},
        contentText: {string},
        title: {string},
        position: {string},
        resizable: {boolean},
        open: {(eventArgs: any): any},
        close: {(eventArgs: any): any},
        buttons: {any},
        initialFocusSelector: {string},
        hasProgressElement: {boolean},
        disposeOnClose: {boolean},
        width: {number or string},
        height: {number or string},
        useBowtieStyle: {boolean},
        bowtieVersion: {number},
        hideCloseButton: {boolean}
    }
```


|        Option        |          Type           |        Default         |                                                                                            Notes                                                                                            |
|----------------------|-------------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       content        |   `string or JQuery`    |                        |                                                        Content of the dialog. It can be either a jQuery selector or a jQuery object.                                                        |
|     contentText      |        `string`         |                        |                                                                     Text to be displayed in the dialog as the content.                                                                      |
|        title         |        `string`         |                        |                                                                                    Title of the dialog.                                                                                     |
|       position       |        `string`         |                        | Specifies where the dialog should be displayed when opened. This option is conveyed to underlying jQuery UI Dialog. See <http://api.jqueryui.com/dialog/#option-position> for more details. |
|      resizable       |        `boolean`        |          true          |                                                                      Indicates whether the dialog is resizable or not.                                                                      |
|         open         | `(eventArgs: any): any` |                        |                                                                     Delegate to be executed when the dialog is opened.                                                                      |
|        close         | `(eventArgs: any): any` |                        |                                                                     Delegate to be executed when the dialog is closed.                                                                      |
|       buttons        |          `any`          |                        |  Specifies which buttons should be displayed on the dialog. This option is conveyed to underlying jQuery UI Dialog. See <http://api.jqueryui.com/dialog/#option-buttons> for more details.  |
| initialFocusSelector |        `string`         | First tabbable element |                                                       Specifies the jQuery selector for the default element to be focused initially.                                                        |
|  hasProgressElement  |        `boolean`        |          true          |                                                        Indicates whether global progress indicator is enabled for the dialog or not.                                                        |
|    disposeOnClose    |        `boolean`        |          true          |                                                                Specifies whether the dialog should be displayed when closed.                                                                |
|        width         |   `number or string`    |          500           |                                                                               Width of the dialog in px or %.                                                                               |
|        height        |   `number or string`    |          auto          |                                                                              Height of the dialog in px or %.                                                                               |
|    useBowtieStyle    |        `boolean`        |                        |                                                  An optional boolean to specify whether or not to use the Bowtie styling for this Dialog.                                                   |
|    bowtieVersion     |        `number`         |                        |                                                       An optional variable to specify the version of Bowtie styling for this Dialog.                                                        |

Defaults to 1, but 2 should be used for the updated styling in TFS
hideCloseButton|`boolean`||Hide the X button.
