---
title: Use Kerberos authentication with Git LFS on Azure DevOps Server
titleSuffix: Azure Repos
description: Learn when Git LFS uses Kerberos with Azure DevOps Server configured for Windows Authentication and which Git LFS versions are affected.
ms.service: azure-devops-repos
ms.topic: overview
ms.date: 07/21/2026
ai-usage: ai-assisted
monikerRange: '< azure-devops'
ms.subservice: azure-devops-repos-git
ms.custom: sfi-image-nochange, support-driven-update, support
---

# Use Kerberos authentication with Git LFS on Azure DevOps Server

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

Use this article if you run Azure DevOps Server with Windows Authentication and need Git LFS to work with Kerberos.

This guidance applies only to Azure DevOps Server. Azure DevOps Services uses a different authentication flow.

Before you continue, confirm that your environment matches these assumptions:

- You're using Azure DevOps Server, not Azure DevOps Services.
- Your Azure DevOps Server deployment uses Windows Authentication.
- You use Git LFS with the repo that connects to Azure DevOps Server.

> [!NOTE]
> - This article doesn't apply to Azure DevOps Services. If you use Azure DevOps Services, you don't need Kerberos-specific guidance for Git LFS.
> - For Azure DevOps Server guidance on Git LFS and Kerberos, see [Reconfigure Azure DevOps Server to use Kerberos instead of NTLM](https://devblogs.microsoft.com/devops/reconfigure-azure-devops-server-to-use-kerberos-instead-of-ntlm/) and [Upcoming change: NTLM removal in Git (libcurl) – Impact to Azure DevOps Server customers](https://devblogs.microsoft.com/devops/upcoming-change-ntlm-removal-in-git-libcurl-impact-to-azure-devops-server-customers/).

## Git LFS version behavior

Git LFS supports Kerberos authentication starting with Git LFS 2.10.0.

Earlier Git LFS releases supported NTLM authentication. However, NTLM support was removed starting with Git LFS 3.0.0.

If you connect to an Azure DevOps Server instance that uses Windows Authentication, Git LFS 3.0.0 and later requires Kerberos authentication for that scenario.

## What to verify before you change clients

Before you upgrade or troubleshoot Git LFS, confirm that your environment can use Kerberos successfully:

- Verify that your Azure DevOps Server environment is configured for Windows Authentication.
- Verify that client connections negotiate Kerberos instead of falling back to another authentication mechanism.
- Review your environment constraints before you standardize on Kerberos. For example, workgroup and other non-domain scenarios can require separate planning.

> [!IMPORTANT]
> Upgrade to Git LFS 2.10.0 or later to use Kerberos authentication. If your Azure DevOps Server instance uses Windows Authentication and you're running Git LFS 3.0.0 or later, use Kerberos authentication.

## Related content

- [Reconfigure Azure DevOps Server to use Kerberos instead of NTLM](https://devblogs.microsoft.com/devops/reconfigure-azure-devops-server-to-use-kerberos-instead-of-ntlm/)
- [Upcoming change: NTLM removal in Git (libcurl) – Impact to Azure DevOps Server customers](https://devblogs.microsoft.com/devops/upcoming-change-ntlm-removal-in-git-libcurl-impact-to-azure-devops-server-customers/)
