---
title: IIS Basic Authentication invalidates using PATs
description: Enabling IIS Basic Authentication invalidates using Personal Access Tokens.
ms.assetid: 173198c4-9b65-4c4a-a8f1-931b6b6c295a
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
monikerRange: '<= azure-devops-2020'
ms.author: chcomley
author: chcomley
ms.date: 09/30/2021
---

# Enabling IIS Basic Authentication invalidates using Personal Access Tokens

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

We recommend you keep [IIS Basic Authentication]( /iis/configuration/system.webserver/security/authentication/basicauthentication) turned off always when using Azure DevOps Server.  Only if necessary should you enable IIS Basic Authentication. When IIS Basic Authentication is enabled on your windows machine, it prevents you from using personal access tokens (PATs) as an authentication mechanism.

For example, if you use a PAT to allow a third-party app to retrieve bug information, and then email that info to the bug assignee with IIS Basic Authentication enabled, then that app fails authentication. The app can't retrieve bug info.

## Git with IIS Basic Authentication enabled

> [!WARNING]
> If you use Git with IIS Basic Authentication, Git breaks because it requires PATs for user authentication. Although we don't recommend you use IIS Basic Authentication, by adding an extra header to Git requests, you can use Git with IIS Basic Authentication.
>
> The extra header must be used for all Azure DevOps Server installations, as Windows Auth also prevents using PATs.

The extra header must include a base 64 encoding of "user:PAT". See the following format and example.

### Format

   ```
   git -c http.extraheader='Authorization: Basic [base 64 encoding of "user:password"]' ls-remote http://tfsserver:8080/tfs/DefaultCollection/_git/projectName
   ```

### Example

   ```
   git -c http.extraheader='Authorization: Basic a2FzYW50aGE6bzN3cDVndmw2YXRkajJkam83Znd4N2k3NDdhbGxjNXp4bnc3b3o0dGQycmd3d2M1eTdjYQ==' ls-remote http://tfsserver:8080/tfs/DefaultCollection/_git/projectName
   ```

## Related articles

- [Authentication guidance](authentication-guidance.md)
- [Authorize access to REST APIs with OAuth 2.0](oauth.md)
