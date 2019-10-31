---
title: Sign in with a Personal Access Token (PAT), Azure DevOps CLI 
titleSuffix: Azure DevOps 
description: Use a Personal Access Token (PAT) with Azure DevOps CLI 
ms.topic: reference 
ms.manager: mijacobs
ms.prod: devops 
ms.technology: devops-ref
ms.manager: mijacobs 
ms.author: geverghe
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 06/18/2019
---

# Sign in with a Personal Access Token (PAT)

[!INCLUDE [temp](../_shared/version-vsts-only.md)] 


You can sign in using an Azure DevOps Personal Access Token. See the [create personal access token guide](https://docs.microsoft.com/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=vsts#create-personal-access-tokens-to-authenticate-access) to create one.

Once you have the PAT, run the `az devops login` command. You will be prompted to enter PAT.


```bash
$az devops login --organization https://dev.azure.com/contoso
Token:
```

> [!NOTE]   
> If you have already signed in with `az login`, then you don't have to provide a token as `az devops` commands now support sign in through `az login`.


Once successfully signed in, this would also set your default organization to Contoso, provided there is no default organization configured.

In the above experience, you need to manually enter the token when prompted. However, you might want to login in a non-interactive manner, especially when running automation scripts. For this, you can use one of the following methods:

## Use environment variables 

There are cases where persisting a personal access token on the machine where the Azure CLI is running is not technically possible or is not secure. In these cases you can get a token from an environment variable.

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

* * *

Replace *xxxxxxxxxx* with the your PAT.

Now run any command without having to sign in explicitly. Each command will try to use the PAT in the environment variable for authentication.

## Fetch PAT from a file 


```bash
cat my_pat_token.txt | az devops login --organization https://dev.azure.com/contoso/
```

