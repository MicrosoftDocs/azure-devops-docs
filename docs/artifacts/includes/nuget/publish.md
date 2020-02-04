---
ms.topic: include
---

Publish NuGet packages to a feed in Azure Artifacts to share them with your team and your organization.
First, get the tools and your feed URL:

[!INCLUDE [](nuget-publish-endpoint.md)]

   >You can also manually construct a push command as follows:  

   ```Command
   nuget.exe push -Source {NuGet package source URL} -ApiKey key {your_package}.nupkg
   ```

> [!NOTE]
>
> * The NuGet client's push command requires an API key. You can use any non-empty string you want. In this example, we used `key`.
> * If you're prompted for credentials on the command line, ensure that you set up the [Azure Artifacts Credential Provider](https://go.microsoft.com/fwlink/?linkid=2099625).  For more help in using credential providers with NuGet, see [NuGet Cross Platform Plugins](https://docs.microsoft.com/nuget/reference/extensibility/nuget-cross-platform-plugins). For Azure DevOps, use a personal access token when prompted for credentials, see [Authenticate access with personal access tokens](https://docs.microsoft.com/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=vsts).

## Get or create a sample package to push

### Get

If you don't have a package but want to try this out, Microsoft provides a sample package in the public NuGet gallery.

* Run these two commands:

  ```Command
  nuget.exe install HelloWorld -ExcludeVersion
  nuget.exe push -Source {NuGet package source URL} -ApiKey key HelloWorld\HelloWorld.nupkg
  ```

### Create

If you want to create your own NuGet package to push, follow the steps in  [Creating NuGet packages](https://docs.microsoft.com/nuget/create-packages/creating-a-package)

* Run the following command:

  ```Command
  nuget.exe push -Source {NuGet package source URL} -ApiKey key {your_package}.nupkg
  ```
