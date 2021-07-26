---
title: Sign in with a Personal Access Token (PAT), Azure DevOps CLI 
titleSuffix: Azure DevOps 
description: Use a Personal Access Token (PAT) with Azure DevOps CLI 
ms.topic: reference 
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: kaelli  
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 08/17/2020
---

# Sign in with a personal access token (PAT)

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

You can sign in using an Azure DevOps personal access token (PAT). To create a PAT, see the [create personal access token guide](../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat).

To use a PAT with the Azure DevOps CLI, use one of these options:

* Use `az devops login` and be [prompted for the PAT token](#userprompt).
* Pipe the [PAT token on StdIn](#PipePATonStdIn) to `az devops login`. 
  > [!NOTE]:
  > This option works only in a non interactive shell.
* Set the `AZURE_DEVOPS_EXT_PAT` [environment variable](#EnvironmentVariable) and don't use `az devops login`.

## <a name="userprompt" />User prompted use of az devops login

You're prompted to enter a PAT after you run the `az devops login` command.

```bash
$az devops login --organization https://dev.azure.com/contoso
Token:
```

> [!NOTE]   
> If you have already signed in with `az login` interactively or if you're using a username and password, you're not required to provide a token because the `az devops` commands now support sign-in through `az login`. However, you can't sign in as the service principal via `az login`, in which case a PAT token is required.  

When you're successfully signed in, this command also can set your default organization to Contoso, provided no default organization is configured.

## <a name="PipePATonStdIn"/>Pipe PAT on StdIn to az devops login

### From a variable

This option is useful in pipelines where `#####` can be replaced by `$(System.AccessToken)` or another pipeline variable.

```bash
echo  "######" | az devops login --organization https://dev.azure.com/contoso/
```

### From a file

```bash
cat my_pat_token.txt | az devops login --organization https://dev.azure.com/contoso/
```

## <a name="EnvironmentVariable"/>Use the AZURE_DEVOPS_EXT_PAT environment variable 

To gain access in a non-interactive manner for automation scenarios, you can use environment variables or fetch a PAT from a file. 

If `az login` or `az devops login` haven't been used then all `az devops` commands will try to login using a PAT token stored in the `AZURE_DEVOPS_EXT_PAT` environment variable.

To use a personal access token, set the `AZURE_DEVOPS_EXT_PAT` environment variable at the process level:

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

