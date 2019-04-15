---
title: Azure Pipelines Documentation
titleSuffix: Azure DevOps Services
description: Learn how to configure CI/CD for the app and platform of your choice using Azure Pipelines and Team Foundation Server (TFS). Includes tutorials, references, and other documentation.
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
layout: HubPage 
ms.assetid: 00f4ed452-fbb8-45f9-8f0a-343702aac5b8  
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.reviewer: vijayma
ms.date: 01/11/2019
monikerRange: '<= azure-devops-2019 || azure-devops'
---

::: moniker range="azure-devops"
# Azure Pipelines
::: moniker-end

::: moniker range="< azure-devops"
# Build and release
::: moniker-end

::: moniker range="azure-devops"
Azure Pipelines helps you implement a build, test, and deployment pipeline for any app.
Tutorials, references, and other documentation show you how to configure and manage continuous integration and continuous delivery (CI/CD) for the app and platform of your choice.
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

Azure Pipelines helps you implement a build, test, and deployment pipeline for any app that you maintain in Azure DevOps Server.
Tutorials, references, and other documentation show you how to configure and manage continuous integration and continuous delivery (CI/CD) for the app and platform of your choice.

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops-2019"

Team Foundation Server (TFS) helps you implement a build, test, and deployment pipeline for any app.
Tutorials, references, and other documentation show you how to configure and manage continuous integration and continuous delivery (CI/CD) for the app and platform of your choice.

::: moniker-end

::: moniker range="azure-devops"

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
                                <ul id="index1" class="cardsF panelContent singlePanelContent cols cols4" style="float: left; display: flex;">
                                    <li>
                                        <a href="get-started/index.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="../_img/index/devopsiconpipelines96.svg" alt="Azure Pipelines logo" />
                                                            </div>
                                                        </div>
                                                        <div class="cardText">
                                                            <h3>Start using Azure Pipelines</h3>
                                                            <p>Sign up and get started using Azure Pipelines</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="create-first-pipeline.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="https://docs.microsoft.com/media/logos/logo_octokitty.svg" alt="GetHub logo" />
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
                                        <a href="get-started-multiplatform.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="../_img/index/i_responsive.svg" alt="Multi platform image" />
                                                            </div>
                                                        </div>
                                                        <div class="cardText">
                                                            <h3>Create a multi-platform pipeline</h3>
                                                            <p>Use Azure Pipelines to build an app written in any language, on multiple platforms.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                     <li>
                                        <a href="yaml-schema.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="../_img/index/i_kanban.svg" alt="designer" />
                                                            </div>
                                                        </div>
                                                        <div class="cardText">
                                                            <h3>YAML schema</h3>
                                                            <p>Detailed reference guide to YAML pipelines, including a catalog of all supported YAML capabilities, and the available options.</p>
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
        <a href="#index2"></a>
        <h2 style="float: left; display: flex;">Build your app</h2>
        <ul id="index2" class="cardsFTitle panelContent singlePanelContent cols cols4" style="float: left; display: flex!important;">
            <li>
                <a href="languages/dotnet-core.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_aspnetcore.svg"); background-size: cover;'>
                                        <img style="display: none;" alt=".NET Core icon" src="_img/index/logo_aspnetcore.svg" data-linktype="external" data-hoverimage="_img/index/logo_aspnetcore.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />.NET Core</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/anaconda.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_anaconda.png"); background-size: cover;'>
                                        <img style="display: none;" alt="Anaconda" src="_img/index/logo_anaconda.png" data-linktype="external" data-hoverimage="_img/index/logo_anaconda.png">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br/>Anaconda</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/android.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_android.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Android logo" src="https://docs.microsoft.com/media/logos/logo_android.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_android.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Android</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/aspnet/build-aspnet-4.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_net.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="ASP.NET logo" src="_img/index/logo_net.svg" data-linktype="external">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />ASP.NET</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/c-cpp/gcc.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_Cplusplus.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="C++ logo" src="https://docs.microsoft.com/media/logos/logo_Cplusplus.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_Cplusplus.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />C/C++ with GCC</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/windows/cpp.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_visual-studio.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Visual Studio logo" src="https://docs.microsoft.com/media/logos/logo_visual-studio.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_visual-studio.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />C/C++ with VC++</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/docker.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_dockercontainer.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Docker logo" src="_img/index/logo_dockercontainer.svg" data-linktype="external" data-hoverimage="_img/index/logo_dockercontainer.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Docker</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/go.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_go.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Go logo" src="_img/index/logo_go.svg" data-linktype="external" data-hoverimage="_img/index/logo_go.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Go</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/java.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_java.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Java logo" src="https://docs.microsoft.com/media/logos/logo_java.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_java.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Java</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/javascript.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_nodejs.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Javascript VM logo" src="_img/index/logo_nodejs.svg" data-linktype="external" data-hoverimage="_img/index/logo_nodejs.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />JavaScript and Node.js</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/php.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_php.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="PHP logo" src="https://docs.microsoft.com/media/logos/logo_php.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_php.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />PHP</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/python.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_python.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Python logo" src="https://docs.microsoft.com/media/logos/logo_python.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_python.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Python</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/ruby.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_ruby.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Ruby logo" src="https://docs.microsoft.com/media/logos/logo_ruby.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_ruby.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Ruby</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/windows/universal.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_uwp.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="UWP logo" src="_img/index/logo_uwp.svg" data-linktype="external" data-hoverimage="_img/index/logo_uwp.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />UWP</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/xamarin.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_xamarin.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Xamarin logo" src="https://docs.microsoft.com/media/logos/logo_xamarin.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_xamarin.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Xamarin</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/xcode.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_xcode.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Xcode logo" src="https://docs.microsoft.com/media/logos/logo_xcode.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_xcode.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Xcode</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <a href="#index3"></a>
        <h2 style="float: left; display: flex;">Deploy your app</h2>
        <ul id="index3" class="cardsFTitle panelContent singlePanelContent cols cols4" style="float: left; display: flex!important;">
            <li>
                <a href="apps/cd/deploy-aks.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/containerservice.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Azure Kubernetes Service logo" src="https://docs.microsoft.com/azure/media/index/containerservice.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/containerservice.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Azure Kubernetes Service</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="targets/azure-stack.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/azure-stack.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Azure Stack logo" src="https://docs.microsoft.com/azure/media/index/azure-stack.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/azure-stack.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Azure Stack</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="targets/azure-sqldb.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/sqldatabase.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Azure SQL Database icon" src="https://docs.microsoft.com/azure/media/index/sqldatabase.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/sqldatabase.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Azure SQL database</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="targets/webapp.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/app-service-web.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Azure Web Apps logo" src="https://docs.microsoft.com/azure/media/index/app-service-web.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/app-service-web.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Azure Web Apps</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/cd/deploy-linuxvm-deploygroups.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_linux-color.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Linux VM logo" src="https://docs.microsoft.com/media/logos/logo_linux-color.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_linux-color.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Linux VM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="artifacts/npm.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_npm.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="npm logo" src="https://docs.microsoft.com/media/logos/logo_npm.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_npm.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />npm</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="artifacts/nuget.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_nuget.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="NuGet logo" src="https://docs.microsoft.com/media/logos/logo_nuget.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_nuget.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />NuGet</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="targets/scvmm.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/virtualmachine.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Virtual Machine Manager icon" src="https://docs.microsoft.com/azure/media/index/virtualmachine.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/virtualmachine.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Virtual Machine Manager</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="targets/vmware.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/virtualmachine.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="VMWare icon" src="https://docs.microsoft.com/azure/media/index/virtualmachine.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/virtualmachine.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />VMware</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/cd/deploy-docker-webapp.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/appservice.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Web App for Containers icon" src="https://docs.microsoft.com/azure/media/index/appservice.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/appservice.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Web App for Containers</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/cd/deploy-webdeploy-iis-deploygroups.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/virtualmachine.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Windows VM icon" src="https://docs.microsoft.com/azure/media/index/virtualmachine.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/virtualmachine.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Windows VM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <a href="#index4"></a>
        <h2 style="float: left; display: flex;">Test your app</h2>
        <ul id="index4" class="cardsFTitle panelContent singlePanelContent cols cols4" style="float: left; display: flex!important;">
            <li>
                <a href="test/review-continuous-test-results-after-build.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("../_img/index/i_code-quality.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Test reports icon" src="../_img/index/i_code-quality.svg" data-linktype="external" data-hoverimage="../_img/index/i_code-quality.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Test Reports</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="test/test-analytics.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("../_img/index/i_analytics.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Test Analytics icon" src="../_img/index/i_analytics.svg" data-linktype="external" data-hoverimage="../_img/index/i_analytics.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Test Analytics</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="test/parallel-testing-any-test-runner.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("../_img/index/i_load-testing.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Parallel testing icon" src="../_img/index/i_load-testing.svg" data-linktype="external" data-hoverimage="../_img/index/i_load-testing.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Parallel testing for efficient pipelines</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="test/continuous-test-selenium.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("../_img/index/i_unit-testing.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Test icon" src="../_img/index/i_unit-testing.svg" data-linktype="external" data-hoverimage="../_img/index/i_unit-testing.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Run Selenium tests</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <h2> Videos</h2>
        <div style="float:left;margin-right:40px">
            <iframe src="https://channel9.msdn.com/Events/Microsoft-Azure/Azure-DevOps-Launch-2018/A101/player" width="480" height="270" allowFullScreen frameBorder="0"></iframe>
            <h3>Build and deploy your code with Azure Pipelines</h3>
        </div>
        <div style="float:left">
            <iframe src="https://channel9.msdn.com/Events/Microsoft-Azure/Azure-DevOps-Launch-2018/A102/player" width="480" height="270" allowFullScreen frameBorder="0"></iframe>
            <h3>Continuously build GitHub projects with Azure Pipelines</h3>
        </div>
        <div style="clear:left"></div>
        <h2> More information</h2>
        <ul class="panelContent cardsF cols cols3" style="float: left; display: flex;">
            <li>
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardText">
                                <h3>Step-by-step tutorials</h3>
                                <p>
                                    <a href="repos/github.md">Build GitHub repositories</a><br />
                                    <a href="repos/azure-repos-git.md">Build Azure Repos Git repositories</a><br />
                                    <a href="build/ci-build-git.md">Build multiple branches</a><br />
                                    <a href="release/define-multistage-release-process.md">Set up a multi-stage release</a><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardText">
                                <h3>Concepts</h3>
                                <p>
                                    <a href="agents/agents.md">Build and release agents</a><br />
                                    <a href="licensing/concurrent-jobs.md">Parallel jobs</a><br />
                                    <a href="release/index.md">Release pipelines</a><br />
                                    <a href="repos/index.md">Repositories</a><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardText">
                                <h3>Reference</h3>
                                <p>
                                    <a href="yaml-schema.md">YAML schema</a><br />
                                    <a href="process/tasks.md">Build and release tasks</a><br />
                                    <a href="policies/permissions.md">Permissions &amp; security roles</a><br />
                                    <a href="/rest/api/vsts">REST API Reference</a><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops"

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
                                <ul id="index1" class="cardsF panelContent singlePanelContent cols cols4" style="float: left; display: flex;">
                                    <li>
                                        <a href="overview.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="../_img/index/devopsiconpipelines96.svg" alt="Azure Pipelines logo" />
                                                            </div>
                                                        </div>
                                                        <div class="cardText">
                                                            <h3>Start using Build and Release</h3>
                                                            <p>Get an overview of continuous integration (CI) and continuous delivery (CD)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="create-first-pipeline.md">
                                            <div class="cardSize">
                                                <div class="cardPadding">
                                                    <div class="card">
                                                        <div class="cardImageOuter">
                                                            <div class="cardImage">
                                                                <img src="../_img/index/i_kanban.svg" alt="designer" />
                                                            </div>
                                                        </div>
                                                        <div class="cardText">
                                                            <h3>Create your first pipeline</h3>
                                                            <p>Learn the basics of using the classic editor to add and customize tasks.</p>
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
        <a href="#index2"></a>
        <h2 style="float: left; display: flex;">Build your app</h2>
        <ul id="index2" class="cardsFTitle panelContent singlePanelContent cols cols4" style="float: left; display: flex!important;">
            <li>
                <a href="languages/dotnet-core.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_aspnetcore.svg"); background-size: cover;'>
                                        <img style="display: none;" alt=".NET Core icon" src="_img/index/logo_aspnetcore.svg" data-linktype="external" data-hoverimage="_img/index/logo_aspnetcore.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />.NET Core</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/android.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_android.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Android logo" src="https://docs.microsoft.com/media/logos/logo_android.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_android.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Android</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/aspnet/build-aspnet-4.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_net.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="ASP.NET logo" src="_img/index/logo_net.svg" data-linktype="external">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />ASP.NET</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/c-cpp/gcc.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_Cplusplus.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="C++ logo" src="https://docs.microsoft.com/media/logos/logo_Cplusplus.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_Cplusplus.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />C/C++ with GCC</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/windows/cpp.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_visual-studio.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Visual Studio logo" src="https://docs.microsoft.com/media/logos/logo_visual-studio.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_visual-studio.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />C/C++ with VC++</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/docker.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_dockercontainer.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Docker logo" src="_img/index/logo_dockercontainer.svg" data-linktype="external" data-hoverimage="_img/index/logo_dockercontainer.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Docker</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/go.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_go.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Go logo" src="_img/index/logo_go.svg" data-linktype="external" data-hoverimage="_img/index/logo_go.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Go</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/java.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_java.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Java logo" src="https://docs.microsoft.com/media/logos/logo_java.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_java.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Java</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/javascript.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_nodejs.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Javascript VM logo" src="_img/index/logo_nodejs.svg" data-linktype="external" data-hoverimage="_img/index/logo_nodejs.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />JavaScript and Node.js</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/php.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_php.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="PHP logo" src="https://docs.microsoft.com/media/logos/logo_php.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_php.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />PHP</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/python.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_python.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Python logo" src="https://docs.microsoft.com/media/logos/logo_python.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_python.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Python</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/ruby.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_ruby.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Ruby logo" src="https://docs.microsoft.com/media/logos/logo_ruby.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_ruby.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Ruby</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/windows/universal.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("_img/index/logo_uwp.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="UWP logo" src="_img/index/logo_uwp.svg" data-linktype="external" data-hoverimage="_img/index/logo_uwp.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />UWP</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/xamarin.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_xamarin.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Xamarin logo" src="https://docs.microsoft.com/media/logos/logo_xamarin.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_xamarin.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Xamarin</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="languages/xcode.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_xcode.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Xcode logo" src="https://docs.microsoft.com/media/logos/logo_xcode.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_xcode.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Xcode</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <a href="#index3"></a>
        <h2 style="float: left; display: flex;">Deploy your app</h2>
        <ul id="index3" class="cardsFTitle panelContent singlePanelContent cols cols4" style="float: left; display: flex!important;">
            <li>
                <a href="targets/azure-sqldb.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/sqldatabase.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Azure SQL Database icon" src="https://docs.microsoft.com/azure/media/index/sqldatabase.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/sqldatabase.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Azure SQL database</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="targets/webapp.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/app-service-web.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Azure Web Apps logo" src="https://docs.microsoft.com/azure/media/index/app-service-web.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/app-service-web.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Azure Web Apps</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/cd/deploy-linuxvm-deploygroups.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_linux-color.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Linux VM logo" src="https://docs.microsoft.com/media/logos/logo_linux-color.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_linux-color.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Linux VM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="artifacts/npm.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_npm.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="npm logo" src="https://docs.microsoft.com/media/logos/logo_npm.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_npm.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />npm</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="artifacts/nuget.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/media/logos/logo_nuget.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="NuGet logo" src="https://docs.microsoft.com/media/logos/logo_nuget.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/media/logos/logo_nuget.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />NuGet</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="targets/scvmm.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/virtualmachine.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Virtual Machine Manager icon" src="https://docs.microsoft.com/azure/media/index/virtualmachine.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/virtualmachine.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Virtual Machine Manager</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="targets/vmware.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/virtualmachine.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="VMWare icon" src="https://docs.microsoft.com/azure/media/index/virtualmachine.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/virtualmachine.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />VMware</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/cd/deploy-docker-webapp.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/appservice.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Web App for Containers icon" src="https://docs.microsoft.com/azure/media/index/appservice.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/appservice.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Web App for Containers</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="apps/cd/deploy-webdeploy-iis-deploygroups.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("https://docs.microsoft.com/azure/media/index/virtualmachine.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Windows VM icon" src="https://docs.microsoft.com/azure/media/index/virtualmachine.svg" data-linktype="external" data-hoverimage="https://docs.microsoft.com/azure/media/index/virtualmachine.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Windows VM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <a href="#index4"></a>
        <h2 style="float: left; display: flex;">Test your app</h2>
        <ul id="index4" class="cardsFTitle panelContent singlePanelContent cols cols4" style="float: left; display: flex!important;">
            <li>
                <a href="test/review-continuous-test-results-after-build.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("../_img/index/i_code-quality.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Test reports icon" src="../_img/index/i_code-quality.svg" data-linktype="external" data-hoverimage="../_img/index/i_code-quality.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Test Reports</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="test/test-analytics.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("../_img/index/i_analytics.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Test Analytics icon" src="../_img/index/i_analytics.svg" data-linktype="external" data-hoverimage="../_img/index/i_analytics.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Test Analytics</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="test/parallel-testing-any-test-runner.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("../_img/index/i_load-testing.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Parallel testing icon" src="../_img/index/i_load-testing.svg" data-linktype="external" data-hoverimage="../_img/index/i_load-testing.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Parallel testing for efficient pipelines</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="test/continuous-test-selenium.md">
                    <div class="cardSize">
                        <div class="cardPadding">
                            <div class="card ready x-hidden-focus">
                                <div class="cardImageOuter">
                                    <div class="cardImage" style='background-position: -50px 0px; background-image: url("../_img/index/i_unit-testing.svg"); background-size: cover;'>
                                        <img style="display: none;" alt="Test icon" src="../_img/index/i_unit-testing.svg" data-linktype="external" data-hoverimage="../_img/index/i_unit-testing.svg">
                                    </div>
                                </div>
                                <div class="cardText">
                                    <h3><br />Run Selenium tests</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <h2> More information</h2>
        <ul class="panelContent cardsF cols cols3" style="float: left; display: flex;">
            <li>
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardText">
                                <h3>Step-by-step tutorials</h3>
                                <p>
                                    <a href="repos/github.md">Build GitHub repositories</a><br />
                                    <a href="build/ci-build-git.md">Build multiple branches</a><br />
                                    <a href="release/define-multistage-release-process.md">Set up a multi-stage release</a><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardText">
                                <h3>Concepts</h3>
                                <p>
                                    <a href="agents/agents.md">Build and release agents</a><br />
                                    <a href="licensing/concurrent-jobs.md">Parallel jobs</a><br />
                                    <a href="release/index.md">Release pipelines</a><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="cardSize">
                    <div class="cardPadding">
                        <div class="card">
                            <div class="cardText">
                                <h3>Reference</h3>
                                <p>
                                    <a href="yaml-schema.md">YAML schema</a><br />
                                    <a href="process/tasks.md">Build and release tasks</a><br />
                                    <a href="policies/permissions.md">Permissions &amp; security roles</a><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>

::: moniker-end

::: moniker range="tfs-2013"

**TFS 2013:** We recommend that you [Migrate from XAML builds to new builds](build/migrate-from-xaml-builds.md). If you're not yet ready to do that, then see [XAML builds](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2013/ms181709(v=vs.120)).

::: moniker-end
