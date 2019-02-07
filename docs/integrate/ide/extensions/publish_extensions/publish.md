---
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
title: Publish your extension
description: Walks you through the steps to publish an extension.
ms.assetid: CAE083A4-E719-4BE1-A4B4-813199C6C1A6
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Publish your extension
This section describes what you need to publish your extension to the Visual Studio Gallery and make it available to all developers.

- [Package your extension](#package)
- [Publish to the Gallery](#publish)

<a id="package"></a>
##Package your extension
1. Update the extension vsixmanifest with the correct information about title, author, and version.
  ![Image showing the screen to add metadata to the manifest](../_img/package.png) 
2. Build your extension in release mode.
   Now your extension will be packaged as a VSIX in the \bin\Release folder.
3. You can double click the VSIX to verify the installation.

<a id="publish"></a>
##Publish to the Gallery 

Once your extension is ready to share, you can publish the extension to the [Visual Studio Gallery](https://visualstudiogallery.msdn.microsoft.com/).
1.	Click **Upload**.
  ![Image showing the Upload button](../_img/upload.png) 
2.	In **Step 1: Extension Type**, select the appropriate **Type**, and then click **Next**.
3.	In **Step 2: Select I would like to upload my tool**. The message **Select your control box** appears. Click **Browse**, and then select the VSIX file in the \bin\Release folder of the project. Click **Next**.
4.	In **Step 3: Basic Information**, fields from the source.extension.vsixmanifest file are displayed. Select an appropriate **Category** and add **Tags** to help users find your extension. You may want to add a more detailed summary and description (the description must be at least 280 characters long). Leave **Extension Type** as **Not a Microsoft Extension** and **Cost Category** as **Free**.
5.	Read the **Contribution Agreement** at the bottom of the page and check **I agree**.
6.	Click **Create Contribution**. This displays the page your extension will have on the Visual Studio Gallery, with a message that the page has not yet been published.
7.	Click **Publish**.
8.	Search the Visual Studio Gallery for your extension. The listing for the TestPublish extension should appear.

# See also

* [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.
* [Help - FAQ](../help/help.md)