1. Get the Client SDK `VSS.SDK.js` file and add it to your web app. Place it in the `home/sdk/scripts` folder.
	1. Use the 'npm install' command to retrieve the SDK: `npm install vss-web-extension-sdk`. 
	2. To learn more about the SDK, visit the [Client SDK GitHub Page](https://github.com/Microsoft/vss-sdk).

1. Add the web page that you want to display as a hub. We're doing a simple `hello-world.html` page here, added to the `home` directory.

1. In your HTML page, add a reference to the SDK, and call `init()` and `notifyLoadSucceeded()`.

	```html
	<!DOCTYPE html>
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Hello World</title>
		<script src="sdk/scripts/VSS.SDK.js"></script>
	</head>
	<body>
		<script type="text/javascript">VSS.init();</script>
		<h1>Hello World</h1>
		<script type="text/javascript">VSS.notifyLoadSucceeded();</script>
	</body>
	</html>
	```
