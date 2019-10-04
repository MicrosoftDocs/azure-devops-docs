---
title: Troubleshoot authenticating and inviting GitHub users
description: Troubleshoot authenticating with a GitHub identity, as well as inviting other GitHub users to Azure DevOps
ms.prod: devops
ms.technology: devops-security
ms.assetid: 
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/23/2019
monikerRange: 'azure-devops'
---

# Troubleshoot authenticating & inviting GitHub users

[!INCLUDE [version-vsts-tfs-all-versions](../../_shared/version-vsts-tfs-all-versions.md)]

If you are having issues either connecting to Azure DevOps using your GitHub identity, or inviting other GitHub users, see the following frequently asked questions and answers.

### Q: Some of my users in Azure DevOps have GitHub identities. Do I need to add them as new GitHub users into my organization?

A: No. Ask your users to sign out, and then from a fresh browser session, sign back in to the organization with their GitHub credentials. This will help establish the users as having valid GitHub identities.

### Q: I'm an organization administrator and I turned on the policy that enables inviting GitHub users. Why can't I invite new GitHub users?

A: Once the setting is changed, sign out of Azure DevOps, and then from a fresh browser session, sign back in to the organization `dev.azure.com/{organizationName}` or `organizationName.visualstudio.com` with your GitHub credentials. You're now recognized as a GitHub user and the GitHub invitation experience is available to you.

![Invite GitHub users policy](../../_shared/_img/invite-github-users-policy.png)

### Q: I signed in with my GitHub credentials, but why can't I invite GitHub users?

A: Only organization or project administrators can invite new users to join the organization. You might not have the permission required to add new users. Work with your administrator to get you the right permissions or ask your administrator to add the user for you.

## Related articles

* [Sign up, sign in to Azure DevOps](../../user-guide/sign-up-invite-teammates.md)
* [Add organization users to Azure DevOps](../accounts/add-organization-users.md)
