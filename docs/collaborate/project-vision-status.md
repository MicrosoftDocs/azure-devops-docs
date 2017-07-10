---
title: Share your project vision | Team Service  
description: View or update your project home page to share project vision, objectives, and activity for Visual Studio Team Services (VSTS)  
ms.topic: get-started-article  
ms.technology: collaborate
ms.prod: vs-devops-alm
ms.assetid: A9ED2BF5-BD0B-4114-A7BD-693C5D747E16
ms.manager: douge
ms.author: kaelli
ms.date: 04/27/2017
---

# Share your project vision, view project activity   

**Team Services | TFS 2017 | TFS 2015**  

>[!NOTE]  
>**Feature availability**: The project page described in this topic is in preview for Team Services. It is enabled or disabled when you [enable or disable the Account Landing Page](../collaborate/preview-features.md) from your profile/account menu. For users of TFS 2017.1 and later versions, this feature is enabled by default and can't be turned off. 
>
>The Project page replaces the [Welcome page](#welcome-pages) used in TFS 2017 and earlier versions. 

You can quickly get started with a team project from the project page. You can share your project vision with your team, add team members, and check the latest activity. Use this page to leverage all the built-in DevOps functionality of Team Services and to perform the following activities:

  
>[!NOTE]  
>The features and functions available from your project page depend on the source control&#151;Git or Team Foundation Version Control (TFVC)&#151;that you selected when you [created your team project](../setup-admin/create-team-project.md).  


<div style="float:left;width:320px;margin:3px;font-size:90%">

<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Git repository</p>
<ul style="padding-left:30px">
<li style="margin-bottom:1px">Clone your project to your client computer </li>
<li style="margin-bottom:1px">Push an existing repository from the command line</li>
<li style="margin-bottom:1px">Import a repository</li>
<li style="margin-bottom:1px">Initialize with a README or gitignore</li>
<li style="margin-bottom:1px">Setup a build from an external repository</li>
<li style="margin-bottom:1px">[Add team members](#cross-project-activity)</li>
<li style="margin-bottom:1px">[View code, build, and work activity](#cross-project-activity)</li>
</ul>

</div>


<div style="float:left;width:320px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">TFVC repository </p>

<ul style="padding-left:30px">

<li style="margin-bottom:1px">Setup a build</li>
<li style="margin-bottom:1px">Add a README for your project</li>
<li style="margin-bottom:1px">[Add team members](#cross-project-activity)</li>
<li style="margin-bottom:1px">[View code, build, and work activity](#cross-project-activity)</li>
</ul>

</div>


<div style="clear:left;font-size:100%">
</div>

To view the project page, open your web browser to the following URL: 

<b>https://<i>AccountName</i>.visualstudio.com/<i>ProjectName</i></b>

>[!TIP]  
>If your page isn't similar to one of the following images, then you need to [enable the feature](../collaborate/preview-features.md).  

## Get started with a new team project 

Upon adding a team project to your collection, you'll see the get started page. This page guides you to get started quickly by adding code to your repository when you choose one of the options to clone, push, import, or simply initialize a repo. You can easily get started by adding members, setting up builds, or adding work from this page.


**Git repository**

<img src="_img/project-home-page-get-started-info.png" alt="Git new project" style="border: 1px solid #CCCCCC;" />  


**TFVC repository**

<img src="_img/project-home-page-1.png" alt="TFVC new project" style="border: 1px solid #CCCCCC;" />  


##Share your project vision

You can share your project vision and objective, as well as ways for team members to contribute to the project through a Project readme. 

To edit the project README.md file, click the Edit button. You'll need to be a member of the [Project Administrators group](../setup-admin/add-administrator-tfs.md) or have your Edit project-level information permission set to allow. 

You can use Markdown language to format the README file and add images. To learn more about adding a README file, see [Create a README for your repo](../git/create-a-readme.md) and [Markdown guidance](../reference/markdown-guidance.md). 

<img src="_img/project-home-page-sample-vs-code-readme.png" alt="Example project home page" style="border: 1px solid #CCCCCC;" />  

Use these pages to orient contributors to working within your project. Consider adding guidance about:
- The project focus 
- Prerequisites
- Setting up the environment
- Tips for getting things done within the project
- Purpose or use of specific files
- Project-specific terms and acronyms
- Workflow guidance about committing or uploading changes and adding branches
- Project sponsors or contacts  


<a id="cross-project-activity">  </a>
## View cross project activity  

In addition to sharing information, the project home page pulls data from the various functional hubs to give visitors a bird's-eye view of your project activity. 

<img src="_img/project-home-page-activity.png" alt="Project Home Page, Activity" style="border: 1px solid #CCCCCC;" />  


To add team members or manage membership in the team project, click ![Add team members button](_img/project-home-page-add-team-members.png) Add button. 



<a id="welcome-pages"></a> 
## Repository welcome pages

>[!NOTE]  
>**Feature availability**: The Welcome pages are available from the web portal of TFS 2017 and earlier versions.  

Here's an example of a Welcome page:

![Sample Welcome Markdown page](_img/markdown-welcome-page.png)

Use these pages to orient contributors to working within a Git repository or Team Foundation version (TFVC) control project folder. Consider adding guidance about:
- The project focus 
- Prerequisites
- Setting up the environment
- Tips for getting things done within the project
- Purpose or use of specific files
- Project-specific terms and acronyms
- Workflow guidance about committing or uploading changes and adding branches
- Project sponsors or contacts 


### Edit or create additional pages

>[!NOTE]  
>If you set policies on the Git repository, changes to the welcome page must be done as a pull request.  

1. You can start editing directly from the Welcome page.

	<img src="_img/markdown-welcome-page-edit.png" alt="Web portal, Project page, Edit Welcome Markdown page" style="border: 1px solid #CCCCCC;" />
	
	To edit a page, you must be a contributor to the repository or branch or have the Contribute permissions set to allow.  

2. To add another page, simply enter a link to a new Markdown file that doesn't yet exist, for example:
 
	`[page-1](./page-1.md)`

3. After you save the file, click the link. Respond to the prompt to edit the file and commit it to your repository.  



### Location of the Welcome pages
The Welcome page corresponds to the README.md file defined in the Git repository or TFVC project folder (i.e. $/TeamProject/ReadMe.md). Additional pages you create show up in the same location.

<img src="_img/markdown-multiple-pages-explorer-view.png" alt="Web portal, Code hub, Markdown pages in the repository" style="border: 1px solid #CCCCCC;" /> 

You can edit and manage these files in the same way you manage all other files under source control. 

####Git repositories
For Git projects, the README.md file needs to be at the root of each repository in the default branch. For Git based projects the left pane supports navigation to other repositories. A separate Welcome page/README.md file can be created for each repository.  

####TFVC  projects
For TFVC projects the README.md file needs to be at the root of your team project folder (i.e. $/TeamProject/README.md). 

Any additional Markdown files you have (ones with a *.md extension) in the root of the project folder will also show up in the left pane for easy navigation between them so you can provide additional information.  


## Related notes  

- [Work effectively from your account hub](../connect/account-home-pages.md)  
- [Enable preview features](../collaborate/preview-features.md)   
- [Create a team project](../setup-admin/create-team-project.md) 
- [Create a Readme for your repo](../git/create-a-readme.md)  
- [Markdown guidance](../reference/markdown-guidance.md) 
- [Agile tools overview](../work/overview.md)  
- [Git overview](../git/overview.md)
- [Continuous integration on any platform](../build/overview.md)
- [Work within the web portal](../connect/work-web-portal.md)


### Required permissions 

To edit information on the team project page or manage team membership, you must be a member of the [Project Administrators group](../setup-admin/add-administrator-tfs.md) or have your Edit project-level information permission set to allow. 

To view the team project page, you must be a valid member of the team project. For more information, see [Permissions and groups, Valid user groups](../setup-admin/permissions.md#validusers). 

 


  