---
title: Removal of TFVC in new projects
author: vijayma
ms.author: vijayma
ms.date: 6/4/24
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Removal of TFVC in new projects
hide_comments: true 
---

# Removal of TFVC in new projects

Over the past several years, we added no new features to Team Foundation Version Control (TFVC). Git is the preferred version control system in Azure Repos. Furthermore, all the improvements we made in the past few years in terms of security, performance, and accessibility were only made to Git repositories. We have seen a continuous decline in the usage of TFVC over these years. A few customers still use TFVC, and we do not plan to remove this feature set for those customers. However, we gradually plan to phase out TFVC in all new projects and organizations, or in projects that do not have any current usage of TFVC.

As a step in that direction, we will introduce a setting to "Disable creation of TFVC repositories." It only changes the creation of new TFVC repositories; there is no impact on existing ones. The setting is available at organization and project levels, organization setting has a priority over project level. By default, the toggle will be enabled. This means that you cannot create TFVC repositories anymore in these new projects. But, if you have a strong reason to do so, you can have your administrator disable the toggle. In the future, we will not allow you to disable the toggle.