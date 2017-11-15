---
title: Use NuGet with VSTS feeds
description: Authenticating to feeds with NuGet in VSTS
ms.assetid: 10665DBC-846E-4192-8CAB-D5A4C6E40C65
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.manager: douge
ms.author: amullans
ms.date: 09/01/2017
---

# Use NuGet with VSTS feeds

[!INCLUDE [](../_shared/availability-nuget.md)]

> [!NOTE]
> This page covers interactive scenarios. In Team Build, use the NuGet step to [restore](/vsts/build-release/packages/nuget-restore) and [publish](/vsts/build-release/packages/nuget-pack-publish) packages. 

[!INCLUDE [nuget-3x](../_shared/nuget/nuget-3x.md)]

## Add a feed to NuGet 3 or later
NuGet 3 and later supports the Credential Provider, which automatically acquires feed credentials when needed.

[!INCLUDE [](../_shared/nuget/nuget-publish-endpoint.md)]

Then, run any [nuget command](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference).

## Add a feed to NuGet 2
NuGet 2 uses Personal Access Tokens to access feeds.

To use a 2.x client, first get the v3 feed URL: 

[!INCLUDE [get-endpoint-URL](../_shared/nuget/nuget-consume-endpoint.md)]

Then, at the end of the URL, replace `/v3/index.json` with `/v2`. 

[!INCLUDE [generate-pat](../_shared/generate-pat.md)]

Run 

```no-highlight
nuget.exe sources add -name {your feed name} -source {your feed URL} -username {anything} -password {your PAT}
```

Then, run any [nuget command](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference).

## Download the credential provider directly
You can download the credential provider directly from this link:
`https://{account}.pkgs.visualstudio.com/_apis/public/nuget/client/CredentialProviderBundle.zip` 

## Advanced credential provider scenarios
### Install the credential provider
By default, the credential provider works alongside NuGet.exe.  

For advanced scenarios, you can choose where to install the provider:

  - **Projects with a developer command prompt or enlistment:** Use the provider from an 
  [environment variable](http://docs.nuget.org/Consume/Credential-Providers#using-a-credential-provider-from-an-environment-variable) by copying `CredentialProvider.Vss.exe` to any folder, then run this command in PowerShell: `$env:NUGET_CREDENTIALPROVIDERS_PATH = {your folder}`
  - **Projects using a non-VSTS CI server:** Use the provider from an 
  [environment variable](http://docs.nuget.org/Consume/Credential-Providers#using-a-credential-provider-from-an-environment-variable)
  - **Work on an individual machine:** Install the provider 
  [globally](http://docs.nuget.org/Consume/Credential-Providers#installing-a-credential-provider-globally) by copying `CredentialProvider.Vss.exe` to `$env:LOCALAPPDATA\NuGet\CredentialProviders`

### Bootstrap into your workflow

You can also add the provider to your enlistment or developer command prompt using our [bootstrap tools](bootstrap-nuget.md).
This is recommended if you're using the provider in a multi-engineer development environment.