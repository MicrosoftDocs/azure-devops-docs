---
title: Quickly link to work items in discussions & pull request in VSTS & TFS
description: Link to work items in discussions and pull requests 
ms.prod: vs-devops-alm
ms.technology: collaborate
ms.assetid: 
toc: show
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 09/13/2017
---



# Use #ID to link to work items  

**VSTS | TFS 2018 | TFS 2017 | TFS 2015.1**

<a id="mention-wit-id">  </a>

>[!NOTE]  
><b>Feature availability: </b>The **#ID** special control is supported from VSTS and TFS 2015.1 and later versions.    


## Link a pull request to a work item 

When leaving a code comment in a pull request, you can type **#** to trigger the **#ID** work item picker. The picker displays a list of 50 work items that you have recently modified or that are assigned to you. 

You can narrow the list of suggested work items by entering keywords that match the work item type, ID, or title, or you can enter the exact work item ID.

<img src="_img/ALM_PRD_ID_PR.png" alt="Pull request comment area, type # to invoke work item control" style="border: 1px solid #CCCCCC;" />     

To further filter the list, continue entering keywords until you've found a match. You can enter up to five keywords.   

## Link to work items in pull requests, comments, and commits

 
>[!NOTE]  
><b>Feature availability: </b>The **#ID** special control has been extended to additional objects when working from VSTS and TFS 2015.2 and later versions.   

You can also use the **#ID** control in pull request discussions, commit comments, changeset comments, and shelveset comments. 

## Link to work items from a Wiki page
 
You can use the **#ID** control to link to a work item from within a Wiki page.   

To learn more about the built-in wiki, see [Add & edit wiki pages](../collaborate/add-edit-wiki.md). 


## Related notes

- [Link work items](../work/backlogs/add-link.md)
- [Save work with commits](../git/tutorial/commits.md)
- [Pull requests](../git/tutorial/pullrequest.md)
- [Check in your work to the team code base](../tfvc/check-your-work-team-codebase.md) 

