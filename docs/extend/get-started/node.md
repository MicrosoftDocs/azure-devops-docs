---
ms.subservice: azure-devops-ecosystem
title: Develop a web extension
description: Learn how to develop your first web extension for Azure DevOps.
ms.custom: engagement-fy23, UpdateFrequency3
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ai-usage: ai-assisted
---

# Develop a web extension

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use extensions to enhance Azure DevOps with new web experiences, dashboard widgets, build tasks, and more. This tutorial takes you through creating and packaging a simple web extension.

> [!TIP]
> For a full working reference, see the [azure-devops-extension-sample](https://github.com/Microsoft/azure-devops-extension-sample) repository.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| [Organization owner](../../organizations/accounts/faq-configure-customize-organization.yml) or member of the **Project Collection Administrators** group.|
|**Tools** |- [Node.js](https://nodejs.org) (LTS version recommended)<br/>- Extension packaging tool: Run `npm install -g tfx-cli` to install the [TFX CLI](../publish/overview.md).|

## Create a directory and manifest

An extension is a set of files that includes a required manifest file. Package the extension into a .vsix file and publish it to the Visual Studio Marketplace.

1. Create a directory for your extension:
   
   ```shell
   mkdir my-first-extension && cd my-first-extension
   ```

1. Initialize an npm package manifest:
   
   ```shell
   npm init -y
   ```

1. Install the Azure DevOps Extension SDK:

   ```shell
   npm install azure-devops-extension-sdk --save
   ```

   This SDK provides APIs for communicating with the Azure DevOps host frame.

1. Create an extension manifest file named `vss-extension.json` at the root of your extension directory with the following content:

    ```json
    {
        "manifestVersion": 1,
        "id": "my-first-extension",
        "publisher": "",
        "version": "1.0.0",
        "name": "My First Extension",
        "description": "A sample Azure DevOps extension",
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
   > Set the `publisher` field to your [Marketplace publisher ID](../publish/overview.md). The `public` property controls whether the extension is visible to everyone on the Visual Studio Marketplace. Keep your extensions private during development.

1. Create a file named `my-hub.html` at the root of your extension directory with the following content. This HTML page is the view (hub) contributed into the Azure DevOps web experience.

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
                SDK.init();
                SDK.ready().then(function () {
                    document.getElementById("name").innerText = SDK.getUser().displayName;
                });
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

    > [!NOTE]
    > This example uses RequireJS to load the SDK, which works without a build step. For production extensions, use a bundler like [webpack](https://webpack.js.org/) with ES module imports (`import * as SDK from "azure-devops-extension-sdk"`) for better performance. See the [extension sample](https://github.com/Microsoft/azure-devops-extension-sample) for a webpack-based setup.

1. Your extension directory should look like the following example.

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

## Related content

* [Developer Formula Design System](https://developer.microsoft.com/azure-devops/)
* [Contribution model](../develop/contributions-overview.md)
