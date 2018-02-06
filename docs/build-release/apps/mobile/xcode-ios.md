---
title: Build your Xcode app
description: Build and test Xcode projects with VSTS or Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: e1b5bda1-9cab-4083-a593-36ae52e82b4a
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
ms.topic: get-started-article
---

# Build your Xcode app

**VSTS | TFS 2018 | TFS 2017.2**

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a highly customizable continuous integration (CI) process to automatically build and package your Xcode app whenever your team pushes or checks in code. In this quickstart you learn how to define your CI process.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

* While the simplest way to try this quickstart is to use a VSTS account, you can also use a TFS server instead.

* First, you will need a build agent configured on a Mac machine. You may use one of the following:

  1. The **Hosted macOS Preview** agent provided by VSTS, or
  1. Provide your own agent by opening the macOS Terminal app on your Mac and following these [setup instructions](../../actions/agents/v2-osx.md). The agent will automatically register itself with VSTS / TFS when you start it for the first time. Your Mac also needs to have Node.js, Xcode, and [xcpretty](https://github.com/supermarin/xcpretty) (for testing) installed.

## Get the sample code

[!INCLUDE [include](../_shared/get-sample-code-intro.md)]

```
https://github.com/adventworks/xcode-sample
```

# [VSTS or TFS repo](#tab/vsts)

[!INCLUDE [include](../_shared/get-sample-code-vsts-tfs-2017-update-2.md)]

# [GitHub repo](#tab/github)

[!INCLUDE [include](../_shared/get-sample-code-github.md)]

---

The sample provided here is an iOS app, but the concepts described here translate to other Xcode builds such as for macOS, tvOS, and watchOS apps. Results from running tests are published to VSTS using **[xcpretty](https://github.com/supermarin/xcpretty)**. That is why you will need to have xcpretty installed if you are using your own Mac machine to perform builds, since xcpretty is not part of Xcode itself.

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

1. Create a new build definition.

 # [VSTS or TFS repo](#tab/vsts)

 Navigate to the **Files** tab of the **Code** hub, and then click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build and Release** hub and asked to **Select a template** for the new build definition.

 # [GitHub repo](#tab/github)

 Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then click **+ New**. You are asked to **Select a template** for the new build definition.

 ---

1. In the right panel, click **Xcode**, and then click **Apply**.

 You now see all the tasks that were automatically added to the build definition by the template. These are the steps that will automatically run every time you check in code.

1. For the **Agent queue**, select **Hosted macOS Preview** or a queue that includes the Mac agent you set up.

1. For the **Scheme**, enter `iOSHelloWorld`

1. Make sure that each of the Xcode steps are set to use version **4.*** or later.

1. Click **Get sources** and then:

 # [VSTS or TFS repo](#tab/vsts)

 Observe that the new build definition is automatically linked to your repository.

 # [GitHub repo](#tab/github)

 Select your version control repository. You'll need to authorize access to your repo.

 ---

1. Click the **Triggers** tab in the build definition. Enable the **Continuous Integration** trigger. This will ensure that the build process is automatically triggered every time you commit a change to your repository.

1. Click **Save & queue** to kick off your first build. On the **Save build definition and queue** dialog box, click **Save & queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

## Troubleshooting tips

If you encounter a "User interaction not allowed" error when running the agent as a launch agent, on the **Xcode** task, you will either need enable the "Unlock default keychain" option, or switch to referencing signing certificates using a file. See [Sign your mobile app](app-signing.md) for details.

If you run into issues with your tests hanging and/or not being able to start the iOS Simulator at times, you can add the **Command Line** task to run the `killall` tool with "Simulator" as an argument (i.e. `killall "Simulator"`). This will force the simulator to shut down in the event it is hung. Exercise care when running the command if you have multiple agents running for the same user and that you do not accidently kill other processes.

## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next steps

To sign your application with a certificate and provisioning profile as part of CI, see [Sign your mobile app](app-signing.md).

If you plan to use your own Xcode project for this quickstart, an additional step is required to configure your project for a CI environment. Mark a scheme of your Xcode project as "Shared" and add it to source control to be used during your CI builds.  Follow these steps:

1. In Xcode, open your project and go to **Product** > **Scheme** > **Manage Schemes...**

2. Enable **Shared** next to the scheme you want to use during CI. Remember the name of the scheme you shared as we will reference it later.

3. Now add the new files and folders in your .xcodeproj folder (specifically the xcsharedata folder to source control).

 ![Shared Scheme](_img/xcode-ios/xcode-1.png)
