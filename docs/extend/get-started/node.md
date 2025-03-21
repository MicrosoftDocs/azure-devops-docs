---
ms.subservice: azure-devops-ecosystem
title: Develop a web extension
description: Learn how to develop your first web extension for Azure DevOps.
ms.assetid: ae82118c-82fa-40ec-9f29-989ce981f566
ms.custom: engagement-fy23
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 03/20/2025
---

# Develop a web extension

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use extensions to enhance Azure DevOps with new web experiences, dashboard widgets, build tasks, and more. You can develop extensions using standard technologies like HTML, JavaScript, and CSS. This tutorial guides you through creating a web extension for Azure DevOps. 

> [!TIP]
> [Explore the extension samples](../develop/samples-overview.md) and the newest documentation on extension development using the [Azure DevOps Extension SDK](https://developer.microsoft.com/azure-devops/develop/extensions).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Owner of the organization.|
|**Tools** |- [Node.js](https://nodejs.org)<\br>- Extension packaging tool: Run `npm install -g tfx-cli` from a command prompt, which you use to [package your extension](../publish/overview.md) later on.|

## Create a directory and manifest

An extension is composed of a set of files that includes a required manifest file. You package it into a .vsix file and publish to the Visual Studio Marketplace.

1. Create a directory to hold the files needed for your extension:
   
   ```
   mkdir my-first-extension
   ```

2. Initialize a new npm package manifest from this directory:
   
   ```
   npm init -y
   ```

   This file describes the libraries required by your extension.

3. Install the Azure DevOps Extension SDK package and save it to your npm package manifest:

   ```
   npm install azure-devops-extension-sdk --save
   ```

This SDK includes a JavaScript library that provides APIs required for communicating with the page your extension is embedded in.

4. Create an extension manifest file named `vss-extension.json` at the root of your extension directory with the following content:

    ```json
    {
        "manifestVersion": 1,
        "id": "my-first-extension",
        "publisher": "",
        "version": "1.0.0",
        "name": "My First Extension",
        "description": "A sample Visual Studio Services extension",
        "public": false,
        "categories": ["Azure Repos"],
        "targets": [
            {
                "id": "Microsoft.VisualStudio.Services"
            }
        ],
        "contributions": [
            {
                "id": "my-hub",
                "type": "ms.vss-web.hub",
                "targets": [
                    "ms.vss-code-web.code-hub-group"
                ],
                "properties": {
                    "name": "My Hub",
                    "uri": "my-hub.html"
                }
            }
        ],
        "files": [
            {
                "path": "my-hub.html",
                "addressable": true
            },
            {
                "path": "node_modules/azure-devops-extension-sdk",
                "addressable": true,
                "packagePath": "lib"
            }
        ]
    }
    ```

   > [!IMPORTANT]
   > The `public` property controls whether the extension is visible to everyone on the Visual Studio Marketplace. Keep your extensions private during development.

5. Create a file named `my-hub.html` at the root of your extension directory with the following content, which is for the view (also known as a hub) contributed into the web experience.

    ```html
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
        <script>
            window.requirejs.config({
                enforceDefine: true,
                paths: {
                    'SDK': './lib/SDK.min'
                }
            });
            window.requirejs(['SDK'], function (SDK) {
                if (typeof SDK !== 'undefined') {
                    console.log("SDK is defined. Trying to initialize...");
                    SDK.init();
                    SDK.ready().then(() => {
                        console.log("SDK is ready");
                        document.getElementById("name").innerText = SDK.getUser().displayName;
                    });
                } else {
                    console.log('SDK is not defined');
                }
            });
        </script>
        <style>
            body {
                background-color: rgb(0, 67, 117);
                color: white;
                margin: 10px;    
                font-family: "Segoe UI VSS (Regular)","-apple-system",BlinkMacSystemFont,"Segoe UI",sans-serif;
            }
        </style>
    </head>
    <body>        
        <h1>Hello, <span id="name"></span></h1>
    </body>
    </html>
    ```

6. Your extension directory should look like the following example.

    ```
    |-- my-hub.html
    |-- node_modules
        |-- @types
        |-- azure-devops-extension-sdk
    |-- package.json
    |-- vss-extension.json
    ```

   [!INCLUDE [preview](../_data/get-help.md)]

## Next steps

> [!div class="nextstepaction"]
> [Package and publish your extension](../publish/overview.md)

## Related articles

* [Developer Formula Design System](https://developer.microsoft.com/azure-devops/)
* [Contribution model](../develop/contributions-overview.md)
