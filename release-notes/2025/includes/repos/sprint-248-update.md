---
author: ckanyika
ms.author: ckanyika
ms.date: 1/14/2025
ms.topic: include
---

### Make cross-repo policies case-sensitive

While creating a new cross-repos policy with a branch pattern, the preview was incorrectly displaying the list of branch candidates for this new policy. Branch matching is case-sensitive but preview shows the candidates in case-insensitive manner. This caused a bad user experience and confusion for the end-user, leading them to think their branches were protected when, in fact, they were not. To maintain consistency between the policy preview and its application, we are introducing this feature.

Before fix:
> [!div class="mx-imgBorder"]
> [![Screenshot of before fix](../../media/248-repos-01.png "Screenshot of before fix")](../../media/248-repos-01.png#lightbox)



After:

> [!div class="mx-imgBorder"]
> [![Screenshot of after fix.](../../media/248-repos-02.png "Screenshot of after fix")](../../media/248-repos-02.png#lightbox)