---
parent: ./index.md
title: Build your .NET app for Windows
shorttitle: Visual Studio solution
description: Define a CI process that builds your .NET app on Team Foundation Server and Visual Studio Team Services.
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.topic: get-started-article
ms.assetid: 2BFC43A2-4F6C-4A5C-86EE-6DDA8733829D
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
---

# Build your .NET app for Windows

**Team Services | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/bb558973%28v=vs.120%29.aspx)**

[!INCLUDE [temp](../_shared/ci-cd-newbies.md)]

After you have [a Windows build agent](../actions/agents/v2-windows.md), in just a few steps you can define a CI build process that compiles and tests your .NET app whenever your team checks in code.

## Define your process

0. If you haven't already, upload your code to [GIT](../../git/share-your-code-in-git-vs.md) or [TFVC](../../tfvc/share-your-code-in-tfvc-vs.md).

0. Create the build definition.

 ![Build tab](../_shared/_img/create-new-build-definition.png)

 ![New Visual Studio build](_img/dot-net/new-visual-studio-build-from-definition-templates.png)

0. Specify the code you want to build and select the continuous integration (CI) trigger.

 ![CI trigger](../_shared/_img/create-new-build-definition-settings-repository-git-ci.png)

0. Save the definition.

 ![Save button](../_shared/_img/build-definition-save-button.png)

 ![Save the build](../_shared/_img/BldSave.png)

0. Queue your new definition to make sure it works.

 ![Queue the build](../_shared/_img/queue-build-dialog-box-with-hosted.png)

 ![Completed build](_img/dot-net/visual-studio-build-completed.png)

Your team now has a CI build to validate every change chcked into your codebase!


## Q&A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../steps/_shared/msbuild_qa.md)]

[!INCLUDE [temp](../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../_shared/qa-agents.md)]

[!INCLUDE [temp](../_shared/qa-versions.md)]

<!-- ENDSECTION -->