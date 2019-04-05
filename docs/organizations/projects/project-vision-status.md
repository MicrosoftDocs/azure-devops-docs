---
title: Share your project vision and view project activity in Azure DevOps
titleSuffix: Azure DevOps 
description: View or update your project home page to share project vision, objectives, and activity for Azure DevOps
ms.topic: quickstart
ms.technology: devops-collab
ms.prod: devops
ms.assetid: A9ED2BF5-BD0B-4114-A7BD-693C5D747E16
ms.manager: jillfra
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2015'
ms.date: 03/26/2019
---

# Share your project vision, view project activity

[!INCLUDE [temp](../../_shared/version-ts-tfs-2015-2016.md)]

::: moniker range=">= azure-devops-2019"
From the project summary page, share your project with your team, add project members, and check the latest project activity. Share your project and objective, and ways for team members to contribute to the project through a project README file or through a project wiki.  

If you want to use a project wiki, then you'll want to first [Create a Wiki for your project](../../project/wiki/wiki-create-repo.md). You can then [change the project summary page to point to the wiki](#change-repo).
::: moniker-end

::: moniker range="tfs-2015"
From the project home page, share your project with your team, add project members, and check the latest project activity. Share your project and objective, and ways for team members to contribute to the project through a project README file.
::: moniker-end

::: moniker range=">= azure-devops-2019"
> [!NOTE]
> The features and functions available from your project page depend on the source control, Git, or Team Foundation Version Control (TFVC) that you selected when you [created your team project](../../organizations/projects/create-project.md).  
::: moniker-end

## Prerequisites

- You must be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) or have your **Edit project-level information** permission set to **Allow** to do the following:
  - Edit information on the project page
  - Change the repository that you use to share your project mission
  - Manage project membership
- To edit a page, you must be a contributor to the repository or branch or have the **Contribute** permissions set to **Allow**.  
- To view the project page, you must be a valid member of the project. For more information, see [Permissions and groups, Valid user groups](../../organizations/security/about-permissions.md#validusers).

## Open Project summary

::: moniker range=">= azure-devops-2019"
From your web browser, choose **Overview>Summary**. If you don't have a  project yet, [create a project](../../organizations/projects/create-project.md).

If you haven't set up your project summary yet, you'll see this welcome page:

> [!div class="mx-imgBorder"]
> ![Open project summary, new nav](_img/share-project/welcome-page-new-nav.png)  

Select one of the following tasks to get started:

- **Invite** to begin [adding others to your project](../../organizations/security/add-users-team-project.md). Note, you can only invite users who have already been [added to your organization](../../organizations/accounts/add-team-members.md).
- **Boards** to begin [adding work items](../../boards/work-items/view-add-work-items.md).
- **Repos** to open [Repos>Files](../../repos/git/clone.md) page where you can clone or import a repository, or [initialize a README file](#initialize-a-readme-file-for-a-git-repo) for your project summary page.
- **Pipelines** to start [defining a pipeline](../../pipelines/index.md).
- **Test Plans** to start [defining test plans and test suites](../../test/create-a-test-plan.md).
- [Manage your services](../../organizations/settings/set-services.md) to disable the visibility of one or more services.

To support your project mission, choose a README file that you maintain in a project repository, or the [project Wiki](../../project/wiki/wiki-create-repo.md). To choose between a README file or a Wiki, see [Change the repository](#change-repo). To define a README file for your project, see [Initialize a README file for your Git repo](#initialize-git) or [Initialize a README file for your TFVC repo](#initialize-tfvc).
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018 || azure-devops"
From your web browser, open the team project drop down menu and select the home page. If you don't have a  project, [create a team project](../../organizations/projects/create-project.md).

![Open Project Summary ](_img/share-project/project-vision-status-project-home-page.png)

To define a README file for your project, see [Initialize a README file for your Git repo](#initialize-git) or  [Initialize a README file for your TFVC repo](#initialize-tfvc).

::: moniker-end

::: moniker range="tfs-2017"

> [!NOTE]
> The project page described in this section is available for TFS 2017.1 and later versions. It replaces the Welcome page used in TFS 2015 and TFS 2017.

::: moniker-end

<a id="initialize-git"> </a>

## Initialize a README file for a Git repo

You can share your project and objective, as well as ways for team members to contribute to the project through a project README file. For Git projects, the README.md file needs to be at the root of each repository in the default branch. For Git based projects the left pane supports navigation to other repositories. A separate Welcome page/README.md file can be created for each repository.  

::: moniker range=">= azure-devops-2019"

1. Open **Repos>Files**. This page guides you to get started quickly by adding code to your repository when you choose one of the options to clone, push, import, or initialize a repo.  

2. With the **Add a README** check box checked, choose **Initialize**.

   > [!div class="mx-imgBorder"]  
   > ![Initialize README file, new nav](_img/share-project/initialize-readme-new-nav.png)

   A default README file is added to the project repository, in this case, the **Fabrikam Test** repo.

3. Return to **Overview>Summary** and choose the README file for the project page. Choose the ![ ](../../_img/icons/edit.png) edit icon.

   > [!div class="mx-imgBorder"]  
   > ![Choose README file, new nav](_img/share-project/choose-readme-file-new-nav.png)  

4. Select the project repository where you initialized the README file.

   > [!div class="mx-imgBorder"]  
   > ![Choose Repository where the README file exists, new nav](_img/share-project/choose-readme-file-dialog-new-nav.png)  

5. To edit the README file, choose the README file link.

   > [!div class="mx-imgBorder"]  
   > ![Edit the README file, new nav](_img/share-project/edit-readme-file.png)  

   You're directed to the **Repos>Files** page for the README file. You can edit and modify the README Markdown file like you would any other file in a Git repository. You can use Markdown language to format the README file and add images. To learn more about adding a README file, see [Create a README for your repo](../../repos/git/create-a-readme.md) and [Markdown guidance](../../project/wiki/markdown-guidance.md).

::: moniker-end

::: moniker range="tfs-2018 || azure-devops"

1. Open the Project home page.

2. With the **Add a README** check box checked, choose **Initialize**.

   > [!div class="mx-imgBorder"]  
   > ![Initialize README file, new nav](_img/share-project/initialize-readme-prev-nav.png)

   A default README file is added to the project repository, in this case, the **Fabrikam Test** repo.

3. To edit the project README.md file, choose **Edit**.

   > [!div class="mx-imgBorder"]  
   > ![Git new project summary page](_img/share-project/git-start-page-readme.png)

   Use Markdown language to format the README file and add images. To learn more about adding a README file, see [Create a README for your repo](../../repos/git/create-a-readme.md) and [Markdown guidance](../../project/wiki/markdown-guidance.md).

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"  

1. You can start editing directly from the Welcome page.

   > [!div class="mx-imgBorder"]  
   > ![Project page, Edit Welcome Markdown page](_img/share-project/markdown-welcome-page-edit.png)  

   > [!NOTE]
   > If you set policies on the Git repository, changes to the welcome page must be done as a pull request.  

2. To add another page, enter a link to a new Markdown file that doesn't yet exist, for example:

   `[page-1](./page-1.md)`

3. After you save the file, select the link. Respond to the prompt to edit the file and commit it to your repository.  

::: moniker-end

<a id="initialize-tfvc"> </a>

## Initialize a README file for a TFVC repo

For projects that selected TFVC for version control, the README.md file needs to be at the root of your team project folder (i.e. $/TeamProject/README.md).

::: moniker range=">= azure-devops-2019"

1. Open **Repos>Files**.

2. Select **Add Project Description**.

   > [!div class="mx-imgBorder"]  
   > ![Welcome page, TFVC new project, create readme, new nav](_img/share-project/welcome-page-tfvc-new-nav.png)

3. Select the TFVC repository and choose **Save**. If no README file has been created yet in the repo, you'll see the following message.

   > [!div class="mx-imgBorder"]  
   > ![About this project dialog, new nav](_img/share-project/about-this-project-form.png)

4. To create a README file, choose **Repos>Files** and choose new file to add a file to the project repository.

5. Name the file as **README.md**.

   > [!div class="mx-imgBorder"]  
   > ![Add new file dialog, new nav](_img/share-project/create-readme-file-web-portal.png)

6. Add the contents of your README file in Markdown format, and then choose **Check in...**.  

   > [!div class="mx-imgBorder"]  
   > ![Enter README file contents, new nav](_img/share-project/tfvc-readme-file.png)

7. Select **Check in** to complete the check in process of the README file.  

   > [!div class="mx-imgBorder"]  
   > ![Check-in README file dialog, new nav](_img/share-project/tfvc-readme-checkin.png)

8. Select **Overview>Summary** to review your project summary page with the README file displayed.  

   > [!div class="mx-imgBorder"]  
   > ![About this project dialog, new nav](_img/share-project/tfvc-project-summary-with-readme.png)

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018 || azure-devops"

1. Open the Project home page.

2. Select **Create README**.  

   > [!div class="mx-imgBorder"]  
   > ![Welcome page, TFVC new project, create README](_img/share-project/welcome-page-tfvc-prev-nav.png)

   A default README file is added to the project repository, in this case, the **Fabrikam Fiber TFVC** repo.

3. You can immediately edit the README file. When you're done, select **Check in**.

   > [!div class="mx-imgBorder"]  
   > ![Edit page, new nav](_img/share-project/tfvc-checkin-page.png)  
Any additional Markdown files you have (ones with a *.md extension) in the root of the project folder also appear in the left pane for easy navigation between them so you can provide additional information.  

::: moniker-end

<a id="cross-project-activity">  </a>

## View project activity, add project members

In addition to sharing information, the project summary page pulls data from the applications to give visitors a bird's-eye view of your project activity.

::: moniker range=">= azure-devops-2019"
To add users to the project, choose the ![ ](_img/share-project/add-members-new-nav.png) **add** button. You can only add users to a project that you have already added to the organization. To learn more, see [Add users to a team project or team](../../organizations/security/add-users-team-project.md).

> [!div class="mx-imgBorder"]
> ![Project stats](_img/share-project/project-stats-new-nav.png)

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

To add users to the project, choose the **add** button. To learn more, see [Add users to a team project or team](../../organizations/security/add-users-team-project.md).

![Project Home Page, Activity](../../project/wiki/_img/project-home-page-activity.png)  

::: moniker-end

<a id="change-repo" />

## Change the repository

You can change the repository used to support your project vision, including pointing it to the home page of your [built-in Wiki](../../project/wiki/wiki-create-repo.md).

::: moniker range=">= azure-devops-2019"

1. Open **Overview > Summary** .

2. Choose the ![ ](../../_img/icons/edit.png) edit icon.

	> [!div class="mx-imgBorder"]  
	> ![Choose README file, new nav](_img/share-project/choose-readme-file-new-nav.png)  

   If you don't see the **Edit** icon, then you're not a member of the Project Administrators group. [Get added as an admin](../../organizations/security/set-project-collection-level-permissions.md) to proceed.

3. Select a different repository or choose the Wiki option.

   > [!div class="mx-imgBorder"]  
   > ![Choose Repository where the README file exists, new nav](_img/share-project/change-repo-new-nav.png)  

   > [!TIP]  
   > If you choose the Wiki option, only the Wiki home page displays. To access additional Wiki pages, you must navigate to the Wiki.

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018 || azure-devops"

1. From your project home page, choose **Change**.

   > [!div class="mx-imgBorder"]  
   > ![Project page, Change repo](_img/share-project/markdown-welcome-page-change-location.png)  

   If you don't see **Change** link, then you're not a member of the Project Administrators group. [Get added as an admin](../../organizations/security/set-project-collection-level-permissions.md) to proceed.

2. From the select file dialog, choose an existing repo from the drop-down menu, or choose the Wiki option, shown as follows.

   <img src="_img/share-project/select-file-to-display-dialog.png" alt="Web portal, Project page, Select file to display dialog" style="border: 1px solid #C3C3C3;" />

   > [!TIP]  
   > Only the Wiki home page displays. To access additional Wiki pages, you must navigate to the Wiki.

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Create a wiki for your team project](../../project/wiki/wiki-create-repo.md)

## Related articles  

- [Markdown guidance](../../project/wiki/markdown-guidance.md)
- [Work across projects](../../project/navigation/_img/projects-page/view-work-across-projects.png)]

<!---
### Git repository

<img src="_img/project-home-page-get-started-info.png" alt="Git new project" style="border: 1px solid #C3C3C3;" />
> [!div class="mx-imgBorder"]  
> ![Git new project summary page](_img/share-project/git-start-page-readme.png)

> [!div class="mx-imgBorder"]  
> ![Initialize README file, new nav](_img/share-project/initialize-readme-prev-nav.png)

Use this page to leverage all the built-in DevOps functionality of Azure DevOps and to perform the following activities.

> [!div class="mx-tdCol2BreakAll"]
> |Git repository   |TFVC repository   |  
> |-------------|----------|
> |- Clone your project to your client computer<br/>- Push an existing repository from the command line<br/>- Import a repository<br/>- Initialize a README or gitignore<br/>- Setup a build from an external repository<br/>- [Add team members](#cross-project-activity)<br/>- [View code, build, and work activity](#cross-project-activity) |- Setup a build<br/>- Add a README for your project<br/>- [Add team members](#cross-project-activity)<br/>- [View code, build, and work activity](#cross-project-activity) |

-->