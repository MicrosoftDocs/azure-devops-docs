---
ms.topic: include
ms.service: azure-devops-artifacts
ms.manager: wiwagn
ms.author: rabououn
author: ramiMSFT
ms.date: 05/07/2026
---

To authenticate with your feed, you must first install the Azure Artifacts Credential Provider. Using the tool installer included with dotnet, you can install the credential provider from the CLI using the following command:

```dotnetcli
dotnet tool install --global Microsoft.Artifacts.CredentialProvider.NuGet.Tool
```

If your repository-level *nuget.config* is configured to use only Azure Artifacts sources, run the install command from outside that directory, or explicitly set `nuget.org` as the source:

```dotnetcli
dotnet tool install --global Microsoft.Artifacts.CredentialProvider.NuGet.Tool --source https://api.nuget.org/v3/index.json
```

Optionally, pin the tool to a major version (for example, in container images where reproducibility matters):

```dotnetcli
dotnet tool install --global Microsoft.Artifacts.CredentialProvider.NuGet.Tool --version 2.* --source https://api.nuget.org/v3/index.json
```

## First usage

The first time you perform an operation that requires authentication, use one of the following approaches:

1. Run the command with `--interactive` so `dotnet` can prompt you to sign in. This is the recommended approach for most local development scenarios.

Before you run an interactive command, make sure your project is set up and your feed is added to *nuget.config*. For setup details, see [project setup](../nuget/dotnet-setup.md).

Once your project is set up and connected to your feed, navigate to your project directory and run:

```dotnetcli
dotnet restore --interactive
```

This command signs you in and acquires a session token. After sign-in succeeds, you can run authenticated commands without `--interactive` while the cached session token remains valid. For more information, see [Session token cache locations](https://www.nuget.org/packages/Microsoft.Artifacts.CredentialProvider.NuGet.Tool#session-token-cache-locations).

2. For non-interactive scenarios, such as Docker containers and custom automation, provide credentials through [environment variables](https://www.nuget.org/packages/Microsoft.Artifacts.CredentialProvider.NuGet.Tool#environment-variables).

For Azure Pipelines, use the [NuGetAuthenticate@1](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) task to authenticate to your feed before running commands such as `dotnet restore` or `dotnet nuget push`. See [Restore NuGet packages with Azure Pipelines](../../pipelines/packages/nuget-restore.md) for more details.


