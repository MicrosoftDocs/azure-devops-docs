---
author: gloridelmorales
ms.author: glmorale
ms.date: 6/6/2023
ms.topic: include
---

### Markdown support for comments (private preview)

We are delighted to announce the long-awaited private preview of the new Markdown editor for the work item discussion. This exciting feature empowers you to utilize the Markdown syntax and editor for all future comments. The Markdown editor aligns with the same experience you encounter in other parts of the product, such as Pull Requests.

You have the option to keep your existing work item comments as they are or convert them individually to Markdown. Our migration process makes a best effort to convert the HTML to Markdown, and in the majority of cases, it works as expected. However, it’s important to note that the conversion may not always achieve 100% accuracy for large, complex comments that contain custom styles.

> [!div class="mx-imgBorder"]
> ![Gif to demo markdown support for comments.](../../media/222-boards-01.gif "gif to demo markdown support for comments")

If you are interested in enrolling in the private preview, please send us an email with your organization name (https://dev.azure.com/{organization}).

This was prioritized based on [this Developer Community suggestion ticket](https://developercommunity.visualstudio.com/t/add-markdown-support-in-discussions/365826).

> [!Important]
> This feature is only available in the [**New Boards Hubs**](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-202-update#new-boards-hubs-now-available-in-public-preview). Meaning, if you create a comment in New Boards Hub, and then a user opens that work item in Old Boards Hub, the comment will contain the markdown syntax. If you are going to enroll in this preview, it is highly recommended that all users in your organization turn on the New Boards Hub.