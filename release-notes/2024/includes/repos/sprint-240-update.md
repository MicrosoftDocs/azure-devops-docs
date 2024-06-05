---
author: ckanyika
ms.author: ckanyika
ms.date: 6/11/2024
ms.topic: include
---

## New "Disable creation of TFVC repositories" setting

Over the past several years, we added no new features to Team Foundation Version Control (TFVC). Git is the preferred version control system in Azure Repos. Furthermore, all the improvements we made in the past few years in terms of security, performance, and accessibility were only made to Git repositories. We have seen a continuous decline in the usage of TFVC over these years. A few customers still use TFVC, and we do not plan to remove this feature set for those customers. However, we gradually plan to phase out TFVC in all new projects and organizations, or in projects that do not have any current usage of TFVC.

As a step in that direction, we are now introducing a setting to "Disable creation of TFVC repositories." It only changes the creation of new TFVC repositories; there is no impact on existing ones.

> [!div class="mx-imgBorder"]
> ![Gif to demo Disable creation of TFVC repositories.](../../media/240-repos-01.gif "gif to Disable creation of TFVC repositories")