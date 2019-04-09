---
title: Azure DevOps Features Timeline
author: gloridelmorales
ms.author: glmorale
ms.date: 03/21/2019
ms.topic: article
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
description: Azure DevOps feature updates roadmap, release notes, release timeline, and server build numbers
hide_comments: true
---

# Azure DevOps Features Timeline

## Features under development

This feature list is a peek into our roadmap. It identifies some of the significant features we are currently working on and a rough timeframe for when you can expect to see them. It is not comprehensive but is intended to provide some visibility into key investments. Each feature is linked to the public roadmap project where you can learn more about a particular item. These features and dates are the current plans at this time and are subject to change. The “Timeframe” column reflects when the feature will be available on Azure DevOps Services, the “Area” column reflects the area of the product the feature aligns with most, and the “Server” column reflects when it will be available in Azure DevOps Server on-premises, if applicable.

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
            <td rowspan="28">**2019 Q1**</td>
            <td>[New "Basic" process](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1399067)</td><td>Boards</td><td>TBD</td>
        </tr>
        <tr><td>[Export to CSV](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1399083)</td><td>Boards</td><td>2019.2</td></tr>
        <tr><td>[Editing and deleting of Work Item comments](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1409961)</td><td>Boards</td><td>TBD</td></tr>
        <tr><td>[Azure DevOps Server Support for Move work item to another team project / Change work item type](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1292418)</td><td>Boards</td><td>2019</td></tr>
        <tr><td>[VFS for Git - Public Preview of macOS support](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221136)</td><td>Repos</td><td>N/A</td></tr>
        <tr><td>[Pull requests can be completed using a fast forward merge](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1382395)</td><td>Repos</td><td>TBD</td></tr>
        <tr><td>[Pull requests can be completed using rebase](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1382396)</td><td>Repos</td><td>TBD</td></tr>
        <tr><td>[Multi-stage pipelines](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1364226)</td><td>Pipelines</td><td>TBD</td></tr>
        <tr><td>[YAML editor in the web](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1364231)</td><td>Pipelines</td><td>TBD</td></tr>
        <tr><td>[GitHub Enterprise Server support for YAML-based pipelines](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1437711)</td><td>Pipelines</td><td>TBD</td></tr>
        <tr><td>[Hosted pools and visibility into parallel usage](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1437713)</td><td>Pipelines</td><td>TBD</td></tr>
        <tr><td>[Bitbucket Cloud support for YAML-based pipelines](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1443531)</td><td>Pipelines</td><td>TBD</td></tr>
        <tr><td>[YAML templates to get started with CI/CD](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1454010)</td><td>Pipelines</td><td>TBD</td></tr>
        <tr><td>[VS 2019 hosted pool](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1454019)</td><td>Pipelines</td><td>TBD</td></tr>
        <tr><td>[Log viewer enhancements](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1454022)</td><td>Pipelines</td><td>TBD</td></tr>
        <tr><td>[All Azure Artifacts package types (Maven, npm, NuGet, Python, and Universal Packages) can be used as artifacts in Release Management](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1415322)</td><td>Artifacts</td><td>2019.2</td></tr>
        <tr><td>[Search across package feeds](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1415324)</td><td>Artifacts</td><td>TBD</td></tr>
        <tr><td>[Pipeline Artifacts provide faster and more scalable storage for Azure Pipelines](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1320802)</td><td>Artifacts</td><td>TBD</td></tr>
        <tr><td>[Upstream sources work across organizations, with 15-minute refresh times](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221151)</td><td>Artifacts</td><td>2019</td></tr>
        <tr><td>[Upstream sources for Maven](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221171)</td><td>Artifacts</td><td>TBD</td></tr>
        <tr><td>[Build failures report](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1424040)</td><td>Reporting</td><td>TBD</td></tr>
        <tr><td>[Connect your Azure DevOps Services organizations to Azure Active Directory from within Azure DevOps Services](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1274015)</td><td>Administration</td><td>N/A</td></tr>
        <tr><td>[Updated Security & Org Settings pages](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1366414)</td><td>Administration</td><td>TBD</td></tr>
        <tr><td>[User licenses (Basic) can be purchased directly from the user's page](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1366415)</td><td>Administration</td><td>N/A</td></tr>
        <tr><td>[User licenses will be charged once per user across Orgs in the same Azure Subscription](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1366420)</td><td>Administration</td><td>N/A</td></tr>
        <tr><td>[Change project profile image from settings](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1411743)</td><td>Administration</td><td>N/A</td></tr>
        <tr><td>[Set up or change billing subscription from settings](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1423281)</td><td>Administration</td><td>N/A</td></tr>
        <tr><td>[Publisher Certification](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221163)</td><td>Marketplace</td><td>N/A</td></tr>
        <tr>
            <td rowspan="16">**2019 Q2**</td>
            <td>[Work Item support for Markdown editing](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221138)</td><td>Boards</td><td>TBD</td>
        <tr><td>[Branch policies administration improvements](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1437728)</td><td>Repos</td><td>TBD</td>
        <tr><td>[Release traceability – Work Item integration](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221169)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[Pipeline Caching](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1458319)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[Faster, more flexible artifacts](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1458324)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[Multi-repository support for YAML pipelines](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1454026)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[Retry failed run or redeploy an older run](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1454027)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[Support for various trigger types in YAML](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1454030)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[Release traceability – Work Item integration](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221169)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[Support for various trigger types in YAML](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1454030)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[Public (unauthenticated) feeds](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1458316)</td><td>Artifacts</td><td>TBD</td>
        <tr><td>[Expanded NuGet metadata, and other suggestions](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1458327)</td><td>Artifacts</td><td>TBD</td>
        <tr><td>[Test Progress Report](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1424595)</td><td>Test Plans</td><td>TBD</td>
        <tr><td>[Updated Test Plans page](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1424603)</td><td>Test Plans</td><td>TBD</td>
        <tr><td>[Dashboards – Create dashboard separate from a team](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221159)</td><td>Reporting</td><td>TBD</td>
        <tr><td>[Auditing for Azure DevOps](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1364977)</td><td>Administration</td><td>TBD</td>
        </tr>
        <tr>
            <td rowspan="5">**Future**</td>
            <td>[A discussion-centric Work Item form](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221139)</td><td>Boards</td><td>TBD</td>
        <tr><td>[Deployment Groups easy configuration of Azure VMs](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221167)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[Extensible Pool Providers](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221174)</td><td>Pipelines</td><td>TBD</td>
        <tr><td>[CC/BCC (carbon copy) recipient support for email notifications](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221164)</td><td>Notifications</td><td>TBD</td>
        <tr><td>[Notification feed](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_workitems/edit/1221165)</td><td>Notifications</td><td>TBD</td>
        </tr>
    </tbody>
</table>

## Current features

The features timeline lists significant features delivered to Azure DevOps Services and the corresponding version of Azure DevOps Server.
Versions in the “Server” column are linked to the appropriate download location. You can also [view the build numbers for each version](#server-build-numbers). Versions in italics are planned for the future and subject to change.

<table>
    <thead>
        <tr>
            <th>Service Update</th>
            <th>Feature</th>
            <th>Area</th>
            <th>Server</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="26">[8 April 2019](2019/sprint-150-update.md)</td>
            <td>Dark theme general availability</td><td>General</td><td>Future</td>
        </tr>
        <tr><td>Query work based on Azure Active Directory groups</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Share you team’s board using a badge</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Query for work relative to the start of the day, week, month, or year</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Export query results to a CSV file</td><td>Boards</td><td>Future</td></tr>
        <tr><td>New merge types for completing pull requests</td><td>Repos</td><td>Future</td></tr>
        <tr><td>Kubernetes manifest task</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Upgrades to Docker task</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Kubectl tool installer</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Azure Container Registry in Docker registry service connection</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>cgroup support on hosted Ubuntu pool</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Run once agent</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Support for Visual Studio 2019 (VS2019) in Visual Studio test task</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Agent pool user interface update</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Task assistant for editing YAML files</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Hosted pipelines image updates</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Improvements to ServiceNow integration</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Support for Azure PowerShell Az module</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Resource authorization improvements</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Simplified retention policies for build pipelines</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Pipeline artifacts fetched automatically in release</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Cobertura code coverage report updates</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Build failure and duration reports</td><td>Reporting</td><td>Future</td></tr>
        <tr><td>General availability of Analytics</td><td>Reporting</td><td>Future</td></tr>
        <tr><td>Notifications on wiki pages</td><td>Wiki</td><td>Future</td></tr>
        <tr><td>Manage billing for your organization from Azure DevOps</td><td>Administration</td><td>Future</td></tr>
        <tr>
            <td rowspan="16">[19 March 2019](2019/sprint-149-update.md)</td>
            <td>Navigate to Azure Boards work items directly from mentions in any GitHub comment</td><td>Boards</td><td>Future</td>
        </tr>
        <tr><td>Updates to work item transition rules</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Azure Boards GitHub Enterprise support</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Edit and delete comments in work item</td><td>Boards</td><td>Future</td></tr>
        <tr><td>State value order on work item form</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Choose the directory of checked out code in YAML pipelines</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Private projects now get 60 minutes of run time per pipeline job</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Updates to hosted pipeline images</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Duffle tool installer task in build and release pipeline</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Approve Azure Pipelines deployments from Slack</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>All source providers included in the new build pipeline wizard</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>GitHub comments trigger optimizations</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Publish CTest and PHPUnit test results</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Upstream sources for Maven</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>Analytics services OData version change for test entity sets</td><td>Reporting</td><td>Future</td></tr>
        <tr><td>Resolve Azure Active Directory (Azure AD) disconnected users</td><td>Administration</td><td>Future</td></tr>
        <tr>
            <td rowspan="21">[25 February 2019](2019/sprint-148-update.md)</td>
            <td>Azure DevOps CLI extension</td><td>General</td><td>N/A</td>
        </tr>
        <tr><td>Navigate to Azure Boards work items directly from GitHub pull request mentions</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Deploy your local Git web apps for Windows, Linux and Containers to Azure</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>New Azure subscription option in Kubernetes service connection</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Notifications on failure of a release creation request</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Azure Pipelines app for Slack</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Skip continuous integration (CI) for a commit</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Updates to hosted pipelines images</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Contribution point for variables in the create release dialog</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Support for Python Function Apps in DevOps projects</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Schedule releases on source or pipeline change</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Build and release log viewer enhancements</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Publish to Azure Service Bus session queues</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Search by folder name in release definitions</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Simplified publishing of test results</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Azure Active Directory device code authentication flow for pipelines agent</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Support for Red Hat Enterprise Linux 6</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>All Artifacts package types supported in releases</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>Artifacts views supported in releases</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>Retention policies can skip packages downloaded recently</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>@mention users and groups</td><td>Wiki</td><td>Future</td></tr>
        <tr>
            <td rowspan="15">[04 February 2019](2019/sprint-147-update.md)</td>
            <td>Show work item status in #ID mentions</td><td>Boards</td><td>Future</td>
        </tr>
        <tr><td>View just the left or right file in a pull request</td><td>Repos</td><td>Future</td></tr>
        <tr><td>Restore deleted release pipelines</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>YAML files for a new pipeline are committed by your identity, not our bot</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Create pipelines from an existing YAML file in any branch or path</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Run pipelines using GitHub pull request comments</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Limit pull request validation builds to authorized team members</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Publish build artifacts with long file paths</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>New extension contribution points in the Pipelines Test tab</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Proxy support for Artifacts-related tasks</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>Delegate who can manage feeds</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>Test result trend widget</td><td>Reporting</td><td>Future</td></tr>
        <tr><td>Permalinks for wiki pages</td><td>Wiki</td><td>Future</td></tr>
        <tr><td>Show work item status in wiki pages</td><td>Wiki</td><td>Future</td></tr>
        <tr><td>All users now on New Navigation</td><td>Administration</td><td>N/A</td></tr>
        <tr>
            <td rowspan="27">[14 January 2019](2019/sprint-146-update.md)</td>
            <td>Simplify the organization of your work using the Basic process</td><td>Boards</td><td>Future</td>
        </tr>
        <tr><td>GitHub Enterprise support in the pipeline wizard</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Automatic GitHub service connections in pipelines</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Display status for each pipeline job in GitHub Checks</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Default authorization for YAML resources in GitHub</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Service containers for YAML pipelines</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Work items linked to GitHub commits in Release Summary</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>New Azure App Service tasks optimized for YAML</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Azure AD authentication support for Azure SQL task</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Grafana annotations service hook</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Query Azure Monitor alerts tasks</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Inline input of spec file in Deploy to Kubernetes task</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Docker CLI Installer task</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Java long-term support (LTS) on Microsoft hosted agents</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>YAML support for Bitbucket Cloud pipelines</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Avoid triggering multiple CI builds for pull requests</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Change build numbers, upload and download artifacts in forked repository builds</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>New option in 'Publish Test Results' task to fail build on failed tests</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Updates to the Azure Portal for creating an Azure DevOps project</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Use the Azure Portal to setup and deploy to a CosmosDB database</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Setup builds and release pipelines for Functions in Azure Portal</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Package usage stats</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>Monospaced font for Wiki markdown editor</td><td>Wiki</td><td>Future</td></tr>
        <tr><td>Bold Wiki page titles</td><td>Wiki</td><td>Future</td></tr>
        <tr><td>Insert Markdown table</td><td>Wiki</td><td>Future</td></tr>
        <tr><td>Embed Azure Boards query results in Wiki</td><td>Wiki</td><td>Future</td></tr>
        <tr><td>Restore deleted projects</td><td>Administration</td><td>N/A</td></tr>
        <tr>
            <td rowspan="14">[04 December 2018](2018/sprint-144-update.md)</td>
            <td>Link GitHub commits and pull requests to Azure Boards work items</td><td>Boards</td><td>2019</td>
        </tr>
        <tr><td>Acquire Azure Boards as a service</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Rerun expired build for auto-complete pull requests</td><td>Repos</td><td>Future</td></tr>
        <tr><td>Manage GitHub releases using pipelines</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>VS Code extension for YAML based pipelines</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Web editor with IntelliSense for YAML pipelines</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>ServiceNow Change Management integration</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Links to specific lines in a build log</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Specify multi-platform pipeline in a single file</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Automatically redeploy on failure</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Python Package Index (PyPI) public preview</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>Service health portal</td><td>General</td><td>N/A</td></tr>
        <tr><td>Markdown templates for formulas and videos</td><td>Wiki</td><td>Future</td></tr>
        <tr><td>Restore deleted projects</td><td>Administration</td><td>N/A</td></tr>
        <tr>
            <td rowspan="13">[12 November 2018](2018/sprint-143-update.md)</td>
            <td>REST API version 5.0</td><td>General</td><td>Future</td>
        </tr>
        <tr><td>New work item text editor</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Improved branch picker</td><td>Repos</td><td>Future</td></tr>
        <tr><td>Draft pull requests</td><td>Repos</td><td>Future</td></tr>
        <tr><td>Trigger YAML pipelines with tags</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Setting to auto cancel an existing pipeline when a pull requests is updated</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Declare container resources inline</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Changes to default permissions for new projects</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Deploy to failed targets in a Deployment Group</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Support for Infrastructure as Code</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Exclude files in artifact uploads</td><td>Artifacts</td><td>N/A</td></tr>
        <tr><td>Provenance information on packages</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>Azure Artifacts REST API documentation updates</td><td>Artifacts</td><td>N/A</td></tr>
        <tr>
            <td rowspan="20">[22 October 2018](2018/sprint-142-update.md)</td>
            <td>New navigation is on for all users</td><td>General</td><td>N/A</td>
        </tr>
        <tr><td>Dark Theme</td><td>General</td><td>Future</td></tr>
        <tr><td>Organize reference materials with richer work item attachments</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Manage dependencies by linking work items across your Organizations</td><td>Boards</td><td>Future</td></tr>
        <tr><td>Open work items from search</td><td>Boards</td><td>*2019*</td></tr>
        <tr><td>Extension authors can query context about the current repo</td><td>Repos</td><td>*2019*</td></tr>
        <tr><td>Add custom build counters to your builds</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Use YAML to specify branches to build for pull requests</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Use YAML template expressions inline</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Improve troubleshooting with the pipeline initialization log</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Default retention for YAML pipelines</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Build on Linux/ARM and Windows 32-bit platforms</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Clone variable groups</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>See commits and work items for all linked sources</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Run from Package supported in Azure App Service deployments</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Deploy Linux containers with the App Server Deploy task</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Azure Test Runner runs manual tests for desktop applications</td><td>Test Plans</td><td>*2019*</td></tr>
        <tr><td>Public preview of Pipeline Artifacts</td><td>Artifacts</td><td>*2019*</td></tr>
        <tr><td>Publish code as wiki with Contribute permissions</td><td>Wiki</td><td>*2019*</td></tr>
        <tr><td>PATs enforce CAP</td><td>Administration</td><td>N/A</td></tr>
        <tr>
            <td rowspan="10">[1 October 2018](2018/sprint-141-update.md)</td>
            <td>Azure Policy compliance and security validations in Pipelines</td><td>Pipelines</td><td>*2019*</td>
        </tr>
        <tr><td>Simplified continuous delivery to Azure VMs</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>The Xcode task supports newly released Xcode 10</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Performance improvements when queuing a build</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Create Azure service connection with service principal that authenticates with a certificate</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>View test analytics in Pipelines</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Change the target branch of a pull request</td><td>Repos</td><td>*2019*</td></tr>
        <tr><td>Protect Git repos with cross platform compatibility settings</td><td>Repos</td><td>N/A</td></tr>
        <tr><td>Expanded search box</td><td>General</td><td>*2019*</td></tr>
        <tr><td>Support AAD users in MSA accounts</td><td>Administration</td><td>N/A</td></tr>
        <tr>
            <td rowspan="10">[20 September 2018](2018/sprint-140-update.md)</td>
            <td>Control specific build dependencies using container jobs</td><td>Pipelines</td><td>Future</td>
        </tr>
        <tr><td>Enable code coverage in .NET Core task</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Leverage restructured Process REST APIs</td><td>Boards</td><td>*2019*</td></tr>
        <tr><td>Simplify authentication using the new cross-platform Credential Provider for NuGet</td><td>Artifacts</td><td>*2019*</td></tr>
        <tr><td>Store artifacts using Universal Packages</td><td>Artifacts</td><td>Future</td></tr>
        <tr><td>Compress symbols when publishing to a file share</td><td>Artifacts</td><td>*2019*</td></tr>
        <tr><td>Embed a video in wiki</td><td>Wiki</td><td>*2019*</td></tr>
        <tr><td>Rename a wiki</td><td>Wiki</td><td>*2019*</td></tr>
        <tr><td>Insert a wiki table of contents from the format pane</td><td>Wiki</td><td>*2019*</td></tr>
        <tr><td>Manage your personal access tokens with filtering and paging</td><td>Administration</td><td>*2019*</td></tr>
        <tr>
            <td rowspan="15">[10 September 2018](2018/sep-10-azure-devops-launch.md)</td>
            <td>Azure DevOps Services</td><td>General</td><td>N/A</td>
        </tr>
        <tr><td>Add Azure Pipelines from the GitHub Marketplace</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Build open source projects with Azure Pipelines for free</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Configure builds using YAML</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Create YAML build pipelines using the new wizard</td><td>Pipelines</td><td>Future</td></tr>
        <tr><td>Manage build pipelines using the new Builds page</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Rebuild GitHub pull request builds</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>New build status badge URL</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Leverage even more tools on Microsoft-hosted Linux agents</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Track GitHub commits and associated issues in releases</td><td>Pipelines</td><td>N/A</td></tr>
        <tr><td>Manage build and deployment completion emails better using improved formatting</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Follow the new unified Azure Pipelines terminology</td><td>Pipelines</td><td>*2019*</td></tr>
        <tr><td>Leverage the latest extension categories</td><td>Marketplace</td><td>N/A</td></tr>
        <tr><td>Switch existing organizations to use the new domain name URL</td><td>Administration</td><td>N/A</td></tr>
        <tr><td>Add Stakeholder users to save on Azure Pipelines license costs</td><td>Administration</td><td>N/A</td></tr>
        <tr>
            <td rowspan="6">[21 August 2018](2018/aug-21-vsts.md)</td>
            <td>Create table of contents for wiki pages</td><td>Wiki</td><td>*2019*</td>
        </tr>
        <tr><td>Ease customization by migrating projects to the Inheritance process model</td><td>Work</td><td>N/A</td></tr>
        <tr><td>Chat about the latest status using the improved Microsoft Teams integration</td><td>Work</td><td>2017.2</td></tr>
        <tr><td>Standardize pull request descriptions using templates</td><td>Code</td><td>*2019*</td></tr>
        <tr><td>Perform additional testing using a pull request release trigger</td><td>Build and Release</td><td>*2019*</td></tr>
        <tr><td>Deploy Go apps to Azure Kubernetes Service (AKS) using Azure DevOps Projects</td><td>Build and Release</td><td>N/A</td></tr>
        <tr>
            <td rowspan="9">[3 August 2018](2018/aug-03-vsts.md)</td>
            <td>Surface metadata for wiki pages and code preview using YAML tags</td><td>Wiki</td><td>*2019*</td>
        </tr>
        <tr><td>View work for your team in the Work Items hub</td><td>Work</td><td>*2019*</td></tr>
        <tr><td>Check installed software on Microsoft-hosted agent pools</td><td>Build and Release</td><td>N/A</td></tr>
        <tr><td>Review summarized test results</td><td>Test</td><td>*2019*</td></tr>
        <tr><td>View package download and user metrics</td><td>Package</td><td>*2019*</td></tr>
        <tr><td>Browse dependencies in npm packages</td><td>Package</td><td>*2019*</td></tr>
        <tr><td>View VSTS dashboards within Microsoft Teams</td><td>Reporting</td><td>N/A</td></tr>
        <tr><td>Investigate build history through a new build dashboard widget</td><td>Reporting</td><td>*2019*</td></tr>
        <tr><td>Manage billing for your organization directly through the Azure Portal</td><td>Admin</td><td>N/A</td></tr>
        <tr>
            <td rowspan="14">[10 July 2018](2018/jul-10-vsts.md)</td>
            <td>Create pull requests without a default team as reviewer</td><td></td><td>*2019*</td>
        </tr>
        <tr><td>Allow bypassing branch policies without giving up push protection</td><td></td><td>*2019*</td></tr>
        <tr><td>Link to headings within a page</td><td></td><td>*2019*</td></tr>
        <tr><td>View broken links</td><td></td><td>*2019*</td></tr>
        <tr><td>Attach files and images in folders</td><td></td><td>*2019*</td></tr>
        <tr><td>Open page in new tab</td><td></td><td>*2019*</td></tr>
        <tr><td>Build and release with Microsoft-hosted Linux and macOS agents</td><td></td><td>N/A</td></tr>
        <tr><td>Azure DevOps Projects now generally available</td><td></td><td>N/A</td></tr>
        <tr><td>Automatically deploy to new targets in a deployment group</td><td></td><td>*2019*</td></tr>
        <tr><td>Hold deployments until gates succeed consistently</td><td></td><td>*2019*</td></tr>
        <tr><td>Get started with pre-installed Package Management</td><td></td><td>N/A</td></tr>
        <tr><td>Connect or disconnect Azure Active Directory as a Project Collection Admin</td><td></td><td>N/A</td></tr>
        <tr><td>Public projects available in preview for all organizations</td><td></td><td>N/A</td></tr>
        <tr><td>Adopt the word "organization" when referring to a collection of projects in VSTS</td><td></td><td>N/A</td></tr>
        <tr>
            <td rowspan="17">[19 June 2018](2018/jun-19-vsts.md)</td>
            <td>Preview our new navigation hub</td><td></td><td>*2019*</td>
        </tr>
        <tr><td>New Work hubs</td><td></td><td>*2019*</td></tr>
        <tr><td>Queries hub generally available</td><td></td><td>*2019*</td></tr>
        <tr><td>Easily find existing work items in linking and mention experiences</td><td></td><td>*2019*</td></tr>
        <tr><td>Modernized experience in the Builds hub</td><td></td><td>*2019*</td></tr>
        <tr><td>Pass environment variables to tasks</td><td></td><td>*2019*</td></tr>
        <tr><td>Ignore a release gate for a deployment</td><td></td><td>*2019*</td></tr>
        <tr><td>Set a variable at release time</td><td></td><td>*2019*</td></tr>
        <tr><td>Organize your release definitions in folders</td><td></td><td>*2019*</td></tr>
        <tr><td>Use improved Windows remote PowerShell based tasks</td><td></td><td>*2019*</td></tr>
        <tr><td>GitHub artifacts show associated commits deployed in a release</td><td></td><td>N/A</td></tr>
        <tr><td>Use upstream sources in legacy feeds</td><td></td><td>*2019*</td></tr>
        <tr><td>Use arbitrary public npm feeds as upstream sources</td><td></td><td>*2019*</td></tr>
        <tr><td>Improved experiences in the Test tab</td><td></td><td>*2019*</td></tr>
        <tr><td>Exclude items completed before a certain date in analytics views</td><td></td><td>*2019*</td></tr>
        <tr><td>Easily navigate to dashboards</td><td></td><td>*2019*</td></tr>
        <tr><td>Get notified for PAT expirations</td><td></td><td>*2019*</td></tr>
        <tr>
            <td rowspan="11">[30 May 2018](2018/may-30-vsts.md)</td>
            <td>Import and export Inherited Processes</td><td></td><td>Future</td>
        </tr>
        <tr><td>Customize column options in the Work Items hub</td><td></td><td>*2019*</td></tr>
        <tr><td>Receive notifications when pull request policies are bypassed</td><td></td><td>*2019*</td></tr>
        <tr><td>Favorite a branch from within a pull request</td><td></td><td>*2019*</td></tr>
        <tr><td>Visualize release progress</td><td></td><td>*2019*</td></tr>
        <tr><td>Run inline or file-based Python scripts in your pipeline</td><td></td><td>*2019*</td></tr>
        <tr><td>Use Anaconda tools for data science in your pipeline</td><td></td><td>N/A</td></tr>
        <tr><td>Simplify definitions with multiple agentless tasks per phase</td><td></td><td>*2019*</td></tr>
        <tr><td>Manage limits on self-hosted, concurrent CI/CD jobs</td><td></td><td>N/A</td></tr>
        <tr><td>Streamline authentication from agent VMs to Azure Resource Manager</td><td></td><td>*2019*</td></tr>
        <tr><td>Guard your user account using alternate authentication notifications</td><td></td><td>N/A</td></tr>
        <tr>
            <td rowspan="15">[7 May 2018](2018/may-07-vsts.md)</td>
            <td>Query for empty rich text fields</td><td></td><td>*2019*</td>
        </tr>
        <tr><td>Build Ruby apps based on a variety of Ruby versions</td><td></td><td>N/A</td></tr>
        <tr><td>Build, test, and publish Python apps based on a variety of Python versions</td><td></td><td>N/A</td></tr>
        <tr><td>Build Java apps on hosted agents with Java 10</td><td></td><td>N/A</td></tr>
        <tr><td>Leverage improved Xcode build and test output from xcpretty</td><td></td><td>*2019*</td></tr>
        <tr><td>Progressively expose and phase deployments using release gates</td><td></td><td>*2019*</td></tr>
        <tr><td>Deploy to Azure Kubernetes Service (AKS) and Azure Service Fabric using Azure DevOps Projects</td><td></td><td>N/A</td></tr>
        <tr><td>Deploy to Azure SQL Database using Azure DevOps Projects</td><td></td><td>N/A</td></tr>
        <tr><td>Release hybrid applications to Azure Stack</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Control Helm version used in Release</td><td></td><td>*2019*</td></tr>
        <tr><td>Follow packages</td><td></td><td>*2019*</td></tr>
        <tr><td>Control who can pull packages from upstream sources</td><td></td><td>*2019*</td></tr>
        <tr><td>Change feed settings without having to manually save</td><td></td><td>*2019*</td></tr>
        <tr><td>Manage test plans using the new Test Plans hub</td><td></td><td>*2019*</td></tr>
        <tr><td>Fix broken links when moving pages</td><td></td><td>*2019*</td></tr>
        <tr>
            <td rowspan="15">[16 Apr 2018](2018/apr-16-vsts.md)</td>
            <td>Find phrases and code with special characters faster</td><td></td><td>*2019*</td>
        </tr>
        <tr><td>Query work in the Area Paths of a Team with the new @TeamAreas macro</td><td></td><td>*2019*</td></tr>
        <tr><td>Trigger CI builds from YAML</td><td></td><td>Future</td></tr>
        <tr><td>Continuously deploy to Azure Database for MySQL</td><td></td><td>*2019*</td></tr>
        <tr><td>Streamline deployment to Kubernetes using Helm</td><td></td><td>*2019*</td></tr>
        <tr><td>Deploy Ruby on Rails applications</td><td></td><td>*2019*</td></tr>
        <tr><td>Configure Go and Ruby applications using Azure DevOps Projects</td><td></td><td>N/A</td></tr>
        <tr><td>Continuously deploy builds tagged by post-build processing</td><td></td><td>*2019*</td></tr>
        <tr><td>Filter branches for GitHub Enterprise or external Git artifacts</td><td></td><td>*2019*</td></tr>
        <tr><td>Subscribe to package update notifications</td><td></td><td>*2019*</td></tr>
        <tr><td>Use upstream NuGet packages from elsewhere in VSTS</td><td></td><td>*2019*</td></tr>
        <tr><td>Enable nuget.org upstream sources in more feeds</td><td></td><td>*2019*</td></tr>
        <tr><td>Quickly link to other wiki pages using suggestions</td><td></td><td>*2019*</td></tr>
        <tr><td>Filter search results by Wiki name</td><td></td><td>*2019*</td></tr>
        <tr><td>Move a VSTS account between Azure subscription or resource group</td><td></td><td>N/A</td></tr>
        <tr>
            <td rowspan="12">[3 Apr 2018](2018/apr-03-vsts.md)</td>
            <td>Quickly describe pull requests using commit messages</td><td></td><td>*2019*</td>
        </tr>
        <tr><td>Perform TFVC commands right from Windows Explorer</td><td></td><td>N/A</td></tr>
        <tr><td>Chain related builds together using build completion triggers</td><td></td><td>*2019*</td></tr>
        <tr><td>Scale deployments to VMs using Deployment Groups</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Build applications written in Go</td><td></td><td>*2019*</td></tr>
        <tr><td>Extend release gates with task extensions</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Use upstream npm packages from elsewhere in VSTS</td><td></td><td>*2019*</td></tr>
        <tr><td>Maintain feed query speed with retention policies</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Publish markdown files from a Git repository as a Wiki</td><td></td><td>*2019*</td></tr>
        <tr><td>Retain special characters in Wiki page titles</td><td></td><td>*2019*</td></tr>
        <tr><td>Extend Wiki using REST APIs</td><td></td><td>*2019*</td></tr>
        <tr><td>Integrate Power BI with VSTS Analytics using views</td><td></td><td>*2019*</td></tr>
        <tr>
            <td rowspan="13">[5 Mar 2018](2018/mar-05-vsts.md)</td>
            <td>Avoid overwrites and protect performance using repository settings</td><td></td>
            <td>*2018.2*</td>
        </tr>
        <tr><td>Focus on important work using the Work Items hub</td><td></td><td>*2019*</td></tr>
        <tr><td>Query work across the iteration schedule with +/- @CurrentIteration</td><td></td><td>*2019*</td></tr>
        <tr><td>Clarify query iteration schedules with the @CurrentIteration Team parameter</td><td></td><td>*2019*</td></tr>
        <tr><td>Improve release times by partially downloading artifacts</td><td></td><td>*2019*</td></tr>
        <tr><td>Retain more control of your app by deploying your Azure DevOps Project to a Virtual machine</td><td></td><td>N/A</td></tr>
        <tr><td>Improve code quality with the latest extensions from SonarSource</td><td></td><td>N/A</td></tr>
        <tr><td>Trace GitHub sources to builds using build tags</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Isolate Azure Resource Manager service endpoints to Resource Groups</td><td></td><td>N/A</td></tr>
        <tr><td>Manage entity-specific security</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Share deployment status using a badge</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Deploy selectively based on the artifact triggering a release</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Leverage your existing subscription using an Azure AD-based alternate email account</td><td></td><td>N/A</td></tr>
        <tr>
            <td rowspan="20">[14 Feb 2018](2018/feb-14-vsts.md)</td>
            <td>Recover a recently-deleted repository via API</td><td></td>
            <td>*2018.2*</td>
        </tr>
        <tr><td>Discuss work items in Microsoft Teams using the VSTS messaging extension</td><td></td><td>N/A</td></tr>
        <tr><td>Mention a group in work item and pull request discussions</td><td></td><td>*2019*</td></tr>
        <tr><td>Use VSTS as a symbol server</td><td></td><td>N/A</td></tr>
        <tr><td>Filter branches for GitHub artifacts</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Filter branches using include and exclude</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Release from Azure Container Registry and Docker Hub</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Propagate Jenkins artifacts to Azure Storage</td><td></td><td>N/A</td></tr>
        <tr><td>Specify a default version for Jenkins artifacts</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Scope a variable group to specific environments</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Install tasks from the Marketplace directly from the build or release definition</td><td></td><td>N/A</td></tr>
        <tr><td>Seamlessly use public packages using upstream sources</td><td></td><td>*2018.2*</td></tr>
        <tr><td>View quality of a package version in the package list</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Link to packages from anywhere</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Share your packages using a badge</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Recycle and restore packages</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Manage access and extensions for large numbers of users using groups</td><td></td><td>N/A</td></tr>
        <tr><td>Reduced latency for Azure AD group membership changes</td><td></td><td>N/A</td></tr>
        <tr><td>Manage users with Graph REST APIs Public Preview</td><td></td><td>N/A</td></tr>
        <tr><td>Leave account</td><td></td><td>N/A</td></tr>
        <tr>
            <td rowspan="22">[24 Jan 2018](2018/jan-24-vsts.md)</td>
            <td>View Analytics Widgets as a Stakeholder</td><td></td>
            <td>*2019*</td>
        </tr>
        <tr><td>Integrate Power BI with VSTS Analytics using new views</td><td></td><td>*2019*</td></tr>
        <tr><td>View pull request merge commit</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Help reviewers using pull request labels</td><td></td><td>*2018.2*</td></tr>
        <tr><td>View remaining policy criteria for pull request auto-complete</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Discuss math in pull requests</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Control who can contribute to pull requests</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Integrate using the pull request status API and branch policy</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Move work using suggested Areas and Iterations</td><td></td><td>*2019*</td></tr>
        <tr><td>Build GitHub pull requests from repository forks</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Build with continuous integration from GitHub Enterprise</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Build with the appropriate agent by default</td><td></td><td>N/A</td></tr>
        <tr><td>Screenshot desktop apps through the Chrome browser</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Filter large test results by Test Name</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Run Functional Tests and Deploy Test Agent tasks are now deprecated</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Wiki Search now Generally Available</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Print Wiki pages</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Contribute to Wiki pages with ease using keyboard shortcuts</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Calculate price without leaving the extension page</td><td></td><td>N/A</td></tr>
        <tr><td>Manage permissions directly on Azure AD groups</td><td></td><td>N/A</td></tr>
        <tr><td>Consider warning of single Project Collection Administrator</td><td></td><td>N/A</td></tr>
        <tr><td>Connect or disconnect a VSTS account to Azure Active Directory via new Azure portal</td><td></td><td>N/A</td></tr>
        <tr>
            <td rowspan="22">[11 Dec 2017](2017/dec-11-vsts.md)</td>
            <td>Track code pushes to a Git repo to builds and releases</td><td></td>
            <td>*2018.2*</td>
        </tr>
        <tr><td>Blame now has history</td><td></td><td>*2018.2*</td></tr>
        <tr><td>SSH URLs are changing</td><td></td><td>N/A</td></tr>
        <tr><td>Generate YAML templates from existing build definitions</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Enhancements to multi-phase builds</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Hide empty contributed sections in build results page</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Skip scheduled builds if nothing has changed in the repo</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Run UI tests and install software on Hosted VS2017 agents</td><td></td><td>N/A</td></tr>
        <tr><td>ASP.NET Core 2.0 agents</td><td></td><td>N/A</td></tr>
        <tr><td>Release trigger for a Package Management artifact</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Default artifact versions</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Release triggers branch enhancements</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Filter large test results</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Identify flaky tests</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Pass parameters to your test run using .testsettings file</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Access information pertinent to test cases in your automated tests when running in the CI/CD pipeline</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Automated tests that use TestCase as a data source can now be run using the VSTest task</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Improved Marketplace experience</td><td></td><td>N/A</td></tr>
        <tr><td>Refreshed publisher management portal</td><td></td><td>N/A</td></tr>
        <tr><td>Virus scan of all public extensions on Marketplace</td><td></td><td>N/A</td></tr>
        <tr><td>TFX CLI changes for extension publish</td><td></td><td>N/A</td></tr>
        <tr><td>Cloud Solution Provider purchasing now generally available</td><td></td><td>N/A</td></tr>
        <tr>
            <td rowspan="44">[28 Nov 2017](2017/nov-28-vsts.md)</td>
            <td>Azure DevOps Project</td><td></td>
            <td>N/A</td>
        </tr>
        <tr><td>Configuration as code (YAML) builds in Public Preview</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Release gates in Public Preview</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Hosted Mac agents for CI/CD pipelines in Public Preview</td><td></td><td>N/A</td></tr>
        <tr><td>TFS Database Import Service now Generally Available</td><td></td><td>N/A</td></tr>
        <tr><td>VSTS CLI in Public Preview</td><td></td><td>N/A</td></tr>
        <tr><td>Query last run by information</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Create work items from the Queries hub</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Expand/collapse requirements/people on the Task board</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Grant the bypassrule permission to specific users</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Rendered markdown in email notifications</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Pull request comment notifications include the thread context</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Pull request service hooks merge events</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Improved error messages for work items completing with a pull request</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Improved Azure Active Directory integration for pull requests</td><td></td><td>N/A</td></tr>
        <tr><td>Path filters for pull request policies</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Pull request suggestions for forks</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Editor settings</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Recently used reviewers</td><td></td><td>*2018.2*</td></tr>
        <tr><td>SSH: Support additional ciphers/keys and deprecate outdated ciphers</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Improved repository settings performance</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Use VSTS as a symbol server</td><td></td><td>N/A</td></tr>
        <tr><td>Agentless build tasks</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Apple provisioning profiles can be installed from source repositories</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Secure files can be downloaded to agents during build or release</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Specific Java Development Kits (JDKs) can be installed during builds and releases</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Improved Xcode build configuration</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Updates to the Hosted VS2017 pool</td><td></td><td>N/A</td></tr>
        <tr><td>Docker Hub or Azure Container Registry as an artifact source</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Enable Continuous Monitoring on Azure web apps</td><td></td><td>N/A</td></tr>
        <tr><td>Jenkins multi-branch pipeline support and link jobs organized in folders</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Jenkins work items in release for JIRA and VSTS Work Items</td><td></td><td>N/A</td></tr>
        <tr><td>Save packages from NuGet.org in your feed</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Maven support now generally available</td><td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td></tr>
        <tr><td>Easier feed creation and editing</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Previous package versions are now a full-page list</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Promote, unlist, and deprecate multiple packages</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Wiki Search</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Link work items and Wiki pages</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Rich markdown rendering in code repo markdown</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Wiki supports mathematical formulas</td><td></td><td>*2018.2*</td></tr>
        <tr><td>Analytics OData in Public Preview</td><td></td><td>N/A</td></tr>
        <tr><td>Deprecating the PowerBI.com Content Pack</td><td></td><td>N/A</td></tr>
        <tr><td>Inviting directory guests to Azure AD-backed VSTS accounts</td><td></td><td>N/A</td></tr>
        <tr>
            <td rowspan="12">[30 Oct 2017](2017/oct-30-vsts.md)</td>
            <td>Modernized column options</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Added support for Not In query operator</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Filtering on Plans</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Add support for read-only to work item rules</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Mention a pull request</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Toggle word wrap and white space in diff views</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Filtering in Package Management</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Revamped create release experience</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Inline GitHub connection as a release artifact source</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Azure Resource Group task - Deployment outputs as variables</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Circle avatars</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Project tags</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td rowspan="13">[06 Oct 2017](2017/oct-06-vsts.md)</td>
            <td>New experience for code and work items search</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Pull request comments follow renamed files</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Enhanced filter capability for commits with more than 1000 files changed</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Ctrl+S to save Wiki page</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Reference work items in Wiki</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Enable Wiki home page to show on the Project description page</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Custom Project image on Project description page</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Updated Plans navigation</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Use Azure Key Vault secrets in your CI build</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>New software updates available on hosted VS2017 agents</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Bulk Deploy environments manually from Release view</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Process parameters for deployment templates</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Default properties for Git/GitHub artifact types</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td rowspan="25">[15 Sep 2017](2017/sep-15-team-services.md)</td>
            <td>New Queries experience</td>
            <td></td><td>*2019*</td>
        </tr>
        <tr>
            <td>Keyboard shortcuts in the work item form</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Contextual actions in the Work Items hub</td>
            <td></td><td>*2019*</td>
        </tr>
        <tr>
            <td>HTML tags stripped in work item grids</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Filtering to the Process and Fields pages in the Process admin</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Create a folder in a repository using web</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Get a permanent link to code</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Filter text highlighting</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Wiki page deep linking</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Move page in Wiki using keyboard</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Preview content as you edit Wiki pages</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Paste rich content as HTML</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Multi-phase builds</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Personalized notifications for releases</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Manage variables using the List and Grid views in the new release definition editor</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Branch filters in environment triggers</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Improved Deployment Groups UI</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Run webtests using the VSTest task</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Chart widget for test plans and test suites</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Preview improvements and support for different log types generated by Visual Studio Test task</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Gulp, Yarn, and more authenticated feed support</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Package feed default permissions now include Project Administrators</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Burndown and Burnup widgets</td>
            <td></td><td>*2019*</td>
        </tr>
        <tr>
            <td>Refreshed error page and seamless tenant switching hint</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Marketplace moves to new markdown-it parser</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="29">[28 Aug 2017](2017/aug-28-team-services.md)</td>
            <td>Work Items hub</td>
            <td></td><td>*2019*</td>
        </tr>
        <tr>
            <td>Customizable work item rules</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Mentioned support for the My work items page</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Custom Fields and Tags in Notifications</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Inline add on Delivery Plans</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Forks</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>File minimap</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Bracket matching</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Toggle white space</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Updated email templates for push notification</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Complete Work Items settings</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Find lost commits due to a Force Push</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Update default repo permissions for admins</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>CI builds for Bitbucket repositories</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Pause build definitions</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Task input validations support</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>New Release Definition Editor general availability</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Enhancements in new Release Definition editor</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Release Template Extensibility</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Conditional release tasks and phases</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Approve multiple environments</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Requests history for service endpoints</td>
            <td></td><td>*2018.2*</td>
        </tr>
        <tr>
            <td>Upload attachments to test runs and test results</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Test batching</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>JMeter 3.2 for load testing</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Streamlined user management general availability</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Adding User to Projects and Teams</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Graph REST APIs in Public Preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Profile Card</td>
            <td></td><td>*2018.2*</td>
        </tr>
		<tr>
            <td rowspan="30">[4 Aug 2017](2017/aug-04-team-services.md)</td>
            <td>Copy work item processes</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Updated order of the last column in the Kanban board</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>See the projects using a process</td>
            <td></td><td>Future</td>
        </tr>
		<tr>
            <td>Filtering on Kanban board</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Wiki in Public Preview</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Improvements in Wiki edit experience</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Revert a Wiki revision</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Create a Wiki page from a broken link</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Setting to turn off web editing for TFVC repos</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Identify stale branches</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Search for a deleted branch and re-create it</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Branch updates page is now Pushes</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Retain filename when moving from Files to Commits</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Pull Request Status Extensibility in Public Preview</td>
            <td></td><td>*2018.2*</td>
        </tr>
		<tr>
            <td>Let contributed build sections control section visibility</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Variable group support</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>dotnet task supports authenticated feeds, web projects</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Ansible Extension on Marketplace</td>
            <td></td><td>N/A</td>
        </tr>
		<tr>
            <td>Variable groups, Retention, and Options tab now available in the new Release Definition Editor</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Release status badge in Code hub</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Enhancements to Build definition menu when adding artifacts</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Revert your release definition to older version</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>		
		<tr>
            <td>Exploratory testing traceability improvements for work item links, iterations, and area paths</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Screenshot and annotation support for desktop apps with Chrome browser for manual tests</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Filters for Test Case work items in Test Plans and Suites in Test Hub</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Test trend charts for Release Environments and Test Runs</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Markdown formatting support for Test Run and Test Result comments</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Add link to existing bug for a failing test</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Re-order favorite groups</td>
            <td></td><td>*2018.2*</td>
        </tr>
		<tr>
            <td>Enable Visual Studio Code direct install option in Marketplace</td>
            <td></td><td>N/A</td>
        </tr>
	    <tr>
            <td rowspan="20">[14 Jul 2017](2017/jul-14-team-services.md)</td>
            <td>Migrate team projects between two inherited processes with the same parent</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Filtering on Backlogs, Sprints, and Queries</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Expand to show empty fields on a Kanban card</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Automatically complete work items when completing pull requests</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Policies: Reset votes on push/new iteration</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Notifications: Great email templates for pull request workflows</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Pull request details: View original diff for code comments</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Task lists in pull request descriptions and comments</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Ability to "Like" comments in pull requests</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Pull request build variables</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Faster publishing of artifacts from Windows agents to file shares</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Code information in Release with Jenkins CI</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Task group References</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Task group versioning</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Multi Configuration support in Server Side (Agentless) tasks</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Task group import and export</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>New Release Definition Editor (Preview)</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Velocity Widget for the Analytics Extension</td>
            <td></td><td>*2019*</td>
        </tr>
		<tr>
            <td>Notifications: Give team admins control over the delivery of notifications targeting the team</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Constraints on SVG images, screenshots and badges</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="24">[22 Jun 2017](2017/jun-22-team-services.md)</td>
            <td>Fields can be shared across processes</td>
            <td></td><td>*2019*</td>
        </tr>
        <tr>
            <td>Work item type icons</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Show/hide work item field borders</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Allow extensions to block work item save</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Collapsible pull request comments</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Improved workflow when approving with suggestions</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
			<td>Filter pull request tree by file name</td>
			<td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
		</tr>
        <tr>
            <td>Pull request callout on commit details page becomes richer</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Filter tree view in Code</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Git tags web view</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Export and import build definitions</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Visual Studio latest and hosted agent pools</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Build definition menu on build summary page</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Release Triggers: Continuous deployment for changes pushed to a Git repository</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Enhancements to Server tasks</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
		<tr>
            <td>Consume Secrets from an Azure Key Vault as variables</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Package Management experience updates</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Package build task updates</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Project Collection Administrators can link/make initial purchase</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Deep link to easily remove your spending limit during a Marketplace purchase</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Improvements to OAuth permissions page</td>
            <td></td><td>*2019*</td>
        </tr>
        <tr>
            <td>Streamlined user management (preview)</td>
            <td></td><td>N/A</td>
        </tr>
		        <tr>
            <td>Enhanced Publisher experience with Sales Transactions for Paid extensions</td>
            <td></td><td>N/A</td>
        </tr>
		        <tr>
            <td>Setup Power BI Content Pack</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="19">[1 Jun 2017](2017/jun-01-team-services.md)</td>
            <td>Mobile work item form general availability</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>New widgets for Analytics extension</td>
            <td></td><td>*2019*</td>
        </tr>
        <tr>
            <td>Path filtering support for Git notifications</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>More pull request comments filtering options</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Search for a commit in branches starting with a prefix</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Visual Studio Enterprise benefit for pipelines in Team Services</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Work with secure files such as Apple certificates</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Extensions with build templates</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Deprecate a task in an extension</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Task group references</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Variables Support in Manual Intervention task</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Control releases to an environment based on the source branch</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Release Triggers for Git repositories as an artifact source</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>On-demand triggering of automated tests</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Acquisition data in Extension Hub for Marketplace publishers</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Q&A for Marketplace publishers</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>GitHub and Custom Q&A support for marketplace extensions</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Retain VSTS identity when navigating to Marketplace from VSTS</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Azure AD sign in address rename</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="25">[11 May 2017](2017/may-11-team-services.md)</td>
            <td>VM deployment (Public Preview)</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Azure virtual machine scale set</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Built-in tasks for building and deploying container based applications</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Azure Web App deployment updates</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Install an SSH key during a build or release</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Retiring the old editor</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Tasks fail if Visual Studio 2017 is specified but not present on agent</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Automatic linking from work items to builds</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Delivery Plans general availability</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Work item search general availability</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Updated process customization experience</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Modify out of the box fields</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Files hub improvements</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Git LFS file locking</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>New branch policies configuration experience</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Share pull requests with teams</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Default notifications for PR comments</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Improved team PR notifications</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>New tree view control</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Maven for Package Management (Public Preview)</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>NuGet Restore, Command, and Tool Installer build tasks</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Combined email recipients for notifications now enabled by default</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Out of the box notifications out of preview</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Enhanced publisher experience in the Marketplace</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Owner and contributor roles can purchase through the Marketplace</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="19">[19 Apr 2017](2017/apr-19-team-services.md)</td>
            <td>Delivery timeline markers</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Visualize your git repository</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Git commit comments use the new discussion control</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Improved package list</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Build tool installers</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>SSH deployment improvements</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Deploy to Azure Government Cloud</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Timeout enhancements for the Manual Intervention task</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Release Logs Page Improvements</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Azure App Service task enhancements and templates for Python and PHP applications</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Deploy Java to Azure Web Apps</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Java code coverage enhancements</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Maven and SonarQube improvements</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Improved Jenkins integration</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Google Play extension enhancements</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>iOS DevOps enhancements</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Contact extension customers</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Marketplace feedback excluded from ratings</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Reports for Marketplace Publishers</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="17">[29 Mar 2017](2017/mar-29-team-services.md)</td>
            <td>Work item search for discussions</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Pull Request filtering by people</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Reason required when bypassing pull request policies</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Add and view Git tags</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Updated Changeset and Shelveset pages</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Import repositories from TFVC to Git</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Multiple recipients included on the same email (preview)</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Conditional build tasks</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Package Management adds npm READMEs and download button</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Updated Package Management experience available to all accounts</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Override template parameters in Azure resource group deployments</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Continuous Delivery in the Azure portal supports any Git repo</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Separation of duties for deployment requester and approvers</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Set maximum number of parallel deployments</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Q&A support for Marketplace extensions</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Enhancements to display publisher’s terms, license, and privacy policy in Marketplace</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Improved sign-out</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="14">[8 Mar 2017](2017/mar-08-team-services.md)</td>
            <td>Delivery Plans field criteria</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>New mobile discussion experience</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Optimized mobile identity picker</td>
            <td></td><td>[2018](https://aka.ms/relnotes-tfs2018)</td>
        </tr>
        <tr>
            <td>Customized backlog levels</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Custom work item identity fields</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Pull Request improvements for teams</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>New policy for no active comments</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Build agent upgrade status</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>GitHub pull request builds</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Keep track of your free hosted agent minutes</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Out of the box notifications enabled by default</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Getting notified when extensions are installed, require attention, and more</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Release level approvals</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>.NET Core tasks support project files</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td rowspan="13">[15 Feb 2017](2017/feb-15-team-services.md)</td>
            <td>Improved support for team PR notifications</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Improved CTAs for PR author and reviewers</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Actionable comments</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Updates view shows rebase and force push</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Improved commit filtering</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Maintenance for working directories</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Agent selection improvement</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Run tests using Agent Phases</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Multiple versions of Extension tasks</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Extension management permissions and new email notifications</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Updated Package Management experience</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Support for Azure AD conditional access</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Pipelines queue</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td rowspan="17">[25 Jan 2017](2017/jan-25-team-services.md)</td>
            <td>Delivery Plans</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Mobile work item form preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Build editor preview</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Repo admin permission changes</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Branch policy improvements</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>PR comment improvements</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Discussion control toolbar</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>View PRs for a commit</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Release views in Package Management</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>npmjs.com upstream now caches packages</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Run tests built using Visual Studio 2017</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Track changes to test steps</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Sorting on work item search results</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Linking to changelog on the Marketplace</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Release action in Build summary</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Security for variable groups</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Web app deployment history in Azure portal</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td rowspan="21">[5 Jan 2017](2017/jan-05-team-services.md)</td>
            <td>New account and project home pages</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Attachments in PR discussions</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Support file exclusions in the required reviewer policy</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Highlight the PRs that have updates</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Branch policy for PR merge strategy</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Expose merge conflict information</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Team Room Deprecation Announcement</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>New notification settings experience</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>New delivery options for team subscriptions</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Out of the box notifications (preview)</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Updated hosted build image</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Firefox support for Test & Feedback extension</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Favorites for Test Plans</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Test Impact Analysis for managed automated tests</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>SonarQube MSBuild tasks</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Improved experience for Search results</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Release Management parallel execution</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Inline service endpoints</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Multiple release triggers with branch and tag filters</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Set defaults for artifact sources in RM</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Variable groups support in RM</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td rowspan="14">[23 Nov 2016](2016/nov-23-team-services.md)</td>
            <td>Search for commits in branches</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Search for a file or folder in commit history</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Follow a pull request</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Restart pull request merge</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Completion blocked on rejected pull requests</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Markdown in pull request description</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Task versioning for Build and Release definitions</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Hosted Linux pool preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Build and deploy Docker apps to Azure more easily</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>New licensing model for Build and Release Management</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>NuGet + Credential Provider Bundle updated</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Delete test artifacts</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Inline service connections in Build and Release</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Link build artifacts from another team project</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td rowspan="4">[16 Nov 2016](2016/nov-16-team-services.md)</td>
            <td>Package Management General Availability</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Release Management General Availability</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>TFS Database Import Service</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Work Item Search public preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="13">[2 Nov 2016](2016/nov-02-team-services.md)</td>
            <td>Package Management in India and Brazil</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Microsoft Teams integration</td>
            <td></td><td>2017.2</td>
        </tr>
        <tr>
            <td>Repo Favorites</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Rollback build definitions</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Disable the sync and checkout of sources in a build</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Docker extension enhancements</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>.NET Core build task</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Build and release management templates</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>ASP.NET Core and NodeJs deployments</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Azure Web App Service manage task</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Release Management available in multiple regions</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>REST client helpers for Test Step operations</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Test case description in Web runner</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td rowspan="15">[12 Oct 2016](2016/oct-12-team-services.md)</td>
            <td>New navigation on by default</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Cherry-pick and revert</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Commit page improvements</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Configurable compare branch</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Find a file or folder</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Suggested value in work item pick lists</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Xcode 8 Signing and Exporting Packages in the Xcode Task</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>FindBugs in the Gradle build task</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Email support for Azure AD groups</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Multiple schedules in releases</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Azure resource group improvements</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Azure CLI task</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Simplified Azure endpoint creation</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Test & Feedback extension general availability</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Visual Studio subscribers automatically use their free license</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="13">[21 Sep 2016](2016/sep-21-team-services.md)</td>
            <td>Attachments live preview</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Work item type layout improvements</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Disable work item types</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Import Repository</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Markdown preview button</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Confirmation for deleting repos</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Add .gitignore during repo creation</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Verify bugs from work item</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Xcode task xcpretty formatting</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Publish Jenkins test and code coverage results</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Build summary for Maven and Gradle tasks</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>FindBugs and CheckStyle in Maven build tasks</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td>Deployment status widget</td>
            <td></td><td>[2017.1](https://go.microsoft.com/fwlink/?LinkId=839593)</td>
        </tr>
        <tr>
            <td rowspan="14">[2 Sep 2016](2016/sep-02-team-services.md)</td>
            <td>Custom work item types</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Work item history tab</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Managing a NuGet package’s lifecycle</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Build queue tab</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Hosted build pool build agent migration</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Xamarin license step removed</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Jenkins with untrusted SSL certificates</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Apple App Store extension</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Request Feedback</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Checkstyle static analysis</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Deployment manual intervention</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Service endpoint improvements</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>SQL database deployment task</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>User lifecycle management improvements</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="22">[17 Aug 2016](2016/aug-17-team-services.md)</td>
            <td>Pull Request improvements: <br />
                Redesigned UI <br />
                Overview <br />
                Files <br />
                Updates <br />
                Comments, now with markdown and emoji <br />
                Auto-complete pull requests waiting on policies</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Clone Git repositories from your browser using Tower</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Download packages without NuGet</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Packages: Get started quickly</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Queue Jenkins jobs from builds and releases</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Jenkins service hook enhancements</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Run SSH commands on remote machines from builds and releases</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Create archives from builds and releases</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Copy files over SSH from builds and releases</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Download Jenkins artifacts to builds and releases</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Use FTP or FTPS to upload files from builds and releases</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Google Play Extension improvements</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Maven and Gradle tasks produce a build summary when running a SonarQube analysis</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Work item templates</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Quickly “Unfollow” work item</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Drag and drop attachments</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Assigned to Me widget</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Dashboard permissions</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Configure test outcomes for tests across different test suites</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Test Run and Test Result summary – traceability to Releases and manual test artifacts</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Unpublish extension – Removing a public extension from the Marketplace</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Rate Limits – Delaying user requests to avoid outages</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="9">[29 Jul 2016](2016/jul-29-team-services.md) </td>
            <td>Git and TFVC – History view and diff view updates</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Restrict Package Management feed creation</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release management improvements – Azure deployments, release policies: <br />
                Agent queue management <br />
                Azure deployments <br />
                Policies – Soft delete releases <br />
                Policies – Retention of releases and builds <br />
                Release definition authoring improvements – linked artifacts improvements <br />
                Release – redeploy after success</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Test traceability and release environments support in Test History</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Exploratory testing improvements – view unexplored work items, capture web page load data</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Dashboard improvements</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Java PMD analysis in Gradle build task</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>User management – export users and licenses</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Backlog extension points</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="18">[7 Jul 2016](2016/jul-07-team-services.md)  </td>
            <td>Resizable WIT charts on dashboards</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Filter boards to a parent work item</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Links front and center</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Test settings configuration for Kanban board</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Comment tracking for pull requests</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Browse Code Coverage reports in the web</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Maven and Gradle tasks produce a build summary when running a SonarQube analysis</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Agent queue role-based security</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Task-level time-outs</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Import/Export/Clone release definition</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Web app deployment using ARM</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Partially successful deployments</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>View and download attachments associated with releases</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>GitHub artifacts for RM</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>.NET SQL Extension</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Image action log in Web Test runner</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Order tests in Test hub</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Pick a build to test with</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="22">[17 Jun 2016](2016/jun-17-team-services.md)</td>
            <td>Git &amp; TFVC – Browsing branches</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Git &amp; TFVC – Ahead/behind</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Git &amp; TFVC – Branch picker includes “Mine”</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Git &amp; TFVC – Path control</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Git &amp; TFVC – File type icons</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Work Items – An improved header</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Work Items – Custom states</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Exploratory Testing – Insights</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Exploratory Testing – Auto stop screen recordings</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Screen recording support in Web runner (for Chrome) </td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Bugs filed as children – Web runner / Exploratory testing extension</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Test – History across branches</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Test – Automated testing for SCVMM and VMWare</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release – Test status visibility</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release – Support Java PMD analysis in Maven build task</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release – Passing oauth tokens to scripts</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Build – Enable path filters for Git CI triggers</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Build – Updated hosted pool software</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Dashboards – Resizable query results widget</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Third-party plugins – Jenkins plug-in to RM</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Marketplace – Publisher review responses</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Team Rooms – Build vNext support</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="1">[6 Jun 2016](https://blogs.msdn.microsoft.com/visualstudioalm/2016/06/06/visual-studio-team-services-is-in-brazil/)</td>
            <td>Brazil region for Visual Studio Team Services</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="15">[1 Jun 2016](2016/jun-01-team-services.md)</td>
            <td>Filtering in Kanban board</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Process configuration REST APIs</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Dashboards REST APIs</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>SSH clients can connect to Git repos</td>
            <td></td><td>2015.3</td>
        </tr>
        <tr>
            <td>Redesigned Branches page</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Create and send links to specific sections of code</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>API updates for package management</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Screenshot and system info support in Chrome Web runner</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Ordering of tests in Test Hub</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Docker integration for build and release management</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>SonarQube results in pull request view</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Test results trend for build</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Service hooks for release management</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>TeamCity artifacts for release management</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release Management Client SDK</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="19">[6 May 2016](2016/may-06-team-services.md)</td>
            <td>Email improvements</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Checkbox control</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Work Item page management</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Turning board annotations on/off</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Clear Formatting command</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Dashboard updates</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Adding attachments during manual testing</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Test plan/suite columns</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Build and release summary updates</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release Management repository linking</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Copy, Export, and Import release definitions</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Schedule based deployments</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release Management REST APIs</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Simplified Release definition wizard</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>New Release Management job execution variables</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Improved build and pull request traceability</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Team Project rename permission</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Admin settings Work hub</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>UX improvements</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="17">[13 Apr 2016](2016/apr-13-team-services.md)</td>
            <td>Follow a work item</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Change work item type</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Work Item move (single or bulk)</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Kanban board live updates</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Pick lists for work Items</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Checklist improvements</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Build to Line number</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Build log view supports much larger logs</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Java Build templates</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Xamarin Build Tasks</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Widget SDK: Reusable CSS and DOM templates</td>
            <td></td><td>2015.3</td>
        </tr>
        <tr>
            <td>Adding users from the team members widget</td>
            <td></td><td>2015.3</td>
        </tr>
        <tr>
            <td>Collection in the domain</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Release Management – Email release summary</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release Management – Dashboard widget for release definition summary</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release Management – Deploy based on conditions in multiple environments</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Release Management – Provision VMs or run a PS script using SCVMM extension</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="11">[24 Mar 2016](2016/mar-24-team-services.md)</td>
            <td>Commit traceability</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>View Git LFS files in the web</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Git for Windows now includes Team Services authentication by default</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Custom multiline text fields</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Test progress from your cards</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Capture screen recordings</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Queue a Run by specifying your test suite</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Configuration management in the Test Hub</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Enable build result extensions to specify order and column</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Configure status API reporting for a build definition</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Tab contribution point</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="13">[3 Mar 2016](2016/mar-03-team-services.md)</td>
            <td>View test results for each release environment</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Triggers: Deploy based on completion in multiple environments (join)</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Epic and Feature board drill-down</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Exploratory testing directly from a work item</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Data collection: Image action log</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Create test cases based on Image action log data</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Assigning configurations to test plans, test suites and test cases</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Squash merge pull requests</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Clone in IntelliJ, Android Studio, etc.</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Gated builds for Team Foundation Version Control (TFVC)</td>
            <td></td><td>2015.2</td>
        </tr>
        <tr>
            <td>Automated testing on Azure environments</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>NuGet package delist</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Office connector</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="13">[16 Feb 2016](2016/feb-16-team-services.md)</td>
            <td>Package management is now available in Europe and Australia</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Search for extensions on Visual Studio Marketplace</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Work item query charts in the dashboard catalog</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Cumulative flow diagram widget</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Flexible build policy for Git</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>SonarQube Quality Gates in Build</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>RM: UI extensibility</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>SCVMM support</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Exploratory Testing improvements</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Azure SQL Database Deployment task</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Delete Test Plan</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>#mention</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Keyboard shortcuts for Kanban board</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td rowspan="17">[25 Jan 2016](2016/jan-25-team-services.md)</td>
            <td>Public preview of the dashboard widget SDK</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Create branch and links to related artifacts</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Build widgets in the catalog</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Markdown widget with file from repository</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Auto-refresh dashboards</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Richer visualizations in the build summary page</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>View passed test results and file bugs in build summary page</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Test summary in build status notification email</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Support for editing tags in the bulk edit dialog</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Deleting a custom field</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Keyboard shortcuts</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Test plan improvements</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Exploratory testing improvements</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Release orchestration improvements</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>UI extensibility for release management</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Search scope selector</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Search across Git and TFVC projects</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="8">[10 Dec 2015](2015/dec-10-team-services.md)</td>
            <td>Custom work item fields</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Work item discussion</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Work item history improvements</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Deleting work items</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Dashboards edit mode</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Keyboard shortcuts</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>On-Premises support for Exploratory Testing extension:</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Scope code search using path filters</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td rowspan="7">[24 Nov 2015](2015/nov-24-team-services.md)</td>
            <td>Git and TFVC in the same team project</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Package Management build tasks</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Implement a task once for multiple platforms</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Pull Request Widget for Dashboards</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>@mention and #ID in code</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Reordering cards on boards</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Global shortcut keys</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td rowspan="7">[18 Nov 2015](2015/nov-18-team-services.md)</td>
            <td>Extensions and Marketplace</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Release Management public preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Package Management public preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Code Search public preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Test Results in Build</td>
            <td></td><td>[2015.2](http://go.microsoft.com/fwlink/?LinkId=615439)</td>
        </tr>
        <tr>
            <td>Exploratory Testing extension</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Test Manager extension</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="6">[30 Oct 2015](2015/oct-30-team-services.md)</td>
            <td>Dashboards</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Improved pull request experience</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Manual test iteration results</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Retention policy for test results</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Reorder and re-parent tasks from the Kanban board</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>PREVIEW: New Work Item form</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="5">[8 Oct 2015](2015/oct-08-team-services.md)</td>
            <td>Azure Active Directory Group support</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Starting with Git, made easy</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Improved commit details</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>SonarQube analysis from a Maven build task</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>PREVIEW: New Work Item form</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td rowspan="7">[18 Sep 2015](2015/sep-18-team-services.md)</td>
            <td>Inline tasks on the Kanban board</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Query and display of Kanban fields</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Multi-select items on the backlog</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Branch policy to require linked work items</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Export test outcomes</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Work item trend and rollup reporting in Power BI</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>Support for publishing xUnit results</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td rowspan="4">[26 Aug 2015](2015/aug-26-team-services.md)</td>
            <td>Rename columns in place</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Choosing users for capacity planning</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Burndown with available capacity</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>SonarQube analysis build tasks</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td rowspan="4">[7 Aug 2015](2015/aug-07-team-services.md)</td>
            <td>Multi-select items on the product backlog</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Reorder cards when changing columns</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Color tags and titles on your cards</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Libraries for integrating with VSTS now available at nuget.org</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="1">[22 Jul 2015](http://blogs.msdn.com/b/visualstudioalm/archive/2015/07/22/reporting-on-work-items-with-power-bi.aspx)</td>
            <td>Power BI reporting on Work Item data</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td rowspan="7">[17 Jul 2015](2015/jul-17-team-services.md)</td>
            <td>Multiple activities per team member</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Configure settings directly from backlogs/boards</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Hide empty fields on cards</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Card coloring on Taskboard</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Drag any item to an iteration from anywhere</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Build your projects hosted in GitHub</td>
            <td></td><td>Future</td>
        </tr>
        <tr>
            <td>New VSTS integrations</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="3">[7 Jul 2015](2015/jul-07-team-services.md)</td>
            <td>Card coloring on Kanban board</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Personal access tokens</td>
            <td></td><td>[2017](http://go.microsoft.com/fwlink/?LinkId=831912)</td>
        </tr>
        <tr>
            <td>Adding work directly to a sprint</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td rowspan="4">[3 Jun 2015](2015/jun-03-team-services.md)</td>
            <td>Kanban swim lanes</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>#Mention work items</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Automated testing in Build vNext</td>
            <td></td><td>[2015.1](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Team settings API</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td rowspan="7">[15 May 2015](2015/may-15-team-services.md)</td>
            <td>Build vNext</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Backlog navigation update</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Opt-in to portfolio backlogs</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Improved SAFe support</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Kanban collapsed columns</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Git branch policies</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Power BI &amp; VSO</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[11 May 2015](2015/may-11-team-services.md)</td>
            <td>Application Insights: <br />
                iOS and Android support <br />
                Performance counters for Java applications <br />
                Unhandled exceptions in Java apps <br />
                Drag-across to select a time range</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[8 May 2015](http://blogs.msdn.com/b/bharry/archive/2015/05/10/vs-online-hosted-in-australia.aspx)</td>
            <td>Australia region for Visual Studio Team Services</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[29 April 2015](http://azure.microsoft.com/blog/2015/04/29/announcing-application-insights-public-preview-2/)</td>
            <td>Application Insights Public Commercial Preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[29 April 2015](/azure/devops/integrate/)</td>
            <td>Extensions</td>
            <td></td><td>2015.2</td>
        </tr>
        <tr>
            <td rowspan="4">[27 Apr 2015](2015/apr-27-team-services.md)</td>
            <td>Adding fields to cards</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Kanban board filtering</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Card options on the Taskboard</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Account restore</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[24 Apr 2015](2015/apr-24-team-services.md)</td>
            <td>Team Project Rename</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>[22 Apr 2015](2015/apr-22-team-services.md)</td>
            <td>Application Insights: <br />
                Synthetic data filtering <br />
                New usage experience for ASP.NET, Java and other applications <br />
                Daily Active User calculations</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[17 Apr 2015](http://blogs.msdn.com/b/visualstudioalm/archive/2015/04/17/general-availability-of-codelens-in-visual-studio-online.aspx)</td>
            <td>CodeLens General Availability on Visual Studio Team Services</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="4">[10 Apr 2015](2015/apr-10-team-services.md)</td>
            <td>Configure cards</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Markdown editing for definition of done</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>CFD options</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Web history view for Git projects</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>[27 Mar 2015](2015/mar-27-team-services.md)</td>
            <td>Application Insights: Save search page, pause export and export on alert fail</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="7">[10 Mar 2015](2015/mar-10-team-services.md)</td>
            <td>Current iteration query token</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Reordering on the Kanban board</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Kanban definition of done</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Responsive card sizes</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Bugs on the Taskboard</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Syntax highlight for XML, Sass, Objective-C, R</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>CodeLens for accounts in West Europe</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[9 Mar 2015](http://azure.microsoft.com/documentation/articles/app-insights-java-get-started/)</td>
            <td>Application Insights support for Java</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="4">[18 Feb 2015](2015/feb-18-team-services.md)</td>
            <td>Adding and editing directly from the board</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Split columns on the Kanban board</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Assign multiple people to test suites</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Application Insights in the Azure Preview Portal</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[13 Feb 2015](http://blogs.msdn.com/b/visualstudioalm/archive/2015/02/13/announcing-limited-preview-for-visual-studio-online-code-search.aspx)</td>
            <td>Limited preview for Code Search</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[29 Jan 2015](http://azure.microsoft.com/updates/application-insights-support-for-windows-phone-and-windows-store/)</td>
            <td>Application Insights support for Windows Phone and Windows Store Applications</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="4">[27 Jan 2015](2015/jan-27-team-services.md)</td>
            <td>Basic license upgraded</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Reordering on the Taskboard</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Unparented Tasks on the Taskboard</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Inline editing on the Kanban board</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>[15 Jan 2015](http://blogs.msdn.com/b/bharry/archive/2015/01/15/visual-studio-online-iso-27001-certification-and-european-model-clauses.aspx)</td>
            <td>VS Online ISO 27001 Certification</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="6">[17 Dec 2014](2014/dec-17-team-services.md)</td>
            <td>Quick code editing</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Filtering on backlogs and queries</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Sprint backlog and task board improvements</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>New integrations: Slack and Azuqua</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Preview APIs for adding and updating files in source control</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>CodeLens for Visual Studio Team Services</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="2">11 Dec 2014</td>
            <td>[Application Insights Status Monitor and SDK updates](http://azure.microsoft.com/updates/application-insights-status-monitor-and-sdk-updated/)</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[Application Insights includes telemetry export and segmentation editing](http://azure.microsoft.com/updates/application-insights-adds-telemetry-export-and-segmentation-chart-editing/)</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="5">[2 Dec 2014](2014/dec-02-team-services.md)</td>
            <td>Identity control and avatars</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Pull Request improvements</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Taskboard changes</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Kanban board persisted column headers</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Sharing personal queries</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>[12 Nov 2014](2014/dec-02-team-services.md)</td>
            <td>Release Management Preview as VSTS service</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="7">[4 Nov 2014](2014/nov-04-team-services.md)</td>
            <td>Bugs on the backlog</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>Test execution charts</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>Recent test results</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>Preview Markdown and HTML files in Code Explorer</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Browse link dialog</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>REST batch support</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Third-party OAuth scopes</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td rowspan="3">[28 Oct 2014](2014/oct-28-team-services.md)</td>
            <td>European Datacenter</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>VSTS REST API version 1.0 is here</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Service hooks is out of preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="2">[14 Oct 2014](2014/oct-14-team-services.md)</td>
            <td>Test artifacts as work items</td>
            <td></td><td>[2013.3](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>Copy and paste query results</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td rowspan="3">[23 Sep 2014](2014/sep-23-team-services.md)</td>
            <td>Maximizing text area fields</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>Navigating to links</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>Work item performance improvements</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td rowspan="6">[4 Sep 2014](2014/sep-04-team-services.md)</td>
            <td>Work Item query improvements</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>Quick search through tree controls</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>Longer trend charts</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Test Cases related to Test Suites</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>WIT REST API v1.2</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Event and resource versioning within service hooks</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[27 Aug 2014](2014/aug-27-team-services.md)</td>
            <td>A license for Stakeholders</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td rowspan="2">[18 Aug 2014](2014/aug-18-team-services.md)</td>
            <td>Project Welcome pages</td>
            <td></td><td>[2015](http://go.microsoft.com/fwlink/?LinkId=533008)</td>
        </tr>
        <tr>
            <td>Tagging support in the Test Hub</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td rowspan="5">[21 Jul 2014](2014/jul-21-team-services.md)</td>
            <td>Using corporate identities with existing accounts</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Viewing existing projects in the Azure Preview Portal</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Trend charts + aggregation</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>Test Hub added to the Advanced License</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Deleting your account</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="3">[1 Jul 2014](2014/jul-01-team-services.md)</td>
            <td>Hiding work in progress on the backlog</td>
            <td></td><td>[2013.3](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>Full Screen on the backlog and boards</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>Move to position on the backlog</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td>[10 Jun 2014](2014/jun-10-team-services.md)</td>
            <td>Pull Requests</td>
            <td></td><td>[2013.4](http://go.microsoft.com/fwlink/?LinkId=510319)</td>
        </tr>
        <tr>
            <td rowspan="3">[20 May 2014](2014/may-20-team-services.md)</td>
            <td>Using corporate identities</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Copy/Paste shared parameter data between VS Online and Excel</td>
            <td></td><td>[2013.3](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>End of data export period</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="2">[12 May 2014](2014/may-12-team-services.md)</td>
            <td>Integrate with Visual Studio Team Services</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Service Migration with OpsHub</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="3">[3 Apr 2014](2014/apr-03-team-services.md)</td>
            <td>General Availability of Visual Studio Team Services</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Application Insights Limited Preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Shared Parameters for Test Cases</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td rowspan="2">[18 Mar 2014](2014/mar-18-team-services.md)</td>
            <td>Getting started with Application Insights</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Search across your application trace logs</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="3">[28 Feb 2014](2014/feb-28-team-services.md)</td>
            <td>Build support for Java code managed in Git</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>Java JDK, Ant, and Maven libraries preinstalled in hosted build</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Maven support for TF version control projects</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="2">[10 Feb 2014](2014/feb-10-team-services.md)</td>
            <td>Exporting test artifacts</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>New “create tags” permission</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td rowspan="3">[22 Jan 2014](2014/jan-22-team-services.md)</td>
            <td>Querying tags</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>Removing weekends from the Burndown</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>Configurable CFD dates</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td rowspan="3">[11 Dec 2013](2013/dec-11-team-services.md)</td>
            <td>Application Insights – Response Stacked Distribution</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Application Insights – Windows Store App support</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Asynchronous backlogs</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td rowspan="3">[13 Nov 2013](2013/nov-13-team-services.md)</td>
            <td>Commercial preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Application Insights limited preview</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Live editing of Windows Azure sites</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[8 Nov 2013](2013/nov-08-team-services.md)</td>
            <td>Work item chart pinning</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>[21 Oct 2013](2013/oct-21-team-services.md)</td>
            <td>New account and project pages</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>[17 Oct 2013](2013/oct-17-team-services.md)</td>
            <td>Build images updated to VS 2013</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="3">[30 Sep 2013](2013/sep-30-team-services.md)</td>
            <td>New languages supported for code syntax highlighting</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>Color picking in charts</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td>Column options for the test case grid view</td>
            <td></td><td>[2013.2](http://go.microsoft.com/fwlink/?LinkId=392762)</td>
        </tr>
        <tr>
            <td rowspan="4">[9 Sep 2013](2013/sep-09-team-services.md)</td>
            <td>Work item charts</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Bulk edit of test cases</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Delete a team project</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Work items from code discussion</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>[19 Aug 2013](2013/aug-19-team-services.md)</td>
            <td>Improved code commenting</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="3">[29 Jul 2013](2013/jul-29-team-services.md)</td>
            <td>Improved permission management for Git repos</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Team room Git push events</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Deleting team rooms</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="2">[10 Jul 2013](2013/jul-10-team-services.md)</td>
            <td>Backlog mapping</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Team permission changes</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="3">[26 Jun 2013](2013/jun-26-team-services.md)</td>
            <td>Windows 8.1 support in hosted build</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Paste images into work items in the web</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Open Microsoft Test Runner from web</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="3">[19 Jun 2013](2013/jun-19-team-services.md)</td>
            <td>Agile Portfolio Management updates – view filter and quick decompose</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Open MTM from web</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Admin panel color change</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="5">[3 Jun 2013](2013/jun-03-team-services.md)</td>
            <td>Agile Portfolio Management</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Lightweight code commenting</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Team Room</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Create/modify test plans through Web UI</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Cloud load testing</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="3">[28 May 2013](2013/may-28-team-services.md)</td>
            <td>Build IaaS</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Git alerts</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Backlog updates – name changed to "backlogs" and now backlogs show all items until they reach the completed state</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="4">[13 May 2013](2013/may-13-team-services.md)</td>
            <td>Work item colors based on process template settings</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Usability updates – icon updates and sentence casing</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Navigation updates in Web UI, including ability to view past iterations</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Git multi-repo support</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="2">[22 Mar 2013](2013/mar-22-team-services.md)</td>
            <td>Branches view for Git</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>TCM Improvements – bulk edit test step pass/fail, double click test step reorder, hover over inline images</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="4">[4 Mar 2013](2013/mar-04-team-services.md)</td>
            <td>Customizable Kanban columns</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>TCM improvements – edit test steps when running tests</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Annotate/Blame for version control</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Scheduled builds for Git-based projects</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td rowspan="4">[11 Feb 2013](2013/feb-11-team-services.md)</td>
            <td>Continuous Integration for Git</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>TCM improvements – view test step attachments when running tests, add attachments when running tests, pause and resume tests in Test Runner</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>WIT tagging cleanup for unused tags</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Download as Zip for version control</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td rowspan="3">[30 Jan 2013](2013/jan-30-team-services.md)</td>
            <td>Work item tagging</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Git support</td>
            <td></td><td>[2013](http://go.microsoft.com/fwlink/p/?LinkId=306566)</td>
        </tr>
        <tr>
            <td>Test Hub in Web UI</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>[21 Jan 2013](2013/jan-21-team-services.md)</td>
            <td>Changeset context menu in Web UI</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>[9 Jan 2013](2013/jan-09-team-services.md)</td>
            <td>Account rename of Team Foundation Service account</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="5">[7 Jan 2013](2013/jan-07-team-services.md)</td>
            <td>Email work items from backlog</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Search for changesets by ID in Web UI</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Full screen mode for code viewing</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Inline diff of images in version control</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Collapsible left pane in all left panels in Web UI</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td rowspan="3">[10 Dec 2012](2012/dec-10-team-services.md)</td>
            <td>Renamed Source to Code in Web UI hub</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Code Explorer updates in Web UI</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Hosted build updates for Azure SDK 1.8, TypeScript 0.8.1, and VS 2012 Update 1</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="2">[19 Nov 2012](2012/nov-19-team-services.md)</td>
            <td>Send work items in email from TFS web access</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Build file counts and sizes in summary reports</td>
            <td></td><td>[2012.2](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>[31 Oct 2012](2012/oct-31-team-services.md)</td>
            <td>General availability of Team Foundation Service</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[29 Oct 2012](2012/oct-29-team-services.md)</td>
            <td>Build drops</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>[8 Oct 2012](2012/oct-08-team-services.md)</td>
            <td>400 character server paths for version control</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td rowspan="3">[17 Sep 2012](2012/sep-17-team-services.md)</td>
            <td>Drag/drop in sprint planning to assign to person or activity</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Web usability improvements (tabs and UX modified, collapse left pane in work items)</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Process template updates to Agile 6.1 and Scrum 2.1</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td rowspan="4">[27 Aug 2012](2012/aug-27-team-services.md)</td>
            <td>Improved source browsing, viewing, and searching</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Improved source "diff"</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Hosted builds of SharePoint components</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td>Basic authentication support</td>
            <td></td><td>N/A</td>
        </tr>
        <tr>
            <td rowspan="3">[13 Aug 2012](2012/aug-13-team-services.md)</td>
            <td>Kanban board</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Cumulative Flow Diagram</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>WIP Limits</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td rowspan="2">[6 Aug 2012](2012/aug-06-team-services.md)</td>
            <td>Drag/drop in task board to move tasks between people and stories</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
        <tr>
            <td>Azure continuous deployment summary report</td>
            <td></td><td>[2012.1](https://www.microsoft.com/download/details.aspx?id=39305)</td>
        </tr>
    </tbody>
</table>

### Server Build Numbers

<table>
<thead>
        <tr>
          <th>Release</th>
          <th>Date</th>
          <th>Build</th>
        </tr>
</thead>
<tbody>
        <tr>
          <td>[2018.3](https://docs.microsoft.com/visualstudio/releasenotes/tfs2018-update3)</td>
          <td>Sep. 12, 2018</td>
          <td>16.131.28106.2</td>
        </tr>
        <tr>
          <td>[2018.2](https://docs.microsoft.com/visualstudio/releasenotes/tfs2018-update2)</td>
          <td>May 7, 2018</td>
          <td>16.131.27701.1</td>
        </tr>
         <tr>
          <td>[2018.1](https://aka.ms/tfs2018-update1)</td>
          <td>Feb. 20, 2018</td>
          <td>16.122.27409.2</td>
        </tr>
        <tr>
          <td>[2018 RTW](https://aka.ms/relnotes-tfs2018)</td>
          <td>Nov. 15, 2017</td>
          <td>16.122.27102.1</td>
        </tr>
        <tr>
          <td>[2017.3.1](https://aka.ms/relnotes-tfs2017-update3)</td>
          <td>Feb. 28, 2018</td>
          <td>15.117.27414.0</td>
        </tr>
        <tr>
          <td>[2017.3](https://aka.ms/relnotes-tfs2017-update3)</td>
          <td>Nov. 6, 2017</td>
          <td>15.117.27024.0</td>
        </tr>
        <tr>
          <td>[2017.2](https://aka.ms/relnotes-tfs2017-update2)</td>
          <td>Jul. 24, 2017</td>
          <td>15.117.26714.00</td>
        </tr>
        <tr>
          <td>2017.1</td>
          <td>Mar. 9, 2017 (Mar. 7, 2017)</td>
          <td>15.112.26307.00
          (15.112.26301.0)[*](https://visualstudio.microsoft.com/news/releasenotes/tfs2017-update1#build-doesnt-work-when-upgrading-to-tfs-2017-update-1-build-15112263010-from-tfs-2013-or-earlier)</td>
        </tr>
        <tr>
          <td>[2017.0.1](https://aka.ms/tfs2017-relnotes)</td>
          <td>Feb. 28, 2018</td>
          <td>15.105.27412.0</td>
        </tr>        
        <tr>
          <td>2017 RTM</td>
          <td>Nov. 16, 2016</td>
          <td>15.105.25910.00</td>
        </tr>
        <tr>
          <td>[2015.4.1](https://aka.ms/tfs2015-update4-vs)</td>
          <td>Feb. 28, 2018</td>
          <td>14.114.26412.0</td>
        </tr>
        <tr>
          <td>2015.4</td>
          <td>Apr. 11, 2017</td>
          <td>14.114.26403.0</td>
        </tr>
        <tr>
          <td>2015.3</td>
          <td>Jun. 27, 2016</td>
          <td>14.102.25423.00</td>
        </tr>
        <tr>
          <td>2015.2</td>
          <td>May 5, 2016</td>
          <td>14.95.25122.00</td>
        </tr>
        <tr />
        <tr>
          <td>2015.1</td>
          <td>Nov. 30, 2015</td>
          <td>14.0.24720.00</td>
        </tr>
        <tr>
          <td>2015 RTM</td>
          <td>Aug. 6, 2015</td>
          <td>14.0.23128.00*</td>
        </tr>
        <tr>
          <td>2013.5</td>
          <td>Jul. 19, 2015</td>
          <td>12.0.40629.0</td>
        </tr>
        <tr>
          <td>2013.4</td>
          <td>Nov. 11, 2014</td>
          <td>12.0.31101.00</td>
        </tr>
        <tr>
          <td>2013.3</td>
          <td>Aug. 4, 2014</td>
          <td>12.0.30723.00</td>
        </tr>
        <tr>
          <td>2013.2</td>
          <td>Apr. 2, 2014</td>
          <td>12.0.30324.00</td>
        </tr>
        <tr>
          <td>2013 RTM</td>
          <td>Nov. 18, 2013</td>
          <td>12.0.21005.01</td>
        </tr>
        <tr>
          <td>2012.4</td>
          <td>Nov. 12, 2013</td>
          <td>11.0.61030.0</td>
        </tr>
        <tr>
          <td>2012.3</td>
          <td>Jun. 26, 2013</td>
          <td>11.0.60610.01</td>
        </tr>
        <tr>
          <td>2012.2</td>
          <td>Apr. 4, 2013</td>
          <td>11.0.60315.01</td>
        </tr>
        <tr>
          <td>2012.1</td>
          <td>Dec. 12, 2012</td>
          <td>11.0.51106.01</td>
        </tr>
        <tr>
          <td>2012 RTM</td>
          <td>Aug. 15, 2012</td>
          <td>11.0.50727.01</td>
        </tr>
      </tbody>
    </table>
* TFS 2015 RTM has multiple build numbers, due to the componentized nature of its build and packaging process. The number of the installer, which will show up in Add/Remove Programs, is 14.0.23129.01. The number of the majority of the assemblies, which will show up in the TFS Administration Console, is 14.0.23128.00.

## Feedback

We would love to hear what you think about these features. Report any problems through [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html) or provide a suggestion on [UserVoice](https://visualstudio.uservoice.com/forums/330519-team-services) if you have ideas on things you’d like to see us prioritize.

> [!div class="mx-imgBorder"]
![Make a suggestion](_img/help-make-a-suggestion.png)

You can also get advice and your questions answered by the community on [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops).
