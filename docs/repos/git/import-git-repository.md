---
title: Import a Git repo into your project
titleSuffix: Azure Repos
description: Import a repo from GitHub, GitLab, or Bitbucket into your Azure DevOps Services/TFS Project
ms.assetid: 5439629e-23fd-44f1-a345-f00a435f1430
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: quickstart
ms.date: 11/02/2018
monikerRange: '>= tfs-2013'
---


# Import a Git repo
#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | TFS 2013

This guide shows you how to import an existing Git repo from GitHub, Bitbucket, GitLab, or other location into a new or empty existing repo in your project in Azure DevOps.

::: moniker range=">= tfs-2017 <= tfs-2018"

>[!IMPORTANT]
>The **Import repository** feature is currently not working if you are importing a GitHub repo using TFS 2017.1 to TFS 2018.1. For more information about this issue, see [Weak cryptographic standards removal notice](https://githubengineering.com/crypto-removal-notice/) and [Unable to connect to GitHub due to TLS 1.2 only change](https://developercommunity.visualstudio.com/content/problem/201457/unable-to-connect-to-github-due-to-tls-12-only-cha.html)

There are several workarounds to this issue:
* You can import a GitHub repo into TFS using the steps in [Manually import a repo](#manually-import-a-repo).
* You can set a machine-wide .NET registry key on your Application Tier servers to enable them to use all available TLS protocol versions. After setting these registry keys, you will need to recycle the TFS application pools (or restart the servers) for the settings to be activated. Open an elevated command prompt and run the following commands to set the registry keys.
 
     ```
      reg add HKLM\SOFTWARE\Microsoft\.NETFramework\v4.0.30319 /v SystemDefaultTlsVersions /t REG_DWORD /d 1 /f /reg:64
      reg add HKLM\SOFTWARE\Microsoft\.NETFramework\v4.0.30319 /v SystemDefaultTlsVersions /t REG_DWORD /d 1 /f /reg:32
     ```

* On your Application Tier servers, you can modify the web.config file to change the targetFramework from `<httpRuntime targetFramework="4.5"` to `<httpRuntime targetFramework="4.6"`.

This issue is resolved starting with [Team Foundation Server 2018 Update 2 RC1 and higher](/visualstudio/releasenotes/tfs2018-update2).

::: moniker-end

## Prerequisites

* An organization in Azure DevOps. If you don't have one, you can [sign up](../../organizations/accounts/create-organization.md) for one for free. Each organization includes free, unlimited private Git repositories.
* To use the **Import repository** feature in TFS, you must have TFS 2017 Update 1 or higher. 
* To import a repository using TFS 2017 RTM or earlier, see [Manually import a repo](#manually-import-a-repo).

::: moniker range=">= tfs-2017"  

## Import into a new repo  
::: moniker-end  

::: moniker range=">= azure-devops-2019"

1. Select **Repos**, **Files**.

  ![View your branches](_img/repos-navigation/repos-files.png)

0. From the repo drop-down, select **Import repository**.

  ![Manage repositories](_img/repo-mgmt/import-repository.png)

0. If the source repo is publicly available, just [enter the clone URL](clone.md#clone_url) of the source repository and a name for your new Git repository.

  If the source repository is private but can be accessed using basic authentication (username-password, personal access token, etc.),  select **Requires authorization** and enter the your credentials.

  ![Import Repository Dialog](_img/Import-Repo/ImportRepoDialog.png)

::: moniker-end

::: moniker range="<= tfs-2018"

From the repo drop-down, select **Import repository**.

![Import Repository Option](_img/Import-Repo/ImportRepository.png)

If the source repo is publicly available, just [enter the clone URL](clone.md#clone_url) of the source repository and a name for your new Git repository.

If the source repository is private but can be accessed using basic authentication (username-password, personal access token, etc.),  select **Requires authorization** and enter the your credentials.

![Import Repository Dialog](_img/Import-Repo/ImportRepoDialog.png)

::: moniker-end


## Import into an existing empty repo

On the **Files** page of the empty Git repository, select **Import** and [enter the clone URL](clone.md#clone_url). You will need to provide credentials if the source repository requires authentication. 

![Import Repository into an existing repository](_img/Import-Repo/ImportRepofromEmptyRepo.png)

>[!NOTE]
>The import feature disables automated linking for work items mentioned in a commit comment since the work item IDs in the destination project might not be the same as ones in the source project. Automatic linking for work items mentioned in a commit can be re-enabled by navigating to **Settings**, **Version Control**,  selecting your repository, and choosing **Options**. For more information on linking commits with work items, see [How do I associate my commits with work items?](share-your-code-in-git-vs-2017.md#how-do-i-associate-my-commits-with-work-items)

::: moniker range=">= tfs-2013"

## Manually import a repo

The import repo feature was introduced in TFS 2017 Update 1. If you are using TFS 2017 RTM or earlier, you can use the following steps to manually import a repo into TFS. You can also follow these steps to manually import a repo into an Azure DevOps Services repo by replacing TFS with Azure Repos in the following steps.

0. Clone the source repo to a temporary folder on your computer using the `bare` option, as shown in the following command line example, and then navigate to the repo's folder. Note that when cloning using the `bare` option, the folder name includes the `.git` suffix. In this example, `https://github.com/contoso/old-contoso-repo.git` is the source repo to be manually imported.

    ```
    git clone --bare https://github.com/contoso/old-contoso-repo.git
    cd old-contoso-repo.git
    ```

0. [Create a target repo](create-new-repo.md#create-a-repo-using-the-web-portal) using TFS 2017 RTM, and make a note of the clone URL. In this example, `https://dev.azure.com/contoso-ltd/MyFirstProject/_git/new-contoso-repo` is the URL for the new target repo.

0. Run the following command to copy the source repo to the target repo.

    ```
    git push --mirror https://dev.azure.com/contoso-ltd/MyFirstProject/_git/new-contoso-repo
    ``` 

0. Delete the temporary folder by running the following commands.

    ```
    cd ..
    rm -rf old-contoso-repo.git
    ```

::: moniker-end

## Frequently asked questions

::: moniker range=">= tfs-2017"

Although most of the time the import is successful, the following conditions can cause problems.

* [What if my Source repository is behind two-factor authentication?](#what-if-my-source-repository-is-behind-two-factor-authentication)
* [What if my source repository does not support multi_ack?](#what-if-my-source-repository-does-not-support-multiack)
* [Can I import from previous versions of Team Foundation Server?](#can-i-import-from-previous-versions-of-team-foundation-server)
* [Can I use MSA based credentials?](#can-i-use-msa-based-credentials)
* [Can I import from TFVC?](#can-i-import-from-tfvc)

### What if my source repository is behind two-factor authentication?

The import service uses REST APIs to validate and trigger import and cannot work directly with repositories that require two-factor authentication.
Most Git hosting providers like [GitHub](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) and [Azure DevOps Services](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) support personal tokens which can be supplied to the import service. 

### What if my source repository does not support multi_ack?

The import service uses the [multi_ack](https://git-scm.com/book/en/v2/Git-Internals-Transfer-Protocols) capability of the Git protocol during the import.
If the source repository does not provide this capability, the import service can fail to import from the given source.
This failure can happen when creating import request or while import is in progress.

::: moniker-end

::: moniker range=">= tfs-2013"

### Can I import from previous versions of Team Foundation Server?
If the source Git repository is in a TFS version earlier than TFS 2017 RTM, then import will fail.
This happens because of a contract mismatch between the latest Azure DevOps Services/TFS and pre-2017 RTM versions of TFS.

::: moniker-end

::: moniker range=">= tfs-2017"

### Can I use MSA based credentials?
Unfortunately, MSA (Microsoft Account, formerly Live ID) based credentials will not work. Import service relies on basic authentication to communicate with the source repository. If the username / password you are using are not basic auth then authentication will fail and import will fail.
One way to check if the username / password you are using are basic auth or not is to try using Git to clone your repository using the below format

```
git clone https://<<username>>:<<password>>@<<remaining clone Url>>
```

### Can I import from TFVC?

You can migrate code from an existing TFVC repository to a new Git repository within the same account. While migrating to Git has many benefits, it is an involved process for large TFVC repositories and teams. Centralized version control systems, like TFVC, behave different than Git in fundamental ways. The switch involves a lot more than learning new commands. It is a disruptive change that requires careful planning. For more information, see [Import from TFVC to Git](import-from-tfvc.md).

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [New to Git repos? Learn more](/azure/devops/learn/git/set-up-a-git-repository)

> [!div class="nextstepaction"]
> [Learn more about using Git in the Git tutorial](gitworkflow.md)


