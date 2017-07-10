---
title: Select backlog navigation levels | Team Services & TFS  
description: Choose which backlog and portfolio backlogs are active for your team in Visual Studio Team Services (VSTS) or Team Foundation Server  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: BB1E56B6-988A-4D0A-AA56-560F2DF681DD  
ms.manager: douge
ms.author: kaelli
ms.topic: article  
ms.date: 03/20/2017
---

# Select backlog navigation levels for your team

**Team Services | TFS 2017 | TFS 2015**

>[!NOTE]  
>**Feature availability**: The team setting for choosing which backlog levels are available is available from Team Services and TFS 2015 and later versions. For TFS 2013, the Feature portfolio backlog level is enabled for all teams.  

Each team can determine the backlog levels that they use. For example, feature teams may want to only focus on their product backlog, while a management team may choose to only show feature and epics (the two default portfolio backlogs). You configure which backlog levels appear from your team settings dialog. 

If you want additional portfolio backlogs, see the following topics based on the process model you use: 
- **Inheritance**: [Customize your backlogs or boards for a process](../process/customize-process-backlogs-boards.md)  
- **Hosted XML or On-premises XML**: [Add portfolio backlogs](add-portfolio-backlogs.md).  

For an overview of process models, see [Customize your work tracking experience](customize-work.md).




<a id="activate-backlogs"></a>


##Set your team's preferences for backlog levels

>[!NOTE]  
><b>Feature availability: </b>You can manage all your team settings from a common configuration dialog from Team Services or the web portal for TFS 2015 Update 1 or later version.  

Because this setting affects all team members' view of the team backlogs and boards, you must be a team administrator to change the setting. Changing the setting is disabled if you're not a team administrator. Go [here to get added as a team administrator](../scale/add-team-administrator.md).
 	
<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#backlog-settings">Select backlog navigation levels</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#backlog-settings-tfs-2015-1">TFS 2015</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#backlog-settings-tfs-2017">TFS 2015.1, TFS 2017</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#backlog-settings-team-services">Team Services</a></li>
</ul>
<div id="backlog-settings" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">
<div id="backlog-settings-tfs-2015-1" class="tab-pane fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<ol>
<li><p>From your web portal, click the ![gear icon](../_img/icons/team-settings-gear-icon.png), (gear icon) to open the administration page.</p>
![Gear icon provides access to admin pages](../_img/icons/ALM_OpenAdminContext.png)  
</li>
<li><p>From the Overview tab, choose the team whose settings you want to configure, and then click **Settings**.</p>
![Backlog board, open team settings](../backlogs/_img/organize-backlog-open-ccdialog.png)  
</li>
<li><p>Click the **Backlogs** tab and check the boxes of those backlog levels you want your team to manage.</p>
<img src="../backlogs/_img/ALM_OB_BacklogSettings.png" alt="TFS 2015.1 or later, web portal, team settings dialog, Backlogs tab" style="border: 1px solid #CCCCCC;" /> 
</li>
<li>To see the changes, open or refresh your team's backlog web page. </li>
</ol>
</div>
<div id="backlog-settings-tfs-2017" class="tab-pane fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<ol>
<li><p>From your team's backlog page, click the ![gear icon](../_img/icons/team-settings-gear-icon.png) (gear icon) to open the common configuration team settings.</p>  
![Backlog board, open team settings](../backlogs/_img/organize-backlog-open-ccdialog.png)  
</li>
<li>
<p>Click the **Backlogs** tab and check the boxes of those backlog levels you want your team to manage.</p>
<img src="_img/select-nav-backlog-levels-config-tfs-2017.png" alt="TFS 2017, web portal, team settings dialog, Working with bugs tab" style="border: 1px solid #CCCCCC;" />
</li>
<li>To see the changes, open or refresh your team's backlog web page. </li>
</ol>
</div>
<div id="backlog-settings-team-services" class="tab-pane fade in active">
<ol>
<li><p>From your team's backlog page, click the ![gear icon](../_img/icons/team-settings-gear-icon.png) (gear icon) to open the common configuration team settings.</p>  
![Backlog board, open team settings](../backlogs/_img/organize-backlog-open-ccdialog.png) 
</li>
<li>
<p>Click the **Backlogs** tab and check the boxes of those backlog levels you want your team to manage.</p>
<img src="_img/select-nav-backlog-levels-config-ts.png" alt="Team Services, web portal, team settings dialog, Backlogs tab" style="border: 1px solid #CCCCCC;" />
</li>
<li>To see the changes, open or refresh your team's backlog web page. </li>
</ol>
</div>
</div>
</div>




##Related notes

- [Get started with Agile tools to plan and track work](../overview.md)
- [Backlogs, boards, and plans](../backlogs-boards-plans.md)
- [Create your backlog](../backlogs/create-your-backlog.md)  
- [Define features and epics](../backlogs/define-features-epics.md)
- [Organize your backlog](../backlogs/organize-backlog.md)   
- [Portfolio management, setup a team hierarchy](../scale/portfolio-management.md)  
- [Work with multi-team ownership of backlog items](../backlogs/work-multi-team-ownership-backlogs.md)
- [Visibility across teams](../scale/visibility-across-teams.md)  

