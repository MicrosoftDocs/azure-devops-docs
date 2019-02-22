---
title: Enabling IIS Basic Authentication invalidates using Personal Access Tokens
description: Enabling IIS Basic Authentication invalidates using Personal Access Tokens
ms.assetid: 173198c4-9b65-4c4a-a8f1-931b6b6c295a
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Enabling IIS Basic Authentication invalidates using Personal Access Tokens

**TFS**

We recommend you keep [IIS Basic Authentication]( /iis/configuration/system.webserver/security/authentication/basicauthentication) turned 
off at all times when using TFS.  Only if absolutely necessary should you enable IIS Basic Authentication. When IIS 
Basic Authentication is enabled on your windows machine, it prevents your using personal access tokens (PATs) as an 
authentication mechanism. 

For example, if you use a PAT to allow a third party app to retrieve bug information and email that info to the 
assignee of the bug, and IIS Basic Authentication is enabled, then that app will fail authentication.  The app 
won't be able to retrieve bug info.

**Git with IIS Basic Authentication enabled:**

> [!WARNING]
> If you use Git with IIS Basic Authentication, Git will break because it requires PATs for user 
authentication.  Although we do not recommend you use IIS Basic Authentication, by adding an extra header to Git 
requests, you can use Git with IIS Basic Authentication: 

   The extra header must include a base 64 encoding of "user:PAT"
   
   **Form**:
   ```
   git -c http.extraheader='Authorization: Basic [base 64 encoding of "user:PAT"]' ls-remote http://tfsserver:8080/tfs/DefaultCollection/_git/projectName
   ```
   
   **Example**:
   ```
   git -c http.extraheader='Authorization: Basic a2FzYW50aGE6bzN3cDVndmw2YXRkajJkam83Znd4N2k3NDdhbGxjNXp4bnc3b3o0dGQycmd3d2M1eTdjYQ==' ls-remote http://tfsserver:8080/tfs/DefaultCollection/_git/projectName
   ```
