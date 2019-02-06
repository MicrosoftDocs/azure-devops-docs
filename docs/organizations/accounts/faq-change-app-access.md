---
title: Troubleshoot changing application access policies for organizations
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn the answers to frequently asked questions (FAQs), like what apps integrate with Azure DevOps and how personal access tokens differ from alternate authentication credentials.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 25b0a617-6d77-44d7-80a5-bf38a541817e
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
monikerRange: 'azure-devops'
---

# Troubleshoot changing app access policies for your organization

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

<a name="Oauth"></a>

#### Q: How do personal access tokens differ from alternate authentication credentials?

A:  Personal access tokens are a more convenient and secure replacement for alternate authentication credentials. You can limit a token's use to a specific lifetime, to an organization, and to [scopes](../../integrate/index.md) of activities that the token authorizes. Learn more about [personal access tokens](use-personal-access-tokens-to-authenticate.md).

#### Q: If I deny access to one authentication method in one organization, does that affect all the organizations that I own?

A:  No, you can still use that method in all the other organizations that you own. [Personal access tokens](use-personal-access-tokens-to-authenticate.md) apply to specific organizations or to all organizations, based on your selection when you created the token.

#### Q:  If I deny access to an authentication method, then allow access again, will the apps that need access continue to work?

A:  Yes, those apps continue to work.

#### Q:  What apps integrate with Azure DevOps?

A:  Find the [apps that integrate with Azure DevOps](https://marketplace.visualstudio.com/azuredevops).

<a name="find-owner"></a>

[!INCLUDE [find-organization-owner](../../_shared/qa-find-organization-owner.md)]

[!INCLUDE [why-no-owned-organizations](../../_shared/qa-why-no-owned-organizations.md)]

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../../_shared/qa-get-vsts-support.md)]
