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

# Sign in with a Personal Access Token (PAT)

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 


You can sign in using an Azure DevOps Personal Access Token. See the [create personal access token guide](../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) to create one.

You are prompted to enter a PAT after you run the `az devops login` command.


```bash
$az devops login --organization https://dev.azure.com/contoso
Token:
```

> [!NOTE]   
> If you have already signed in with `az login` interactively or using user name and password, then you don't have to provide a token as `az devops` commands now support sign in through `az login`. However, service principal log in via `az login` isn't supported, in which case a PAT token is required.  

Once successfully signed in, this command would also set your default organization to Contoso, provided there is no default organization configured.

To gain access in a non-interactive manner for automation scenarios, you can use environment variables or fetch a PAT from a file. 

## Use environment variables 

There are cases where persisting a personal access token on the machine is not feasible or secure. In these cases, you can get a token from an environment variable.

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

Replace *xxxxxxxxxx* with your PAT.

Now run any command without having to sign in explicitly. Each command will try to use the PAT in the environment variable for authentication.

## Fetch PAT from a file 


```bash
cat my_pat_token.txt | az devops login --organization https://dev.azure.com/contoso/
```
