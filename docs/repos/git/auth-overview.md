---
title: Authenticate with your Git repos
titleSuffix: Azure Repos
description: Choose between HTTPS, SSH, and personal access tokens to securely sign in to your Git repos.
ms.assetid: 138f12d0-e3fd-4fde-a727-1b39d45c05c4
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 07/11/2024
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Authentication with Azure Repos

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Selecting the right authentication method is crucial for secure access to your Azure Repos and Azure DevOps Server Git repositories. Whether you're working from a command prompt or using a Git client that supports HTTPS or SSH, it's important to choose credentials that not only provide the necessary access but also limit the scope to what's needed for your tasks. 

Always revoke credentials when they're no longer required to maintain the security of your repositories. This approach ensures that you have the flexibility to work with your code securely and efficiently, while also safeguarding it against unauthorized access.

## Authentication mechanisms

### OAuth

Use [Microsoft Entra OAuth](../../integrate/get-started/authentication/entra-oauth.md) to generate tokens for accessing [REST APIs](/rest/api/azure/devops/). Microsoft Entra tokens can be used wherever personal access tokens are used.

### Personal access tokens

[Personal access tokens (PATs)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) provide access to Azure DevOps without using your username and password directly. These tokens expire and allow you to restrict the scope of the data they can access.
Use PATs to authenticate if you don't have SSH keys set up on your system or need to limit the permissions granted by the credential. If you are using PATs regularly, look into the [Git Credential Manager (GCM)](set-up-credential-managers.md) instead to avoid entering your credentials everytime. Even better, explore using GCM with Microsoft Entra tokens instead of PATs whenever possible.

Git interactions require a username, which can be anything except an empty string. To use a PAT with HTTP basic authentication, `Base64-encode` your `$MyPat` as shown in the following code block.

#### [Windows](#tab/Windows/)

In PowerShell, enter the following code.

```powershell
$MyPat = 'yourPat'
$headerValue = "Authorization: Basic " + [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes(":" + $MyPat))
$env:GIT_AUTH_HEADER = $headerValue

git --config-env=http.extraheader=GIT_AUTH_HEADER clone https://dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName
```

#### [Linux/macOS](#tab/Linux/)

In Bash, enter the following code.

```bash
MY_PAT=yourPAT # replace "yourPAT" with "PatStringFromWebUI"
export HEADER_VALUE=$(echo -n "Authorization: Basic "$(printf ":%s" "$MY_PAT" | base64))

git --config-env=http.extraheader=HEADER_VALUE clone https://dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName
```

***

### SSH keys

Key authentication with SSH works through a public and private key pair that you create on your computer. 
You associate the public key with your username from the web. Azure DevOps will encrypt the data sent to you with that key when you work with Git.
You decrypt the data on your computer with the private key, which is never shared or sent over the network.

![Animated GIF showing adding of a SSH public key to Azure DevOps](media/ssh_add_public_key.gif)

SSH is a great option if you've already got it set up on your system&mdash;just add a public key to Azure DevOps and clone your repos using SSH. SSH might be preferred for those on Linux, macOS, or Windows running [Git for Windows](https://www.git-scm.com/download/win) who can't use [Git credential managers](../../repos/git/set-up-credential-managers.md) or [personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) for HTTPS authentication.

For more information, see [Set up SSH with Azure DevOps](use-ssh-keys-to-authenticate.md).

## Use Git Credential Manager to generate tokens

<a name="use-credential-managers-to-generate-tokens"></a>

Use the [Git Credential Manager (GCM)](set-up-credential-managers.md) to avoid entering your credentials every time and keep your token more secure when accessing Azure Repos. Sign in to the web portal, generate a token, and then use the token as your password when you're connecting to Azure Repos. Microsoft Entra tokens or PATs are generated on demand when you have the credential manager installed and saved locally for use with the Git command line or other client. 

## Existing repositories

- **Remove existing origin:** If you previously added the origin using a username, remove it by running the following command:

   ``git remote remove origin``

- **Authenticate with a PAT:** If you encounter issues with standard authentication, run the following command to authenticate via the command line:  

   ``git remote add origin https://dev.azure.com/<PAT>@<company_machineName>:/<project-name>/_git/<repo_name>``

   ``git push -u origin --all``

   The `path to git repo = /_git/do` refers to the URL path structure used in Azure DevOps for Git repositories. The `/_git/` segment indicates that you're accessing a Git repository, and you should replace `do` with the actual name of your repository. For example, if your repository is named `my-repo`, the path would be '`/_git/my-repo`'.

- **Clone repository:** If you're using Git and need to authenticate, run the following command:

   ``git clone https://{organization}@dev.azure.com/{organization}/_git/{repository}``

   Replace `{organization}` with your Azure DevOps organization name and `{repository}` with the name of your repository.

## Related articles
- [Use Git Credential Manager to authenticate to Azure Repos](set-up-credential-managers.md)
- [About security, authentication, and authorization in Azure DevOps](../../organizations/security/about-security-identity.md)
- [About permissions and security groups in Azure DevOps](../../organizations/security/about-permissions.md)
