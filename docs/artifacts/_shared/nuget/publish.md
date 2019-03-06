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
> * If you're prompted for credentials on the command line, ensure that the downloaded credential provider is in the same folder as NuGet.exe. For more help in using credential providers with NuGet, see [Authenticating feeds with nuget.exe credential providers](https://docs.microsoft.com/nuget/reference/extensibility/nuget-exe-credential-providers). For Azure DevOps, use a persoanl access token when prompt for credentials, see [Authenticate access with personal access tokens](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=vsts).

## Get a sample package to push

If you don't have a package but want to try this out, Microsoft provides a sample package in the public NuGet gallery.

* Run these two commands:

  ```Command
  nuget.exe install HelloWorld -ExcludeVersion
  nuget.exe push -Source {NuGet package source URL} -ApiKey key HelloWorld\HelloWorld.nupkg
  ```
