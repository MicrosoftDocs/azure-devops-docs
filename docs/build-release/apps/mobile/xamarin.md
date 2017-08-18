---
title: Build your Xamarin app
description: Define a CI process that builds your Xamarin solution on Team Foundation Server and Visual Team Services.
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 933A828E-CBB7-44C2-BAC0-1E1E9D78BFA0
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
---

# Build your Xamarin app

[!INCLUDE [include](../../_shared/version.md)]

Xamarin enables you to develop a single solution and deploy it to Android, iOS, and Windows devices. After you define three CI builds, you can build the app whenever your team checks in code.

> You no longer need a Xamarin license to build your Xamarin app. We're deprecating the [Utility: Xamarin license](../../steps/utility/xamarin-license.md) task. We recommend that you remove this task from your build to avoid disruption when we remove the task from the product.

## Prerequisites

> * [Install Xamarin](https://www.xamarin.com/download) The Xamarin version on your dev machine and build agent machines must be at least 4.0.3 on your PC and 5.10.3. on your Mac.

## Upload your code

Upload your Xamarin solution to [Visual Studio Team Services](https://www.visualstudio.com/products/visual-studio-team-services-vs) or your [on-premises Team Foundation Server](../../../tfs-server/install/get-started.md). Either push your code to Git or check in your code to TFVC.

[I don't have a Xamarin solution yet but I'd like to try this out.](#new_solution)


<a name="agents"></a>
## Deploy your build agents

You'll need some agents to run your builds.

|Build | [Hosted agents](../../concepts/agents/hosted.md) | [On-premises Windows agent](../../actions/agents/v2-windows.md) | On-premises [OSX](../../actions/agents/v2-osx.md) or [Linux](../../actions/agents/v2-linux.md) agent |
|:---:|:---:|:---:|:---:|
| Xamarin.Android | Yes | Yes (with Xamarin installed) | Yes (with Xamarin installed) |
| Xamarin.iOS | No | No | Yes (with Xamarin installed) |
| UWP | Yes | Yes (Windows 10) | No |


## Define your Xamarin.Android build

<ol>
<li><p><a data-toggle="collapse" href="#expando-begin-create-build-xamarin-android-definition-open-team-project">Open your team project in your web browser &#x25BC;</a></p>
<div class="collapse" id="expando-begin-create-build-xamarin-android-definition-open-team-project">
![Browse to team project](../../_shared/_img/browse-to-team-project.png)
<ul>
<li>On-premises ```http://{your_server}:8080/tfs/DefaultCollection/{your_team_project}``` </li>
<li>Visual Studio Team Services ```https://{your_account}.visualstudio.com/DefaultCollection/{your_team_project}```</li>
</ul>
</div>
</li>

<li><p><a data-toggle="collapse" href="#expando-begin-create-xamarin-android-build-definition-create">Create a build definition &#x25BC;</a></p>
<div class="collapse" id="expando-begin-create-xamarin-android-build-definition-create">
![Build tab](../../_shared/_img/create-new-build-definition.png)
</div>
</li>

<li>On the Create new build definition dialog box, select **Xamarin.Android** and click Next.</li>

<li>Select the repo, branch, and **continuous integration**.</li>

<li>Select a default queue that includes a [build agent that can build Xamarin.Android apps](#agents).</li>

</ol>

### Variables

On the [Variables tab](../../define/variables.md):

<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Value</td>
        </tr>
    </thead>
    <tr>
        <td><code>BuildConfiguration</code></td>
        <td><code>Release</code></td>
    </tr>
</table>


### Build steps

On the [build tab](../../define/build.md):

<table>
<tr>
<td>![Xamarin component restore](../../steps/package/_img/xamarin-component-restore.png)<br/>[Package: Xamarin component restore](../../steps/package/xamarin-component-restore.md)</td>
<td>
<p>Restore Xamarin components for the specified solution.</p>
<ul>
<li>Path to Solution: `**/*.sln`
<blockquote>
<strong>Note: </strong>Check the **Enabled** check box if your project uses Xamarin components.
</blockquote>
</li>
</ul>
</td>
</tr>
<tr>
<td>![Package: NuGet Installer](../../steps/package/_img/nuget-installer.png)<br/>[Package: NuGet Installer](../../steps/package/nuget-installer.md)</td>
<td>
<p>Install your NuGet package dependencies.</p>
<ul>
<li>Path to Solution: `**/*.sln`</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/build/_img/xamarin-android.png)<br/>[Build: Xamarin.Android](../../steps/build/xamarin-android.md)</td>
<td>
<p>Build your Android project.</p>
<ul>
<li>Project: `**/*Droid*.csproj`
<blockquote>
<strong>Note: </strong> In this example the name of the Android project ends with `Droid.csproj`. You can either follow a convention like this, or if you prefer, select the specific Android project you want to build.
</blockquote>
</li>
<li>Output directory: `$(build.binariesdirectory)/$(BuildConfiguration)`</li>
<li>Configuration: `$(BuildConfiguration)`</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/build/_img/msbuild.png)<br/>[Build: MSBuild](../../steps/build/msbuild.md)</td>
<td>
<p>Build your tests.</p>
<blockquote><strong>Note: </strong>If you don't have tests yet, then clear the **Enabled** check box.</blockquote>
<ul>
<li>Project: `**/*test*.csproj`</li>
<li>Configuration: `$(BuildConfiguration)`</li>
<li>MSBuild Arguments: `/p:OutputPath="$(build.binariesdirectory)\$(BuildConfiguration)\test-assembly\\"`</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/test/_img/xamarin-test-cloud-icon.png)<br/>[Test: Xamarin Test Cloud](../../steps/test/xamarin-test-cloud.md)</td>
<td>
<p>Publish your test results to the Xamarin Test Cloud.</p>
<blockquote><strong>Note: </strong>If you have Xamarin UI tests to run in your Xamarin test cloud account, then check the **Enabled** check box.</blockquote>
<ul>
<li>App File: `$(build.binariesdirectory)/$(BuildConfiguration)/*.apk`</li>
<li>Test Assembly Directory: `$(build.binariesdirectory)/$(BuildConfiguration)/test-assembly`</li>
<li>For the other arguments, see [Test: Xamarin Test Cloud](../../steps/test/xamarin-test-cloud.md).</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/build/_img/android-signing.png)<br/>[Android Signing](../../steps/build/android-signing.md)</td>
<td>
<p>Sign and align your APK files.</p>
<ul>
<li>APK Files: `$(build.binariesdirectory)/$(BuildConfiguration)/*.apk`</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/utility/_img/publish-build-artifacts.png)<br/>[Utility: Publish Build Artifacts](../../steps/utility/publish-build-artifacts.md)</td>
<td>
<p>Publish your build artifacts.</p>
<ul>
<li>Path to publish: `$(build.binariesdirectory)/$(BuildConfiguration)`</li>
<li>Artifact name: `drop`</li>
<li>Artifact type: Server</li>
</ul>
</td>
</tr>
</table>


## Define your Xamarin.iOS build


### Configure the solution for iOS Release

The Xamarin.iOS build requires a solution configuration that builds only the Xamarin.iOS project and its dependencies.

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


### Fix portable class library (PCL) references in your solution

There's a known issue that might cause a problem with building your Xamarin.iOS project. For example, in the build log for a Xamarin.iOS build step you might see an errors such as *error : Project reference '../App1/App1.csproj' has invalid or missing guid for metadata 'Project'*.

To fix this issue:

0. In Visual Studio, open **Solution Explorer** (Keyboard: Ctrl + Alt + L).

0. Expand your .iOS project node, and then the **References** node.

0. Right-click each reference to a portable class library and then click **Remove**.

0. Right-click the **References** node and then click **Add Reference**.

0. On the **Reference Manager** dialog box, expand **Projects**, and then click **Solution**.

0. Select the portable class library projects you removed and click **OK**.

0. File -> Save All (Keyboard: Ctrl + Shift + S).

0. Check in your changes.


### Create the definition

<ol>
<li><p><a data-toggle="collapse" href="#expando-begin-create-build-xamarin-ios-definition-open-team-project">Open your team project in your web browser &#x25BC;</a></p>
<div class="collapse" id="expando-begin-create-build-xamarin-ios-definition-open-team-project">
![Browse to team project](../../_shared/_img/browse-to-team-project.png)
<ul>
<li>On-premises ```http://{your_server}:8080/tfs/DefaultCollection/{your_team_project}``` </li>
<li>Visual Studio Team Services ```https://{your_account}.visualstudio.com/DefaultCollection/{your_team_project}```</li>
</ul>
</div>
</li>

<li><p><a data-toggle="collapse" href="#expando-begin-create-xamarin-ios-build-definition-create">Create a build definition &#x25BC;</a></p>
<div class="collapse" id="expando-begin-create-xamarin-ios-build-definition-create">
![Build tab](../../_shared/_img/create-new-build-definition.png)
</div>
</li>

<li>On the Create new build definition dialog box, select **Xamarin.iOS** and click Next.</li>

<li>Select the repo, branch, and **continuous integration**.</li>

<li>Select a default queue that includes [build agent that can build Xamarin.iOS apps](#agents).</li>

</ol>


### Variables

On the [Variables tab](../../define/variables.md):

<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Value</td>
        </tr>
    </thead>
    <tr>
        <td><code>BuildConfiguration</code></td>
        <td><code>iOS Release</code></td>
    </tr>
</table>

### Build steps

On the [build tab](../../define/build.md):

<table>
<tr>
<td>![Xamarin component restore](../../steps/package/_img/xamarin-component-restore.png)<br/>[Package: Xamarin component restore](../../steps/package/xamarin-component-restore.md)</td>
<td>
<p>Restore Xamarin components for the specified solution.</p>
<ul>
<li>Path to Solution: `**/*.sln`
<blockquote>
<strong>Note: </strong>Check the **Enabled** check box if your project uses Xamarin components.
</blockquote>
</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/build/_img/xamarin-ios.png)<br/>[Build: Xamarin.iOS](../../steps/build/xamarin-ios.md)</td>
<td>
<p>Build your Xamarin.iOS project.</p>
<ul>
<li>
Solution: Click the <strong>...</strong> button and select your solution.
</li>
<li>Configuration: `$(BuildConfiguration)`</li>
<li>Select either **Create app package** or **Build for iOS simulator**.</li>
</ul>
<p>If you want to sign and provision, specify the arguments. See [Build: Xamarin.iOS](../../steps/build/xamarin-ios.md).</p>
</td>
</tr>
<tr>
<td>![icon](../../steps/test/_img/xamarin-test-cloud-icon.png)<br/>[Test: Xamarin Test Cloud](../../steps/test/xamarin-test-cloud.md)</td>
<td>
<p>Publish your test results to the Xamarin Test Cloud.</p>
<blockquote><strong>Note: </strong>If you have Xamarin UI tests to run in your Xamarin test cloud account, then check the **Enabled** check box.</blockquote>
<ul>
<li>App File: `**/*.ipa`</li>
<li>Test Assembly Directory: `your-solution-folder/your-xamarin-ui-test-folder/bin/$(BuildConfiguration)`</li>
<li>For the other arguments, see [Test: Xamarin Test Cloud](../../steps/test/xamarin-test-cloud.md).</li>
</ul>
</td>
</tr>
<tr>
<td>![](../../steps/utility/_img/copy-files.png)<br/>[Copy Files](../../steps/utility/copy-files.md)</td>
<td>
<ul>
<li>Contents: `**/*.ipa`</li>
<li>Target folder: `$(Build.ArtifactStagingDirectory)`</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/utility/_img/publish-build-artifacts.png)<br/>[Utility: Publish Build Artifacts](../../steps/utility/publish-build-artifacts.md)</td>
<td>
<p>Publish your build artifacts.</p>
<ul>
<li>Path to publish: `$(Build.ArtifactStagingDirectory)`</li>
<li>Artifact name: `drop`</li>
<li>Artifact type: Server</li>
</ul>
</td>
</tr>
</table>


## Define your UWP build

[Create a new UWP build definition](../windows/universal.md).


### Variables

On the [variables tab](../../define/variables.md):

<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Value</td>
        </tr>
    </thead>
    <tr>
        <td><code>BuildConfiguration</code></td>
        <td><code>Release</code></td>
    </tr>
    <tr>
        <td><code>BuildPlatform</code></td>
        <td><code>x86&#124;x64&#124;ARM</code></td>
    </tr>
</table>


### Build steps

On the [build tab](../../define/build.md):


<table>
<tr>
<td>![Package: NuGet Installer](../../steps/package/_img/nuget-installer.png)<br/>[Package: NuGet Installer](../../steps/package/nuget-installer.md)</td>
<td>
<p>Install your NuGet package dependencies.</p>
<ul>
<li>Path to Solution: ```**\*.sln```</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/build/_img/visual-studio-build.png)<br/>
[Visual Studio Build](../../steps/build/visual-studio-build.md)</td>
      <td>
<p>Build your app.</p>
<ul>
<li>Solution: `your-solution-folder/your-project-folder/your-project.csproj`</li>
[!INCLUDE [include](../_shared/uwp-ci-vsbuild-arguments.md)]
<li>Platform: Leave it blank.</li>
<li>Configuration: `$(BuildConfiguration)`</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/build/_img/msbuild.png)<br/>[Build: MSBuild](../../steps/build/msbuild.md)</td>
<td>
<p>(Optional) Build your tests.</p>
</td>
</tr>
<tr>
<td>![icon](../../steps/test/_img/visual-studio-test-icon.png)<br/>[Test: Visual Studio Test](../../steps/test/visual-studio-test.md)</td>
<td>
<p>(Optional) Run your tests.</p>
</td>
</tr>
</table>

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

<a name="new_solution"></a>
### How do I create a Xamarin solution?

0. In Visual Studio, File -> New Project -> Visual C# -> Cross-Platform -> Blank App (Xamarin.Forms Portable).

0. Upload your code to [Visual Studio Team Services](https://www.visualstudio.com/products/visual-studio-team-services-vs) or your [on-premises Team Foundation Server](../../../tfs-server/install/get-started.md). Either push your code to Git or check in your code to TFVC.

[Where can I learn more to get started with Xamarin?](https://developer.xamarin.com/guides/cross-platform/getting_started/)

### How do I discretely build my UWP app at the solution level?

If you want to build your UWP app at the solution level, you should first configure your solution so that you can restrict your CI process to building only the UWP project and its dependencies.

#### Configure the solution for UWP release

0. In Visual Studio, right-click your solution and then click **Configuration Manager**.

0. On the configuration manager dialog box open the active solution configuration drop-down menu and click **New**.

0. On the new solution configuration dialog box:

 * For Name, enter `UWP Release`

 * Open **Copy settings from** drop-down menu and select **Release**.

 * Clear the **Create new project configurations** dialog box.

0. Open the **Active solution platform** drop-down menu:

 0. Select **ARM** and clear the check boxes on all rows except your UWP project and any portable class library (PCL) projects it depends on.

 0. Repeat this step for **x64** and **x86**.

0. Check in your changes.


#### Create the build definition

[Create a new UWP build definition](../windows/universal.md).


#### Add UWP Release to the variables

On the [variables tab](../../define/variables.md):

<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Value</td>
        </tr>
    </thead>
    <tr>
        <td><code>BuildConfiguration</code></td>
        <td><code>UWP Release</code></td>
    </tr>
    <tr>
        <td><code>BuildPlatform</code></td>
        <td><code>x86&#124;x64&#124;ARM</code></td>
    </tr>
</table>


#### Modify the steps to build the solution

On the [build tab](../../define/build.md):

<table>
<tr>
<td>![Package: NuGet Installer](../../steps/package/_img/nuget-installer.png)<br/>[Package: NuGet Installer](../../steps/package/nuget-installer.md)</td>
<td>
<p>Install your NuGet package dependencies.</p>
<ul>
<li>Path to Solution: ```**\*.sln```</li>
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/build/_img/visual-studio-build.png)<br/>
[Visual Studio Build](../../steps/build/visual-studio-build.md)</td>
      <td>
<p>Build your app.</p>
<ul>
<li>Solution: `**\*.sln`</li>
[!INCLUDE [include](../_shared/uwp-ci-vsbuild-arguments.md)]
</ul>
</td>
</tr>
<tr>
<td>![icon](../../steps/test/_img/visual-studio-test-icon.png)<br/>[Test: Visual Studio Test](../../steps/test/visual-studio-test.md)</td>
<td>
<p>(Optional) Run your tests.</p>
</td>
</tr>
</table>

[!INCLUDE [temp](../../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
