---
title: Azure DevOps Roadmap
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Azure DevOps feature roadmap
hide_comments: true
---
# Azure DevOps Roadmap

---

\| <a href="https://aka.ms/azuredevops/releasenotes" target="blank">What's New</a>
\| <a href="https://developercommunity.visualstudio.com/spaces/21/index.html" target="blank">Developer Community</a>
\| <a href="https://devblogs.microsoft.com/devops/" target="blank">DevOps Blog</a>
\| <a href="/azure/devops/?view=azure-devops&preserve-view=true" target="blank">Documentation</a> \|

---

## Product roadmap

This feature list is a peek into our roadmap. It identifies some of the significant features we are currently working on and a rough timeframe for when you can expect to see them. It is not comprehensive but is intended to provide some visibility into key investments. At the top you will find a list of our large multi-quarter initiatives and the features that they break down into. Further down you will find the full list of significant features we have planned. 

Each feature is linked to an article where you can learn more about a particular item. These features and dates are the current plans and are subject to change. The Timeframe columns reflect when we expect the feature to be available on Azure DevOps Services; the Server columns reflect when we expect the feature to ship in Azure DevOps Server. 

## Initiatives
### Minimizing the risks associated with credential theft

Azure DevOps supports many different authentication mechanisms, including basic authentication, personal access tokens (PATs), SSH, and Azure Active Directory access tokens. These mechanisms are not created equal from a security perspective, especially when it comes to the potential for credential theft. For example, unintended leakage of credentials like PATs can let malicious actors into Azure DevOps organizations where they can gain access to critical assets like source code, pivot toward supply chain attacks, or even pivot toward compromising production infrastructure.

To minimize the risks of credential theft, we have work in flight covering four distinct areas:
- Strengthening protections and reducing the potential impact of Personal Access Token (PAT) theft by enabling administrators to take advantage of PAT control plane policies.
- Reducing the need for PATs and other stealable secrets by adding support for more secure alternatives.
- Deepening Azure DevOps' integration with Azure Active Directory to better support its various security features.
- Avoiding the need to store production secrets in Azure Pipelines service connections.

We expect this work to be a major focus of our efforts for multiple quarters. 

:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Feature**
   :::column-end:::
   :::column span="":::
      **Area**
   :::column-end:::
   :::column span="":::
      **Service Timeframe**
   :::column-end:::
   :::column span="":::
      **Server Timeframe**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      PAT lifecycle APIs
   :::column-end:::
   :::column span="":::
      Platform
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: CY2022 Q1
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: Azure DevOps Server 2022
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Associate all public APIs with PAT scopes**](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes)
   :::column-end:::
   :::column span="":::
      Platform
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: CY2022 Q4
   :::column-end:::
   :::column span="":::
      2022.1
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Managed Identity and Service Principal support**](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities) 
   :::column-end:::
   :::column span="":::
      Platform
   :::column-end:::
   :::column span="":::
      CY2023 Q1 (Preview)</br>
      CY2023 H2 (GA) 
   :::column-end:::
   :::column span="":::
      N/A
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**OpenID Connect for secret-free deployments from Azure Pipelines**](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/credential-free-pipelines)  
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      CY2023 Q2 (Preview)</br>
      CY2023 H2 (GA) 
   :::column-end:::
   :::column span="":::
      N/A
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Granular scopes for Azure Active Directory OAuth**](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/granular-scopes)  
   :::column-end:::
   :::column span="":::
      Platform
   :::column-end:::
   :::column span="":::
      CY2023 Q1
   :::column-end:::
   :::column span="":::
      N/A
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Policies to disable alternate authentication credentials**](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)  
   :::column-end:::
   :::column span="":::
      Platform
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
   :::column span="":::
      N/A
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Full support for Conditional Access Policies**](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy)   
   :::column-end:::
   :::column span="":::
      Platform
   :::column-end:::
   :::column span="":::
      Future 
   :::column-end:::
   :::column span="":::
      N/A
   :::column-end:::
:::row-end:::

### New Boards Hub

The Azure Boards Hub has been updated to provide a faster user interface, consistency with other parts of the product, and improved accessibility. While the functionality remains the same, but you can expect a new modern design, responsive reflows, improved performance, and accessibility compliance. 

[Learn more](../release-notes/2022/sprint-202-update#new-boards-hubs-now-available-in-public-preview) on enabling the New Boards Hub and providing us with feedback.

Finally, most of the new features will only be available in the New Boards Hub. These investments include:

:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Feature**
   :::column-end:::
   :::column span="":::
      **Area**
   :::column-end:::
   :::column span="":::
      **Service Timeframe**
   :::column-end:::
   :::column span="":::
      **Server Timeframe**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Automated team work item rules](../release-notes/roadmap/2023/work-item-team-rules)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      2023 Q2
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Swimlane rules on Kanban board](../release-notes/roadmap/2023/swimlane-rules)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      2023 Q1
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Work item markdown support](../release-notes/roadmap/2023/work-item-support-for-markdown)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      2023 Q1
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Ability to change link type from Web UI](../release-notes/roadmap/2022/ability-to-change-link)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      2022 Q4
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Maintain backlog hierarchy when filters are applied](../release-notes/roadmap/2022/maintain-backlog-hierarchy)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: 2022 Q4
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Copy work item attachment URL](../release-notes//roadmap/2022/get-attachment-url)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: 2022 Q3
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Move to Column and Move to Swimlane](https://learn.microsoft.com/azure/devops/release-notes/2022/boards/sprint-210-update#move-to-column-and-move-to-swimlane)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: 2022 Q3
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Filter to work item history](../release-notes/2022/sprint-206-update#filter-on-work-item-history)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: 2022 Q3
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Adding Assigned To avatar to child items on cards](../release-notes/2022/sprint-205-update#assigned-to-children-in-kanban-cards)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: 2022 Q3
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Move to position](../release-notes/2022/sprint-203-update#move-to-column-position-on-kanban-board)
   :::column-end:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: 2022 Q2
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::

### Pipelines Agent Node Lifecycle

Azure Pipelines tasks can be authored either in Node or Powershell, and they use the corresponding runner in the Azure Pipelines agent. Node has a regular cadence of releases with Node 16 being the LTS and Node 18 being the current version at the time of this roadmap update. However, the Node runner in the pipelines agent has not kept up with the Node releases. 

As a first step towards that, we recently released a new [Node 16 task runner](../release-notes/2022/sprint-210-update#node-16-task-runner-in-pipeline-agent) for the agent. Over the next few months, we plan to provide improved guidance for the task authors to keep up with Node updates. We do not expect all tasks in the Marketplace to be updated to run on the new version of Node. So, before we deprecate Node 6 and 10 completely on Microsoft hosted and self-hosted pools, we will provide some tools for customers to run the non-upgraded tasks.

:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Feature**
   :::column-end:::
   :::column span="":::
      **Area**
   :::column-end:::
   :::column span="":::
      **Service Timeframe**
   :::column-end:::
   :::column span="":::
      **Server Timeframe**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Node 16 runner along with other runners](../release-notes/2022/sprint-210-update#node-16-task-runner-in-pipeline-agent)
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: 2022 Q3
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Tasks can express compatibility with multiple Node runners](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/migrateNode16.md)
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: 2022 Q3
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [All in-the-box tasks run on Node 16](2022/in-the-box-tasks-on-16.md)
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2022 Q4
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)](2022/node-16-agent.md)
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2022 Q4
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Ability to download and install old runners on self-hosted agents
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2023 Q1
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Ability to run tasks on next available Node version, if targeted version is not available
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2023 Q1
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Removal of Node 6 and 10 from Microsoft hosted pools
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2023 Q1
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Stop shipping Node 6 and Node 10 runners with the agent
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2023 Q1
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::

### Pipelines checks

Customers prefer YAML pipelines over classic for builds (CI). However, for CD, we still have a large number of customers that use classic release management instead of YAML. The primary reason for this is the lack of parity in various CD features between the two. Over the next year and more, we will invest in bridging this gap. As a first step, we will focus on **checks** in the next 6 months. Checks are the primary mechanism in YAML pipelines to gate promotion of a build from one stage to another. Here are the improvements that we will be making in this area:

:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Feature**
   :::column-end:::
   :::column span="":::
      **Area**
   :::column-end:::
   :::column span="":::
      **Service Timeframe**
   :::column-end:::
   :::column span="":::
      **Server Timeframe**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Checks scalability
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2022 Q4
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Auditing for checks  
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2022 Q4
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Sequencing approvals and other checks  
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2023 Q1
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Custom variables in checks  
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2023 Q1
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Service connections in checks  
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      2023 Q1
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      Checks extensibility  
   :::column-end:::
   :::column span="":::
      Pipelines
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
   :::column span="":::
      Future
   :::column-end:::
:::row-end:::

## All features
<table>
    <thead>
        <tr>
            <th>Timeframe</th>
            <th>Feature</th>
            <th>Area</th>
            <th>Server</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="14"><strong>2022 Q4</strong></td>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/maintain-backlog-hierarchy data-raw-source="[Maintain backlog hierarchy when filters are applied](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/maintain-backlog-hierarchy)">Maintain backlog hierarchy when filters are applied</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/get-attachment-url data-raw-source="[copy work item attachment url](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/get-attachment-url)">Copy work item attachment url</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/work-item-emoji-support data-raw-source="[Emoji support in work item tags](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/work-item-emoji-support)">Emoji support in work item tags</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/ability-to-change-link data-raw-source="[Ability to change link type from Web UI](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/ability-to-change-link)">Ability to change link type from Web UI</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/save-comment-improvements data-raw-source="[Save Comment Improvements](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/save-comment-improvements)">Save Comment Improvements</a></td>
        <td>Boards</td>
        <td>Future</td>      
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/credential-free-pipelines data-raw-source="[Credential-free pipelines](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/credential-free-pipelines)">Credential-free pipelines</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/deprecate-node-10 data-raw-source="[Deprecate Node 10 from agent and tasks](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/deprecate-node-10)">Deprecate Node 10 from agent and tasks</a></td>
        <td>Pipelines</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/improvements-in-service-connection data-raw-source="[Improvements in service connection usage history](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/improvements-in-service-connection)">Improvements in service connection usage history</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/net6agent-replace-core31 data-raw-source="[.NET 6 agent to replace .NET Core 3.1 agent](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/net6agent-replace-core31)">.NET 6 agent to replace .NET Core 3.1 agent</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/toggle-to-disable-classic-pipelines data-raw-source="[Toggle to disable classic pipelines](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/toggle-to-disable-classic-pipelines)">Toggle to disable classic pipelines</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes data-raw-source="[Associate all public APIs with PAT scopes](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes)">Associate all public APIs with PAT scopes</a></td>
        <td>Platform</td>
        <td>2022.1</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pull-request-widget data-raw-source="[Pull Request widget to allow for the selection of many repos](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pull-request-widget)">Pull Request widget to allow for the selection of many repos</a></td>
        <td>Reporting</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/rollup-columns-for-query data-raw-source="[Rollup columns for query results](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/rollup-columns-for-query)">Rollup columns for query results</a></td>
        <td>Reporting</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/show-link-with-parent-name" data-raw-source="[Show Link with Parent Name in Query Results Widget](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/show-link-with-parent-name)">Show Link with Parent Name in Query Results Widget</a></td>
        <td>Reporting</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/resume-test-execution data-raw-source="[Pause and resume manual test execution](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/resume-test-execution)">Pause and resume manual test execution</a></td>
        <td>Test Plans</td>
        <td>2022.1</td>
      </tr>
      <tr>
        <td rowspan="9"><strong>2023 Q1</strong></td>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/improvements-in-pipelines-checks data-raw-source="[Improvements in Pipelines checks](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/improvements-in-pipelines-checks)">Improvements in Pipelines checks</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings data-raw-source="[In-product recommendations for secure settings](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings)">In-product recommendations for secure settings</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/track-repo-cloning data-raw-source="[Track repo cloning](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/track-repo-cloning)">Track repo cloning</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/granular-scopes" data-raw-source="[Granular scopes for Azure Active Directory OAuth](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/granular-scopes)">Granular scopes for Azure Active Directory OAuth</a></td>
        <td>Platform</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities" data-raw-source="[Support Azure Managed Identities and Service Principals (Preview)](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Support Azure Managed Identities and Service Principals (Preview)</a></td>
        <td>Platform</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/sort-test-plans data-raw-source="[Pause and resume manual test execution](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/sort-test-plans)">Sort test plans by any column</a></td>
        <td>Test Plans</td>
        <td>2022.1</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/code-coverage-improvements data-raw-source="[Code coverage improvements](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/code-coverage-improvements)">Improved support for code coverage publishing within Azure Pipelines</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown data-raw-source="[Work Item support for Markdown editing](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown)">Work Item support for Markdown editing</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/swimlane-rules data-raw-source="[swimlane rules on kanban board](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/swimlane-rules)">Swimlane rules on Kanban board</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td rowspan="3"><strong>2023 Q2</strong></td>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/credential-free-pipelines data-raw-source="[OpenID Connect for secret-free deployments from Azure Pipelines (Preview)](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/credential-free-pipelines)">OpenID Connect for secret-free deployments from Azure Pipelines (Preview)</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities" data-raw-source="[Support Azure Managed Identities and Service Principals (GA)](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Support Azure Managed Identities and Service Principals (GA)</a></td>
        <td>Platform</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-team-rules data-raw-source="[Automate rules for updating work items](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-team-rules)">Automated team work item rules</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td rowspan="10"><strong>Future</strong></td>
        <td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/auditing-ga" data-raw-source="[Auditing GA](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/auditing-ga)">Auditing GA</a></td>
        <td>Platform</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable alternate authentication credentials](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable alternate authentication credentials</a></td>
        <td>Platform</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy" data-raw-source="[Full support for Conditional Access Policies](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy)">Full support for Conditional Access Policies</a></td>
        <td>Platform</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/access-events-for-pat data-raw-source="[Access events for PAT, SSH will be available in the Auditing Log](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/access-events-for-pat)">Access events for PAT, SSH will be available in the Auditing Log</a></td>
        <td>Platform</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/package-promote-task data-raw-source="[Package promote task in Azure Pipelines](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/package-promote-task)">Package promote task in Azure Pipelines</a></td>
        <td>Artifacts</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts data-raw-source="[Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts)">Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks</a></td>
        <td>Artifacts</td>
        <td>Future</td>   
      </tr>      
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/improve-github-connection-experience data-raw-source="[Improve GitHub Connection Experience](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/improve-github-connection-experience)">Improve GitHub Connection Experience</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-flexible-orchestration-mode data-raw-source="[Support Flexible Orchestration mode in scale set agent pools](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-flexible-orchestration-mode)">Support Flexible Orchestration mode in scale set agent pools</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-pipelines-app data-raw-source="[Support Pipelines App with GitHub Enterprise](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-pipelines-app)">Support Pipelines App with GitHub Enterprise</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
    </tbody>
</table>

---

## How to provide feedback

We would love to hear what you think about these features. Report any problems or suggest a feature through [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

> [!div class="mx-imgBorder"] 
> ![Make a suggestion](media/help-make-a-suggestion.png)

You can also get advice and your questions answered by the community on [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops).
