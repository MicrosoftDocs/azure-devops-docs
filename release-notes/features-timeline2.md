---
title: Azure DevOps Roadmap
author: gloridelmorales
ms.author: glmorale
ms.date: 9/12/2022
ms.topic: article
ms.technology: devops-release-notes
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

:::row:::
   :::column span="":::
      #### Personal Access Token (PAT) control plane and policies
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      ----------------------------
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
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
   :::column span="":::
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
   :::column span="":::
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
      [Associate all public APIs with PAT scopes](https://review.docs.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#associate-all-public-apis-with-pat-scopes)
   :::column-end:::
   :::column span="":::
      Platform
   :::column-end:::
   :::column span="":::
      CY2022 Q4
   :::column-end:::
   :::column span="":::
      Azure DevOps Server 2022 Update 1
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
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
      [Managed Identity and Service Principal support](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#support-azure-managed-identities-and-service-principals) 
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
   :::column span="":::
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
      [OpenID Connect for secret-free deployments from Azure Pipelines](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#credential-free-pipelines)  
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
   :::column span="":::
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
      [Full support for Conditional Access Policies](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#conditional-access-policy-support-for-device-state)   
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
   :::column span="":::
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

---
## All features
#### [**2022 Q3**](#tab/2022-q3)
**Admin**
- [Associate all public APIs with PAT scopes](https://review.docs.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#associate-all-public-apis-with-pat-scopes)

**Boards**
- [Get Attachment URL link](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#get-attachment-url-link)
- [Adding Assigned To avatar to child items on cards](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#adding-assigned-to-avatar-to-child-items-on-cards)
- [Filter to work item history](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#filter-to-work-item-history)

**Pipelines**
- [Pipelines scalability improvements](https://review.docs.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#pipelines-scalability-improvements)
- [Build retention improvements as part of next on-premises server release](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#build-retention-improvements-as-part-of-next-on-premises-server-release)
- [Deprecate windows-2016, ubuntu-18, macOS-10.14, and macOS-10.15 images](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#deprecate-windows-2016-ubuntu-18-macos-1014-and-macos-1015-images)
#### [**2022 Q4**](#tab/2022-q4)
**Boards**
- [Maintain backlog hierarchy when filters are applied](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#maintain-backlog-hierarchy-when-filters-are-applied)
- [Emoji support in work item tags](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#emoji-support-in-work-item-tags)
- [Ability to change link type from Web UI](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#ability-to-change-link-type-from-web-ui)
- [Save Comment Improvements](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#save-comment-improvements)

**Pipelines**
- [Credential-free pipelines](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#credential-free-pipelines)
- [Deprecate Node 10 from agent and tasks](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#deprecate-node-10-from-agent-and-tasks)

**Reporting**
- [Pull Request widget to allow for the selection of many repos](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#pull-request-widget-to-allow-for-the-selection-of-many-repos)
- [Rollup columns for query results](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#rollup-columns-for-query-results)
- [Show Link with Parent Name in Query Results Widget](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/q4features?branch=users%2Fglmorale%2Fnewroadmap#show-link-with-parent-name-in-query-results-widget)

#### [**Future**](#tab/future)
**Admin**
- [Support Azure Managed Identities and Service Principals](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#support-azure-managed-identities-and-service-principals)
- [Auditing GA](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#auditing-ga)
- [Conditional Access Policy support for device state](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#conditional-access-policy-support-for-device-state)
- [Access events for PAT, SSH will be available in the Auditing Log](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#access-events-for-pat-ssh-will-be-available-in-the-auditing-log)

**Artifacts**
- [Package promote task in Azure Pipelines](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#package-promote-task-in-azure-pipelines)
- [Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#deprecate-old-azure-artifacts-tasks-in-azure-pipelines-and-default-to-new-auth-only-tasks)

**Boards**
- [Work Item support for Markdown editing](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#work-item-support-for-markdown-editing)
- [Improve GitHub Connection Experience](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#improve-github-connection-experience)

**Pipelines**
- [Support Flexible Orchestration mode in scale set agent pools](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#support-flexible-orchestration-mode-in-scale-set-agent-pools)
- [Support Pipelines App with GitHub Enterprise](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/future?branch=users%2Fglmorale%2Fnewroadmap#support-pipelines-app-with-github-enterprise)

---

## How to provide feedback

We would love to hear what you think about these features. Report any problems or suggest a feature through [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

> [!div class="mx-imgBorder"] 
> ![Make a suggestion](media/help-make-a-suggestion.png)

You can also get advice and your questions answered by the community on [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops).