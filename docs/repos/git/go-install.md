---
title: Go install support
titleSuffix: Azure Repos
description: Learn how to use Go install command with Azure Repos Git
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 02/28/2025
monikerRange: '>= azure-devops-2020'
ms.subservice: azure-devops-repos-git
---

# Go get command support in Azure Repos Git

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Go is an open-source programming language, also referred to as Golang. 
In Go, you can use the `install` command to download and install packages and dependencies. 
Azure Repos Git provides support for `go install` within an Azure Repos Git repository. 
With `go install`, you're able to download packages with their dependencies named by the import paths. 
You can also use the `import` key word inside a go file to specify the import path, using the 
same syntax described in the following sections.

> [!NOTE]
> The feature documented in this article requires Azure DevOps Server 2019 Update 1 or later version. 

## Go get with public projects

If your Azure Repos Git repo is in a [public project](../../organizations/projects/about-projects.md) 
you can use `go install` using the web repo url in the following format, 
and Azure Repos returns the appropriate meta tags so that `go install` knows 
the type and location of the repo to retrieve it.

```
go install dev.azure.com/<organization>/<project>/_git/<repo>.git@<version>
```

You can also import/get a Go package in a subfolder of a repo by appending 
the subfolder names, as shown in the following examples.

```
go install dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1@<version>

go install dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1/subfolder2@<version>
```

## Go get with private projects

If your Azure DevOps Git repo is private, you can either use SSH or authenticate with a Personal Access Token (PAT) for HTTPS.

> [!IMPORTANT]
> To access private Azure Repos Git repositories using go install, you must first set the environment variable `GOPRIVATE=dev.azure.com`. You can set this environment variable locally before building or running.

### SSH

To use SSH with `go install`, have SSH keys set up for Azure DevOps as described in [Use SSH Key authentication](use-ssh-keys-to-authenticate.md).

When you have SSH keys set up, add this entry to your .gitconfig file:

```
[url "git@ssh.dev.azure.com:v3/<organization>/<project>/<repo>"]
	insteadOf = https://dev.azure.com/<organization>/<project>/<repo>
```

With this entry and a specific URL format, you can now use `go install`.

> [!NOTE]
> Be sure to use `.git` after the repo name.
> Also, `_git` is not included in the package URL that you're passing to `go install` because you're using the SSH URL.

```
go install dev.azure.com/<organization>/<project>/<repo>.git
```

### HTTPS

To use HTTPS with `go install`, you must create a PAT as described in [Authenticate access with personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). This PAT requires only the **Code (read)** [scope](../../integrate/get-started/authentication/oauth.md#scopes).

After you create the PAT, add this entry to your .gitconfig file:

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

You can also import/get a Go package in a subfolder of a repo by appending the subfolder 
names, as shown in the following examples.

```
go install dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1@<version>

go install dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1/subfolder2@<version>
```
