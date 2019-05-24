0. Add your contribution - the Hello hub - to your extension manifest.

	> Include the [scopes](../../develop/manifest.md#scopes) that your extension requires.
	> In this case, we need vso.work to access work items.

	```json
	{
		...
	    "contributions": [
			{
	            "id": "Fabrikam.HelloWorld",
	            "type": "ms.vss-web.hub",
	            "description": "Adds a 'Hello' hub to the Work hub group.",
	            "targets": [
	                "ms.vss-work-web.work-hub-group"
	            ],
	            "properties": {
	                "name": "Hello",
	                "order": 99,
	                "uri": "hello-world.html"
	            }
	        }
		],
		"scopes": [
			"vso.work"
		]
    }
    ```

	For each contribution in your extension, the manifest defines
	
	- the type of contribution (hub in this case),
	- the contribution target (the work hub group),
	- and the properties that are specific to each type of contribution. For a hub, we have

| Property | Description |
| --- | --- |
| name | Name of the hub. |
| order | Placement of the hub in the hub group. |
| uri | Path (relative to the extension's baseUri) of the page to surface as the hub. |

0. Add the files that you want to include in your package - your HTML page, your scripts, the SDK script and your logo.

	```json
	{
		...
	    "files": [
			{
				"path": "hello-world.html", "addressable": true
			},
			{
				"path": "scripts", "addressable": true
			},
			{
				"path": "sdk/scripts", "addressable": true
			},
			{
				"path": "images/logo.png", "addressable": true
			}
		]
    }
    ```

	Set `addressable` to `true` unless you include other files that don't need to be URL-addressable.
