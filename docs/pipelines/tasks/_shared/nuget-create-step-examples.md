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

![Build: Visual Studio Build](../build/_img/visual-studio-build.png)

<br/>**Build: Visual Studio Build**</td>
<td>
<p>Build your solution.</p>
<ul>
<li>Solution: ```**\*.sln```</li>
<li>Platform: ```$(BuildPlatform)```</li>
<li>Configuration: ```$(BuildConfiguration)```</li>
<!-- Reviewers: what research and guidance do we think is needed, if any, around building packages that depend on packages? -->
</ul>
</td>
</tr>
<tr>
<td>

![Package: NuGet Packager](../package/_img/nuget-packager.png)

<br/>**Package: NuGet Packager**</td>
<td>
<p>Package your projects.</p>
<ul>
<li>Path/Pattern to nuspec files: ```**\*.csproj```</li>
<li>Use Build number to version package: Selected</li>
<li>Advanced, Configuration to Package: ```Release```</li>
</ul>
</td>
</tr>
<tr>
<td>

![Package: NuGet Publisher](../package/_img/nuget-publisher.png)

<br/>**Package: NuGet Publisher**</td>
<td>
<p>Publish your packages to Azure Artifacts.</p>
<ul>
<li>Path/Pattern to nupkg: ```**\*.nupkg```</li>
<li>Feed type: Internal NuGet Feed</li>
<li>Internal feed URL: See [Find your NuGet package source URL](../../../artifacts/nuget/consume.md#get-nuget-pkg-url).
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

![Build: Visual Studio Build](../build/_img/visual-studio-build.png)

<br/>**Build: Visual Studio Build**</td>
<td>
<p>Build your solution.</p>
<ul>
<li>Solution: ```**\*.sln```</li>
<li>Platform: ```$(BuildPlatform)```</li>
<li>Configuration: ```$(BuildConfiguration)```</li>
<!-- Reviewers: what research and guidance do we think is needed, if any, around building packages that depend on packages? -->
</ul>
</td>
</tr>
<tr>
<td>

![Package: NuGet Packager](../package/_img/nuget-packager.png)

<br/>**Package: NuGet Packager**</td>
<td>
<p>Package your projects.</p>
<ul>
<li>Path/Pattern to nuspec files: ```**\*.csproj```</li>
<li>Use Build number to version package: Selected</li>
<li>Advanced, Configuration to Package: ```Release```</li>
</ul>
</td>
</tr>
<tr>
<td>

![Package: NuGet Publisher](../package/_img/nuget-publisher.png)

<br/>**Package: NuGet Publisher**</td>
<td>
<p>Publish your packages to NuGet.org.</p>
<ul>
<li>Path/Pattern to nupkg: ```**\*.nupkg```</li>
<li>Feed type: External NuGet Feed</li>
<li>
<p>NuGet Server Endpoint: ![endpoint manage](_img/endpoint-manage.png)</p>
<ol>
<li>Click "New service connection", and then click Generic.</li>
<li><p>On the Add New Generic Connection dialog box:</p>
<ul>
<li>Connection Name: ```NuGet```</li>
<li>Server URL: ```https://nuget.org/```</li>
<li>User name: ```{your-name}```</li>
<li>Password/Token Key: Paste API Key from your [NuGet account](https://www.nuget.org/account).</li>
</ul>
</li>
</ol>
</li>
</ul>

</td>
</tr>
</table>
