---
title: Set favorites | VSTS  
description: Quickly access objects by favoriting them either for your use or the team's use    
ms.technology: collaborate
ms.prod: vs-devops-alm
ms.assetid: 473E452D-59F7-4F6F-97C6-657ECD99ADCB
ms.manager: douge
ms.author: kaelli
ms.date: 07/22/2017  
---

# Set personal or team favorites    

**VSTS | TFS 2017.1**  

<!--- Multiple version topic; need to update with latest screenshots-->  

As your code base, work tracking efforts, developer operations, and organization grows, you'll want to be able to quickly navigate to those object of interest to you and your team. Setting favorites allows you to do just that.  

This topic shows you how to:  

> [!div class="checklist"]   
> * Favorite a project, team, or team project 
> * Favorite a repository, build definition, shared query 
> * View your personal favorites       
> * Unfavorite an object    


> [!NOTE]   
> Changes based on preview features.  

You can set favorites for yourself or your team. You can set them for these objects, from the hub or page listed: 

- Code branch or repository -> **Code>Branches** 
- Build definition -> **Build & Release>Queries**   
- Delivery plans  -> **Work>Plans**  
- Queries -> **Work>Queries**  
- Team project or team  ->  **Account>Projects**   
- Test Plans -> **Test>Test Plans**

Delivery Plans requires installation of the [Delivery Plans extension](../work/scale/review-team-plans.md).   

## Favorite a repository

<img src="_img/set-favorites-repository.png" alt="Web portal, Code, Favorite a repo" style="border: 1px solid #CCCCCC;" />

## Favorite a build definition  

<img src="_img/set-favorites-build-definitions.png" alt="Web portal, Build & Release, Builds, Add to my favorites" style="border: 1px solid #CCCCCC;" />  

## Favorite a shared query 

<img src="_img/set-favorites-shared-query.png" alt="Web portal, Work, Queries, Add to my favorites" style="border: 1px solid #CCCCCC;" /> 

- To mark a team project or team as a favorite, go to the **Projects** page and click the ![favorites](../connect/_img/icon-favorite-star.png) star icon next to the team or team project.   
<!--- Not supported at account level: To mark a git branch as a favorite, open the **Code>Branches** page and click the ![favorites](../connect/_img/icon-favorite-star.png) star icon next to the branch you want to add.  -->  
- To mark a query as a favorite, open the **Work>Queries** page and drag the query into the My Favorites area. 
- To mark a plan as a favorite, open the **Work>Plans** page and click the ![favorites](../connect/_img/icon-favorite-star.png) star icon next to a plan.  
- To mark a build definition as a favorite, open the **Build&Release>All Definitions** page and click the ![favorites](../connect/_img/icon-favorite-star.png) star icon next to the build definition.    
- To mark a test plan as a favorite, open the **Test>Test Plans** page and click the ![favorites](../connect/_img/icon-favorite-star.png) star icon next to a test plan from the menu that shows All test plans. 

<a id="view-favorites">  </a>
## View personal favorites through your account hub 

0. From your web browser, open the account or home page for your VSTS account or TFS collection. From anywhere in the web portal, click the ![project icon](../_img/icons/project-icon.png) project icon as shown.  

	<img src="_img/set-favorites-click-icon.png" alt="Open the Account home, Projects page" style="border: 1px solid #CCCCCC;" />   

0. You'll see something similar to the following welcome page.

	<img src="../connect/_img/account-home-welcome.png" alt="Account home, Projects page" style="border: 1px solid #CCCCCC;" />   

	The URL follows this pattern: 

	**VSTS**: ```https://{account name}.visualstudio.com/{project name}/_projects```  
	**TFS**: ```https://{server name}.visualstudio.com/DefaultCollection/_projects```  

0. Open the **Favorites** page to quickly access any object or item that you've marked as a favorite. 

	<img src="../connect/_img/account-home-favorites.png" alt="Account home, Favorites page" style="border: 1px solid #CCCCCC;" />   

<a id="team-favorites"> </a>
## Set team favorites 
Team favorites are a quick way for members of your team to quickly access shared resources of interest. You can define team favorites for the following:

- **Code hub/Explorer**: Add repos or folders to team favories  
- **Work hub/Queries**: A  [Shared work item queries](../work/track/using-queries.md) to team favorites    
- **Build hub/Explorer**: Add build definitions to team favorites   

From your team context, drag shared queries, builds, and folders to Team favorites to provide quick access to those items. Or, choose the Add to team favorites option from the context menu for the item. You must be [added as a team admin](../work/scale/add-team-administrator.md) to manage team favorites.  

![Drag items to team favorites](../_img/alm-index-team-favorites.png)  


## Try this next  

> [!div class="nextstepaction"]
> [Work effectively from the account home page](../connect/account-home-pages.md)
> or
> [Manage personal notifications](manage-personal-notifications.md)
