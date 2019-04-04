---
title: Create a project
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Create a project where developers and teams can plan, track progress, and collaborate on building software solutions.
ms.assetid: 21F3C364-34F4-41B0-9EFC-6D4A141D81E0
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 03/26/2019
monikerRange: '>= tfs-2013'
---

# Create a project in Azure DevOps and TFS

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Create a project to establish a repository for source code, where a group of developers and teams can plan, track progress, and collaborate on building software solutions. Each project you create provides boundaries to isolate data from other projects and must be managed and structured to support your business needs. To learn more about projects and when or when not to create one, see [About projects and scaling your organization](about-projects.md).

> [!NOTE]
> This article is about creating a project in Azure DevOps or a Team Foundation Server. If instead you want to create Azure DevOps Projects, see [Azure DevOps Projects](/azure/devops-project/).

<!---Projects differ from [software application projects or solutions](https://msdn.microsoft.com/library/zfzh36t7.aspx). -->  

If you have a project already, and want to start coding an application project, then see one of the following topics:  [Set up Git on your dev machine](../../repos/git/gitquickstart.md) or [Develop your app in Team Foundation version control](../../repos/git/gitquickstart.md).

::: moniker range=">= tfs-2013 <= tfs-2018"
> [!NOTE]
> If you don't want to manage an on-premises server, you can
[sign up for Azure DevOps Services and create a project](../accounts/create-organization.md).
::: moniker-end

::: moniker range=">= tfs-2015"

## Create a project from the web portal

::: moniker-end

::: moniker range=">= azure-devops-2019"

To create a project, you must first have [created an organization in Azure DevOps](../../user-guide/sign-up-invite-teammates.md).

> [!IMPORTANT]  
> To create a Public project, or to make a private project public, see [Create a public project](../public/create-public-project.md) or [Change the project visibility, public or private](../public/make-project-public.md). Additional policy settings must be enabled to work with public projects.

::: moniker-end

::: moniker range="tfs-2018"
> [!IMPORTANT]  
> When you create a project from the web portal, several process template files are ignored. Specifically, the files that would create a Report Manager site aren't supported. If you want SQL Server Reporting Services  to be to be available, then create your project from Visual Studio or Team Explorer. For details, see [Process template and plug-in files, Client support for project creation](../../reference/process-templates/overview-process-template-files.md#client-support).  
::: moniker-end

::: moniker range="tfs-2017"
> [!IMPORTANT]  
> When you create a project from the web portal, several process template files are ignored. Specifically, the files that would create a Report Manager site and a SharePoint project portal aren't supported.
>
> If you want these features to be to be available on your on-premises TFS, then create your project from Visual Studio or Team Explorer. For details, see [Process template and plug-in files, Client support for project creation](../../reference/process-templates/overview-process-template-files.md#client-support).  
::: moniker-end

::: moniker range=">= tfs-2017"

If you're not a member of the Project Collection Administrators Group, [get added as one](../security/set-project-collection-level-permissions.md). To create projects you must have the **Create new projects** permission set to **Allow**.

::: moniker-end

::: moniker range=">= azure-devops-2019"

1. Choose the ![](../../_img/icons/project-icon.png) Azure DevOps logo to open the **Projects** page, and then choose **Create Project**.

   > [!div class="mx-imgBorder"]  
   > ![Open Projects](_img/create-project/projects-hub-vert-create-project.png)  

2. Enter information into the form provided. Provide a name for your project, and choose the visibility, initial source control type, work item process. For details on public projects, see [Create a public project](../public/create-public-project.md). If the **Public** option is grayed out, you need to change the policy.

   > [!div class="mx-imgBorder"]  
   > ![Create new project form, latest vsts](_img/create-project/create-new-project-form-new-nav.png)  

   See [choosing the right version control for your project](../../repos/tfvc/comparison-git-tfvc.md) and [choose a process](../../boards/work-items/guidance/choose-process.md) for guidance.  

3. When your project has been created, the welcome page appears.

   > [!div class="mx-imgBorder"]  
   > ![Project creation confirmation dialog, new nav](_img/create-project/project-creation-complete-new-nav.png)

   Select one of the following tasks to get started:
   - **Invite** to begin [adding others to your project](../security/add-users-team-project.md). Note, you can only invite users who have already been [added to your organization](../accounts/add-team-members.md).
   - **Boards** to begin [adding work items](../../boards/work-items/view-add-work-items.md).
   - **Repos** to open [Repos>Files](../../repos/git/clone.md) page where you can clone or import a repository, or initialize a README file for your project summary page.
   - **Pipelines** to start [defining a pipeline](../../pipelines/index.md).
   - **Test Plans** to start [defining test plans and test suites](../../test/create-a-test-plan.md).
   - [Manage your services](../settings/set-services.md) to disable the visibility of one or more services.

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

1. Choose the ![](../../_img/icons/project-icon.png) Azure DevOps logo to open the **Projects** page, and then choose **New Project**.

   > [!div class="mx-imgBorder"]  
   > ![Choose new project, horizontal navigation](_img/create-project/projects-hub-horz-new-project.png)  

2. Fill out the form provided. Provide a name for your new project, and choose the visibility, initial source control type, work item process. For details on public projects, see [Create a public project](../public/create-public-project.md). If the **Public** option is grayed out, you need to change the policy.

   > [!div class="mx-imgBorder"]  
   > ![Create new project form](_img/create-project/create-project-form-prev-nav.png)  

    See [choosing the right version control for your project](../../repos/tfvc/comparison-git-tfvc.md) and [choose a process](../../boards/work-items/guidance/choose-process.md) for guidance.  

3. Upon successful completion, the project summary displays. To learn more, see [Share your project vision](project-vision-status.md).

::: moniker-end

::: moniker range="tfs-2018"

> [!NOTE]
> TFS 2018 and later versions no longer support native integration with SharePoint products. If you're planning to upgrade to TFS 2018, read [About SharePoint integration](/../../report/sharepoint-dashboards/about-sharepoint-integration.md) to learn about the options available to you.

1. Choose the ![](../../_img/icons/project-icon.png) Azure DevOps logo to open the **Projects** page, and then choose **New Project**.

   > [!div class="mx-imgBorder"]  
   > ![Choose new project, horizontal navigation](_img/create-project/projects-hub-horz-new-project.png)  

2. Fill out the form provided. Provide a name for your new project, select its initial source control type, select a process, and choose with whom to share the project.

    See [choosing the right version control for your project](../../repos/tfvc/comparison-git-tfvc.md) and [choose a process](../../boards/work-items/guidance/choose-process.md) for guidance.  

   > [!div class="mx-imgBorder"]  
   > ![Create new project form, tfs](_img/create-project/clickcreatetfs.png)

::: moniker-end

::: moniker range="tfs-2015"

If you're using TFS 2015.2 or later version, then you can create a project from the web as well. It's important to note that for projects created from the web, Reporting and SharePoint integration steps are skipped when creating the project. You can still set up [Reporting](../../report/admin/add-reports-to-a-team-project.md) and [SharePoint](/azure/devops/server/admin/add-sharepoint-to-tfs) manually after project creation.

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

1. If you have TFS 2017.1 or a later version, choose the ![gear icon](../../_img/icons/gear-icon.png) to open the **Projects** page, and then choose **New Project**.

  > [!div class="mx-imgBorder"]  
  > ![Choose new project, horizontal navigation](_img/create-project/projects-hub-horz-new-project.png)  

   >Otherwise, for TFS 2015.2 or TFS 2017, open the administration overview page by choosing the ![Settings Icon (TFS Web Portal)](_img/rename-project/gearicon.png) gear icon at the top of the page and choose **Server settings**. Then choose **New project...**.

   > [!div class="mx-imgBorder"]  
   > ![New Project TFS 2017](_img/create-project/new-team-project-tfs-2017.png)

   Select the collection administration page for the collection you want to create the project in from the left pane, and choose **Create a new project...**.

2. Enter information into the form provided. Provide a name for your new project, select its initial source control type, select a process, and choose with whom to share the project.

    See [choosing the right version control for your project](../../repos/tfvc/comparison-git-tfvc.md) and [choose a process](../../boards/work-items/guidance/choose-process.md) for guidance.  

    > [!div class="mx-imgBorder"]  
    > ![Create new project form, tfs](_img/create-project/clickcreatetfs.png)

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
Creating a project from the web portal isn't supported for TFS 2015 and earlier versions. Use [Team Explorer to create a project](#te).  
::: moniker-end

---

<a id="te"> </a>

::: moniker range=">= tfs-2013 <= tfs-2018"

## Create a project in Team Explorer

You can create a project from Team Explorer after you have connected to an on-premises server.
::: moniker-end

::: moniker range="tfs-2018"  

> [!NOTE]
> For TFS 2018 and later versions, users are redirected to the web. They no longer are able to create a project from Visual Studio.
>
> TFS 2018 and later versions no longer support native integration with SharePoint products. If you're planning to upgrade to TFS 2018, read [About SharePoint integration](../../report/sharepoint-dashboards/about-sharepoint-integration.md) to learn about the options available to you.

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

1. If you're not a member of the Project Collection Administrators Group, [get added as one](../../organizations/security/set-project-collection-level-permissions.md). To create projects you must have the **Create new projects** permission set to **Allow**.

2. Ask your TFS administrator about the following resources and get additional permissions as needed:

    - Which project collection should you connect to when you create your project? If you installed TFS using the Basic Server Configuration Wizard, you have only one project collection named **DefaultCollection**. Unless you are supporting hundreds of projects, you should create all your projects within a single project collection. If you need to create additional collections, see [Manage project collections](/azure/devops/server/admin/manage-team-project-collections).

    - Has SQL Server Analysis Services and SQL Server Reporting Services been configured for the deployment? If so, ask your administrator to [add you as a member of the Team Foundation Content Managers group](../../report/admin/grant-permissions-to-reports.md) on the server that hosts SQL Server Reporting Services. Without these permissions, you are unable to create a project.

    - Has a SharePoint Web application been configured for your deployment? If you want to configure a SharePoint portal when you create your project, ask the SharePoint administrator to give you Full Control permissions on the server that hosts SharePoint Products. Otherwise, you can skip this step and configure a portal at a later time.

3. Open the same version of Visual Studio as the version of TFS that you're connecting to. If you don't see the Team Explorer pane, open **View\>Team Explorer** from the menu.

    As needed, [Download and install Visual Studio Community](https://visualstudio.microsoft.com/products/visual-studio-community-vs.aspx) to get a free copy of the latest version.

4. Connect to the server and project collection where you want to create your project.

    ![ALM\_CTP\_Connect](_img/IC827208.png)

    You can access Team Explorer for free by installing [Visual Studio Community](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs) or any other Visual Studio version.

    You must connect from a client that is at the same version level as TFS. That is, you must connect to TFS 2015 from a version of Visual Studio 2015.

    ![ALM\_EXL\_Connect](_img/IC680074.png)

    >**Tip:**  If you are running Team Explorer from a server that hosts SharePoint Products and SQL Server Reporting Services, you might need to run Visual Studio as an administrator.

5. If it's your first time connecting to TFS, you need to add TFS to the list of recognized servers.

    ![ALM\_EXL\_AddServer](_img/IC658167.png)

6. Open the New Project Wizard.

    ![New link on Connect page (Team Explorer)](_img/IC779380.png)

7. Name the project. Don't specify more than 64 characters.

    ![ALM\_CTP\_NameProject](_img/IC671598.png)

8. Choose a process template. For a comparison of the default process templates, see [Choose a process](../../boards/work-items/guidance/choose-process.md).

    ![ALM\_CTP\_SelectTemplate](_img/IC795955.png)

9. Choose your version control, either Git distributed repositories or TFVC, one centralized repository.

    ![ALM\_CTP\_SelectSource](_img/IC671600.png)

    Not sure which system to use? Learn more about 
    [Git](../../repos/git/overview.md) or [TFVC](../../repos/tfvc/overview.md).

    After you've created your project, you can [add repositories](#add-a-repository).

10. Unless your project collection is configured to support a SharePoint project portal, you're done.

    ![ALM\_CTP\_Finish](_img/IC795956.png)

    If the Next button is active, you can configure your project portal.

    If the wizard encounters a problem, you receive an error message and a link to the project creation log. Review the [log file](faq-create-project.md#log-file) for specific errors and exceptions.

11. When you're finished, you can see your project in Team Explorer. You can also choose the **Web Access** link to connect to your project from the web portal.

	<tbody valign="top">
	</tbody>
	
	<table>
	<tbody valign="top">
	<tr>
	<td>![Team Explorer Home page w/ TFVC as source control](_img/IC827209.png)</td>
	<td>![Team Explorer Home page with Git as source control](_img/IC827210.png)</td>
	</tr>
	</tbody>
	</table>

::: moniker-end

::: moniker range=">= tfs-2017"

## Create a project from the command line or scripts

You can create and retrieve projects and other objects from the command line or scripts using the CLI. Check out the [CLI documentation](/cli/azure/ext/azure-devops/?view=azure-cli-latest) to learn more.

::: moniker-end

::: moniker range="tfs-2017"
> [!NOTE]
> The CLI is supported for TFS 2017.2 and later versions.

::: moniker-end

::: moniker range=">= tfs-2015"

## Add a repository

From the admin context of the web portal, you can add additional repositories to a project, either Git (distributed) or TFVC (centralized). While you can create many Git repositories, you can only create a single TFVC repository for a project.  Additional steps to address permissions may be required. See [Use Git and TFVC repos in the same project](../../repos/git/team-projects.md).

::: moniker-end

::: moniker range=">= tfs-2017"

> [!div class="mx-imgBorder"]  
> ![Create new repository](_img/create-project/create-new-repository-2017.png)  

Name the repository and choose **Create**.

> [!div class="mx-imgBorder"]  
> ![Create new repository dialog ](_img/create-project/create-new-repository-dialog.png)  

::: moniker-end

::: moniker range="tfs-2015"
![Add repositories to an existing project](_img/create-team-project-add-repositories.png)

> [!NOTE]
> The ability to work from both Git and TFVC repositories from the same project is supported when you connect to TFS 2015.1 and later versions.

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Get started as an administrator](../../user-guide/project-admin-tutorial.md)

## Related articles

- [Use Git](../../repos/git/overview.md)
- [Develop your app in TFVC](../../repos/tfvc/index.md)
- [Additional project structure activities](about-projects.md#project-structure)
