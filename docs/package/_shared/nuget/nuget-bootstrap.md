---
ms.topic: include
---

* Open a PowerShell prompt and `cd` to the root directory of your app's code.
* Get a copy of nuget.exe to use temporarily. The PowerShell command `Invoke-WebRequest https://dist.nuget.org/win-x86-commandline/latest/nuget.exe -OutFile nuget.exe` makes this easy.
* In the PowerShell window, run the command `.\nuget.exe install -OutputDirectory packages Microsoft.VisualStudio.Services.NuGet.Bootstrap` to fetch the bootstrapping tools.
* Run `.\packages\Microsoft.VisualStudio.Services.NuGet.Bootstrap.*\tools\Bootstrap.ps1` to initialize your environment.
  * This will create a `nuget.config` in the root of your repo, where you can specify the feeds you want NuGet to use.
  * It will also create an `init` script which developers and build agents run each time they want to work with this repo. `init` ensures you always have the latest VSTS NuGet tools and also sets up authentication to VSTS-hosted feeds.
* Delete the copy of nuget.exe you downloaded earlier: `rm .\nuget.exe`
  * Going forward, this repo will rely on a copy of nuget.exe installed by the bootstrapping tools.
* Update your .gitignore/.tfignore file to exclude `.tools/` and `packages/`.
* Update `nuget.config` to list the feeds used by your app.
* Check in the changes to your repo.
