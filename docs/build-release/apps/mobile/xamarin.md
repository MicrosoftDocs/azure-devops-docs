---
title: Build your Xamarin app
description: Define a CI process that builds your Xamarin solution on Team Foundation Server and Visual Team Services.
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 933A828E-CBB7-44C2-BAC0-1E1E9D78BFA0
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
ms.topic: get-started-article
---

# Build your Xamarin app

**VSTS | TFS 2017 Update 2**

Xamarin enables you to develop a single solution and deploy it to Android, iOS, and Windows devices. Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a highly customizable continuous integration (CI) process to automatically build and package your Xamarin app whenever your team pushes or checks in code. In this tutorial you learn how to define your CI process.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

* While the simplest way to try this quickstart is to use a VSTS account, you can also use a TFS server instead of a VSTS account.

* You will build the sample app on Android and iOS using two build definitions in this quickstart. If you use VSTS, you can use hosted agent for Xamarin.Android, but if you use TFS or to build Xamarin.iOS, you also need a private agent. Set up a private agent and [Install Xamarin](https://www.xamarin.com/download) on the agent machine. The Xamarin version on your dev machine and build agent machine must be at least 4.0.3 for Windows and 5.10.3 for Mac.

 |Build | [Hosted agents](../../concepts/agents/hosted.md) | [On-premises Windows agent](../../actions/agents/v2-windows.md) | On-premises [OSX](../../actions/agents/v2-osx.md) or [Linux](../../actions/agents/v2-linux.md) agent |
 |:---:|:---:|:---:|:---:|
 | Xamarin.Android | Yes | Yes (with Xamarin installed) | Yes (with Xamarin installed) |
 | Xamarin.iOS | No | No | Yes (with Xamarin installed) |
 | UWP | Yes | Yes (Windows 10) | No |

## Get the sample code

[!INCLUDE [include](../_shared/get-sample-code-intro.md)]

```
https://github.com/adventworks/xamarin-sample
```

# [VSTS or TFS repo](#tab/vsts)

[!INCLUDE [include](../_shared/get-sample-code-vsts-tfs-2017-update-2.md)]

# [GitHub repo](#tab/github)

[!INCLUDE [include](../_shared/get-sample-code-github.md)]
 
---

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

You need to create two build definitions - one for Xamarin.Android and one for Xamarin.iOS.

### Define your Xamarin.Android build

1. Create a new build definition.

 # [VSTS or TFS repo](#tab/vsts) 

 Navigate to the **Files** tab of the **Code** hub, and then click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build & Release** hub and asked to **Select a template** for the new build definition.

 # [GitHub repo](#tab/github)

 Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then click **+ New**. You are asked to **Select a template** for the new build definition.

 ---

1. In the right panel, click **Xamarin.Android**, and then click **Apply**.

 You now see all the tasks that were automatically added to the build definition by the template. These are the steps that will automatically run every time you check in code.

1. For the **Default agent queue**:

 * **VSTS:** Select _Hosted VS2017_. This is how you can use our pool of agents that have the software you need to build a .NET Core app.

 * **TFS:** Select a queue that includes a [Windows build agent](../../actions/agents/v2-windows.md).

1. Click **Get sources** and then:

 # [VSTS or TFS repo](#tab/vsts) 

 Observe that the new build definition is automatically linked to your repository.

 # [GitHub repo](#tab/github)

 Select your version control repository. You'll need to authorize access to your repo. 

 > [!TIP]
 > To learn more about GitHub CI builds, see [Define CI build process for your Git repo](../../actions/ci-build-git.md).

 ---

1. Select **Xamarin Component Restore** task. Check the **Enabled** check box if your project uses Xamarin components.

1. Selectt **Xamarin Test Cloud** task. If you have Xamarin UI tests to run in your Xamarin test cloud account, then check the **Enabled** check box.

1. Click the **Variables** tab and modify these variables:

 * `BuildConfiguration` = `Release`

1. Click **Save and queue** to kick off your first build. On the **Queue build** dialog box, click **Queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

### Define your Xamarin.iOS build

Repeat the same steps as above to create another build definition, but this time select the **Xamarin.iOS** template.

1. Click the **Variables** tab and modify these variables:

 * `BuildConfiguration` = `iOS Release`

## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next steps

To be able to configure your own app for iOS release, you need to make the following changes in the solution in your development environment, since the Xamarin.iOS build requires a solution configuration that builds only the Xamarin.iOS project and its dependencies.

0. In Visual Studio, open **Solution Explorer** (Keyboard: Ctrl + Alt + L).

0. Right-click your solution and then click **Configuration Manager**.

0. On the configuration manager dialog box open the active solution configuration drop-down menu and click **New**.

0. On the new solution configuration dialog box:

 * For Name, enter `iOS Release`

 * Open **Copy settings from** drop-down menu and select **Release**.

 * Clear the **Create new project configurations** dialog box.

0. Open the **Active solution platform** drop-down menu:

 0. Select **iPhoneSimulator** and clear the check boxes on all rows except your Xamarin.iOS project and any projects (for example, portable class libraries) it depends on.

 0. Repeat this step for **iPhone**.

0. File -> Save All (Keyboard: Ctrl + Shift + S).

0. Check in your changes.

There's also a known issue that might cause a problem with building your Xamarin.iOS project. For example, in the build log for a Xamarin.iOS build step you might see an errors such as *error : Project reference '../App1/App1.csproj' has invalid or missing guid for metadata 'Project'*.

To fix this issue:

0. In Visual Studio, open **Solution Explorer** (Keyboard: Ctrl + Alt + L).

0. Expand your .iOS project node, and then the **References** node.

0. Right-click each reference to a portable class library and then click **Remove**.

0. Right-click the **References** node and then click **Add Reference**.

0. On the **Reference Manager** dialog box, expand **Projects**, and then click **Solution**.

0. Select the portable class library projects you removed and click **OK**.

0. File -> Save All (Keyboard: Ctrl + Shift + S).

0. Check in your changes.
