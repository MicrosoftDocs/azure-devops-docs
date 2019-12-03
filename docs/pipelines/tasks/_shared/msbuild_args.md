---
ms.topic: include
---

<tr>
<td>MSBuild Arguments</td>
<td>You can pass additional arguments to MSBuild. For syntax, see <a href="https://msdn.microsoft.com/library/ms164311.aspx" data-raw-source="[MSBuild Command-Line Reference](https://msdn.microsoft.com/library/ms164311.aspx)">MSBuild Command-Line Reference</a>.</td>
</tr>
<tr>
<td>Platform</td>
<td><p>Specify the platform you want to build such as <code>Win32</code>, <code>x86</code>, <code>x64</code> or <code>any cpu</code>.</p>
<p>Tips:</p>
<ul>
<li>If you are targeting an MSBuild project (.&#42;proj) file instead of a solution, specify <code>AnyCPU</code> (no whitespace).</li>
<li>Declare a build variable such as <code>BuildPlatform</code> on the Variables tab (selecting Allow at Queue Time) and reference it here as <code>$(BuildPlatform)</code>. This way you can modify the platform when you queue the build and enable building multiple configurations.</li>
</ul>
</td>
</tr>
<tr>
<td>Configuration</td>
<td><p>Specify the configuration you want to build such as <code>debug</code> or <code>release</code>.</p>
<p>Tip: Declare a build variable such as <code>BuildConfiguration</code> on the Variables tab (selecting Allow at Queue Time) and reference it here as <code>$(BuildConfiguration)</code>. This way you can modify the platform when you queue the build and enable building multiple configurations.</p>
</td>
</tr>
<tr>
<td>Clean</td>
<td>
<p>Set to False if you want to make this an incremental build. This setting might reduce your build time, especially if your codebase is large. This option has no practical effect unless you also set Clean repository to False.</p>
<p>Set to True if you want to rebuild all the code in the code projects. This is equivalent to the MSBuild <code>/target:clean</code> argument.</p>
</td>
</tr>
<tr>
<td>Restore NuGet Packages</td>
<td><strong>(Important)</strong> This option is deprecated. Make sure to clear this checkbox and instead use the <a href="../package/nuget.md" data-raw-source="[NuGet Installer](../package/nuget.md)">NuGet Installer</a> build task.</td>
</tr>


