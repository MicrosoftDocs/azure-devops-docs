---
title: Go get support
titleSuffix: Azure Repos
description: Learn how to use Go get command  with Azure Repos Git
ms.technology: devops-code-git 
ms.topic: conceptual
ms.date: 06/19/2019
monikerRange: 'azure-devops'
---

# Go get command support in Azure Repos Git

#### Azure Repos

Go is an open-source programming language, also referred to as Golang. 
In Go, you can use the `get` command to download and install packages and dependencies. 
Azure Repos Git provides support for `go get` within an Azure Repos Git repository. 
With `go get`, you will be able to download packages with their dependencies named by the import paths. 
You can also use the `import` key word inside a go file to specify the import path, using the 
same syntax described in the following sections.

## Go get with public projects

If your Azure Repos Git repo is in a [public project](../../organizations/public/about-public-projects.md) 
you can use `go get` using the web repo url in the following format, 
and Azure Repos returns the appropriate meta tags so that `go get` knows 
the type and location of the repo to retrieve it.

```
go get dev.azure.com/<organization>/<project>/_git/<repo>
```

You can also import/get a Go package in a subfolder of a repo by appending 
the subfolder names, as shown in the following examples.

```
go get dev.azure.com/<organization>/<project>/_git/<repo>/subfolder1

go get dev.azure.com/<organization>/<project>/_git/<repo>/subfolder1/subfolder2
```

## Go get with private projects

If your Azure Devops Git repo is private you can either use ssh or authenticate with a Personal Access Token (PAT) for https.

### ssh

You need to have SSH keys setup for Azure Devops as described in [Use SSH Key authentication](./use-ssh-keys-to-authenticate.md)

After you have SSH keys setup, add an entry to your `.gitconfig` as following:

```
[url "git@ssh.dev.azure.com:v3/<organization>/"]
  insteadOf = https://dev.azure.com/<organization>/
```

You can now use `go get` in the following format. Note the `.git` that follows the repo name and `_git` is not present as we are using the ssh url.

```
go get dev.azure.com/<organization>/<project>/<repo>.git
```

### https

You need to create a Personal Access Token (PAT) as described in 
[Authenticate access with personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). This PAT requires only the Code (read) 
[scope](../../integrate/get-started/authentication/oauth.md#scopes).
After you create the PAT, add an entry to your `.gitconfig` as shown in the following example.

```
[url "https://<user>:<token>@dev.azure.com/<organization>/<project>/_git/<repo>"]
    insteadOf = https://dev.azure.com/<organization>/<project>/_git/<repo>
```

After this entry is made into your `.gitconfig`, you can use `go get` 
in the following format. Note the `.git` that follows the repo name.

```
go get dev.azure.com/<organization>/<project>/_git/<repo>.git
```

You can also import/get a Go package in a subfolder of a repo by appending the subfolder 
names, as shown in the following examples.

```
go get dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1

go get dev.azure.com/<organization>/<project>/_git/<repo>.git/subfolder1/subfolder2
```

