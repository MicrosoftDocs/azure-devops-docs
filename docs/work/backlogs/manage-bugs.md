---
title: Manage bugs | Team Services & TFS
description: Manage technical debt and triage bugs using Agile tools and Scrum methods when working in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 6E5710EE-21C8-4264-AD65-A827D186F134
ms.manager: douge
ms.author: kaelli
ms.date: 02/24/2017
---

#Manage bugs


**Team Services | TFS 2017 | TFS 2015 | TFS 2013**        
 
How do you track and manage defects in your code? How do you make sure software problems and customer feedback get addressed in a timely manner to support high-quality software deployments? And, how do you do this while making good progress on new features? 

At a minimum, you need a way to capture your software issues, prioritize them, assign them, and track progress. Moreover, you'll want to manage your bugs in ways that align with your Agile practices. 

In a nutshell, you manage bugs through the following tasks: 
- Capture information using the bug work item type  
- Triage bugs by assigning a priority 
- Update bug status throughout the bug lifecycle  
- Monitor bug assignments and trends.   

In addition, you can: 
- Capture bugs using test tools
- Configure how your team manages bugs&mdash;along with requirements or with tasks 
- Define queries and create charts of bug status, assignments, and trends
- Manage duplicate bugs by linking and closing one of them    
- Re-run test cases in the web runner using the Verify option 
- Automatically capture bugs when using the Test & Feedback extension  
- Customize the bug template  
- Interface with UserVoice or Zendesk. 


##Capture bugs  
You can track bugs in much the same way that you track product backlog items (PBIs) or user stories. Using the bug work item form, you capture the code defect in the Title, Steps to Reproduce, and other fields.  

You can create bugs from the [web portal](add-work-items.md), Visual Studio/Team Explorer, a [work item template](../productivity/work-item-template.md), or through one of the testing tools.  

###Bug work item form 

The bug work item form tracks similar information to the one shown for the Scrum process.  

>[!NOTE]  
>The images you see from your web portal may differ from the images you see in this topic. These differences result from updates made to Team Services or your on-premises TFS, options that you or your admin have enabled, and which process was chosen when creating your team project&mdash;[Agile](../guidance/agile-process.md), [Scrum](../guidance/scrum-process.md), or [CMMI](../guidance/cmmi-process.md). 


<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#bug-form">Bug form</li> 


<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#old-web-form">TFS 2015 | TFS 2013 (old web form)</a></li>

<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#new-web-form">Team Services | TFS 2017 (new form enabled)</a></li>

</ul>
 
<div id="bug-form" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="new-web-form" class="tab-pane fade in active"> 
<p>The new web form provides a number of experiences not provided with the old web form. To learn more, see [New work item experience](../process/new-work-item-experience.md). </p>

<img src="_img/manage-bugs-scrum-bug-from-ts.png" alt="Scrum bug work item form, Team Services" style="border: 1px solid #CCCCCC;" />
</div>

<div id="old-web-form" class="tab-pane fade"> 
<p>To learn more about working in the web form for TFS 2015 or earlier versions, see [Add work items to plan and track your project](add-work-items-tfs.md). </p> 

<img src="_img/scrum-bug-wi-form.png" alt="Scrum bug work item form, TFS 2015 or earlier versions" style="border: 1px solid #CCCCCC;" />
</div>

</div>
</div> 

 
### Customize the bug form

You can add fields, change the bug workflow, or customize the bug form. The method you use depends on the process model used by your team project. For details, see [Customize the work tracking experience](../customize/customize-work.md).  

###Fields specific to bugs

When defining a bug, use these fields to capture both the initial issue and ongoing discoveries made when triaging, investigating, fixing, and closing the bug.  

<table>
<tbody valign="top">
<tr>
<th>
<p>Field/tab</p>
</th>
<th>
<p>Usage</p>
</th>
</tr>
<tr>
<td>
[Steps to Reproduce](../track/titles-ids-descriptions.md) (friendly name=Repro Steps)
</td>
<td>
<p>Capture enough information so that other team members can understand the full impact of the problem as well as whether they have fixed the bug. This includes actions taken to find or reproduce the bug and expected behavior. </p>
<p>Describe the criteria that the team should use to verify whether the code defect is fixed. </p>
</td>
</tr>

<tr>
<td>
<p>[System Info](../track/titles-ids-descriptions.md)</p>
</td>
<td>
<p>Information about the software and system configuration that is relevant to the test.</p>
</td>
</tr>

<tr>
	<td><p>[Acceptance Criteria](../track/titles-ids-descriptions.md)  </p></td>
	<td><p>Provide the criteria to be met before the bug or user story can be closed. Before work begins, describe the customer acceptance criteria as clearly as possible. The acceptance criteria can be used as the basis for acceptance tests so that you can more effectively evaluate whether an item has been satisfactorily completed.</p>

</td>
</tr>
<tr>
<td>
<p>[Found In Build](../track/build-test-integration.md)</p>
<p>[Integrated in Build](../track/build-test-integration.md)</p>
</td>
<td>
<p>When Test Manager creates bugs, it automatically populates **System Info** and **Found in Build** with information about the software environment and build where the bug occurred. To learn more about defining the software environments, see [Test different configurations](../../test/manual-exploratory-testing/test-different-configurations.md).</p>
<p>When you resolve the bug, use **Integrated in Build** to indicate the name of the build that incorporates the code that fixes the bug. </p>
<p>**On-premises TFS only:** To access a drop-down menu of all builds that have been run, you can update the ```FIELD``` definitions for Found in Build and Integrated in Build to reference a global list. The global list is automatically updated with each build that is run. To learn more, see [Query based on build and test integration fields](../track/build-test-integration.md)<. </p>
<p>For information about how to define build names, see [build number format options](../../build/define/options.md). </p>
</td>
</tr>

<tr>
<td>
[Priority](../track/planning-ranking-priorities.md) <sup>1</sup>
</td>
<td>
<p>A subjective rating of the bug as it relates to the business or customer requirements. Priority indicates the order in which code defects should be fixed. You can specify the following values:</p>
<ul>
  <li>
      **1**: Product cannot ship without the successful resolution of the work item, and it should be addressed as soon as possible.
  </li>
  <li>
      **2**: Product cannot ship without the successful resolution of the work item, but it does not need to be addressed immediately.
  </li>
  <li>
      **3**: Resolution of the work item is optional based on resources, time, and risk.
  </li>
</ul>
</td>
</tr>

<tr>
<td>
[Severity](../track/planning-ranking-priorities.md) <sup>1</sup>
</td>
<td>
A subjective rating of the impact of a bug on the project or software system. For example: If clicking a remote link (a rare event) causes an application or web page to crash (a severe customer experience), you might specify Severity = 2 - High and Priority = 3.  Allowed values and suggested guidelines are:
<ul>
  <li>
      **1 - Critical**: Must fix. A defect that causes termination of one or more system components or the complete system, or causes extensive data corruption. And, there are no acceptable alternative methods to achieve required results.
  </li>
  <li>
      **2 - High**: Consider fix. A defect that causes termination of one or more system components or the complete system, or causes extensive data corruption. However, an acceptable alternative method exists to achieve required results.
  </li>
  <li>
      **3 - Medium**: (Default) A defect that causes the system to produce incorrect, incomplete or inconsistent results.
  </li>
  <li>
      **4 - Low**: A minor or cosmetic defect that has acceptable workarounds to achieve required results. 
  </li>
</ul>
</td>
</tr>

</tbody>
</table>  
 
<sup>1</sup> To change the menu selection or pick list, see [Customize the work tracking experience](../customize/customize-work.md). The customization method depends on the process model used by your team project. 

For information about fields specific to the CMMI process, see [Bugs, issues, and risks field reference](../guidance/cmmi/guidance-bugs-issues-risks-field-reference-cmmi.md). For information about all other fields, see [Work item field index](../guidance/work-item-field.md). 


Add and review comments made about the work being performed by going to the discussion section. 


>[!TIP]
>Use the [Discussion section](add-work-items.md#discussion) to add and review comments made about the work being performed to resolve the bug. This feature is only available from the new web form.   


### Capture bugs using test tools

You can create bugs during test sessions using one of the following tools: 
- **Test & Feedback extension**: see [Exploratory testing with the Test & Feedback extension](../../test/manual-exploratory-testing/connected-mode-exploratory-testing.md)   
- **Test Runner**: see [Update an existing bug while using Test Runner](https://msdn.microsoft.com/library/dd286731.aspx).  


<a id="triage"> </a>
##Triage bugs  
 
Once you've started coding and testing, you'll want to hold periodic triage meetings to review and prioritize your bugs. How frequently you meet and for how long depends on your situation. Typically, the project owner runs the bug triage meetings, and team leads, business analysts and other stakeholders who can speak about specific project risks attend them.  

The project owner can create or open a shared query for new and reopened bugs to generate a list of bugs to be triaged.  

###Bug queries
Open a shared query or [use the query editor](../track/using-queries.md) to create useful bug queries, such as the following:
- Active bugs by priority (```State <> Done``` or ```State <> Closed```)
- In Progress bugs (```State = Committed``` or ```State = Active```)
- Bugs to fix for a target release (```Tags Contains RTM```)
- Recent bugs - bugs opened within the last 3 weeks (```Created Date > @Today-21```) 

Once you have the queries of interest to your team, you can [create status or trend charts](../../Report/charts.md) that you can also pin to a [team dashboard](../../Report/dashboards.md).  

###Triage mode in query results

From the query results page, you can quickly move up and down within the list of bug work items using the up and down arrows. As you review each bug, you can assign it, add details, or set priority. 

<img src="_img/scrum-active-bug-triage-mode-co.png" alt="Triage query results" style="border: 1px solid #CCCCCC;" />


<a id="track"> </a>
###Track bugs as requirements or tasks 

Many Scrum teams treat bugs the same as any backlog item or user story. Others see bugs as work that belongs to implementing a story, and therefore treat them as a task.  

Bugs, like PBIs and user stories, represent work that needs doing. So, should you track your bugs along with other items in the product backlog items or as tasks linked to those backlog items? How does your team estimate work?  

Based on how your team answers these questions, they can choose how they want to track bugs from one of these three choices. To change the team setting, see [Show bugs on backlogs and boards](../customize/show-bugs-on-backlog.md). 

<table>
<tbody valign="top">
<tr>
<th>Bug tracking options</th>
<th>Choose this option </th>
</tr>
<tr>
<td>
<p>**Bugs appear as part of the product backlog**</p>
<p>Bugs appear on backlogs and boards with requirements </p> 
</td>
<td>
<p>When your team or product owner wants to manage bugs similar to requirements. Bugs can be added and prioritize along with PBIs or user stories on the [product backlog](create-your-backlog.md). </p>
<p>With this option, the team can estimate the effort or story points for bugs which are then included against team velocity and cumulative flow. </p> 
</td>
</tr>
<tr>
<td>
<p>**Bug backlog is separate from the product backlog** </p>
<p>Bugs appear on backlogs and boards with tasks </p>
</td>
<td>
<p>When your team links bugs to PBIs or user stories, and manages them similar to tasks.</p> 
<p>With this option, the team can estimate remaining work for bugs and track progress against the sprint capacity and sprint burndown.</p>
</td>
</tr>
<tr>
<td>
<p>**Bugs don't appear on backlogs and boards** </p>
</td>
<td>
<p>When your team manages bugs separate from requirements or tasks, or a different team is tasked with addressing bugs. </p> 
</td>
</tr>
</tbody>
</table>  

###Assign bugs to a sprint  
Once bugs have been triaged, it's time to assign them to a sprint to get fixed. By addressing a set of bugs to get fixed every sprint, your team can keep the total number of bugs to a reasonable size.  

When bugs appear on the product backlog, you can [assign bugs to sprints in the same way you do PBIs and user stories](../scrum/sprint-planning.md) during your sprint planning sessions. 

When bugs are treated as tasks, they're often automatically linked to a PBI or user story. So, assigning their parent PBI or user story to a sprint will [assign the linked bugs to the same sprint as the parent PBI or user story](../scrum/task-board.md) during your sprint planning sessions. 
 
Your team should consider fixing all bugs found during a sprint when testing a feature in development.  

[!INCLUDE [temp](../_shared/assign-to-sprint.md)]

###Tips for successful triage meetings:  
Fixing bugs represents a trade-off with regards to other work. Use your triage meeting to determine how important fixing each bug is against other priorities related to meeting the project scope, budget, and schedule.  

- Establish the team's criteria for evaluating which bugs to fix and how to assign priority and severity. Bugs associated with features of significant value (or significant opportunity cost of delay), or other project risks, should be assigned higher priority and severity. Store your triage criteria with other team documents and update as needed.
- Use your triage criteria to determine which bugs to fix and how to set their State, Priority, Severity, and other fields. 
- Adjust your triage criteria based on where you are in your development cycle. Early on, you may decide to fix most of the bugs that you triage. However, later in the cycle, you may raise the triage criteria (or bug bar) to reduce the number of bugs that you need to fix.  
- Once you've triaged and prioritized a bug, assign it to a developer for further investigation and to determine how to implement a fix. 

<a id="fix-resolve-close">  </a>
##Fix, resolve and close bugs (update status) 

Bug fixes that involve more than a single section of code may require significant regression testing and may involve other team members. Record any conversations that relate to assessing the risk of bug fixes in the bug work item history.


###Bug workflow lifecycle  

Once you fix a bug, you should update its workflow State. State choices vary depending on the process you use&mdash;[Scrum](../guidance/scrum-process.md), 
[Agile](../guidance/agile-process.md), or [CMMI](../guidance/cmmi-process.md). The following images illustrate the workflow lifecycle defined for the default bug workflow for the Agile, Scrum, and CMMI processes. 

| Agile | Scrum | CMMI | 
|------------|------------|-----------| 
| ![Bug workflow states, Agile process template](../guidance/_img/ALM_PT_Agile_WF_Bug.png) | ![Bug workflow states, Scrum process template](../guidance/_img/ALM_PT_Scrum_WF_Bug.png) |  ![Bug workflow states, CMMI process template](../guidance/_img/ALM_PT_CMMI_WF_Bug.png) |  

For Scrum bugs, you simply change the State from Committed (similar to Active) to Done. For Agile and CMMI, you first resolve the bug, indicating that the bug has been fixed. Typically, the person who created the bug then verifies the fix and updates the State from Resolved to Closed. If more work has been found after a bug has been resolved or closed, it can be reactivated by setting the State to Committed or Active. 


###Verify a fix 
To verify a fix, a developer or tester should attempt to reproduce the bug and look for additional unexpected behavior. If necessary, they should reactivate the bug.

When verifying a bug resolution, you may find that the bug was not completely fixed or you may disagree with the resolution. In this case, discuss the bug with the person who resolved it, come to an agreement, and possibly reactivate the bug. If you reactivate a bug, include the reasons for reactivating the bug in the bug description.

[!INCLUDE [temp](../_shared/verify-bug-test-runner.md)]

<a id="close">  </a>
###Close a bug  
You close a bug once it's verified as fixed. However, you may also close a bug for one of these reasons:

- Deferred - deferring a fix until the next product release
- Duplicate - bug has already been reported, you can link each bug with the Duplicate/Duplicate of link type and close one of the bugs  
- As Designed - feature works as designed
- Cannot Reproduce - tests prove that the bug can't be reproduced
- Obsolete - the bug's feature is no longer in the product
- Copied to Backlog - a PBI or user story has been opened to track the bug

It's always a good idea to describe any additional details for closing a bug in the Discussion field (new web form) or the History field (old web form) to avoid future confusion as to why the bug was closed. 

## Monitor bug status, assignments, and trends  

You can track the bug status, assignments, and trends using queries which you can then chart and add to a dashboard. 

For example, here are two examples showing active bugs by priority trend and a snapshot of bugs by priority.

![Bug trend chart from query](_img/manage-bugs-trend-chart.png)   ![Bug snapshot by priority](_img/manage-bugs-priority-chart.png)   

To learn more about queries, charts, and dashboards; see [Create managed queries](../track/example-queries.md), [Charts](../../report/charts.md), and [Dashboards](../../report/dashboards.md).   

###Pre-defined SQL Server bug reports (on-premises TFS only)

<!---
If you work from Team Services, you can use Power BI to access [bug reports and dashboards](../../report/powerbi/report-on-vso-with-power-bi-vs.md).
-->

If you work from an on-premises TFS and you have SQL Server Analysis Services and SQL Server Reporting Services configured for your team project, you have access to the following reports (Agile and CMMI processes only).  

- [Bug Status](../../report/sql-reports/bug-status-report.md)  
- [Bug Trends](../../report/sql-reports/bug-trends-report.md)  
- [Reactivations](../../report/sql-reports/reactivations-report.md)  

To learn how to add SQL Server reports for a team project, see [Add reports to a team project](../../report/admin/add-reports-to-a-team-project.md).  

##Related notes

To track your bugs and integrate with other resources available to you, see these topics: 

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Manage</p>
<ul style="padding-left:10px">
 <li style="margin-bottom:2px">[Add work items](../backlogs/add-work-items.md)</li>
 <li style="margin-bottom:2px">[Copy or clone a work item](copy-clone-work-items.md#copy-clone)</li>
 <li style="margin-bottom:2px">[Move, change type, or delete work items](remove-delete-work-items.md)</li>
 <li style="margin-bottom:2px">[Pre-populate fields using a template](../productivity/work-item-template.md)</li>
 <li style="margin-bottom:2px">[Integrate with Git](../backlogs/connect-work-items-to-git-dev-ops.md)</li>
 <li style="margin-bottom:2px">[Productivity tips](../productivity/productivity-tips.md)</li>
 <li style="margin-bottom:2px">[Work item field index](../guidance/work-item-field.md)</li>
</ul>
</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Track</p>
<ul style="padding-left:20px">
<li style="margin-bottom:2px">[Queries (work items)](../track/using-queries.md)</li>
 <li style="margin-bottom:2px">[Charts](../../Report/charts.md)</li>
 <li style="margin-bottom:2px">[Dashboards](../../Report/dashboards.md)</li>
 <li style="margin-bottom:2px">[Share work plans](../track/share-plans.md)</li>
 <li style="margin-bottom:2px">[Follow a work item or pull request](../../collaborate/follow-work-items.md)</li>
 <li style="margin-bottom:2px">[Alerts](../track/alerts-and-notifications.md) </li> 
 <li style="margin-bottom:2px">[Tag work items](../track/add-tags-to-work-items.md)</li>
 <li style="margin-bottom:2px">[History & audit](../track/history-and-auditing.md)</li>
</ul>
</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Integrate & Test</p>
<ul style="padding-left:20px">
<li style="margin-bottom:2px">[UserVoice](../../marketplace/integrate/service-hooks/services/uservoice.md)</li>
<li style="margin-bottom:2px">[Zendesk](../../marketplace/integrate/service-hooks/services/zendesk.md)</li>
<li style="margin-bottom:2px">[Developer testing tools scenarios and capabilities](https://docs.microsoft.com/visualstudio/test/developer-testing-scenarios)</li>
<li style="margin-bottom:2px">[Run tests for desktop apps](../../test/manual-exploratory-testing/getting-started/run-manual-tests.md#run-desktop)</li> 
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>


###Manage your technical debt 

Consider managing your bug bar and technical debt as part of your team's overall set of continuous improvement activities. You may find these additional resources of interest: 

- [Good and Bad Technical Debt (and how TDD helps)](http://blog.crisp.se/2013/10/11/henrikkniberg/good-and-bad-technical-debt) by Henrik Kniberg  
- [Managing Technical Debt](http://www.infoq.com/articles/managing-technical-debt) posted by Sven Johann & Eberhard Wolff  



>###Tips from the trenches: [Agile Bug Management: Not an Oxymoron](https://visualstudiomagazine.com/articles/2012/10/12/agile-bug-management.aspx)  
>*by Gregg Boer, Principal Program Manager, Visual Studio Cloud Services at Microsoft*  
>#### Every Sprint, Address any Known Bug Debt 
>Every sprint, the team looks at any bugs remaining in the bug backlog and allocates capacity to get that known set of bugs down to zero, or near-zero. Whether this is one day, one week or the entire sprint, they fix the bugs first. Bugs found later, within the sprint, are not considered part of that initial commitment. Unless they're very high priority, they're put on the bug backlog for the next sprint.
>
>Many teams work in a commitment-based organization, where management places a high value on a team's ability to meet their commitments. Doing capacity planning against a known set of bugs makes sprint planning more deterministic, increasing their chance to meet commitments. Any new bugs discovered during the sprint are not a part of the initial commitment, and will be tackled next sprint.>
 >
>#### Managing Bug Debt across an Enterprise 
>An organization transitioning to a culture where debt is continually eliminated likely is dealing with the following question: How do you get teams to reduce their bug count without telling them exactly what to do? Leadership wants the team to change, yet gives the team autonomy to determine how they change. One option is to use a bug cap.
>
>For example, consider a bug cap of three bugs per engineer. This means a team of 10 people should not have more than 30 bugs in its bug backlog. If the team is over its cap, it's expected to stop work on new features and get under the bug cap. A team is expected to be under its cap at all times, but the team decides how it wants to do that. The bug cap ensures that bug debt is never carried for too long, and the team can learn from the mistakes that causes the bugs to be injected in the first place. 
>
>Remember that the bug cap represents the bugs in the bug backlog. It does not include bugs found and fixed within the sprint in which a feature is developed. Those bugs are considered undone work, not debt. 


While bugs contribute to technical debt, they may not represent all debt. 

Poor software design, poorly written code, or short-term fixes in place of best, well-designed solutions can all contribute to technical debt. Technical debt reflects extra development work that arises from all these problems. 

You need to track work to address technical debt as PBIs, user stories, or bugs. To track a team's progress in incurring and addressing technical debt, you'll want to consider how to categorize the work item and the details you want to track. You can [add tags to any work item to group it into a category of your choosing](../track/add-tags-to-work-items.md). 

<!---
###Use SonarQube to help manage technical debt

SonarQube provides a way of automatically measuring some technical debt. SonarQube finds important violations of best coding practices. You implement Sonar to ensure that developers follow important code metrics like appropriate class and method size or low cyclomatic complexity (a quantitative measure of the number of linearly independent paths through a program's source code).  

By integrating your on-premises TFS with a SonarQube server, you can get the following data:  
Results of .Net and JavaScript code analysis  
Code clone analysis  
Code coverage data from tests  
Metrics for .Net and JavaScript  

See [Technical Debt Management: Announcing SonarQube integration with MSBuild and Team Build](http://blogs.msdn.com/b/visualstudioalm/archive/2015/05/05/technical-debt-management-announcing-sonarqube-integration-with-msbuild-and-team-build.aspx) for details.
 
-->


