---
author: gloridelmorales
ms.author: glmorale
ms.date: 8/11/2025
ms.topic: include
---

### Improved screen reader support for pull request experience

We improved support for screen readers in the pull request experience.
The new option in built-in code editor will let you enable announcements for line changes and comments.

To enable the new option, from the pull request page click on the **File** tab. 

> [!div class="mx-imgBorder"]
> [![Image to show file tab.](../../media/260-repos-01.png "Image to show file tab.")](../../media/260-repos-01.png#lightbox) 

Then, click on the **Editor preferences** button.

> [!div class="mx-imgBorder"]
> [![Image to Editor preferences button.](../../media/260-repos-02.png "Image to Editor preferences button.")](../../media/260-repos-02.png#lightbox)

On the popup menu, select the **Enable announcements for line changes and comments to enhance screen reader accessibility** option and **Save**.

> [!div class="mx-imgBorder"]
> [![Image to Editor preferences.](../../media/260-repos-03.png "Image to Editor preferences.")](../../media/260-repos-03.png#lightbox)

### Azure DevOps remote index support in VSCode

Azure DevOps now supports remote indexes for IDE workspaces that are linked to Azure DevOps repos. This enables #codebase to search for relevant snippets almost instantly without any initialization. This even works for larger repos with tens of thousands of indexable files. Support for remote workspaces has released starting with the July updates to Visual Studio  and VS Code. For more info please see the [VS Code Release Notes](https://code.visualstudio.com/updates/v1_103#_azure-devops-repos-remote-index-support). 

Remote indexes are used automatically when working in a workspace that is linked to Azure DevOps through git. Make sure you are also logged into Visual Studio or VS Code  with the Microsoft account you use to access the Azure DevOps repo.