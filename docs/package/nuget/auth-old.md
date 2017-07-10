<a name="vsts-auth-helper"></a>
## NuGet Auth Helper
*Works with all versions of Visual Studio and NuGet.exe*

The NuGet Auth Helper acquires credentials for each of the package sources in a NuGet.config file and stores the encrypted credentials
in `%AppData%\NuGet\NuGet.config`. Because the acquired credentials are Personal Access Tokens, which periodically expire, 
you'll sometimes need to re-run the helper to update your credentials.

### Usage instructions

1. Download a bundle with the latest version of NuGet.exe and the NuGet Auth Helper: `https://{account}.pkgs.visualstudio.com/_apis/public/nuget/client/AuthHelperBundle.zip`
1. Add your feed as a NuGet package source
  - To add a feed to the global NuGet.config: `nuget sources add -name {your feed name} -source {your feed URL}`
  - To add a feed to your solution, create or edit a 
[NuGet.config](http://docs.nuget.org/Consume/NuGet-Config-File#config-file-reference) file at the solution root
1. Run the helper on your your NuGet.config file: `VSS.NuGet.AuthHelper.exe -Config {path/to/NuGet.config}`
  - The path to the global NuGet.config is `$env:APPDATA\NuGet\NuGet.config`

### Bootstrap into your workflow
You can also add the helper to your enlistment or developer command prompt using our
[bootstrap tools](bootstrap-nuget.md).

This is recommended if you're using the helper in a developer team that cannot update to NuGet 3.x and Visual Studio 2015 Update 1.

