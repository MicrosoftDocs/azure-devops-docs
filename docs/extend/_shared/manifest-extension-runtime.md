
| Property | Description | Notes |
| --- | --- | --- |
| **scopes** | *An array of authorization scopes (strings) listing permissions required by your extension.* | For example, `vso.work` and `vs.code_write` indicates your extension needs read-only access to work items and read/write access to source code (and related resource). Scopes are presented to the user when installing your extension. See the [full list of scopes](../develop/manifest.md#scopes). |
| **demands** | *An array of demands (strings) listing the capabilities required by your extension.* | For example, `api-version/3.0` indicates your extension uses version 3.0 APIs and therefore cannot run in older products that do not support this version. See the [full list of demands](../develop/manifest.md#demands). |
| **baseUri** | *(Optional) base URL for all relative URLs specified by the extension's contributions.* | For example: ```https://myapp.com/{{account.name}}/```. This property should be left empty if your extension's contents are packaged with your extension. |
| **contributions** | *An array of contributions to the system.* |  |
| **contributionTypes** | *An array of contribution types defined by the extension* |  |


