---
author: ckanyika
ms.author: ckanyika
ms.date: 6/13/2024
ms.topic: include
---

## New "Disable creation of TFVC repositories" setting

In recent years, no new features were added to Team Foundation Version Control (TFVC) because Git has become the preferred version control system in Azure Repos. All recent improvements in security, performance, and accessibility have been made exclusively to Git repositories, leading to a continuous decline in TFVC usage. While some  still rely on TFVC and we don't intend to remove this feature set, we plan to phase out TFVC gradually for new projects and organizations, as well as for projects that currently don't use TFVC.

As part of this transition, we're introducing a new setting to "Disable creation of TFVC repositories," which will only affect the creation of new TFVC repositories and won't impact existing ones.


> [!div class="mx-imgBorder"]
> ![Gif to demo Disable creation of TFVC repositories.](../../media/240-repos-01.gif "gif to Disable creation of TFVC repositories")