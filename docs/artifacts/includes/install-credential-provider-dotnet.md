---
ms.topic: include
ms.service: azure-devops-artifacts
ms.manager: wiwagn
ms.author: rabououn
author: ramiMSFT
ms.date: 05/07/2026
---

To authenticate with your feed, you must first install the Azure Credential Provider. Using the tool installer included with dotnet, you can install the credential provider from the CLI using the following command:

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

The first time you perform an operation that requires authentication, you should authenticate by either:

- Running with `--interactive` so dotnet can prompt you to authenticate.
- Providing credentials through [environment variables]((https://www.nuget.org/packages/Microsoft.Artifacts.CredentialProvider.NuGet.Tool#environment-variables)) (for example, in unattended scenarios).

If interactive authorization is available, navigate to your project directory and run:

```dotnetcli
dotnet restore --interactive
```

This command signs you in and acquires a token. After sign-in succeeds, you can run authenticated commands without `--interactive` until the token expires. See [Session token cache locations](https://www.nuget.org/packages/Microsoft.Artifacts.CredentialProvider.NuGet.Tool#session-token-cache-locations) for more details.