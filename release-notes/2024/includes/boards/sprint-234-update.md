---
author: ckanyika
ms.author: ckanyika
ms.date: 2/6/2024
ms.topic: include
---

### Development and Deployment Controls

We now remove the Development and/or Deployment controls from the work item, depending on how your project is configured. For example, you might configure your project settings to turn off Repos and/or Pipelines.

> [!div class="mx-imgBorder"]
> ![Screenshots of DevOps services.](../../media/234-boards-01.png "Screenshots of DevOps services.")

When you go to the work item, the corresponding Development and Deployment controls will be hidden from the form.

> [!div class="mx-imgBorder"]
> ![Screenshots of related work.](../../media/234-boards-02.png "Screenshots of related work.")

Finally, if you decide to connect a GitHub repo to Azure Boards, the Development control for GitHub repos will be displayed.

> [!div class="mx-imgBorder"]
> ![Screenshots of development control .](../../media/234-boards-03.png "Screenshots of development control .")

### New Boards Hub Improvements

In the current release, we've introduced a range of enhancements to the New Boards Hub preview, focusing on accessibility and page reflow.

Here is an example of the page reflow changes that are adaptive up to 400% zoom.

> [!div class="mx-imgBorder"]
> ![Gif to demo new boards hub improvements.](../../media/234-boards-01.gif "gif to demo new boards hub improvements")

Furthermore, we've rolled out performance enhancements across the work item form, boards, and backlogs pages. With these changes, you can expect New Boards to match the performance standards set with Old Boards.

### Add link to GitHub commit or pull request (preview)

You have two options for associating your work item with a GitHub pull request or commit. You can use the AB# syntax from the pull request, or you can directly link it from the work item. Today, the process involves copying the URL of the GitHub pull request and pasting it when adding a link. This requires opening multiple windows and bouncing back and forth between GitHub and Azure DevOps.

In this sprint, we are happy to be introducing an enhanced experience by enabling search functionality when linking to a GitHub pull request or commit. Search and select the desired repository and drill down to find and link to the specific pull request or commit. No need for multiple window switches and copy/paste (although you still can).

> [!div class="mx-imgBorder"]
> ![Gif to demo add link.](../../media/234-boards-02.gif "gif to demo add link")

> [!NOTE] 
>This feature is only available in the New Boards Hub preview.

If you are interested in getting access to this feature, please send us an email directly along with your organization name (https://dev.azure.com/{organization name}).