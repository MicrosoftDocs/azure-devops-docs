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
ms.date: 06/05/2025
monikerRange: 'azure-devops'
---

# Disable your organization's Request Access policy

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article explains how to disable the 'Request Access' policy in Azure DevOps to prevent users from requesting access to your organization or projects. When this policy is enabled, users can request access, and administrators receive email notifications for review and approval. Disabling the policy stops these requests and notifications, helping you control access more tightly.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.|
|**Access levels**| At least **Basic** access.|

## Disable Request Access policy

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot shows Choose the gear icon and Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Policies**, find the 'Request Access' policy, and switch it to **Off**.
   
   ![Screenshot shows Disable the Request Access policy in Organization settings.](media/request-access-policy-settings.png)

4. Provide the URL to your internal process for gaining access.

   ![Screenshot shows prompt for entering the URL to your organization's internal process for gaining access.](media/disable-request-access-provide-url.png)

**Result:**

When users try to access a project without the required permissions, the error message always includes the **request access URL**. This link is shown on the error page to maintain confidentiality, regardless of whether the project exists.

## Related articles

- [Assign access levels by group membership](assign-access-levels-by-group-membership.md)
- [Manage Conditional Access](change-application-access-policies.md)
- [Change application access policies](change-application-access-policies.md)
