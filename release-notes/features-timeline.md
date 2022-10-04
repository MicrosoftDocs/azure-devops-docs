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

Option 1
## Admin

|Area |Released | 2022 Q4 | 2023 Q1 | 2023 Q2 | Future | 
|----------|----------|----------|----------|----------|----------|
| Personal Access Token control plane and policies  | PAT Lifecycle APIs AAD-Tenant-Scoped Policies  |[Associate all public APIs with PAT scopes](https://review.docs.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#associate-all-public-apis-with-pat-scopes)| | | |
| Managed Identity and Service Principal support   |  | | Preview | General Availability | |
| OpenID Connect support for secret-free deployments from Azure Pipelines   |  | | Preview | General Availability | |
| Azure AD alignment     |  | | | | Full conditional access policy support. Proof of possession token support. Continuous access evaluation support.  |

Option 2
## Admin

|Area | Feature | Released | 2022<br/> Q4 | 2023<br/> Q1 | 2023<br/> Q2 | Future | 
|-----|---------|----------|---------|---------|---------|--------|
| **Personal Access Token control plane and policies** |PAT Lifecycle APIs AAD-Tenant-Scoped Policies|:::image type="icon" source="roadmap/2023/media/checkmark.png" border="false"::: | | | | |
||[Associate all public APIs with PAT scopes](https://review.docs.microsoft.com/azure/devops/release-notes/roadmap/2023/q3features?branch=users%2Fglmorale%2Fnewroadmap#associate-all-public-apis-with-pat-scopes)| |General Availability | |
| **Managed Identity and Service Principal support**   | | | | Preview | General Availability | |
| **OpenID Connect support for secret-free deployments from Azure Pipelines**   | | | | Preview | General Availability |
| **Azure AD alignment**     | Full conditional access policy support. Proof of possession token support. Continuous access evaluation support. | | | | | :::image type="icon" source="roadmap/2023/media/checkmark.png" border="false":::  |


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
<tr><td rowspan="7"><strong>2022 Q3</strong></td>
    <td><a href="https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1882954" data-raw-source="[Associate all public APIs with PAT scopes](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1882954)">Associate all public APIs with PAT scopes</a></td><td>General</td><td>TBD</td>    
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1973004 data-raw-source="[Get Attachment URL link](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1973004)">Get Attachment URL link</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1944032 data-raw-source="[Adding Assigned To avatar to child items on cards](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1944032)">Adding Assigned To avatar to child items on cards</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1944313 data-raw-source="[Filter to work item history](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1944313)">Filter to work item history</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href="https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1951703" data-raw-source="[Build retention improvements as part of next on-premises server release](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1951703)">Build retention improvements as part of next on-premises server release</a></td><td>Pipelines</td><td>Future</td>
    <tr><td><a href="https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1951707" data-raw-source="[Pipelines scalability improvements](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1951707)">Pipelines scalability improvements</a></td><td>Pipelines</td><td>Future</td>
    <tr><td><a href="https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1888421" data-raw-source="[Deprecate windows-2016 and macOS-10.14 images](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1888421)">Deprecate windows-2016 and macOS-10.14 images</a></td><td>Pipelines</td><td>N/A</td>
</tr>
<tr><td rowspan="10"><strong>2022 Q4</strong></td>
    <td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1666193 data-raw-source="[Maintain backlog hierarchy when filters are applied](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1666193)">Maintain backlog hierarchy when filters are applied</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1972967 data-raw-source="[Emoji support in work item tags](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1972967)">Emoji support in work item tags</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1983317 data-raw-source="[Add `Move to Column` and `Move to Swimlane` functionality to core product](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1983317)">Add `Move to Column` and `Move to Swimlane` functionality to core product</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1964204 data-raw-source="[Ability to change link type from Web UI](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1964204)">Ability to change link type from Web UI</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1964203 data-raw-source="[Save Comment Improvements](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1964203)">Save Comment Improvements</a></td><td>Boards</td><td>Future</td>      
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1951713 data-raw-source="[Credential-free pipelines](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1951713)">Credential-free pipelines</a></td><td>Pipelines</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1888423 data-raw-source="[Deprecate Node 10 from agent and tasks](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1888423)">Deprecate Node 10 from agent and tasks</a></td><td>Pipelines</td><td>N/A</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1978960 data-raw-source="[Pull Request widget to allow for the selection of many repos](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1978960)">Pull Request widget to allow for the selection of many repos</a></td><td>Reporting</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1978962 data-raw-source="[Rollup columns for query results](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1978962)">Rollup columns for query results</a></td><td>Reporting</td><td>Future</td>
    <tr><td><a href="https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1875887" data-raw-source="[Show Link with Parent Name in Query Results Widget](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1875887)">Show Link with Parent Name in Query Results Widget</a></td><td>Reporting</td><td>Future</td>
</tr>
<tr><td rowspan="10"><strong>Future</strong></td>
    <td><a href="https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1840547" data-raw-source="[Support Azure Managed Identities and Service Principals](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1840547)">Support Azure Managed Identities and Service Principals</a></td><td>General</td><td>N/A</td>
    <tr><td><a href="https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1845287" data-raw-source="[Auditing GA](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1845287)">Auditing GA</a></td><td>General</td><td>N/A</td>
    <tr><td><a href="https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1808700" data-raw-source="[Conditional Access Policy support for device state](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1808700)">Conditional Access Policy support for device state</a></td><td>General</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1808678 data-raw-source="[Access events for PAT, SSH will be available in the Auditing Log](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1808678)">Access events for PAT, SSH will be available in the Auditing Log</a></td><td>General</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1609307 data-raw-source="[Package promote task in Azure Pipelines](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1609307)">Package promote task in Azure Pipelines</a></td><td>Artifacts</td><td>TBD</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1609297 data-raw-source="[Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1609297)">Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks</a></td><td>Artifacts</td><td>TBD</td>   
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221138 data-raw-source="[Work Item support for Markdown editing](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221138)">Work Item support for Markdown editing</a></td><td>Boards</td><td>TBD</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1875162 data-raw-source="[Improve GitHub Connection Experience](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1875162)">Improve GitHub Connection Experience</a></td><td>Boards</td><td>Future</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1859343 data-raw-source="[Support Flexible Orchestration mode in scale set agent pools](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1859343)">Support Flexible Orchestration mode in scale set agent pools</a></td><td>Pipelines</td><td>TBD</td>
    <tr><td><a href=https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1859348 data-raw-source="[Support Pipelines App with GitHub Enterprise](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1859348)">Support Pipelines App with GitHub Enterprise</a></td><td>Pipelines</td><td>TBD</td>
    </tr>
    </tbody>
</table>

---
## How to provide feedback

We would love to hear what you think about these features. Report any problems or suggest a feature through [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

> [!div class="mx-imgBorder"] 
> ![Make a suggestion](media/help-make-a-suggestion.png)

You can also get advice and your questions answered by the community on [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops).