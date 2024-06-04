---
title: Azure DevOps Roadmap
author: gloridelmorales
ms.author: glmorale
ms.date: 01/18/2024
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

### GitHub Advanced Security for Azure DevOps

GitHub Advanced Security (GHAS) for Azure DevOps is now generally available. Any project collection administrator can now enable Advanced Security for their organization, projects and repos from the Project Settings or Organization Settings. You can learn more about how to configure GitHub Advanced Security for Azure DevOps in our [documentation](/azure/devops/repos/security/configure-github-advanced-security-features). 

New capabilities we expect to deliver in the upcoming semester include: 

* Similar to GHAS-for-GitHub, any third-party open source or commercial security analysis pipeline task that generates results in conforming SARIF format can display those results in the Advanced Security Code Scanning alerts hub. This gives you a single pane of glass natively built into Azure DevOps to view your repository code security alerts from all your analysis tools. 

* Support for custom CodeQL queries. 

* Detection and blocking of more kinds of secrets.

 
### Minimizing the risks associated with credential theft

Azure DevOps supports many different authentication mechanisms, including basic authentication, personal access tokens (PATs), SSH, and Microsoft Entra ID (formerly Azure Active Directory) access tokens. These mechanisms are not created equally from a security perspective, especially when it comes to the potential for credential theft. For example, unintended leakage of credentials like PATs can let malicious actors into Azure DevOps organizations where they can gain access to critical assets like source code, pivot toward supply chain attacks, or even pivot toward compromising production infrastructure. To minimize the risks of credential theft, we will focus our efforts in the upcoming quarters in the following areas: 

* Enable administrators to improve authentication security through control plane policies. 

* Reducing the need for PATs and other stealable secrets by adding support for more secure alternatives. 

* Deepening Azure DevOps' integration with Microsoft Entra ID to better support its various security features. 

* Avoiding the need to store production secrets in Azure Pipelines service connections. 


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
         <td><a href="/azure/devops/release-notes/2021/sprint-186-update#pat-lifecycle-management-api-general-availability" data-raw-source="[PAT lifecycle APIs](/azure/devops/release-notes/2021/sprint-186-update#pat-lifecycle-management-api-general-availability)">PAT lifecycle APIs</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes" data-raw-source="[Control plane for personal access tokens (PAT)](/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes)">Control plane for personal access tokens (PAT)</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>2022.1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/support-azure-managed-identities" data-raw-source="[Managed Identity and Service Principal support](/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Managed Identity and Service Principal support (preview)</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q1</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/secret-free-azurerm-deployments" data-raw-source="[Workload identity federation for Azure Deployments](/azure/devops/release-notes/roadmap/2022/secret-free-deployments">Workload identity federation for Azure Deployments (preview)</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q3</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/granular-scopes" data-raw-source="[Granular scopes for Azure Active Directory OAuth](/azure/devops/release-notes/roadmap/granular-scopes)">Granular scopes for Azure Active Directory OAuth</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q3</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/support-azure-managed-identities" data-raw-source="[Managed Identity and Service Principal support](/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Managed Identity and Service Principal support (GA)</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q3</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/secret-free-azurerm-deployments" data-raw-source="[Workload identity federation for Azure Deployments](/azure/devops/release-notes/roadmap/2022/secret-free-deployments">Workload identity federation for Azure service connection (GA)</a></td>
         <td>Pipelines</td>
         <td>2024 Q1</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/secret-free-acr-deployments" data-raw-source="[Workload identity federation for Docker service connection](/azure/devops/release-notes/roadmap/2022/secret-free-deployments">Workload identity federation for Docker service connection</a></td>
         <td>Pipelines</td>
         <td>2024 H1</td>
         <td>N/A</td>
      </tr>
       <tr>
         <td><a href="/azure/devops/release-notes/roadmap/conditional-access-policy" data-raw-source="[Full web support for Conditional Access Policies](/azure/devops/release-notes/roadmap/conditional-access-policy)">Full web support for Conditional Access Policies</a></td>
         <td>General</td>
         <td>2024 Q1</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable authentication methods](/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable authentication methods</a></td>
         <td>General</td>
         <td>Future</td>
         <td>N/A</td>
      </tr>
   </tbody>
</table>

### Updated Boards experience

The Azure Boards user experience has been updated from the ground up. While the functionality remains the same, you can expect a more modern design, responsive reflows, improved performance, and improved accessibility. This quarter we are rolling out the New Boards Hub as the default experience to all organizations. 

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
         <td><a href="/azure/devops/release-notes/2022/sprint-203-update#move-to-column-position-on-kanban-board" data-raw-source="[Move to position](/azure/devops/release-notes/2022/sprint-203-update#move-to-column-position-on-kanban-board)">Move to position</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q2</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2022/sprint-205-update#assigned-to-children-in-kanban-cards" data-raw-source="[Adding Assigned To avatar to child items on cards](/azure/devops/release-notes/2022/sprint-205-update#assigned-to-children-in-kanban-cards)">Adding Assigned To avatar to child items on cards</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q2</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2022/boards/sprint-210-update#move-to-column-and-move-to-swimlane" data-raw-source="[Move to Column and Move to Swimlane](/azure/devops/release-notes/2022/boards/sprint-210-update#move-to-column-and-move-to-swimlane)">Move to Column and Move to Swimlane</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2022/sprint-206-update#filter-on-work-item-history" data-raw-source="[Filter to work item history](/azure/devops/release-notes/2022/sprint-206-update#filter-on-work-item-history)">Filter to work item history</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q3</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2022/sprint-211-update#copy-work-item-attachment-url" data-raw-source="[Copy work item attachment URL](/azure/devops/release-notes/2022/sprint-211-update#copy-work-item-attachment-url)">Copy work item attachment URL</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2022/sprint-211-update#option-to-maintain-hierarchy-with-filters" data-raw-source="[Maintain backlog hierarchy when filters are applied](/azure/devops/release-notes/2022/sprint-211-update#option-to-maintain-hierarchy-with-filters)">Maintain backlog hierarchy when filters are applied</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2022/sprint-212-update#edit-work-item-link-types" data-raw-source="[Ability to change link type from Web UI](/azure/devops/release-notes/2022/sprint-212-update#edit-work-item-link-types)">Ability to change link type from Web UI</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/2023/sprint-215-update#swimlane-colors" data-raw-source="[Swimlane colors on Kanban board.](/azure/devops/release-notes/2023/sprint-215-update#swimlane-colors)">Swimlane colors on Kanban board</a></td>
        <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2023 Q1</td>
        <td>Future</td>      
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2023/sprint-221-update#azure-boards-1" data-raw-source="[Swimlane rules on Kanban board](/azure/devops/release-notes/2023/sprint-221-update#azure-boards-1)">Swimlane rules on Kanban board</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2023 Q2</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2023/sprint-222-update#azure-boards-1" data-raw-source="[Work item markdown support](/azure/devops/release-notes/2023/sprint-222-update#azure-boards-1)">Markdown editor for work item comments (preview)</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2023 Q2</td>
         <td>Future</td>
      </tr>     
      <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-233-update#team-automation-rules-is-generally-available" data-raw-source="[Automated team work item rules](/azure/devops/release-notes/2024/sprint-233-update#team-automation-rules-is-generally-available)">Automated team work item rules</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q1</td>
         <td>Future</td>
      </tr>             
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2023/new-boards-hub-on-by-default" data-raw-source="[New boards hub on by default.](/azure/devops/release-notes/roadmap/2023/new-boards-hub-on-by-default)">New Boards Hub on by default for all organizations</a></td>
         <td>Boards</td>
         <td>2024 Q2</td>
         <td>Future</td>
      </tr>             
    </tbody>
</table>


### Improved Boards + GitHub Integration

The existing Azure Boards + GitHub integration has been in place for several years now. The integration is a great starting point, but it does not offer the level of traceability that our customers have grown accustomed to. Based on customer feedback, we have put together set of investments to enhance this integration. Our goal is to improve upon it so that Azure Boards customers who choose to use GitHub repositories can maintain an equivalent level of traceability to having repositories in Azure DevOps.

These investments include:

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
         <td><a href="/azure/devops/release-notes/2024/sprint-233-update#github-integration---improved-ab-validation-is-generally-available" data-raw-source="[Improved AB# validation](/azure/devops/release-notes/2024/sprint-233-update#github-integration---improved-ab-validation-is-generally-available)">Improved AB#{ID} validation</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2023 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview" data-raw-source="[Add link to GitHub Commit or Pull Request from work item](/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview)">Add link to GitHub commit or pull request from work item</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-235-update#show-github-pull-request-details-preview" data-raw-source="[Show more details about a GitHub Pull Request](/azure/devops/release-notes/2024/sprint-235-update#show-github-pull-request-details-preview)">Show more details about a GitHub pull request (preview)</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/scale-github-repos" data-raw-source="[Improve scalability when searching and linking GitHub repos to an Azure DevOps project](/azure/devops/release-notes/roadmap/2024/scale-github-repos)">Improve scalability when searching and linking GitHub<br/>repos to an Azure DevOps project</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q2</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/github-branch" data-raw-source="[Create branch on GitHub repository from work item](/azure/devops/release-notes/roadmap/2024/github-branch)">Create branch on GitHub repository from work item (preview)</a></td>
         <td>Boards</td>
         <td>2024 Q2</td>
         <td>Future</td>
      </tr>      
    </tbody>
</table>

### Pipelines agent Node lifecycle

Azure Pipelines tasks can be authored either in Node or PowerShell, and they use the corresponding runner in the Azure Pipelines agent. Node has a [regular cadence of releases](https://github.com/nodejs/release#release-schedule), with Node 16 being the LTS and Node 18 the Current version as of October 2022. The original design of the Node task runner did not make Node version upgrades straightforward for task authors, and as a result has not kept up with the latest Node releases. We've heard feedback from customers on this, and are now making a number of changes to enable Azure Pipelines agents to keep installed Node versions in sync with the Node release cadence and support lifecycle while minimizing impacts on task and pipeline authors. 

As a first step, we recently released a new [Node 16 task runner](/azure/devops/release-notes/2022/sprint-210-update#node-16-task-runner-in-pipeline-agent) for the agent. Over the next few months, we plan to provide improved guidance for task authors to keep up with Node updates. Because not all tasks in the [Marketplace](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Azure%20Pipelines&sortBy=Installs) will be continuously updated to run on the latest versions of Node, we will also provide pipeline authors the ability to continue using non-upgraded tasks. Once all these features are available, we'll remove end-of-life versions of Node from Microsoft hosted agents and self-hosted agent images. 

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
         <td><a href="/azure/devops/release-notes/2022/sprint-210-update#node-16-task-runner-in-pipeline-agent" data-raw-source="[Node 16 runner along with other runners](/azure/devops/release-notes/2022/sprint-210-update#node-16-task-runner-in-pipeline-agent)">Node 16 task runner in pipeline agent</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q3</td>
         <td>2022.1</td>
      </tr>
      <tr>
         <td><a href=https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/migrateNode16.md data-raw-source="[Tasks can express compatibility with multiple Node runners](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/migrateNode16.md)">Tasks can express compatibility with multiple Node runners</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q3</td>
         <td>2022.1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16" data-raw-source="[All in-the-box tasks run on Node 16](/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16)">All in-the-box tasks run on Node 16</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/pick-next-runner" data-raw-source="[Ability to run tasks on next available Node version, if targeted version is not available](/azure/devops/release-notes/roadmap/2022/pick-next-runner)">Ability to run tasks on next available Node version, if targeted version is not available</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q4</td>
         <td>2022.1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents" data-raw-source="[Removal of Node 6 and 10 from Microsoft hosted pools](/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents)">Removal of Node 6 and 10 from Microsoft hosted pools</a></td>
         <td>Pipelines</td>
         <td>Future</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2023/install-old-runner" data-raw-source="[Ability to download and install old runners on self-hosted agents](/azure/devops/release-notes/roadmap/2023/install-old-runner)">Ability to download and install old runners on self-hosted agents</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q4</td>
         <td>2022.1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/remove-node-6" data-raw-source="[Stop shipping Node 6 and Node 10 runners with the agent](/azure/devops/release-notes/roadmap/2022/remove-node-6)">Stop shipping Node 6 and Node 10 runners with the agent</a></td>
         <td>Pipelines</td>
         <td>Future</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/node-16-agent" data-raw-source="[Ship a Node 16+ only agent in addition to the one that has all versions](/azure/devops/release-notes/roadmap/2022/node-16-agent)">Ship a Node 16+ only agent in addition to the one that has all versions</a></td>
         <td>Pipelines</td>
         <td>2024 Q1</td>
         <td>Future</td>
      </tr>
    </tbody>
</table>

### YAML and release pipelines feature parity

Customers prefer YAML pipelines over classic for builds (CI). However, for releases (CD), many customers have continued to use classic release management pipelines over YAML. The primary reason for this is the lack of parity in various CD features between the two solutions. Over the next year, we'll invest in bridging these gaps. 

As a first step, we'll focus on **checks**. Checks are the primary mechanism in YAML pipelines to gate promotion of a build from one stage to another. 

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
         <td><a href="/azure/devops/release-notes/2022/sprint-212-update#audit-events-for-changes-to-approvals" data-raw-source="[Auditing for checks](/azure/devops/release-notes/2022/sprint-212-update#audit-events-for-changes-to-approvals)">Auditing for checks</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2023/sprint-215-update#variables-as-inputs-in-checks" data-raw-source="[Custom variables in checks](azure/devops/release-notes/2023/sprint-215-update#variables-as-inputs-in-checks)">Custom variables in checks</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="https://devblogs.microsoft.com/devops/updates-to-approvals-and-checks/" data-raw-source="[Checks scalability](https://devblogs.microsoft.com/devops/updates-to-approvals-and-checks/)">Checks scalability</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q2</td>
         <td>Future</td>
      </tr>
     <tr>
         <td><a href="/azure/devops/release-notes/2023/sprint-230-update#bypass-approvals-and-checks" data-raw-source="[Bypass approvals and checks](/azure/devops/release-notes/2023/sprint-230-update#bypass-approvals-and-checks)">Bypass approvals and checks</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/checks-sequencing" data-raw-source="[Sequencing approvals and other checks](/azure/devops/release-notes/roadmap/2022/checks-sequencing)">Sequencing approvals and other checks</a></td>
         <td>Pipelines</td>
         <td>2024 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/deferred-approvals" data-raw-source="[Deferred approvals](/azure/devops/release-notes/roadmap/2024/deferred-approvals)">Deferred approvals</a></td>
         <td>Pipelines</td>
         <td>2024 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/service-connections-in-checks" data-raw-source="[Service connections in checks](/azure/devops/release-notes/roadmap/2022/service-connections-in-checks)">Service connections in checks</a></td>
         <td>Pipelines</td>
         <td>Future</td>
        <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/checks-extensibility" data-raw-source="[Checks extensibility](/azure/devops/release-notes/roadmap/2022/checks-extensibility)">Checks extensibility</a></td>
         <td>Pipelines</td>
         <td>Future</td>
         <td>Future</td>
      </tr>
    </tbody>
</table>

Next, we'll focus on **deployment functionality**, to make it possible to have deployment strategies in YAML pipelines similar to the ones in classic release pipelines.

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
         <td><a href="/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages" data-raw-source="[Manual queuing of stages](/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages)">Manual queuing of stages</a></td>
         <td>Pipelines</td>
         <td>2024 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/rerun-single-stage" data-raw-source="[Rerun single stage](/azure/devops/release-notes/roadmap/2024/rerun-single-stage)">Rerun single stage</a></td>
         <td>Pipelines</td>
         <td>2024 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-concurrency" data-raw-source="[Stage-level concurrency](/azure/devops/release-notes/roadmap/2024/stage-conncurrency)">Stage-level concurrency</a></td>
         <td>Pipelines</td>
         <td>2024 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-traceability" data-raw-source="[Stage-level traceability](/azure/devops/release-notes/roadmap/2024/stage-traceability)">Stage-level traceability</a></td>
         <td>Pipelines</td>
         <td>2024 Q1</td>
         <td>Future</td>
      </tr>
    </tbody>
</table>


### Streamlined Dashboard Experience 
Azure DevOps is enhancing the dashboard experience, focusing on simplifying the user flow for both creation and maintenance. We're fine-tuning our approach to improve workflow. Our aim is to streamline the onboarding process, ensuring that users can set up their dashboards quickly and start working without hassle. To boost productivity and enhance decision-making through dashboard insights, we plan to deliver the following features. 
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
         <td><a href="https://devblogs.microsoft.com/devops/introducing-work-item-chart-filtering-in-azure-devops-dashboards/" data-raw-source="[Work Item Chart Filtering](https://devblogs.microsoft.com/devops/introducing-work-item-chart-filtering-in-azure-devops-dashboards/)">Work Item Chart Filtering</a></td>
         <td>Reporting</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href=/azure/devops/release-notes/2023/reporting/sprint-229-update#new-dashboard-directory-experience" data-raw-source="[New Dashboard directory experience](https://learn.microsoft.com/en-us/azure/devops/release-notes/2023/reporting/sprint-229-update#new-dashboard-directory-experience)">New Dashboard directory experience</a></td>
         <td>Reporting</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q4</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/dashboard-global-parameter" data-raw-source="[Dashboard Global Parameter](azure/devops/release-notes/roadmap/2024/dashboard-global-parameter)">Dashboard Global Parameter</a></td>
         <td>Reporting</td>
         <td>2024 H1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/dashboard-template" data-raw-source="[Dashboard Template](/azure/devops/release-notes/roadmap/2024/dashboard-template)">Dashboard Template</a></td>
         <td>Reporting</td>
          <td>2024 H1</td>
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
        <td rowspan="21"><strong>2024 Q1</strong></td>
         <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo-security-overview" data-raw-source="[Security Overview](/azure/devops/release-notes/roadmap/2024/ghazdo-security-overview)">Security Overview</a></td>
        <td>General</td>
        <td>N/A</td>
      <tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/conditional-access-policy" data-raw-source="[Full web support for Conditional Access Policies](/azure/devops/release-notes/roadmap/conditional-access-policy)">Full web support for Conditional Access Policies</a></td>
         <td>General</td>
         <td>N/A</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo-3p-sarif" data-raw-source="[Third-party SARIF support](/azure/devops/release-notes/roadmap/2024/ghazdo-3p-sarif)">Third-party SARIF support</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo-improved-generic-secrets" data-raw-source="[Improved secret detection](/azure/devops/release-notes/roadmap/2024/ghazdo-improved-generic-secrets)">Improved secret detection</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo-custom-codeql" data-raw-source="[Custom CodeQL queries](/azure/devops/release-notes/roadmap/2024/ghazdo-custom-codeql)">Custom CodeQL queries</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/2024/sprint-233-update#team-automation-rules-is-generally-available" data-raw-source="[Automate rules for updating work items](/azure/devops/release-notes/2024/sprint-233-update#team-automation-rules-is-generally-available)">Automated team work item rules</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/2024/sprint-233-update#github-integration---improved-ab-validation-is-generally-available" data-raw-source="[Improved AB# validation](/azure/devops/release-notes/2024/sprint-233-update#github-integration---improved-ab-validation-is-generally-available)">Improved GitHub app and AB#{ID} validation</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview" data-raw-source="[Add link to GitHub commit or pull request from work item](/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview)">Add link to GitHub commit or pull request from work item</a></td>
        <td>Boards</td>         
        <td>Future</td>
      </tr> 
       <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-235-update#show-github-pull-request-details-preview" data-raw-source="[Show more details about a GitHub pull request](/azure/devops/release-notes/2024/sprint-235-update#show-github-pull-request-details-preview)">Show more details about a GitHub pull request (preview)</a></td>
         <td>Boards</td>      
         <td>Future</td>
      </tr>       
      <tr>
        <td><a href="/azure/devops/release-notes/2023/sprint-222-update#azure-boards-1" data-raw-source="[Markdown editor for work item comments](/azure/devops/release-notes/2023/sprint-222-update#azure-boards-1)">Markdown editor for work item comments</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>        
      </tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16" data-raw-source="[All in-the-box tasks run on Node 16](/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16)">All in-the-box tasks run on Node 16</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2023/install-old-runner" data-raw-source="[Ability to download and install old runners on self-hosted agents](/azure/devops/release-notes/roadmap/2023/install-old-runner)">Ability to download and install old runners on self-hosted agents</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/pick-next-runner" data-raw-source="[Ability to run tasks on next available Node version, if targeted version is not available](/azure/devops/release-notes/roadmap/2022/pick-next-runner)">Ability to run tasks on next available Node version, if targeted version is not available</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents" data-raw-source="[Removal of Node 6 and 10 from Microsoft hosted pools](/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents)">Removal of Node 6 and 10 from Microsoft hosted pools</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2022/checks-sequencing" data-raw-source="[Sequencing approvals and other checks](/azure/devops/release-notes/roadmap/2022/checks-sequencing)">Sequencing approvals and other checks</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings" data-raw-source="[In-product recommendations for secure settings](/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings)">In-product recommendations for secure settings</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages" data-raw-source="[Manual queuing of stages](/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages)">Manual queuing of stages</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/rerun-single-stage" data-raw-source="[Rerun single stage](/azure/devops/release-notes/roadmap/2024/rerun-single-stage)">Rerun single stage</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-concurrency" data-raw-source="[Stage-level concurrency](/azure/devops/release-notes/roadmap/2024/stage-conncurrency)">Stage-level concurrency</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-traceability" data-raw-source="[Stage-level traceability](/azure/devops/release-notes/roadmap/2024/stage-traceability)">Stage-level traceability</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
      <td rowspan="5"><strong>2024 Q2</strong></td>
         <td><a href="/azure/devops/release-notes/roadmap/2023/reduce-time-to-filter" data-raw-source="[Reduce time to filter test plans and test suites in copy and import operations](/azure/devops/release-notes/roadmap/2022/reduce-time-to-filter)">Reduce time to filter test plans and test suites in copy and import operations</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/code-coverage-policy" data-raw-source="[Code coverage policy at a folder level](/azure/devops/release-notes/roadmap/2022/code-coverage-policy)">Code coverage policy at a folder level</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/new-boards-hub-on-by-default" data-raw-source="[New Boards Hub on by default](/azure/devops/release-notes/roadmap/2023/new-boards-hub-on-by-default)">New Boards Hub on by default</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>     
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/github-branch" data-raw-source="[Create branch on GitHub repository from work item](/azure/devops/release-notes/roadmap/2024/github-branch)">Create branch on GitHub repository from work item</a></td>
         <td>Boards</td>        
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/scale-github-repos" data-raw-source="[Improve scalability when searching and linking GitHub repos to an Azure DevOps project](/azure/devops/release-notes/roadmap/2024/scale-github-repos)">Improve scalability when searching and linking GitHub<br/>repos to an Azure DevOps project</a></td>
         <td>Boards</td>         
         <td>Future</td>
      </tr> 
      <td rowspan="27"><strong>Future</strong></td>
        <td><a href="/azure/devops/release-notes/roadmap/auditing-ga" data-raw-source="[Auditing GA](/azure/devops/release-notes/roadmap/auditing-ga)">Auditing GA</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable authentication methods](/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable authentication methods</a></td>
        <td>General</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/access-events-for-pat" data-raw-source="[Access events for PAT, SSH will be available in the Auditing Log](/azure/devops/release-notes/roadmap/access-events-for-pat)">Access events for PAT, SSH will be available in the Auditing Log</a></td>
        <td>General</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/substring-search" data-raw-source="[Substring search](/azure/devops/release-notes/roadmap/2023/substring-search)">Substring search</a></td>
        <td>General</td>
        <td>Future</td>
      </tr>
       <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/commits-search" data-raw-source="[Commits search](/azure/devops/release-notes/roadmap/2023/commits-search)">Commits search</a></td>
        <td>General</td>
        <td>Future</td>
      </tr>      
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/page-filters-include-additional-fields" data-raw-source="[Additional fields on page filters](/azure/devops/release-notes/roadmap/2023/page-filters-include-additional-fields)">Additional fields on page filters</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
       <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/delivery-plans-parent-filters" data-raw-source="[Delivery plans improvements to filtering by parent](/azure/devops/release-notes/roadmap/2023/delivery-plans-parent-filters)">Delivery plans improvements to filtering by parent</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr> 
      <tr>          
        <td><a href="/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown" data-raw-source="[Markdown editor for work item multi-line fields](/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown)">Markdown editor for work item multi-line fields</a></td>
        <td>Boards</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/track-repo-cloning" data-raw-source="[Track repo cloning](/azure/devops/release-notes/roadmap/track-repo-cloning)">Track repo cloning</a></td>
        <td>Repos</td>
        <td>Future</td>
      </tr>
       <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2022/remove-node-6" data-raw-source="[Stop shipping Node 6 and Node 10 runners with the agent](/azure/devops/release-notes/roadmap/2022/remove-node-6)">Stop shipping Node 6 and Node 10 runners with the agent</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2022/node-16-agent" data-raw-source="[Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)](/azure/devops/release-notes/roadmap/2022/node-16-agent)">Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/support-pipelines-app" data-raw-source="[Support Pipelines App with GitHub Enterprise](/azure/devops/release-notes/roadmap/support-pipelines-app)">Support Pipelines App with GitHub Enterprise</a></td>
        <td>Pipelines</td>
        <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/service-connections-in-checks" data-raw-source="[Service connections in checks](/azure/devops/release-notes/roadmap/2022/service-connections-in-checks)">Service connections in checks</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/checks-extensibility" data-raw-source="[Checks extensibility](/azure/devops/release-notes/roadmap/2022/checks-extensibility)">Checks extensibility</a></td>
         <td>Pipelines</td>
         <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/package-promote-task" data-raw-source="[Package promote task in Azure Pipelines](/azure/devops/release-notes/roadmap/package-promote-task)">Package promote task in Azure Pipelines</a></td>
        <td>Artifacts</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts" data-raw-source="[Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks](/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts)">Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks</a></td>
        <td>Artifacts</td>
        <td>Future</td>   
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/dashboard-global-parameter" data-raw-source="[Dashboard Global Parameter](azure/devops/release-notes/roadmap/2024/dashboard-global-parameter)">Dashboard Global Parameter</a></td>
         <td>Reporting</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/dashboard-template" data-raw-source="[Dashboard Template](/azure/devops/release-notes/roadmap/2024/dashboard-template)">Dashboard Template</a></td>
         <td>Reporting</td>
         <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2022/sort-test-plans" data-raw-source="[Pause and resume manual test execution](/azure/devops/release-notes/roadmap/2022/sort-test-plans)">Sort test plans by any column</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/test-plan-task-in-pipelines" data-raw-source="[Test Plan task in Pipelines](/azure/devops/release-notes/roadmap/2022/test-plan-task-in-pipelines)">Test Plan task in Pipelines</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/junit-java-support" data-raw-source="[JUnit / Java support in Test Plans](/azure/devops/release-notes/roadmap/2022/junit-java-support)">JUnit / Java support in Test Plans</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/improved-visibility" data-raw-source="[Improved co-relation between test run and test case versions](/azure/devops/release-notes/roadmap/2022/improved-visibility)">Improved co-relation between test run and test case versions</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/self-service-restore" data-raw-source="[Restore deleted test plans and test suites using REST API](/azure/devops/release-notes/roadmap/2022/self-service-restore)">Restore deleted test plans and test suites using REST API</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/improve-traceability" data-raw-source="[Improve traceability of in-progress test executions](/azure/devops/release-notes/roadmap/2022/improve-traceability)">Improve traceability of in-progress test executions</a></td>
        <td>Test Plans</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/alphabetical-sort" data-raw-source="[Sort test suites in alphabetical order](/azure/devops/release-notes/roadmap/2022/alphabetical-sort)">Sort test suites in alphabetical order</a></td>
        <td>Test Plans</td>
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
