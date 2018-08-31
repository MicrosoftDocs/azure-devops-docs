---
title: What happened to VSTS?
description: What happened to Visual Studio Team Services (VSTS)? Where did it go? What's Azure DevOps?
ms.prod: devops
ms.topic: article
ms.technology: devops-whitepapers
ms.manager: douge
ms.date: 09/05/2018
ms.author: douge
author: erickson-doug
monikerRange: '>= vsts'
---

# What happened to VSTS?

On September 5th, 2018, Microsoft changed Visual Studio Team Services (VSTS) to "Azure DevOps Services". The individual features of VSTS are now branded as separate Azure DevOps services, as follows:

| VSTS feature         | Azure DevOps service |
|----------------------|----------------------|
| Build & release      | Azure Pipelines      |
| Code                 | Azure Repos          |
| Work                 | Azure Boards         |
| Test                 | Azure Test Plans     |
| Packages (extension) | Azure Artifacts      |


Currently, you can acquire **Azure Pipelines** separately. In the future, you'll be able to acquire each service separately or all together as **Azure DevOps Services**. If you are already a VSTS subscriber, you have access to all of the services. 

> [!NOTE]   
> You can [disable select services from the user interface](../organizations/settings/set-services.md).

Follow the [Azure DevOps release notes](/vsts/release-notes/index) to get news on the latest updates!

## Do I have to use dev.azure.com now?

Although the service URLs for Azure DevOps are now `https://dev.azure.com/{your organization}/{your project}`, Microsoft will support servicing from the visualstudio.com domain (`https://{your organization}.visualstudio.com/{your project}`) for some time after **September 5, 2018**. You can continue to access your organization and projects through visualstudio.com until a to-be-determined date.

 We will post news about this transition on the [Microsoft DevOps blog](https://blogs.msdn.microsoft.com/devops/) and in the [Azure DevOps release notes](https://docs.microsoft.com/en-us/vsts/release-notes/index).

We will also update this page as status changes.

## I preferred the old user interface. How do I go back?

At this time, you can still use the previous user interface by choosing your profile icon and selecting **Preview features** from the drop-down menu.

> [!div class="mx-imgBorder"]  
> ![Open Preview Features](../project/navigation/_img/manage-features/choose-preview-features-vert.png)

Then, toggle the **New Navigation** option to **Off**.

> [!div class="mx-imgBorder"] 
> ![Turning off the new navigation UI](_img/turn-off-new-nav.png)

This will also change the service names to their old VSTS feature names, such as **Work** instead of **Boards**.

To revert to the Azure DevOps service-oriented UI, choose your profile icon, select **Preview features**, and re-enable **New Navigation**. 

## What about Team Foundation Server (TFS)?

As of 9/5/2018, [Team Foundation Server](/tfs/index) (TFS) is unchanged and fully-supported as our on-prem Agile workflow and DevOps product. The latest version is TFS 2018, and the latest servicing update is **Team Foundation Server 2018 Update 3**, which released on **August 28, 2018**.
