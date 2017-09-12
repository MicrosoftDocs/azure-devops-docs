---
title: Organize and view queries | VSTS & TFS
description: Manage your queries by using favorites and folders 
ms.prod: vs-devops-alm
ms.technology: vs-devops-wit
ms.assetid: 486A876F-A04F-4DC7-829C-94E88BB9B7E1 
ms.topic: get-started-article
ms.manager: douge
ms.author: kaelli
ms.date: 06/22/2017  
---


# Triage work items  
[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

!!! WORK IN PROGRESS !!! 

Using a work item query you can review and update a set of work items. Oftentimes team use the triage mode for a query to perform the following tasks: 
- Set the priority of a bug or work item
- Assign a work item to a sprint or team member 
- Add details to the description, acceptance criteria, or repo steps 
- Link related work items 
- Update the status of work items 




Query triage mode. 

<a id="triage"> </a>
##Triage bugs  
 
Once you've started coding and testing, you'll want to hold periodic triage meetings to review and prioritize your bugs. How frequently you meet and for how long depends on your situation. Typically, the project owner runs the bug triage meetings, and team leads, business analysts and other stakeholders who can speak about specific project risks attend them.  

The project owner can create or open a shared query for new and reopened bugs to generate a list of bugs to be triaged.  

###Bug queries
Open a shared query or [use the query editor](using-queries.md) to create useful bug queries, such as the following:
- Active bugs by priority (```State <> Done``` or ```State <> Closed```)
- In Progress bugs (```State = Committed``` or ```State = Active```)
- Bugs to fix for a target release (```Tags Contains RTM```)
- Recent bugs - bugs opened within the last 3 weeks (```Created Date > @Today-21```) 

Once you have the queries of interest to your team, you can [create status or trend charts](../../Report/charts.md) that you can also pin to a [team dashboard](../../report/dashboards.md).  

###Triage mode in query results

From the query results page, you can quickly move up and down within the list of bug work items using the up and down arrows. As you review each bug, you can assign it, add details, or set priority. 

<img src="../backlogs/_img/scrum-active-bug-triage-mode-co.png" alt="Triage query results" style="border: 2px solid #C3C3C3;" />


##Related notes 

- [Set query permissions](set-query-permissions.md) 

