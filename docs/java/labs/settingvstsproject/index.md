---
title: Setting up VSTS for a Java project 
description: Tutorial lab for setting up a Java project with Visual Studio Team Services (VSTS)
ms.prod: devops
ms.technology: devops-cicd
ms.custom: java
ms.manager: douge
ms.author: douge
author: erickson-doug
ms.date: 01/22/2018
monikerRange: '>= tfs-2017'
---


This exercise will walk you through the steps to creating your Visual Studio Team Services (VSTS) account and create a new project. 

## Prerequisites

> [!NOTE]
> These Hands-On Labs use a virtual machine with a Java environment configured by our partner, [Northwest Cadence](https://www.nwcadence.com/).
>
> **[Learn how to connect to the Java VM environment here](https://github.com/nwcadence/java-dev-vsts)**.

1. Login to your Team Services account - `https://{your account name}.visualstudio.com`. If you do not have a VSTS account, [sign up for a free one](https://www.visualstudio.com/team-services/).

   > [!div class="mx-imgBorder"]
   > ![Sign up for a VSTS account](../_img/settingvstsproject/newaccount.png)

## (Optional) Generate a VSTS Personal Access Token (PAT)

In this task you will generate a personal access token for yourself. PATs essentially are alternate passwords. You need them to integrate VSTS with non-Microsoft tools such as Git, XCode, etc. You will need PAT to provision your project using the demo generator or to connect a private agent to your VSTS account.

> [!TIP]
> If you already have a PAT, you can skip this step and use your existing PAT (assuming it has the correct scopes).

1. On your VSTS page, in the upper right, click on your profile image and click **Security**.

   > [!div class="mx-imgBorder"]
   > ![The location of your account's Security settings](../_img/settingvstsproject/click-security.png)

1. On the Personal access tokens page, click **Add**. Enter "java" (or whatever you want) for the Description. Scroll to the bottom of the page and click **Create token**.

1. When the token is created, make a note of it as it cannot be viewed again. Copy it from the browser into the clipboard.

1. Click on the Visual Studio Code icon in the toolbar to open Visual Studio Code.

   > [!div class="mx-imgBorder"]
   > ![The location of VS Code in the Java VM environment](../_img/settingvstsproject/vs-code.png)

1. Press Ctrl-N (or use File -> New File) to create a new file. Paste in your PAT. Save this file (**File->Save** or Ctrl+S) to `/home/vmadmin/pat.txt`.

## Create a new project with VSTS Demo Generator...

Next, you need to create a team project. You can create the team project manually or by using [VSTS Demo Generator](https://vstsdemogenerator.azurewebsites.net/), a tool that helps you create team projects on your VSTS account with sample content that include source code, work items, iterations, service endpoints, build and release definitions based on the template you choose during the configuration.

The steps below use VSTS Demo Generator to provision a demo Java project for you.

1. Open [VSTS Demo Generator](https://vstsdemogenerator.azurewebsites.net/).

1. Enter your account name and the PAT you saved earlier. Click **Verify and Continue**.

   > [!div class="mx-imgBorder"]
   > ![The VSTS Demo Generator login page](../_img/settingvstsproject/vstsdemogen.png)

1. Use **MyShuttle2** for the template. Use **jdev-labs** for the Project Name. Select **Create Project**.

   > [!div class="mx-imgBorder"]
   > ![The VSTS Demo Generator project configuration page](../_img/settingvstsproject/create-project.png)

1. After the project is provisioned, click the URL to navigate to the project.


## ...or import a Github Repo into VSTS

If you have not provisioned the team project using the VSTS demo generator in the previous exercise, you can follow the steps in this exercise to manually create a team project and import code from a GitHub repository.

1. From your VSTS account home page, select **New Project**.

1. Use `jdev-labs` for the new **Project Name**. Select **Scrum** as the **Work item process**. Click **Create**.

   > [!div class="mx-imgBorder"]
   > ![VSTS new project configuration page](../_img/settingvstsproject/newproject.png)

1. Click on the repo drop-down in the upper-left (in the grey toolbar) and select "Import repository".

   > [!div class="mx-imgBorder"]
   > ![Import a repository in the Code Hub](../_img/settingvstsproject/import-repo.png)

1. Enter the following url: `https://github.com/nwcadence/MyShuttle2.git` and click Import.

   > [!div class="mx-imgBorder"]
   > ![Enter the URL](../_img/settingvstsproject/import-myshuttle2-url.png)

1. After a few moments, the code will be imported.

## Import the MyShuttleCalc code from Github into VSTS

In this task you will import the MyShuttleCalc code from GitHub into VSTS. If you have already done so, skip this step.

1. Click on the `jdev-labs` team project to navigate to it. Click on Code in the blue toolbar at the top to open the Code Hub.

1. Click on the repo drop-down in the upper left (in the grey toolbar) and select "Import repository". (This will be the second time you import a repo if you create the project manually.)

   > [!div class="mx-imgBorder"]
   > ![Import a repository in the Code Hub](../_img/settingvstsproject/import-repo.png)

1. Enter the following url: `https://github.com/nwcadence/MyShuttleCalc.git` and click **Import**.

   > [!div class="mx-imgBorder"]
   > ![Enter the URL](../_img/settingvstsproject/import-myshuttlecalc-url.png)
    
1. After a few moments, the code will be imported.

   > [!NOTE]
   > It is not necessary to clone GitHub repos into VSTS. VSTS will work just fine with GitHub (or other hosted Git) repos. However, some links from source code to other aspects of the DevOps pipeline (such as work items, builds, or releases) work best if the code is in VSTS.

