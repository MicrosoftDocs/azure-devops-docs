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

You can sign in using an Azure DevOps Personal Access Token(PAT). See the [create personal access token guide](../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) to create one.

To use a PAT token with az devops cli you can either
* use `az devops login` and be [prompted for the PAT token](#userprompt)
* pipe the [PAT token on StdIn](#pipe-pat-on-stdin) to `az devops login`. NOTE: this only works in a non interactive shell
* set the [environment variable](#EnvironmentVariable) `AZURE_DEVOPS_EXT_PAT` and don't use `az devops login`

## <a name="userprompt" />User prompted use of `az devops login`

You are prompted to enter a PAT after you run the `az devops login` command.

```bash
$az devops login --organization https://dev.azure.com/contoso
Token:
```

> [!NOTE]   
> If you have already signed in with `az login` interactively or using user name and password, then you don't have to provide a token as `az devops` commands now support sign in through `az login`. However, service principal log in via `az login` isn't supported, in which case a PAT token is required.  

Once successfully signed in, this command would also set your default organization to Contoso, provided there is no default organization configured.


## <a name="PipePATonStdIn"/>Pipe PAT on StdIn to `az devops login`

### From Variable
This is useful in pipelines where `#####` can be replaced by $(System.AccessToken) or other pipeline variable.

```bash
echo  "######" | az devops login --organization https://dev.azure.com/contoso/
```

### From a file
```bash
cat my_pat_token.txt | az devops login --organization https://dev.azure.com/contoso/
```


## <a name="EnvironmentVariable"/> Use of environment variable `AZURE_DEVOPS_EXT_PAT`

To gain access in a non-interactive manner for automation scenarios, you can use environment variables or fetch a PAT from a file. 

If `az login` or `az devops login` haven't been used then all `az devops` commands will try to login using a PAT token stored in `AZURE_DEVOPS_EXT_PAT` environment variable.

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

