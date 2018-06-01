---
title: Clone a VSTS Git repository with IntelliJ
description: Tutorial lab for cloning a Visual Studio Team Services (VSTS) Git repo with IntelliJ
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.custom: java
ms.manager: douge
ms.author: douge
author: erickson-doug
ms.date: 01/22/2018
monikerRange: '>= tfs-2015'
---


# Clone a VSTS Git repo using IntelliJ

In this exercise, you are going to open the MyShuttle2 repo from your VSTS account in your VM for editing in IntelliJ.

> [!NOTE]
> These Hands-On Labs use a virtual machine with a Java environment configured by our partner, [Northwest Cadence](https://www.nwcadence.com/).
>
> **[Learn how to connect to the Java VM environment here](https://github.com/nwcadence/java-dev-vsts)**.

## Prerequisites

This exercise assumes you have completed [the VSTS Java project setup tutorial](../settingvstsproject/index.md), have created a Team Project that uses Git for version control, and imported the MyShuttle2 GitHub repo into your team project. This exercise uses a team project named **jdev**, though your team project name may differ.

## Connect to VSTS from IntelliJ

1. Click on the IntelliJ icon in the toolbar to open IntelliJ IDEA.

    ![Click IntelliJ in the Toolbar](../_img/intellijgit/click-intellij.png)

1. The first time you run IntelliJ, it will prompt for IntelliJ settings and theme settings. Click on "Do not import settings," then click on "Skip All and Set Defaults" to use the defaults.

    ![Accept the default IntelliJ theme](../_img/intellijgit/intellij-defaults.png)

1. When the Welcome dialog appears, click Configure and then select Plugins.

    ![Click on Configure to configure Plugins](../_img/intellijgit/intellij-config-plugins.png)

1. In the search box type `visual studio team services` and click the "Search in repositories" link in the main window.

    ![Search for the VSTS plugin](../_img/intellijgit/intellij-search-vsts.png)

1. Click install to install the extension. The install button will change to a "Restart" button - click it to restart IntelliJ.

    ![Install the plugin and restart IntelliJ](../_img/intellijgit/intellij-click-install.png)

1. When IntelliJ restarts, the Welcome dialog will appear again. Click "Check out from Version Control" and select "Team Services Git".

    ![Checkout from Team Services Git](../_img/intellijgit/intellij-open-from-vsts.png)

1. Click on "Sign in..." to sign in to your VSTS account.

    ![Sign in to VSTS](../_img/intellijgit/intellij-vsts-signin.png)

## Clone MyShuttle2 from VSTS with IntelliJ

1. Once you have authenticated, enter "MyShuttle2" into the search bar and select the MyShuttle2 repo from your team project. Click the Clone button to clone the repo to the VM.

    ![Select the VSTS repo](../_img/intellijgit/intellij-select-repo.png)

1. IntelliJ detects a Maven project file (pom.xml) and asks if you want to open it. Click "Yes" to open the project. You can dismiss the Tip of the Day dialog that appears.

1. Press "Alt-1" to open the Project View.

1. Expand `src\main\java\com.microsoft.example` and click on "DataAccess" to open the DataAccess class.

1. A yellow warning appears in the main editor window prompting you to "Setup SDK". Click on the link.

    ![Setup the JDK for the project](../_img/intellijgit/intellij-setup-sdk.png)

1. In the Select Project SDK dialog, click "Configure..."

    ![Click on Configure](../_img/intellijgit/intellij-jdk-configure.png)

1. In the upper left, click the green "+" icon to add a new SDK.

    ![Add an SDK](../_img/intellijgit/intellij-add-sdk.png)

1. Select `java-8-openjdk-amd64` from the folder list and click OK. Click OK back through the rest of the dialogs.

    ![Select the SDK folder](../_img/intellijgit/intellij-select-sdk.png)

    > **Note**: The project will not currently compile, since it has a dependency on a library (MyShuttleCalc) that it cannot resolve. You will fix this in the Package Management lab.

## Clone MyShuttleCalc from VSTS with IntelliJ

1. While the MyShuttle2 project is open in IntelliJ, in the toolbar at the top of IntelliJ, select File -> New -> Project from Version Control -> Team Services Git.

    ![New Team Services Git project](../_img/intellijgit/intellij-new-myshuttlecalc-project.png)

1. Enter "MyShuttleCalc" into the search bar and select the MyShuttleCalc repo from your team project. Click the Clone button to clone the repo to the VM.

    ![Clone the MyShuttleCalc repo](../_img/intellijgit/intellij-clone-myshuttlecalc.png)

1. IntelliJ will prompt to open the project in the same or a new window. Choose "New Window" to open another instance of IntelliJ with the MyShuttleCalc project.

    ![New window](../_img/intellijgit/intellij-new-window.png)

1. IntelliJ should open in a new instance with the project loaded.

    ![MyShuttleCalc](../_img/intellijgit/intellij-myshuttlecalc.png)
