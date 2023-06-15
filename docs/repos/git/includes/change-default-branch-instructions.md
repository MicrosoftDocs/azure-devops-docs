---
ms.topic: include
---

You can use a branch other than `main` for new changes or change your main line of development in your repo. To change the default branch name for new repositories, see [All repositories settings and policies](../repository-settings.md#all-repositories-settings-and-policies).

To change your repo's default branch for merging new pull requests, you need at least two branches. If there's only one branch, it's already the default. You must create a second branch to change the default.

>[!NOTE]
>Changing the default branch requires you to have **Edit policies** permission. For more information, see [Set Git repository permissions](../set-git-repository-permissions.md).

::: moniker range=">= azure-devops-2020"

1. Under your [project repo](../../../project/navigation/go-to-project-repo.md), select **Branches**.

1. On the **Branches** page, select **More options** next to the new default branch you want, and choose **Set as default branch**.

   ![Screenshot that shows Set default branch.](/azure/devops/repos/git/media/pull-requests/set-default-branch-in-product.png)

1. After you set the new default branch, you can delete the previous default if you want.

::: moniker-end

::: moniker range="azure-devops-2019"

1. Select the settings button in your project bottom-left corner to open the project administration page.

   ![Open the administrative area of the web portal for your project](/azure/devops/repos/git/media/pull-requests/gear-icon-settings-2019.png)

1. Select **Repositories**.

1. Select your Git repository. Your branches are displayed under your repo.

1. Select the **...** next to the branch you want to set as default, then select **Set as default branch**.

   ![Set a default branch for a Git repo](/azure/devops/repos/git/media/pull-requests/set-default-branch-2019.png)

1. Once you've set the new default branch, you may delete the previous one if you want.

::: moniker-end

::: moniker range="tfs-2018"

1. Select the settings button in your project to open the project administration page.

   ![Open the administrative area of the web portal for your project](/azure/devops/repos/git/media/pull-requests/gear_icon_settings.png)

1. Select **Version Control**.

1. Select your Git repository. Your branches are displayed under your repo.

1. Select the **...** next to the branch you want to set as default, then select **Set as default branch**.

   ![Set a default branch for a Git repo](/azure/devops/repos/git/media/pull-requests/set_default_branch.png)

1. Once you've set the new default branch, you may delete the previous one if you want.

::: moniker-end
