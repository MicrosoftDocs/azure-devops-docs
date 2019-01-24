---
ms.prod: devops
ms.technology: devops-ecosystem
title: Publishing and Packaging an Extension from the Command Line | Extensions for Azure DevOps Services
description: How to package and publish your Azure DevOps Services Extension from the command line.
ms.assetid: 7adcb1a2-1894-4751-8bed-7c04d084b5cf
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/24/2016
---

# Publish from the command line

You can use the TFS Cross Platform Command Line Interface (tfx-cli) to publish your extension to the Visual Studio Marketplace.

See the overview of [publish, install, and share](./overview.md) for additional details.

## Before you begin

Before you begin, you need to get the TFX CLI from Node Package Manager and generate a personal access token. 
Also, if you have not done so, you will need to set up a Publisher in the Gallery.

### Acquire the TFS Cross Platform Command Line Interface

[!INCLUDE [Control](../_shared/procedures/acquire-tfx-cli.md)]

### Acquire a personal access token

[!INCLUDE [Control](../_shared/procedures/acquire-pat.md)]

### Create a publisher

If you haven't already created a publisher, you can do so using the command line tool.

[!INCLUDE [Control](../_shared/procedures/command-line-create-publisher.md)]

## Publish from the command line

Once the TFX CLI is installed and you have your personal access token, you can use the tool to package and publish your extension.

1. Open a command prompt to the root directory of your extension.
2. Run the `tfx extension publish` command passing in any necessary parameters. 
Run `tfx extension publish --help` to see all available options.

You may receive the following error when publishing if your extension has already been published:

```
Failed Request: Internal Server Error(500) - Version number must increase each time an extension is published. Extension: fabrikam.my-extension  Current version: 0.1.9  Updated version: 0.1.9
```

You can add the `--rev-version` command line option to automatically increment the *patch* version of your extension. 
Note that this will also save the new version to your manifest.


#### Example

```
C:\vso-team-calendar>tfx extension publish --share-with fabrikam --rev-version
Copyright Microsoft Corporation
> Personal access token:
Checking if this extension is already published
It is, update the extension
Waiting for server to validate extension package...
Sharing extension with fabrikam.

=== Completed operation: publish extension ===
 - Packaging: C:\vso-team-calendar\fabrikam.team-calendar-0.2.6.vsix
 - Publishing: success
 - Sharing: shared with fabrikam
```
