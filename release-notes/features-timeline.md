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
- Enable administrators to improve authentication security through control plane policies.
- Reducing the need for PATs and other stealable secrets by adding support for more secure alternatives.
- Deepening Azure DevOps' integration with Azure Active Directory to better support its various security features.
- Avoiding the need to store production secrets in Azure Pipelines service connections.

We expect this work to be a major focus of our efforts for multiple quarters.
<table>
    <thead>
        <tr>
            <th>Feature</th>
            <th>Area</th>
            <th>Service</th>
            <th>Server</th>
        </tr>
    </thead>
    <tbody>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2021/sprint-186-update#pat-lifecycle-management-api-general-availability data-raw-source="[PAT lifecycle APIs](https://learn.microsoft.com/azure/devops/release-notes/2021/sprint-186-update#pat-lifecycle-management-api-general-availability)">PAT lifecycle APIs</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>2022.1</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes data-raw-source="[Control plane for personal access tokens (PAT)](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes)">Control plane for personal access tokens (PAT)</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>2022.1</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities data-raw-source="[Managed Identity and Service Principal support](https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Managed Identity and Service Principal support (preview)</a></td>
         <td>General</td>
         <td>2023 Q1</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/secret-free-deployments data-raw-source="[Secret-free deployments from Azure Pipelines](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/secret-free-deployments">Secret-free deployments from Azure Pipelines (preview)</a></td>
         <td>Pipelines</td>
         <td>2023 Q2</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/granular-scopes data-raw-source="[Granular scopes for Azure Active Directory OAuth](https://learn.microsoft.com/azure/devops/release-notes/roadmap/granular-scopes)">Granular scopes for Azure Active Directory OAuth</a></td>
         <td>General</td>
         <td>2023 Q2</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities data-raw-source="[Managed Identity and Service Principal support](https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Managed Identity and Service Principal support (GA)</a></td>
         <td>General</td>
         <td>2023 H2</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/secret-free-deployments data-raw-source="[Secret-free deployments from Azure Pipelines](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/secret-free-deployments)">Secret-free deployments from Azure Pipelines (GA)</a></td>
         <td>Pipelines</td>
         <td>2023 H2</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/disable-alternate-auth-policy data-raw-source="[Policies to disable alternate authentication credentials](https://learn.microsoft.com/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable alternate authentication credentials</a></td>
         <td>General</td>
         <td>Future</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy data-raw-source="[Full support for Conditional Access Policies](https://learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy)">Full support for Conditional Access Policies</a></td>
         <td>General</td>
         <td>Future</td>
         <td>N/A</td>
      </tr>
   </tbody>
</table>

### Updated Boards experience

The Azure Boards user experience is being updated from the ground up. While the functionality remains the same, you can expect a more modern design, responsive reflows, improved performance, and improved accessibility. 

[Learn more](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-202-update#new-boards-hubs-now-available-in-public-preview) about how to enable the New Boards Hub and provide us with feedback.

Note that most new features we are shipping in Boards are only available in the New Boards Hub. These investments include:

<table>
    <thead>
        <tr>
            <th>Feature</th>
            <th>Area</th>
            <th>Service</th>
            <th>Server</th>
        </tr>
    </thead>
    <tbody>
       <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-203-update#move-to-column-position-on-kanban-board data-raw-source="[Move to position](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-203-update#move-to-column-position-on-kanban-board)">Move to position</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q2</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-205-update#assigned-to-children-in-kanban-cards data-raw-source="[Adding Assigned To avatar to child items on cards](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-205-update#assigned-to-children-in-kanban-cards)">Adding Assigned To avatar to child items on cards</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q2</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/boards/sprint-210-update#move-to-column-and-move-to-swimlane data-raw-source="[Move to Column and Move to Swimlane](https://learn.microsoft.com/azure/devops/release-notes/2022/boards/sprint-210-update#move-to-column-and-move-to-swimlane)">Move to Column and Move to Swimlane</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q3</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-206-update#filter-on-work-item-history data-raw-source="[Filter to work item history](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-206-update#filter-on-work-item-history)">Filter to work item history</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q3</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#copy-work-item-attachment-url data-raw-source="[Copy work item attachment URL](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#copy-work-item-attachment-url)">Copy work item attachment URL</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#option-to-maintain-hierarchy-with-filters data-raw-source="[Maintain backlog hierarchy when filters are applied](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#option-to-maintain-hierarchy-with-filters)">Maintain backlog hierarchy when filters are applied</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/ability-to-change-link data-raw-source="[Ability to change link type from Web UI](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/ability-to-change-link)">Ability to change link type from Web UI</a></td>
         <td>Boards</td>
         <td>2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/swimlane-rules data-raw-source="[Swimlane rules on Kanban board](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/swimlane-rules)">Swimlane rules on Kanban board</a></td>
         <td>Boards</td>
         <td>2023 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown data-raw-source="[Work item markdown support](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown)">Work item markdown support</a></td>
         <td>Boards</td>
         <td>2023 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-team-rules data-raw-source="[Automated team work item rules](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-team-rules)">Automated team work item rules</a></td>
         <td>Boards</td>
         <td>2023 Q2</td>
         <td>Future</td>
      </tr>       
    </tbody>
</table>

### Pipelines agent Node lifecycle

Azure Pipelines tasks can be authored either in Node or Powershell, and they use the corresponding runner in the Azure Pipelines agent. Node has a [regular cadence of releases](https://github.com/nodejs/release#release-schedule), with Node 16 being the LTS and Node 18 the Current version as of October, 2022. The original design of the Node task runner did not make Node version upgrades straightforward for task authors, and as a result has not kept up with the latest Node releases. We've heard feedback from customers on this, and are now making a number of changes to enable Azure Pipelines agents to keep installed Node versions in sync with the Node release cadence and support lifecycle while minimizing impacts on task and pipeline authors. 

As a first step, we recently released a new [Node 16 task runner](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#node-16-task-runner-in-pipeline-agent) for the agent. Over the next few months, we plan to provide improved guidance for task authors to keep up with Node updates. Because not all tasks in the [Marketplace](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Azure%20Pipelines&sortBy=Installs) will be continuously updated to run on the latest versions of Node, we will also provide pipeline authors the ability to continue using non-upgraded tasks. Once all these features are available, we'll remove end-of-life versions of Node from Microsoft hosted agents and self-hosted agent images. 

<table>
    <thead>
        <tr>
            <th>Feature</th>
            <th>Area</th>
            <th>Service</th>
            <th>Server</th>
        </tr>
    </thead>
    <tbody>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#node-16-task-runner-in-pipeline-agent data-raw-source="[Node 16 runner along with other runners](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#node-16-task-runner-in-pipeline-agent)">Node 16 runner along with other runners</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q3</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/migrateNode16.md data-raw-source="[Tasks can express compatibility with multiple Node runners](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/migrateNode16.md)">Tasks can express compatibility with multiple Node runners</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q3</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16 data-raw-source="[All in-the-box tasks run on Node 16](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16)">All in-the-box tasks run on Node 16</a></td>
         <td>Pipelines</td>
         <td>2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/node-16-agent data-raw-source="[Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/node-16-agent)">Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)</a></td>
         <td>Pipelines</td>
         <td>2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/install-old-runner data-raw-source="[Ability to download and install old runners on self-hosted agents](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/install-old-runner)">Ability to download and install old runners on self-hosted agents</a></td>
         <td>Pipelines</td>
         <td>2023 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pick-next-runner data-raw-source="[Ability to run tasks on next available Node version, if targeted version is not available](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pick-next-runner)">Ability to run tasks on next available Node version, if targeted version is not available</a></td>
         <td>Pipelines</td>
         <td>2023 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents data-raw-source="[Removal of Node 6 and 10 from Microsoft hosted pools](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents)">Removal of Node 6 and 10 from Microsoft hosted pools</a></td>
         <td>Pipelines</td>
         <td>2023 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/remove-node-6 data-raw-source="[Stop shipping Node 6 and Node 10 runners with the agent](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/remove-node-6)">Stop shipping Node 6 and Node 10 runners with the agent</a></td>
         <td>Pipelines</td>
         <td>2023 Q1</td>
         <td>Future</td>
      </tr>
    </tbody>
</table>

### Pipelines checks

Customers prefer YAML pipelines over classic for builds (CI). However, for releases (CD), many customers have continued to use classic release management pipelines over YAML. The primary reason for this is the lack of parity in various CD features between the two solutions. Over the next year, we will invest in bridging these gaps. As a first step, we will focus on **checks**. Checks are the primary mechanism in YAML pipelines to gate promotion of a build from one stage to another. 

<table>
    <thead>
        <tr>
            <th>Feature</th>
            <th>Area</th>
            <th>Service</th>
            <th>Server</th>
        </tr>
    </thead>
    <tbody>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/checks-scalability data-raw-source="[Checks scalability](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/checks-scalability)">Checks scalability</a></td>
         <td>Pipelines</td>
         <td>2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/checks-auditing data-raw-source="[Auditing for checks](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/checks-auditing)">Auditing for checks</a></td>
         <td>Pipelines</td>
         <td>2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/checks-sequencing data-raw-source="[Sequencing approvals and other checks](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/checks-sequencing)">Sequencing approvals and other checks</a></td>
         <td>Pipelines</td>
         <td>2023 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/custom-vars-in-checks data-raw-source="[Custom variables in checks](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/custom-vars-in-checks)">Custom variables in checks</a></td>
         <td>Pipelines</td>
         <td>2023 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/service-connections-in-checks data-raw-source="[Service connections in checks](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/service-connections-in-checks)">Service connections in checks</a></td>
         <td>Pipelines</td>
         <td>2023 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/checks-extensibility data-raw-source="[Checks extensibility](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/checks-extensibility)">Checks extensibility</a></td>
         <td>Pipelines</td>
         <td>Future</td>
         <td>Future</td>
      </tr>
    </tbody>
</table>

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
        <td rowspan="15"><strong>2022 Q4</strong></td>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#option-to-maintain-hierarchy-with-filters data-raw-source="[Maintain backlog hierarchy when filters are applied](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#option-to-maintain-hierarchy-with-filters)">Maintain backlog hierarchy when filters are applied</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#copy-work-item-attachment-url data-raw-source="[copy work item attachment url](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#copy-work-item-attachment-url)">Copy work item attachment url</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>     
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/ability-to-change-link data-raw-source="[Ability to change link type from Web UI](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/ability-to-change-link)">Ability to change link type from Web UI</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/save-comment-improvements data-raw-source="[Save Comment Improvements](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/save-comment-improvements)">Save Comment Improvements</a></td>
        <td>Boards</td>
        <td>Future</td>      
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/improvements-in-service-connection data-raw-source="[Improvements in service connection usage history](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/improvements-in-service-connection)">Improvements in service connection usage history</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/net6agent-replace-core31 data-raw-source="[.NET 6 agent to replace .NET Core 3.1 agent](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/net6agent-replace-core31)">.NET 6 agent to replace .NET Core 3.1 agent</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/toggle-to-disable-classic-pipelines data-raw-source="[Toggle to disable classic pipelines](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/toggle-to-disable-classic-pipelines)">Toggle to disable classic pipelines</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
       <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16 data-raw-source="[All in-the-box tasks run on Node 16](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16)">All in-the-box tasks run on Node 16</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/node-16-agent data-raw-source="[Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/node-16-agent)">Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes data-raw-source="[Associate all public APIs with PAT scopes](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes)">Associate all public APIs with PAT scopes</a></td>
        <td>General</td>
        <td>2022.1</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pull-request-widget data-raw-source="[Pull Request widget to allow for the selection of many repos](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pull-request-widget)">Pull Request widget to allow for the selection of many repos</a></td>
        <td>Reporting</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/rollup-columns-for-query data-raw-source="[Rollup columns for query results](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/rollup-columns-for-query)">Rollup columns for query results</a></td>
        <td>Reporting</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#show-parent-in-query-results-widget" data-raw-source="[Show Link with Parent Name in Query Results Widget](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-211-update#show-parent-in-query-results-widget)">Show Link with Parent Name in Query Results Widget</a></td>
        <td>Reporting</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/resume-test-execution data-raw-source="[Pause and resume manual test execution](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/resume-test-execution)">Pause and resume manual test execution</a></td>
        <td>Test Plans</td>
        <td>2022.1</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings data-raw-source="[In-product recommendations for secure settings](https://learn.microsoft.com/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings)">In-product recommendations for secure settings</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td rowspan="11"><strong>2023 Q1</strong></td>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/track-repo-cloning data-raw-source="[Track repo cloning](https://learn.microsoft.com/azure/devops/release-notes/roadmap/track-repo-cloning)">Track repo cloning</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
         <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/install-old-runner data-raw-source="[Ability to download and install old runners on self-hosted agents](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/install-old-runner)">Ability to download and install old runners on self-hosted agents</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pick-next-runner" data-raw-source="[Ability to run tasks on next available Node version, if targeted version is not available](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pick-next-runner)">Ability to run tasks on next available Node version, if targeted version is not available</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents" data-raw-source="[Removal of Node 6 and 10 from Microsoft hosted pools](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents)">Removal of Node 6 and 10 from Microsoft hosted pools</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/remove-node-6" data-raw-source="[Stop shipping Node 6 and Node 10 runners with the agent](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/remove-node-6)">Stop shipping Node 6 and Node 10 runners with the agent</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities" data-raw-source="[Support Azure Managed Identities and Service Principals (Preview)](https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Support Azure Managed Identities and Service Principals (Preview)</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-for-cargo-package" data-raw-source="[Support for Cargo package manager for Rust](https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-for-cargo-package)">Support for Cargo package manager for Rust</a></td>
        <td>Artifacts</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/sort-test-plans data-raw-source="[Pause and resume manual test execution](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/sort-test-plans)">Sort test plans by any column</a></td>
        <td>Test Plans</td>
        <td>2022.1</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/code-coverage-improvements data-raw-source="[Code coverage improvements](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/code-coverage-improvements)">Improved support for code coverage publishing within Azure Pipelines</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown data-raw-source="[Work Item support for Markdown editing](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown)">Work Item support for Markdown editing</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/swimlane-rules data-raw-source="[swimlane rules on kanban board](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/swimlane-rules)">Swimlane rules on Kanban board</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td rowspan="3"><strong>2023 Q2</strong></td>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/secret-free-deployments data-raw-source="[Secret-free deployments from Azure Pipelines (Preview)](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2022/secret-free-deployments)">Secret-free deployments from Azure Pipelines (Preview)</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/granular-scopes" data-raw-source="[Granular scopes for Azure Active Directory OAuth](https://learn.microsoft.com/azure/devops/release-notes/roadmap/granular-scopes)">Granular scopes for Azure Active Directory OAuth</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-team-rules data-raw-source="[Automate rules for updating work items](https://learn.microsoft.com/azure/devops/release-notes/roadmap/2023/work-item-team-rules)">Automated team work item rules</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td rowspan="10"><strong>Future</strong></td>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/auditing-ga" data-raw-source="[Auditing GA](https://learn.microsoft.com/azure/devops/release-notes/roadmap/auditing-ga)">Auditing GA</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable alternate authentication credentials](https://learn.microsoft.com/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable alternate authentication credentials</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy" data-raw-source="[Full support for Conditional Access Policies](https://learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy)">Full support for Conditional Access Policies</a></td>
        <td>General</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/access-events-for-pat data-raw-source="[Access events for PAT, SSH will be available in the Auditing Log](https://learn.microsoft.com/azure/devops/release-notes/roadmap/access-events-for-pat)">Access events for PAT, SSH will be available in the Auditing Log</a></td>
        <td>General</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities" data-raw-source="[Support Azure Managed Identities and Service Principals (GA)](https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Support Azure Managed Identities and Service Principals (GA)</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/package-promote-task data-raw-source="[Package promote task in Azure Pipelines](https://learn.microsoft.com/azure/devops/release-notes/roadmap/package-promote-task)">Package promote task in Azure Pipelines</a></td>
        <td>Artifacts</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts data-raw-source="[Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks](https://learn.microsoft.com/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts)">Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks</a></td>
        <td>Artifacts</td>
        <td>Future</td>   
      </tr>      
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/improve-github-connection-experience data-raw-source="[Improve GitHub Connection Experience](https://learn.microsoft.com/azure/devops/release-notes/roadmap/improve-github-connection-experience)">Improve GitHub Connection Experience</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-flexible-orchestration-mode data-raw-source="[Support Flexible Orchestration mode in scale set agent pools](https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-flexible-orchestration-mode)">Support Flexible Orchestration mode in scale set agent pools</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href=https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-pipelines-app data-raw-source="[Support Pipelines App with GitHub Enterprise](https://learn.microsoft.com/azure/devops/release-notes/roadmap/support-pipelines-app)">Support Pipelines App with GitHub Enterprise</a></td>
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