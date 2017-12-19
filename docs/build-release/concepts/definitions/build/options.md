---
title: Build definition options
description: Build options on VSTS and Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
---

# Build definition options

[!INCLUDE [temp](../../../_shared/version.md)]

<!--
<div style="padding:5px;border-bottom:1px solid #ccc;font-family:Segoe UI;font-size:13px;margin-bottom:15px">

![Definition edit panel header](_img/_shared/definition-edit-panel-header.png)<br/>

[Build](build.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **[Options](#)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Repository](repository.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Variables](variables.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Triggers](triggers.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [General](general.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Retention](retention.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [History](history.md)
</div>
-->

Here we explain settings you can change on the build definition **Options** tab.

## Description

> **Team Foundation Server (TFS) 2017.1 and older**
>
> This section is available under <b>General<b> tab.  

If you specify a description here, it is shown near the name of the build definition when you select it in the Build area of your team project.

<h2 id="build-number-format">Build number format</h2>

If you leave it blank, your completed build is given a unique integer as its name. But you can give completed builds much more useful names that are meaningful to your team. You can use a combination of tokens, variables, and underscore characters.

### Example  

At the time the build is queued:

* Team project name: Fabrikam

* Build definition name: CIBuild

* Branch: master

* Build ID: 752

* Date: August 5, 2009.

* Time: 9:07:03 PM.

* The build ran once earlier today.

If you specify this build number format:

    $(TeamProject)_$(BuildDefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:.r)

Then the second completed build on this day would be named: **Fabrikam\_CIBuild_master\_20090805.2**

### Tokens

The following table shows how each token is resolved based on the previous example.

| Token | Example replacement value |
| ----- | ------------------------- |
| `$(BuildDefinitionName)` | CIBuild<br /><br />Note: The build definition name must not contain invalid or whitespace characters.|
| `$(BuildID)` | 752<br /><br />$(BuildID) is an internal immutable ID.|
| `$(DayOfMonth)` | 5 |
| `$(DayOfYear)` | 217 |
| `$(Hours)` | 21 |
| `$(Minutes)` | 7 |
| `$(Month)` | 8 |
| `$(Rev:.r)` | 2 (The third build on this day will be 3, and so on.)<br /><br />Use **$(Rev:.rr)** to ensure that every completed build has a unique name. When a build is completed, if nothing else in the build number has changed, the Rev integer value is incremented by one.<br /><br />If you want to show prefix zeros in the number, you can add additional **'r'** characters. For example, specify **$(rev:.rr)** if you want the Rev number to begin with 01, 02, and so on. |
| `$(Date:yyyyMMdd)` | 20090824<br /><br />You can specify other date formats such as **$(Date:MMddyy)** |
| `$(Seconds)` | 3 |
| `$(SourceBranchName)` | master |
| `$(TeamProject)` | Fabrikam |
| `$(Year:yy)` | 09 |
| `$(Year:yyyy)` | 2009 |

### Variables

You can also use user-defined and predefined variables that have a scope of "All" in your build number format. For example, if you've defined `My.Variable`, you could specify the following build number format:

```
$(Build.DefinitionName)_$(Build.DefinitionVersion)_$(Build.RequestedFor)_$(Build.BuildId)_$(My.Variable)
```

The first four variables are predefined. `My.Variable` is defined by you on the [variables tab](variables.md).

## Badge enabled
> **TFS 2017.1 and older**
>
> This section is available under <b>General<b> tab.

Select if you want to show the latest outcome of this build on external web sites.

0. Select the **Badge enabled** check box.

0. Save the definition.

0. When the **Show url** link appears, click it and copy the URL to your clipboard.

0. Use the URL as the source of an image in the HTML of the page of the external web site. For example: ```<img src="{URL you copied from the link}/>```


## Create a work item on failure

If the build process fails, you can automatically create a work item to track getting the problem fixed. You can specify the work item type. 

You can also select if you want to assign the work item to the requestor. For example, if this is a CI build, and a team member checks in some code that breaks the build, then the work item is assigned to that person.

**Additional Fields:** You can set the value of work item fields. For example:

| Field | Value |
|---|---|
| ```System.Title``` | ```Build $(Build.BuildNumber) failed``` |
| ```System.Reason``` |  ```Build failure``` |

**Q:** What other work item fields can I set? **A:**  [Work item field index](../../../../work/work-items/guidance/work-item-field.md)


## Allow scripts to access the OAuth token

Select this check box if you want to enable your script to use the build process OAuth token.

For an example, see [Use a script to customize your build process](../../../actions/scripts/powershell.md).


## Default agent queue
> **TFS 2017.1 and older**
>
> This section is available under <b>General<b> tab.

Select the [queue](../../../concepts/agents/pools-queues.md) that's attached to the pool that contains the agents you want to run this definition.

**Tip:**  If your code is in Visual Studio Team Services (VSTS) and you run your builds on Windows, in many cases the simplest option is use the [Hosted pool](../../../concepts/agents/hosted.md).

## Build job authorization scope
> **TFS 2017.1 and older**
>
> This section is available under <b>General<b> tab.

Specify the authorization scope for a build job. Select:

* **Project Collection** if the build needs access to multiple team projects.

* **Current Project** if you want to restrict this build to have access only the resources in the current team project.

## Build job timeout in minutes
> **TFS 2017.1 and older**
>
> This section is available under <b>General<b> tab.

Specify the maximum time a build job is allowed to execute on an agent before being canceled by the server. Leave it empty or at zero if you want the job to never be canceled by the server.

<h2 id="job-cancel-timeout">Build job cancel timeout in minutes</h2>

> **VSTS only**

Specify the maximum time a build job is allowed to respond after the a user cancels the build. You can specify a value from 1 to 60 minutes.

Set this value to allow sufficient time for tasks to complete in cases where you've specified to **Run this task** as **Even if a previous task has failed, even if the build was cancelled** or as **Custom conditions** that allow a task to [always run](../../../concepts/process/conditions.md#always) after cancellation.

Whatever value you set here, the **Build job timeout in minutes** limit still applies. For example:

* Build job timeout in minutes = 30

* Build job cancel timeout in minutes = 15

* A user clicks **Cancel** after the build has run for 25 minutes.

* The build will be given 5 minutes to cancel instead of the 15 you specified.

> [!NOTE]
>
> The system typically consumes about 10 seconds of this time allotment for messaging before your tasks run.

## Demands
> **TFS 2017.1 and older**
>
> This section is available under <b>General<b> tab.

Use demands to make sure that the capabilities your build needs are present on the build agents that run it. Demands are asserted automatically by build steps or manually by you.

### Build step demands

Some build steps won't run unless one or more demands are met by the build agent. For example, the [Visual Studio Build](../../../tasks/build/visual-studio-build.md) step demands that ```msbuild``` and ```visualstudio``` are installed on the build agent. If your build [includes steps](../../../tasks/index.md) that have demands, they are listed first.

### Manually entered demands

You might need to use on-premises build agents with special capabilities. For example, your build process requires SpecialSoftware.

Add the demand to your build definition.

| Name | Type |
|---|---|
| SpecialSoftware | exists |

Register each build agent that has the capability.

0. Go to the Agent pools tab at the root of the control panel:
[!INCLUDE [agent-pools-tab](../../../concepts/agents/_shared/agent-pools-tab.md)]

0. Click the agent, and then click **Capabilities**

0. Add something like the following entry.

| First box | Second box |
|---|---|
| SpecialSoftware | C:\Program Files (x86)\SpecialSoftware |

> **Tip:** When you manually queue a build you can change the demands for that run.

## Multi-configuration

Select this option to build multiple configurations. For example, you could build a C++ app for both debug and release configurations on both x86 and x64 platforms. To learn about this example, see [Build your C++ app for Windows](../../../apps/windows/cpp.md).

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### In what time zone are the build number time values expressed?

If you are using VSTS, then the time zone is UTC.

If you are using an on-premises Team Foundation Server, then the time zone is the same as the time zone of the operating system of the machine where you are running your application tier server.

[!INCLUDE [temp](../../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
