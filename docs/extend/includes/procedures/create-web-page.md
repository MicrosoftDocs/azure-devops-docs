---
ms.topic: include
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ms.subservice: azure-devops-ecosystem
---

1. Install the [azure-devops-extension-sdk](https://github.com/microsoft/azure-devops-extension-sdk) package and place the `SDK.js` file in `home/sdk/scripts`.

	```bash
	npm install azure-devops-extension-sdk
	```

1. Create the web page you want to display. The following example adds a simple `hello-world.html` page to the `home` directory.

1. In your HTML page, reference the SDK and call `SDK.init()` followed by `SDK.notifyLoadSucceeded()`.

	```html
	<!DOCTYPE html>
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Hello World</title>
		<script src="sdk/scripts/SDK.js"></script>
	</head>
	<body>
		<script type="text/javascript">SDK.init();</script>
		<h1>Hello World</h1>
		<script type="text/javascript">SDK.notifyLoadSucceeded();</script>
	</body>
	</html>
	```
