---
title: Kerberos and Git LFS
titleSuffix: Azure Repos
description: Using Git LFS versions older than 2.4.0 with TFS
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '>= tfs-2015'
---

# Kerberos authentication
If you use TFS, Git may be using the Kerberos protocol to authenticate.
(This doesn't apply to Azure DevOps Services, which uses a different form of authentication.)
LFS doesn't support Kerberos, so you can get errors which say "Your user name must be of the form DOMAIN\user".
As of Git LFS version 2.4.0, [NTLM authentication with SSPI](https://github.com/git-lfs/git-lfs/pull/2871) has been added.
You'll no longer receive these errors and authentication will work without extra configuration.

**We highly recommend you upgrade to Git LFS version 2.4.0 or later, where no extra configuration is necessary.**
If you can't upgrade to 2.4.0, you can remove the Kerberos credential and let Git pick up a new NTLM credential by using the following workaround.


> [!NOTE]
> Credentials sent via HTTP will be passed in clear text.
> [Ensure your instance of TFS is configured for HTTPS](/azure/devops/server/admin/websitesettings), and do not use HTTP with Git-LFS.

0. Open the Windows Credential Manager. On Windows 10, you can press Start and then type "Credential Manager".

   ![Open Credential Manager](_img/manage-large-files/launch-credential-manager.png)

0. Choose *Windows Credentials*.

   ![Choose Windows Credentials](_img/manage-large-files/choose-windows-credentials.png)

0. Find your TFS URL in the credential list.
0. Choose *Remove*.

   ![Choose Remove](_img/manage-large-files/choose-remove.png)

0. Return to your Git client (Visual Studio or the command line) and push your changes.
When prompted for credentials, be sure to enter them in the form *DOMAIN\username*.
