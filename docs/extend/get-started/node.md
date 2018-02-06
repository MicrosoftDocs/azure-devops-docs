---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: Write your first extension for VSTS
description: Tutorial for creating your first extension, a hub page, for VSTS
ms.assetid: ae82118c-82fa-40ec-9f29-989ce981f566
ms.manager: douge
ms.author: elbatk
ms.date: 08/26/2016
ms.topic: get-started-article
---

# Write your first extension for VSTS

[!INCLUDE [preview](../_data/private-preview.md)]

## Your first extension
This page guides you through creating your first extension for VSTS. It will introduce the basic extensibility concepts 
and give you the knowledge needed to get started on your own unique extension.

In this tutorial we'll create a custom hub that displays the results of a query. A <b>hub</b> is, simply put, a type of contribution that displays
a web page. You can have multiple hubs in VSTS and they live in <b>hub groups</b>. 

We'll create a new hub that displays in the Work hub group, after the Backlogs and Queries hubs.

<div style="vertical-align:middle;display:block;width:60;margin-left:auto;margin-right:auto">
<img src="../_shared/procedures/_img/hub-location.png" style="display:block;padding-bottom:10px;margin-left:auto;margin-right:auto">
</div>

## Preparation and required setup for this tutorial
In order to create extensions for VSTS, there are some prerequisite software and tools you'll need:

- A **VSTS account**, more information can be found [here](https://www.visualstudio.com/en-us/products/visual-studio-team-services-vs.aspx)
- **A text editor**. For many of the tutorials we used `Visual Studio Code`, which can be downloaded [here](https://code.visualstudio.com/)
- The latest version of **node**, which can be downloaded [here](https://nodejs.org/en/download/)
- **TFS Cross Platform Command Line Interface (tfx-cli)** to package your extensions.
    - **tfx-cli** can be installed using `npm`, a component of Node.js by running `npm i -g tfx-cli`
- A home directory for your project. This directory will be referred to as `home` throughout the tutorial.

## Structure of an extension
If you haven't, you'll want to create a `home` directory that contains the following contents:

```no-highlight
├── README.md						// used in the Marketplace listing of your extension
├── sdk    
	├── node_modules           
	└── scripts
		└── VSS.SDK.js				// core SDK script retrieved using node later in the tutorial
├── images                        
	└── icon.png                           
├── scripts                        	// not used in this tutorial
├── hello-world.html				// html page to be used for your hub  
└── vss-extension.json				// extension's manifest
```

<a name='client-sdk'/>

## Get the client SDK: `VSS.SDK.js`
The core SDK script, **VSS.SDK.js**, enables web extensions to communicate to the host VSTS frame and to perform operations like 
initializing, notifying that an extension is loaded, or getting context about the current page. Get the Client SDK **VSS.SDK.js** file and add it to your web app. Place it in the `home/sdk/scripts` folder.

Use the *npm install* command via the command line (requires [Node](https://nodejs.org/en/download/)) to retrieve the SDK:

```no-highlight
npm install vss-web-extension-sdk
```

> To learn more about the SDK, visit the [Client SDK GitHub Page](https://github.com/Microsoft/vss-sdk).

<a name="extension-manifest" />

## Your extension's manifest file: `vss-extension.json`

* ***Every*** extension must have an extension manifest file
* Please read the [extension manifest reference](../develop/manifest.md)
* Find out more about the contribution points in the [extension points reference](../reference/targets/overview.md)

Create a json file (`vss-extension.json`, for example) in the `home` directory with the following contents:

```json
	{
		"manifestVersion": 1,
		"id": "sample-extension",
		"version": "0.1.0",
		"name": "My first sample extension",
		"description": "A sample Visual Studio Services extension.",
		"publisher": "fabrikamdev",
		"targets": [
			{
				"id": "Microsoft.VisualStudio.Services"
				}
			],
		"icons": {
			"default": "images/logo.png"
		 },
		"contributions": [
			{
				"id": "Fabrikam.HelloWorld",
				"type": "ms.vss-web.hub",
				"description": "Adds a 'Hello' hub to the Work hub group.",
				"targets": [
					"ms.vss-work-web.work-hub-group"
					],
				"properties": {
					"name": "Hello",
					"order": 99,
					"uri": "hello-world.html"
				}
			}
		],
		"scopes": [
			"vso.work"
		],
		"files": [
			{
				"path": "hello-world.html", "addressable": true
			},
			{
				"path": "scripts", "addressable": true
			},
			{
				"path": "sdk/scripts", "addressable": true
			},
			{
				"path": "images/logo.png", "addressable": true
			}
		]
	}
```

>[!NOTE]
>The **publisher** here will need to be changed to your publisher name. To create a publisher now, visit [Package/Publish/Install](../publish/overview.md). 


### Icons
The **icons** stanza specifies the path to your extension's icon in your manifest. 

### Contributions
The **contributions** stanza adds your contribution - the Hello hub - to your extension manifest.

For each contribution in your extension, the manifest defines
- the type of contribution - **hub** in this tutorial.
- the contribution target - **the work hub group** (check out all of the [targetable hub groups](../reference/targets/overview.md#targetable-hub-groups))
- and the properties that are specific to each type of contribution. For a hub, we have

| Property   | Description                                                                                                                         
|------------|--------------------------------------------------------------------------------|                                 
| name       | Name of the hub.					                  							  |         
| order      | Placement of the hub in the hub group.    									  |
| uri		 | Path (relative to the extension's baseUri) of the page to surface as the hub.  | 

### Scopes
The [scopes](../develop/manifest.md#scopes) stanza is where you'll add **scopes** that your extension requires. Scopes control what resources can be accessed by your extension and what operations your extension is allowed to perform on those resources. The scopes you specify in your extension manifest are the scopes set on access tokens issued to your extension.

In this case, we need `vso.work` to access work items.

### Files
The **files** stanza states the files that you want to include in your package.

For a hub, you'll add your HTML page, your scripts (not used in this tutorial, but should still be added), the SDK script, and your logo.
Set `addressable` to `true` unless you include other files that don't need to be URL-addressable.

>[!NOTE]
>For more information about the **extension manifest file**, such as its properties and what they do, check out the [extension manifest reference](../develop/manifest.md).

## Your hub page: `hello-world.html`
* Every hub displays a web page, which is represented by an html file
* Check out the targettable hub groups in the [extension points reference](../reference/targets/overview.md#hubs)

Create a `hello-world.html` file in the `home` directory of your extension.


Copy the following contents, a simple html page that also references the SDK and calls *init()* and *notifyLoadSucceeded()*.

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

## Your extension's logo: `icon.png`
Add a square image in the ```images``` folder that identifies your extension.
We'll display it in the Marketplace, and when someone installs your extension. The icon image needs to be atleast 128x128 pixels in size before an extension can be made available publicly on the Marketplace.

<div style="vertical-align:middle;display:block;width:60;margin-left:auto;margin-right:auto">
<img src="./_img/first-sample-extension.png" style="display:block;padding-bottom:10px;margin-left:auto;margin-right:auto">
</div>

>[!IMPORTANT]
>Please do not use the Visual Studio "Bowtie" icon in your extension icon. 

Now that you have your `.html` file, your `manifest`, and any `images` you need, you're ready to package and publish your extension!

## Package and publish your extension to the Marketplace

### Package your extension

Once you've written your extension, the next step towards getting it into the marketplace is to package all of your files together. All extensions are packaged
as VSIX 2.0 compatible .vsix files - Microsoft provides a cross-platform command line interface (CLI) to package your extension. 

#### Get the packaging tool
You can install or update the TFS Cross Platform Command Line Interface (tfx-cli) using `npm`, a component of [Node.js](http://nodejs.org), from your command line.

```no-highlight
npm i -g tfx-cli
```

#### Package your extension
Packaging your extension into a .vsix file is effortless once you have the tfx-cli, simply navigate to your extension's home directory and run the following command.

```no-highlight
tfx extension create --manifest-globs vss-extension.json
```

>[!NOTE]
>An extension/integration's version must be incremented on every update. <br>
>When updating an existing extension, either update the version in the manifest or pass the `--rev-version` command line switch. This will increment the *patch* version number of your extension and save the new version to your manifest.

After you have your packaged extension in a .vsix file, you're ready to publish your extension to the marketplace.

### Publish your extension

#### Create your publisher

All extensions, including those from Microsoft, are identified as being provided by a publisher.
If you aren't already a member of an existing publisher, you'll create one.

1. Sign in to the [Visual Studio Marketplace Publishing Portal](http://aka.ms/vsmarketplace-manage)
2. If you are not already a member of an existing publisher, you'll be prompted to create a publisher. If you're not prompted to create a publisher, scroll down to the bottom of the page and select <i>Publish Extensions</i> underneath <b>Related Sites</b>.
 * Specify an identifier for your publisher, for example: `mycompany-myteam`
    * This will be used as the value for the `publisher` attribute in your extensions' manifest file.
 * Specify a display name for your publisher, for example: `My Team`
3. Review the [Marketplace Publisher Agreement](http://aka.ms/vsmarketplace-agreement) and click **Create**

Now your publisher is defined. In a future release, you'll be able to grant permissions to view and manage your publisher's extensions.
This will make it easy (and more secure) for teams and organizations to publish extensions under a common publisher,
but without the need to share a set of credentials across a set of users.

#### Upload your extension

After creating a publisher, you can now upload your extension to the marketplace.

1. Find the <b>Upload new extension</b> button, navigate to your packaged .vsix file, and select <i>upload</i>.

You can also upload your extension via the command line by using the ```tfx extension publish``` command instead of ```tfx extension create```
to package and publish your extension in one step.
You can optionally use ```--share-with``` to share your extension with one or more accounts after publishing.
You'll need a personal access token, too.

```no-highlight
tfx extension publish --manifest-globs your-manifest.json --share-with youraccount
```

#### Share your extension

Now that you've uploaded your extension, it's in the Marketplace, but no one can see it. 
Share it with your account so that you can install and test it.

1. Right click your extension and select <b>Share...</b>, and enter your account information. You can share it with other accounts that you want to have access to your extension, too.

>[!IMPORTANT]
>Publishers must be verified in order to share extensions publicly, to learn more visit [Package/Publish/Install](../publish/overview.md)

Now that your extension is in the marketplace and shared, anyone who wants to use it will have to install it.

## (Optional) Install your extension

Installing an extension that is shared with you is simple and can be done in a few steps:

1. From your account control panel (`https://{account}.visualstudio.com/_admin`), go to the project collection administraton page.
2. In the Extensions tab, find your extension in the "Shared with this account" section, click on the extension link.
3. Install the extension!

If you can't see the Extensions tab, make sure you're in the control panel (the project collection level administration page - `https://{account}.visualstudio.com/_admin`) and not the administration page for a team project.

If you're on the control panel, and you don't see the <b>Extensions</b> tab, extensions may not be enabled for your account. You can get early access to the extensions feature by joining the Visual Studio Partner Program.

## (Optional) Try out your extension

Go to your hub in the **Work** hub group. You should see your simple `.html` page in the hub.

<div style="vertical-align:middle;display:block;width:60;margin-left:auto;margin-right:auto">
<img src="../get-started/_img/hello-hub.png" style="display:block;padding-bottom:10px;margin-left:auto;margin-right:auto">
</div>

## See our library of examples

To get started with building your own extension, take a look at some of the sample extensions.

* [Look at sample extensions](../develop/samples-overview.md)
 
