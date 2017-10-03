---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: Static Content Hosting for Extension Content | Extensions for VSTS
description: Options for hosting static content required by your extension.
ms.assetid: 0bf474c9-1511-4889-9d91-fc954abdcd6a
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Static content hosting

You have the option of hosting static content for your extension (like HTML, CSS, and JavaScript files) on your own service, a third-party hosting service (like Azure or Heroku), or on VSTS directly.

>[!IMPORTANT]
>If your extension needs to create a custom table in the TFS database, do not create it using the '**dbo**' schema. Instead, custom
>tables should be created in a seperate schema. For example, '**YourExtensionName**'.

## Host on VSTS

In this model, static content is packaged with your extension's .vsix file and is served from a public endpoint at `https://publisher.gallery.vsassets.io`. 

Having VSTS host your extension's static content is useful when you are simply enhancing or decorating data from VSTS. It does not require you (the extension publisher) to setup, manage, or pay for hosting services for your extension

### Steps

1. In your extension manifest file, specify the files you want to include via the `files` property: 
   ```json
   {
     "files": [
	   {
		   "path": "scripts", "addressable": true
	   },
	   {
		   "path": "images/extra/icon1.png", "addressable": true
	   }
     ]
   }
   ```
2. Remove the `baseUri` property (if set) from your extension manifest.    
3. Package your extension ([steps](../publish/command-line.md))   
4. Publish (or re-publish) your extension ([steps](../publish/overview.md)) 

<div class="alert alert-danger">
	**Important:** Make sure to increment the version of your extension when you make changes to static content files included in your .vsix.  
</div> 

Keep in mind:

* The value specified by the `path` attribute can be a folder or individual file. If a folder, the entire folder (and any sub-folders) are included.
* The `addressable` attribute is important and is what tells Visual Studio Online to make the file(s) URL addressable.
* All `addressable` asset requests are case sensitive. If the request for an asset has a different case than the actual uploaded asset, it will 
result in a HTTP 404 (Not found) error.
* Not specifying a baseUri (or setting an empty value) tells Visual Studio Online at runtime to calculate the base URI as if your static content is hosted by VSTS.

## Host on your own service (or a third-party service)

In this model, static content is served from your own service and not included in your extension's .vsix file.

### Steps 

1. Set the `baseUri` property in your extension manifest  For example, assuming a value of `https://myservice.net/extension` and this hub contribution:

``` 
	"baseUri": "https://myservice.net/extension",
	"contributions": [
		{
             "id": "Fabrikam.HelloWorld",
             "type": "ms.vss-web.hub",
             "targets": [
                 "ms.vss-work-web.work-hub-group"
             ],
             "properties": {
                 "name": "Hello",
                 "uri": "hello-world.html"
             }
         }
	]
```

VSTS will load the contents of this hub when it is rendered at `https://myservice.net/extension/hello-world.html`.


