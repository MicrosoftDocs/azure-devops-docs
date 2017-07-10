---
title: Build and deploy your ASP.NET 4 code to Azure
description: Build and deploy your ASP.NET 4 code Azure from Team Foundation Server and Visual Team Services
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 6728CA49-5D44-4603-96E1-3BC3CF8D9793
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
---

# Build and deploy your ASP.NET 4 app to Azure

[!INCLUDE [temp](../../_shared/version.md)]

[!INCLUDE [temp](../../_shared/ci-cd-newbies.md)]

In this walkthrough, we'll show how to build a continuous integration (CI) and continuous deployment (CD) process in Visual Studio Team Services that deploys an ASP.NET 4 web application project to [Azure](https://azure.microsoft.com/).

> [!TIP]
> If you don't yet have an app but want to try this out, then see the [Q&A below](#new_solution).

[!INCLUDE [temp](_shared/steps.md)]

[!INCLUDE [temp](_shared/setup.md)]

[!INCLUDE [include](../_shared/azure-web-app-setup.md)]

[!INCLUDE [temp](_shared/define-ci-build.md)]

### Create the build definition

<ol>
    [!INCLUDE [include](../../_shared/begin-create-build-definition.md)]

    <li>Select the ![Deploy: Azure Web App Deployment](../../steps/deploy/_img/azure-web-app-deployment-step.png) **ASP.NET (PREVIEW)** template.</li>

    <li>As the repository source, select the team project and repository.</li>

    <li>You don't need to modify any of the tasks, but feel free to familiarize yourself with them because you can always make customizations later. To learn more about:
	<ol>
	<li>Tests: [Getting started with continuous testing](../../../test/continuous-testing/getting-started/getting-started-with-continuous-testing.md) and [Continuous testing scenarios and capabilities](../../../test/continuous-testing/index.md).</li>
	<li>[Build tasks](../../define/build.md).
	</ol>
</ol>

### Enable continuous integration (CI)

On the Triggers tab, enable **continuous integration** (CI). This tells the system to queue a build whenever someone on your team commits or checks in new code.

## Queue and test the build

Save the build definition and queue a new build by selecting the **Queue new build** command. Once the build is done, click **Artifacts** and then **Explore** to see the .ZIP file produced by the build. This is the web deploy package that your release definition will consume to deploy your app.

After you've run the build, you're ready to create a release definition to deploy your app to Azure.

[!INCLUDE [include](../_shared/create-release.md)]

[!INCLUDE [include](_shared/commit-build-release.md)]

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<h3 id="new_solution">How do I create an ASP.NET 4 web app?</h3>

1. In Visual Studio, [connect to your team project](../../../connect/connect-team-projects.md#visual-studio).

1. On the Team Explorer home page (Keyboard: Ctrl + 0, H), under **Solutions**, click **New**.

1. Select the **Web** category under **Visual C#**.

1. Select **ASP.NET Web Application** and click **OK**.

1. Select **MVC** from the template list.

1. Click **Change Authentication**, select **No Authentication**, and click **OK**.

1. Optionally, set **Add unit tests** to create a unit test project for the application. Unit tests can be run automatically with every build as part of a release pipeline.

1. Clear **Host in the cloud** and click **OK**.

1. [Commit and push (Git)](../../../git/share-your-code-in-git-vs.md) or [check in (TFVC)](../../../tfvc/share-your-code-in-tfvc-vs.md) your code.

### I got a file not found error message. How do I fix it?

All solution files must be checked into the server to run a build. One known cause of missing files is in cases where you populate an empty repo by creating a new project in Visual Studio 2015 Update 3. We recommend that you update your [.gitignore file](../../../git/tutorial/ignore-files.md) with the latest copy from [GitHub: VisualStudio.gitignore](https://github.com/github/gitignore/blob/master/VisualStudio.gitignore).

### What else can I do when I deploy my app?

[Next steps after deploying your ASP.NET app to an Azure web site](../cd/deploy-webdeploy-webapps.md#next-steps)

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
