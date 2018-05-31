---
title: CI/CD index to content for VSTS and Team Foundation Server | VSTS & TFS    
description: Learn how to configure CI/CD for the app and platform of your choice. Tutorials, references, and other documentation.  
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 00f4ed452-fbb8-45f9-8f0a-343702aac5b8  
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: vijayma
ms.date: 02/19/2018
ms.topic: conceptual
layout: LandingPage
monikerRange: '>= tfs-2013'
---


# Build and release

::: moniker range=">= tfs-2015"

VSTS and Team Foundation Server help you implement a continuous integration (CI) and deployment (CD) pipeline for any app. Tutorials, references, and other documentation show you how to configure and manage CI/CD for the app and platform of your choice.

## 5-Minute quickstarts

### Learn how to build your app

<!-- Converting to icon48 format, this gets cleaner in YAML -->
<div class="ico48Case halfStack">
<div class="ico48Link"><a href="languages/android.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/en-us/media/logos/logo_android.svg"><span>Android</span></a></div>
<div class="ico48Link"><a href="apps/aspnet/build-aspnet-4.md"><img width="48" height="48" alt="" src="_img/index/logo_net.svg"><span>ASP.NET</span></a></div>
<div class="ico48Link"><a href="apps/aspnet/build-aspnet-core.md"><img width="48" height="48" alt="" src="_img/index/logo_net.svg"><span>ASP.NET Core</span></a></div>
<div class="ico48Link"><a href="apps/c-cpp/gcc.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_Cplusplus.svg"><span>C/C++ with GCC</span></a></div>
<div class="ico48Link"><a href="apps/windows/cpp.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_visual-studio.svg"><span>C/C++ with VC++</span></a></div>
<div class="ico48Link"><a href="apps/containers/build.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_docker.svg"><span>Docker image</span></a></div>
<div class="ico48Link"><a href="apps/go/go.md"><img width="48" height="48" alt="" src="_img/index/logo_go.svg"><span>Go</span></a></div>
<div class="ico48Link"><a href="apps/java/build-gradle.md"><img width="48" height="48" alt="" src="_img/index/logo_gradle.png"><span>Gradle</span></a></div>
<div class="ico48Link"><a href="apps/java/build-maven.md"><img width="48" height="48" alt="" src="_img/index/logo_maven.svg"><span>Maven</span></a></div>
<div class="ico48Link"><a href="apps/windows/dot-net.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_NET.svg"><span>.NET Desktop</span></a></div>
<div class="ico48Link"><a href="apps/nodejs/build-gulp.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_nodejs.svg"><span>Node.js</span></a></div>
<div class="ico48Link"><a href="apps/windows/universal.md"><img width="48" height="48" alt="" src="_img/index/logo_uwp.svg"><span>UWP</span></a></div>
<div class="ico48Link"><a href="apps/mobile/xamarin.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_xamarin.svg"><span>Xamarin</span></a></div>
<div class="ico48Link"><a href="apps/mobile/xcode-ios.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_xcode.svg"><span>Xcode</span></a></div>
</div>

### Learn how to deploy your app

<!-- Converting to icon48 format, this gets cleaner in YAML -->
<div class="ico48Case halfStack">
<div class="ico48Link"><a href="apps/cd/azure/aspnet-core-to-azure-webapp.md"><img width="48" height="48" alt="" src="_img/index/app-service-web.png"><span>Azure Web App</span></a></div>
<div class="ico48Link"><a href="apps/cd/deploy-linuxvm-deploygroups.md"><img width="48" height="48" alt="" src="_img/index/virtualmachine.png"><span>Linux VM</span></a></div>
<div class="ico48Link"><a href="apps/cd/deploy-docker-webapp.md"><img width="48" height="48" alt="" src="_img/index/app-service-web.png"><span>Web App for Containers</span></a></div>
<div class="ico48Link"><a href="apps/cd/deploy-webdeploy-iis-deploygroups.md"><img width="48" height="48" alt="" src="_img/index/virtualmachine.png"><span>Windows VM</span></a></div>
</div>

### Learn how to test your app

<!-- Converting to icon48 format, this gets cleaner in YAML -->
<div class="ico48Case halfStack">
<div class="ico48Link"><a href="test/getting-started-with-continuous-testing.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_visual-studio.svg"><span>Visual Studio Test</span></a></div>
<div class="ico48Link"><a href="test/continuous-test-selenium.md"><img width="48" height="48" alt="" src="tasks/test/_img/visual-studio-test-icon.png"><span>Selenium Test</span></a></div>
<div class="ico48Link"><a href="test/review-continuous-test-results-after-build.md"><img width="48" height="48" alt="" src="tasks/test/_img/run-functional-tests-icon.png"><span>Review results</span></a></div>
</div>

## Step-by-step tutorials

* [CI builds for Git in VSTS](build/ci-build-git.md)
* [Set up multi-stage release](release/define-multistage-release-process.md)

## Videos

| | |
| --- | --- |
| <iframe src="https://channel9.msdn.com/Events/Connect/2017/T174/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> | <iframe src="https://channel9.msdn.com/Events/Connect/2017/T168/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> |
| <iframe src="https://channel9.msdn.com/Events/Connect/2017/T170/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> | <iframe src="https://channel9.msdn.com/Events/Connect/2017/T171/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> |
| <iframe src="https://channel9.msdn.com/Events/Visual-Studio/Visual-Studio-2017-Launch/190/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> |
| | |

## Concepts

- [Release definitions](release/index.md)
- [Build and release agents](agents/agents.md)
- [Build and release tasks](process/tasks.md)  
- [Licensing and build and release pipelines](licensing/concurrent-jobs-vsts.md)

## Resources

- [What is continuous integration?](/azure/devops/what-is-continuous-integration)  
- [What is continuous delivery?](/azure/devops/what-is-continuous-delivery)  
- [What is DevOps?](/azure/devops/what-is-devops)   
- [Build and release marketplace extensions](https://marketplace.visualstudio.com/search?target=VSTS&category=Build%20and%20release&sortBy=Downloads)

::: moniker-end

::: moniker range="tfs-2013"

**TFS 2013:** We recommend that you [Migrate from XAML builds to new builds](build/migrate-from-xaml-builds.md). If you're not yet ready to do that, then see [XAML builds](http://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx).

::: moniker-end
