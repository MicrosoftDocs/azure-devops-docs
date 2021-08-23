---
title: Project summary
titleSuffix: Azure DevOps
ms.custom: seodec18  
description: Use the project Summary page to support your project.
ms.author: kaelli
author: kaelli 
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 08/23/2021 
--- 

# Project summary 

[!INCLUDE [version-all](../../includes/version-all.md)]  

Each project provides a Summary page which you can edit to support your team(s) to understand the purpose of your project. Use this page to support the following tasks:

- Provide links for details on how to contribute 
- Indicate who project members should contact to elevate permissions, access, or other requests 
- Invite people to contribute to your project 


General: 
- Project type, Private, Public 
- Invite people to project
- Favorite the project 
- Project stats 
- Project Members
- 
- 
Features supported 
-  Project description 
-  Project tags
-  Languages ? 
-  README file versus wiki 
-  



Ideas for information to provide: 
- Who to contact for permissions, extensions, ... 
- Links to instructions for collaborating on code, tracking work, building pipelines, deploying releases 
 

::: moniker range="azure-devops"

## Private versus public projects

Hosted projects can be designated as **Private** or **Public**. For public projects, anonymous users can view the project **Summary**, except for the **Members** section. Also the **Like** and **Favorite** icons aren't visible to anonymous users. To learn more about public projects, see [What is a public project?](../public/about-public-projects.md)

::: moniker-end

## Prerequisites

- To view the project **Summary** page, you must be a member of the project. 
- To perform the following tasks, you must be a member of the Project Administrators group:
	- Edit the project **Summary** page
	- Invite users to contribute to the project 
  or have the project-level **Edit project-level information** permissions set to **Allow**. 
- To add or edit project Tags, you must be a member of the Project Administrators group or have the project-level **Manage properties** permission set to **Allow**. 
 
> [!TIP]    
> If you don't have permissions to edit the page, select icons or links won't be visible. 

This permission controls the project properties REST API. The project properties REST API is used to drive the project tags experience in the product. i.e. the ability to set tags on a project. 

## Suggested information to provide


## Update the project description and home page

The **Summary** page displays either the **README** file defined in a project repository or the home page of a project wiki. If you want to use the project wiki home page, first set that up as described in [Create a Wiki for your project](../../project/wiki/wiki-create-repo.md).

1. To edit the **Summary** page:

	- If it is the first time editing the page, choose Add Project Description.  
	:::image type="content" source="media/summary/add-project-description.png" alt-text="Screenshot of summary page, first time editing.":::

	- If editing the page after it's been set up, choose the :::image type="icon" source="../../media/icons/edit.png" border="false"::: **Edit project information**. This icon is only visible to members with permissions to edit the project **Summary** page.
 
1. Provide a brief description of the project purpose in the **Description** box.  

	:::image type="content" source="media/summary/about-this-project-dialog.png" alt-text="About this project dialog.":::

1. Optionally add one or more **Tags** for your project. These tags are similar to [work item tags](../../boards/queries/add-tags-to-work-items.md). 

1. Choose whether to reference a **README** file or the project wiki home page for the rest of the Summary page contents.  

	If choosing a **Readme file**, select the repository for the README. A preview of the current text for the README file is shown. 

	:::image type="content" source="media/summary/select-readme-repository.png" alt-text="About this project dialog, choose and select README repository.":::

	> [!TIP] 
	> A default README is created within the repository added when you created your project. You can choose this README or create another repository and README file for this purpose. 


## Add a project tag

- Users can't add tags containing "/".
- User can’t add tags greater than 40 characters.
- User can’t add more than 15 tags.
- User can add multiple delimiter separated tags at a time. Delimiter will "," and ";".
- Tags are case-insensitive and no duplicate tags or empty tags are allowed.
- Users can't add tags ending with "-".



## Invite people to contribute to your project 

You can send an email to invite users to contribute to your project by choosing **Invite**. To learn more, see [Add users or groups to a team or project, Invite users from the Summary page](../security/add-users-team-project.md#invite-users-from-the-summary-page).

:::image type="content" source="../security/media/add-users/summary-invite-users.png" alt-text="Screenshot of Summary page, Invite button.":::



## Review project statistics  

:::image type="content" source="media/summary/project-stats.png" alt-text="Screenshot of Summary page, Stats section.":::

## Email or chat with a project member 

:::image type="content" source="media/summary/project-stats.png" alt-text="Screenshot of Summary page, Members section.":::


## Initiate a project search  

 
## Project properties



## Related articles

- [About Wikis, READMEs, and Markdown](../../project/wiki/about-readme-wiki.md)
- [Get started as an administrator](../../user-guide/project-admin-tutorial.md)
- [Web portal navigation](../../project/navigation/index.md)
- [What do I get with a project?](../../user-guide/services.md?toc=/azure/devops/organizations/projects/toc.json&bc=/azure/devops/organizations/projects/breadcrumb/toc.json)
 
 
**REST APIs**

- [Projects - Get Project Properties](/rest/api/azure/devops/core/projects/get-project-properties)
- [Projects - Set Project Properties](/rest/api/azure/devops/core/projects/set-project-properties)