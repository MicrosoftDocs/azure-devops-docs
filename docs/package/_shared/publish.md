Publish NuGet packages to a feed in Package Management to share them with your team and your organization.

First, get the tools and your feed URL:

[!INCLUDE [](../_shared/nuget-publish-endpoint.md)]

Then, use the push command in step 3 above. You can also manually construct a push command as follows:  

```no-highlight
nuget.exe push -Source {NuGet package source URL} -ApiKey key {your_package}.nupkg`
```

Notes: 
1. The NuGet client's push command requires an API key. You can use any non-empty string you want; in this example, we used `key`.
2. If you're prompted for credentials in the command line, ensure that the credential provider downloaded is in the same folder as NuGet.exe.  For more help using credential providers with NuGet, see [here](https://docs.microsoft.com/en-us/nuget/api/nuget-exe-credential-providers).

## Get a sample package to push

If you don't have a package but want to try this out, Microsoft provides a sample package on the public NuGet gallery.
Run these two commands:

```no-highlight
nuget.exe install VSTS-HelloWorld -ExcludeVersion
nuget.exe push -Source {NuGet package source URL} -ApiKey key VSTS-HelloWorld\VSTS-HelloWorld.nupkg
```
