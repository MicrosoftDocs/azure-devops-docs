---
title: Review team activities to support useful reports
titleSuffix: TFS
description: Ensure basic operations are performed by team members to generate useful SQL Server reports when working in Team Foundation Server    
ms.assetid: 46456FBF-EECC-4096-9A98-3A9457F97EB2  
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: "<= azure-devops-2019" 
ms.date: 11/19/2018
---

# Review team activities to support useful reports 

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]


> [!IMPORTANT]
>**Feature availability**: You can only add a report server to an on-premises TFS.  If you're using Azure DevOps, adding a report server isn't a supported option, instead, you can use [PowerBI](../powerbi/overview.md).

This is the fourth task in the four-task sequence to add reports to your team project. To generate useful reports, team members must perform certain tasks. this article summarizes those tasks.     

[![Add a report server](_img/step-1-add-a-report-server.png)](add-a-report-server.md)
[![Upload reports](_img/step-2-upload-reports.png)](upload-reports.md)
[![Grant permissions](_img/step-3-grant-permissions.png)](grant-permissions-to-reports.md) 
[![Review team activities](_img/step-4-review-team-activities.png)](review-team-activities-for-useful-reports.md)


Now that you've uploaded reports, how do you use them to track progress, gain insight, and improve processes?

First, make sure your team is performing the activities that create the data that these reports use. Your team is probably performing most of these activities already.

Here's a summary of the reports that TFS provides and the team activities that are associated with them. Over time, you can use these reports to see trends and identify which practices and processes require more attention to deliver desired results.

## Monitor code quality
Build reports track the quality of software under development. By defining tests to run automatically as part of each build definition and instrumenting tests to gather code coverage data, you can gain insight about the quality of the builds, tests, and code. 

<table>
<tr valign="top">
<td>
<b>Build and test activities</b> 
<ol>
<li><a href="../../pipelines/agents/agents.md" data-raw-source="[Configure a build system](../../pipelines/agents/agents.md)">Configure a build system</a></li>
<li><a href="../../pipelines/get-started-designer.md" data-raw-source="[Get started with CI/CD](../../pipelines/get-started-designer.md)">Get started with CI/CD</a></li>
<li><a href="../../pipelines/ecosystems/dotnet-core.md#run-your-tests" data-raw-source="[Run tests in your build process](../../pipelines/ecosystems/dotnet-core.md#run-your-tests)">Run tests in your build process</a></li>
<li>(Optional) <a href="https://msdn.microsoft.com/library/ms181734.aspx" data-raw-source="[Rate completed builds](https://msdn.microsoft.com/library/ms181734.aspx)">Rate completed builds</a> to populate the Build Quality dimension.</li>
</ol>
</td>
<td>
<b>Build reports</b>
<ul>
    <li><a href="../sql-reports/build-quality-indicators-report.md" data-raw-source="[Build Quality Indicators](../sql-reports/build-quality-indicators-report.md)">Build Quality Indicators</a> (Agile and CMMI only)</li>
    <li><a href="../sql-reports/build-success-over-time-report.md" data-raw-source="[Build Success Over Time](../sql-reports/build-success-over-time-report.md)">Build Success Over Time</a> (pictured)</li>
    <li><a href="../sql-reports/build-summary-report.md" data-raw-source="[Build Summary](../sql-reports/build-summary-report.md)">Build Summary</a></li>
</ul>
    </td>
</tr>
</table>

> [!IMPORTANT]  
> Build reports are only applicable for XAML builds, which are deprecated for TFS 2018 and later versions. If your build process isn't based on XAML builds, this report and the TFS Warehouse for builds won't yield any meaningful data.  


**Sample build success over time report**  

![Sample build summary report](_img/IC665009.png)  

## Monitor progress
Project management reports provide insight into how much work the team is tackling within a sprint or release, and the rate of their progress. By linking work items and updating specific fields as work is performed, you can track the progress of individual stories and be able to more accurately estimate future activities. 

<table width="100%">
<tr valign="top">
<td width="60%">
<b>Work item tracking activities</b>
    <ol>
        <li><a href="../../boards/backlogs/create-your-backlog.md" data-raw-source="[Create the backlog](../../boards/backlogs/create-your-backlog.md)">Create the backlog</a>.
            <ul>
                <li>Create product backlog items and specify the <b>Effort</b> (Scrum).</li>
                <li>Create user stories and specify the <b>Story Points</b> (Agile).</li>
                <li>Create requirements and specify the <b>Size</b> (CMMI).</li>
            </ul>
        </li>
        <li><a href="../../boards/sprints/assign-work-sprint.md" data-raw-source="[Work in sprints](../../boards/sprints/assign-work-sprint.md)">Work in sprints</a>. Assign backlog items to sprints, create tasks and link them to parent backlog items, and assign to a team member.</li>
        <li>
            <a href="../../boards/sprints/task-board.md" data-raw-source="[Update Remaining Work for tasks](../../boards/sprints/task-board.md)">Update Remaining Work for tasks</a>. For Agile and CMMI team projects, update <b>Completed Work</b> as well.
            <br />
            <b>Tip</b>
            <br />
            The only report that references <b>Original Estimate</b> is <a href="../sql-reports/status-on-all-iterations-report.md" data-raw-source="[Status on All Iterations](../sql-reports/status-on-all-iterations-report.md)">Status on All Iterations</a>.
        </li>
        <li>Create test cases and bugs, link them to their parent backlog item, and update their <b>State</b>.</li>
        <li>(Optional) Assign work items to areas to filter reports.</li>
    </ol>
</td>
    <td width="40%">
        <b>Project management (Scrum) reports</b>
        <ul>
    <li><a href="../sql-reports/backlog-overview-scrum.md" data-raw-source="[Backlog Overview (Scrum)](../sql-reports/backlog-overview-scrum.md)">Backlog Overview (Scrum)</a></li>
    <li><a href="../sql-reports/release-burndown.md" data-raw-source="[Release Burndown](../sql-reports/release-burndown.md)">Release Burndown</a></li>
    <li><a href="../sql-reports/sprint-burndown-scrum.md" data-raw-source="[Sprint Burndown (Scrum)](../sql-reports/sprint-burndown-scrum.md)">Sprint Burndown (Scrum)</a></li>
        </ul>
        <b>Project management (Agile and CMMI) reports</b>
        <ul>
    <li><a href="../sql-reports/burndown-and-burn-rate-report.md" data-raw-source="[Burndown and Burn Rate](../sql-reports/burndown-and-burn-rate-report.md)">Burndown and Burn Rate</a></li>
    <li><a href="../sql-reports/remaining-work-report.md" data-raw-source="[Remaining Work](../sql-reports/remaining-work-report.md)">Remaining Work</a></li>
    <li><a href="../sql-reports/requirements-overview-report-cmmi.md" data-raw-source="[Requirements Overview (CMMI)](../sql-reports/requirements-overview-report-cmmi.md)">Requirements Overview (CMMI)</a></li>
    <li><a href="../sql-reports/requirements-progress-report-cmmi.md" data-raw-source="[Requirements Progress (CMMI)](../sql-reports/requirements-progress-report-cmmi.md)">Requirements Progress (CMMI)</a></li>
    <li><a href="../sql-reports/status-on-all-iterations-report.md" data-raw-source="[Status on All Iterations](../sql-reports/status-on-all-iterations-report.md)">Status on All Iterations</a></li>
    <li><a href="../sql-reports/stories-overview-report-agile.md" data-raw-source="[Stories Overview (Agile)](../sql-reports/stories-overview-report-agile.md)">Stories Overview (Agile)</a></li>
    <li><a href="../sql-reports/stories-progress-report-agile.md" data-raw-source="[Stories Progress (Agile)](../sql-reports/stories-progress-report-agile.md)">Stories Progress (Agile)</a></li>
    <li><a href="../sql-reports/unplanned-work.md" data-raw-source="[Unplanned Work](../sql-reports/unplanned-work.md)">Unplanned Work</a></li>
</ul>
    </td>
</tr>
</table>

**Sample stories overview report**  
![Sample stories overview report](_img/IC665011.png)  


## Monitor test plans and bug tracking
Test planning reports support monitoring the test progress and coverage of backlog items or user stories. Bug tracking reports illustrate the team's capacity to find and resolve bugs.

<table width="100%">
<tr valign="top">
<td width="60%">
<b>Test planning and bug tracking activities</b>
<ol>
<li>Define test plans and test cases, and update their <b>State</b> as work progresses.</li>
<li><a href="../../test/run-manual-tests.md" data-raw-source="[Mark the results of each validation step in manual tests](../../test/run-manual-tests.md)">Mark the results of each validation step in manual tests</a> as either passed or failed.</li>
<li><b>Create bugs</b>, specify the <b>Priority</b> and <b>Severity</b>, assign to a team member, and update the <b>State</b>.</li>
<li>(Optional) Assign test cases and bugs to areas and iterations to filter reports.</li>
</ol>
</td>
<td width="40%">
<b>Bug and test reports</b>
<ul>
    <li><a href="../sql-reports/bug-status-report.md" data-raw-source="[Bug Status](../sql-reports/bug-status-report.md)">Bug Status</a></li>
    <li><a href="../sql-reports/bug-trends-report.md" data-raw-source="[Bug Trends](../sql-reports/bug-trends-report.md)">Bug Trends</a></li>
    <li><a href="../sql-reports/reactivations-report.md" data-raw-source="[Reactivations](../sql-reports/reactivations-report.md)">Reactivations</a></li>
    <li><a href="../sql-reports/test-case-readiness-report.md" data-raw-source="[Test Case Readiness](../sql-reports/test-case-readiness-report.md)">Test Case Readiness</a></li>
    <li><a href="../sql-reports/test-plan-progress-report.md" data-raw-source="[Test Plan Progress](../sql-reports/test-plan-progress-report.md)">Test Plan Progress</a></li>
</ul>
</td>
</tr>
</table>

**Sample test plan progress report**   
![Sample test plan progress report](_img/IC665012.png)  

## Q & A
<!-- BEGINSECTION class="md-qanda" -->


### Q: Do reports handle stories and substories or tasks and subtasks?
**A:**  Yes, you can subdivide stories or backlog items as well as tasks, creating a nested hierarchy of both backlog items and tasks. You can nest items several levels deep. If you subdivide a task into subtasks, specify hours only for the subtasks. These hours are rolled up as summary values for the parent task and their parent backlog item. To correct reports you believe are in error, see [Address inaccuracies published for summary values](../sql-reports/address-inaccuracies-published-for-summary-values.md).

### Q: Which reports depend on linking work items?
**A:**  The overview and progress reports depend on linking tasks, test cases, and bugs to backlog items. You must link these items using the parent-child link for tasks and bugs and the Tested By link for test cases.

### Q: Are these reports the same as the charts that appear in the web portal?
 **A:**  While some reports do display similar information, such as sprint burndown and velocity or status on all iterations, these reports are formatted differently and support additional filters. 

### Q: Do you want to create additional product areas or release milestones?
**A:**  See [Modify areas or iterations](../../organizations/settings/set-area-paths.md).

### Q: Do you want to bulk edit work items to assign them to an area, iteration, team member, or priority?
**A:**  See [Bulk modify work items](../../boards/backlogs/bulk-modify-work-items.md).

### Q: Do you want to add a field to track additional data?
**A:**  See [Add or modify a work item field to support reporting](../../reference/xml/add-or-modify-work-item-fields-to-support-reporting.md).  

<!-- ENDSECTION -->
