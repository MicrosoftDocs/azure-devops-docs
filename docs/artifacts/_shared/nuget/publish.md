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

**Notes:**

* The NuGet client's push command requires an API key. You can use any non-empty string you want; in this example, we used `key`.
* If you're prompted for credentials in the command line, ensure that the credential provider downloaded is in the same folder as NuGet.exe.  For more help using credential providers with NuGet, see [here](/nuget/api/nuget-exe-credential-providers).

## Get a sample package to push

If you don't have a package but want to try this out, Microsoft provides a sample package on the public NuGet gallery.

* Run these two commands:

   ```Command
   nuget.exe install Azure DevOps Services-HelloWorld -ExcludeVersion
   nuget.exe push -Source {NuGet package source URL} -ApiKey key Azure DevOps Services-HelloWorld\Azure DevOps Services-HelloWorld.nupkg
   ```
