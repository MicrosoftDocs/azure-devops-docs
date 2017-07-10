---
title: Build your Universal Windows Platform app
description: Define a CI process that builds your Universal Windows Platform (UWP) solution on Team Foundation Server and Visual Team Services.
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: E3E15C22-3211-4FCC-A10C-5717EA8B116E
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
---

# Build your Universal Windows Platform app

[!INCLUDE [temp](../../_shared/version.md)]

## Upload your code

Upload your code to [Visual Studio Team Services](https://www.visualstudio.com/products/visual-studio-team-services-vs) or your [on-premises Team Foundation Server](../../../setup-admin/tfs/install/get-started.md). Either push your code to Git or check in your code to TFVC.

You must also upload your .pfx certificate file. For example if you are working in a Git repo:

```
C:\Users\YourName\Source\Repos\Universal>git add App1\App1\App1_TemporaryKey.pfx -f
```

## Define your CI build

Your CI build compiles your app into native code so you can run and test the app on your device.

### Create the definition

<ol>
[!INCLUDE [include](../../_shared/begin-create-build-definition.md)]

<li>On the Create new build definition dialog box, select **Universal Windows Platform ** and click Next.</li>

<li>Select the repo, branch, and **continuous integration**.</li>
</ol>

### Modify the build step

On the Build tab:

<table>
   <tr>
      <td>![](../../steps/build/_img/visual-studio-build.png)<br/>
**Visual Studio Build**</td>
      <td>
<p>Build your app.</p>
<ul>
[!INCLUDE [include](../_shared/uwp-ci-vsbuild-arguments.md)]
</ul>
</td>
</tr>
</table>

## Define your publication build

Your publication build compiles your app into an appxupload file that the store needs to offer your app to customers.

### Create the definition

Create another build using the Universal Windows Platform template.

### Modify the build step

On the Build tab:

<table>
   <tr>
      <td>![](../../steps/build/_img/visual-studio-build.png)<br/>
 **Visual Studio Build**</td>
      <td>
<p>Build your app.</p>
<ul>
<li><p>MSBuild Arguments: Add a switch to the default setting.</p>
<pre style="margin-bottom: 0px;"><code>/p:AppxBundlePlatforms="$(BuildPlatform)" /p:AppxPackageDir="$(Build.BinariesDirectory)\AppxPackages\\" /p:AppxBundle=Always <span style="font-weight:bold; background-color:yellow">/p:UapAppxPackageBuildMode=StoreUpload</span>
</code></pre>
<p><strong>Q:</strong> Why do I need these arguments? <strong>A:</strong></p>
<ul>
<li>```/p:AppxBundlePlatforms="$(BuildPlatform)"``` The template is setup with BuildPlatform="x86|x64|ARM" so the bundle will include all three platforms. All three platform should be included when creating an appxupload file.
</li>
<li>```/p:AppxPackageDir="$(Build.BinariesDirectory)\AppxPackages\\"``` Location where the bundle directories are created.
</li>
<li>```/p:AppxBundle=Always``` Always produce a bundle.
</li>
<li>```/p:UapAppxPackageBuildMode=StoreUpload``` Produces an appxupload file.
</li>
</ul>
</li>
<li>Platform: Leave it blank. (The bundle platforms are specified in the above MSBuild Arguments.)
</li>
<li><p>Configuration: Leave it set to ```$(BuildConfiguration)```</p>
<p>Note: By default BuildConfiguration is set to ```release``` on the Variables tab. Release should be used for upload builds.
</p>
</li>
</ul>
</td>
</tr>
</table>

[!INCLUDE [temp](../../_shared/definition-finish-and-test.md)]

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### How do I associate my package with the store?

See [Packaging Universal Windows apps for Windows 10](https://msdn.microsoft.com/en-us/library/windows/apps/hh454036.aspx).

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
