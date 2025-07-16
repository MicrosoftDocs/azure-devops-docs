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
ms.date: 03/03/2025
---

# About requesting and providing feedback 
 
[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In Azure DevOps, gathering feedback is essential for improving your software applications. You can request feedback using one of two tools: the Test & Feedback extension or the Request feedback link accessible from a dashboard. With these tools, you can capture valuable insights from stakeholders and team members, helping you identify issues and areas for improvement.

> [!NOTE]  
> This article is about using Azure DevOps feedback tools. For more information about providing feedback about Azure DevOps, see [Provide product and content feedback](../../user-guide/provide-feedback.md?bc=%252fazure%252fdevops%252fproject%252ffeedback%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fproject%252ffeedback%252ftoc.json). 

## Learn about the Test & Feedback extension

Using the Test & Feedback extension is a simple, three-step process:

![Schematic showing process steps Capture, Create, Collaborate](../../test/media/perform-exploratory-tests/getstarted-05.png)

## 1. Capture your findings

- Capture notes, screenshots with annotations, and screen recordings to quickly and easily describe your findings and highlight issues.
- Capture rich data automatically in the background, such as user actions as an image action log, page load data, and system information about the browser, operating system, memory, and more. This data can serve as a starting point for debugging.

## 2. Create work items

- Create work items such as bugs, tasks, and test cases directly from the extension.
- Include captured findings automatically in the work item.
- File a bug to report an issue with the product, create a task that indicates a new work requirement, or create test cases for scenarios discovered during exploration.

## 3. Collaborate with your team

- Share your findings by exporting your session report in Standalone mode.
- Connect to Azure DevOps for a fully integrated experience, including exploring user stories and backlog items, simplified tracking, and triaging of bugs and tasks, and managing feedback requests in one place.

As users perform exploratory testing, you can [gain insights from the sessions](../../test/insights-exploratory-testing.md). View completed exploratory sessions and derive meaningful insights across all sessions. Achieve end-to-end traceability with a breakdown of the work items created, the work items explored and not explored, session owners, and more.
  
For more information, see the following articles:  

- [Install the Test & Feedback extension](../../test/request-stakeholder-feedback.md?toc=/azure/devops/project/toc.json)
- [Request stakeholder feedback](../../test/request-stakeholder-feedback.md?toc=/azure/devops/project/toc.json)
- [Provide stakeholder feedback](../../test/provide-stakeholder-feedback.md?toc=/azure/devops/project/toc.json)  

## Use the Microsoft Feedback client 

Download and install the Visual Studio 2015 Microsoft Feedback client on your desktop. This tool supports similar features for capturing findings as the Test & Feedback extension but doesn't support creating work items. You can download the tool from [Feedback Client for Microsoft Visual Studio Team Foundation Server 2015](https://www.microsoft.com/download/details.aspx?id=48142).
  
For more information, see the following articles:  

- [Get feedback (Work tracking)](/previous-versions/azure/devops/project/feedback/get-feedback) 
- [Provide feedback with the Feedback client](/previous-versions/azure/devops/project/feedback/give-feedback)  
- [Set feedback permissions](/previous-versions/azure/devops/project/feedback/give-permissions-feedback)  

## Related articles

- [Grant reviewers permissions to provide feedback](/previous-versions/azure/devops/project/feedback/give-permissions-feedback)
- [Set default permissions and access for collaboration tools](../wiki/manage-readme-wiki-permissions.md)
- [Provide feedback and get support](../../user-guide/provide-feedback.md)
