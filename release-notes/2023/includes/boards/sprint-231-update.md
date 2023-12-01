---
author: ckanyika
ms.author: ckanyika
ms.date: 12/5/2023
ms.topic: include
---

### Switch to Markdown or HTML on Comments

A few months ago, we [introduced a private preview](https://learn.microsoft.com/en-us/azure/devops/release-notes/2023/sprint-222-update#azure-boards-1) to enable Markdown for comments on work items, aiming to replace the existing HTML editor entirely. After receiving a lot of user feedback, particularly from non-engineering roles expressing a preference for the existing editor and reluctance to adopt Markdown, we have adjusted our approach. Users now have the flexibility to switch between the HTML and Markdown editor at the comment level.


> [!div class="mx-imgBorder"]
> ![Gif to demo switch between the HTML and markdown editor.](../../media/231-boards-01.gif "gif to demo work switch between the html and Markdown editor")

Here is what you should expect:

* The default editor is sticky from the last comment you created.
* You can convert existing HTML comments to Markdown.
* Once a Markdown comment is created or updated, it cannot be converted to HTML.

This update will be implemented across all pre-enrolled organizations and those with the New Boards Hub enabled by default. Additionally, we're extending the preview period for a few more weeks to gather additional feedback. If you are interested in enrolling in the private preview, feel free to reach out directly [via email](mailto:dahellem@microsoft.com), and kindly include your organization name (http://dev.azure.com/{organization}).

> [!TIP]
> Consider enrolling in the preview only if your organization is fully committed to utilizing the [New Boards Hub](https://learn.microsoft.com/en-us/azure/devops/release-notes/2022/sprint-202-update) for all users. The experience with Markdown comments in the Old Boards may not be optimal.
