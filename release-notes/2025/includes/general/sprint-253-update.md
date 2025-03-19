---
author: ckanyika
ms.author: ckanyika
ms.service: azure-devops
ms.date: 3/19/2025
ms.topic: include
---

### Deprecation of Languages statistics tags from the Project Summary page

In the coming weeks, we'll be deprecating the Languages statistics tags from the Project Summary page. Removing these tags will help optimize performance, resulting in faster load times and a more responsive interface.

The update will occur automatically, with no action required on your part. 

> [!div class="mx-imgBorder"]
> [![Screenshot of tags being removed.](../../media/253-general-01.png "Screenshot of tags being removed")](../../media/253-general-01.png#lightbox)

### Overlapping secrets for Azure DevOps OAuth

We're excited to introduce the new overlapping secrets feature in Azure DevOps OAuth, designed to enhance security, and streamline secret rotations. This feature lets you add a new secret to your OAuth client while the previous one remains active, ensuring continuous operation of your applications. You can manage these secrets programmatically via API or through the Visual Studio App page UI. 

As part of ongoing security improvements, Azure DevOps OAuth is scheduled for deprecation in 2026. We encourage you to migrate to [Microsoft Entra ID OAuth](/azure/devops/integrate/get-started/authentication/entra-oauth?view=azure-devops&preserve-view=true) for improved security features and longer-term investment. In the interim, we recommend regularly rotating your secrets using our new overlapping secrets feature.

