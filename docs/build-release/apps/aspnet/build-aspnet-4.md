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

**VSTS | TFS 2017 Update 2 | [XAML Build](https://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx)**

ASP.NET is a mature web platform that provides all the services that you require to build enterprise-class server-based web applications using .NET on Windows. Visual Studio Team Services (VSTS) provides a highly customizable continuous integration (CI) process to automatically build your ASP.NET web app whenever your team pushes or checks in code. In this tutorial you learn how to define your CI process. 
## Prerequisites 

[!INCLUDE [include](../../_shared/ci-cd-prerequisites.md)]

## Open your team project

[!INCLUDE [include](../../_shared/open-team-project.md)]

## Import sample app code

[!INCLUDE [include](_shared/import-code-aspnet-4-vsts.md)]

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

1. On the **Files** tab of the **Code** hub, click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build & Release** hub in VSTS and asked to **Choose a template**.

1. In the right panel, click **ASP.NET (PREVIEW)**, and then click **Apply**.

 You now see all the tasks that were automatically added to the build definition by the template. These are the steps that will automatically run every time check in code.

1. For the **Default agent queue**:

 * **VSTS:** Select _Hosted VS2017_. This is how you can use our pool of agents that have the software you need to build a .NET Core app.

 * **TFS 2017 Update 2:** Select a queue that includes a [Windows build agent](../../actions/agents/v2-windows.md).

1. Click the **Triggers** tab in the build definition. Enable the **Continuous Integration** trigger. This will ensure that the build process is automatically triggered every time you commit a change to your repository.

1. Click **Save and queue** to kick off your first build. On the **Queue build** dialog box, click **Queue**.

A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens. Wait for the build to complete and succeed before proceeding to the next section.

## Next steps

[!INCLUDE [include](../_shared/ci-web-app-next-steps.md)]
