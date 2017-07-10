---
title: Preview features | Team Services & TFS  
description: Enable/disable or activate/deactivate features in preview at the user, team project, or account level  
ms.technology: collaborate
ms.prod: vs-devops-alm
ms.assetid: FB4E044D-B916-4901-A322-C87C3581A90A
ms.manager: douge
ms.author: kaelli
ms.date: 06/01/2017   
---


# Enable preview features 

<b> Team Services | TFS 2017.1</b>

>[!NOTE]    
><b>Feature availability: </b>The preview features you can enable or disable will differ depending on whether you work from Team Services or an on-premises TFS. Preview features become available first on Team Services and then subsequently are made available with an update to TFS. 

As new features are introduced, we're providing support for you to turn some of them on or off. That way, you can try them out, provide feedback, and work with those features that meet your requirements.  

Some features provide a new user interface and functionality, which can be managed per user or team member. Others support a default experience for the account and are managed by an account administrator. 
 
>[!NOTE]  
>**Feature availability**:  You can turn on or off the following features for Team Services (cloud service), or from the web portal of the listed on-premises TFS version or a later version. Visit the [Visual Studio Downloads page](https://www.visualstudio.com/downloads/download-visual-studio-vs) to get the latest TFS update. Additional resources may be required as annotated. To determine your platform or TFS version, see [Provide product and content feedback](../provide-feedback.md#platform-version).

<div style="float:left;width:310px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Preview features per user](#user-level)</p>
<ul style="padding-left:30px">

<li style="margin-bottom:1px">[New Account Landing page](../connect/account-home-pages.md)  </li>
<li style="margin-bottom:1px">[New Release Definition Editor](../build/preview/release-definition-editor.md) (Team Services)</li>
<li style="margin-bottom:1px">[Streamlined User Management](../setup-admin/team-services/add-account-users-assign-access-levels-team-services.md) (Team Services)</li>
</ul>

<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Preview features per team project](#team-project-level)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:1px">[Enable Wiki](#team-project-level) (Team Services) </li>
</ul>

</div>


<div style="float:left;width:340px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Preview features per account](#account-level)</p>
<ul style="padding-left:30px">
<li style="margin-bottom:1px">[Combine email recipients](manage-team-notifications.md) (TFS 2017.1)</li> 
<li style="margin-bottom:1px">[New Account Landing page](../connect/account-home-pages.md) </li>
<li style="margin-bottom:1px">[New Release Definition Editor](../build/preview/release-definition-editor.md) (Team Services)</li>
<li style="margin-bottom:1px">[Streamlined User Management](../setup-admin/team-services/add-account-users-assign-access-levels-team-services.md) (Team Services)</li>
<li style="margin-bottom:1px">[Task tool installers](#task-tool-installers)</li> 
<li style="margin-bottom:1px">[Team expansion for notifications](#team-expansion-notifications) (TFS 2017.1)</li>
</ul>

</div>

<div style="clear:left;font-size:100%">
</div>

<a id="user-level">  </a>
##Enable features for my use  

From time to time, a new feature is introduced in Preview mode, which allows you to turn it on or off. 

To enable or disable a feature in preview, access the Preview features option from your user account menu. 

<img src="../_shared/_img/preview-features-open.png" alt="Open Preview Features " style="border: 1px solid #CCCCCC;" /> 

### New Account Landing Page  

>[!NOTE]   
>For Team Services, each user can enable or disable the account hub.   
> 
>For TFS 2017.1, the account hub is automatically enabled for all users and cannot be disabled.
    
Here, we enable the New Account Landing page. This hub is associated with the account collection and not any one team project or team. To learn more about this feature, see [Work effectively from your account hub](../connect/account-home-pages.md). When you enable the New Account Landing page, you also enable the project page where you can [share your project vision with your team](project-vision-status.md).

<img src="../_shared/_img/preview-features-account-landing-off-on.png" alt="Account Landing Page has been enabled " style="border: 1px solid #CCCCCC;" /> 

If you have administrative privileges, you'll see a menu from which to choose whether the feature is for you, or for all users who work within the account. 

<img src="_img/preview-features-user-level.png" alt="Preview features options, for me, logged-in user" style="border: 1px solid #CCCCCC;" />  

<a id="team-project-level">  </a>
##Enable features for a team project    


>[!NOTE]  
><b>Feature availability: </b>The built-in wiki is in Preview and available for Team Services at this time. If you were using the Wiki Marketplace extension, you can [migrate your existing pages to the new team project wiki](migrate-extension-wiki-pages.md).  

You can enable a built-in Wiki for your team project. This feature is in preview and when enabled adds a **Wiki*** hub from which you can [view and edit wiki pages](add-edit-wiki.md).  

<img align="top" src="_img/preview-features-wiki.png" alt="Preview features options for a team project" style="border: 1px solid #CCCCCC;" /> 


<a id="account-level">  </a>
##Enable features at the account level (for all users)  

When you enable a feature at the account level, you essentially turn it on for all users of your account. Each user can then disable the feature if they so choose.

>[!TIP]  
>If you don't see the user/account menu option, then you aren't an account administrator. To get added as one, see [Add administrators to Team Services and TFS](../setup-admin/add-administrator-tfs.md).  

<img align="top" src="_img/preview-features-admin-s117.png" alt="Preview features options for the account" style="border: 1px solid #CCCCCC;" />  <img align="top" src="_img/preview-features-admin-s117-2.png" alt="Preview features options for the account" style="border: 1px solid #CCCCCC">  

<!---
<a id="oob-notifications">  </a>
### Out of the box notifications 

>[!NOTE]  
>**Feature availability**: You can enable/disable Out of the box notifications from Team Services accounts and for TFS 2017.1 and later versions. 

With out-of-the-box notifications, users automatically receive notifications for events such as:

* The user is assigned a work item  
* The user is added or removed as a reviewer to a pull request  
* The user has a pull request that is updated  
* The user has a build that completes  

These subscriptions appear in the new user notifications experience, and users can easily choose to opt out of any of them. To learn more, see [Manage personal notifications](manage-personal-notifications.md). 
-->


<a id="task-tool-installers">  </a>
### Task tool installers

We're adding some tool installer tasks to enable your build or release process to lazily install tool sets. So now you can install dependencies on hosted agents and test and validate your app on multiple versions of a tool set. See [Tool installers](../build/concepts/process/tasks.md#tool-installers).

<a id="team-expansion-notifications">  </a>
### Team expansion for notifications 

>[!NOTE]  
>**Feature availability**: You can enable/disable Team expansion for notifications from Team Services and TFS 2017.1 and later versions. 

Enable this feature for your account when you want notifications to be sent by default for all team-associated events. Such events include when pull requests are created or updated. Team admins can choose to opt-out of these notifications. See [Manage team notifications](manage-team-notifications.md).  

##Related notes  

- [Collaborate overview](overview.md)  
- [Streamlined user management](../setup-admin/team-services/manage-users-and-access-user-hub-team-services.md)  
- [Manage personal notifications](manage-personal-notifications.md) 
- [New Work Item Search](../search/workitem/get-started.md) 
- [New Account Landing page](../connect/account-home-pages.md)  
- [New Build Editor](../build/preview/2017-user-experience.md)  