---
ms.technology: devops-ecosystem
title: Static Content Hosting for Extension Content | Extensions for Azure DevOps Services
description: Options for hosting static content required by your extension.
ms.assetid: 0bf474c9-1511-4889-9d91-fc954abdcd6a
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 06/02/2020
---

# Static content hosting

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

Choose to host static content for your extension, like HTML, CSS, and JavaScript files, on your own service, on a third-party hosting service, like Azure or Heroku, or on Azure DevOps Services directly.

>[!IMPORTANT]
>If your extension needs to create a custom table in the TFS database, do not create it using the '**dbo**' schema. Instead, custom
>tables should be created in a separate schema. For example, '**YourExtensionName**'.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Host on Azure DevOps Services

In this model, static content is packaged with your extension's .vsix file and is served from a public endpoint at `https://publisher.gallerycdn.vsassets.io`. 

Your extension's static content is useful when you're enhancing or decorating data from Azure DevOps Services. The extension pub doesn't require you (the extension publisher) to set up, manage, or pay for hosting services for your extension

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
4. Publish (or republish) your extension ([steps](../publish/overview.md)) 

<div class="alert alert-danger">
> [!IMPORTANT]
> Make sure to increment the version of your extension when you make changes to static content files included in your .vsix.<br/></div> 

Keep in mind:

* The value specified by the `path` attribute can be a folder or individual file. If a folder, the entire folder (and any subfolders) is included.
* The `addressable` attribute is important and is what tells Visual Studio Codespaces to make the file(s) URL addressable.
* All `addressable` asset requests are case-sensitive. If the request for an asset has a different case than the actual uploaded asset, it results in an HTTP 404 (Not found) error.
* Not specifying a baseUri or setting an empty value tells Visual Studio Codespaces at runtime to calculate the base URI as if your static content's hosted by Azure DevOps Services.

## Host on your own service (or a third-party service)

In this model, static content is served from your own service and not included in your extension's .vsix file.

### Steps 

1. Set the `baseUri` property in your extension manifest  For example, assuming a value of `https://myservice.net/extension` and this hub contribution:

```json
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

 Azure DevOps Services loads the contents of this hub when it's rendered at `https://myservice.net/extension/hello-world.html`.

## Next steps

> [!div class="nextstepaction"]
> [Package, publish, and install extensions](../publish/overview.md)
