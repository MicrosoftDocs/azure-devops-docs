---
title: Use Go install command support with Azure Repos Git
titleSuffix: Azure Repos
description: Learn how to use the Go install command with Azure Repos Git repositories using SSH keys, Microsoft Entra ID tokens, or personal access tokens for authentication.
ai-usage: ai-assisted
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 07/02/2025
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
# customer-intent: As a Go developer, I want to use the go install command to download packages from Azure Repos Git repositories so I can manage dependencies in my Go projects with proper authentication.
---

# Use Go install command support in Azure Repos Git

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Go is an open-source programming language, also referred to as Golang. 
In Go, you can use the `install` command to download and install packages and dependencies. 
Azure Repos Git provides support for `go install` within an Azure Repos Git repository. 
With `go install`, you're able to download packages with their dependencies named by the import paths. 
You can also use the `import` key word inside a go file to specify the import path, using the 
same syntax described in the following sections.

## Go install with public projects

If your Azure Repos Git repo is in a [public project](../../organizations/projects/about-projects.md), you can use `go install` using the web repo url in the following format. For version, you can use `latest` or a specific version.

```
go install dev.azure.com/<organization>/<project>/_git/<repo>.git@<version>
```

You can also install a Go package in a subfolder of a repo by appending 
the subfolder names, as shown in the following examples.

```
go install dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1@<version>

go install dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1/subfolder2@<version>
```

## Go install with private projects

If your Azure Repos Git repository is private, you can authenticate using SSH keys, Microsoft Entra ID tokens (recommended), or Personal Access Tokens (PATs).

> [!IMPORTANT]
> To access private Azure Repos Git repositories using `go install`, you must first set the environment variable `GOPRIVATE=dev.azure.com`. You can set this environment variable locally before building or running.

### SSH

To use SSH with `go install`, have SSH keys set up for Azure DevOps as described in [Use SSH Key authentication](use-ssh-keys-to-authenticate.md).

When you have SSH keys set up, add this entry to your.gitconfig file:

```
[url "git@ssh.dev.azure.com:v3/<organization>/<project>/<repo>"]
	insteadOf = https://dev.azure.com/<organization>/<project>/<repo>
```

With this entry and a specific URL format, you can now use `go install`.

> [!NOTE]
> Be sure to use `.git` after the repo name.
> Also, `_git` isn't included in the package URL that you're passing to `go install` because you're using the SSH URL.

```
go install dev.azure.com/<organization>/<project>/<repo>.git
```

### HTTPS

To use HTTPS with `go install`, you can authenticate using either Microsoft Entra ID tokens (recommended) or Personal Access Tokens (PATs).

#### Microsoft Entra ID tokens (recommended)

Microsoft Entra ID tokens provide better security and are the recommended authentication method. You can obtain these tokens through:

- **Azure CLI** (for development/testing):
   ```bash
   az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798 --query "accessToken" --output tsv
   ```

- **Service Principal** (for production/automated scenarios):
   - Register an application in Microsoft Entra ID
   - Create a client secret for the application
   - Grant the application appropriate permissions in Azure DevOps
   - Use the service principal credentials to obtain tokens programmatically

For more information, see [Microsoft Entra authentication](../../integrate/get-started/authentication/entra.md).

After you obtain the Microsoft Entra ID token, add this entry to your `.gitconfig` file:

```
[url "https://<user>:<token>@dev.azure.com/<organization>/<project>/_git/<repo>"]
	insteadOf = https://dev.azure.com/<organization>/<project>/_git/<repo>
```

The `<user>` part can be any nonempty string; we suggest using `entra` or your username.

> [!TIP]
> **Get a one-time Microsoft Entra token from Azure CLI**: You can quickly obtain a Microsoft Entra ID token for Git operations using the Azure CLI, which is useful for development and testing scenarios. When generating tokens on behalf of a service principal, make sure to [sign in as the service principal](/cli/azure/authenticate-azure-cli) first.
> 
> **Token management**: Microsoft Entra ID tokens have expiration times, so you might need to refresh them periodically. For automated workflows, consider using service principals with appropriate token refresh mechanisms.

#### Personal Access Tokens (alternative)

If you prefer to use PATs, create a PAT as described in [Authenticate access with personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). This PAT requires only the **Code (read)** [scope](../../integrate/get-started/authentication/oauth.md#available-scopes).

After you create the PAT, add this entry to your `.gitconfig` file:

```
[url "https://<user>:<token>@dev.azure.com/<organization>/<project>/_git/<repo>"]
	insteadOf = https://dev.azure.com/<organization>/<project>/_git/<repo>
```

The `<user>` part can be any nonempty string; we suggest the word `pat`.

With this entry and a specific URL format, you can now use `go install`.

> [!NOTE]
> Be sure to use `.git` after the repo name.

```
go install dev.azure.com/<organization>/<project>/_git/<repo>.git@<version>
```

You can also install a Go package in a subfolder of a repo by appending the subfolder 
names, as shown in the following examples.

```
go install dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1@<version>

go install dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1/subfolder2@<version>
```
