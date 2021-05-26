---
title: Disable Request Access policy
titleSuffix: Azure DevOps Services
ms.custom: 
description: Learn how to stop your users from requesting access to your organization or project within your organization by disabling the Request Access policy.
ms.technology: devops-accounts
ms.assetid: 
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 02/21/2020
monikerRange: 'azure-devops'
---

# Disable your organization's Request Access policy

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

Stop your users from requesting access to your organization or project within your organization, by disabling the Request Access policy.

When this policy is on, users can request access to a resource. A request results in an email notification to the administrators asking for review and access, as needed. 

## Prerequisites

To change a policy, you need at least Basic access and organization Owner or Project Collection Administrator permissions.
[How do I find the organization Owner?](../security/lookup-organization-owner-admin.md)

## Disable Request Access policy

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Policies tab, find the Request Access policy and move the toggle to *off*.

   ![Disable the Request Access policy in Organization settings](media/request-access-policy-settings.png)

4. Provide the URL to your internal process for gaining access. Users see this URL in the error report when they try to access the organization or a project within the organization that they don't have access to.

   ![Enter the URL to your organization's internal process for gaining access.](media/disable-request-access-provide-url.png)

## Related articles

- [Need help?](faq-configure-customize-organization.yml#get-support)
- [Assign access levels by group membership](assign-access-levels-by-group-membership.md)
- [Manage Conditional Access](change-application-access-policies.md)
- [Change application access policies](change-application-access-policies.md).
