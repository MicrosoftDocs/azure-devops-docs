---
title: Kanban quickstart | Team Services & TFS
description: Plan and track your work using the Kanban board in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)  
ms.topic: get-started-article  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 4942A638-9888-461E-969D-0BB9B1FE1736
ms.manager: douge
ms.author: kaelli
ms.date: 07/13/2017
--- 

# Get started using your Kanban board

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b> 

Your Kanban board turns your backlog into an interactive signboard, providing a visual flow of work. As work progresses from idea to completion, you update the items on the board. Each column represents a work stage, and each card represents a user story (blue cards) or a bug (red cards) at that stage of work.  


## Open your Kanban board from the web portal

You access your Kanban board from the **Work>Backlogs>Board** page. If you don't have a team project yet, create one in [Visual Studio Team Services](../../setup-admin/team-services/set-up-vs.md) or set one up in an [on-premises TFS](../../setup-admin/create-team-project.md).   

To contribute to the Kanban board, you must be a member of the team and belong to the Contributors group. To configure the Kanban board, you must be added to the team administrator role or be a member of the Project Administrators group.   If you don't have access to the team project, [get invited to the team](../scale/multiple-teams.md#add-team-members).   

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">

<li style="float:left;" data-toggle="collapse" data-target="#open-backlog">Open product backlog</li> 

<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#open-backlog-tfs-2015-13">TFS 2015, TFS 2013</a></li>

<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#open-backlog-team-services">Team Services, TFS 2017</a></li>

</ul>
 
<div id="open-backlog" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">


<div id="open-backlog-team-services" class="tab-pane fade in active"> 

<img src="../backlogs/_img/cyb-open-backlog-tfs-2017.png" alt="Web portal, choose Work hub, Backlogs" style="border: 1px solid #CCCCCC;" /> 

<p>The URL follows this pattern:</p>
<ul>
<li>Visual Studio Team Services: ```https://{account}.visualstudio.com/{project name}/_backlogs```</li>
<li>Team Foundation Server (on-premises): ```http://{server}:8080/tfs/DefaultCollection/{project name}/_backlogs```</li>
</ul>

<p>If you don't see the team or team project you want, click the ![Team Services icon](../_img/icons/project-icon.png) Team Services icon to [browse all team projects and teams](/docs/connect/account-home-pages). </p> 
 

</div>

<div id="open-backlog-tfs-2015-13" class="tab-pane fade"> 


<img src="../backlogs/_img/cyb-open-backlog-tfs-2015.png" alt="Open the backlog" style="border: 1px solid #CCCCCC;" />  

<p>The URL follows this pattern:</p>
<p>```http://{server}:8080/tfs/DefaultCollection/{project name}/_backlogs```</p>

<p>If you don't see the team or team project you want, open the team project/team drop-down menu and select the team project/team that you've recently visited. If you don't see the team or team project you want, choose **Browse all** to browse all team projects and teams. </p>

<img src="../_shared/_img/switch-team-project-2.png" alt="Choose another team from the team project menu" style="border: 1px solid #CCCCCC;" /> 



</div>



</div>
</div> 

<!--- 
[!INCLUDE [temp](../_shared/image-differences.md)]  

To view your Kanban board, click the **Board** link from the **Work>Backlogs** page. 

<img src="_img/kanban-basics-intro.png" alt="Kanban board, Agile template" style="border: 1px solid #CCCCCC;" />  

-->

>[!NOTE]  
>Your Kanban board is one of two types of boards available to you. For an overview of the features supported on each backlog and board, see [Backlogs, boards, and plans](../backlogs-boards-plans.md). To switch to the [product backlog](../backlogs/create-your-backlog.md), click **Backlog**. And, to switch to the [Task board](../scrum/task-board.md), click on the current iteration or other sprint of interest. If no sprints appear, see [Schedule sprints](../scrum/define-sprints.md). 

User stories and bugs correspond to types of work items. You use  [work items](../backlogs/add-work-items.md) to share information, assign work to team members, update status, track dependencies, and more.

<!--- 
You open your Kanban board using one of these URLs that connects you to your team project:   

**Team Services**:  ```http://AccountName/DefaultCollection/TeamProjectName/_backlogs/board/ ```

**On-premises Team Foundation Server (TFS)**:  ```http://ServerName:8080/tfs/DefaultCollection/TeamProjectName/_backlogs/board/```

If you don't have a team project yet, create one in [Visual Studio Team Services](../../setup-admin/team-services/set-up-vs.md) or set one up in an [on-premises TFS](../../setup-admin/create-team-project.md). If you don't have access to the team project, get [invited to the team](../scale/multiple-teams.md#add-team-members).

-->

<a id="add-work-items"> </a>

## Add work items



<a id="update-status">  </a>
## Update the status of work items via drag-and-drop

<meta name="description" content="Kanban tools track progress" />
Once you've configured your Kanban board to match how your team works, you're ready to use it.

Here are a few things you can do. See at a glance the estimated size of work for each item which displays at the bottom right of each card. Add items to your backlog in the first column. When priorities change, move items up and down within a column. And, as work completes in one stage, update the status of an item by dragging and dropping it to a downstream stage.

![Kanban board, move an item](_img/ALM_CC_MoveCard.png)

>[!NOTE]  
><b>Feature availability: </b> You can [reorder items within a column](#reorder-cards) from Team Services and the web portal for TFS 2015.1 and later versions.   

Also, you can quickly update a field or reassign ownership directly from the board.

![Kanban, assign items](_img/ALM_CC_UpdateFieldOnCard.png)

Updating your Kanban board as work progresses helps keep you and your team in sync. Also, you'll be able to see and share the value stream your team is delivering to customers.



## Try this next 

Each team can manage their backlog and customize their Kanban board. [Add teams](../scale/multiple-teams.md) when you assign specific feature areas to different teams for development. Each team can then manage their backlog and focus on how they will develop their deliverables. 

Here are some useful tips when working with the Kanban board:
- To quickly assign items to a team member, add the Assign To field to display on the cards (see [Customize cards](../customize/customize-cards.md))   
- Customize cards to show the fields you most care about  
- Add a swimlane to track high-priority work or track work which falls into different service level agreements (see [Swimlanes](expedite-work.md))   
- Highlight specific work items by color coding cards based on a field value or tag (see [Customize cards](../customize/customize-cards.md)) 
- If you use Scrumban, drag-and-drop cards onto a sprint to quickly assign them to a sprint.  



If your new to Team Services or TFS and want to understand what you can customize, see [Customize your work tracking experience](../customize/customize-work.md). 

## Related notes 
 
- TBD 

[!INCLUDE [temp](../_shared/kanban-board-controls.md)]  


[!INCLUDE [temp](../_shared/live-updates.md)]  
 
 

