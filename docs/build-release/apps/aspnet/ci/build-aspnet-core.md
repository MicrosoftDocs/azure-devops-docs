---
title: Continuous integration for ASP.NET Core applications
description: Define a continuous integration (CI) build for your an ASP.NET Core app in Visual Studio Team Services or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 95ACB249-0598-4E82-B155-26881A5AA0AA
ms.manager: douge
ms.author: alewis
ms.date: 05/23/2017
---

# Build your ASP.NET Core app

[!INCLUDE [temp](../../../_shared/version-tfs-2017-rtm.md)]

[!INCLUDE [temp](../../../_shared/ci-cd-newbies.md)]

[ASP.NET Core](http://www.asp.net/core) is a lean and composable framework for building web and cloud applications. Here we'll show you how to define your continuous integration (CI) process.

## Get set up

For the instructions in this topic, you need an ASP.NET Core project in Visual Studio 2017 or Visual Studio 2015 Update 3.

> [!TIP]
> If you don't yet have an app but want to try this out, then see the [Q&A below](#new_solution).

## Create the build definition

<ol>
    [!INCLUDE [include](../../../_shared/begin-create-build-definition.md)]

    <li>Where is your code?
   <ul>
      <li>Team Services: Select the **ASP.NET Core (PREVIEW)** template</li>
      <li>TFS: Start with an empty process.</li>
   </ul>
   </li>


    <li>As the repository source, select the team project, repository, and branch.</li>

</ol>

## Add build tasks

### Team Services

[!INCLUDE [include](../_shared/aspnet-core-build-tasks.md)]

### TFS 2017

Add the following tasks.

  <table>
  <tr>
    <td>![icon](../../../steps/utility/_img/command-line.png)<br/>[Utility: Command Line](../../../steps/utility/command-line.md)</td>
    <td>
      <p>Restore NuGet packages.</p>
      <ul>
        <li>Tool: `dotnet`</li>
        <li>Arguments: `restore`</li>
        <li>Advanced, Working folder: Folder in which the project.json file (for projects created with VS 2015) or .csproj file (for projects created with VS 2017) exists.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>![icon](../../../steps/build/_img/visual-studio-build.png)<br>[Build: Visual Studio Build](../../../steps/build/visual-studio-build.md)</td>
    <td>
      <p>(Optional) Build any additional projects that are checked in.<p>
      <ul>
          <li>Solution: ` **\*.sln `</li>
          <li>Platform: `$(BuildPlatform)`</li>
          <li>Configuration: `$(BuildConfiguration)`</li>
          <li>Visual Studio Version: Select `Visual Studio 2015` if your project was created in VS 2015 Update 3. Select `Visual Studio 2017` if your project was created in VS 2017.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>![Command line](../../../steps/utility/_img/command-line.png)<br/>[Utility: Command Line](../../../steps/utility/command-line.md)</td>
    <td>
      <p>Build your ASP.NET Core project and publish the output to a folder.</p>
      <ul>
        <li>Tool: `dotnet`</li>
        <li>Arguments: `publish -c $(BuildConfiguration) -o $(Build.ArtifactStagingDirectory)`</li>
        <li>Advanced, Working folder: Folder in which the project.json file (for projects created with VS 2015) or .csproj file (for projects created with VS 2017) exists.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>![icon](../../../steps/test/_img/visual-studio-test-icon.png)<br/>[Test: Visual Studio Test](../../../steps/test/visual-studio-test.md)</td>
    <td>
    <p>(Optional) Run your tests. See</p>
   <ul>
   <li>[Getting started with continuous testing](../../../ct/getting-started-with-continuous-testing.md)</li>
    <li>[Continuous testing scenarios and capabilities](../../../ct/index.md).</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td>![icon](../../../steps/utility/_img/archive-files.png)<br>[Utility: Archive Files](../../../steps/utility/archive-files.md)</td>
    <td>
      <p>Archive the output into a web deploy package.</p>
      <ul>
        <li>Root folder to archive: `$(Build.ArtifactStagingDirectory)`</li>
        <li>Prefix root folder name to archive paths: **Clear this check box**
        <li>Archive type: `zip`</li>
        <li>Artifact file to create: `$(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip`</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>![icon](../../../steps/utility/_img/publish-build-artifacts.png)<br>[Utility: Publish Build Artifacts](../../../steps/utility/publish-build-artifacts.md)</td>
    <td>
      <p>Publish the build artifacts to be consumed by a release definition.</p>
      <ul>
        <li>Path to publish: `$(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip`</li>
        <li>Artifact name: `drop`</li>
        <li>Artifact type: Server</li>
      </ul>
    </td>
  </tr>
  </table>

## Define variables

On the Variables tab, add the following variables:

|Name|Value|
|-|-|
|`BuildConfiguration`|`release`|
|`BuildPlatform`|`any cpu`|

## Enable continuous integration (CI)

On the Triggers tab, enable **continuous integration** (CI). This tells the system to queue a build whenever someone on your team commits or checks in new code.

## Select the default agent queue

[!INCLUDE [include](../_shared/aspnet-core-build-queue.md)]

## Queue and test the build

Save the build definition and queue a new build by selecting the **Queue new build** command.

Once the build is done (after a couple of minutes), click on the build number (such as "Build 332"), click the **Artifacts** tab, and then **Explore** to see the zip file produced by the build. This is the web deploy package that your release definition will consume to deploy your app.

[!INCLUDE [include](_shared/deploy-asp-web-app.md)]

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../_shared/aspnet-core-build-qa.md)]

[!INCLUDE [temp](../../../_shared/qa-versions.md)]

<!-- BEGINSECTION class="md-qanda" -->
