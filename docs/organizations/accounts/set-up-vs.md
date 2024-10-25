---
title: Set up Visual Studio with Azure DevOps Services
titleSuffix: Azure DevOps Services
description: Learn how to set up and connect Visual Studio via Azure DevOps Services.
ms.subservice: azure-devops-organizations
ms.assetid: abf70640-8fb2-4def-9237-21276a39b5ad
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 10/24/2024
monikerRange: 'azure-devops'
---

# Launch Visual Studio via Azure DevOps Services

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When you first open [Visual Studio 2022](https://visualstudio.microsoft.com/vs/), you can sign in and connect to [Azure DevOps Services](https://azure.microsoft.com/services/devops/).

If you're already signed in to Visual Studio 2019, see [connect to Azure DevOps Services](../../repos/git/gitquickstart.md).

Once connected, you can store and share code in free, unlimited, private, cloud-based Git repositories or Team Foundation Version Control (TFVC). Use Agile tools for DevOps, continuous integration, and continuous delivery to organize and manage your work, which helps your team build frequently, test early, and ship faster.

To set up Visual Studio without Azure DevOps Services, [get started with Visual Studio](https://visualstudio.microsoft.com/vs/getting-started/). To host your own server, [install and set up Azure DevOps Server](https://learn.microsoft.com/azure/devops/server/install/get-started).

You can also use Azure DevOps Services with any IDE or code editor, like the following examples:

* [Eclipse, Android Studio, or IntelliJ](/azure/devops/pipelines/ecosystems/java)
* Xcode (see [Git](../../repos/git/share-your-code-in-git-xcode.md) or [TFVC](../../repos/tfvc/share-your-code-in-tfvc-xcode.md))
* [Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol)

## Prerequisites

**Tools:** [Download and install Visual Studio](https://go.microsoft.com/fwlink/?LinkId=309297&clcid=0x409&slcid=0x409). If you have a Visual Studio subscription that includes the Visual Studio IDE, get the version that's available with your subscription.

## Set up Visual Studio 2022 for Azure DevOps Services

1. Start Visual Studio, and then sign in to create your profile. 

    This profile saves your settings and roams with you when you sign in to Visual Studio on any computer. [Why else should I sign in?](./faq-set-up-vs.yml) If you're a Visual Studio subscriber, use the sign in address for your subscription. 

    ![Screenshot shows Visual Studio sign in prompt.](media/set-up-vs/sign-in-visual-studio.png)

    [Can't sign in?](/azure/devops/organizations/accounts/faq-set-up-vs#t-i-assign-azure-devops-permissions-directly-to-an-azure-ad-group-)

2. Enter your credentials.

3. Add your Visual Studio profile details. You only need to do this action once. 

    ![Screenshot show Create your profile screen.](media/set-up-vs/profile-organization-details.png)

4. Name your organization and confirm its location. 

    ![Screenshot shows naming your organization and confirming its location.](media/set-up-vs/profile-organization-details2.png)

    [How can I create an organization later](faq-configure-customize-organization.yml#create-organization-faqs) or [change its location?](change-organization-location.md)

5. Create your first project to store your code, work items, backlog, builds, tests, and other assets. Name your project, select a process to organize your work, and choose a version control to manage your code.

    :::image type="content" source="media/set-up-vs/create-team-project-vs.png" alt-text="Screenshot shows creating new project.":::

    Not sure which to choose? Learn which [process](../../boards/work-items/guidance/choose-process.md) and version control, [Git](../../repos/git/index.yml) or [TFVC](../../repos/tfvc/index.yml), work best for you.

6. If you're a new Visual Studio user, you can change your settings anytime in Visual Studio options.

    :::image type="content" source="media/set-up-vs/hellonewprofile.png" alt-text="Screenshot shows option to change settings.":::

    These changes get saved with your profile and your settings roam with you wherever you sign in. 

7. To view your new organization, sign in to ```https://dev.azure.com/{Your_Organization}```.

## Next steps

> [!div class="nextstepaction"]
> [Add users to your organization](add-organization-users.md)

## Related articles

* [Add code to Git](../../repos/git/share-your-code-in-git-vs.md)
* [Add code to TFVC](../../repos/tfvc/share-your-code-in-tfvc-vs.md)
* [Create your backlog](../../boards/backlogs/create-your-backlog.md)
* [Manage your process](../../organizations/settings/work/manage-process.md)
* [Customize your process](../../organizations/settings/work/customize-process.md)
