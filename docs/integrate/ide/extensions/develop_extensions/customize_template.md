---
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
title: I want to customize a project template
description: A walkthrough to show you how to customize a project template.
ms.assetid: DAE23D07-A529-452A-9EDC-26DEEE23108C
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# I want to customize a project template

You  can use the VSIX Project template to create an extension or to package an existing extension for deployment.

The VSIX Project template just consists of a source.extension.vsixmanifest file, which contains information about the extension and the assets it ships.

## Deploying a Custom Project Template using the VSIX Project Template

The following steps show how to use the VSIX project to package a project template that you can share with other developers or upload to the Visual Studio Gallery.
1.	Create a project template. 
  1.	Open the project from which to create a template. This project can be of any project type.
  2.	On the File menu, click Export Template. Complete the steps of the wizard. A .zip file is created in %USERPROFILE%\My Documents\Visual Studio [version]\My Exported Templates\.
2.	Create an empty VSIX project.
3.	Add the .zip file to the project. Set its Copy to Output Directory property to Copy Always.
4.	Double-click the source.extension.vsixmanifest file to open it in the VSIX Manifest Designer, and then make the following changes: 
  *	Set the Product Name field to My Project Template. 
  *	Set the Product ID field to MyProjectTemplate - 1.
  *	Set the Author field to Fabrikam.
  *	Set the Description field to My project template.
  *	In the Assets section, add a Microsoft.VisualStudio.ProjectTemplate type and set its path to the name of the .zip file.
5.	Save and close the source.extension.vsixmanifest file.
6.	Build the project.
7.	In the output directory, double-click the .vsix file.
8.	A VSIX Installer message box appears. Follow the instructions to install the extension.
9.	Close Visual Studio and then re-open it. 
10.	Select Extensions and Updates (on the Tools menu) and select the Templates category. One of the available extensions should be My Project Template.
11.	The new project template appears in the New Project dialog in the same place as the original project template. For example, if you created a template named VB Console from a Visual Basic console application, VB Console appears in the same pane as the Visual Basic Console Application template. 

## To Specify the Location of the Template in the New Project Dialog Box

1.	Template folders are located in the Visual Studio Installation Path\Common7\IDE\ProjectTemplates and Visual Studio Installation Path\Common7\IDE\ItemTemplates directories. The names of the top-level sections in the New Project dialog do not exactly match the names of the template folders. Where they differ, use the name of the template folder. 
2.  Change the .vsix file extension to .zip, and then open the file.
3.	Create a new folder with the same name as the section of the New Project dialog the template should appear in. 
4.	If the template is to appear in a subsection, create a subfolder of the same name.
5.	Move the template .zip file into the new folder.
6.	Change the .zip extension to .vsix.
7.	Open the VSIX manifest.
8.	In the VSIX manifest, update the Asset path of the template so that it points to the root of the directory tree that contains the template file. For example, if the template is in \CSharp\Windows, the reference should point to \CSharp.
