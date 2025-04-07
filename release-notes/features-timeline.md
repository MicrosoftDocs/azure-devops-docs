---
title: Azure DevOps Roadmap
author: gloridelmorales
ms.author: glmorale
ms.date: 3/15/2025
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

Each feature is linked to an article where you can learn more about a particular item. These features and dates are the current plans and are subject to change. The Timeframe columns reflect when we expect the feature to be available.

## Initiatives

### GitHub Advanced Security for Azure DevOps

GitHub Advanced Security for Azure DevOps (GHAzDO) brings additional security features to Azure DevOps under an additional license. Any project collection administrator can now enable Advanced Security for their organization, projects and repos from the Project Settings or Organization Settings. 

The main capabilities of GitHub Advanced Security for Azure DevOps are:

- *Secret Scanning:* Detect and remediate plaintext secrets in your git repositories. If push protection is enabled, it also detects and blocks secrets before they are pushed to your repositories.
- *Code Scanning:* Search for potential security vulnerabilities and coding errors in your code using CodeQL or a third-party tool.
- *Dependency Scanning:* Detect and alert when your code depends on a package that is insecure and receive straightforward remediation guidance.

You can learn more about how to configure GitHub Advanced Security for Azure DevOps in our [documentation](/azure/devops/repos/security/configure-github-advanced-security-features).

Upcoming capabilities we expect to deliver include: 
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
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/secret-validity" data-raw-source="[Determine detected partner secrets validity](/azure/devops/release-notes/roadmap/2024/ghazdo/secret-validity)">Determine detected partner secrets validity</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
        <td>2025 Q1</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2025/ghazdo/boards-linking" data-raw-source="[Link Boards items to Advanced Security Alerts](/azure/devops/release-notes/roadmap/2025/ghazdo/boards-linking)">Link Boards items to Advanced Security Alerts</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
        <td>2025 Q2</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/dependabot" data-raw-source="[Automatically fix detected dependency scanning vulnerabilities with Dependabot security updates](/azure/devops/release-notes/roadmap/2024/ghazdo/dependabot)">Automatically fix detected dependency scanning vulnerabilities with Dependabot security updates</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
        <td>Future</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2025/ghazdo/default-setup" data-raw-source="[CodeQL default setup (one-click enablement)](/azure/devops/release-notes/roadmap/2025/ghazdo/default-setup)">CodeQL default setup (one-click enablement)</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
        <td>Future</td>
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
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/secret-free-acr-deployments" data-raw-source="[Workload identity federation for Docker service connection](/azure/devops/release-notes/roadmap/2022/secret-free-deployments">Workload identity federation for Docker service connection</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 H2</td>
      </tr>
       <tr>
         <td><a href="/azure/devops/release-notes/roadmap/conditional-access-policy" data-raw-source="[Full web support for Conditional Access Policies](/azure/devops/release-notes/roadmap/conditional-access-policy)">Full web support for Conditional Access Policies</a></td>
         <td>General</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 Q4</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable the use of personal access tokens (PAT)](/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable the use of personal access tokens (PAT)</a></td>
         <td>General</td>
         <td>2025 Q1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/new-service-connection" data-raw-source="[New service connection type for pipelines to authenticate with Azure DevOps](/azure/devops/release-notes/roadmap/2025/new-service-connection)">New service connection type for pipelines to authenticate with Azure DevOps</a></td>
         <td>Pipelines</td>
         <td>2025 Q1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/workload-identity-federation" data-raw-source="[Workload identity federation using Entra-issued tokens](/azure/devops/release-notes/roadmap/2025/workload-identity-federation)">Workload identity federation using Entra-issued tokens</a></td>
         <td>Pipelines</td>
         <td>2025 Q2</td>
      </tr>
        <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/continuous-access-evaluation" data-raw-source="[Continuous access evaluation](/azure/devops/release-notes/roadmap/2025/continuous-access-evaluation)">Continuous access evaluation</a></td>
         <td>General</td>
         <td>Future</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/proof-of-possession" data-raw-source="[Using device bound Entra tokens in Azure DevOps web client](/azure/devops/release-notes/roadmap/2025/proof-of-possession)">Using device bound Entra tokens in Azure DevOps web client</a></td>
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
            <th>Quarter</th>
         </tr>
    </thead>
    <tbody>      
      <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview" data-raw-source="[Add link to GitHub Commit or Pull Request from work item](/azure/devops/release-notes/2024/sprint-234-update#add-link-to-github-commit-or-pull-request-preview)">Add link to GitHub commit or pull request from work item</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q1</td>
      </tr>   
    <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-242-update#connect-to-github-repository-search-improvements" data-raw-source="[Show more details about a GitHub Pull Request](/azure/devops/release-notes/2024/sprint-242-update#connect-to-github-repository-search-improvements)">Show more details about a GitHub pull request</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q1</td>
      </tr>   
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/scale-github-repos" data-raw-source="[Improve scalability when searching and linking GitHub repos to an Azure DevOps project](/azure/devops/release-notes/roadmap/2024/scale-github-repos)">Improve scalability when searching and linking GitHub<br/>repos to an Azure DevOps project</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q2</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-237-update#ab-links-on-github-pull-requests-preview" data-raw-source="[AB# links on GitHub pull request](/azure/devops/release-notes/2024/sprint-237-update#ab-links-on-github-pull-requests-preview)">AB# links on GitHub pull request</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q2</td>
      </tr>       
      <tr>
         <td><a href="/azure/devops/release-notes/2024/sprint-242-update#create-github-branch-from-work-item" data-raw-source="[Create branch on GitHub repository from work item](azure/devops/release-notes/2024/sprint-242-update#create-github-branch-from-work-item)">Create branch on GitHub repository from work item</a></td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2024 Q3</td>
      </tr>      
      <tr>
         <td>
            <a href="/azure/devops/release-notes/2025/sprint-252-update#github-integration-linking-the-merge-commit" data-raw-source="[Auto link the merge commit](/azure/devops/release-notes/2025/sprint-252-update#github-integration-linking-the-merge-commit)">Auto link the merge commit</a>
         </td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2025 Q1</td>   
      </tr>  
      <tr>
         <td>
            <a href="/azure/devops/release-notes/2025/sprint-254-update#github-integration-improvements-linking-to-commits-branches-and-pull-requests" data-raw-source="[Automatically link pull requests when linked to a GitHub branch](/azure/devops/release-notes/2025/sprint-254-update#github-integration-improvements-linking-to-commits-branches-and-pull-requests)">Automatically link pull requests when linked to a GitHub branch</a>
         </td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2025 Q1</td>   
      </tr>       
      <tr>
         <td>
            <a href="/azure/devops/release-notes/2025/sprint-254-update#github-integration-improvements-linking-to-commits-branches-and-pull-requests" data-raw-source="[Automatically remove branch links from work items when their corresponding GitHub branches are deleted](/azure/devops/release-notes/2025/sprint-254-update#github-integration-improvements-linking-to-commits-branches-and-pull-requests)">Automatically remove branch links when their corresponding<br/>GitHub branches are deleted</a>
         </td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2025 Q1</td>   
      </tr>    
      <tr>
         <td>
            <a href="/azure/devops/release-notes/2025/sprint-254-update#github-integration-show-build-status-for-yaml-pipelines" data-raw-source="[Show build status when using a YAML build pipeline with GitHub repository](/azure/devops/release-notes/2025/sprint-254-update#github-integration-show-build-status-for-yaml-pipelines)">Show build status when using a YAML build pipeline with<br />GitHub repository</a>
         </td>
         <td>Boards</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done" />2025 Q1</td>   
      </tr>    
      <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/boards-gh-pr-mentions" data-raw-source="[! mentions support](/azure/devops/release-notes/roadmap/2024/boards-gh-pr-mentions)">! mentions support for GitHub pull requests</a>
         </td>
         <td>Boards</td>
         <td>2025 Q2</td>
      </tr>       
      <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/boards-state-transitions-with-github-repos" data-raw-source="[Support state transitions when merging a GitHub pull request](/azure/devops/release-notes/roadmap/2024/boards-state-transitions-with-github-repos)">Support state transitions when merging a GitHub pull request</a>
         </td>
         <td>Boards</td>
         <td>2025 Q2</td>   
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2025/sprint-248-update#azure-boards-integration-with-github-enterprise-cloud-with-data-residency" data-raw-source="[Support GitHub Enterprise Cloud with data residency](azure/devops/release-notes/2025/sprint-248-update#azure-boards-integration-with-github-enterprise-cloud-with-data-residency)">Support for GitHub Enterprise Cloud with data residency</a></td>
         <td>Boards</td>
         <td>2025 Q2</td>
      </tr>             
    </tbody>
</table>

### Migrate to Managed DevOps Pools

Managed DevOps Pools is an evolution of Azure DevOps Virtual Machine Scale Set agent pools. It provides better pool scalability and reliability, simplifies pool management, and allows you to use the VM images from Microsoft-hosted agents on custom Azure VMs. You can read more about Managed DevOps Pools [here](https://aka.ms/mdp-docs). Managed DevOps Pools is generally available, so you can migrate your Virtual machine Scale Set pools to Managed DevOps Pools and use them for production workflows, wherever possible. 

Below, you will find several investments we plan to deliver as part of this initiative:

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
         <td>Spot VM agents</td>
         <td>Pipelines</td>
         <td>2025 Q2</td>
      </tr>
      <tr>
         <td>Preemptive agent download</td>
         <td>Pipelines</td>
         <td>2025 Q2</td>
      </tr>
      <tr>
         <td>Add trusted root certificates</td>
         <td>Pipelines</td>
         <td>2025 Q2</td>
      </tr>
      <tr>
         <td>Container based agents</td>
         <td>Pipelines</td>
         <td>2025 Q4</td>
      </tr>
   </tbody>
</table>

### YAML and release pipelines feature parity

For the past several years, all our pipelines investments have been in the area of YAML pipelines. Furthermore, all our security improvements have been for YAML pipelines. For example, with YAML pipelines, the control over [protected resources](/azure/devops/pipelines/security/resources) (e.g., repositories, service connections, etc.) is in the hands of the resource owners as opposed to pipeline authors. The [job access tokens](/azure/devops/pipelines/process/access-tokens#scoped-build-identities) that are used in YAML pipelines are scoped to specific repositories that are specified in the YAML file. These are just two examples of security features that are available for YAML pipelines. For these reasons, we recommend using YAML pipelines over classic. Adoption of YAML over classic has been significant for builds (CI). However, many customers have continued to use classic release management pipelines over YAML for releases (CD). The primary reason for this is the lack of parity in various CD features between the two solutions. Over the past year, we addressed several gaps in this area, notably in **Checks**. Checks are the primary mechanism in YAML pipelines to gate promotion of a build from one stage to another. We will continue to address gaps in other areas over the next year. Our focus will be on user experiences, traceability, and environments.

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
         <td><a href="/azure/devops/release-notes/2022/sprint-212-update#audit-events-for-changes-to-approvals" data-raw-source="[Auditing for checks](/azure/devops/release-notes/2022/sprint-212-update#audit-events-for-changes-to-approvals)">Auditing for checks</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2022 Q4</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/2023/sprint-215-update#variables-as-inputs-in-checks" data-raw-source="[Custom variables in checks](azure/devops/release-notes/2023/sprint-215-update#variables-as-inputs-in-checks)">Custom variables in checks</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q1</td>
      </tr>
      <tr>
         <td><a href="https://devblogs.microsoft.com/devops/updates-to-approvals-and-checks/" data-raw-source="[Checks scalability](https://devblogs.microsoft.com/devops/updates-to-approvals-and-checks/)">Checks scalability</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q2</td>
      </tr>
     <tr>
         <td><a href="/azure/devops/release-notes/2023/sprint-230-update#bypass-approvals-and-checks" data-raw-source="[Bypass approvals and checks](/azure/devops/release-notes/2023/sprint-230-update#bypass-approvals-and-checks)">Bypass approvals and checks</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2023 Q4</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2022/checks-sequencing" data-raw-source="[Sequencing approvals and other checks](/azure/devops/release-notes/roadmap/2022/checks-sequencing)">Sequencing approvals and other checks</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 Q1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/deferred-approvals" data-raw-source="[Deferred approvals](/azure/devops/release-notes/roadmap/2024/deferred-approvals)">Deferred approvals</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 Q1</td>
      </tr>
       <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/rerun-single-stage" data-raw-source="[Rerun single stage](/azure/devops/release-notes/roadmap/2024/rerun-single-stage)">Rerun single stage</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 Q1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages" data-raw-source="[Manual queuing of stages](/azure/devops/release-notes/roadmap/2024/manual-queuing-of-stages)">Manual queuing of stages</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 H2</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-concurrency" data-raw-source="[Stage-level concurrency](/azure/devops/release-notes/roadmap/2024/stage-conncurrency)">Stage-level concurrency</a></td>
         <td>Pipelines</td>
         <td><img src="roadmap/2023/media/checkmark.png" alt="Done">2024 Q3</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-traceability" data-raw-source="[Stage-level traceability](/azure/devops/release-notes/roadmap/2024/stage-traceability)">Stage-level traceability</a></td>
         <td>Pipelines</td>
         <td>2025 Q2</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/on-demand-execution" data-raw-source="[On-demand out of order execution of stages](/azure/devops/release-notes/roadmap/2025/on-demand-execution)">On-demand out of order execution of stages</a></td>
         <td>Pipelines</td>
         <td>2025 Q2</td>
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
    </tbody>
</table>

### Azure Test Plans improvements 

Azure DevOps provides a variety of testing tools and integrations to support different testing needs. These include manual testing, automated testing, and exploratory testing. The platform allows for the creation and management of test plans and test suites, which can be used to track manual testing for sprints or milestones. Additionally, Azure DevOps integrates with CI/CD pipelines, enabling automated test execution and reporting. 

We are ramping up our investments in this area in response to feedback from our most active customer base. Our focus will be on the following aspects of test management: improving end-to-end test traceability; extending support for various programming languages and frameworks for automated testing in Test Plans; redesigning workflows and experiences for consuming test runs and test results. 

Below, you will find several investments that we plan to deliver as part of this initiative: 

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
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/support-for-junit" data-raw-source="[Support for JUnit/Java in Azure Test Plans](/azure/devops/release-notes/roadmap/2025/testplans/support-for-junit)">Support for JUnit/Java in Azure Test Plans</a></td>
         <td>Test Plans</td>
         <td>2025 Q1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/support-for-pytest" data-raw-source="[Support for Pytest/Python in Azure Test Plans](/azure/devops/release-notes/roadmap/2025/testplans/support-for-pytest)">Support for Pytest/Python in Azure Test Plans</a></td>
         <td>Test Plans</td>
         <td>2025 Q1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/restore-deleted-test-plans" data-raw-source="[Restore deleted test plans and test suites using REST API](/azure/devops/release-notes/roadmap/2025/testplans/restore-deleted-test-plans)">Restore deleted test plans and test suites using REST API</a></td>
         <td>Test Plans</td>
         <td>2025 Q1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/auto-pause-manual-test" data-raw-source="[Auto-pause manual test case run](/azure/devops/release-notes/roadmap/2025/testplans/auto-pause-manual-test)">Auto-pause manual test case run</a></td>
         <td>Test Plans</td>
         <td>2025 Q1</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/quick-access-to-test-results" data-raw-source="[Quick access to Test Results in Test Case](/azure/devops/release-notes/roadmap/2025/testplans/quick-access-to-test-results)">Quick access to Test Results in Test Case</a></td>
         <td>Test Plans</td>
         <td>2025 Q2</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/resume-paused-test-cases" data-raw-source="[Resume paused test cases on by default](/azure/devops/release-notes/roadmap/2025/testplans/resume-paused-test-cases)">Resume paused test cases on by default</a></td>
         <td>Test Plans</td>
         <td>2025 Q2</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/new-test-run-experience" data-raw-source="[New Test Run experience](/azure/devops/release-notes/roadmap/2025/testplans/new-test-run-experience)">New Test Run experience</a></td>
         <td>Test Plans</td>
         <td>2025 Q2</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/advanced-test-result" data-raw-source="[Advanced Test Case result history](/azure/devops/release-notes/roadmap/2025/testplans/advanced-test-result)">Advanced Test Case result history</a></td>
         <td>Test Plans</td>
         <td>2025 Q2</td>
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
      <td rowspan="28"><strong>2025 Q2</strong></td>
          <td><a href="/azure/devops/release-notes/roadmap/2024/boards-state-transitions-with-github-repos" data-raw-source="[Support state transitions when merging a GitHub pull request](/azure/devops/release-notes/roadmap/2024/boards-state-transitions-with-github-repos)">Support state transitions when merging a GitHub pull request</a>
         </td>
         <td>Boards</td>      
      </tr>  
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/boards-auto-link-github-branch" data-raw-source="[Automatically link pull requests when linked to a GitHub branch](/azure/devops/release-notes/roadmap/2024/boards-auto-link-github-branch)">Automatically link pull requests when linked to a GitHub branch</a>
         </td>
         <td>Boards</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/boards-auto-link-merge-commit" data-raw-source="[Auto link the merge commit](/azure/devops/release-notes/roadmap/2024/boards-auto-link-merge-commit)">Auto link the merge commit</a>
         </td>
         <td>Boards</td>
      </tr>     
      <tr>
         <td>
          <a href="/azure/devops/release-notes/roadmap/2024/boards-delete-branch-link" data-raw-source="[Automatically remove branch links from work items when their corresponding GitHub branches are deleted](/azure/devops/release-notes/roadmap/2024/boards-delete-branch-link)">Automatically remove branch links when their corresponding GitHub branches are deleted</a>
         </td>
         <td>Boards</td>
      </tr>        
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/boards-yaml-pipeline-show-build-status" data-raw-source="[Show build status when using a YAML build pipeline with GitHub repository](/azure/devops/release-notes/roadmap/2024/boards-yaml-pipeline-show-build-status)">Show build status when using a YAML build pipeline with GitHub repository</a>
         </td>
         <td>Boards</td>         
      </tr>      
      <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/boards-gh-pr-mentions" data-raw-source="[! mentions support](/azure/devops/release-notes/roadmap/2024/boards-gh-pr-mentions)">! mentions support for GitHub pull requests</a></td>
         <td>Boards</td>
      </tr>    
      <tr>          
        <td><a href="/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown" data-raw-source="[Markdown editor for work item multi-line fields](/azure/devops/release-notes/roadmap/2023/work-item-support-for-markdown)">Markdown editor for work item multi-line fields</a></td>
        <td>Boards</td>
      </tr>
      <tr>
         <td>
            <a href="/azure/devops/release-notes/roadmap/2024/boards-yaml-stage-status-on-work-item" data-raw-source="[Report YAML stage status in deployment control on work items](/azure/devops/release-notes/roadmap/2024/boards-yaml-stage-status-on-work-item)">Report YAML stage status in deployment control on work items</a>
         </td>
         <td>Boards</td>         
      </tr>      
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/boards-ghec-data-residency-support" data-raw-source="[Support GitHub Enterprise Cloud with data residency](/azure/devops/release-notes/roadmap/2024/boards-ghec-data-residency-support)">Support for GitHub Enterprise Cloud with data residency</a></td>
         <td>Boards & Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/stage-traceability" data-raw-source="[Stage-level traceability](/azure/devops/release-notes/roadmap/2024/stage-traceability)">Stage-level traceability</a></td>
         <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/macos-agents-apple-silicon" data-raw-source="[Hosted macOS agents on Apple Silicon](/azure/devops/release-notes/roadmap/agents-apple-silicon)">Hosted macOS agents on Apple Silicon</a></td>
        <td>Pipelines</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2025/on-demand-execution" data-raw-source="[On-demand out of order execution of stages](/azure/devops/release-notes/roadmap/2025/on-demand-execution)">On-demand out of order execution of stages</a></td>
        <td>Pipelines</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/restore-deleted-test-plans" data-raw-source="[Restore deleted test plans and test suites using REST API](/azure/devops/release-notes/roadmap/2025/testplans/restore-deleted-test-plans)">Restore deleted test plans and test suites using REST API</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/support-for-junit" data-raw-source="[Support for JUnit/Java in Azure Test Plans](/azure/devops/release-notes/roadmap/2025/testplans/support-for-junit)">Support for JUnit/Java in Azure Test Plans</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/support-for-pytest" data-raw-source="[Support for Pytest/Python in Azure Test Plans](/azure/devops/release-notes/roadmap/2025/testplans/support-for-pytest)">Support for Pytest/Python in Azure Test Plans</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/support-yaml-pipelines" data-raw-source="[Support YAML pipelines in Azure Test Plans](/azure/devops/release-notes/roadmap/2025/testplans/support-yaml-pipelines)">Support YAML pipelines in Azure Test Plans</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/resume-paused-test-cases" data-raw-source="[Resume paused test cases on by default](/azure/devops/release-notes/roadmap/2025/testplans/resume-paused-test-cases)">Resume paused test cases on by default</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/quick-access-to-test-results" data-raw-source="[Quick access to Test Results in Test Case](/azure/devops/release-notes/roadmap/2025/testplans/quick-access-to-test-results)">Quick access to Test Results in Test Case</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/new-test-plans-directory" data-raw-source="[New Test Plans directory](/azure/devops/release-notes/roadmap/2025/testplans/new-test-plans-directory)">New Test Plans directory</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/recent-test-result" data-raw-source="[Recent test result in user story work item](/azure/devops/release-notes/roadmap/2025/testplans/recent-test-result)">Recent test result in user story work item</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/new-test-run-experience" data-raw-source="[New Test Run experience](/azure/devops/release-notes/roadmap/2025/testplans/new-test-run-experience)">New Test Run experience</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/advanced-test-result" data-raw-source="[Advanced Test Case result history](/azure/devops/release-notes/roadmap/2025/testplans/advanced-test-result)">Advanced Test Case result history</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/secret-validity" data-raw-source="[Secret Validity Checking](/azure/devops/release-notes/roadmap/2024/ghazdo/secret-validity)">Secret Validity Checking</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/ghazdo/multi-repo" data-raw-source="[Support for multi-repository result publishing](/azure/devops/release-notes/roadmap/2025/ghazdo/multi-repo)">Support for multi-repository result publishing</a></td>
         <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/ghazdo/service-hooks" data-raw-source="[Advanced Security alert events added to Azure DevOps service hooks framework](/azure/devops/release-notes/roadmap/2025/ghazdo/service-hooks)">Advanced Security alert events added to Azure DevOps service hooks framework</a></td>
         <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/ghazdo/security-overview-v2" data-raw-source="[New security overview alert details and reporting capabilities](/azure/devops/release-notes/roadmap/2025/ghazdo/security-overview-v2)">New security overview alert details and reporting capabilities</a></td>
         <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2025/ghazdo/boards-linking" data-raw-source="[Link Boards items to Advanced Security Alerts](/azure/devops/release-notes/roadmap/2025/ghazdo/boards-linking)">Link Boards items to Advanced Security Alerts</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2025/ghazdo/dependency-metadata" data-raw-source="[Adding additional metadata for dependency alerts to improve remediation](/azure/devops/release-notes/roadmap/2025/ghazdo/dependency-metadata)">Adding additional metadata for dependency alerts to improve remediation</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <td rowspan="19"><strong>Future</strong></td>
        <td><a href="/azure/devops/release-notes/roadmap/auditing-ga" data-raw-source="[Auditing GA](/azure/devops/release-notes/roadmap/auditing-ga)">Auditing GA</a></td>
        <td>General</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable authentication methods](/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable authentication methods</a></td>
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
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2024/boards-yaml-stage-status-on-work-item-github-repo" data-raw-source="[Report stage status to work item when using a YAML release pipeline with GitHub repository](/azure/devops/release-notes/roadmap/2024/boards-yaml-stage-status-on-work-item-github-repo)">Report stage status to work item when using a YAML release pipeline with GitHub repository</a></td>    
         <td>Boards</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2023/page-filters-include-additional-fields" data-raw-source="[Additional fields on page filters](/azure/devops/release-notes/roadmap/2023/page-filters-include-additional-fields)">Additional fields on page filters</a></td>
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
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/seamless-build-pipelines" data-raw-source="[Seamless build pipeline integration for Test Case Run](/azure/devops/release-notes/roadmap/2025/testplans/seamless-build-pipelines)">Seamless build pipeline integration for Test Case Run</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/support-for-javascript" data-raw-source="[Support for JavaScript in Azure Test Plans](/azure/devops/release-notes/roadmap/2025/testplans/support-for-javascript)">Support for JavaScript in Azure Test Plans</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/improve-flaky-test" data-raw-source="[Improve flaky test detection](/azure/devops/release-notes/roadmap/2025/testplans/improve-flaky-test)">Improve flaky test detection</a></td>
         <td>Test Plans</td>
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
        <td><a href="/azure/devops/release-notes/roadmap/2024/ghazdo/dependabot" data-raw-source="[DependaBot Security Update Support](/azure/devops/release-notes/roadmap/2024/ghazdo/dependabot)">Dependabot Security Update Support</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2025/ghazdo/default-setup" data-raw-source="[CodeQL default setup (one-click enablement)](/azure/devops/release-notes/roadmap/2025/ghazdo/default-setup)">CodeQL default setup (one-click enablement)</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
      <tr>
        <td><a href="/azure/devops/release-notes/roadmap/2025/ghazdo/audit-logging" data-raw-source="[Advanced Security events streamed to Azure DevOps audit log](/azure/devops/release-notes/roadmap/2025/ghazdo/audit-logging)">Advanced Security events streamed to Azure DevOps audit log</a></td>
        <td>GitHub Advanced Security for Azure DevOps</td>
      </tr>
   </tbody>
</table>

## Azure DevOps Server 

<table>
    <thead>
        <tr>
            <th>Timeframe</th>
            <th>Feature</th>
            <th>Area</th>
        </tr>
    </thead>
    <tbody>       
      <tr>
        <td rowspan="15"><strong>2025 H1</strong></td>
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
      <td rowspan="3"><strong>2025 H2</strong></td>
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
      <td rowspan="26"><strong>Future</strong></td>
        <td><a href="/azure/devops/release-notes/roadmap/disable-alternate-auth-policy" data-raw-source="[Policies to disable authentication methods](/azure/devops/release-notes/roadmap/disable-alternate-auth-policy)">Policies to disable authentication methods</a></td>
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
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/support-for-junit" data-raw-source="[Support for JUnit/Java in Azure Test Plans](/azure/devops/release-notes/roadmap/2025/testplans/support-for-junit)">Support for JUnit/Java in Azure Test Plans</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/seamless-build-pipelines" data-raw-source="[Seamless build pipeline integration for Test Case Run](/azure/devops/release-notes/roadmap/2025/testplans/seamless-build-pipelines)">Seamless build pipeline integration for Test Case Run</a></td>
         <td>Test Plans</td>
      </tr>
       <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/quick-access" data-raw-source="[Quick access to test results and Run ID in web runner](/azure/devops/release-notes/roadmap/2025/testplans/quick-access)">Quick access to test results and Run ID in web runner</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/recent-test-result" data-raw-source="[Recent test result in user story work item](/azure/devops/release-notes/roadmap/2025/testplans/recent-test-result)">Recent test result in user story work item</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/direct-link-from-test-plan" data-raw-source="[Direct link from Test Plan work item to Test Plans page](/azure/devops/release-notes/roadmap/2025/testplans/direct-link-from-test-plan)">Direct link from Test Plan work item to Test Plans page</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/auto-pause-manual-test" data-raw-source="[Auto-pause manual test case run](/azure/devops/release-notes/roadmap/2025/testplans/auto-pause-manual-test)">Auto-pause manual test case run</a></td>
         <td>Test Plans</td>
      </tr>
            <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/undo-test-step" data-raw-source="[Undo test step in web and desktop runner](/azure/devops/release-notes/roadmap/2025/testplans/undo-test-step)">Undo test step in web and desktop runner</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/export-test-cases" data-raw-source="[Export test cases with custom columns in XLSX](/azure/devops/release-notes/roadmap/2025/testplans/export-test-cases)">Export test cases with custom columns in XLSX</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/restore-deleted-test-plans" data-raw-source="[Restore deleted test plans and test suites using REST API](/azure/devops/release-notes/roadmap/2025/testplans/restore-deleted-test-plans)">Restore deleted test plans and test suites using REST API</a></td>
         <td>Test Plans</td>
      </tr>
      <tr>
         <td><a href="/azure/devops/release-notes/roadmap/2025/testplans/new-test-run-experience" data-raw-source="[New Test Run experience](/azure/devops/release-notes/roadmap/2025/testplans/new-test-run-experience)">New Test Run experience</a></td>
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
