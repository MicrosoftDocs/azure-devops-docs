---
title: Setting up VSTS for a Java project 
description: Tutorial lab for setting up a Java project with Visual Studio Team Services (VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build 
ms.manager: douge
ms.author: douge
ms.date: 01/22/2018
---

This exercise will walk you through the steps to creating your Visual Studio Team Services (VSTS) account and create a new project. 

## Prerequisites

> [!NOTE]
> **If you already have an active VSTS account, you can skip a few steps and jump to step 13.**

Before you do step 13, log in to your VSTS account and start the New Team Project wizard. Follow the steps (the
instructions assume you’re creating an account *and* a Team Project at the same time but that’s not mandatory—you just need an account in which
you have Project Collection Administrator permissions).

**You must a valid Microsoft Account or previously linked Organizational Account to continue with this tutorial.**

## Create your Visual Studio Team Services account and Team project


1. Login to the virtual machine.

1. Launch your web browser.

1. If you don’t have an existing Microsoft account that you want to
    use, visit <https://outlook.live.com/owa/> to create a Microsoft Account
    and optionally get yourself a free personal e-mail address. If you
    have a Microsoft account you want to use, just continue to the
    next step.

1. Navigate to <https://www.visualstudio.com>.

1. In the upper right-hand corner, click the **Sign In** link.

    ![](../_img/settingvstsproject/image2.png)

1. The site redirects you to a log in page like the following if you’re
    not already logged in (If you don’t see the following screen
    continue to the next step). Enter your e-mail address for your
    Microsoft account and its password and click **Sign in**.

    ![](../_img/settingvstsproject/image3.png)

1. Once you’ve logged in, you might be greeted with a page (*if not,
    jump to the next step*), like the following, that will allow you
    to confirm your **display name**, **contact e-mail**, and your
    **country/region**. Once you set this information, you can change
    it later. Under the **Hello,** field, enter your first and
    last name. If you want to receive e-mail notifications from Visual
    Studio Team Services at a different e-mail address than the one
    associated with your Microsoft account, change the address shown
    under the **We’ll reach you at:** field. Click **Continue**.

    ![](../_img/settingvstsproject/image4.png)

    You should now be at the **My Information** page. You’ll jump from here to the account creation process.

    Please continue reading before making choices.

    >When you are creating an account, there are two pieces of data that you will need to provide. 
    However, from time to time, we experiment with different ways to onboard new customers. It is possible 
    what you see will vary. In general, the following data is required.

    The first piece of data is the **Account URL**. Currently, all Visual Studio Team Services accounts live within the top-level
    **visualstudio.com** domain. The account name you choose could be something personal, like your name, or something more work-related, like
    your company name. If you do intend to set up your account to share with others at your organization, you might want to coordinate this with
    those in your organization that manage your servers and infrastructure.

    The second field that affects your account is where Microsoft hosts your
    account. Visual Studio Team Services is a purpose-built cloud service
    hosted in Microsoft Azure. You should pick the one that is closest to
    you and the majority of users of your account.

    Once you have an account, you need at least one Team Project to track
    you work, store your code, test, and run builds. This lab gives you
    specific instructions so you can use some tools and complete the lab.
    Understand that Visual Studio Team Services is very flexible and that
    you should explore it after the event.

    The next section describes the Visual Studio Team Services on-boarding
    experience. What you see can and will vary if it is your first time
    accessing Visual Studio Team Services or not.

1. On the right of the **My Information** page find the **Create a free
    account now** link and click it.

    ![](../_img/settingvstsproject/image5.png)

    Once you do this, the experience you get might vary. If this is your
    very first time creating a team project, you will be prompted to create
    an account. Generally, you will see a screen like the following.

    ![](../_img/settingvstsproject/image6.png)

1. Enter a value in the **Account URL** field. It is possible you might have to try a couple different names.

1. Click the **Change Options** link.

    ![](../_img/settingvstsproject/image7.png)

1. Select the appropriate region.

    ![](../_img/settingvstsproject/image8.png)

1. Click the **Create Account** button.

    If you have picked an account name in use, you will receive a warning.
    Pick a different name and try again.

    Creating a new account is typically fast and can take as little as a few
    seconds to complete.

1. Once done, you will be directed to the **Create
    your first project** page that helps you create your first Team Project.
    Continue to the steps after the following screen shot to fill in the
    details.

    ![](../_img/settingvstsproject/image9.png)

1. Enter **jdev** in the **Project name** field for your Team Project.
    If you use **jdev** while you are doing in this lab, your screen
    will match the screen shots and instructions here.

1. Select the **Scrum** process template. *This is required*.

1. Select **Git** for Version Control. *This is also required*.

1. If you are provided the option, place a check next to **Create a README.md file to describe the project**. If you do not get the option, there is nothing to worry about. Just continue.

   ![](../_img/settingvstsproject/image10.png)

1. Click **Create Project**. Visual Studio Team Services queues up a job to build your Team
    Project and, once again, in as little as a few seconds, you will
    have a new Team Project.

1. Once done, you should be at your CODE hub in your Team Project.
    Continue reading if you don’t see a screen like below.

    ![](../_img/settingvstsproject/image11.png)

1. If you don’t see the CODE hub but instead see a dialog like the
    following, click **Add code**. If you just see your Team Project’s
    home page, click the CODE hub link and continue.

    ![](../_img/settingvstsproject/image12.png)

1. If your CODE hub looks a bit different than the figure from earlier
    (usually because you don’t have a README.md), click the **Create a
    ReadMe file** button. Once you’ve done this, you’re ready to
    continue on.

    ![](../_img/settingvstsproject/image13.png)

## Import a Github Repo into VSTS

In this task you will import code from a Github repo into VSTS.

1. Connect to the virtual machine with the user credentials which you specified when creating the VM in Azure.

1. Open Chrome and browse to `https://<youraccount>.visualstudio.com` (where `youraccount` is the account you created in VSTS).

1. Click on the `jdev` team project to navigate to it. Click on Code in the blue toolbar at the top to open the Code Hub.

1. Click on the repo drop-down in the upper left (in the grey toolbar) and select "Import repository"

    ![Import a repository in the Code Hub](../_img/settingvstsproject/import-repo.png)

1. Enter the following url: `https://github.com/nwcadence/MyShuttle2.git` and click Import.

    ![Enter the URL](../_img/settingvstsproject/import-myshuttle2-url.png)

1. After a few moments, the code will be imported.

## Import the MyShuttleCalc code from Github into VSTS

In this task you will import the MyShuttleCalc code from GitHub into VSTS. If you have already done so, skip this step.

1. Click on the `jdev` team project to navigate to it. Click on Code in the blue toolbar at the top to open the Code Hub.

1. Click on the repo drop-down in the upper left (in the grey toolbar) and select "New repository".

    ![Import a repository in the Code Hub](../_img/settingvstsproject/import-repo.png)

1. Enter the following url: `https://github.com/nwcadence/MyShuttleCalc.git` and click Import.

    ![Enter the URL](../_img/settingvstsproject/import-myshuttlecalc-url.png)

1. After a few moments, the code will be imported.

   > [!NOTE]
   > It is not necessary to clone GitHub repos into VSTS. VSTS will work just fine with GitHub (or other Git hoster) repos. However, some linkages from source code to other aspects of the DevOps pipeline (such as work items, builds or releases) work best if the code is in VSTS.

Now you’re going to manage your backlog with Visual Studio Team Services. You can read more about account creation and more at
[https://docs.microsoft.com/en-us/vsts/user-guide/connect-team-projects](https://docs.microsoft.com/en-us/vsts/user-guide/connect-team-projects)
