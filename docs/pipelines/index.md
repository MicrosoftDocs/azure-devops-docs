---
title: CI/CD index to content for Azure Pipelines and Team Foundation Server
titleSuffix: Azure Pipelines & TFS
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
layout: HubPage 
monikerRange: '>= tfs-2013'
---

::: moniker range="vsts"
# Azure Pipelines
::: moniker-end
::: moniker range="< vsts"
# Build and release
::: moniker-end

::: moniker range="vsts"
Azure Pipelines help you implement a build, test, and deployment pipeline for any app.
Tutorials, references, and other documentation show you how to configure and manage continuous integration and delivery (CI/CD) for the app and platform of your choice.
::: moniker-end

::: moniker range=">= tfs-2015 < vsts"

[!INCLUDE [temp](_shared/concept-rename-note.md)]

Team Foundation Server (TFS) helps you implement a build, test, and deployment pipeline for any app.
Tutorials, references, and other documentation show you how to configure and manage continuous integration and delivery (CI/CD) for the app and platform of your choice.

::: moniker-end

::: moniker range=">= tfs-2015"

<div id="main" class="v2">
    <div class="container">
        <ul class="pivots">
            <li>
                <a href="#index"></a>
                <ul id="index">
                    <li class="panelItem" data-index="0">
                        <a class="singlePanelNavItem selected" style="display: none" href="#indexA" data-linktype="self-bookmark"></a>
                        <ul class="panelContent singlePanelContent" id="indexA" style="margin-top: 0px; display: flex; float: left; border: none;">
                            <li class="fullSpan">
                                <a href="#index1"></a>
                                <ul id="index1" class="cardsA cols cols4" style="float: left; display: flex;">
                                    <li>
                                        <a href="overview.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="../_img/index/devopsiconpipelines96.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="cardText">
                                                            <h3>Get started</h3>
                                                            <p>Are you a newbie looking to know the basics? Here we'll give you the lay of the land.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="get-started-yaml.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="https://docs.microsoft.com/media/logos/logo_octokitty.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="cardText">
                                                            <h3>Create your first pipeline</h3>
                                                            <p>Get started configuring your pipeline as a YAML file in your repo alongside your code.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="get-started-designer.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="/azure/devops/_img/index/i_kanban.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="cardText">
                                                            <h3>Use the designer</h3>
                                                            <p>Learn the basics to get started using the designer to drag, drop, and customize tasks.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="get-started-azure-devops-project.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="/azure/devops/_img/index/i_scrum.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="cardText">
                                                            <h3>Use the Azure portal</h3>
                                                            <p>If you just want us to set it all up so you can see how it works, you can do it from the Azure portal.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>

## Build your app

<div class="ico48Case halfStack">
<div class="ico48Link">
<a href="apps/aspnet/build-aspnet-4.md">
<img width="48" height="48" alt="" src="_img/index/logo_net.svg">
<span>.NET</span>
</a></div>
<div class="ico48Link">
<a href="languages/dotnet-core.md">
<img width="48" height="48" alt="" src="_img/index/logo_aspnetcore.svg">
<span>.NET Core</span>
</a></div>
<div class="ico48Link">
<a href="languages/android.md">
<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_android.svg">
<span>Android</span>
</a></div>
<div class="ico48Link">
<a href="apps/c-cpp/gcc.md">
<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_Cplusplus.svg">
<span>C/C++ with GCC</span>
</a></div>
<div class="ico48Link">
<a href="apps/windows/cpp.md">
<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_visual-studio.svg">
<span>C/C++ with VC++</span>
</a></div>
<div class="ico48Link">
<a href="languages/docker.md">
<!--<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_docker.svg">-->
<img width="48" height="48" alt="" src="_img/index/logo_dockercontainer.svg">
<span>Docker image</span>
</a></div>
<div class="ico48Link">
<a href="languages/go.md">
<img width="48" height="48" alt="" src="_img/index/logo_go.svg">
<span>Go</span>
</a></div>
<div class="ico48Link">
<a href="languages/java.md">
<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_java.svg">
<span>Java</span>
</a></div>
<div class="ico48Link">
<!--<a href="apps/windows/dot-net.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_NET.svg">-->
<img width="48" height="48" alt="" src="_img/index/logo_net.svg">
<span>.NET Desktop</span>
</a></div>
<div class="ico48Link">
<a href="languages/javascript.md">
<!--<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_nodejs.svg">-->
<img width="48" height="48" alt="" src="_img/index/logo_nodejs.svg">
<span>JavaScript</span>
</a></div>
<div class="ico48Link"><a href="languages/python.md">
<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_python.svg">
<span>Python</span>
</a></div>
<div class="ico48Link">
<a href="apps/windows/universal.md">
<img width="48" height="48" alt="" src="_img/index/logo_uwp.svg">
<span>UWP</span>
</a></div>
<div class="ico48Link">
<a href="languages/xamarin.md">
<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_xamarin.svg">
<span>Xamarin</span>
</a></div>
<div class="ico48Link"><a href="languages/xcode.md">
<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_xcode.svg">
<span>Xcode</span>
</a></div>
</div>

## Deploy your app

<div class="ico48Case halfStack">
<div class="ico48Link">
<a href="apps/cd/azure/deploy-container-kubernetes.md">
<img width="48" height="48" alt="" src="/azure/media/index/containerservice.svg">
<span>Azure Kubernetes Service</span>
</a></div>
<div class="ico48Link">
<a href="targets/azure-stack.md">
<img width="48" height="48" alt="" src="/azure/media/index/azure-stack.svg">
<span>Azure Stack</span>
</a></div>
<div class="ico48Link">
<a href="targets/azure-sqldb.md">
<img width="48" height="48" alt="" src="/azure/media/index/sqldatabase.svg">
<span>Azure SQL database</span>
</a></div>
<div class="ico48Link">
<a href="targets/webapp.md">
<img width="48" height="48" alt="" src="/azure/media/index/app-service-web.svg">
<span>Azure Web App</span>
</a></div>
<div class="ico48Link">
<a href="apps/cd/deploy-linuxvm-deploygroups.md">
<img width="48" height="48" alt="" src="/azure/media/index/virtualmachine.svg">
<span>Linux VM</span>
</a></div>
<div class="ico48Link">
<a href="targets/npm.md">
<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_npm.svg">
<span>npm</span>
</a></div>
<div class="ico48Link">
<a href="targets/nuget.md">
<img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_nuget.svg">
<span>NuGet</span>
</a></div>
<div class="ico48Link">
<a href="targets/scvmm.md">
<img width="48" height="48" alt="" src="_img/index/empty.svg">
<span>SCVMM</span>
</a></div>
<div class="ico48Link">
<a href="targets/vmware.md">
<img width="48" height="48" alt="" src="_img/index/empty.svg">
<span>VMware</span>
</a></div>
<div class="ico48Link">
<a href="apps/cd/deploy-docker-webapp.md">
<img width="48" height="48" alt="" src="/azure/media/index/appservice.svg">
<span>Web App for Containers</span>
</a></div>
<div class="ico48Link">
<a href="apps/cd/deploy-webdeploy-iis-deploygroups.md">
<img width="48" height="48" alt="" src="/azure/media/index/virtualmachine.svg">
<span>Windows VM</span>
</a></div>
</div>

## Test your app

<div class="ico48Case halfStack">
<div class="ico48Link"><a href="test/getting-started-with-continuous-testing.md"><img width="48" height="48" alt="" src="https://docs.microsoft.com/media/logos/logo_visual-studio.svg">
<span>Visual Studio Test</span>
</a></div>
<div class="ico48Link"><a href="test/continuous-test-selenium.md"><img width="48" height="48" alt="" src="tasks/test/_img/visual-studio-test-icon.png">
<span>Selenium Test</span>
</a></div>
<div class="ico48Link"><a href="test/review-continuous-test-results-after-build.md"><img width="48" height="48" alt="" src="tasks/test/_img/run-functional-tests-icon.png">
<span>Review results</span>
</a></div>
</div>

## Step-by-step tutorials

* [Build open source projects](build/ci-public.md)
* [Build multiple branches](build/ci-build-git.md)
* [Set up a multi-stage release](release/define-multistage-release-process.md)

## Concepts

- [Build and release agents](agents/agents.md)
- [Build and release tasks](process/tasks.md)  
- [Parallel jobs](licensing/concurrent-jobs-vsts.md)
- [Release pipelines](release/index.md)


## Videos

| | |
| --- | --- |
| <iframe src="https://channel9.msdn.com/Events/Connect/2017/T174/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> | <iframe src="https://channel9.msdn.com/Events/Connect/2017/T168/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> |
| <iframe src="https://channel9.msdn.com/Events/Connect/2017/T170/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> | <iframe src="https://channel9.msdn.com/Events/Connect/2017/T171/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> |
| <iframe src="https://channel9.msdn.com/Events/Visual-Studio/Visual-Studio-2017-Launch/190/player" width="340" height="190" allowFullScreen frameBorder="0"></iframe> |
| | |

::: moniker-end

::: moniker range="tfs-2013"

**TFS 2013:** We recommend that you [Migrate from XAML builds to new builds](build/migrate-from-xaml-builds.md). If you're not yet ready to do that, then see [XAML builds](http://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx).

::: moniker-end
