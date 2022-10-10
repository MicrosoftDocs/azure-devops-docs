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

Each feature is linked to an article where you can learn more about a particular item. These features and dates are the current plans and are subject to change. The year and quarter tabs reflect when we expect the feature to be available on Azure DevOps Services.

## Initiatives
### Minimizing the risks associated with credential theft

Azure DevOps supports many different authentication mechanisms, including basic authentication, personal access tokens (PATs), SSH, and Azure Active Directory access tokens. Many of these mechanisms are problematic from a security perspective, especially when it comes to the potential for credential theft. For example, unintended leakage of credentials like PATs can let malicious actors into Azure DevOps organizations where they can gain access to critical assets like source code, pivot toward supply chain attacks, or even pivot toward compromising production infrastructure.

To minimize the risks of credential theft, we have work in flight covering three distinct areas:
- Reducing the potential impact of Personal Access Token (PAT) theft by enabling administrators to automate PAT lifecycles and set policies on their lifetimes and scopes.
- Reducing the need for PATs and other stealable secrets by supporting more secure alternatives.
- Deepening Azure DevOps' integration with Azure Active Directory to better support its various security features.

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
   :::column span="2":::
      ----------------------------
   :::column-end:::
   :::column span="":::
      ----------------------------
   :::column-end:::
   :::column span="":::
      ----------------------------
   :::column-end:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="4":::
      **Personal Access Token (PAT) control plane and policies**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
   :::column-end:::
   :::column span="":::
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
      ----------------------------
   :::column-end:::
   :::column span="":::
      ----------------------------
   :::column-end:::
   :::column span="":::
      ----------------------------
   :::column-end:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
   :::column-end:::
   :::column span="":::
     AAD Tenant Scoped Policies 
   :::column-end:::
   :::column span="":::
      Platform
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: CY2022 Q2
   :::column-end:::
   :::column span="":::
      N/A
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      ----------------------------
   :::column-end:::
   :::column span="":::
      ----------------------------
   :::column-end:::
   :::column span="":::
      ----------------------------
   :::column-end:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
   :::column-end:::
   :::column span="":::
      [Associate all public APIs with PAT scopes](https://learn.microsoft.com/azure/devops/release-notes/2022/sprint-210-update#all-public-rest-apis-support-granular-pat-scopes)
   :::column-end:::
   :::column span="":::
      Platform
   :::column-end:::
   :::column span="":::
      :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: CY2022 Q4
   :::column-end:::
   :::column span="":::
      Azure DevOps Server 2022 Update 1
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="4":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Managed Identity and Service Principal support**](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities?branch=users%2Fglmorale%2Fnewroadmap) 
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
   :::column span="4":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**OpenID Connect for secret-free deployments from Azure Pipelines**](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/credential-free-pipelines?branch=users%2Fglmorale%2Fnewroadmap)  
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
   :::column span="4":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [**Full support for Conditional Access Policies**](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy?branch=users%2Fglmorale%2Fnewroadmap)   
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

---
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
<tr><td rowspan="12"><strong>2022 Q4</strong></td>
    <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/maintain-backlog-hierarchy?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Maintain backlog hierarchy when filters are applied](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/maintain-backlog-hierarchy?branch=users%2Fglmorale%2Fnewroadmap)">Maintain backlog hierarchy when filters are applied</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/work-item-emoji-support?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Emoji support in work item tags](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/work-item-emoji-support?branch=users%2Fglmorale%2Fnewroadmap)">Emoji support in work item tags</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/ability-to-change-link?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Ability to change link type from Web UI](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/ability-to-change-link?branch=users%2Fglmorale%2Fnewroadmap)">Ability to change link type from Web UI</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/save-comment-improvements?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Save Comment Improvements](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/save-comment-improvements?branch=users%2Fglmorale%2Fnewroadmap)">Save Comment Improvements</a></td><td>Boards</td><td>Future</td>      
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/credential-free-pipelines?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Credential-free pipelines](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/credential-free-pipelines?branch=users%2Fglmorale%2Fnewroadmap)">Credential-free pipelines</a></td><td>Pipelines</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/deprecate-node-10?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Deprecate Node 10 from agent and tasks](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/deprecate-node-10?branch=users%2Fglmorale%2Fnewroadmap)">Deprecate Node 10 from agent and tasks</a></td><td>Pipelines</td><td>N/A</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/improvements-in-service-connection?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Improvements in service connection usage history](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/improvements-in-service-connection?branch=users%2Fglmorale%2Fnewroadmap)">Improvements in service connection usage history</a></td><td>Pipelines</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/net6agent-replace-core31?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[.NET 6 agent to replace .NET Core 3.1 agent](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/net6agent-replace-core31?branch=users%2Fglmorale%2Fnewroadmap)">.NET 6 agent to replace .NET Core 3.1 agent</a></td><td>Pipelines</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/toggle-to-disable-classic-pipelines?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Toggle to disable classic pipelines](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/toggle-to-disable-classic-pipelines?branch=users%2Fglmorale%2Fnewroadmap)">Toggle to disable classic pipelines</a></td><td>Pipelines</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pull-request-widget?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Pull Request widget to allow for the selection of many repos](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/pull-request-widget?branch=users%2Fglmorale%2Fnewroadmap)">Pull Request widget to allow for the selection of many repos</a></td><td>Reporting</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/rollup-columns-for-query?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Rollup columns for query results](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/rollup-columns-for-query?branch=users%2Fglmorale%2Fnewroadmap)">Rollup columns for query results</a></td><td>Reporting</td><td>Future</td>
    <tr><td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/show-link-with-parent-name?branch=users%2Fglmorale%2Fnewroadmap" data-raw-source="[Show Link with Parent Name in Query Results Widget](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2022/show-link-with-parent-name?branch=users%2Fglmorale%2Fnewroadmap)">Show Link with Parent Name in Query Results Widget</a></td><td>Reporting</td><td>Future</td>
</tr>
<tr><td rowspan="3"><strong>2023 Q1</strong></td>
    <td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/improvements-in-pipelines-checks?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Improvements in Pipelines checks](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/improvements-in-pipelines-checks?branch=users%2Fglmorale%2Fnewroadmap)">Improvements in Pipelines checks</a></td><td>Pipelines</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[In-product recommendations for secure settings](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/in-product-recommendations-for-secure-settings?branch=users%2Fglmorale%2Fnewroadmap)">In-product recommendations for secure settings</a></td><td>Pipelines</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/track-repo-cloning?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Track repo cloning](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/track-repo-cloning?branch=users%2Fglmorale%2Fnewroadmap)">Track repo cloning</a></td><td>Pipelines</td><td>Future</td>
</tr>
<tr><td rowspan="15"><strong>Future</strong></td>
    <td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities?branch=users%2Fglmorale%2Fnewroadmap" data-raw-source="[Support Azure Managed Identities and Service Principals](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-azure-managed-identities?branch=users%2Fglmorale%2Fnewroadmap)">Support Azure Managed Identities and Service Principals</a></td><td>Platform</td><td>N/A</td>
    <tr><td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/auditing-ga?branch=users%2Fglmorale%2Fnewroadmap" data-raw-source="[Auditing GA](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/auditing-ga?branch=users%2Fglmorale%2Fnewroadmap)">Auditing GA</a></td><td>Platform</td><td>N/A</td>
    <tr><td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/granular-scopes?branch=users%2Fglmorale%2Fnewroadmap" data-raw-source="[Granular scopes for Azure Active Directory OAuth](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/granular-scopes?branch=users%2Fglmorale%2Fnewroadmap)">Granular scopes for Azure Active Directory OAuth</a></td><td>Platform</td><td>N/A</td>
    <tr><td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/disable-alternate-auth-policy?branch=users%2Fglmorale%2Fnewroadmap" data-raw-source="[Policies to disable alternate authentication credentials](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/disable-alternate-auth-policy?branch=users%2Fglmorale%2Fnewroadmap)">Policies to disable alternate authentication credentials</a></td><td>Platform</td><td>N/A</td>
    <tr><td><a href="https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy?branch=users%2Fglmorale%2Fnewroadmap" data-raw-source="[Conditional Access Policy support for device state](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/conditional-access-policy?branch=users%2Fglmorale%2Fnewroadmap)">Conditional Access Policy support for device state</a></td><td>Platform</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/access-events-for-pat?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Access events for PAT, SSH will be available in the Auditing Log](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/access-events-for-pat?branch=users%2Fglmorale%2Fnewroadmap)">Access events for PAT, SSH will be available in the Auditing Log</a></td><td>Platform</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/package-promote-task?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Package promote task in Azure Pipelines](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/package-promote-task?branch=users%2Fglmorale%2Fnewroadmap)">Package promote task in Azure Pipelines</a></td><td>Artifacts</td><td>TBD</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/deprecate-old-azure-artifacts?branch=users%2Fglmorale%2Fnewroadmap)">Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks</a></td><td>Artifacts</td><td>TBD</td>   
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/work-item-support-for-markdown?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Work Item support for Markdown editing](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/work-item-support-for-markdown?branch=users%2Fglmorale%2Fnewroadmap)">Work Item support for Markdown editing</a></td><td>Boards</td><td>TBD</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/improve-github-connection-experience?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Improve GitHub Connection Experience](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/improve-github-connection-experience?branch=users%2Fglmorale%2Fnewroadmap)">Improve GitHub Connection Experience</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-flexible-orchestration-mode?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Support Flexible Orchestration mode in scale set agent pools](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-flexible-orchestration-mode?branch=users%2Fglmorale%2Fnewroadmap)">Support Flexible Orchestration mode in scale set agent pools</a></td><td>Pipelines</td><td>TBD</td>
    <tr><td><a href=https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-pipelines-app?branch=users%2Fglmorale%2Fnewroadmap data-raw-source="[Support Pipelines App with GitHub Enterprise](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/support-pipelines-app?branch=users%2Fglmorale%2Fnewroadmap)">Support Pipelines App with GitHub Enterprise</a></td><td>Pipelines</td><td>TBD</td>
    </tr>
    </tbody>
</table>

---

## How to provide feedback

We would love to hear what you think about these features. Report any problems or suggest a feature through [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

> [!div class="mx-imgBorder"] 
> ![Make a suggestion](media/help-make-a-suggestion.png)

You can also get advice and your questions answered by the community on [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops).