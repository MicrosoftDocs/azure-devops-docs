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

	<table>
		<thead>
			<tr>
				<th>Property</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>name</td>
				<td>name of the hub</td>
			</tr>
			<tr>
				<td>order</td>
				<td>placement of the hub in the hub group</td>
			</tr>
			<tr>
				<td>uri</td>
				<td>path (relative to the extension&apos;s baseUri) of the page to surface as the hub</td>
			</tr>
		</tbody>
	</table>

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
