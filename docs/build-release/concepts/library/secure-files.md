---
title: Secure files for VSTS and Team Foundation Server
description: Understand secure files for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.assetid: 1B115D68-5667-445C-9130-00D658EEFE39
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: dastahel
ms.author: madhurig
ms.date: 04/26/2017
---

# Secure files

**VSTS**

Use the **Secure Files** library to store files such as signing certificates, Apple Provisioning Profiles, Android Keystore files, and SSH keys on the server without having to commit them to your source repository. Secure files are defined and managed in the **Library** tab of the **Build &amp; Release** hub.

The contents of the secure files are encrypted and can only be used during the build or release process by referencing them from a task. The secure files are available across multiple build and release definitions in the team project based on the security settings. Secure files follow the [library security model](index.md#security).

There's a size limit of 10 MB for each secure file. 

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### How can I create a custom task using secure files?

You can build your own tasks that use secure files by using inputs with type `secureFile` in the `task.json`. 
[Learn how to build a custom task](../../../extend/develop/add-build-task.md).

The Install Apple Provisioning Profile task is a simple example of a task using a secure file. See the [reference documentation](../../tasks/utility/install-apple-provisioning-profile.md) and [source code](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/InstallAppleProvisioningProfile). 

To handle secure files during build or release, you can refer to the common module available [here](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/Common/securefiles-common). 

### My task can't access the secure files. What do I do?

Make sure your agent is running version of 2.116.0 or higher. See [Agent version and upgrades](../agents/agents.md#agent-version-and-upgrades).

<!-- ENDSECTION -->
