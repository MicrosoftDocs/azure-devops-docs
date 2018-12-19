0. Create a json file (`vss-extension.json`, for example) in the home directory of your web app to describe your extension.

    ```json
    {
        "manifestVersion": 1,
        "id": "sample-extension",
        "version": "0.1.0",
        "name": "My first sample extension",
        "description": "A sample Visual Studio Services extension.",
		"publisher": "fabrikam",
		"targets": [
			{
				"id": "Microsoft.VisualStudio.Services"
			}
		]
    }
    ```

0. Specify the path to your extension's icon in your manifest. 
If you want to skip this step for now, that's fine. The extension will function without the icon.

    ```json
    {
    	...
    	"icons": {
    		"default": "images/logo.png"
    	}
    }
    ```
