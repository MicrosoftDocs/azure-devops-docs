---
title: Troubleshooting adding administrators to VSTS project collections and projects
description: Troubleshooting adding administrators to VSTS project collections and projects 
ms.assetid: 7ad07299-c9c5-4748-bf31-6518356ee0d0
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.manager: douge  
ms.author: chcomley
ms.date: 10/6/2017
---

# Troubleshooting adding administrators to VSTS project collections and projects

**VSTS**

#### Q: When do I need to add someone to the team project collection administrator role in TFS?

**A:** It varies. For most organizations that use TFS, project collection administrators manage the collections that members of the Team Foundation Administrators group create, but members of the **Project Collection Administrators** group do not create the collections themselves. Project collection administrators also perform many operations that are required to maintain the collection, such as creating team projects, adding users to groups, and modifying the settings for the collection.

#### Q: What are the optimal permissions needed to administer a team project collection across all its components and dependencies?

**A:** A team project collection administrator for TFS must be a member of the following groups or have the following permissions:

-   Team Foundation Server: **Project Collection Administrators** or the appropriate [collection-level permissions](../security/permissions.md#collection) set to **Allow**.

-   SharePoint Products: If the collection is configured with a site collection resource, **Site Collection Administrators**.

-   Reporting Services: If the collection is configured with reporting resources, **Team Foundation Content Manager**.

#### Q: I'm an admin, but I don't seem to have all the permissions I need to add a team project collection administrator. What might I need?

**A: These are the required permissions:**

-   In TFS, you must belong to the **Project Collection Administrators** group, or your **View Server-Level Information** and **Edit Server-Level Information** permissions must be set to **Allow**.

-   To add permissions for SharePoint Products, you must be a member of the **Site Collection Administrators** group or the **Farm Administrators** group for SharePoint Products.

-   To add permissions for Reporting Services, you must be a member of the **Content Managers** group or the **Team Foundation Content Managers** group for Reporting Services.

>**Important:**
>  To perform administrative tasks such as creating team project collections, your user account requires administrative permissions, and the service account that the Team Foundation Background Job Agent uses also must have certain permissions granted to it. For more information, see [Service accounts and dependencies in Team Foundation Server](../tfs-server/admin/service-accounts-dependencies-tfs.md) and [Team Foundation Background Job Agent](../tfs-server/architecture/background-job-agent.md).

#### Q: Where can I find information about each individual permission? 

**A:** You can find detailed information about individual permissions and their relationship to default security groups in the [Permission and groups reference](../security/permissions.md).

## Team project

0. From the team page, choose the ![Settings icon](_img/admin-gear-icon.png) to go to the team administration page.

0. Add the user to the **Project Administrators** group.

0. If you use SharePoint with TFS, go to the team project portal and choose **Share** to give the user **Full Control**.

    ![Choose the SharePoint group and add users](_img/add-administrator-tfs/invite-administrators.png)

