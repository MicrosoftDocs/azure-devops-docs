---
title: Add privacy policy URL to comply with the GDPR
titleSuffix: Azure DevOps Services
description: Learn how to add your Organization's privacy policy URL for your public project, which describes how you handle internal and external guest data privacy.
ms.subservice: azure-devops-organizations
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 10/22/2024
monikerRange: 'azure-devops'
---

# Add a privacy policy URL for your organization

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

A privacy policy is legally required for all websites and apps that collect or use personal data from users. This article shows how to add your privacy policy URL to your organization in Azure DevOps for public projects. This URL links to your custom document that describes how you handle both internal and external guest data privacy. The custom privacy policy URL appears only in **Organization settings** on the **Overview** page in Azure DevOps. The Microsoft Privacy Statement continues to display throughout Azure DevOps, regardless of whether you add a privacy policy URL for your organization.

> [!NOTE]
> To view or delete personal data, see [Azure Data Subject Requests for the General Data Protection Regulation (GDPR)](/microsoft-365/compliance/gdpr-dsr-azure). For general information about GDPR, visit the [GDPR section of the Service Trust portal](https://servicetrust.microsoft.com/ViewPage/GDPRGetStarted).

## Prerequisites

[!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]

## Add your privacy policy URL in Azure DevOps

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.
  
   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. In the **Overview** tab, add your privacy policy URL.

   ![Screenshot showing where you can add your privacy policy URL in Organization settings](media/add-privacy-url/privacy-url-in-organization-settings.png)

4.  Select **Save**.

   A link to your organization's privacy document gets added. This link provides users with direct access to your custom privacy policy, detailing how you handle both internal and external guest data privacy. The link appears in the **Organization settings** on the **Overview** page, ensuring that users can easily find and review your privacy practices.

## Related articles
- [Data Protection Overview](../security/data-protection.md)
- [Azure DevOps data location](../security/data-location.md)
- [Developer Services privacy statement](https://privacy.microsoft.com/privacystatement)
- [Azure DevOps support](https://developercommunity.visualstudio.com/spaces/21/index.html)
- [Developer Services Agreement](../../user-guide/services.md)
