---
ms.topic: include
---

<tr>
<td>MSBuild Arguments</td>
<td>You can pass additional arguments to MSBuild. For syntax, see [MSBuild Command-Line Reference](https://msdn.microsoft.com/library/ms164311.aspx).</td>
</tr>
<tr>
<td>Platform</td>
<td><p>Specify the platform you want to build such as ```Win32```, ```x86```, ```x64``` or ```any cpu```.</p>
<p>Tips:</p>
<ul>
<li>If you are targeting an MSBuild project (.&#42;proj) file instead of a solution, specify ```AnyCPU``` (no whitespace).</li>
<li>Declare a build variable such as ```BuildPlatform``` on the Variables tab (selecting Allow at Queue Time) and reference it here as ```$(BuildPlatform)```. This way you can modify the platform when you queue the build and enable building multiple configurations.</li>
</ul>
</td>
</tr>
<tr>
<td>Configuration</td>
<td><p>Specify the configuration you want to build such as ```debug``` or ```release```.</p>
<p>Tip: Declare a build variable such as ```BuildConfiguration``` on the Variables tab (selecting Allow at Queue Time) and reference it here as ```$(BuildConfiguration)```. This way you can modify the platform when you queue the build and enable building multiple configurations.</p>
</td>
</tr>
<tr>
<td>Clean</td>
<td>
<p>Set to False if you want to make this an incremental build. This setting might reduce your build time, especially if your codebase is large. This option has no practical effect unless you also set Clean repository to False.</p>
<p>Set to True if you want to rebuild all the code in the code projects. This is equivalent to the MSBuild ```/target:clean``` argument.</p>
</td>
</tr>
<tr>
<td>Restore NuGet Packages</td>
<td>**(Important)** This option is deprecated. Make sure to clear this checkbox and instead use the [NuGet Installer](../package/nuget.md) build task.</td>
</tr>


