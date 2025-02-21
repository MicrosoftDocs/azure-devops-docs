---
author: ckanyika
ms.author: ckanyika
ms.date: 2/20/2025
ms.topic: include
---

### GitHub Integration: Build Links for YAML Pipelines

We're committed to achieving feature parity between YAML and Classic Pipelines. One key missing feature was the ability to provide an "Integrated in build" link when your repository is hosted in GitHub. With our latest release, we've addressed this gap by adding an option in YAML pipeline settings for you to check:

> [!div class="mx-imgBorder"]
> [![Screenshot of automatically link work items.](../../media/252-boards-01.png "Screenshot of automatically link work items")](../../media/252-boards-01.png#lightbox)

Once the build is complete, the corresponding link will automatically appear on the associated work items, improving the overall traceability story.

> [!div class="mx-imgBorder"]
> [![Screenshot of integrated in build.](../../media/252-boards-02.png "Screenshot of integrated in build")](../../media/252-boards-02.png#lightbox)

### GitHub Integration: Linking the Merge Commit

We now automatically link the merge commit to its corresponding work item when a pull request is completed.

### Increase limit of connected GitHub repositories

Over the past several months, we've enhanced both the user experience and scalability of connecting your GitHub repositories to an Azure DevOps project. In this sprint, we're raising the maximum limit from 500 to 1,000 repositories, giving you even greater capacity to manage your projects.

### Update on New Boards Hub rollout

By early March, New Boards Hub will become the default experience for all organizations using the Azure DevOps service. This means every user will have at least tried New Boards, and our telemetry shows that about 98% of users are continuing to stay with it. Since we aim to maintain a single version of the product, our next step is to disable the option to revert back to Old Boards. 

For some organizations, this change has already been implemented. For others, we plan to begin rolling it out in March and complete the process for all organizations by the end of May. As always, if you encounter any issues, [please report them via the Developer Community](https://developercommunity.visualstudio.com/AzureDevOps). 