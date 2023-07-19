---
author: gloridelmorales
ms.author: glmorale
ms.date: 7/11/2023
ms.topic: include
---
### Removing "Edit policies" permission to branch creator

Previously, when you created a new branch, you we're granted permission to edit policies on that branch. With this update, we are changing the default behavior to not grant this permission even if the "Permission management" setting is switched on for the repository.

> [!div class="mx-imgBorder"]
> ![Permission management image.](../../media/224-repos-01.png "image showing permission management toggle is off for a repo")

You will need the "Edit policies" permission granted explicitly (either manually or through REST API) by security permission inheritance or through a group membership.