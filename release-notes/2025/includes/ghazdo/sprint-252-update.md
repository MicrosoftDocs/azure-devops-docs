---
author: ckanyika
ms.author: ckanyika
ms.date: 2/24/2025
ms.topic: include
---

### One click enablement for dependency scanning now available 

From your repository settings, you can now enable the Advanced Security dependency scanning task without needing to edit your pipeline definition. 

By opting in to "Scan default branch for vulnerable dependencies," the dependency task will automatically run in any pipeline targeting your default branch or pull requests targeting your default branch if the task is not already present in your pipeline. If the task is already present in your pipeline, the task will not run again.

> [!div class="mx-imgBorder"]
> [![Screenshot of security overview.](../../media/252-ghazdo-01.png "Screenshot of repository settings")](../../media/252-ghazdo-01.png#lightbox)

### Deleted branches removed from Advanced Security branch picker

Within GitHub Advanced Security, the repository-level branch picker showed all branches for your repository once they had any security alerts discovered on those branches, even if the branch was later deleted. 

Now, any branches that are deleted will be appropriately removed from the Advanced Security branch picker and any associated alerts will no longer be retrievable. 



