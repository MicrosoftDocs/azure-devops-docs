---
title: Data available in Power BI | VSTS
description: Learn about what data is available in the Power BI connector for Visual Studio Team Services (VSTS)  
ms.technology: vs-devops-reporting
ms.prod: vs-devops-alm
ms.assetid: 94233019-F353-434C-9D90-6FD736CC818E  
ms.manager: douge
ms.author: kaelli
ms.date: 03/02/2017
---

#What is available in the Power BI Content Pack for VSTS

<b>VSTS</b>
[!INCLUDE [temp](../_shared/content-pack-deprecation.md)]

Power BI Content Pack for VSTS gathers data from different feature areas and combines them into a single coherent analytical model.

##Currently available data  
<table>
    <tr>
        <th>Data</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Work Items</td>
        <td>Current state, [trend data](create-trend-charts.md), and [rollup](create-rollup-charts.md) </td>
    </tr>
    <tr>
        <td>Builds</td>
        <td>XAML builds including build requests, queues and details</td>
    </tr>
    <tr>
        <td>Source Control - Git</td>
        <td>Commits, repositories, pull requests</td>
    </tr>
    <tr>
        <td>Source Control - TFVC</td>
        <td>Changesets, files, file changes and branches</td>
    </tr>
</table>
 

##Work with the data model
The data model has several different sets of tables related to main feature areas.
These tables are described here along with their basic measures.

###General purpose
<table width="100%">
    <tr width="25%">
        <th>Table</th>
        <th>Description</th>
    </tr>
    <tr width="75%">
        <td>Dataset&#160;details</td>
        <td>Contains information on when the data in Power BI was last updated and the version of the VSTS connector data model being used.</td>
    </tr>
    <tr>
        <td>Dates</td>
        <td>Relates to pull requests (Create Timestamp) and work items (Created Timestamp).</td>
    </tr>
        <tr>
        <td>Projects</td>
        <td>Allows you to determine which project code check-ins and pull requests happened as well as serving as a filter against all work items.</td>
    </tr>
    <tr>
        <td>Users</td>
        <td>Detailed user information for use with work items, pull requests, changesets and commits.</td>
    </tr>
</table>


###Team Foundation version control

<table width="100%">
    <tr >
        <th width="20%">Table</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td>Branches</td>
        <td>Information on branches, including branch count.</td>
    </tr>
    <tr>
        <td>Changesets</td>
        <td>Information on changesets including (but not limited to) measures such as the count of changesets, changesets in the last 30 days, count of changesets by a given author.</td>
    </tr>
    <tr>
        <td>File Changes</td>
        <td>The type of change made against the file (add, change, delete) and associated measures.</td>
    </tr>
    <tr>
        <td>Files</td>
        <td>File path and extension information on checked-in files.</td>
    </tr>
</table>

###Git

<table width="100%">
    <tr >
        <th width="20%">Table</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td>Commits</td>
        <td>Information on commits such as the number of files added/deleted/edited, number of projects with commits and commit counts.</td>
    </tr>
    <tr>
        <td>Pull Requests</td>
        <td>Information on pull requests including age, count, authors and status.</td>
    </tr>
    <tr>
        <td>Repositories</td>
        <td>Information on the repos per project including name, count and by growth and commits.</td>
    </tr>
</table>

###XAML Builds

<table width="100%">
    <tr >
        <th width="20%">Table</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td>Xaml Build Definitions</td>
        <td>Build definitions including how the build is triggered.</td>
    </tr>
    <tr>
        <td>Xaml Build Queues</td>
        <td>Information build queues including if they are enabled and their status.</td>
    </tr>
    <tr>
        <td>Xaml Build Requests</td>
        <td>Information on build requests including build duration, percentiles, number of builds, how long the builds were queued for and retry reasons if the build failed.</td>
    </tr>
    <tr>
        <td>Xaml Builds</td>
        <td>All of the details regarding a build. This includes builds that failed and passed, error codes and messages, build quality and build durations.</td>
    </tr>
</table>

###Work Items
All individual work item tables have the following measures:

* Count of work items. This column name is the same as the table name. For example the Bugs table has a measure called "Bugs".  


Other tables may include measures specific to that work item type.

<table width="100%">
    <tr >
        <th width="20%">Table</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td>Parent Bugs</td>
        <td>Contains information relating to bugs and includes Effort, Original Effort, Remaining Work, Size and Story Points values.</td>
    </tr>
    <tr>
        <td>Parent Change Requests</td>
        <td>Contains information relating to Change requests and includes the Original Estimate value.</td>
    </tr>
    <tr>
        <td>Parent Features</td>
        <td>Contains information relating to Features and includes Business Value, Days Past Target and Days Until Target values.</td>
    </tr>


    <tr>
        <td>Parent Issues</td>
        <td>Contains information relating to Issues and includes the Original Estimate value.</td>
    </tr>

    <tr>
        <td>Parent Product Backlog Items</td>
        <td>Contains information relating to Product Backlog Items and includes Business Value and Effort values.</td>
    </tr>
    <tr>
        <td>Parent Requirements</td>
        <td>Contains information relating to Requirements and includes Original Estimate and Size values.</td>
    </tr>

    <tr>
        <td>Parent User Stories</td>
        <td>Contains information relating to User Stories and includes the Story Points value.</td>
    </tr>
    <tr>
        <td>Work Items</td>
        <td>This table contains all work items, regardless of type. Work items in any table can be filtered or sub-divided by values in this table. The Work Items count in this table is an overall count and can be broken down using the Work Item Type field. This table contains all of the System.* fields.</td>
    </tr>
</table>

##Related notes  

- [Create rollup charts](create-rollup-charts.md)
- [Create trend charts](create-trend-charts.md)
