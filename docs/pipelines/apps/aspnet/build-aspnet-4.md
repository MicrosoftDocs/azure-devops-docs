---
title: Build your ASP.NET 4 app | VSTS or Team Foundation Server
description: Define a continuous integration (CI) build for your ASP.NET 4 app in VSTS or Microsoft Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 840F4B48-D9F1-4B5F-98D9-00945501FA98
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 12/20/2017
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---


# Build your ASP.NET 4 app

**VSTS | TFS 2018 | TFS 2017.2**

ASP.NET is a mature web platform that provides all the services that you require to build enterprise-class server-based web applications using .NET on Windows. Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a highly customizable continuous integration (CI) process to automatically build your ASP.NET app whenever your team pushes or checks in code. In this quickstart you learn how to define your CI process.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

* While the simplest way to try this quickstart is to use a VSTS account, you can also use a TFS server instead of a VSTS account. Make sure that you have [configured a build agent](../../agents/v2-windows.md) for your team project, and that you have a version of Visual Studio matching your development machine installed on the agent machine.

## Get the sample code

[!INCLUDE [include](../_shared/get-sample-code-intro.md)]

```
https://github.com/adventworks/aspnet4-sample
```

# [VSTS or TFS repo](#tab/vsts)

[!INCLUDE [include](../_shared/get-sample-code-vsts-tfs-2017-update-2.md)]

# [GitHub repo](#tab/github)

::: moniker range="vsts"

[!INCLUDE [include](../_shared/get-sample-code-github.md)]

::: moniker-end

::: moniker range="< vsts"

**TFS**: Does not apply.

::: moniker-end

---

This quickstart works for apps targeting the .NET Framework 4 or newer. The sample app is a Visual Studio solution that has two projects: An ASP.NET Web Application project that targets .NET Framework 4.5, and a Unit Test project.

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

1. Create a new build definition.

 # [VSTS or TFS repo](#tab/vsts)

 Navigate to the **Files** tab of the **Code** hub, and then click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build and Release** hub and asked to **Select a template** for the new build definition.

 # [GitHub repo](#tab/github)

 ::: moniker range="vsts"

 Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then click **+ New**. You are asked to **Select a template** for the new build definition.

 ::: moniker-end

 ::: moniker range="< vsts"

 **TFS**: Does not apply.

 ::: moniker-end

  ---

1. In the right panel, click **ASP.NET**, and then click **Apply**.

 You now see all the tasks that were automatically added to the build definition by the template. These are the tasks that will automatically run every time you push code changes.

1. For the **Agent queue**:

 ::: moniker range="vsts"

 * **VSTS:** Select _Hosted VS2017_. This is how you can use our pool of agents that have the software you need to build your app.
 
 ::: moniker-end

 ::: moniker range="< vsts"

 * **TFS:** Select a queue that includes a [Windows build agent](../../agents/v2-windows.md).
 
 ::: moniker-end

1. Click **Get sources** and then:

 # [VSTS or TFS repo](#tab/vsts)

 Observe that the new build definition is automatically linked to your repository.

 # [GitHub repo](#tab/github)

 ::: moniker range="vsts"

 Select your version control repository. You'll need to authorize access to your repo.

 ::: moniker-end

 ::: moniker range="< vsts"

 **TFS**: Does not apply.

 ::: moniker-end

 ---

1. Click the **Triggers** tab in the build definition. Enable the **Continuous Integration** trigger. This will ensure that the build process is automatically triggered every time you commit a change to your repository.

1. Click **Save & queue** to kick off your first build. On the **Save build definition and queue** dialog box, click **Save & queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

[//]: # (TODO:> [!TIP])
[//]: # (TODO:> To learn more about GitHub CI builds, see [Define CI build process for your Git repo](#)

## View build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next steps

[!INCLUDE [include](../_shared/ci-web-app-next-steps.md)]
