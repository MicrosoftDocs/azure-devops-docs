---
title: Project summary page, view project activity
titleSuffix: Azure DevOps 
description: Learn how to view and update your project summary page to share project vision, objectives, and activity for Azure DevOps.
ms.topic: quickstart
ms.subservice: azure-devops-projects
ms.assetid: A9ED2BF5-BD0B-4114-A7BD-693C5D747E16
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 11/11/2024
---

# View and update project summary page

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Each project provides a summary or home page to share information and showcase the latest project activity. This page serves as a central hub for team members to stay informed and up-to-date on the project's progress. Use this page for the following tasks:

- Share important project updates and announcements
- Highlight recent activities and milestones
- Provide quick access to key project resources and documentation
- Facilitate team collaboration and communication

Use the project summary page to also perform more specific tasks:

:::row:::
   :::column span="1":::
      **Project Administrator tasks** 
   :::column-end:::
   :::column span="1":::
     **Project member tasks**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      - Add a short project description 
      - Choose a README file or wiki for project information
      - Invite people to contribute to your project 
      - Set project tags 
   :::column-end:::
   :::column span="1":::
     - View project information
     - View project activity
     - Favorite a project 
     - Email or initiate a chat with a team member
     - Initiate a search across your project 
     - View project information
     - Email or initiate a chat with a team member
     - View project activity  
   :::column-end:::
:::row-end:::

::: moniker range="azure-devops" 
> [!NOTE]   
> You can designate hosted projects as **Private** or **Public**. For public projects, anonymous users can view the project **Summary**, except for the **Members** section. Also the **Like** and **Favorite** icons aren't visible to anonymous users. For more information, see [What is a public project?](../projects/about-projects.md)
::: moniker-end

:::image type="content" source="media/summary/project-summary-page-intro.png" alt-text="Screenshot of summary page.":::

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**|Member of the [Project Administrators](../security/change-project-level-permissions.md) group or **Edit project-level information** permission set to **Allow** to do the following tasks:<br>- Edit information on the project page.<br>- Change the repository that you use to share project information.<br>- Manage project membership.<br>**Specific tasks:**<br>- To edit a project page: **Contributor** to the repository or branch or **Contribute** permissions set to **Allow**.<br>- To view the project summary: [Valid member of the project](../security/about-permissions.md#valid-user-groups).<br>- To add or edit project tags: Project-level **Manage properties** permission set to **Allow**. This permission controls the project properties REST API.|

> [!TIP]    
> If you don't have the necessary permissions to edit a page or use a feature, the corresponding icons and links aren't visible to you.

## Open project summary

From your web browser, select **Overview** > **Summary**. If you don't have a  project yet, [create a project](../../organizations/projects/create-project.md).

If your project summary isn't set up yet, a welcome page displays:

> [!div class="mx-imgBorder"]
> ![Screenshot shows project welcome page.](media/share-project/welcome-page-new-nav.png)  

Select one of the following tasks to get started:

- **Invite** to begin [adding others to your project](../../organizations/security/add-users-team-project.md). You can only invite users who are [added to your organization](../security/add-users-team-project.md#add-users-to-a-project).
- **Boards** to begin [adding work items](../../boards/work-items/view-add-work-items.md).
- **Repos** to open [Repos>Files](../../repos/git/clone.md) page where you can clone or import a repository, or [initialize a README file](#initialize-a-readme-file-for-a-git-repo) for your project summary page.
- **Pipelines** to start [defining a pipeline](../../pipelines/index.yml).
- **Test Plans** to start [defining test plans and test suites](../../test/create-a-test-plan.md).
- [Manage your services](../../organizations/settings/set-services.md) to disable the visibility of one or more services.

## Update the summary page

The summary page displays either the README file defined in a project repository or the home page of a project wiki. To use the project wiki home page, [create a wiki for your project](../../project/wiki/wiki-create-repo.md) and then you can change the project summary page to point to the wiki.

1. Edit the page:

	- If it's your first time editing the page, select **Add Project Description**.  
	:::image type="content" source="media/summary/add-project-description.png" alt-text="Screenshot of summary page, first time editing.":::

	- If it's not your first time editing the page, select the :::image type="icon" source="../../media/icons/edit.png" border="false"::: **Edit project information**. This icon is only visible to members with permissions to edit the project **Summary** page.
 
2. Provide a brief description of the project purpose in the **Description** box.  

	:::image type="content" source="media/summary/about-this-project-dialog.png" alt-text="About this project dialog.":::

3. (Optional) Add one or more **Tags** for your project. These tags are similar to [work item tags](../../boards/queries/add-tags-to-work-items.md). You can add several tags at a time by using the comma or semicolon delimiters. Tags must conform to the following rules:  
	- Tags must be 40 characters or less
	- Tags can't contain the forward slash (/) character or end with hyphen character (-)
	- No more than 15 tags can be added to a project  
	- Tags are case-insensitive and no duplicate tags or empty tags are allowed.

	> [!NOTE]   
	> The search and filter functions can't be used to search or filter on project tags. 

4. Choose whether to reference a **README** file or the project wiki home page for the rest of the Summary page contents.  

	> [!TIP] 
	> A default README is created within the repository added when you created your project. You can choose this README or create another repository and README file for this purpose. 

	If you choose a **Readme file**, select the repository for the README. A preview of the current text for the README file is shown. 

	:::image type="content" source="media/summary/select-readme-repository.png" alt-text="About this project dialog, choose, and select README repository.":::

	If you choose a **Wiki**, the Wiki home page is referenced and must be the first file within the Wiki TOC. You can't change that reference.  

5. To update the contents of the referenced README file or wiki, edit the corresponding file. For more information, see [Create a README for your repo](../../repos/git/create-a-readme.md) or [Add and edit wiki pages](../../project/wiki/add-edit-wiki.md). 
 
	Consider including the following types of information in your **Summary** page:
	- Ways in which users can contribute to your project 
	- Who to contact to elevate permissions or add extensions  
	- Roadmap information 
	- Links to instructions for setting up their development and test environments 
	- Links to instructions for collaborating on code, tracking work, building pipelines, deploying releases 
	- Links to templates to file a bug, issue, or request 
	- Links to distribution lists to email a question or post a question on Slack or Teams channel. 

## Invite contributors to your project 

Send an email to invite users to contribute to your project by choosing **Invite**. For more information, see [Add users or groups to a team or project, Invite users from the Summary page](../security/add-users-team-project.md#invite-users-from-the-summary-page).

:::image type="content" source="../security/media/add-users/summary-invite-users.png" alt-text="Screenshot of Summary page, Invite button.":::

::: moniker range="< azure-devops"
> [!NOTE]
> For Azure DevOps Server, all email actions require an [SMTP server to be configured](/azure/devops/server/admin/setup-customize-alerts).  
::: moniker-end

## View project activity  

From the **Project stats** or **Activity** section, you can view updates made to the project in the last 1, 7, or 30 days. Choose the view option as shown in the following image. 

:::image type="content" source="media/summary/project-stats.png" alt-text="Screenshot of Summary page, Stats section.":::

## Chat with a project member or send an email

From the **Members** section, you can see some of the members added to the project, and connect to them via email or chat with a member. 

:::image type="content" source="media/summary/project-members.png" alt-text="Screenshot of Summary page, Members section.":::

> [!NOTE]   
> 100+ indicates that 100 or more members are added to the project. 

To email or initiate a chat session, choose the team member shown and select your option. 

:::image type="content" source="media/summary/connect-with-team-member.png" alt-text="Screenshot of Summary page, Members section, options available to connect to a team member.":::

::: moniker range="< azure-devops"
> [!NOTE]
> For on-premises Azure DevOps, all email actions require an [SMTP server to be configured](/azure/devops/server/admin/setup-customize-alerts).  
::: moniker-end

## Search a project  

From the **Summary** page, you can initiate a search of your code, work items, and wiki. For more information, see [Get started with search](../../project/search/get-started-search.md).

:::image type="content" source="media/summary/project-search.png" alt-text="Screenshot of Summary page, search box.":::

## Initialize a README file for a Git repo

You can share your project and objective, and ways for team members to contribute to the project through a project README file. For Git projects, the README.md file needs to be at the root of each repository in the default branch. For Git based projects, the left pane supports navigation to other repositories. A separate Welcome page/README.md file can be created for each repository.

1. Open **Repos>Files**. This page guides you to get started quickly by adding code to your repository when you choose one of the options to clone, push, import, or initialize a repo.  

2. With the **Add a README** check box checked, choose **Initialize**.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Initialize README file, latest versions](media/share-project/initialize-readme-new-nav.png)

   A default README file is added to the project repository, in this case, the **Fabrikam Test** repo.

3. Return to **Overview** > **Summary** and choose the README file for the project page. Select :::image type="icon" source="../../media/icons/edit.png" border="false"::: **Edit**.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Choose README file.](media/share-project/choose-readme-file-new-nav.png)  

4. Select the project repository where you initialized the README file.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Choose Repository where the README file exists.](media/share-project/choose-readme-file-dialog-new-nav.png)  

5. To edit the README file, choose the README file link.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Edit the README file.](media/share-project/edit-readme-file.png)  

   You're directed to the **Repos>Files** page for the README file. You can edit and modify the README Markdown file like you would any other file in a Git repository. You can use Markdown language to format the README file and add images. For more information, see [Create a README for your repo](../../repos/git/create-a-readme.md) and [Markdown guidance](../../project/wiki/markdown-guidance.md).

<a id="initialize-tfvc"> </a>

## Initialize a README file for a TFVC repo

For projects that selected TFVC for version control, the README.md file needs to be at the root of your team project folder, for example, $/TeamProject/README.md.

1. Open **Repos** > **Files**.

2. Select **Add Project Description**.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Welcome page, TFVC new project, create readme.](media/share-project/welcome-page-tfvc-new-nav.png)

3. Select the TFVC repository and choose **Save**. If no README file is in the repo, you see the following message.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of About this project dialog.](media/share-project/about-this-project-form.png)

4. To create a README file, choose **Repos>Files** and choose new file to add a file to the project repository.

5. Name the file as **README.md**.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Add new file dialog.](media/share-project/create-readme-file-web-portal.png)

6. Add the contents of your README file in Markdown format, and then choose **Check in...**.  
   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Enter README file contents.](media/share-project/tfvc-readme-file.png)

7. Select **Check in** to complete the check-in process of the README file.  

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Check-in README file dialog.](media/share-project/tfvc-readme-checkin.png)

8. Select **Overview>Summary** to review your project summary page with the README file displayed.  

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Project summary page with the README file displayed.](media/share-project/tfvc-project-summary-with-readme.png)

## Related articles

- [Learn about Wikis, READMEs, and Markdown](../../project/wiki/about-readme-wiki.md)
- [Get started as an administrator](../../user-guide/project-admin-tutorial.md)
- [Navigate the web portal](../../project/navigation/index.md)
- [Discover what you get with a project](../../user-guide/services.md?toc=/azure/devops/organizations/projects/toc.json&bc=/azure/devops/organizations/projects/breadcrumb/toc.json)
 
**REST APIs**

- [Get project properties](/rest/api/azure/devops/core/projects/get-project-properties)
- [Set project properties](/rest/api/azure/devops/core/projects/set-project-properties)
