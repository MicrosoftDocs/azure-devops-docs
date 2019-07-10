*to be converted to typescript* 

1. Create an object with a function that handles the action.
In this case, we open the Hello hub.

	```
	scripts/action.js
	```

	```javascript
	window.action = (function () {
		"use strict";
		return {
			myAction: function (actionContext) {

				// Get the Web Context to create the uri
				var vstsContext = VSS.getWebContext();

				// Navigate to the new View Associated Work Items hub.
				// Fabrikam is the extension's namespace and Fabrikam.HelloWorld is the hub's id.
				window.parent.location.href = vstsContext.host.uri +
					vstsContext.project.name + "/_apps/hub/Fabrikam/Fabrikam.HelloWorld";
			}
		};
	}());
	```

1. Add an HTML page to your web app to handle your action.

	```
	action.html
	```

	Add a reference to the SDK and your script that handles the action, and call ```VSS.init()```.

	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Action Sample</title>
	</head>
	<body>
		<div>The end user doesn't see the content on this page.</div>

		<script src="sdk/scripts/VSS.SDK.js"></script>
		<script src="scripts/action.js"></script>
		<script>
			VSS.init({ setupModuleLoader: true });
		</script>
	</body>
	</html>
	```

1. Add your action to the contributions in the extension manifest (```extensions.json```).

	```json
    "contributions": {
	    "vss.work.web#queryActions": [
			{
				"id": "myAction",
				"title": "My Action",
				"text": "Do my action",
				"icon": "images/icon.png",
				"handler": "action.myAction",
				"groupId": "actions",
				"handlerUri": "action.html",
				"dynamicProperties": false
			}
		],
		...
	```

1. [Install](../../develop/install.md) your extension again.

The action has been added to the context menu for queries and folders in the queries hub (work hub group).

![action in the context menu of a query](./_img/create-action/action.png)

Follow it and you'll go to the Hello hub.