---
title: Build your C++ app
description: Build your C++ app in Team Foundation Server and Visual Team Services
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 49886DF3-3689-48B3-8F1C-CA99DAFD1E49
ms.manager: douge
ms.author: alewis
ms.date: 12/15/2016
---

# Build your C++ app for Windows

[!INCLUDE [temp](../../_shared/version.md)]

Here we'll show you how to create a continuous integration (CI) build to automatically build and test your C++ Windows app whenever your team checks in code. This build will also automatically supply your team with artifacts of your application, which you can use for debugging old builds.

## Get set up

For the instructions in this topic, you need a C++ project in Visual Studio.

> [!TIP]
> If you don't yet have an app but want to try this out, then see the [Q&A below](#new_solution).

## Create the build definition

In this section we'll create a build definition for your C++ app.

<ol>
    [!INCLUDE [include](../../_shared/begin-create-build-definition.md)]

    <li>On the Create new build definition dialog box, select **Visual Studio**, and then click **Next**.</li>


    <li>As the repository source, select the team project, repository, and branch, set the option for **continuous integration**, and click **Create**. The continuous integration option is what tells Team Services to queue a build when new code is committed or checked in.</li>
</ol>

### Build steps

On the [build tab](../../define/build.md) you'll see build steps.

> [!IMPORTANT]
> Make sure the Copy Files step is set up to copy the artifacts that your team needs. See below for an example.


<table>
<tr>
<td>![Package: NuGet Installer](../../steps/package/_img/nuget-installer.png)<br/>[Package: NuGet Installer](../../steps/package/nuget-installer.md)</td>
<td>
<p>Install your NuGet package dependencies (if you have any).</p>
</td>
</tr>
<tr>
    <td>![icon](../../steps/build/_img/visual-studio-build.png)<br>[Build: Visual Studio Build](../../steps/build/visual-studio-build.md)</td>
    <td>
        <p>Build the solution.</p>
        <ul>
            <li>Solution: ` **\*.sln `</li>
            <li>Platform: `$(BuildPlatform)`</li>
            <li>Configuration: ` $(BuildConfiguration)`</li>
        </ul>
    </td>
</tr>
<tr>
<td>![icon](../../steps/test/_img/visual-studio-test-icon.png)<br/>[Test: Visual Studio Test](../../steps/test/visual-studio-test.md)</td>
<td>
<p>(Optional) Run your tests.</p>
</td>
</tr>
<tr>
   <td>![icon](../../steps/build/_img/index-sources-publish-symbols.png)<br>
            [Build: Index Sources & Publish Symbols](../../steps/build/index-sources-publish-symbols.md)<br/>
      </td>
   <td>
   <p>(Optional) Index your source code and publish symbols to a file share.</p>
   </td>
        </tr>
<tr>
<td>![icon](../../steps/utility/_img/copy-files.png)<br/>[Utility: Copy Files](../../steps/utility/copy-files.md)</td>
<td>
<p>Copy your binaries to the artifacts staging directory.</p>
<ul>
<li>Source Folder: `$(Build.SourcesDirectory)`</li>
<li>Contents: `**\$(BuildConfiguration)\**\?(*.exe|*.dll|*.pdb)`</li>
<li>Target folder: `$(Build.ArtifactStagingDirectory)`</li>
</ul>
</td>
</tr>
<tr>
    <td>![icon](../../steps/utility/_img/publish-build-artifacts.png)<br>[Utility: Publish Build Artifacts](../../steps/utility/publish-build-artifacts.md)</td>
    <td>
        <p>Copy (publish) the build artifacts to a folder for the release definition.</p>
        <ul>
            <li>Path to publish: `$(Build.ArtifactStagingDirectory)`</li>
            <li>Artifact name: `drop`</li>
            <li>Artifact type: Server</li>
        </ul>
    </td>
</tr>
</table>

### Variables

On the [Variables tab](../../define/variables.md) define these variables:

|Name|Value|
|-|-|
|```BuildConfiguration```|```debug, release```|
|```BuildPlatform```|```x86, x64```|

### Options

On the [Options tab](../../define/options.md):

0. Select **Multi-configuration**.

0. Specify **Multipliers:** 
 ```
BuildConfiguration, BuildPlatform
```

0. Select **Parallel** if you have multiple build agents and want to build your configuration/platform pairings in parallel.

### Triggers

On the [Triggers](../../define/triggers.md) tab, make sure **Continuous integration (CI)** is selected and that you're including the branches you want to build. For example, if you want the build to run for any branch, you can include `*`.

Optionally, you can specify that your build is run on a schedule. For example, you can make it a nightly build.

## Queue and test the build

Save the build definition and then select **Queue new build**. Once the build is done, click the build number (such as "Build 332"), click the **Artifacts** tab, and then **Explore** to see the zip file produced by the build.

You'll see something like this:

```
`-- drop
    `-- ConsoleApplication1
        `-- ConsoleApplication1
            `-- Debug <- (these are for the x86 platform)
                | -- ConsoleApplication1.exe
                | -- ConsoleApplication1.pdb
            `-- Release <- (these are for the x86 platform)
                | -- ConsoleApplication1.exe
                | -- ConsoleApplication1.pdb
            `-- x64
                `-- Debug
                    | -- ConsoleApplication1.exe
                    | -- ConsoleApplication1.pdb
                `-- Release
                    | -- ConsoleApplication1.exe
                    | -- ConsoleApplication1.pdb
```

To change the artifacts this build produces, modify the [copy step arguments](../../steps/utility/copy-files.md).

## Q&A

<h3 id="new_solution">How do I create a C++ solution to play with?</h3>

0. In Visual Studio, [connect to your team project](../../../connect/connect-team-projects.md#visual-studio).

0. On the Team Explorer home page (Keyboard: Ctrl + 0, H), under **Solutions**, click **New**.

0. On the **New Project** dialog box, in the tree on the left side, select **Templates** > **Visual C++**. In the list in the middle select **Win32 console Application**.

0. On the **Win32 Application Wizard** dialog box, click **Next**, and then click **Finish**.

0. Either [share your code with Git and Visual Studio](../../../git/share-your-code-in-git-vs.md) or [share your code with TFVC and Visual Studio](../../../tfvc/share-your-code-in-tfvc-vs.md).

For more information, see [C++ Windows app](https://docs.microsoft.com/en-us/cpp/windows/overview-of-windows-programming-in-cpp#a-namebknativea-desktop-server-and-cloud-apps-and-games).

### Can Visual Studio project settings affect my CI build?

Yes, if you modify the settings of projects in your solution, this can affect your CI build. For example, in Visual Studio you modify the **Output Directory** property on the **General** page. If you removed `$(Configuration)` from the setting, it could cause problems in your CI build.

[!INCLUDE [temp](../../_shared/qa-versions.md)]
