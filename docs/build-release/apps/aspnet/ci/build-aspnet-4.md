---
title: Build your ASP.NET 4 app
description: Define a continuous integration (CI) build for your ASP.NET 4 app in Visual Studio Team Services or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 840F4B48-D9F1-4B5F-98D9-00945501FA98
ms.manager: douge
ms.author: alewis
ms.date: 02/10/2017
---

# Build your ASP.NET 4 app

[!INCLUDE [temp](../../../_shared/version.md)]

Here we'll show you how to define your continuous integration (CI) process for your ASP.NET 4 app.

## Get set up

For the instructions in this topic, you need an ASP.NET 4 project in Visual Studio.

> [!TIP]
> If you don't yet have an app but want to try this out, then see the [Q&A below](#new_solution).

## Define your CI build process

### Create the build definition

<ol>
    [!INCLUDE [include](../../../_shared/begin-create-build-definition.md)]

    <li>Select the **ASP.NET (PREVIEW)** template.</li>


    <li>As the repository source, select the team project, repository, and branch.</li>
</ol>

### Enable continuous integration (CI)

On the Triggers tab, enable **continuous integration** (CI). This tells the system to queue a build whenever someone on your team commits or checks in new code.

## Queue and test the build

Save the build definition and queue a new build by selecting the **Queue new build** command. Once the build is done, click **Artifacts** and then **Explore** to see the zip file produced by the build. This is the web deploy package that your release definition will consume to deploy your app.

[!INCLUDE [include](_shared/deploy-asp-web-app.md)]

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<h3 id="new_solution">How do I create an ASP.NET 4 solution?</h3>

0. In Visual Studio, [connect to your team project](../../../../connect/connect-team-projects.md#visual-studio).

0. On the Team Explorer home page (Keyboard: Ctrl + 0, H), under **Solutions**, click **New**.

0. Select the **Web** templates section, and then choose the **ASP.NET Web Application (.NET Framework)** template.

0. Select **MVC** from the template list.

0. Click **Change Authentication**, select **No Authentication**, and click **OK**.

0. [Commit and push (Git)](../../../../git/share-your-code-in-git-vs.md) or [check in (TFVC)](../../../../tfvc/share-your-code-in-tfvc-vs.md) your code.

### I got a file not found error message. How do I fix it?

All solution files must be checked into the server to run a build. One known cause of missing files is in cases where you populate an empty repo by creating a new project in Visual Studio 2015 Update 3. We recommend that you update your [.gitignore file](../../../../git/tutorial/ignore-files.md) with the latest copy from [GitHub: VisualStudio.gitignore](https://github.com/github/gitignore/blob/master/VisualStudio.gitignore).

[!INCLUDE [temp](../../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
