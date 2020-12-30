> To take advantage of any new features that are added to the widget sdk after TFS 2015 Update 3,
> please make sure to include the `ms.vss-dashboards-web.widget-sdk-version-2` demand in your manifest.
> ```json
>     {
>         ...
>         "demands": [
>             "contribution/ms.vss-dashboards-web.widget-sdk-version-2"
>         ],
>         ...
>     }
> ```

The [extension manifest](../../develop/manifest.md) is a JSON file that defines basic information about the extension and the contributions in it.  
First, let's add some information about our extension. 
Open the `vss-extension.json` file that you created in Step 1, and then add the [required attributes](../../develop/manifest.md#required-attributes), which are mandatory for an extension to work.

```json
	{
		"manifestVersion": 1,
		"id": "vsts-extensions-myExtensions",
		"version": "1.0.0",
		"name": "My First Set of Widgets",
		"description": "Samples containing different widgets extending dashboards",
		"publisher": "fabrikam",
		"targets": [
			{
				"id": "Microsoft.VisualStudio.Services"
			}
		],
	}
```

If you haven't created a publisher yet, follow the steps [here](../../publish/overview.md#create-a-publisher) to create one.
Update the `publisher` property to include your publisher ID instead of `fabrikam`.
Update the ID, name, and description for the extension as you see fit. 
If you have an icon for the extension from the previous step, then specify the relative path to the icon in the manifest as below.
The name, description, and icon you provide appear in the Marketplace for users you've shared the extension with.

```json
	{
		...
		"icons": {
			"default": "img/logo.png"
		},
		...
	}
```


Let's add some information for the contributions in this extension. In our case, it's the Hello World widget that we created.
Add a `contributions` property to the JSON file. The value for this property is an array of contributions. In our case, we have a single entry to add.


```json
	{
		...
	    "contributions": [
			{
				"id": "HelloWorldWidget",
				"type": "ms.vss-dashboards-web.widget",
				"targets": [
					"ms.vss-dashboards-web.widget-catalog"
				],
				"properties": {
					"name": "Hello World Widget",
					"description": "My first widget",
					"catalogIconUrl:": "img/CatalogIcon.png",
					"previewImageUrl": "img/preview.png",                			
					"uri": "hello-world.html",
					"supportedSizes": [
 						{
                        		"rowSpan": 1,
                        		"columnSpan": 2
                    		}
                		],
					"supportedScopes": ["project_team"]
				}
	        }
		],
		...
    }
```

Each contribution entry defines [certain properties](../../develop/manifest.md#contributions). 

- The **id** to identify your contribution. The ID should be unique within an extension. This ID should match with the name you used in Step 3 to register your widget.
- The **type** of contribution. For all widgets, the type should be `ms.vss-dashboards-web.widget`.
- The array of **targets** to which the contribution is contributing. For all widgets, the array of targets should be `[ms.vss-dashboards-web.widget-catalog]`.
- The **properties** is an object that includes properties for the contribution type. For widgets, the below properties are mandatory.

| Property | Description |
| --- | --- |
| name | Name of the widget to display in the widget catalog. |
| description | Description of the widget to display in the widget catalog. |
| catalogIconUrl | Relative path of the catalog icon that you added in Step 4 to display in the widget catalog. The image should be 98 px x 98 px. If you've used a different folder structure or file name, then here's where you can specify the appropriate relative path. |
| previewImageUrl | Relative path of the preview image that you added in Step 4 to display in the widget catalog for TFS 2015 Update 3 only. The image should be 330 px x 160 px. If you've used a different folder structure or a different file name, then here's where you can specify the appropriate relative path. |
| uri | Relative path of the HTML file that you added in Step 1. If you've used a different folder structure or a different file name, here's where you can specify the appropriate relative path. |
| supportedSizes | Array of sizes supported by your widget. When a widget supports multiple sizes, the first size in the array is the default size of the widget. The widget size gets specified in terms of the rows and columns that are occupied by the widget in the dashboard grid. One row/column corresponds to 160 px. Any dimension above 1x1 gets another 10 px that represent the gutter between widgets. For example, a 3x2 widget is `160*3+10*2` wide and `160*2+10*1` tall. The maximum supported size is `4x4`. |
| supportedScopes | Currently, we support only team dashboards. So, the value must be `project_team`. When we support other dashboard scopes, we'll have more options to choose from. |

Finally, add an array of files or folders you want to include in your package. If you've used a different folder structure or file name in Step 1, then use the appropriate relative path. 
For more on hosting HTML, CSS, and JavaScript files, refer to the [static content hosting documentation](../../develop/static-content.md).

```json
	{
		...
	    "files": [
			{
				"path": "hello-world.html", "addressable": true
			},
			{
				"path": "sdk/scripts", "addressable": true
			},
			{
				"path": "img", "addressable": true
			}
		]
    }
```

