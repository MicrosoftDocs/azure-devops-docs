---
title: CI Build in code using YAML
description: Define your CI build process in YAML in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 5A3A363E-C21F-4593-A145-B57492E9FEDC
ms.manager: douge
ms.author: alewis
ms.date: 12/07/2017
---

# How to use YAML builds

**VSTS**

When you define a CI build on VSTS, you've got a fundamental choice: use a web-based interface or configure your CI process as code in a YAML build. YAML build definitions give you the advantages of configuration as code.

> [!NOTE]
> To use this capability, you must have the **Build YAML definitions** [preview feature](/vsts/collaborate/preview-features) enabled on your account.

In a YAML build definition, your CI build process configured as code, which means:

* The definition is versioned with your code and follows the same branching structure as your code. So you get validation of your changes through code reviews in pull requests and branch build policies.

* If a change to the build process causes a break or results in an unexpected outcome, you can much more easily identify the issue because the change is in version control with the rest of your codebase. This way you can more clearly see the issue and fix it like any other kind of bug.

## Get started

If you're new to YAML builds, or to VSTS, we suggest you [begin with a tutorial](../apps/aspnet/build-aspnet-core.md) and then come back here.

## How do YAML builds compare to web-interface builds?

|Capability|YAML|Web interface|
|-|-|-|
|<center>**Repository**</center>|
|Git and GitHub|Yes|Yes|
|Bitbucket|Not yet|Yes|
|TFVC|No|Yes|
|External Git, Subversion|No|Yes|
|<center>**Capabilities**</center>|
|Configuration as code|Yes|No|
|Fan out and fan in|Yes|Not yet|
|Variables across phases|Yes|Not yet|
|Test and debug the process locally|Not yet|No|
|Set environment variables for scripts (useful for secrets)|Yes|Not yet|
|Badge enabled|Not yet|Yes|
|Pause/disable definition from web editor|Not yet|Yes|
|Link work items|Not yet|Yes|
|Create work item on failure|Not yet|Yes|
|Allow scripts to access OAuth token|Not yet|Yes|
|Build job authorization scope|Not yet|Yes|
|Checkout options: Tag sources, Report build status, Checkout submodules|Not yet|Yes|

## Automatically create a YAML build definition

To make it more convenient to create YAML build definitions, VSTS automatically creates a definition when you add a file named .vsts-ci.yml to the root of your repository. It creates the build definition in a folder that has the same name as your repository.

1. Navigate to the **Code** hub, choose the **Files** tab, and then choose the repository you created in the above steps.

1. In the root folder of the repo, create a new file called **.vsts-ci.yml**.

1. Paste the following content into the file:

```YAML
steps:
- script: echo hello world 
```

If your code is in VSTS, then a new build is automatically created and queued.

 > [!NOTE]
 > If your team project already has a build definition that's pointing to the file, then the system does not automatically create another build definition.

## Manually create a YAML build definition

If your code is in GitHub, or if you want to create multiple YAML build definitions, then after you have published the YAML file in your repo, you can manually create a build definition.

1. Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then click **+ New**. You are asked to **Select a template** for the new build definition.

1. Choose **YAML**, and then click **Apply**.

1. Click **Get sources**.

1. Select the repo that contains your .YML file.

1. Click **Process**.

1. For the **Agent queue** select any of the hosted options.

1. For YAML path, click the **...** button, and then choose your .YML file.

1. Choose **Save & queue**.

## Example: Hello world

To see a more interesting example in action, replace the content in **.vsts-ci.yml** with this content:

```YAML
steps:

- script: |
    echo hello world from %MyName%
    echo Agent.HomeDirectory is %CD%
  workingDirectory: $(Agent.HomeDirectory)
  env:
    MyName: $(Agent.MachineName)
  condition: and(succeeded(), eq(variables['agent.os'], 'windows_nt'))
  displayName: Greeting from Windows machine

- script: |
    echo hello world from $MyName
    echo Agent.HomeDirectory is $PWD
  workingDirectory: $(Agent.HomeDirectory)
  env:
    MyName: $(Agent.MachineName)
  condition: and(succeeded(), in(variables['agent.os'], 'darwin', 'linux'))
  displayName: Greeting from macOS or Linux machine
 ```

Queue the build on any of our hosted agent pools, including **Hosted VS 2017**, **Hosted Linux Preview** or **Hosted macOS Preview**. You'll get different kinds of greetings from each of these typs of agent.

## Look up tasks

To look up the syntax of the tasks that are built into VSTS and TFS, see https://github.com/Microsoft/vsts-tasks/tree/master/Tasks. 

For example, if you want to use the [Copy Files](../tasks/utility/copy-files.md) task, go to https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/CopyFiles and then click the **task.json** file. In this file you'll find the name of task, which in this case is `CopyFiles`. You'll also find the valid `inputs`, for example the `SourceFolder` input.

## Learn more

To learn more about what you can do with YAML builds, see https://github.com/Microsoft/vsts-agent/blob/master/docs/preview/yamlgettingstarted.md.
