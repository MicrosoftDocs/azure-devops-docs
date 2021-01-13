---
ms.technology: devops-ecosystem
title: Publishing and packaging an extension from the Command Line
description: How to package and publish your Azure DevOps or Team Foundation Server (TFS) extension from the command line.
ms.assetid: 7adcb1a2-1894-4751-8bed-7c04d084b5cf
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.author: chcomley
author: chcomley
ms.date: 08/24/2016
---

# Publish from the command line

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

You can use the Cross-platform CLI for Azure DevOps (tfx-cli) to publish your extension to the Visual Studio Marketplace.

For more information, see the overview of [publish, install, and share](./overview.md).

## Prerequisites

Get the TFX CLI from Node Package Manager and generate a personal access token (PAT). 
Also, if you haven't already, set up a Publisher in the Gallery.

### Acquire the Cross-platform CLI for Azure DevOps

[!INCLUDE [Control](../includes/procedures/acquire-tfx-cli.md)]

### Acquire a PAT

[!INCLUDE [Control](../includes/procedures/acquire-pat.md)]

### Create a publisher

If you haven't already created a publisher, you can do so using the command line tool.

[!INCLUDE [Control](../includes/procedures/command-line-create-publisher.md)]

## Publish from the command line

Once TFX CLI is installed and you have your PAT, you can use the tool to package and publish your extension.

1. Open a command prompt to the root directory of your extension.
2. Run the `tfx extension publish` command passing in any necessary parameters. 
Run `tfx extension publish --help` to see all available options.

You may receive the following error when publishing if your extension has already been published:

```
Failed Request: Internal Server Error(500) - Version number must increase each time an extension is published. Extension: fabrikam.my-extension  Current version: 0.1.9  Updated version: 0.1.9
```

You can add the `--rev-version` command line option to automatically increment the *patch* version of your extension. 
This also saves the new version to your manifest.


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
