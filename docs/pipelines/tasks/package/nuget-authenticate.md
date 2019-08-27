---
title: NuGet Authenticate
ms.custom: seodec18
description: Configure NuGet tools to authenticate with Azure Artifacts and other NuGet repositories.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.author: phwilson
author: chasewilson
ms.date: 08/01/2019
monikerRange: 'azure-devops'
---

# Package: NuGet Authenticate

**Azure Pipelines**

Configure NuGet tools to authenticate with Azure Artifacts and other NuGet repositories.

> [!NOTE]
> The NuGet Authenticate task in Azure Pipelines is currently in public preview.

> [!IMPORTANT]
> This task is only compatible with NuGet >= 4.8.5385, dotnet >= 2.1.400, or MSBuild >= 15.8.166.59604

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/NuGetAuthenticateV0.md)]

## Arguments


| Argument                                                                                           | Description                                                         |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `nuGetServiceConnections`<br/>Service connection credentials for feeds outside this organization   | (Optional) Comma-separated list of <a href="~/pipelines/library/service-endpoints.md#sep-nuget" data-raw-source="[NuGet service connections](~/pipelines/library/service-endpoints.md#sep-nuget)">NuGet service connection</a> names for feeds outside this organization/collection to additionally set up. If you only need feeds in this organization/collection, leave this blank; the build’s credentials are used automatically. |
| `forceReinstallCredentialProvider`<br/>Reinstall the credential provider even if already installed | (Optional) Reinstall the credential provider to the user profile directory even if already installed. This may upgrade (or potentially downgrade) the credential provider. |
| [!INCLUDE [temp](../_shared/control-options-arguments-md.md)] | |

## Examples

### Restore and push NuGet packages within your organization

If the only authenticated feeds you use are Azure Artifacts feeds in your organization, you can use the NuGetAuthenticate task without specifying any inputs.

#### nuget.config
```XML
<configuration>
  <packageSources>
    <!-- Any Azure Artifacts feeds within your organization will automatically be authenticated. Both dev.azure.com and visualstudio.com domains are supported. -->
    <add key="MyOrganizationFeed1" value="https://pkgs.dev.azure.com/{organization}/_packaging/{feed1}/nuget/v3/index.json" />
    <add key="MyOrganizationFeed2" value="https://{organization}.pkgs.visualstudio.com/_packaging/{feed2}/nuget/v3/index.json" />
  </packageSources>
</configuration>
```

#### nuget.exe
```YAML
- task: NuGetAuthenticate@0
- task: NuGetToolInstaller@1 # Optional if nuget.exe is already on the path
- script: nuget restore
# ...
- script: nuget push -ApiKey AzureArtifacts -Source https://pkgs.dev.azure.com/{organization}/_packaging/{feed1}/nuget/v3/index.json MyProject.*.nupkg
```

#### dotnet
```YAML
- task: NuGetAuthenticate@0
- task: UseDotNet@2 # Optional if the .NET Core SDK is already installed
- script: dotnet restore
# ...
- script: dotnet nuget push --api-key AzureArtifacts --source https://pkgs.dev.azure.com/{organization}/_packaging/{feed1}/nuget/v3/index.json MyProject.*.nupkg
```

### Restore and push NuGet packages outside your organization

If you use Azure Artifacts feeds from a different organization or use a third-party authenticated package repository, you'll need to set up <a href="~/pipelines/library/service-endpoints.md#sep-nuget" data-raw-source="[NuGet service connections](~/pipelines/library/service-endpoints.md#sep-nuget)">NuGet service connections</a> and specify them in the `nuGetServiceConnections` input.
Feeds within your Azure Artifacts organization will also be automatically authenticated.

#### nuget.config
```XML
<configuration>
  <packageSources>
    <!-- Any package source listed here whose URL matches the URL of a service connection in nuGetServiceConnections will be authenticated.
         The key name here does not need to match the name of the service connection. 
         This can include Azure Artifacts feeds in other organizations, as well as third party NuGet repositories. -->
    <add key="OtherOrganizationFeed" value="https://pkgs.dev.azure.com/{otherorganization}/_packaging/{feed}/nuget/v3/index.json" />
    <add key="ThirdPartyRepository" value="https://{thirdPartyRepository}/index.json" />

    <!-- Any Azure Artifacts feeds within your organization will still automatically be authenticated -->
    <add key="MyOrganizationFeed" value="https://pkgs.dev.azure.com/{organization}/_packaging/{feed}/nuget/v3/index.json" />
  </packageSources>
</configuration>
```

#### nuget.exe
```YAML
- task: NuGetAuthenticate@0
  inputs:
    nuGetServiceConnections: OtherOrganizationFeedConnection, ThirdPartyRepositoryConnection
- task: NuGetToolInstaller@1 # Optional if nuget.exe is already on the path
- script: nuget restore
# ...
- script: nuget push -ApiKey AzureArtifacts -Source https://pkgs.dev.azure.com/{otherorganization}/_packaging/{feed}/nuget/v3/index.json MyProject.*.nupkg
```

#### dotnet
```YAML
- task: NuGetAuthenticate@0
  inputs:
    nuGetServiceConnections: OtherOrganizationFeedConnection, ThirdPartyRepositoryConnection
- task: UseDotNet@2 # Optional if the .NET Core SDK is already installed
- script: dotnet restore
# ...
- script: dotnet nuget push --api-key AzureArtifacts --source https://pkgs.dev.azure.com/{otherorganization}/_packaging/{feed}/nuget/v3/index.json MyProject.*.nupkg
```
where `OtherOrganizationFeedConnection` and `ThirdPartyRepositoryConnection` are the names of <a href="~/pipelines/library/service-endpoints.md#sep-nuget" data-raw-source="[NuGet service connections](~/pipelines/library/service-endpoints.md#sep-nuget)">NuGet service connections</a> that have been configured and authorized for use in your pipeline, and have URLs that match those in your nuget.config or command line argument.


## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### What tools are compatible with this task?

This task will configure tools that support [NuGet cross platform plugins](https://docs.microsoft.com/nuget/reference/extensibility/nuget-cross-platform-plugins). Today, that includes nuget.exe, dotnet, and recent versions of MSBuild with built-in support for restoring NuGet packages.

Specifically, this task will configure:
* nuget.exe, version 4.8.5385 or higher
* dotnet / .NET Core SDK, version 2.1.400 or higher
* MSBuild, version 15.8.166.59604 or higher

### How is this task different than the NuGetCommand and DotNetCoreCLI tasks?

This task configures nuget.exe, dotnet, and MSBuild to authenticate with Azure Artifacts or other repositories that require authentication.
After this task runs, you can then invoke the tools in a later step (either directly or via a script) to restore or push packages.

The NuGetCommand and DotNetCoreCLI tasks require using the task to restore or push packages, as authentication to Azure Artifacts is only configured within the lifetime of the task. This can prevent you from restoring or pushing packages within your own script. It may also prevent you from passing specific command line arguments to the tool.

The NuGetAuthenticate task is the recommended way to use authenticated feeds within a pipeline.

### When in my pipeline should I run this task? 

This task must run before you use a NuGet tool to restore or push packages to an authenticated package source such as Azure Artifacts. There are no other ordering requirements.
For example, this task can safely run either before or after a NuGet or .NET Core tool installer task.

### How do I configure a NuGet package source that uses ApiKey ("NuGet Api Keys")?

Due to limitations in NuGet, this task cannot be used to set up a NuGet service connection that uses a NuGet API Key.
Instead:
1. Configure a <a href="~/pipelines/process/variables.md#secret-variables" data-raw-source="[secret variable](~/pipelines/process/variables.md#secret-variables)">secret variable</a> containing the ApiKey
2. Perform the package push using `nuget push -ApiKey $(myNuGetApiKey)` or `dotnet nuget push --api-key $(myNuGetApiKey)`, assuming you named the variable `myNuGetApiKey`

### My agent is behind a web proxy. Will NuGetAuthenticate set up nuget.exe, dotnet, and MSBuild to use my proxy?

No. While this task itself will work behind a web proxy <a href="~/pipelines/agents/proxy.md" data-raw-source="[secret variable](~/pipelines/agents/proxy.md)">your agent has been configured to use</a>, it does not configure NuGet tools to use the proxy.

To do so, you can either:
* Set the environment variable `http_proxy` and optionally `no_proxy` to your proxy settings. See [NuGet CLI environment variables](https://docs.microsoft.com/nuget/reference/cli-reference/cli-ref-environment-variables) for details. Note that these are commonly used variables which other non-NuGet tools (e.g. curl) may also use.
  >**Caution:**  
  >The `http_proxy` and `no_proxy` variables are case-sensitive on Linux and Mac operating systems and must be lowercase. Attempting to use an Azure Pipelines variable to set the environment variable will not work, as it will be converted to uppercase. Instead, set the environment variables on the self-hosted agent's machine and restart the agent.

* Add the proxy settings to the [user-level nuget.config](https://docs.microsoft.com/nuget/consume-packages/configuring-nuget-behavior) file, either manually or using `nuget config -set` as described in the [nuget.config reference](https://docs.microsoft.com/nuget/reference/nuget-config-file#config-section) documentation.
  >**Caution:**  
  >The proxy settings (such as `http_proxy`) must be added to the user-level config. They will be ignored if specified in a different nuget.config file.

### How does this task work?

This task installs the [Azure Artifacts Credential Provider](https://github.com/Microsoft/artifacts-credprovider) into the NuGet plugins directory if it is not already installed.  
It then sets environment variables such as `VSS_NUGET_URI_PREFIXES`, `VSS_NUGET_ACCESSTOKEN`, and `VSS_NUGET_EXTERNAL_FEED_ENDPOINTS` to configure the credential provider. These variables remain set for the lifetime of the job.  
When restoring or pushing packages, a NuGet tool executes the credential provider, which uses the above variables to determine if it should return credentials back to the tool.

See the credential provider documentation for more details.

<!-- ENDSECTION -->
