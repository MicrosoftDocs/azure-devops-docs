---
title: Sign in with a Personal Access Token (PAT), Azure DevOps CLI 
titleSuffix: Azure DevOps 
description: Use a Personal Access Token (PAT) with Azure DevOps CLI 
ms.topic: how-to
ms.subservice: azure-devops-reference
ms.manager: mijacobs 
ms.author: chcomley  
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/05/2025
---

# Sign in with a personal access token

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

This article explains how to sign in using an Azure DevOps personal access token (PAT). You can sign in [interactively with Microsoft Entra through the az login command](index.md) or by using an Azure DevOps PAT. To create a PAT, see [Use personal access tokens](../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat).

[!INCLUDE [use-microsoft-entra-reduce-pats](../includes/use-microsoft-entra-reduce-pats.md)]

To use a PAT with the Azure DevOps CLI, choose one of these methods:

- Run `az devops login` and [enter the PAT token when prompted](#sign-in-with-a-personal-access-token).
- Pipe the [PAT token to StdIn](#pipe-a-pat-to-az-devops-login) and use it with `az devops login`.  
  > [!NOTE]  
  > This method works only in a non-interactive shell.
- Set the `AZURE_DEVOPS_EXT_PAT` [environment variable](#authenticate-with-the-azure_devops_ext_pat-environment-variable) and run CLI commands without using `az devops login`.

## Sign in with az devops login and enter your PAT

After you run the `az devops login` command, enter your personal access token (PAT) when prompted:

```azurecli
az devops login --organization https://dev.azure.com/contoso
Token:
```

If you already signed in interactively with `az login` or used a user name and password, you don't need to provide a PAT. The `az devops` commands now support sign-in through `az login`.

When you sign in successfully, this command can also set your default organization if none is configured.

> [!NOTE]  
> For Guest Users, only `az devops login` is supported.

## Pipe a PAT to az devops login

You can provide your PAT to the Azure DevOps CLI by piping it to the `az devops login` command. This approach is useful for automation and CI/CD pipelines where interactive input isn't possible.

### Use a variable

Replace `######` with `$(System.AccessToken)` or another pipeline variable:

```azurecli
echo "######" | az devops login --organization https://dev.azure.com/contoso/
```

### Use a file

You can also store your PAT in a file and pipe it to the login command:

```azurecli
cat my_pat_token.txt | az devops login --organization https://dev.azure.com/contoso/
```

## Authenticate with the AZURE_DEVOPS_EXT_PAT environment variable

For non-interactive or automation scenarios, set the `AZURE_DEVOPS_EXT_PAT` environment variable to your PAT. If you haven't used `az login` or `az devops login`, all `az devops` commands attempt to use this variable for authentication.

Set the environment variable at the process level before running CLI commands to enable seamless authentication.

#### [Windows](#tab/windows)


```powershell
# set environment variable for current process
$env:AZURE_DEVOPS_EXT_PAT = 'xxxxxxxxxx'
```

##### [macOS and Linux](#tab/unix)

```bash
export AZURE_DEVOPS_EXT_PAT=xxxxxxxxxx
```

Replace *xxxxxxxxxx* with your PAT.
