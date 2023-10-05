---
title: Learn about requesting and providing feedback about your software applications
titleSuffix: Azure DevOps 
description: Learn about requesting and providing feedback about your software applications in Azure DevOps 
ms.subservice: azure-devops-feedback
ms.topic: overview
ms.assetid:  
ms.author: chcomley
author: chcomley 
monikerRange: '<= azure-devops'
ms.date: 04/04/2022
---

# About requesting and providing feedback 
 
[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can request feedback using one of two tools, through the Test & Feedback extension or through the Request feedback link you access from a dashboard. 

> [!NOTE]  
> This article is about using Azure DevOps feedback tools. To provide feedback about Azure DevOps, see [Provide product and content feedback](../../user-guide/provide-feedback.md?bc=%252fazure%252fdevops%252fproject%252ffeedback%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fproject%252ffeedback%252ftoc.json). 

## About the Test & Feedback extension

Using the Test & Feedback extension is a simple, three step process:

![Schematic showing process steps Capture, Create, Collaborate](../../test/media/perform-exploratory-tests/getstarted-05.png)
 
* **Capture your findings** quickly and easily using the tools in the extension. 
  Capture notes, screenshots with annotations, and screen recordings 
  to describe your findings and highlight issues. Additionally, in 
  the background the extension automatically captures rich data such
  as user actions as an image action log, page load data,
  and system information about the browser, operating system, memory,
  and more that can serve as a starting point for debugging. 

* **Create work items** such as bugs, tasks, and test cases directly from 
  the extension. The captured findings automatically become a part of the work item. 
  Users can file a bug to report an issue with the product, or create a task that
  indicates a new work requirement. The extension can also be used to 
  create test cases for scenarios discovered during exploration. 

* **Collaborate with your team** by sharing your findings. 
  Export your session report in Standalone mode, or connect to Azure DevOps or
  Team Foundation Server (2015 or later) for a fully integrated experience
  including exploring user stories and backlog items, simplified tracking and triaging of 
  bugs and tasks, and managing feedback requests in one place.

As users perform exploratory testing, you can
[get insights from the sessions](../../test/insights-exploratory-testing.md). View completed exploratory sessions and derive meaningful
insights across all sessions. Get end-to-end traceability such as a breakdown 
of the work items created, the work items explored and not explored, session owners,
and more.
  
To learn more, see the following articles:  

- [Install the Test & Feedback extension](../../test/request-stakeholder-feedback.md?toc=/azure/devops/project/toc.json)
- [Request stakeholder feedback](../../test/request-stakeholder-feedback.md?toc=/azure/devops/project/toc.json)
- [Provide stakeholder feedback](../../test/provide-stakeholder-feedback.md?toc=/azure/devops/project/toc.json)  


## Microsoft Feedback client 

The Visual Studio 2015 Microsoft Feedback client is a downloadable tool that you install on your desktop. It supports similar features for capturing findings to those provided by the Test & Feedback extension. It doesn't support creating work items. You can download the tool from [Feedback Client for Microsoft Visual Studio Team Foundation Server 2015](https://www.microsoft.com/download/details.aspx?id=48142).
  
To learn more, see the following articles:  

- [Get feedback (Work tracking)](/previous-versions/azure/devops/project/feedback/get-feedback) 
- [Provide feedback with the Feedback client](/previous-versions/azure/devops/project/feedback/give-feedback)  
- [Set feedback permissions](/previous-versions/azure/devops/project/feedback/give-permissions-feedback)  

## Related articles

- [Give reviewers permissions to provide feedback](/previous-versions/azure/devops/project/feedback/give-permissions-feedback)
- [Default permissions and access set for collaboration tools](../wiki/wiki-readme-permissions.md) 
- [Give us feedback, get support](../../user-guide/provide-feedback.md) 
