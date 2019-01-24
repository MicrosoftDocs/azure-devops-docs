---
title: Setting up GitHub Source Linking with Azure DevOps Services Build & Azure DevOps Services Symbol Server
description: Using build to index and publish symbols from an Azure DevOps Services-hosted Git repository works out of the gate, but with a little bit of extra work you can make it work on GitHub-hosted repositories as well.
ms.prod: devops
ms.technology: devops-artifacts
ms.assetid: 3cb56371-3ef2-4bd9-871b-ec6cfa93bedf
ms.manager: jillfra
ms.date: 03/02/2018
ms.author: elbatk
author: elbatk
ms.topic: conceptual
monikerRange: '>= tfs-2017'
---

# Setting up GitHub Source Linking with Azure DevOps Services Build & Azure DevOps Services Symbol Server

Azure DevOps Services now includes an integrated symbol server. When you run a build, PDB files are produced which you can upload to the symbol server. These symbols can then be later downloaded to debug production issues, or by other developers in your organization that might be reusing the code that you have published into a package. By default Azure DevOps Services makes it very easy to index and publish symbols for source code that is hosted and built within Azure DevOps Services, but did you know that you can also publish symbols for source code that is hosted on GitHub?

When building .NET code in Azure DevOps Services the _Index and Publish Symbols_ build task is responsible finding PDB files and inserting source file location information into them so that when they are later downloaded the debugger knows where to locate source files. The symbols task is included by default in build pipeline templates. All you need to do is check the **Publish Symbols** parameter to get started.

![Publish Symbols checkbox on Index & Publish Symbols task](_img/publishsymbolscheckbox.png)

For source code that is hosted in Azure DevOps Services, that is all you need to do. However, for source code that is hosted on GitHub and being built in Azure DevOps Services you need to do a few extra steps.

> [!NOTE]
> In order to publish symbols to and download symbols from the Azure DevOps Services Symbol Server you must have the [Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed)  extension installed.

## Installing the Source Link Package
Azure DevOps Services doesn't natively know how to map source code that originated from a GitHub repository so we need to give it a bit of a hand. To do that you need to install the ```SourceLink.Create.CommandLine``` package into your solution. This injects the logic necessary to map source code hosted in GitHub to symbols stored in PDB files so that the Visual Studio debugger can seamlessly download source files as another developer steps through your code.

## Modifying the Build Pipeline
The next step is to modify the build pipeline to invoke Source Link. This is done by adding a ```/p:SourceLinkCreate=true``` parameter to the _MSBuild_ task.

![SourceLinkCreate property added to MSBuild arguments](_img/msbuildsourcelinkcreateproperty.png)

Once this is done you can save and queue the build pipeline and the GitHub source linking information will be embedded into the PDBs prior to be publishing to the symbol server in Azure DevOps Services.

> [!NOTE]
> You may notice that during the build process a warning is still produced by the _Index and Publish Symbols_ task that it cannot index the source code because it is not hosted in Azure DevOps Services. You can ignore this warning because the source location information was embedded earlier in the build process via the Source Link tooling.

## Verifying the Setup
Once the build has been completed and the symbols have been published it is time to make sure that everything is working as expected. Before attaching the debugger to your target process you should ensure that you have configured Visual Studio to download symbols from Azure DevOps Services and use the Source Link information embedded in those symbols to download source from GitHub.

To point Visual Studio to Azure DevOps Services for downloading symbols click on _Tools_, then _Options_ and then scroll down to the _Debugging_ group of items and select _Symbols_ item. Use the **New Azure DevOps Services Symbol Server location** icon to select your Azure DevOps Services server and add it to the list of symbols locations.

![Adding organization to the list of symbol locations](_img/symbollocationoptionspanel.png)

Next select the _General_ item under the _Debugging_ group and scroll down and check the **Enable Source Link support**.

![Source Linking option enabled on general debugging panel](_img/symbolgeneralpanelsourcelinking.png)

Now that Visual Studio is setup it is time to attach the debugger to the process that is running the code that you want to download symbols for. Once the debugger is attached Visual Studio will attempt to locate symbols for each binary by probing Azure DevOps Services, if the symbols are found then it will download the PDB files.

In order to trigger the download of source code you need to break into the running process. The first time Visual Studio attempts to download the source code it will prompt for consent.

![Dialog prompting for consent to download symbols from GitHub](_img/downloadsymbolsconsentdialog.png)

Once consent is granted Visual Studio will download the source files directly from GitHub and display then in the editor with the break point highlighted.

![Source code loaded from GitHub using symbols information](_img/codeloadedfromgithubusingsymbolsinfo.png)

> [!NOTE]
> When attaching to a process, you may need to uncheck the **Enable Just My Code** option under the _Debugging | General_ options.

## Conclusion
In this article we've shown you how to get up and running using the symbol server integrated with Azure DevOps Services even when your source code is coming from GitHub.

## Q&A

### Does this work with private GitHub repositories?

No, currently the Source Link implementation in Visual Studio is not designed to work with authenticated GitHub repositories. This functionality is being added in will be available in the future release of Visual Studio 2017.

## Reference Information

- [Azure DevOps Services is now a Symbol Server](https://blogs.msdn.microsoft.com/devops/2017/11/15/vsts-is-now-a-symbol-server/)
- [Publish Symbols for Debugging](/azure/devops/pipelines/symbols/)
- [Build: Index & Publish Symbols](/azure/devops/pipelines/tasks/build/index-sources-publish-symbols)
