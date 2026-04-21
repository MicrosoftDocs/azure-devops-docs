---
title: Tools and Clients that Connect to Azure DevOps
titleSuffix: Azure DevOps
description: Review tools that support connecting to Azure DevOps, including browser and command-line tools, tools for developers and Office integration, and more.
ms.subservice: azure-devops-new-user
ms.assetid: 3836C81D-6E0A-46B5-8D1D-20E973E4F373
ms.author: chcomley
author: chcomley
ms.topic: concept-article
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 04/03/2026
#customer intent: As a developer, I want to understand the tools and clients that support connecting to Azure DevOps, so I can use the appropriate tools for my development.
---

# Tools and clients that connect to Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure DevOps works with a broad set of tools and clients:

- **IDEs** — Visual Studio, Visual Studio Code, IntelliJ, and Android Studio
- **Office** — Excel for bulk work-item editing
- **Browsers** — Web portal and Marketplace extensions
- **Command line** — Azure DevOps CLI, Git, TFVC, and TCM
- **Integrations** — Slack, Microsoft Teams, ServiceNow, and Jenkins
- **APIs** — REST APIs for custom extensions and automation

[!INCLUDE [ai-assistance-callout](../includes/ai-assistance-callout.md)]

## Desktop client developer tools

The following IDEs and editors connect to Azure DevOps for source control, work tracking, build, and test operations. To download Visual Studio, see the [Visual Studio Downloads page](https://visualstudio.microsoft.com/downloads/). To compare editions, see [Compare Visual Studio offerings](https://visualstudio.microsoft.com/vs/compare/).

| Tool | Description |
|------|-------------|
| **Visual Studio Community** | Free, full-featured IDE for students, open-source contributors, and individual developers. |
| **Visual Studio Professional** | Development tools and services for individual developers and small teams. |
| **Visual Studio Enterprise** | End-to-end tools for teams of any size, including advanced debugging, testing, and DevOps integration. |
| **[Visual Studio Code](https://code.visualstudio.com/docs)** | Free, open-source code editor with extensions for Git repositories on Azure DevOps. |
| **[IntelliJ / Android Studio](https://plugins.jetbrains.com/plugin/7981)** | Free Azure DevOps plugin for JetBrains IDEs. Supports Git and TFVC repositories. |

To get started with client libraries, see [Client library samples](../integrate/get-started/client-libraries/samples.md).

### Visual Studio source control

Visual Studio provides two source control interfaces for Azure DevOps:

- **Git experience** — Starting with Visual Studio 2019 version 16.8, the **Git** menu is the default for Git repositories. It provides quick access to commits, branches, remotes, and repository management. For more information, see [Git experience in Visual Studio](/visualstudio/version-control/git-with-visual-studio).
- **Team Explorer** — Connects to Azure DevOps projects for source control, work items, and builds. Supports both Git and TFVC repositories. TFVC source control requires Team Explorer. For more information, see [Work in Team Explorer](work-team-explorer.md).

For a feature comparison, see [Side-by-side comparison of Git and Team Explorer](/visualstudio/version-control/git-team-explorer-feature-comparison).

## Office integration tools

To bulk-add and modify work items with Azure DevOps, use [Microsoft Office Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md). Install the [Azure DevOps Office Integration 2019](https://visualstudio.microsoft.com/downloads/#other-family) add-in to enable the integration.

## Testing tools

The following tools support manual testing, exploratory testing, and feedback:

- [**Azure Test Plans**](../test/overview.md): Browser-based test management for planned manual tests, user acceptance testing, exploratory testing, and stakeholder feedback. Requires Basic + Test Plans access. For a free 30-day trial, see [Try Azure Test Plans](../organizations/billing/try-additional-features-vs.md).
- [**Test & Feedback extension**](../test/perform-exploratory-tests.md): Browser extension for Chrome, Edge, and Firefox that supports exploratory testing of web apps. Capture screenshots, screen recordings, and rich diagnostic data, then file bugs directly. Free for Stakeholder access users.

## Browser-based web tools

### Web portal

The Azure DevOps web portal provides access to source control, work tracking, builds, test plans, and more. For a summary, see [Essential services](services.md). New features deploy every three weeks for Azure DevOps Services and quarterly for Azure DevOps Server.

The following browsers are supported:

| Browser | Version | Azure DevOps support |
|---------|---------|----------------------|
| **Microsoft Edge, Firefox, Chrome** | Most recent | Azure DevOps Services, Azure DevOps Server 2019 and later |
| **Safari (Mac)** | 14.1 and later | Azure DevOps Services, Azure DevOps Server 2019 and later |
| **Internet Explorer** | 11 and later | Azure DevOps Server 2019 and 2020 only |

For more information, see [Web portal navigation](../project/navigation/index.md).

### Search extensions

Azure DevOps includes the following search capabilities, available as preinstalled extensions for Azure DevOps Services and as installable extensions for Azure DevOps Server:

- [**Code Search**](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search): Search across all repositories and projects in an organization or collection. Find implementation examples, browse definitions, and locate error text.
- [**Work Item Search**](https://marketplace.visualstudio.com/items?itemName=ms.vss-workitem-search): Search across all work item fields over all projects. Use inline filters on any field to narrow results quickly.

Find more extensions in the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/azuredevops).

## Command-line tools

The following command-line tools support code development and administrative tasks:

- [Azure DevOps CLI (`az devops`)](../cli/quick-reference.md) — manage projects, pipelines, repos, and more from the command line
- [Git commands](../repos/git/command-prompt.md) — work with Git repositories
- [TFVC commands](../repos/tfvc/use-team-foundation-version-control-commands.md) — work with TFVC repositories
- [TCM commands (`tcm.exe`)](../test/test-case-managment-reference.md) — manage test plans, suites, and runs (deprecated for Azure DevOps Services and Server 2020+)
- [Security permissions (`az devops security`)](../organizations/security/manage-tokens-namespaces.md) — manage security tokens and namespaces (Azure DevOps Services only)
- [witAdmin](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md) — customize work item types, fields, and process configuration

## Third-party integrations

Azure DevOps integrates with the following tools for notifications, change management, and continuous deployment:

| Service | Integrated tools | References |
|---------|-----------------|------------|
| **Azure Boards** | Slack, Microsoft Teams | [Azure Boards with Slack](../boards/integrations/boards-slack.md), [Azure Boards with Microsoft Teams](../boards/integrations/boards-teams.md) |
| **Azure Repos** | Slack, Microsoft Teams | [Azure Repos with Slack](../repos/integrations/repos-slack.md), [Azure Repos with Microsoft Teams](../repos/integrations/repos-teams.md) |
| **Azure Pipelines** | Slack, Microsoft Teams, ServiceNow, Jenkins | [Azure Pipelines with Slack](../pipelines/integrations/slack.md), [Azure DevOps integration with Microsoft Teams](../service-hooks/services/teams.md), [Change management with ServiceNow](../pipelines/release/approvals/servicenow.md), [Continuous deployment from Jenkins](../pipelines/release/artifacts.md#jenkins) |

## Marketplace extensions

Extensions are add-ons that customize and extend Azure DevOps. You can install extensions from the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/azuredevops), or build and publish your own using the [Azure DevOps extension SDK](../extend/overview.md) and [REST APIs](#rest-apis).

## REST APIs

Azure DevOps provides REST APIs for programmatic access to projects, work items, builds, repos, and more. Use them to build custom integrations, automate workflows, or extend Azure DevOps functionality. For more information, see [REST API overview](/rest/api/azure/devops).

## Related content

- [A tour of the services in Azure DevOps](services.md)
- [Software development roles](roles.md)
- [Azure DevOps Pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps data protection overview](../organizations/security/data-protection.md)
