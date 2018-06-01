---
title: Create your first build and release | VSTS
description: CI/CD novice? Create an automated build and release pipeline in VSTS and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 038A5329-1B8F-46D9-A0C3-DA3FCFA43996
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 05/11/2018
monikerRange: '>= tfs-2017'
---


# Create your first build and release

::: moniker range="vsts"

We'll show you how to use VSTS pipelines to create a build that prints "Hello world" and then automatically creates a release that does the same. By the time you finish here, you'll see an end-to-end process run every time you push new code into your team project. You'll also become familiar with all the basic concepts of VSTS pipelines.

::: moniker-end

::: moniker range="< vsts"

We'll show you how to use TFS to create a build that prints "Hello world" and then automatically creates a release that does the same. By the time you finish here, you'll see an end-to-end process run every time you push new code into your team project. You'll also become familiar with all the basic concepts of build and release in TFS.

::: moniker-end

## Prerequisites

::: moniker range="vsts"

[!INCLUDE [include](_shared/ci-cd-prerequisites-vsts.md)]

::: moniker-end

::: moniker range="< vsts"

* A [self-hosted Windows agent](agents/v2-windows.md).

::: moniker-end

<a name="add-script"></a>
## Add a script to your repository

Create a PowerShell script that prints `Hello world`.

1. Go to the **Code** hub.

1. Add a file.

 ::: moniker range="vsts"

 ![On the Files tab, from the repo node, select the 'New -> File' option](_img/get-started-designer/add-a-file-tfs-2018-2.png) 

 ::: moniker-end

 ::: moniker range="tfs-2018"

 ![On the Files tab, from the repo node, select the 'New -> File' option](_img/get-started-designer/add-a-file-tfs-2018.png) 

 ::: moniker-end

 ::: moniker range="tfs-2017"

 ![On the Files tab, from the repo node, select the 'Add file' option](_img/get-started-designer/add-a-file.png)

 ::: moniker-end

1. In the dialog box name your new file.
 ```
HelloWorld.ps1
```

1. Copy and paste this script.
 ```ps
Write-Host "Hello world"
 ```

1. **Commit** (save) the file.

> In this tutorial, our focus is on CI/CD, so we're keeping the code part simple. We're working in a VSTS Git repository directly in your web browser.
>
> When you're ready to begin building and deploying a real app, you can use a wide range of version control clients and services with VSTS CI builds. [Learn more](#version-control).

## Create a build definition

Create a build definition that prints "Hello world."

 ::: moniker range="vsts"

1. Select the **Build and Release** hub in your VSTS project, and then choose **Builds**.

   ![navigate to builds tab](_img/get-started-designer/navigate-to-builds-tab-tfs-2018-2.png)

1. Create a new definition.

   ![builds-tab-mine-new-button](_img/get-started-designer/builds-tab-mine-new-button-tab-tfs-2018-2.png)

1. Make sure that the **source**, **team project**, **repository**, and default **branch** match the location in which you created the script.

1. Start with an **empty process**

1. Select **Process** and specify whatever **Name** you want to use. For the **Agent queue**, select **Hosted VS2017**.

1. On the left side, select the plus sign **( + )** for Phase 1 to add a task to the phase, and then on the right side select the **Utility** category, select the **PowerShell** task, and then choose **Add**.

   ![builds-tab-add-task-to-phase](_img/get-started-designer/builds-tab-add-task-tfs-2018-2.png)

1. On the left side select your new **PowerShell** script task.

1. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your repository and select the script you created.

   ![PowerShell task](_img/get-started-designer/powershell-task-1-tfs-2018-2.png)

1. Select **Save & queue**, and then select **Save**.

 ::: moniker-end

 ::: moniker range="tfs-2018"

1. Select the **Build and Release** hub in your VSTS project, and then choose **Builds**.

   ![navigate to builds tab](_img/get-started-designer/navigate-to-builds-tab-tfs-2018-2.png)

1. Create a new definition.

   ![builds-tab-mine-new-button](_img/get-started-designer/builds-tab-mine-new-button-tab-tfs-2018-2.png)

1. Start with an **empty process**

1. Select **Process** and specify whatever **Name** you want to use. For the **Agent queue**, select **Default**.

1. On the left side, select **+ Add Task** to add a task to the phase, and then on the right side select the **Utility** category, select the **PowerShell** task, and then choose **Add**.

   ![builds-tab-add-task-to-phase](_img/get-started-designer/builds-tab-add-task-tfs-2018.png)

1. On the left side select your new **PowerShell** script task.

1. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your repository and select the script you created.

   ![PowerShell task](_img/get-started-designer/powershell-task-1-tfs-2018.png)

1. Select **Save & queue**, and then select **Save**.

 ::: moniker-end

 ::: moniker range="tfs-2017"

1. Select the **Build and Release** hub in your VSTS project, and then the **Builds** tab.

 ![navigate to builds tab](_img/get-started-designer/navigate-to-builds-tab.png)

1. Create a new definition.

 ![builds-tab-mine-new-button](_img/get-started-designer/builds-tab-mine-new-button.png)

1. Start with an **empty process**.

1. Select **Process** and specify whatever **Name** you want to use. 

1. On the **Options** tab, select **Default** for the **Agent queue**, or select whichever queue you want to use that has Windows build agents.

1. On the **Tasks** tab, make sure that **Get sources** is set with the **Repository** and **Branch** in which you created the script.

1. On the left side select **Add Task**, and then on the right side select the **Utility** category, select the **PowerShell** task, and then select **Add**.

1. On the left side select your new **PowerShell** script task.

1. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your repository and select the script you created.

   ![PowerShell task](_img/get-started-designer/powershell-task-1.png)

1. Select **Save & queue**, and then select **Save**.

 ::: moniker-end

> A build definition is the entity through which you define your automated build process. In the build definition, you compose a set of tasks, each of which perform a step in your build. The task catalog provides a rich set of tasks for you to get started. You can also add PowerShell or shell scripts to your build definition.

## Publish an artifact from your build

A typical build produces an artifact that can then be deployed to various environments in a release. Here to demonstrate the capability in a simple way, we'll simply publish the script as the artifact.

::: moniker range="vsts"

1. On the **Tasks** tab, select the plus sign **( + )** for Phase 1 to add a task to the phase.

1. Select the **Utility** category, select the **Publish Build Artifacts** task, and then select **Add**.

   ![publish artifact task](_img/get-started-designer/publish-artifact-task-tfs-2018-2.png)

   **Path to publish**: Select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse and select the script you created.

   **Artifact name**

   ```
   drop
   ```

   **Artifact publish location**: **Visual Studio Team Services/TFS**.

::: moniker-end


::: moniker range=">= tfs-2017 < vsts"

1. On the **Tasks** tab, select **Add Task**.

1. Select the **Utility** category, select the **Publish Build Artifacts** task, and then select **Add**.

 ![publish artifact task](_img/get-started-designer/publish-artifact-task.png)

 **Path to Publish**: Select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse and select the script you created.

 **Artifact Name**

 ```
drop
```

 **Artifact Type**: **Server**.

::: moniker-end

> Artifacts are the files that you want your build to produce. Artifacts can be nearly anything your team needs to test or deploy your app. For example, you've got a .DLL and .EXE executable files and .PDB symbols file of a C# or C++ .NET Windows app.
>
> To enable you to produce artifacts, we provide tools such as copying with pattern matching, and a staging directory in which you can gather your artifacts before publishing them. See [Artifacts in Team Build](build/artifacts.md).

## Enable continuous integration (CI)

1. Select the **Triggers** tab.

1. Enable **Continuous integration**.

>  A continuous integration trigger on a build definition indicates that the system should automatically queue a new build whenever a code change is committed. You can make the trigger more general or more specific, and also schedule your build (for example, on a nightly basis). See [Build triggers](build/triggers.md).

## Save and queue the build

Save and queue a build manually and test your build definition.

::: moniker range=">= tfs-2018 <= vsts"

1. Select **Save & queue**, and then select **Save & queue**.

1. On the dialog box select **Save & queue** once more.

   This queues a new build on the Microsoft-hosted agent. 
   
1. You see a link to the new build on the top of the page. 

   ![build console](_img/get-started-designer/build-console-link-to-new-build-tfs-2018-2.png)

   Choose the link to watch the new build as it happens. Once the agent is allocated, you'll start seeing the live logs of the build. Notice that the PowerShell script is run as part of the build, and that "Hello world" is printed to the console.

   ![build console](_img/get-started-designer/build-console.png)

1. Go to the build summary.

   ![build console link to build summary](_img/get-started-designer/build-console-link-to-build-summary.png)

1. On the **Artifacts** tab of the build notice that the script is published as an artifact.

   ![artifacts explorer](_img/get-started-designer/artifacts-explorer.png)

::: moniker-end

::: moniker range="tfs-2017"

1. Select **Save & queue**, and then select **Save & queue**.

1. On the dialog box select the **Queue** button.

   This queues a new build on the agent. Once the agent is allocated, you'll start seeing the live logs of the build. Notice that the PowerShell script is run as part of the build, and that "Hello world" is printed to the console.

   ![build console](_img/get-started-designer/build-console.png)

1. Go to the build summary.

   ![build console link to build summary](_img/get-started-designer/build-console-link-to-build-summary.png)

1. On the **Artifacts** tab of the build notice that the script is published as an artifact.

   ![artifacts explorer](_img/get-started-designer/artifacts-explorer.png)

::: moniker-end

> You can view a summary of all the builds or drill into the logs for each build at any time by navigating to the **Builds** tab in the **Build and Release** hub. For each build, you can also view a list of commits that were built and the work items associated with each commit. You can also run tests in each build and analyze the test failures.

## Add some variables and commit a change to your script

We'll pass some build variables to the script to make our process a bit more interesting. Then we'll commit a change to a script and watch the CI process run automatically to validate the change.  

1. Edit your build definition.

1. On the **Tasks** tab, select the PowerShell script task.

1. Add these arguments.

 ::: moniker range="vsts"
 ![PowerShell task](_img/get-started-designer/powershell-task-2-tfs-2018-2.png)
 ::: moniker-end
 ::: moniker range=">= tfs-2017 < vsts"
 ![PowerShell task](_img/get-started-designer/powershell-task-2.png)
 ::: moniker-end

 **Arguments**

 ```
-greeter "$(Build.RequestedFor)" -trigger "$(Build.Reason)"
```

1. Save the build definition.

1. Go to the **Code** hub, **Files** tab.

1. Select the **HelloWorld.ps1** file, and then **Edit** the file.

1. Change the script as follows:

 ```ps
Param(
   [string]$greeter,
   [string]$trigger
)
Write-Host "Hello world" from $greeter
Write-Host Trigger: $trigger
```

1. **Commit** (save) the script.

1. Go to the **Build and Release** hub, and notice that a build is automatically triggered by the change that you committed.

1. Select the new build that was created and view its log.

1. Notice that the person who changed the code has their name printed in the greeting message. You also see printed that this was a CI build.

 ![build summary powershell script log](_img/get-started-designer/build-summary-powershell-script-log.png)

> We just introduced the concept of build variables in these steps. We printed the value of a variable that is automatically predefined and initialized by the system. You can also define custom variables and use them either in arguments to your tasks, or as environment variables within your scripts. To learn more about variables, see [Build variables](build/variables.md).

## You've got a build definition. What's next?

You've just created a build definition that automatically builds and validates whatever code is checked in by your team. At this point you can continue to the next section to learn about release definitions. Or, if you prefer, you can [skip ahead](#next-steps) to create a build pipeline for your app.

## Create a release definition

Define the process for running the script in two environments.

::: moniker range=">= tfs-2018 <= vsts"

1. Go to the **Build and Release** tab, and then select **Releases**.

1. Select the action to create a **New definition**. If a release definition is already created, select the plus sign **( + )** and then select  **Create release definition**.

1. Select the action to start with an **empty process**.

1. Name the environment **QA**.

1. In the Artifacts panel, select **+ Add** and specify a **Source (Build definition)**. Select **Add**.

1. Select the **Lightning bolt** to trigger continuous deployment and then enable the **Continuous deployment trigger** on the right.

   ![trigger continuous deployment](_img/get-started-designer/trigger-continuous-deployment-release-environment-tfs-2018-2.png)

1. Select the **Tasks** tab and select your **QA** environment.

1. Select the plus sign **( + )** for the phase to add a task to the phase.

1. On the **Add tasks** dialog box, select **Utility**, locate the **PowerShell** task, and then select its **Add** button.

1. On the left side select your new **PowerShell** script task.

1. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your artifacts and select the script you created.

1. Add these **Arguments**:

   ```
   -greeter "$(Release.RequestedFor)" -trigger "$(Build.DefinitionName)"
   ```

1. On the **Pipeline** tab, select the **QA** environment and select **Clone**.

   ![clone-release-environment](_img/get-started-designer/clone-release-environment-tfs-2018-2.png)

1. Rename the cloned environment **Production**.

1. Rename the release definition **Hello world**.

   ![rename release definition](_img/get-started-designer/rename-release-definition-tfs-2018-2.png)

1. Save the release definition.

::: moniker-end

::: moniker range="tfs-2017"

1. Go to the **Build and Release** hub, and then to the **Releases** tab.

1. Select the action to create a **New definition**.

1. On the dialog box, select the **Empty** template and select **Next**.

1. Make sure that your **Hello world** build definition that you created above is selected. Select **Continuous deployment**, and then select **Create**.

1. Select **Add tasks** in the environment.

1. On the **Task catalog** dialog box, select **Utility**, locate the **PowerShell** task, and then select its **Add** button. Select the **Close** button.

1. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your artifacts and select the script you created.

1. Add these **Arguments**:

 ```
-greeter "$(Release.RequestedFor)" -trigger "$(Build.DefinitionName)"
```

1. Rename the environment **QA**.

 ![rename release environment](_img/get-started-designer/rename-release-environment.png)

1. **Clone** the **QA** environment.

 ![clone-release-environment](_img/get-started-designer/clone-release-environment.png)

 Leave **Automatically approve** and **Deploy automatically...** selected, and select **Create**.

1. Rename the new environment **Production**.

1. Rename the release definition **Hello world**.

 ![rename release definition](_img/get-started-designer/rename-release-definition.png)

1. Save the release definition.

::: moniker-end

> A release definition is a collection of environments to which the application build artifacts are deployed. It also defines the actual deployment process for each environment, as well as how the artifacts are promoted from one environment to another.
>
> Also, notice that we used some variables in our script arguments. In this case, we used [release variables](release/variables.md) instead of the build variables we used for the build definition.

## Deploy a release

Run the script in each environment.

 ::: moniker range="vsts"

1. Create a new release.

 ![create release](_img/get-started-designer/create-release-tfs-2018-2.png)

1. Define the trigger settings and artifact source for the release and then select **Create**.

1. Open the release that you just created.

 ![release created](_img/get-started-designer/release-created-tfs-2018-2.png)

1. View the logs to get real-time data about the release.

 ![release logs](_img/get-started-designer/release-logs-tfs-2018-2.png)

 ::: moniker-end

 ::: moniker range="tfs-2018"

1. Create a new release.

 ![create release](_img/get-started-designer/create-release-tfs-2018-2.png)

1. Define the trigger settings and artifact source for the release and then select **Queue**.

1. Open the release that you just created.

 ![release created](_img/get-started-designer/release-created-tfs-2018-2.png)

1. View the logs to get real-time data about the release.

 ![release logs](_img/get-started-designer/release-logs-tfs-2018-2.png)

 ::: moniker-end

 ::: moniker range="tfs-2017"

1. Create a new release.

 ![create release](_img/get-started-designer/create-release.png)

1. Open the release that you just created.

 ![release created](_img/get-started-designer/release-created.png)

1. View the logs to get real-time data about the release.

 ![release logs](_img/get-started-designer/release-logs.png)

 ::: moniker-end

> You can track the progress of each release to see if it has been deployed to all the environments. You can track the commits that are part of each release, the associated work items, and the results of any test runs that you've added to the release process.

## Change your code and watch it automatically deploy to production

We'll make one more change to the script. This time it will automatically build and then get deployed all the way to the production environment.

1. Go to the **Code** hub, **Files** tab, edit the **HelloWorld.ps1** file, and change it as follows:

 ```ps
Param(
   [string]$greeter,
   [string]$trigger
)
Write-Host "Hello world" from $greeter
Write-Host Trigger: $trigger
Write-Host "Now that you've got CI/CD, you can automatically deploy your app every time your team checks in code."
```

1. **Commit** (save) the script.

1. Select the **Builds** tab to see the build queued and run.

1. After the build is completed, select the **Releases** tab, open the new release, and then go to the **Logs**.

 Your new code automatically is deployed in the **QA** environment, and then in the **Production** environment.

::: moniker range=">= tfs-2018 <= vsts"

 ![release script step final log](_img/get-started-designer/release-script-step-final-log-tfs-2018-2.png)

 ::: moniker-end

 ::: moniker range="tfs-2017"

 ![release script step final log](_img/get-started-designer/release-script-step-final-log.png)

 ::: moniker-end

> In many cases, you probably would want to edit the release process so that the production deployment happens
  only after some testing and approvals are in place. See [Approvals and gates overview](release/approvals/index.md).

## Put CI/CD to work for you

We hope this tutorial gave you an understanding of the basic concepts of Team Build and Release Management. To get started building and deploying an app, we suggest you proceed next to one of these topics:

* [ASP.NET](apps/aspnet/build-aspnet-4.md)

* [ASP.NET core](apps/aspnet/build-aspnet-core.md)

* [Node.js](apps/nodejs/build-gulp.md)

* [Build and deploy your app](apps/index.md)

<a name="next-steps"></a>
## Next steps

You've just learned the basics of using the designer to create and run a VSTS build and release process.
Now you're ready to configure your build definition for the programming language you're using.
Go ahead and create a new build pipeline, and this time, use one of the following templates.

| Language | Template to use | 
|-|-|
| [.NET](apps/aspnet/build-aspnet-4.md) | ASP.NET |
| [.NET Core](apps/aspnet/build-aspnet-core.md) | ASP.NET Core |
| [C++](apps/windows/cpp.md) | .NET Desktop | 
| [Go](apps/go/go.md) | Go |
| [Java](apps/java/build-gradle.md) | Gradle |
| [JavaScript](apps/nodejs/build-gulp.md) | NodeJS with Gulp (Grunt is also an option)|
| [Xcode](apps/mobile/xcode-ios.md) | Xcode |

## Q&A

### Where can I read articles about DevOps and CI/CD?
<!-- BEGINSECTION class="md-qanda" -->

[What is Continuous Integration?](/azure/devops/what-is-continuous-integration)

[What is Continuous Delivery?](/azure/devops/what-is-continuous-delivery)

[What is DevOps?](/azure/devops/what-is-devops)

<a name="version-control"></a>
### What kinds of version control can I use

We've used a Git repository in VSTS to keep things focused on CI/CD for this tutorial.

When you're ready to get going with CI/CD for your app, you can use the version control system of your choice:

* Clients

 * [Visual Studio Code for Windows, macOS, and Linux](https://code.visualstudio.com)

 * [Visual Studio with Git for Windows](../git/share-your-code-in-git-vs.md) or [Visual Studio for Mac](https://www.visualstudio.com/vs/visual-studio-mac/)

 * [Visual Studio with TFVC](../tfvc/share-your-code-in-tfvc-vs.md)

 * [Eclipse](../git/share-your-code-in-git-eclipse.md)

 * [Xcode](../git/share-your-code-in-git-xcode.md)

 * [IntelliJ](/vsts/java/download-intellij-plug-in)

 * [Command line](../git/share-your-code-in-git-cmdline.md)

* Services

 * [VSTS](https://www.visualstudio.com/team-services/)

 * Git service providers such as GitHub and Bitbucket

 * Subversion

### How do I replicate a definition?

If your definition has a pattern that you want to replicate in other definitions, clone it, export it, or save it as a template.

![all-definitions-build-action-menu-replicate-actions](_img/get-started-designer/all-definitions-build-action-menu-replicate-actions.png)

After you clone a definition, you can make changes and then save it.

After you export a definition, you can import it from the **All Definitions** tab.

After you create a template, your team members can use it to follow the pattern in new definitions.

> [!TIP]
>
> If you're using the **New Build Editor**, then your custom templates are shown at the bottom of the list.

### How do I work with drafts?

If you're editing a build definition and you want to test some changes that are not yet ready for production, you can save it as a draft.

![save-as-draft](_img/get-started-designer/save-as-draft.png)

You can edit and test your draft as needed.

![edit draft](_img/get-started-designer/edit-draft.png)

When you're ready you can publish the draft to merge the changes into your build definition.

![publish draft](_img/get-started-designer/publish-draft.png)

Or, if you decide to discard the draft, you can delete it from the **All Definition** tab shown above.

<a name="queueabuild"></a>
### What else can I do when I queue a build?

You can queue builds [automatically](build/triggers.md) or manually.

When you manually queue a build, you can, for a single run of the build:

* Specify the [queue](agents/pools-queues.md) into which the build goes.

* Add and modify some [variables](build/variables.md).

* Add [demands](build/options.md#demands).

* In a Git repository

 - Build a [branch](../git/tutorial/branches.md) or a [tag](http://git-scm.com/book/en/v2/Git-Basics-Tagging).

 - Build a [commit](../git/tutorial/commits.md).

* In a TFVC repository

 - Specify the source version as a [label](https://msdn.microsoft.com/en-us/library/ms181439.aspx) or [changeset](https://msdn.microsoft.com/en-us/library/ms181408.aspx).

 - Run a private build of a [shelveset](https://msdn.microsoft.com/en-us/library/ms181403.aspx). (You can use this option on either a [Microsoft-hosted agent](agents/hosted.md) or a [self-hosted agent](agents/agents.md).)

### Where can I learn more about build definition settings?

To learn more about build definition settings, see:

* [Getting sources](build/repository.md)

* [Tasks](tasks/index.md)

* [Variables](build/variables.md)

* [Triggers](build/triggers.md)

* [Options](build/options.md)

* [Retention](policies/retention.md)

* [History](build/history.md)

### How do I programmatically create a build definition?

[REST API Reference: Create a build definition](../integrate/index.md)

> [!NOTE]
> You can also manage builds and build definitions from the command line or scripts using the [VSTS CLI](https://docs.microsoft.com/en-us/cli/vsts/overview?view=vsts-cli-latest).


<!-- ENDSECTION -->
