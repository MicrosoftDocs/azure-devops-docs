---
title: Azure DevOps Roadmap
author: gloridelmorales
ms.author: glmorale
ms.date: 06/04/2024
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

# Product roadmap

This feature list is a peek into our roadmap. It identifies some of the significant features we are currently working on and a rough timeframe for when you can expect to see them. It is not comprehensive but is intended to provide some visibility into key investments. At the top you will find a list of our large multi-quarter initiatives and the features that they break down into. Further down you will find the full list of significant features we have planned. 

Each feature is linked to an article where you can learn more about a particular item. These features and dates are the current plans and are subject to change. The Timeframe columns reflect when we expect the feature to be available on Azure DevOps Services; the Server columns reflect when we expect the feature to ship in Azure DevOps Server. 

## Initiatives

### GitHub Advanced Security for Azure DevOps

GitHub Advanced Security (GHAS) for Azure DevOps is now generally available. Any project collection administrator can now enable Advanced Security for their organization, projects and repos from the Project Settings or Organization Settings. You can learn more about how to configure GitHub Advanced Security for Azure DevOps in our [documentation](/azure/devops/repos/security/configure-github-advanced-security-features). 

New capabilities we expect to deliver include: 
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
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/3p-sarif" data-raw-source="[Display code scanning alerts for third-party tools that produce SARIF)">Display code scanning alerts for third-party tools that produce SARIF</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
        <td>2024 Q2</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/pull-request-annotation" data-raw-source="[Display contextual comments to pull requests containing newly introduced Advanced Security findings](/azure/devops/release-notes/roadmap/2024/ghazdo/pull-request-annotation)">Display contextual comments to pull requests containing newly introduced Advanced Security findings</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
        <td>2024 Q2</td>        
        <td>N/A</td>
      </tr>      
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/secret-validity" data-raw-source="[Determine detected partner secrets validity](/azure/devops/release-notes/roadmap/2024/ghazdo/secret-validity)">Determine detected partner secrets validity</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
        <td>2024 Q2</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/dependabot" data-raw-source="[Automatically fix detected dependency scanning vulnerabilities with Dependabot security updates](/azure/devops/release-notes/roadmap/2024/ghazdo/dependabot)">Automatically fix detected dependency scanning vulnerabilities with Dependabot security updates</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
        <td>2024 Q2</td>
        <td>N/A</td>
      </tr>
   </tbody>
</table>

 
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
            <th>Quarter</th>
        </tr>
    </thead>
    <tbody>
      <tr>
         <td><a href="/azure/devops/release-notes/2021/sprint-186-update#pat-lifecycle-management-api-general-availability" data-raw-source="[PAT lifecycle APIs](/azure/devops/release-notes/2021/sprint-186-update#pat-lifecycle-management-api-general-availability)">PAT lifecycle APIs</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes" data-raw-source="[Control plane for personal access tokens (PAT)](/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes)">Control plane for personal access tokens (PAT)</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/support-azure-managed-identities" data-raw-source="[Managed Identity and Service Principal support](/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Managed Identity and Service Principal support (preview)</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/secret-free-azurerm-deployments" data-raw-source="[Workload identity federation for Azure Deployments](/azure/devops/release-notes/roadmap/2022/secret-free-deployments">Workload identity federation for Azure Deployments (preview)</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q3</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/granular-scopes" data-raw-source="[Granular scopes for Azure Active Directory OAuth](/azure/devops/release-notes/roadmap/granular-scopes)">Granular scopes for Azure Active Directory OAuth</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q3</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/support-azure-managed-identities" data-raw-source="[Managed Identity and Service Principal support](/azure/devops/release-notes/roadmap/support-azure-managed-identities)">Managed Identity and Service Principal support (GA)</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q3</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/secret-free-azurerm-deployments" data-raw-source="[Workload identity federation for Azure Deployments](/azure/devops/release-notes/roadmap/2022/secret-free-deployments">Workload identity federation for Azure service connection (GA)</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 Q1</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/secret-free-acr-deployments" data-raw-source="[Workload identity federation for Docker service connection](/azure/devops/release-notes/roadmap/2022/secret-free-deployments">Workload identity federation for Docker service connection</a></td>
         <td>Pipelines</td>
         <td>2024 H1</td>
      </tr>
       <tr>
         <td><a href="/azure/devops/release-notes/roadmap/conditional-access-policy" data-raw-source="[Full web support for Conditional Access Policies](/azure/devops/release-notes/roadmap/conditional-access-policy)">Full web support for Conditional Access Policies</a></td>
         <td>General</td>
         <td>2024 H1</td>
         <td>N/A</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable authentication methods](/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable authentication methods</a></td>
         <td>General</td>
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
         <td><a href="/azure/devops/release-notes/roadmap/2024/scale-github-repos" data-raw-source="[Improve scalability when searching and linking GitHub repos to an Azure DevOps project](/azure/devops/release-notes/roadmap/2024/scale-github-repos)">Improve scalability when searching and linking GitHub<br/>repos to an Azure DevOps project</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q2</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-237-update#ab-links-on-github-pull-requests-preview" data-raw-source="[AB# links on GitHub pull request](/azure/devops/release-notes/2024/sprint-237-update#ab-links-on-github-pull-requests-preview)">AB# links on GitHub pull request (preview)</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q2</td>
         <td>Future</td>
      </tr>
       <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-235-update#show-github-pull-request-details-preview" data-raw-source="[Show more details about a GitHub Pull Request](/azure/devops/release-notes/2024/sprint-235-update#show-github-pull-request-details-preview)">Show more details about a GitHub pull request (preview)</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q1</td>
         <td>Future</td>
      </tr>   
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/github-branch" data-raw-source="[Create branch on GitHub repository from work item](/azure/devops/release-notes/roadmap/2024/github-branch)">Create branch on GitHub repository from work item</a></td>
         <td>Boards</td>
         <td>2024 Q3</td>
         <td>Future</td>
      </tr>      
    </tbody>
</table>

### YAML and release pipelines feature parity

For the past several years, all our pipelines investments have been in the area of YAML pipelines. Furthermore, all our security improvements have been for YAML pipelines. For example, with YAML pipelines, the control over [protected resources](azure/devops/pipelines/security/resources) (e.g., repositories, service connections, etc) is in the hands of the resource owners as opposed to pipeline authors. The [job access tokens](/azure/devops/pipelines/process/access-tokens?view=azure-devops&tabs=yaml#scoped-build-identities) that are used in YAML pipelines are scoped to specific repositories that are specified in the YAML file. These are just two examples of security features that are available for YAML pipelines. For these reasons, we recommend using YAML pipelines over classic. Adoption of YAML over classic has been significant for builds (CI). However, many customers have continued to use classic release management pipelines over YAML for releases (CD). The primary reason for this is the lack of parity in various CD features between the two solutions. Over the past year, we addressed several gaps in this area, notably in **Checks**. Checks are the primary mechanism in YAML pipelines to gate promotion of a build from one stage to another. We will continue to address gaps in other areas over the next year. Our focus will be on user experiences, traceability, and environments.

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
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/deferred-approvals" data-raw-source="[Deferred approvals](/azure/devops/release-notes/roadmap/2024/deferred-approvals)">Deferred approvals</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 Q1</td>
         <td>Future</td>
      </tr>
       <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/rerun-single-stage" data-raw-source="[Rerun single stage](/azure/devops/release-notes/roadmap/2024/rerun-single-stage)">Rerun single stage</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 Q1</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-concurrency" data-raw-source="[Stage-level concurrency](/azure/devops/release-notes/roadmap/2024/stage-conncurrency)">Stage-level concurrency</a></td>
         <td>Pipelines</td>
         <td>2024 Q3</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages" data-raw-source="[Manual queuing of stages](/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages)">Manual queuing of stages</a></td>
         <td>Pipelines</td>
         <td>2024 H2</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-traceability" data-raw-source="[Stage-level traceability](/azure/devops/release-notes/roadmap/2024/stage-traceability)">Stage-level traceability</a></td>
         <td>Pipelines</td>
         <td>2024 H2</td>
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

## All features

## Azure DevOps Services

<table>
    <thead>
        <tr>
            <th>Timeframe</th>
            <th>Feature</th>
            <th>Area</th>
        </tr>
    </thead>
    <tbody>       
      <td rowspan="14"><strong>2024 Q2</strong></td>
       <td>
         <a href="/azure/devops/release-notes/roadmap/conditional-access-policy" data-raw-source="[Full web support for Conditional Access Policies](/azure/devops/release-notes/roadmap/conditional-access-policy)">Full web support for Conditional Access Policies</a>
       </td>
       <td>General</td>
      </tr>     
      <tr>
         <td>
            <a href="/azure/devops/release-notes/2024/sprint-237-update#connect-to-github-repository-search-improvements-preview" data-raw-source="[Improve scalability when searching and linking GitHub repos to an Azure DevOps project](/azure/devops/release-notes/2024/sprint-237-update#connect-to-github-repository-search-improvements-preview)">Improve scalability when searching and linking GitHub repos to an Azure DevOps project</a>
         </td>
         <td>Boards</td>         
        </tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview" data-raw-source="[Add link to GitHub commit or pull request from work item](/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview)">Add link to GitHub commit or pull request from work item</a></td>
         <td>Boards</td>         
        </tr> 
      <tr>
       <td>
         <a href="/azure/devops/release-notes/2024/sprint-237-update#ab-links-on-github-pull-requests-preview" data-raw-source="[Show AB# links on GitHub pull request](/azure/devops/release-notes/2024/sprint-237-update#ab-links-on-github-pull-requests-preview)">Show AB# links on GitHub pull request</a>
       </td>
         <td>Boards</td>         
       </tr>        
       <tr>
        <td><a href="/azure/devops/release-notes/2023/sprint-222-update#azure-boards-1" data-raw-source="[Markdown editor for work item comments](/azure/devops/release-notes/2023/sprint-222-update#azure-boards-1)">Markdown editor for work item comments</a></td>
        <td>Boards</td>
      </tr>
       <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/boards-delete-area-path" data-raw-source="[Prevent deleting of an active area or iteration path](/azure/devops/release-notes/roadmap/2024/boards-delete-area-path)">Prevent deleting of an active area or iteration path</a>
         </td>
         <td>Boards</td>        
       </tr>      
      <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/no-tfvc-in-new-projects" data-raw-source="[Removal of TFVC from new projects](/azure/devops/release-notes/roadmap/2024/no-tfvc-in-new-projects)">Removal of TFVC from new projects</a>
         </td>
         <td>Repos</td>        
      </tr>      
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-concurrency" data-raw-source="[Stage-level concurrency](/azure/devops/release-notes/roadmap/2024/stage-conncurrency)">Stage-level concurrency</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/pull-request-annotation" data-raw-source="[Pull Request Annotation](/azure/devops/release-notes/roadmap/2024/ghazdo/pull-request-annotation)">Newly introduced findings are highlighted in PR comments</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo-improved-generic-secrets" data-raw-source="[Improved secret detection](/azure/devops/release-notes/roadmap/2024/ghazdo-improved-generic-secrets)">Improved secret detection</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/3p-sarif" data-raw-source="[Third-party SARIF support](/azure/devops/release-notes/roadmap/2024/ghazdo/3p-sarif)">Third-party SARIF support</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo-security-overview" data-raw-source="[Security Overview](/azure/devops/release-notes/roadmap/2024/ghazdo-security-overview)">Security Overview</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/dependabot" data-raw-source="[DependaBot Security Update Support](/azure/devops/release-notes/roadmap/2024/ghazdo/dependabot)">Dependabot Security Update Support</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/secret-validity" data-raw-source="[Secret Validity Checking](/azure/devops/release-notes/roadmap/2024/ghazdo/secret-validity)">Secret Validity Checking</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <td rowspan="4"><strong>2024 Q3</strong></td>
         <td><a href="/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages" data-raw-source="[Manual queuing of stages](/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages)">Manual queuing of stages</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/boards-permanently-delete-attachment" data-raw-source="[Permanently delete work item attachments](/azure/devops/release-notes/roadmap/2024/boards-permanently-delete-attachment">Permanently delete work item attachment</a>
         </td>
         <td>Boards</td> 
      </tr> 
      <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/github-branch" data-raw-source="[Create branch on GitHub repository from work item](/azure/devops/release-notes/roadmap/2024/github-branch)">Create branch on GitHub repository from work item (preview)</a>
         </td>
         <td>Boards</td> 
      </tr> 
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/self-service-restore" data-raw-source="[Restore deleted test plans and test suites using REST API](/azure/devops/release-notes/roadmap/2022/self-service-restore)">Restore deleted test plans and test suites using REST API</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
      <td rowspan="21"><strong>Future</strong></td>
        <td><a href="/azure/devops/release-notes/roadmap/auditing-ga" data-raw-source="[Auditing GA](/azure/devops/release-notes/roadmap/auditing-ga)">Auditing GA</a></td>
        <td>General</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable authentication methods](/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable authentication methods</a></td>
        <td>General</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/access-events-for-pat" data-raw-source="[Access events for PAT, SSH will be available in the Auditing Log](/azure/devops/release-notes/roadmap/access-events-for-pat)">Access events for PAT, SSH will be available in the Auditing Log</a></td>
        <td>General</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/commits-search" data-raw-source="[Commits search](/azure/devops/release-notes/roadmap/2023/commits-search)">Commits search</a></td>
        <td>General</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/pr-search" data-raw-source="[PR search](/azure/devops/release-notes/roadmap/2024/pr-search)">PR search</a></td>
        <td>General</td>
      </tr>   
      <td>
         <a href="/azure/devops/release-notes/2024/sprint-237-update#new-boards-hub-on-by-default" data-raw-source="[New Boards Hub on by default](/azure/devops/release-notes/2024/sprint-237-update#new-boards-hub-on-by-default)">New Boards Hub on by default</a>
        </td>
        <td>Boards</td>
      </tr>  
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/page-filters-include-additional-fields" data-raw-source="[Additional fields on page filters](/azure/devops/release-notes/roadmap/2023/page-filters-include-additional-fields)">Additional fields on page filters</a></td>
        <td>Boards</td>
      </tr>      
      <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/boards-yaml-pipeline-show-build-status" data-raw-source="[Show build status when using a YAML build pipeline with GitHub repository](/azure/devops/release-notes/roadmap/2024/boards-yaml-pipeline-show-build-status)">Show build status when using a YAML build pipeline with GitHub repository</a>
         </td>
         <td>Boards</td>         
      </tr> 
      <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/boards-show-github-actions-status" data-raw-source="[Show status of GitHub Actions work flow run](/azure/devops/release-notes/roadmap/2024/boards-show-github-actions-status)">Show status of GitHub Actions work flow run</a>
         </td>
         <td>Boards</td>         
      </tr>    
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/track-repo-cloning" data-raw-source="[Track repo cloning](/azure/devops/release-notes/roadmap/track-repo-cloning)">Track repo cloning</a></td>
        <td>Repos</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/pick-next-runner" data-raw-source="[Ability to run tasks on next available Node version, if targeted version is not available](/azure/devops/release-notes/roadmap/2022/pick-next-runner)">Ability to run tasks on next available Node version, if targeted<br>version is not available</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/support-pipelines-app" data-raw-source="[Support Pipelines App with GitHub Enterprise](/azure/devops/release-notes/roadmap/support-pipelines-app)">Support Pipelines App with GitHub Enterprise</a></td>
        <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/service-connections-in-checks" data-raw-source="[Service connections in checks](/azure/devops/release-notes/roadmap/2022/service-connections-in-checks)">Service connections in checks</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/checks-extensibility" data-raw-source="[Checks extensibility](/azure/devops/release-notes/roadmap/2022/checks-extensibility)">Checks extensibility</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-traceability" data-raw-source="[Stage-level traceability](/azure/devops/release-notes/roadmap/2024/stage-traceability)">Stage-level traceability</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/package-promote-task" data-raw-source="[Package promote task in Azure Pipelines](/azure/devops/release-notes/roadmap/package-promote-task)">Package promote task in Azure Pipelines</a></td>
        <td>Artifacts</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts" data-raw-source="[Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks](/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts)">Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks</a></td>
        <td>Artifacts</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/test-plan-task-in-pipelines" data-raw-source="[Test Plan task in Pipelines](/azure/devops/release-notes/roadmap/2022/test-plan-task-in-pipelines)">Test Plan task in Pipelines</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/junit-java-support" data-raw-source="[JUnit / Java support in Test Plans](/azure/devops/release-notes/roadmap/2022/junit-java-support)">JUnit / Java support in Test Plans</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/improved-visibility" data-raw-source="[New Test Runs experience](/azure/devops/release-notes/roadmap/2022/improved-visibility)">New Test Runs experience</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/improve-traceability" data-raw-source="[Improve traceability of in-progress test executions](/azure/devops/release-notes/roadmap/2022/improve-traceability)">Improve traceability of in-progress test executions</a></td>
        <td>Test Plans</td>
      </tr>
   </tbody>
</table>

## Azure DevOps Server 

<table>
    <thead>
        <tr>
            <th>Version - Timeframe</th>
            <th>Feature</th>
            <th>Area</th>
        </tr>
    </thead>
    <tbody>       
      <tr>
        <td rowspan="15"><strong>2022.3 - 2025 H1</strong></td>
        <td><a href="/azure/devops/release-notes/2024/sprint-233-update#team-automation-rules-is-generally-available" data-raw-source="[Automate rules for updating work items](/azure/devops/release-notes/2024/sprint-233-update#team-automation-rules-is-generally-available)">Automated team work item rules</a></td>
        <td>Boards</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/2024/sprint-233-update#github-integration---improved-ab-validation-is-generally-available" data-raw-source="[Improved AB# validation](/azure/devops/release-notes/2024/sprint-233-update#github-integration---improved-ab-validation-is-generally-available)">Improved GitHub app and AB#{ID} validation</a></td>
        <td>Boards</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview" data-raw-source="[Add link to GitHub commit or pull request from work item](/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview)">Add link to GitHub commit or pull request from work item (preview)</a></td>
        <td>Boards</td>         
      </tr> 
       <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-235-update#show-github-pull-request-details-preview" data-raw-source="[Show more details about a GitHub pull request](/azure/devops/release-notes/2024/sprint-235-update#show-github-pull-request-details-preview)">Show more details about a GitHub pull request (preview)</a></td>
         <td>Boards</td>      
      </tr>       
      <tr>
        <td><a href="/azure/devops/release-notes/2023/sprint-222-update#azure-boards-1" data-raw-source="[Markdown editor for work item comments](/azure/devops/release-notes/2023/sprint-222-update#azure-boards-1)">Markdown editor for work item comments (preview)</a></td>
        <td>Boards</td>
      </tr>        
      </tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16" data-raw-source="[All in-the-box tasks run on Node 16](/azure/devops/release-notes/roadmap/2022/in-the-box-tasks-on-16)">All in-the-box tasks run on Node 16</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2023/install-old-runner" data-raw-source="[Ability to download and install old runners on self-hosted agents](/azure/devops/release-notes/roadmap/2023/install-old-runner)">Ability to download and install old runners on self-hosted agents</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/pick-next-runner" data-raw-source="[Ability to run tasks on next available Node version, if targeted version is not available](/azure/devops/release-notes/roadmap/2022/pick-next-runner)">Ability to run tasks on next available Node version, if targeted version is not available</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents" data-raw-source="[Removal of Node 6 and 10 from Microsoft hosted pools](/azure/devops/release-notes/roadmap/2022/no-node-6-on-hosted-agents)">Removal of Node 6 and 10 from Microsoft hosted pools</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2022/checks-sequencing" data-raw-source="[Sequencing approvals and other checks](/azure/devops/release-notes/roadmap/2022/checks-sequencing)">Sequencing approvals and other checks</a></td>
        <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings" data-raw-source="[In-product recommendations for secure settings](/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings)">In-product recommendations for secure settings</a></td>
        <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages" data-raw-source="[Manual queuing of stages](/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages)">Manual queuing of stages</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/rerun-single-stage" data-raw-source="[Rerun single stage](/azure/devops/release-notes/roadmap/2024/rerun-single-stage)">Rerun single stage</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-concurrency" data-raw-source="[Stage-level concurrency](/azure/devops/release-notes/roadmap/2024/stage-conncurrency)">Stage-level concurrency</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-traceability" data-raw-source="[Stage-level traceability](/azure/devops/release-notes/roadmap/2024/stage-traceability)">Stage-level traceability</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
      <td rowspan="5"><strong>2022.4 - 2025 H2</strong></td>
        <td><a href="/azure/devops/release-notes/roadmap/2023/reduce-time-to-filter" data-raw-source="[Reduce time to filter test plans and test suites in copy and import operations](/azure/devops/release-notes/roadmap/2022/reduce-time-to-filter)">Reduce time to filter test plans and test suites in copy and import operations</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/code-coverage-policy" data-raw-source="[Code coverage policy at a folder level](/azure/devops/release-notes/roadmap/2022/code-coverage-policy)">Code coverage policy at a folder level</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/new-boards-hub-on-by-default" data-raw-source="[New Boards Hub on by default](/azure/devops/release-notes/roadmap/2023/new-boards-hub-on-by-default)">New Boards Hub on by default</a></td>
        <td>Boards</td>
      </tr>     
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/github-branch" data-raw-source="[Create branch on GitHub repository from work item](/azure/devops/release-notes/roadmap/2024/github-branch)">Create branch on GitHub repository from work item</a></td>
         <td>Boards</td>        
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/scale-github-repos" data-raw-source="[Improve scalability when searching and linking GitHub repos to an Azure DevOps project](/azure/devops/release-notes/roadmap/2024/scale-github-repos)">Improve scalability when searching and linking GitHub<br/>repos to an Azure DevOps project</a></td>
         <td>Boards</td>         
      </tr> 
      <td rowspan="25"><strong>TBD - Future</strong></td>
        <td><a href="/azure/devops/release-notes/roadmap/auditing-ga" data-raw-source="[Auditing GA](/azure/devops/release-notes/roadmap/auditing-ga)">Auditing GA</a></td>
        <td>General</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable authentication methods](/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable authentication methods</a></td>
        <td>General</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/access-events-for-pat" data-raw-source="[Access events for PAT, SSH will be available in the Auditing Log](/azure/devops/release-notes/roadmap/access-events-for-pat)">Access events for PAT, SSH will be available in the Auditing Log</a></td>
        <td>General</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/substring-search" data-raw-source="[Substring search](/azure/devops/release-notes/roadmap/2023/substring-search)">Substring search</a></td>
        <td>General</td>
      </tr>
       <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/commits-search" data-raw-source="[Commits search](/azure/devops/release-notes/roadmap/2023/commits-search)">Commits search</a></td>
        <td>General</td>
      </tr>      
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/page-filters-include-additional-fields" data-raw-source="[Additional fields on page filters](/azure/devops/release-notes/roadmap/2023/page-filters-include-additional-fields)">Additional fields on page filters</a></td>
        <td>Boards</td>
      </tr>
       <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/delivery-plans-parent-filters" data-raw-source="[Delivery plans improvements to filtering by parent](/azure/devops/release-notes/roadmap/2023/delivery-plans-parent-filters)">Delivery plans improvements to filtering by parent</a></td>
        <td>Boards</td>
      </tr> 
      <tr>          
        <td><a href="/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown" data-raw-source="[Markdown editor for work item multi-line fields](/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown)">Markdown editor for work item multi-line fields</a></td>
        <td>Boards</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/track-repo-cloning" data-raw-source="[Track repo cloning](/azure/devops/release-notes/roadmap/track-repo-cloning)">Track repo cloning</a></td>
        <td>Repos</td>
      </tr>
       <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2022/remove-node-6" data-raw-source="[Stop shipping Node 6 and Node 10 runners with the agent](/azure/devops/release-notes/roadmap/2022/remove-node-6)">Stop shipping Node 6 and Node 10 runners with the agent</a></td>
        <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2022/node-16-agent" data-raw-source="[Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)](/azure/devops/release-notes/roadmap/2022/node-16-agent)">Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)</a></td>
        <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/support-pipelines-app" data-raw-source="[Support Pipelines App with GitHub Enterprise](/azure/devops/release-notes/roadmap/support-pipelines-app)">Support Pipelines App with GitHub Enterprise</a></td>
        <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/service-connections-in-checks" data-raw-source="[Service connections in checks](/azure/devops/release-notes/roadmap/2022/service-connections-in-checks)">Service connections in checks</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/checks-extensibility" data-raw-source="[Checks extensibility](/azure/devops/release-notes/roadmap/2022/checks-extensibility)">Checks extensibility</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/package-promote-task" data-raw-source="[Package promote task in Azure Pipelines](/azure/devops/release-notes/roadmap/package-promote-task)">Package promote task in Azure Pipelines</a></td>
        <td>Artifacts</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts" data-raw-source="[Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks](/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts)">Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks</a></td>
        <td>Artifacts</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/dashboard-global-parameter" data-raw-source="[Dashboard Global Parameter](azure/devops/release-notes/roadmap/2024/dashboard-global-parameter)">Dashboard Global Parameter</a></td>
         <td>Reporting</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/dashboard-template" data-raw-source="[Dashboard Template](/azure/devops/release-notes/roadmap/2024/dashboard-template)">Dashboard Template</a></td>
         <td>Reporting</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2022/sort-test-plans" data-raw-source="[Pause and resume manual test execution](/azure/devops/release-notes/roadmap/2022/sort-test-plans)">Sort test plans by any column</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/test-plan-task-in-pipelines" data-raw-source="[Test Plan task in Pipelines](/azure/devops/release-notes/roadmap/2022/test-plan-task-in-pipelines)">Test Plan task in Pipelines</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/junit-java-support" data-raw-source="[JUnit / Java support in Test Plans](/azure/devops/release-notes/roadmap/2022/junit-java-support)">JUnit / Java support in Test Plans</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/improved-visibility" data-raw-source="[Improved co-relation between test run and test case versions](/azure/devops/release-notes/roadmap/2022/improved-visibility)">Improved co-relation between test run and test case versions</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/self-service-restore" data-raw-source="[Restore deleted test plans and test suites using REST API](/azure/devops/release-notes/roadmap/2022/self-service-restore)">Restore deleted test plans and test suites using REST API</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/improve-traceability" data-raw-source="[Improve traceability of in-progress test executions](/azure/devops/release-notes/roadmap/2022/improve-traceability)">Improve traceability of in-progress test executions</a></td>
        <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/alphabetical-sort" data-raw-source="[Sort test suites in alphabetical order](/azure/devops/release-notes/roadmap/2022/alphabetical-sort)">Sort test suites in alphabetical order</a></td>
        <td>Test Plans</td>
      </tr>
   </tbody>
</table>
---

## How to provide feedback

We would love to hear what you think about these features. Report any problems or suggest a feature through [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

> [!div class="mx-imgBorder"] 
> ![Make a suggestion](media/help-make-a-suggestion.png)

You can also get advice and your questions answered by the community on [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops).