---
ms.topic: include
---

You want to package and publish some projects in a C# class library to your Azure Artifacts feed.

```
`-- Message
    |-- Message.sln
    `-- ShortGreeting
        |-- ShortGreeting.csproj
        |-- Class1.cs
        `-- Properties
            |-- AssemblyInfo.cs
    `-- LongGreeting
        |-- LongGreeting.csproj
        |-- Class1.cs
        `-- Properties
            |-- AssemblyInfo.cs
```


<a name="prepare"></a>
### Prepare


#### AssemblyInfo.cs

Make sure your AssemblyInfo.cs files contain the information you want shown in your packages. For example, ```AssemblyCompanyAttribute``` will be shown as the author, and ```AssemblyDescriptionAttribute``` will be shown as the description.


#### [Variables](../../build/variables.md) tab

| Name | Value | 
|---|---|
|```$(BuildConfiguration)``` | ```release```|
|```$(BuildPlatform)``` | ```any cpu```|


#### [Options](../../build/options.md)

| Setting | Value | 
|---|---|
| Build number format | ```$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)```|


### Publish to Azure Artifacts

Make sure you've prepared the build as described [above](#prepare).


#### Create the feed

See [Create a feed](../../../artifacts/feeds/create-feed.md).


#### [Build](../../index.md) tasks

<table>
<tr>
<td>

<img src="/azure/devops/tasks/build/_img/visual-studio-build.png" alt="Build: Visual Studio Build"/>

<br/><strong>Build: Visual Studio Build</strong></td>
<td>
<p>Build your solution.</p>
<ul>
<li>Solution: <code><strong>*.sln</code></li>
<li>Platform: <code>$(BuildPlatform)</code></li>
<li>Configuration: <code>$(BuildConfiguration)</code></li>
<!-- Reviewers: what research and guidance do we think is needed, if any, around building packages that depend on packages? -->
</ul>
</td>
</tr>
<tr>
<td>

<img src="/azure/devops/tasks/package/_img/nuget-packager.png" alt="Package: NuGet Packager"/>

<br/></strong>Package: NuGet Packager<strong></td>
<td>
<p>Package your projects.</p>
<ul>
<li>Path/Pattern to nuspec files: <code></strong>*.csproj</code></li>
<li>Use Build number to version package: Selected</li>
<li>Advanced, Configuration to Package: <code>Release</code></li>
</ul>
</td>
</tr>
<tr>
<td>

<img src="/azure/devops/tasks/package/_img/nuget-publisher.png" alt="Package: NuGet Publisher"/>

<br/><strong>Package: NuGet Publisher</strong></td>
<td>
<p>Publish your packages to Azure Artifacts.</p>
<ul>
<li>Path/Pattern to nupkg: <code>***.nupkg</code></li>
<li>Feed type: Internal NuGet Feed</li>
<li>Internal feed URL: See <a href="/azure/devops/artifacts/nuget/consume#get-nuget-pkg-url" data-raw-source="[Find your NuGet package source URL](/azure/devops/artifacts/nuget/consume#get-nuget-pkg-url)">Find your NuGet package source URL</a>.
</li>
</ul>
</td>
</tr>
</table>

### Publish to NuGet.org

Make sure you've prepared the build as described [above](#prepare).

#### Register with NuGet.org

If you haven't already, [register with NuGet.org](https://www.nuget.org/).


#### [Build](../../tasks/index.md) tasks


<table>
<tr>
<td>

<img src="/azure/devops/tasks/build/_img/visual-studio-build.png" alt="Build: Visual Studio Build"/>

<br/><strong>Build: Visual Studio Build</strong></td>
<td>
<p>Build your solution.</p>
<ul>
<li>Solution: <code><strong>*.sln</code></li>
<li>Platform: <code>$(BuildPlatform)</code></li>
<li>Configuration: <code>$(BuildConfiguration)</code></li>
<!-- Reviewers: what research and guidance do we think is needed, if any, around building packages that depend on packages? -->
</ul>
</td>
</tr>
<tr>
<td>

<img src="/azure/devops/tasks/package/_img/nuget-packager.png" alt="Package: NuGet Packager"/>

<br/></strong>Package: NuGet Packager<strong></td>
<td>
<p>Package your projects.</p>
<ul>
<li>Path/Pattern to nuspec files: <code></strong>*.csproj</code></li>
<li>Use Build number to version package: Selected</li>
<li>Advanced, Configuration to Package: <code>Release</code></li>
</ul>
</td>
</tr>
<tr>
<td>

<img src="/azure/devops/tasks/package/_img/nuget-publisher.png" alt="Package: NuGet Publisher"/>

<br/><strong>Package: NuGet Publisher</strong></td>
<td>
<p>Publish your packages to NuGet.org.</p>
<ul>
<li>Path/Pattern to nupkg: <code>***.nupkg</code></li>
<li>Feed type: External NuGet Feed</li>
<li>
<p>NuGet Server Endpoint: <img src="/azure/devops/tasks/_shared/_img/endpoint-manage.png" alt="endpoint manage"/></p>
<ol>
<li>Click &quot;New service connection&quot;, and then click Generic.</li>
<li><p>On the Add New Generic Connection dialog box:</p>
<ul>
<li>Connection Name: <code>NuGet</code></li>
<li>Server URL: <code><a href="https://nuget.org/" data-raw-source="https://nuget.org/">https://nuget.org/</a></code></li>
<li>User name: <code>{your-name}</code></li>
<li>Password/Token Key: Paste API Key from your <a href="https://www.nuget.org/account" data-raw-source="[NuGet account](https://www.nuget.org/account)">NuGet account</a>.</li>
</ul>
</li>
</ol>
</li>
</ul>

</td>
</tr>
</table>
