---
title: Disable Request Access policy
titleSuffix: Azure DevOps Services
ms.custom: 
description: Learn how to stop your users from requesting access to your organization or project within your organization by disabling the Request Access policy.
ms.subservice: azure-devops-organizations
ms.assetid: 
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 10/23/2024
monikerRange: 'azure-devops'
---

# Disable your organization's Request Access policy

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

To prevent users from requesting access to your organization or projects, you can disable the 'Request Access' policy. When enabled, this policy allows users to request access, triggering email notifications to administrators for review and approval. Disabling the policy stops these requests and notifications.

## Prerequisites

- [!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]
- **Access levels:** Have at least Basic access.

## Disable Request Access policy

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot shows Choose the gear icon and Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Policies**, locate the *Request Access policy* and toggle it to *off*.

   ![Screenshot shows Disable the Request Access policy in Organization settings.](media/request-access-policy-settings.png)

4. Provide the URL to your internal process for gaining access. Users see this URL in the error report when they try to access the organization or a project within the organization that they don't have permission to access.

   ![Screenshot shows prompt for entering the URL to your organization's internal process for gaining access.](media/disable-request-access-provide-url.png)

**Results:**

- **Users already part of the organization:** If they lack permission to access a specific project, they get a 404 error. To maintain confidentiality, the 404 error doesn’t reveal whether the project exists and so doesn't provide a link to request access.
- **Users not part of the organization:** If they attempt to access a resource, they get a 401 error, which includes a link to the configured custom URL for requesting access.

## Related articles

- [Assign access levels by group membership](assign-access-levels-by-group-membership.md)
- [Manage Conditional Access](change-application-access-policies.md)
- [Change application access policies](change-application-access-policies.md)
