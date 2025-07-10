---
title: Authenticate with your Git repos
titleSuffix: Azure Repos
description: Learn how to authenticate with Azure Repos using Microsoft Entra OAuth tokens (recommended), personal access tokens, or SSH keys for secure Git operations.
ms.assetid: 138f12d0-e3fd-4fde-a727-1b39d45c05c4
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 07/02/2025
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
ms.custom: sfi-ropc-nochange
# customer-intent: As a developer, I want to understand the different authentication methods available for Azure Repos so I can choose the most secure option (Microsoft Entra OAuth tokens) for accessing my Git repositories.
---

# Authentication with Azure Repos

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Secure authentication is fundamental to protecting your Azure Repos and Azure DevOps Server Git repositories. With multiple authentication options available—Microsoft Entra OAuth tokens, Personal Access Tokens, and SSH keys—choosing the right method ensures both security and productivity for your development workflow.

**Microsoft Entra OAuth tokens are the recommended approach** for modern development teams, offering enhanced security through OAuth 2.0 standards and seamless integration with enterprise identity systems. Whether you're working from the command line, using Git clients, or integrating with CI/CD pipelines, selecting an authentication method with appropriate scope limits reduces security risks while maintaining the access you need.

Always revoke or rotate credentials when they're no longer needed. This practice maintains repository security and follows the principle of least privilege access.

## Authentication mechanisms

### Microsoft Entra OAuth tokens (Recommended)

[Microsoft Entra tokens](../../integrate/get-started/authentication/entra.md) are the **preferred authentication method** for Git operations and [REST APIs](/rest/api/azure/devops/). They offer enhanced security features and can be used wherever personal access tokens are used. These tokens are generated for a user principal or a [managed identity and/or service principal](../../integrate/get-started/authentication/service-principal-managed-identity.md). 

**Quick start with Azure CLI**: You can obtain a Microsoft Entra token for immediate use with Git operations using the Azure CLI. This method is ideal for testing or one-time operations.

**For user authentication:**
```bash
 az login
 az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798 --query "accessToken" --output tsv
```

**For service principal authentication:**
First [sign in as the service principal](/cli/azure/authenticate-azure-cli), then obtain the token:
```bash
az login --service-principal -u <client-id> -p <client-secret> --tenant <tenant-id>
az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798 --query "accessToken" --output tsv
```

**Example usage with Git:**

```powershell
$accessToken = az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798 --query "accessToken" --output tsv
git -c http.extraheader="AUTHORIZATION: bearer $accessToken" clone https://dev.azure.com/{yourOrgName}/{yourProjectName}/_git/{yourRepoName}
```

### Personal access tokens (Alternative option)

> [!NOTE]
> While Personal Access Tokens are still supported, **Microsoft Entra OAuth tokens are recommended** for better security and modern authentication practices.

[Personal access tokens (PATs)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) provide access to Azure DevOps without using your username and password directly. These tokens expire and allow you to restrict the scope of the data they can access.

**Use PATs when:**
- You don't have SSH keys set up on your system
- You need to limit the permissions granted by the credential
- Microsoft Entra OAuth tokens aren't available in your scenario

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

---

### SSH keys

Key authentication with SSH works through a public and private key pair that you create on your computer. 
You associate the public key with your username from the web. Azure DevOps encrypts the data sent to you with that key when you work with Git.
You decrypt the data on your computer with the private key, which is never shared or sent over the network.

![Animated GIF showing adding of a SSH public key to Azure DevOps](media/ssh_add_public_key.gif)

SSH is a great option if it's already set up on your system&mdash;just add a public key to Azure DevOps and clone your repos using SSH. SSH might be preferred for Linux, macOS, or Windows running [Git for Windows](https://www.git-scm.com/download/win) who can't use [Git credential managers](../../repos/git/set-up-credential-managers.md) or [personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) for HTTPS authentication.

For more information, see [Set up SSH with Azure DevOps](use-ssh-keys-to-authenticate.md).

## Use Git Credential Manager to generate tokens

<a name="use-credential-managers-to-generate-tokens"></a>

Use the [Git Credential Manager (GCM)](set-up-credential-managers.md) to avoid entering your credentials every time and keep your token more secure when accessing Azure Repos. Sign in to the web portal, generate a token, and then use the token as your password when you're connecting to Azure Repos. Microsoft Entra tokens (preferred) or PATs are generated on demand when you have the credential manager installed and saved locally for use with the Git command line or other client. 

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

## Related content

- [Use Git Credential Manager to authenticate to Azure Repos](set-up-credential-managers.md)
- [Learn about security, authentication, and authorization in Azure DevOps](../../organizations/security/about-security-identity.md)
- [Learn about permissions and security groups in Azure DevOps](../../organizations/security/about-permissions.md)
