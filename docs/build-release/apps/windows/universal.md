---
title: Build your Universal Windows Platform app
description: Define a CI process that builds your Universal Windows Platform (UWP) solution on Team Foundation Server and Visual Team Services.
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: E3E15C22-3211-4FCC-A10C-5717EA8B116E
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
ms.topic: get-started-article
---

# Build your Universal Windows Platform app

**VSTS | TFS 2017 Update 2**

Universal Windows Platform (UWP) is a common app platform available on every device that runs Windows 10. Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a highly customizable continuous integration (CI) process to automatically build and package your UWP app whenever your team pushes or checks in code. In this tutorial you learn how to define your CI process.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-tfs.md)]

## Import sample app code

VSTS and TFS are full-featured Git servers for hosting your team's source code. You'll import code for a sample UWP app into VSTS/TFS Git repository. This is the app that you'll configure CI/CD for.

1. Open your team project in your web browser:

 * **VSTS:** `https://{your-account}.visualstudio.com/DefaultCollection/{your-team-project}`

 * **TFS:** `http://{your-server}:8080/tfs/DefaultCollection/{your-team-project}`

 [The TFS URL doesn't work for me. How can I get the correct URL?](../../../security/websitesettings.md)

1. On the **Code** hub for your team project, select the option to **Import repository**.

 ![import repository menu item](../_shared/_img/import-repository-menu-item.png)

1. In the **Import a Git repository** dialog box, paste the following URL into the **Clone URL** text box.

 ```bash
https://github.com/Microsoft/UWPQuickStart
```

1. Click **Import** to copy the sample code into your Git repo.

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

1. On the **Files** tab of the **Code** hub, click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build & Release** hub in VSTS and asked to **Choose a template**.

1. In the right panel, click **Universal Windows Platform**, and then click **Apply**.

 You now see all the tasks that were automatically added to the build definition by the template. These are the steps that will automatically run every time check in code.

1. For the **Default agent queue**:

 * **VSTS:** Select _Hosted VS2017_. This is how you can use our pool of agents that have the software you need to build a .NET Core app.

 * **TFS:** Select a queue that includes a [Windows build agent](../../actions/agents/v2-windows.md).

1. Select the **Visual Studio Build** task from the tasks. On the right side, you see the parameters for the task. _Append_ the following additional parameter to the MSBuild Arguments:<br/>

 `/p:AppxPackageSigningEnabled=false`

 > Why do I need these arguments to MSBuild?<br/>
 > * /p:AppxBundlePlatforms="$(BuildPlatform)": The template is setup with BuildPlatform="x86|x64|ARM" so the bundle will include all three platforms. All three platform should be included when creating an appxupload file.
 > * /p:AppxPackageDir="$(Build.BinariesDirectory)\AppxPackages\\": Location where the bundle directories are created.
 > * /p:AppxBundle=Always: Always produce a bundle.
 > * /p:UapAppxPackageBuildMode=StoreUpload: Produces an appxupload file.
 > * /p:AppxPackageSigningEnabled=false: Do not sign the packages. In a real production set up, you need to perform additional steps to sign the packages.

1. Click the **Triggers** tab in the build definition. Enable the **Continuous Integration** trigger. This will ensure that the build process is automatically triggered every time you commit a change to your repository.

1. Click **Save and queue** to kick off your first build. On the **Queue build** dialog box, click **Queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.


## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next steps

You can now update the build definition to generate production builds.

 * [Signing UWP package](https://docs.microsoft.com/en-us/windows/uwp/packaging/create-certificate-package-signing)
 * [Associate package with the store](https://msdn.microsoft.com/en-us/library/windows/apps/hh454036.aspx)
