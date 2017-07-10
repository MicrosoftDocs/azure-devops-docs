---
title: Manage issues or impediments | Team Services & TFS
description: Add work items to track problems, risks, or other issues that may impeded your plans or schedule - Visual Studio Team Services (VSTS) and Team Foundation 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 5B126205-599D-40EB-BC95-23CF1444EF2A
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/19/2017
---

# Manage issues or impediments 

**Team Services | TFS 2017 | TFS 2015 | TFS 2013** 

<a name="manage-impediments"></a>

If you have known issues you want to track, you can do so by defining an impediment (Scrum) or issue (Agile or CMMI). Impediments and issues represent unplanned activities. Resolving them requires more work beyond what's tracked for actual requirements. Using the impediment work item type helps you track and manage these issues until you can resolve and close them.  

Don't confuse impediments with bugs. You track impediments that may cause problems with delivering one or more requirements. For example, you may have to address feature ambiguity, personnel or resource issues, problems with environments, or other risks that impact scope, quality, or schedule. Other issues that deserve tracking are decisions that require several stakeholders or product teams to weigh in on.


<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">

<li style="float:left;" data-toggle="collapse" data-target="#add-impediment">Add an impediment </li> 

<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#add-impediment-tfs-2015-13">TFS 2015, TFS 2013</a></li>

<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#add-impediment-team-services">Team Services, TFS 2017</a></li>

</ul>
 
<div id="add-impediment" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="add-impediment-team-services" class="tab-pane fade in active"> 

<p>From the Work hub, choose Impediment from the New Work Item list of options. Click the ![pin icon](../_img/icons/pin-icon.png) pin icon to have it show up within the Work hub drop down menu. </p>

<img src="_img/cyb-new-work-item-impediment.png" alt="Team Services, TFS 2017 - Add an impediment" style="border: 1px solid #CCCCCC;" />  

<p>Or, from the Queries page, you can add a new work item. </p>

<img src="_img/cyb-new-work-item-impediment-form.png" alt="Create a new impediment" style="border: 1px solid #CCCCCC;" />  


</div>

<div id="add-impediment-tfs-2015-13" class="tab-pane fade"> 

<p>From the Queries page, choose Impediment from the **New** drop down menu.</p>

<img src="_img/ALM_CB_CreateImpediments.png" alt="TFS 2015, TFS 2013 - Add an impediment" style="border: 1px solid #CCCCCC;" />  

 
</div>



</div>
</div> 







## Related notes 
- [Add work items](add-work-items.md)
- [Work item form controls](../concepts/work-item-form-controls.md)
- [Manage bugs or code defects](manage-bugs.md)
- [Create your backlog](create-your-backlog.md) 

Impediments and issues don't appear on your backlog. Instead, you track them using [queries](../track/using-queries.md). If you want them to appear on your backlog, or you want to track other work item types on your backlog, see  these topics for details: 
- **Inheritance process model** (Team Services): [Customize your backlogs or boards](../process/customize-process-backlogs-boards.md)
- **Hosted XML process model** (Team Services): [Add a work item type to a backlog and board](../customize/add-wits-to-backlogs-and-boards.md)
- **On-premises XML process model** (TFS): [Add a work item type to a backlog and board](../customize/add-wits-to-backlogs-and-boards.md)
