---
title: Use Jenkins with Azure Artifacts to publish packages of binary components
ms.custom: seodec18
description: Working with feeds in Jenkins-CI
ms.assetid: FC3EC349-1F9B-42A7-B523-495F21BC73F6
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.author: amullans
ms.date: 08/10/2016
monikerRange: '>= tfs-2017'
---

# Use Jenkins to restore and publish packages

**Azure Artifacts | TFS 2018 | TFS 2017**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Azure Artifacts works with the continuous integration tools your team already uses.
In this [Jenkins](http://jenkins-ci.org/) walkthrough, you'll create a NuGet package and publish it to an Azure Artifacts feed.
If you need help on Jenkins setup, you can learn more on [the Jenkins wiki](https://wiki.jenkins-ci.org/display/JENKINS/Use+Jenkins).

<a name="setup"></a>
## Setup

This walkthrough uses Jenkins 1.635 running on Windows 10.
The walkthrough is simple, so any recent Jenkins and Windows versions should work.

Ensure the following Jenkins plugins are enabled:
* [MSBuild 1.24](http://wiki.jenkins-ci.org/display/JENKINS/MSBuild+Plugin)
* [Git 2.4.0](http://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin)
* [Git Client 1.19.0](http://wiki.jenkins-ci.org/display/JENKINS/Git+Client+Plugin)
* [Credentials Binding plugin 1.6](http://wiki.jenkins-ci.org/display/JENKINS/Credentials+Binding+Plugin)

Some of these plugins are enabled by default.
Others you will need to install by using Jenkins's "Manage Plugins" feature.

### The example project

The sample project is a simple shared library written in C#.
* To follow along with this walkthrough, create a new C# Class Library solution in Visual Studio 2015.
* Name the solution "FabrikamLibrary" and uncheck the **Create directory for solution** checkbox.
* On the FabrikamLibrary project's context menu, choose **Properties**, then choose **Assembly Information**.
* Edit the description and company fields. Now generating a NuGet package is easier.

![Update assembly info to supply a description and company](_img/assembly_info.png)
* Check the new solution into a Git repo where your Jenkins server can access it later.


## Add the Azure Artifacts NuGet tools to your repo

The easiest way to use the Azure Artifacts NuGet service is by adding the [Microsoft.VisualStudio.Services.NuGet.Bootstrap package](/azure/devops/artifacts/nuget/bootstrap-nuget) to your project.

## Create a package from your project

*Whenever you work from a command line, run `init.cmd` first. This sets up your environment to allow you to work with nuget.exe and the Azure Artifacts NuGet service.*

* Change into the directory containing FabrikamLibrary.csproj.
* Run the command `nuget spec` to create the file FabrikamLibrary.nuspec, which defines how your NuGet package builds.
* Edit FabrikamLibrary.nuspec to remove the boilerplate tags `<licenseUrl>`, `<projectUrl>`, and `<iconUrl>`. Change the tags from `Tag1 Tag2` to `fabrikam`.
* Ensure that you can build the package using the command `nuget pack FabrikamLibrary.csproj`. Note, you should target the .csproj (project) file, not the NuSpec file.
* A file called FabrikamLibrary.1.0.0.0.nupkg will be produced.


## Set up a feed in Azure Artifacts and add it to your project
* [Create a feed](/azure/devops/artifacts/feeds/create-feed) in your Azure DevOps organization called *MyGreatFeed*. Since you're the owner of the feed, you will automatically be able to push packages to it.
* Add the URL for the feed you just generated to the nuget.config in the root of your repo.
  * Find the `<packageSources>` section of nuget.config.
  * Just before `</packageSources>`, add a line using this template: `<add key="MyGreatFeed" value="{feed_url}" />`. Change `{feed_url}` to the URL of your feed.
  * Commit this change to your repo.

![Add your feed URL to nuget.config](_img/nugetconfig.png)
* [Generate a PAT (personal access token)](/azure/devops/release-notes/index) for your user account. This PAT will allow the Jenkins job to authenticate to Azure Artifacts as you, so be sure to protect your PAT like a password.
* Save your feed URL and PAT to a text file for use later in the walkthrough.


## Create a build pipeline in Jenkins

* Ensure you have the [correct plugins installed in Jenkins](#setup).
* This will be a Freestyle project. Call it "Fabrikam.Walkthrough".

![New Jenkins build job](_img/jenkins_new.png)
* Under Source Code Management, set the build to use **Git** and select your Git repo.
* Under Build Environment, select the **Use secret text(s) or file(s)** option.
  * Add a new **Username and password (separated)** binding.
  * Set the **Username Variable** to "FEEDUSER" and the **Password Variable** to "FEEDPASS". These are the environment variables Jenkins will fill in with your credentials when the build runs.
  * Choose the **Add** button to create a new username and password credential in Jenkins.
  * Set the **username** to "token" and the **password** to the PAT you generated earlier. Choose **Add** to save these credentials.

![New credentials in Jenkins](_img/jenkins_addcreds.png)
  
![Jenkins build environment](_img/jenkins_build_environment.png)
* Under Build (see screenshot below), follow these steps:
  * Choose **Execute Windows batch command**. In the **Command** box, type `init.cmd`.
  * Choose **Build a Visual Studio project or solution using MSBuild**. This task should point to msbuild.exe and FabrikamLibrary.sln.
  * Choose **Execute Windows batch command** again, but this time, use this command: `.tools\VSS.NuGet\nuget pack FabrikamLibrary\FabrikamLibrary.csproj`.

![Jenkins build tasks](_img/jenkins_build_steps.png)
* Save this build pipeline and queue a build.
* The build's Workspace will now contain a .nupkg just like the one you built locally earlier.


## Publish a package using Jenkins

These are the last walkthrough steps to publish the package to a feed:
* Edit the build pipeline in Jenkins.
* After the last build task (which runs `nuget pack`), add a new **Execute a Windows batch command** build task.
* In the new **Command** box, add these two lines:
  * The first line puts credentials where NuGet can find them: `.tools\VSS.NuGet\nuget sources update -Name "MyGreatFeed" -UserName "%FEEDUSER%" -Password "%FEEDPASS%"`
  * The second line pushes your package using the credentials saved above: `.tools\VSS.NuGet\nuget push *.nupkg -Name "MyGreatFeed" -ApiKey VSS`

![Push package](_img/jenkins_push.png)
* Queue another build. This time, the build machine will authenticate to Azure Artifacts and push the package to the feed you selected.
