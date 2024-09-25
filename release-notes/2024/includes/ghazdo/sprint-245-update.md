---
author: ckanyika
ms.author: ckanyika
ms.date: 9/4/2024
ms.topic: include
---

### Pull request branches appear in Advanced Security branch picker 

Pull request branches were previously hidden in the branch picker despite being able to scan on pull request branches. These results now show accordingly in the Advanced Security branch picker and are searchable. 

> [!div class="mx-imgBorder"]
> [![Screenshot of Pull request branches.](../../media/245-ghazdo-01.png "Screenshot of Pull request branches")](../../media/245-ghazdo-01.png#lightbox)


### Repository default branch changes now reflected in Advanced Security 

Previously, the Advanced Security repository tab did not automatically register changes to your default branch, resulting in needing to select your desired branch via the branch picker if your default branch changed. Now, the Advanced Security tab will recognize and, by default, load alerts for the newly designated default branch when you first visit the page. 

Security overview will now also respect default branch changes, although there is a longer delay in processing time before updated alert results appear after a default branch change.

### Pull request annotations feature in (preview)

As indicated in the Advanced Security roadmap item, [Pull-request annotations](/azure/devops/release-notes/roadmap/2024/ghazdo/pull-request-annotation), you will now receive in-line annotations on any pull requests that utilize a pipeline assigned to your build validation policy with dependency scanning and/or code scanning tasks included.

There is no opt-in needed aside from creating a build validation policy to be applied against select branches.

Clicking on `Show more details` in the annotation will bring you to the alert detail view for the alert in question. 

> [!div class="mx-imgBorder"]
> [![Screenshot of In-line annotations.](../../media/245-ghazdo-02.png "Screenshot of in-line annotations")](../../media/245-ghazdo-02.png#lightbox)