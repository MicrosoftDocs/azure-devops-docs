---
title: Secure files for Azure Pipelines and Team Foundation Server
ms.custom: seodec18
description: Understand secure files for Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 1B115D68-5667-445C-9130-00D658EEFE39
ms.prod: devops
ms.technology: devops-cicd
ms.manager: dastahel
ms.author: madhurig
ms.date: 12/18/2018
monikerRange: '>= tfs-2015'
---

# Secure files

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Use the **Secure Files** library to store files such as signing certificates, Apple Provisioning Profiles, Android Keystore files, and SSH keys on the server without having to commit them to your source repository. Secure files are defined and managed in the **Library** tab in **Azure Pipelines**.

The contents of the secure files are encrypted and can only be used during the build or release pipeline by referencing them from a task. The secure files are available across multiple build and release pipelines in the project based on the security settings. Secure files follow the [library security model](index.md#security).

There's a size limit of 10 MB for each secure file.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### How can I consume secure files in a Build or Release Pipeline?

Use the [Download Secure File](../tasks/utility/download-secure-file.md) Utility task to consume secure files within a Build or Release Pipeline.

### How can I create a custom task using secure files?

You can build your own tasks that use secure files by using inputs with type `secureFile` in the `task.json`.
[Learn how to build a custom task](../../extend/develop/add-build-task.md).

The Install Apple Provisioning Profile task is a simple example of a task using a secure file. See the [reference documentation](../tasks/utility/install-apple-provisioning-profile.md) and [source code](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/InstallAppleProvisioningProfileV1).

To handle secure files during build or release, you can refer to the common module available [here](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/Common/securefiles-common).

### My task can't access the secure files. What do I do?

Make sure your agent is running version of 2.116.0 or higher. See [Agent version and upgrades](../agents/agents.md#agent-version-and-upgrades).

### Why do I see an `Invalid Resource` error when downloading a secure file with Azure DevOps Server/TFS on-premises?

Make sure [IIS Basic Authentication]( /iis/configuration/system.webserver/security/authentication/basicauthentication) is disabled on the TFS or Azure DevOps Server. 

### How do I authorize a secure file for use in all pipelines?

 1. Navigate to the **Library** tab in **Azure Pipelines**.
 1. Select the **Secure files** tab at the top. 
 1. Select the secure file you want to authorize. 
 1. In the details view, below the "Properties" section, select **Authorize for use in all pipelines**, and then select **Save**.

<!-- ENDSECTION -->
