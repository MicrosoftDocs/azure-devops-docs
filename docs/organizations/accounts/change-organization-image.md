---
title: Change organization image
titleSuffix: Azure DevOps Services
description: Change your organization's profile icon image.
ms.subservice: azure-devops-organizations
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 10/22/2024
monikerRange: 'azure-devops'
---

# Change your organization image

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When you [create an organization](create-organization.md) in Azure DevOps, the system automatically generates a default profile image. You can replace the default image with one that better represents your organization.

> [!NOTE]
> The maximum image size allowed is 2560 x 1024 pixels. The image gets resized to 200 x 200 pixels for display.

## Prerequisites

[!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]

## Change your organization image

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings emphasized.":::

3. Select :::image type="icon" source="../../boards/backlogs/office/media/icons/edit.png" border="false"::: **Edit** on your organization's image.

   :::image type="content" source="media/change-organization-icon/change-organization-image.png" alt-text="Screenshot showing change organization image dialog.":::

4. Upload your image, and then select **Save**.

Your organization's image gets updated. This change is reflected across all areas of Azure DevOps where the organization image is displayed, including the organization settings, project dashboards, and user profiles.

## Related articles

- [Change your organization's owner](change-organization-ownership.md)
- [Change your organization's location](change-organization-location.md)
- [Change your organization's Microsoft Entra connection](change-azure-ad-connection.md)
- [Rename your organization](rename-organization.md)
